// src/services/blogApi.ts
// 🔥 COMPLETE FIX: String replacement BEFORE JSON.parse + Allow unauthenticated blog viewing

import axios, { type AxiosInstance } from 'axios';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  increment,
  serverTimestamp,
  addDoc,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, auth } from '../../lib/firebase/client';
import type { BlogPost, CreateBlogPostInput, Comment } from '../types/blog';

// ============================================================================
// CONFIGURATION
// ============================================================================

const IS_CHINESE_VERSION = import.meta.env.VITE_IS_CHINESE_VERSION === 'true';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://afreshtrip.cn/web';
const DEFAULT_AVATAR = '/assets/default-avatar.png';

console.log('🌍 Blog API Mode:', IS_CHINESE_VERSION ? 'Chinese Backend' : 'Firebase');
if (IS_CHINESE_VERSION) {
  console.log('🔗 API Base URL:', API_BASE_URL);
}

// ============================================================================
// HTTP CLIENT
// ============================================================================

class HttpClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      headers: { 'Content-Type': 'application/json' },
      timeout: 30000,
      
      // ✅ CRITICAL FIX: Replace large numbers with quoted strings BEFORE JSON parsing!
      transformResponse: [(data) => {
        if (typeof data === 'string') {
          try {
            // 🔥 STEP 1: Replace large number IDs with quoted strings in the RAW JSON
            // This regex finds: "blId": 123456789 and replaces with: "blId": "123456789"
            const fixedData = data.replace(
              /"(blId|userId|categoryId|commentId|replyToCommentId)":\s*(\d{10,})/g,
              '"$1":"$2"'
            );
            
            // 🔥 STEP 2: NOW parse the JSON (numbers are already strings!)
            const parsed = JSON.parse(fixedData);
            
            console.log('✅ JSON parsed with ID preservation');
            return parsed;
          } catch (e) {
            console.error('❌ JSON parse error:', e);
            return data;
          }
        }
        return data;
      }],
    });

    // ✅ Make Authorization optional - allow unauthenticated requests
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('custom_auth_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          console.log('ℹ️ No auth token - proceeding with unauthenticated request');
        }
        console.log('📤', config.method?.toUpperCase(), config.url);
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.client.interceptors.response.use(
      (response) => {
        console.log('📥 Response:', response.data);
        return response.data;
      },
      (error) => {
        console.error('❌ HTTP Error:', error.response?.data || error.message);
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string): Promise<T> {
    return this.client.get(url);
  }

  async post<T>(url: string, data?: any): Promise<T> {
    return this.client.post(url, data);
  }

  async put<T>(url: string, data?: any): Promise<T> {
    return this.client.put(url, data);
  }

  async delete<T>(url: string): Promise<T> {
    return this.client.delete(url);
  }

  async postFormData<T>(url: string, formData: FormData): Promise<T> {
    return this.client.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}

const httpClient = new HttpClient(API_BASE_URL);

// ============================================================================
// CONSTANTS
// ============================================================================

const BLOG_COLLECTION = 'blogs';

// Category mapping
const getCategoryName = (categoryId: number | string): string => {
  const id = typeof categoryId === 'string' ? parseInt(categoryId) : categoryId;
  
  const categories: Record<number, string> = {
    1: 'Adventure',
    2: 'Culture',
    3: 'Food',
    4: 'Travel',
    5: 'Technology',
    6: 'Lifestyle'
  };
  
  return categories[id] || 'General';
};

// Slug generation
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
};

// Timestamp conversion
const timestampToString = (timestamp: any): string => {
  if (!timestamp) return new Date().toISOString();
  if (typeof timestamp === 'string') return timestamp;
  if (timestamp.toDate) return timestamp.toDate().toISOString();
  if (timestamp.seconds) return new Date(timestamp.seconds * 1000).toISOString();
  return new Date().toISOString();
};


/**
 * Extract text preview from TipTap JSON or HTML content
 * @param content - TipTap JSON or HTML string
 * @returns First 80 characters of text, or "No description available"
 */
export const extractContentPreview = (content: string | null): string => {
  if (!content) return 'No description available';

  try {
    // Try parsing as TipTap JSON
    const json = JSON.parse(content);
    
    // Extract text from TipTap document
    let textContent = '';
    
    const extractText = (node: any): void => {
      if (!node) return;
      
      if (node.type === 'text' && node.text) {
        textContent += node.text + ' ';
      }
      
      if (node.content && Array.isArray(node.content)) {
        for (const child of node.content) {
          extractText(child);
          if (textContent.length > 100) break;
        }
      }
    };

    if (json.content && Array.isArray(json.content)) {
      for (const node of json.content) {
        extractText(node);
        if (textContent.length > 100) break;
      }
    }

    textContent = textContent.trim();
    if (textContent.length > 80) {
      const truncated = textContent.substring(0, 80);
      const lastSpace = truncated.lastIndexOf(' ');
      return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
    }

    return textContent || 'No description available';
  } catch (err) {
    try {
      const text = content.replace(/<[^>]*>/g, '').trim();
      if (text.length > 80) {
        return text.substring(0, 80) + '...';
      }
      return text || 'No description available';
    } catch {
      return 'No description available';
    }
  }
};

/**
 * Map blog list API response to BlogPost type
 * ✅ Includes ALL required BlogPost properties
 */
