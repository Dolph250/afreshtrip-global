// src/pages/BlogDetails.tsx - WITH SLUG URL FIX
// ✅ Auto-updates URL to include slug when blog loads

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';
import LoadingSkeleton from '../components/LoadingSkeleton';
import TableOfContents from '../components/TableOfContents';
import SocialShareButtons from '../components/SocialShareButtons';
import CommentSection from '../components/CommentSection';
import Breadcrumbs from '../components/Breadcrumbs';
import BlogPostActions from '../components/BlogPostActions';
import BlogPostMeta from '../components/BlogPostMeta';
import AuthorBio from '../components/AuthorBio';
import RelatedPosts from '../components/RelatedPosts';
import Lightbox from '../components/Lightbox';
import BackToTopButton from '../components/BackToTopButton';
import { useAuth } from '../contexts/AuthContext';
import { useSnackbar } from '../contexts/SnackbarContext';
import { createSanitizedHtml } from '../utils/sanitizeHtml';
import { commentSchema, sanitizeText } from '../utils/validationSchemas';
import { i18nErrorHandler } from '../utils/i18nErrorHandler';
import {
  getBlogPost,
  incrementPostViews,
  togglePostLike,
  getPostComments,
  addComment,
  toggleCommentLike,
  deleteComment
} from '../services/blogApi';
import type { BlogPost, Comment } from '../types/blog';

// TipTap imports
import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import ImageExtension from '@tiptap/extension-image';
import LinkExtension from '@tiptap/extension-link';