export const mapBlogListResponse = (records: any[]): BlogPost[] => {
  return records.map((post: any): BlogPost => {
    const contentPreview = extractContentPreview(post.content);
    
    const images = post.images && Array.isArray(post.images) 
      ? post.images.map((img: any) => img.imgUrl || img)
      : (post.coverUrl ? [post.coverUrl] : []);
    
    // ✅ Return complete BlogPost object with ALL required fields
    return {
      id: String(post.blId),
      title: post.title || '',
      excerpt: contentPreview,  // ✅ Extracted preview
      content: post.content || '',
      category: String(post.categoryId || post.category || ''),
      isPublished: post.isPublished || false,
      slug: post.slug || null,
      likes: post.like || 0,
      views: post.play || 0,
      
      // ✅ CRITICAL: Map isLike field correctly
      isLiked: post.isLike === '1' || post.isLike === 1 ? true : false,
      
      images: images,
      videos: post.videos || [],  // ✅ Add videos field
      
      author: {
        id: String(post.userId),
        name: post.author?.nickname || 'Anonymous',
        avatar: post.author?.avatar || null
      },
      
      date: post.createdAt || new Date().toISOString(),
      
      // ✅ Add timestamp fields
      createdAt: post.createdAt || new Date().toISOString(),
      updatedAt: post.updatedAt || new Date().toISOString(),
      
      isSaved: false,
      likedBy: []
    };
  });
};





// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

// ✅ Extract images from TipTap JSON content
const extractImagesFromContent = (content: string | undefined): string[] => {
  if (!content) return [];

  try {
    const json = JSON.parse(content);
    const images: string[] = [];

    const extractFromNode = (node: any) => {
      if (!node) return;

      // Check if this is an image node
      if (node.type === 'image' && node.attrs?.src) {
        images.push(node.attrs.src);
      }

      // Recursively check child nodes
      if (node.content && Array.isArray(node.content)) {
        node.content.forEach(extractFromNode);
      }
    };

    // Start extraction from root
    extractFromNode(json);
    
    console.log('📸 Extracted', images.length, 'images from content');
    return images;
  } catch (err) {
    console.warn('⚠️ Could not extract images from content:', err);
    return [];
  }
};

// ✅ Check if user can edit post
export const canEditPost = (post: BlogPost, currentUserId?: string): boolean => {
  if (!currentUserId) return false;
  
  // Convert both to strings for comparison
  const postUserId = String(post.userId);
  const currentUserIdStr = String(currentUserId);
  
  console.log('🔐 Checking edit permission:');
  console.log('   Post userId:', postUserId);
  console.log('   Current userId:', currentUserIdStr);
  console.log('   Can edit:', postUserId === currentUserIdStr);
  
  return postUserId === currentUserIdStr;
};

// ============================================================================
// MEDIA UPLOAD
// ============================================================================