const BlogDetails: React.FC = () => {
  const { id, slug } = useParams<{ id: string; slug?: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useAuth();
  const { showSuccess } = useSnackbar();
  
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isTogglingLike, setIsTogglingLike] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const hasRecordedView = useRef(false);

  const calculateReadingTime = (html: string) => {
    const wordsPerMinute = 200;
    const text = html.replace(/<[^>]*>/g, '').trim();
    const words = text.split(/\s+/).filter(w => w.length > 0).length;
    return Math.ceil(words / wordsPerMinute);
  };

  // ✅ FETCH BLOG POST
  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        console.error('❌ No blog ID in URL');
        navigate('/blog');
        return;
      }

      console.log('🔍 BlogDetails - Fetching post with ID:', id);

      try {
        setLoading(true);

        // ✅ Firebase: Use getBlogPost which includes comments
        const fetchedPost = await getBlogPost(id);
        
        console.log('✅ Post fetched:', fetchedPost.title);
        console.log('📊 Post stats - Views:', fetchedPost.views, 'Likes:', fetchedPost.likes);
        
        setPost(fetchedPost);
        setLikes(fetchedPost.likes || 0);
        setViews(fetchedPost.views || 0);
        setIsLiked(fetchedPost.isLiked || false);
        setIsSaved(fetchedPost.isSaved || false);

        // ✅ Update URL with slug if not present
        if (fetchedPost.slug && slug !== fetchedPost.slug) {
          console.log('🔗 Updating URL with slug:', fetchedPost.slug);
          navigate(`/blog/${id}/${fetchedPost.slug}`, { replace: true });
        }

        // ✅ Set comments from post data
        if (fetchedPost.comments) {
          setComments(fetchedPost.comments);
        }
        
        console.log('✅ Page fully loaded!');
      } catch (err) {
        console.error('❌ Error fetching blog post:', err);
        i18nErrorHandler.showErrorToUser(
          err,
          { component: 'BlogDetails', action: 'fetchPost' },
          [{
            label: t('common.retry'),
            onClick: () => window.location.reload(),
            style: 'primary'
          }],
          t.bind(t)
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, slug, navigate, t]);

  // ✅ RECORD VIEW ONCE ON PAGE LOAD
  useEffect(() => {
    const recordView = async () => {
      if (!id || hasRecordedView.current) {
        return;
      }

      hasRecordedView.current = true;

      try {
        console.log('👀 Recording page view for blog:', id);
        const { views: newViews } = await incrementPostViews(id);
        setViews(newViews);
        console.log('✅ View recorded! Total views:', newViews);
      } catch (error) {
        console.error('❌ Failed to record view:', error);
      }
    };

    recordView();
  }, [id]);

  // Extract headings for table of contents
  useEffect(() => {
    if (post && contentRef.current) {
      const headingElements = contentRef.current.querySelectorAll('h2, h3, h4');
      const extractedHeadings = Array.from(headingElements).map((heading, index) => ({
        id: `heading-${index}`,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.substring(1))
      }));
      setHeadings(extractedHeadings);
      setShowTableOfContents(extractedHeadings.length > 0);

      headingElements.forEach((heading, index) => {
        heading.id = `heading-${index}`;
      });
    }
  }, [post]);

  // Show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ HANDLE LIKE POST
  const handleLike = async () => {
    if (!post || !id) return;

    setIsTogglingLike(true);
    console.log('❤️ Toggling like for post:', id, 'Current isLiked:', isLiked);

    try {
      // ✅ togglePostLike returns { likes: number; isLiked: boolean }
      const result = await togglePostLike(id, isLiked);
      
      console.log('📊 Like result - isLiked:', result.isLiked, 'likes:', result.likes);
      
      // ✅ Destructure properly
      setIsLiked(result.isLiked);
      setLikes(result.likes);
      
      console.log('✅ Like toggled! New count:', result.likes);
      showSuccess(result.isLiked ? t('blog.liked') : t('blog.unliked'));
    } catch (error) {
      console.error('❌ Failed to toggle like:', error);
      i18nErrorHandler.showErrorToUser(
        error,
        { component: 'BlogDetails', action: 'toggleLike' },
        [],
        t.bind(t)
      );
    } finally {
      setIsTogglingLike(false);
    }
  };

  // Handle save
  const handleSave = () => {
    if (!post || !id) return;
    
    console.log('📌 Toggling save for post:', id);
    setIsSaved(!isSaved);
  };

  // ✅ HANDLE ADD COMMENT
  const handleAddComment = async (comment: string, replyToId?: string) => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (!id) {
      console.error('❌ No blog ID for comment');
      return;
    }

    console.log('💬 Adding comment to blog ID:', id);
    console.log('💬 Reply to:', replyToId || 'parent');

    try {
      const sanitizedComment = sanitizeText(comment);
      commentSchema.parse(sanitizedComment);

      const newComment = await addComment(id, sanitizedComment, replyToId);

      console.log('✅ Backend response:', newComment);

      if (replyToId) {
        setComments(prevComments => {
          return prevComments.map(c => {
            if (String(c.id) === String(replyToId)) {
              console.log('✅ Appending reply to comment:', c.id);
              return {
                ...c,
                replies: [...(c.replies || []), newComment]
              };
            }
            return c;
          });
        });
        console.log('✅ Reply added successfully!');
      } else {
        console.log('✅ Adding top-level comment with ID:', newComment.id);
        setComments(prevComments => [newComment, ...prevComments]);
        console.log('✅ Comment added successfully!');
      }

      showSuccess(t('blog.commentAdded', 'Comment added successfully!'));
    } catch (err: any) {
      console.error('❌ Failed to add comment:', err);
      i18nErrorHandler.showErrorToUser(
        err,
        { component: 'BlogDetails', action: 'addComment' },
        [],
        t.bind(t)
      );
    }
  };

  // ✅ HANDLE LIKE COMMENT
  const handleLikeComment = async (commentId: string) => {
    try {
      console.log('❤️ Toggling like for comment:', commentId);
      const isLiked = await toggleCommentLike(commentId);
      
      setComments(prevComments => updateCommentLikes(prevComments, commentId, isLiked));
      console.log('✅ Comment like toggled');
    } catch (err) {
      console.error('❌ Error liking comment:', err);
      i18nErrorHandler.showErrorToUser(
        err,
        { component: 'BlogDetails', action: 'likeComment' },
        [],
        t.bind(t)
      );
    }
  };

  // ✅ HANDLE DELETE COMMENT
  const handleDeleteComment = async (commentId: string) => {
    try {
      console.log('🗑️ Deleting comment:', commentId);
      await deleteComment(commentId);
      
      setComments(prevComments => {
        return prevComments.filter(c => c.id !== commentId);
      });
      
      console.log('✅ Comment deleted');
      showSuccess(t('blog.commentDeleted', 'Comment deleted successfully!'));
    } catch (err) {
      console.error('❌ Error deleting comment:', err);
      i18nErrorHandler.showErrorToUser(
        err,
        { component: 'BlogDetails', action: 'deleteComment' },
        [],
        t.bind(t)
      );
    }
  };

  // Helper to update comment likes recursively
  const updateCommentLikes = (comments: Comment[], commentId: string, isLiked: boolean): Comment[] => {
    return comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: isLiked ? comment.likes + 1 : comment.likes - 1,
          isLiked
        };
      }
      if (comment.replies) {
        return {
          ...comment,
          replies: updateCommentLikes(comment.replies, commentId, isLiked)
        };
      }
      return comment;
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) return <LoadingSkeleton />;
  if (!post) return null;

  const currentUrl = window.location.href;

  // Generate HTML from TipTap JSON
  const contentHtml = (() => {
    try {
      const json = JSON.parse(post.content);
      return generateHTML(json, [
        StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
        ImageExtension,
        LinkExtension.configure({ openOnClick: false }),
      ]);
    } catch {
      return post.content;
    }
  })();

  const readingTime = calculateReadingTime(contentHtml);

  return (
    <div className="min-h-screen bg-white">
      <Header showToolbar showNavLinks={false} />
      
      <Breadcrumbs
        items={[
          { label: t('common.home'), href: '/' },
          { label: t('blog.blog'), href: '/blog' },
          { label: post.title }
        ]}
      />

      <main className="px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <BlogPostActions
            onPrint={handlePrint}
            onLike={handleLike}
            onSave={handleSave}
            isLiked={isLiked}
            isSaved={isSaved}
            disabled={isTogglingLike}
          />

          <BlogPostMeta
            post={post}
            readingTime={readingTime}
            isLiked={isLiked}
            views={views}
            likes={likes}
          />

          {/* Images */}
          {post.images && post.images.length > 0 && (
            <ImageCarousel
              images={post.images}
              altPrefix={post.title}
              onImageClick={setLightboxImage}
              responsiveImages={true}
            />
          )}

          {/* Content and Table of Contents */}
          <div className={`grid gap-8 mt-8 ${showTableOfContents ? 'grid-cols-1 lg:grid-cols-4' : 'grid-cols-1'}`}>
            <div className={showTableOfContents ? 'lg:col-span-3' : ''}>
              <div
                ref={contentRef}
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={createSanitizedHtml(contentHtml)}
              />
            </div>

            {showTableOfContents && (
              <div className="lg:col-span-1">
                <TableOfContents headings={headings} />
              </div>
            )}
          </div>

          {/* Social Share */}
          <SocialShareButtons
            url={currentUrl}
            title={post.title}
            description={post.excerpt || ''}
          />

          <AuthorBio author={post.author} />

          {/* Comments Section with replies */}
          <CommentSection
            comments={comments}
            onAddComment={(comment, replyToId) => handleAddComment(comment, replyToId)}
            onLikeComment={handleLikeComment}
          />
        </div>
      </main>

      <Lightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      <BackToTopButton
        visible={showBackToTop}
        onClick={scrollToTop}
      />

      <Footer />
    </div>
  );
};

export default BlogDetails;