export const uploadBlogMedia = async (file: File): Promise<string> => {
  console.log('📤 Uploading media:', file.name);

  if (IS_CHINESE_VERSION) {
    try {
      const formData = new FormData();
      formData.append('file', file);

      interface UploadResponse {
        code: number;
        msg: string;
        data: {
          id: number;
          name: string;
          path: string;
        } | string; // Can be object or string
      }

      const response = await httpClient.postFormData<UploadResponse>('/file/upload', formData);

      if (response.code !== 200) {
        throw new Error(response.msg || 'Upload failed');
      }

      console.log('✅ Media uploaded:', response.data);
      
      // ✅ FIX: Construct full URL from response
      if (typeof response.data === 'object') {
        // Backend returns {id, name, path}, construct full URL
        const fullUrl = `${API_BASE_URL}/file/view/${response.data.id}`;
        console.log('🔗 Full image URL:', fullUrl);
        return fullUrl;
      } else {
        // Backend returns URL string directly
        return response.data;
      }
    } catch (error) {
      console.error('❌ Upload error:', error);
      throw error;
    }
  } else {
    // Firebase upload
    const user = auth.currentUser;
    if (!user) throw new Error('Must be logged in to upload');

    const storageRef = ref(storage, `blogs/${user.uid}/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    console.log('✅ Media uploaded to Firebase:', url);
    return url;
  }
};



// Add these functions to your blogApi.ts file

// ============================================================================
// LIKE FUNCTIONALITY
// ============================================================================

/**
 * Toggle like on a blog post
 * POST /blog/likeBlog with type parameter
 */
export const togglePostLike = async (
  postId: string,
  currentIsLiked: boolean
): Promise<{ likes: number; isLiked: boolean }> => {
  console.log('❤️ Toggling like for blog:', postId, 'Current isLiked:', currentIsLiked);

  const user = auth.currentUser;
  if (!user) {
    throw new Error('User must be logged in to like posts');
  }

  try {
    const docRef = doc(db, BLOG_COLLECTION, postId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('Post not found');
    }

    const data = docSnap.data();
    const likedBy = data.likedBy || [];
    const currentLikes = data.likes || 0;

    if (currentIsLiked) {
      // ✅ UNLIKE: Remove user from likedBy array and decrement likes
      const newLikedBy = likedBy.filter((id: string) => id !== user.uid);
      
      await updateDoc(docRef, {
        likes: Math.max(0, currentLikes - 1),
        likedBy: newLikedBy,
        updatedAt: serverTimestamp()
      });

      console.log('✅ Post unliked! Likes:', Math.max(0, currentLikes - 1));
      
      return {
        likes: Math.max(0, currentLikes - 1),
        isLiked: false
      };
    } else {
      // ✅ LIKE: Add user to likedBy array and increment likes
      const newLikedBy = [...likedBy, user.uid];
      
      await updateDoc(docRef, {
        likes: currentLikes + 1,
        likedBy: newLikedBy,
        updatedAt: serverTimestamp()
      });

      console.log('✅ Post liked! Likes:', currentLikes + 1);
      
      return {
        likes: currentLikes + 1,
        isLiked: true
      };
    }
  } catch (error: any) {
    console.error('❌ Error toggling like:', error);
    throw error;
  }
};


// ============================================================================
// VIEW TRACKING
// ============================================================================

/**
 * Increment view count for a blog post
 * POST /blog/viewBlog
 */
export const incrementPostViews = async (blId: string): Promise<{ views: number }> => {
  console.log('👀 Incrementing views for blog:', blId);

  if (IS_CHINESE_VERSION) {
    try {
      interface ViewResponse {
        code: number;
        msg: string;
        data?: {
          play?: number;
          views?: number;
        };
      }

      const response = await httpClient.post<ViewResponse>('/blog/viewBlog', {
        blId: blId
      });

      if (response.code === 200) {
        console.log('✅ View recorded successfully');
        // Backend returns "play" field which is views
        const views = response.data?.play || response.data?.views || 0;
        return { views };
      }

      throw new Error(response.msg || 'Failed to record view');
    } catch (error: any) {
      console.error('❌ Error recording view:', error);
      // Don't throw - view tracking should not break the page
      return { views: 0 };
    }
  } else {
    // ✅ Firebase implementation
    try {
      const docRef = doc(db, BLOG_COLLECTION, blId);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        console.warn('⚠️ Post not found for view tracking');
        return { views: 0 };
      }

      const currentViews = docSnap.data().views || 0;
      
      // Increment views
      await updateDoc(docRef, {
        views: increment(1)
      });

      console.log('✅ View incremented from', currentViews, 'to', currentViews + 1);
      return { views: currentViews + 1 };
    } catch (error: any) {
      console.error('❌ Error incrementing views:', error);
      // Don't throw - view tracking should not break the page
      return { views: 0 };
    }
  }
};

// ============================================================================
// COMMENT NESTING - Organize flat comments into nested structure
// ============================================================================

/**
 * Convert flat comment array from API into nested reply structure
 * 
 * Backend returns comments as flat list with replyToCommentId field
 * This function organizes them into a nested structure where replies 
 * are grouped under their parent comments
 */
export const nestCommentReplies = (comments: any[]): Comment[] => {
  if (!comments || comments.length === 0) {
    console.log('📝 No comments to organize');
    return [];
  }

  console.log('📝 Organizing', comments.length, 'comments into nested structure');
  console.log('📋 Sample comments:', comments.slice(0, 2).map(c => ({
    id: c.id,
    replyToCommentId: c.replyToCommentId
  })));

  // ✅ Declare mappedComments in outer scope so it can be returned in catch
  let mappedComments: Comment[] = [];

  try {
    // Step 1: Map to proper Comment objects with all required fields
    mappedComments = comments.map((c: any) => {
      const commentId = String(c.id || c.commentId);
      return {
        id: commentId,
        content: c.content || '',
        author: {
          id: String(c.author?.id || c.userId || commentId),  // ✅ ADD ID
          name: c.author?.nickname || 'Anonymous',
          avatar: c.author?.avatar || DEFAULT_AVATAR
        },
        date: c.createdAt || new Date().toISOString(),
        likes: c.likes || 0,
        isLiked: c.isLiked || false,
        replyToCommentId: c.replyToCommentId, // Keep original for reference
        replies: [] as Comment[]
      };
    });

    // Step 2: Separate top-level comments and replies
    const topLevelComments = mappedComments.filter(c => {
      const replyToId = (comments.find(raw => String(raw.id || raw.commentId) === c.id) as any)?.replyToCommentId;
      return replyToId === 0 || replyToId === null || replyToId === undefined;
    });

    const replies = mappedComments.filter(c => {
      const replyToId = (comments.find(raw => String(raw.id || raw.commentId) === c.id) as any)?.replyToCommentId;
      return replyToId && replyToId !== 0 && replyToId !== null && replyToId !== undefined;
    });

    console.log('📊 Found', topLevelComments.length, 'top-level comments and', replies.length, 'replies');
    if (replies.length > 0) {
      console.log('📋 Sample replies:', replies.slice(0, 2).map(r => ({
        id: r.id,
        replyToCommentId: (comments.find(c => String(c.id) === r.id) as any)?.replyToCommentId
      })));
    }

    // Step 3: Build nested structure by grouping replies under their parent comments
    const result: Comment[] = topLevelComments.map(topLevel => {
      const topLevelIdAsNumber = parseInt(topLevel.id);

      const nestedReplies = replies
        .filter(reply => {
          const original = comments.find(c => String(c.id || c.commentId) === reply.id);
          const isReplyToThis = original?.replyToCommentId === topLevelIdAsNumber;
          return isReplyToThis;
        })
        .map(reply => ({
          ...reply,
          replies: [] as Comment[]
        }));

      if (nestedReplies.length > 0) {
        console.log('✅ Comment', topLevel.id, 'has', nestedReplies.length, 'replies:', nestedReplies.map(r => r.id).join(', '));
      }

      return {
        ...topLevel,
        replies: nestedReplies
      };
    });

    console.log('✅ Successfully organized comments into', result.length, 'top-level comments with nested replies');
    return result;
  } catch (error) {
    console.error('❌ Error nesting comments:', error);
    // Return mappedComments as fallback (empty array if mapping failed)
    return mappedComments;
  }
};

// ============================================================================
// COMMENT LIKES
// ============================================================================

/**
 * Toggle like on a comment
 * POST /comment/like or /comment/unlike
 */
// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Process image URLs before saving to backend
 * - Remove blob URLs (client-side only)
 * - Convert object responses to proper URLs
 * - Keep only valid server URLs
 */
const processImageUrls = (images: any[]): string[] => {
  if (!Array.isArray(images)) return [];
  
  const processed = images
    .map(img => {
      // Handle object response from upload
      if (typeof img === 'object' && img !== null) {
        if (img.id) {
          // Upload response object: {id, name, path}
          return `${API_BASE_URL}/file/view/${img.id}`;
        }
        if (img.imgUrl) {
          // Backend response object: {imgUrl: "..."}
          return img.imgUrl;
        }
        return null;
      }
      
      // Handle string URLs
      if (typeof img === 'string') {
        // Skip blob URLs (client-side temporary URLs)
        if (img.startsWith('blob:')) {
          console.warn('⚠️ Skipping blob URL:', img);
          return null;
        }
        // Keep server URLs
        return img;
      }
      
      return null;
    })
    .filter(Boolean) as string[];
  
  console.log('🔄 Processed images:', images.length, '→', processed.length);
  return processed;
};

// ============================================================================
// CREATE BLOG POST
// ============================================================================

export const createBlogPost = async (input: CreateBlogPostInput): Promise<string> => {
  console.log('✨ Creating blog post...');
  console.log('📝 Title:', input.title);
  console.log('🖼️ Images:', input.images?.length || 0);

  if (IS_CHINESE_VERSION) {
    try {
      interface SaveBlogResponse {
        code: number;
        msg: string;
        data?: { blId: string; [key: string]: any };
      }

      // ✅ CRITICAL: Send imageUrl and videoUrl as plain string arrays
      const requestBody = {
        title: input.title,
        content: input.content,
        excerpt: input.excerpt || '',
        categoryId: input.categoryId,
        imageUrl: input.images || [],           // ✅ Plain array of strings
        videoUrl: input.videos || [],           // ✅ Plain array of strings
        coverUrl: input.images?.[0] || '',
      };

      console.log('📤 POST /blog/saveBlog:', requestBody);

      const response = await httpClient.post<SaveBlogResponse>('/blog/saveBlog', requestBody);

      if (response.code !== 200) {
        throw new Error(response.msg || 'Failed to create post');
      }

      // ✅ Case 1: Backend returns blId in response (ideal case)
      if (response.data && response.data.blId) {
        const postId = String(response.data.blId);
        console.log('✅ Post created with ID (from response):', postId);
        console.log('   Response blId:', response.data.blId);
        return postId;
      }

      // ✅ Case 2: Backend returns 200 but no blId
      // Refetch the latest posts - new post should be first in list
      console.log('⚠️ No blId in response, fetching latest posts...');
      
      interface FetchResponse {
        code: number;
        msg: string;
        data: any[];
      }

      const fetchResponse = await httpClient.get<FetchResponse>('/blog/my?current=1&size=100');

      if (fetchResponse.code === 200 && fetchResponse.data && fetchResponse.data.length > 0) {
        // First post in list should be the newly created one (most recent)
        const firstPost = fetchResponse.data[0];
        const postId = String(firstPost.blId || firstPost.id);
        
        console.log('✅ Post created with ID (from refetch):', postId);
        console.log('   Post title:', firstPost.title);
        console.log('   Post images:', firstPost.imageUrl?.length || 0);
        
        return postId;
      }

      throw new Error('Failed to retrieve created post ID');
    } catch (error: any) {
      console.error('❌ Create post error:', error);
      throw error;
    }
  } else {
    // Firebase implementation
    const user = auth.currentUser;
    if (!user) throw new Error('User must be authenticated');

    const categoryName = getCategoryName(input.categoryId);
    const slug = generateSlug(input.title);

    const postData = {
      title: input.title,
      content: input.content,
      excerpt: input.excerpt || '',
      category: categoryName,
      categoryId: input.categoryId,
      tags: input.tags || [],
      images: input.images || [],
      videos: input.videos || [],
      slug: slug,
      isPublished: input.isPublished,
      views: 0,
      likes: 0,
      likedBy: [],
      author: {
        id: user.uid,
        name: user.displayName || 'Anonymous',
        avatar: user.photoURL || DEFAULT_AVATAR
      },
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      date: new Date().toISOString()
    };

    const docRef = await addDoc(collection(db, 'blogs'), postData);
    console.log('✅ Post created with ID:', docRef.id);
    return docRef.id;
  }
};


// ============================================================================
// UPDATE BLOG POST
// ============================================================================

export const updateBlogPost = async (
  postId: string,
  updates: Partial<CreateBlogPostInput>
): Promise<void> => {
  console.log('📝 Updating post:', postId);

  if (IS_CHINESE_VERSION) {
    try {
      interface SaveBlogResponse {
        code: number;
        msg: string;
        data?: any;
      }

      const requestBody: any = {
        blId: postId,               // ✅ required for update
        title: updates.title,
        content: updates.content,
        excerpt: updates.excerpt,
        categoryId: updates.categoryId,
      };

      /**
       * ✅ IMPORTANT:
       * Must match CREATE behavior exactly
       * imageUrl = string[]
       */
      if (updates.images) {
        const validImages = updates.images.filter(
          url => url && !url.startsWith('blob:')
        );

        requestBody.imageUrl = validImages;      // ✅ STRING ARRAY
        requestBody.coverUrl = validImages[0] || '';
      }

      if (updates.videos) {
        requestBody.videoUrl = updates.videos;   // ✅ STRING ARRAY
      }

      console.log('📤 POST /blog/saveBlog (Update):', requestBody);

      const response = await httpClient.post<SaveBlogResponse>(
        '/blog/saveBlog',
        requestBody
      );

      if (response.code !== 200) {
        throw new Error(response.msg || 'Update failed');
      }

      console.log('✅ Post updated (images replaced)');
    } catch (error) {
      console.error('❌ Update post error:', error);
      throw error;
    }
  } 
  // 🌍 Firebase path unchanged
  else {
    const docRef = doc(db, 'blogs', postId);
    const updateData: any = { ...updates };

    if (updates.categoryId) {
      updateData.category = getCategoryName(updates.categoryId);
    }

    if (updates.title) {
      updateData.slug = generateSlug(updates.title);
    }

    updateData.updatedAt = serverTimestamp();
    await updateDoc(docRef, updateData);

    console.log('✅ Post updated');
  }
};


// ============================================================================
// DELETE BLOG POST
// ============================================================================

export const deleteBlogPost = async (postId: string): Promise<void> => {
  console.log('🗑️ Deleting post:', postId);

  if (IS_CHINESE_VERSION) {
    try {
      interface DeleteResponse {
        code: number;
        msg: string;
      }

      const response = await httpClient.delete<DeleteResponse>(`/blog/${postId}`);

      if (response.code !== 200) {
        throw new Error(response.msg || 'Delete failed');
      }

      console.log('✅ Post deleted');
    } catch (error) {
      console.error('❌ Delete error:', error);
      throw error;
    }
  } else {
    const docRef = doc(db, BLOG_COLLECTION, postId);
    await deleteDoc(docRef);
    console.log('✅ Post deleted');
  }
};

// ============================================================================
// GET ALL BLOG POSTS (✅ WORKS WITHOUT AUTH!)
// ============================================================================

// ============================================================================
// GET BLOG CATEGORIES
// ============================================================================

export const getBlogCategories = async (): Promise<Array<{ id: number; name: string }>> => {
  console.log('📂 Fetching blog categories...');

  if (IS_CHINESE_VERSION) {
    try {
      interface CategoryResponse {
        code: number;
        msg: string;
        data: Array<{ id: number; name: string }>;
      }

      const response = await httpClient.post<CategoryResponse>('/blog/categoryList', {});

      if (response.code !== 200) {
        console.error('❌ Failed to fetch categories:', response.msg);
        return [];
      }

      if (response.data && Array.isArray(response.data)) {
        console.log('✅ Fetched', response.data.length, 'categories');
        return response.data;
      }

      return [];
    } catch (error: any) {
      console.error('❌ Error fetching categories:', error);
      return [];
    }
  } else {
    // Firebase fallback
    return [
      { id: 0, name: 'ALL blogs' },
      { id: 1, name: 'Adventure' },
      { id: 2, name: 'Culture' },
      { id: 3, name: 'Food' }
    ];
  }
};

// ============================================================================
// SEARCH/FILTER BLOG POSTS (POST /blog/my)
// ============================================================================

export const searchBlogPosts = async (
  current: number = 1,
  size: number = 10,
  categoryId: number = 0,
  title: string = ''
): Promise<{ posts: BlogPost[]; total: number }> => {
  console.log('🔍 Searching blog posts...', { current, size, categoryId, title });

  if (IS_CHINESE_VERSION) {
    try {
      interface BlogListResponse {
        code: number;
        msg: string;
        data: {
          records: any[];
          total: number;
        };
      }

      const token = localStorage.getItem('custom_auth_token');

      // ✅ Use POST with body for /blog/my (now supports search/filter)
      const requestBody = {
        current,
        size,
        categoryId: categoryId === 0 ? null : categoryId,  // 0 means "all"
        title: title || null
      };

      console.log('📤 POST /blog/my:', requestBody);

      const response = await httpClient.post<BlogListResponse>('/blog/my', requestBody);

      if (response.code !== 200) {
        console.error('❌ Failed to fetch blogs:', response.msg);
        return { posts: [], total: 0 };
      }

      if (response.data && response.data.records) {
        const posts: BlogPost[] = response.data.records.map((record: any) => {
          console.log('🔍 Mapping post - blId:', record.blId, 'Type:', typeof record.blId);
          
          // ✅ Get images from imageUrl OR extract from content
          let images: string[] = [];
          
          if (Array.isArray(record.imageUrl) && record.imageUrl.length > 0) {
            images = record.imageUrl.map((img: any) =>
              typeof img === 'object' && img.imgUrl ? img.imgUrl : img
            );
          }
          
          if (images.length === 0 && record.content) {
            const contentImages = extractImagesFromContent(record.content);
            if (contentImages.length > 0) {
              images = contentImages;
            }
          }

          let videos: string[] = [];
          if (Array.isArray(record.videoUrl) && record.videoUrl.length > 0) {
            videos = record.videoUrl.map((vid: any) =>
              typeof vid === 'object' && vid.viUrl ? vid.viUrl : vid
            );
          }
          
          return {
            id: String(record.blId),
            userId: record.userId ? String(record.userId) : undefined,
            title: record.title || '',
            content: record.content || '',
            excerpt: record.excerpt || '',
            images: images,
            videos: videos,
            author: {
              id: record.userId ? String(record.userId) : '',
              name: record.author?.nickname || 'Anonymous',
              avatar: record.author?.avatar || DEFAULT_AVATAR
            },
            date: record.createdAt || new Date().toISOString(),
            views: record.play || 0,
            likes: record.like || 0,
            isLiked: false,
            likedBy: [],
            isSaved: false,
            category: getCategoryName(record.categoryId || 1),
            categoryId: record.categoryId || 1,
            tags: record.tags || [],
            slug: record.slug || generateSlug(record.title || ''),
            isPublished: record.isPublished !== undefined ? record.isPublished : true,
            createdAt: record.createdAt || new Date().toISOString(),
            updatedAt: record.updatedAt || record.createdAt || new Date().toISOString()
          };
        });

        console.log('✅ Fetched', posts.length, 'posts, Total:', response.data.total);
        return { posts, total: response.data.total };
      }

      return { posts: [], total: 0 };
    } catch (error: any) {
      console.error('❌ Search posts error:', error);
      return { posts: [], total: 0 };
    }
  } else {
    // Firebase fallback
    return { posts: [], total: 0 };
  }
};

// ============================================================================
// GET ALL BLOG POSTS (wrapper for backward compatibility)
// ============================================================================

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  console.log('📖 Fetching all published blog posts...');

  if (IS_CHINESE_VERSION) {
    try {
      // ✅ Use searchBlogPosts with default params to get all posts
      const { posts } = await searchBlogPosts(1, 100, 0, '');
      return posts;
    } catch (error: any) {
      console.error('❌ Fetch posts error:', error);
      return [];
    }
  } else {
    // Firebase
    const blogsRef = collection(db, BLOG_COLLECTION);
    const q = query(
      blogsRef,
      where('isPublished', '==', true),
      orderBy('createdAt', 'desc')
    );

    const snapshot = await getDocs(q);
    const currentUserId = auth.currentUser?.uid;

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        userId: data.author.id,
        title: data.title,
        content: data.content,
        excerpt: data.excerpt,
        images: data.images || [],
        videos: data.videos || [],
        author: data.author,
        date: timestampToString(data.createdAt),
        views: data.views || 0,
        likes: data.likes || 0,
        isLiked: currentUserId ? (data.likedBy || []).includes(currentUserId) : false,
        likedBy: data.likedBy || [],
        isSaved: false,
        category: data.category,
        categoryId: data.categoryId,
        tags: data.tags || [],
        slug: data.slug,
        isPublished: data.isPublished,
        createdAt: timestampToString(data.createdAt),
        updatedAt: timestampToString(data.updatedAt)
      };
    });
  }
};
;

// ============================================================================
// GET BLOG POST BY ID
// ============================================================================

export const getBlogPostById = async (postId: string): Promise<BlogPost> => {
  console.log('📖 Fetching post:', postId);

  if (IS_CHINESE_VERSION) {
    try {
      interface BlogDetailResponse {
        code: number;
        msg: string;
        data: any;
      }

      // ✅ Use correct endpoint
      const response = await httpClient.get<BlogDetailResponse>(`/blog/get/${postId}`);

      if (response.code !== 200) {
        throw new Error(response.msg || '博客为空!');
      }

      const record = response.data;
      
      console.log('✅ Post fetched:', record.title);
      console.log('🔍 Received blId:', record.blId, 'Type:', typeof record.blId);

      // ✅ Get images from imageUrl OR extract from content
      let images: string[] = [];
      
      if (Array.isArray(record.imageUrl) && record.imageUrl.length > 0) {
        images = record.imageUrl.map((img: any) =>
          typeof img === 'object' && img.imgUrl ? img.imgUrl : img
        );
        console.log('✅ Got images from imageUrl field:', images.length);
      }
      
      // If imageUrl is empty/null, extract from content
      if (images.length === 0 && record.content) {
        const contentImages = extractImagesFromContent(record.content);
        if (contentImages.length > 0) {
          images = contentImages;
          console.log('✅ Extracted images from content:', images.length);
        }
      }

      // Get videos similarly
      let videos: string[] = [];
      if (Array.isArray(record.videoUrl) && record.videoUrl.length > 0) {
        videos = record.videoUrl.map((vid: any) =>
          typeof vid === 'object' && vid.viUrl ? vid.viUrl : vid
        );
      }

      return {
        // ✅ ID is already a string from transformResponse!
        id: String(record.blId),
        userId: record.userId ? String(record.userId) : '',
        title: record.title || '',
        content: record.content || '',
        excerpt: record.excerpt || '',
        images: images,  // ✅ Now includes both imageUrl field AND extracted content
        videos: videos,
        author: {
          id: record.userId ? String(record.userId) : '',
          name: record.author?.nickname || 'Anonymous',
          avatar: record.author?.avatar || DEFAULT_AVATAR
        },
        date: record.createdAt,
        views: record.play || 0,
        likes: record.like || 0,
        isLiked: false,
        likedBy: [],
        isSaved: false,
        category: getCategoryName(record.categoryId || 1),
        categoryId: record.categoryId || 1,
        tags: record.tags || [],
        slug: record.slug || generateSlug(record.title || ''),
        isPublished: record.isPublished !== undefined ? record.isPublished : true,
        createdAt: record.createdAt,
        updatedAt: record.updatedAt,
        // ✅ Include comments if available
        comments: record.comment || []
      } as BlogPost & { comments: Comment[] };
    } catch (error: any) {
      console.error('❌ Fetch post error:', error);
      throw error;
    }
  } else {
    // Firebase
    const docRef = doc(db, BLOG_COLLECTION, postId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('Post not found');
    }

    const data = docSnap.data();
    const currentUserId = auth.currentUser?.uid;

    // ✅ Fetch comments for this post
    const comments = await getPostComments(postId);

    return {
      id: docSnap.id,
      userId: data.author.id,
      title: data.title,
      content: data.content,
      excerpt: data.excerpt,
      images: data.images || [],
      videos: data.videos || [],
      author: data.author,
      date: timestampToString(data.createdAt),
      views: data.views || 0,
      likes: data.likes || 0,
      isLiked: currentUserId ? (data.likedBy || []).includes(currentUserId) : false,
      likedBy: data.likedBy || [],
      isSaved: false,
      category: data.category,
      categoryId: data.categoryId,
      tags: data.tags || [],
      slug: data.slug,
      isPublished: data.isPublished,
      createdAt: timestampToString(data.createdAt),
      updatedAt: timestampToString(data.updatedAt),
      comments: comments
    };
  }
};

// ============================================================================
// GET USER BLOG POSTS
// ============================================================================

export const getUserBlogPosts = async (): Promise<BlogPost[]> => {
  console.log('📖 Fetching user blog posts...');

  if (IS_CHINESE_VERSION) {
    return getAllBlogPosts(); // Already uses /blog/my when authenticated
  } else {
    // Firebase
    const user = auth.currentUser;
    if (!user) {
      console.log('⚠️ No user logged in');
      return [];
    }

    const blogsRef = collection(db, BLOG_COLLECTION);
    const q = query(
      blogsRef,
      where('author.id', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const snapshot = await getDocs(q);

    const posts: BlogPost[] = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        userId: data.author.id,
        title: data.title,
        content: data.content,
        excerpt: data.excerpt,
        images: data.images || [],
        videos: data.videos || [],
        author: data.author,
        date: timestampToString(data.createdAt),
        views: data.views || 0,
        likes: data.likes || 0,
        isLiked: (data.likedBy || []).includes(user.uid),
        likedBy: data.likedBy || [],
        isSaved: false,
        category: data.category,
        categoryId: data.categoryId,
        tags: data.tags || [],
        slug: data.slug,
        isPublished: data.isPublished,
        createdAt: timestampToString(data.createdAt),
        updatedAt: timestampToString(data.updatedAt)
      };
    });

    console.log('✅ Found', posts.length, 'user posts');
    return posts;
  }
};

// ============================================================================
// GET POSTS BY CATEGORY
// ============================================================================

export const getBlogPostsByCategory = async (categorySlug: string): Promise<BlogPost[]> => {
  console.log('📂 Fetching posts by category:', categorySlug);
  
  const allPosts = await getAllBlogPosts();
  return allPosts.filter(post => post.category.toLowerCase() === categorySlug.toLowerCase());
};

// ============================================================================
// TOGGLE LIKE (Firebase version)
// ============================================================================

export const toggleLike = async (postId: string): Promise<{ likes: number; isLiked: boolean }> => {
  console.log('❤️ Toggling like for post:', postId);

  if (IS_CHINESE_VERSION) {
    // Chinese version uses togglePostLike instead
    throw new Error('Use togglePostLike for Chinese version');
  } else {
    // Firebase
    const user = auth.currentUser;
    if (!user) throw new Error('Must be logged in');

    const docRef = doc(db, BLOG_COLLECTION, postId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('Post not found');
    }

    const data = docSnap.data();
    const likedBy = data.likedBy || [];
    const isCurrentlyLiked = likedBy.includes(user.uid);

    if (isCurrentlyLiked) {
      // Unlike
      await updateDoc(docRef, {
        likes: increment(-1),
        likedBy: likedBy.filter((id: string) => id !== user.uid)
      });
      return {
        likes: (data.likes || 1) - 1,
        isLiked: false
      };
    } else {
      // Like
      await updateDoc(docRef, {
        likes: increment(1),
        likedBy: [...likedBy, user.uid]
      });
      return {
        likes: (data.likes || 0) + 1,
        isLiked: true
      };
    }
  }
};

// ============================================================================
// COMMENTS COLLECTION
// ============================================================================

const COMMENTS_COLLECTION = 'comments';

/**
 * Get all comments for a blog post with proper nesting
 * Handles replies recursively
 */
export const getPostComments = async (postId: string): Promise<Comment[]> => {
  console.log('📝 Fetching comments for post:', postId);

  if (IS_CHINESE_VERSION) {
    return [];
  } else {
    try {
      // ✅ SIMPLIFIED: No WHERE replyToId - avoids index requirement!
      // Get ALL comments for this post, filter client-side
      const commentsRef = collection(db, COMMENTS_COLLECTION);
      const q = query(
        commentsRef,
        where('postId', '==', postId),
        orderBy('createdAt', 'desc')  // ✅ Only this ORDER BY - no index needed!
      );

      const snapshot = await getDocs(q);
      const currentUserId = auth.currentUser?.uid;

      // ✅ Filter top-level comments client-side (no WHERE replyToId)
      const topLevelDocs = snapshot.docs.filter(doc => {
        const data = doc.data();
        return !data.replyToId;  // Top-level only
      });

      // ✅ Map comments and fetch their replies
      const comments: Comment[] = await Promise.all(
        topLevelDocs.map(async (doc) => {
          const data = doc.data();
          const replies = await getCommentReplies(postId, doc.id, currentUserId);

          return {
            id: doc.id,
            author: {
              id: data.authorId,
              name: data.authorName,
              avatar: data.authorAvatar || DEFAULT_AVATAR
            },
            content: data.content,
            date: timestampToString(data.createdAt),
            likes: data.likes || 0,
            isLiked: currentUserId ? (data.likedBy || []).includes(currentUserId) : false,
            replies: replies
          };
        })
      );

      console.log('✅ Found', comments.length, 'top-level comments');
      return comments;
    } catch (error: any) {
      console.error('❌ Error fetching comments:', error);
      
      // ✅ Helpful error message
      if (error.message?.includes('requires an index')) {
        console.error('💡 Tip: Index is being created automatically. This may take 1-5 minutes.');
        console.error('💡 Meanwhile, you can use Option 3 from the fix guide.');
      }
      
      throw error;
    }
  }
};

/**
 * Get replies for a comment (recursive)
 */
const getCommentReplies = async (
  postId: string,
  parentCommentId: string,
  currentUserId: string | undefined
): Promise<Comment[]> => {
  try {
    const commentsRef = collection(db, COMMENTS_COLLECTION);
    const q = query(
      commentsRef,
      where('postId', '==', postId),
      where('replyToId', '==', parentCommentId),
      orderBy('createdAt', 'asc')
    );

    const snapshot = await getDocs(q);

    const replies: Comment[] = await Promise.all(
      snapshot.docs.map(async (doc) => {
        const data = doc.data();
        // ✅ Recursively fetch nested replies
        const nestedReplies = await getCommentReplies(postId, doc.id, currentUserId);

        return {
          id: doc.id,
          author: {
            id: data.authorId,
            name: data.authorName,
            avatar: data.authorAvatar || DEFAULT_AVATAR
          },
          content: data.content,
          date: timestampToString(data.createdAt),
          likes: data.likes || 0,
          isLiked: currentUserId ? (data.likedBy || []).includes(currentUserId) : false,
          replies: nestedReplies
        };
      })
    );

    return replies;
  } catch (error: any) {
    console.error('❌ Error fetching replies:', error);
    return [];
  }
};

// ============================================================================
// ADD COMMENT
// ============================================================================

export const addComment = async (postId: string, content: string, replyToId?: string): Promise<Comment> => {
  console.log('💬 Adding comment to post:', postId, 'Reply to:', replyToId || 'parent');

  const user = auth.currentUser;
  if (!user) {
    throw new Error('Must be logged in to comment');
  }

  if (IS_CHINESE_VERSION) {
    try {
      interface CommentResponse {
        code: number;
        msg: string;
        data: any;
      }

      const requestBody = {
        blId: postId,
        content: content,
        replyToCommentId: replyToId || undefined
      };

      console.log('📤 Sending comment request:', requestBody);

      const response = await httpClient.post<CommentResponse>('/comment/addComment', requestBody);

      if (response.code !== 200) {
        throw new Error(response.msg || 'Failed to add comment');
      }

      const newComment: Comment = {
        id: Date.now().toString(),
        author: {
          id: response.data?.userId || user.uid,
          name: response.data?.userName || user.displayName || 'Anonymous',
          avatar: response.data?.userAvatar || DEFAULT_AVATAR
        },
        content,
        date: new Date().toISOString(),
        likes: 0,
        isLiked: false,
        replies: []
      };

      console.log('✅ Comment added successfully!');
      return newComment;
    } catch (error: any) {
      console.error('❌ Add comment error:', error);
      throw error;
    }
  } else {
    // ✅ Firebase implementation
    try {
      const commentsRef = collection(db, COMMENTS_COLLECTION);

      const commentDoc = await addDoc(commentsRef, {
        postId: postId,
        authorId: user.uid,
        authorName: user.displayName || 'Anonymous',
        authorAvatar: user.photoURL || DEFAULT_AVATAR,
        content: content,
        replyToId: replyToId || null,
        likes: 0,
        likedBy: [],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

      console.log('✅ Comment created with ID:', commentDoc.id);

      const newComment: Comment = {
        id: commentDoc.id,
        author: {
          id: user.uid,
          name: user.displayName || 'Anonymous',
          avatar: user.photoURL || DEFAULT_AVATAR
        },
        content: content,
        date: new Date().toISOString(),
        likes: 0,
        isLiked: false,
        replies: []
      };

      return newComment;
    } catch (error: any) {
      console.error('❌ Error adding comment:', error);
      throw error;
    }
  }
};

// ============================================================================
// TOGGLE COMMENT LIKE
// ============================================================================

export const toggleCommentLike = async (commentId: string): Promise<boolean> => {
  console.log('❤️ Toggling like for comment:', commentId);

  const user = auth.currentUser;
  if (!user) {
    throw new Error('Must be logged in to like comments');
  }

  if (IS_CHINESE_VERSION) {
    // Mock for Chinese version
    return true;
  } else {
    // ✅ Firebase implementation
    try {
      const commentRef = doc(db, COMMENTS_COLLECTION, commentId);
      const commentSnap = await getDoc(commentRef);

      if (!commentSnap.exists()) {
        throw new Error('Comment not found');
      }

      const data = commentSnap.data();
      const likedBy = data.likedBy || [];
      const isLiked = likedBy.includes(user.uid);

      if (isLiked) {
        // Unlike
        await updateDoc(commentRef, {
          likes: increment(-1),
          likedBy: likedBy.filter((id: string) => id !== user.uid),
          updatedAt: serverTimestamp()
        });
        console.log('✅ Comment unliked');
        return false;
      } else {
        // Like
        await updateDoc(commentRef, {
          likes: increment(1),
          likedBy: [...likedBy, user.uid],
          updatedAt: serverTimestamp()
        });
        console.log('✅ Comment liked');
        return true;
      }
    } catch (error: any) {
      console.error('❌ Error toggling comment like:', error);
      throw error;
    }
  }
};

// ============================================================================
// DELETE COMMENT (BONUS - for moderation)
// ============================================================================

export const deleteComment = async (commentId: string): Promise<void> => {
  console.log('🗑️ Deleting comment:', commentId);

  const user = auth.currentUser;
  if (!user) {
    throw new Error('Must be logged in to delete comments');
  }

  if (IS_CHINESE_VERSION) {
    // Not needed for Chinese version
    return;
  } else {
    try {
      const commentRef = doc(db, COMMENTS_COLLECTION, commentId);
      const commentSnap = await getDoc(commentRef);

      if (!commentSnap.exists()) {
        throw new Error('Comment not found');
      }

      const data = commentSnap.data();
      
      // ✅ Only comment author or admin can delete
      if (data.authorId !== user.uid) {
        throw new Error('You can only delete your own comments');
      }

      // ✅ Delete comment and all its replies
      await deleteDoc(commentRef);

      // Delete all replies to this comment
      const repliesRef = collection(db, COMMENTS_COLLECTION);
      const q = query(
        repliesRef,
        where('replyToId', '==', commentId)
      );

      const repliesSnap = await getDocs(q);
      for (const replyDoc of repliesSnap.docs) {
        await deleteDoc(replyDoc.ref);
      }

      console.log('✅ Comment and replies deleted');
    } catch (error: any) {
      console.error('❌ Error deleting comment:', error);
      throw error;
    }
  }
};

// ============================================================================
// EXPORT ALIASES FOR COMPATIBILITY
// ============================================================================

// ✅ Alias for getBlogPostById - use this name in components
export const getBlogPost = getBlogPostById;