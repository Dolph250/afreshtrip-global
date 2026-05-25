import{c as xe,a as z,o as Dt,b as B,d as L,e as p,P as qo,m as pe,S as R,t as _,i as S,f as U,g as F,h as xs,j as ir,u as we,k as H,s as Hn,l as Vn,n as dt,p as A,q as ws,r as Dn,v as Le,w as $s,x as Lt,y as Rt,z as Cs,A as Ss,B as xn,F as ks,C as Kr,D as Kt,$ as _o,E as Es,G as Ms,H as j,I as Br,J as Ds,K as As,L as sr,M as Ts,N as Fs,O as zn,Q as Is,R as Ps,T as J,U as Os,V as Ls,W as qs}from"./index-h6YF0rN5.js";var _s=e=>e!=null,Rs=e=>e.filter(_s);function zs(e){return(...t)=>{for(const n of e)n&&n(...t)}}var E=e=>typeof e=="function"&&!e.length?e():e,jn=e=>Array.isArray(e)?e:e?[e]:[];function Ks(e,...t){return typeof e=="function"?e(...t):e}var Bs=H;function Ns(e,t,n,r){const o=e.length,s=t.length;let a=0;if(!s){for(;a<o;a++)n(e[a]);return}if(!o){for(;a<s;a++)r(t[a]);return}for(;a<s&&t[a]===e[a];a++);let l,i;t=t.slice(a),e=e.slice(a);for(l of t)e.includes(l)||r(l);for(i of e)t.includes(i)||n(i)}function Gs(e){const[t,n]=z(),r=e?.throw?(f,g)=>{throw n(f instanceof Error?f:new Error(g)),f}:(f,g)=>{n(f instanceof Error?f:new Error(g))},o=e?.api?Array.isArray(e.api)?e.api:[e.api]:[globalThis.localStorage].filter(Boolean),s=e?.prefix?`${e.prefix}.`:"",a=new Map,l=new Proxy({},{get(f,g){let h=a.get(g);h||(h=z(void 0,{equals:!1}),a.set(g,h)),h[0]();const y=o.reduce((m,v)=>{if(m!==null||!v)return m;try{return v.getItem(`${s}${g}`)}catch(x){return r(x,`Error reading ${s}${g} from ${v.name}`),null}},null);return y!==null&&e?.deserializer?e.deserializer(y,g,e.options):y}}),i=(f,g,h)=>{const y=e?.serializer?e.serializer(g,f,h??e.options):g,m=`${s}${f}`;o.forEach(x=>{try{x.getItem(m)!==y&&x.setItem(m,y)}catch(b){r(b,`Error setting ${s}${f} to ${y} in ${x.name}`)}});const v=a.get(f);v&&v[1]()},u=f=>o.forEach(g=>{try{g.removeItem(`${s}${f}`)}catch(h){r(h,`Error removing ${s}${f} from ${g.name}`)}}),d=()=>o.forEach(f=>{try{f.clear()}catch(g){r(g,`Error clearing ${f.name}`)}}),c=()=>{const f={},g=(h,y)=>{if(!f.hasOwnProperty(h)){const m=y&&e?.deserializer?e.deserializer(y,h,e.options):y;m&&(f[h]=m)}};return o.forEach(h=>{if(typeof h.getAll=="function"){let y;try{y=h.getAll()}catch(m){r(m,`Error getting all values from in ${h.name}`)}for(const m of y)g(m,y[m])}else{let y=0,m;try{for(;m=h.key(y++);)f.hasOwnProperty(m)||g(m,h.getItem(m))}catch(v){r(v,`Error getting all values from ${h.name}`)}}}),f};return e?.sync!==!1&&Dt(()=>{const f=g=>{let h=!1;o.forEach(y=>{try{y!==g.storageArea&&g.key&&g.newValue!==y.getItem(g.key)&&(g.newValue?y.setItem(g.key,g.newValue):y.removeItem(g.key),h=!0)}catch(m){r(m,`Error synching api ${y.name} from storage event (${g.key}=${g.newValue})`)}}),h&&g.key&&a.get(g.key)?.[1]()};"addEventListener"in globalThis?(globalThis.addEventListener("storage",f),H(()=>globalThis.removeEventListener("storage",f))):(o.forEach(g=>g.addEventListener?.("storage",f)),H(()=>o.forEach(g=>g.removeEventListener?.("storage",f))))}),[l,i,{clear:d,error:t,remove:u,toJSON:c}]}var Us=Gs,Hs=e=>(typeof e.clear=="function"||(e.clear=()=>{let t;for(;t=e.key(0);)e.removeItem(t)}),e),Nr=e=>{if(!e)return"";let t="";for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n];t+=r instanceof Date?`; ${n}=${r.toUTCString()}`:typeof r=="boolean"?`; ${n}`:`; ${n}=${r}`}return t},_e=Hs({_cookies:[globalThis.document,"cookie"],getItem:e=>_e._cookies[0][_e._cookies[1]].match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)")?.pop()??null,setItem:(e,t,n)=>{const r=_e.getItem(e);_e._cookies[0][_e._cookies[1]]=`${e}=${t}${Nr(n)}`;const o=Object.assign(new Event("storage"),{key:e,oldValue:r,newValue:t,url:globalThis.document.URL,storageArea:_e});window.dispatchEvent(o)},removeItem:e=>{_e._cookies[0][_e._cookies[1]]=`${e}=deleted${Nr({expires:new Date(0)})}`},key:e=>{let t=null,n=0;return _e._cookies[0][_e._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,(r,o)=>(!t&&o&&n++===e&&(t=o),"")),t},get length(){let e=0;return _e._cookies[0][_e._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,t=>(e+=t?1:0,"")),e}}),Vs=1024,Nt=796,Ro=700,js="bottom-right",Wn="bottom",Ws="system",Qs=!1,zo=500,Ys=500,Ko=500,Xs=Object.keys(Hn)[0],Gr=1,Zs=Object.keys(Vn)[0],Bo=xe({client:void 0,onlineManager:void 0,queryFlavor:"",version:"",shadowDOMTarget:void 0});function K(){return we(Bo)}var No=xe(void 0),Js=e=>{const[t,n]=z(null),r=()=>{const a=t();a!=null&&(a.close(),n(null))},o=(a,l)=>{if(t()!=null)return;const i=window.open("","TSQD-Devtools-Panel",`width=${a},height=${l},popup`);if(!i)throw new Error("Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.");i.document.head.innerHTML="",i.document.body.innerHTML="",xs(i.document),i.document.title="TanStack Query Devtools",i.document.body.style.margin="0",i.addEventListener("pagehide",()=>{e.setLocalStore("pip_open","false"),n(null)}),[...(K().shadowDOMTarget||document).styleSheets].forEach(u=>{try{const d=[...u.cssRules].map(h=>h.cssText).join(""),c=document.createElement("style"),f=u.ownerNode;let g="";f&&"id"in f&&(g=f.id),g&&c.setAttribute("id",g),c.textContent=d,i.document.head.appendChild(c)}catch{const c=document.createElement("link");if(u.href==null)return;c.rel="stylesheet",c.type=u.type,c.media=u.media.toString(),c.href=u.href,i.document.head.appendChild(c)}}),ir(["focusin","focusout","pointermove","keydown","pointerdown","pointerup","click","mousedown","input"],i.document),e.setLocalStore("pip_open","true"),n(i)};B(()=>{(e.localStore.pip_open??"false")==="true"&&!e.disabled&&o(Number(window.innerWidth),Number(e.localStore.height||Ys))}),B(()=>{const a=(K().shadowDOMTarget||document).querySelector("#_goober"),l=t();if(a&&l){const i=new MutationObserver(()=>{const u=(K().shadowDOMTarget||l.document).querySelector("#_goober");u&&(u.textContent=a.textContent)});i.observe(a,{childList:!0,subtree:!0,characterDataOldValue:!0}),H(()=>{i.disconnect()})}});const s=L(()=>({pipWindow:t(),requestPipWindow:o,closePipWindow:r,disabled:e.disabled??!1}));return p(No.Provider,{value:s,get children(){return e.children}})},ar=()=>L(()=>{const t=we(No);if(!t)throw new Error("usePiPWindow must be used within a PiPProvider");return t()}),Go=xe(()=>"dark");function $e(){return we(Go)}var Uo={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},ea=Object.keys(Uo).join("|"),ta=new RegExp(ea,"g");function na(e){return e.replace(ta,t=>Uo[t])}var Te={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function Ur(e,t,n){var r;if(n=n||{},n.threshold=(r=n.threshold)!=null?r:Te.MATCHES,!n.accessors){const a=Hr(e,t,n);return{rankedValue:e,rank:a,accessorIndex:-1,accessorThreshold:n.threshold,passed:a>=n.threshold}}const o=sa(e,n.accessors),s={rankedValue:e,rank:Te.NO_MATCH,accessorIndex:-1,accessorThreshold:n.threshold,passed:!1};for(let a=0;a<o.length;a++){const l=o[a];let i=Hr(l.itemValue,t,n);const{minRanking:u,maxRanking:d,threshold:c=n.threshold}=l.attributes;i<u&&i>=Te.MATCHES?i=u:i>d&&(i=d),i=Math.min(i,d),i>=c&&i>s.rank&&(s.rank=i,s.passed=!0,s.accessorIndex=a,s.accessorThreshold=c,s.rankedValue=l.itemValue)}return s}function Hr(e,t,n){return e=Vr(e,n),t=Vr(t,n),t.length>e.length?Te.NO_MATCH:e===t?Te.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),t=t.toLowerCase(),e===t?Te.EQUAL:e.startsWith(t)?Te.STARTS_WITH:e.includes(` ${t}`)?Te.WORD_STARTS_WITH:e.includes(t)?Te.CONTAINS:t.length===1?Te.NO_MATCH:ra(e).includes(t)?Te.ACRONYM:oa(e,t))}function ra(e){let t="";return e.split(" ").forEach(r=>{r.split("-").forEach(s=>{t+=s.substr(0,1)})}),t}function oa(e,t){let n=0,r=0;function o(i,u,d){for(let c=d,f=u.length;c<f;c++)if(u[c]===i)return n+=1,c+1;return-1}function s(i){const u=1/i,d=n/t.length;return Te.MATCHES+d*u}const a=o(t[0],e,0);if(a<0)return Te.NO_MATCH;r=a;for(let i=1,u=t.length;i<u;i++){const d=t[i];if(r=o(d,e,r),!(r>-1))return Te.NO_MATCH}const l=r-a;return s(l)}function Vr(e,t){let{keepDiacritics:n}=t;return e=`${e}`,n||(e=na(e)),e}function ia(e,t){let n=t;typeof t=="object"&&(n=t.accessor);const r=n(e);return r==null?[]:Array.isArray(r)?r:[String(r)]}function sa(e,t){const n=[];for(let r=0,o=t.length;r<o;r++){const s=t[r],a=aa(s),l=ia(e,s);for(let i=0,u=l.length;i<u;i++)n.push({itemValue:l[i],attributes:a})}return n}var jr={maxRanking:1/0,minRanking:-1/0};function aa(e){return typeof e=="function"?jr:{...jr,...e}}var la={data:""},ua=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||la,ca=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,da=/\/\*[^]*?\*\/|  +/g,Wr=/\n+/g,Mt=(e,t)=>{let n="",r="",o="";for(let s in e){let a=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+a+";":r+=s[1]=="f"?Mt(a,s):s+"{"+Mt(a,s[1]=="k"?"":t)+"}":typeof a=="object"?r+=Mt(a,t?t.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,i=>/&/.test(i)?i.replace(/&/g,l):l?l+" "+i:i)):s):a!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Mt.p?Mt.p(s,a):s+":"+a+";")}return n+(t&&o?t+"{"+o+"}":o)+r},at={},Ho=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Ho(e[n]);return t}return e},fa=(e,t,n,r,o)=>{let s=Ho(e),a=at[s]||(at[s]=(i=>{let u=0,d=11;for(;u<i.length;)d=101*d+i.charCodeAt(u++)>>>0;return"go"+d})(s));if(!at[a]){let i=s!==e?e:(u=>{let d,c,f=[{}];for(;d=ca.exec(u.replace(da,""));)d[4]?f.shift():d[3]?(c=d[3].replace(Wr," ").trim(),f.unshift(f[0][c]=f[0][c]||{})):f[0][d[1]]=d[2].replace(Wr," ").trim();return f[0]})(e);at[a]=Mt(o?{["@keyframes "+a]:i}:i,n?"":"."+a)}let l=n&&at.g?at.g:null;return n&&(at.g=at[a]),((i,u,d,c)=>{c?u.data=u.data.replace(c,i):u.data.indexOf(i)===-1&&(u.data=d?i+u.data:u.data+i)})(at[a],t,r,l),a},ga=(e,t,n)=>e.reduce((r,o,s)=>{let a=t[s];if(a&&a.call){let l=a(n),i=l&&l.props&&l.props.className||/^go/.test(l)&&l;a=i?"."+i:l&&typeof l=="object"?l.props?"":Mt(l,""):l===!1?"":l}return r+o+(a??"")},"");function W(e){let t=this||{},n=e.call?e(t.p):e;return fa(n.unshift?n.raw?ga(n,[].slice.call(arguments,1),t.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):n,ua(t.target),t.g,t.o,t.k)}W.bind({g:1});W.bind({k:1});function Vo(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Vo(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function O(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Vo(e))&&(r&&(r+=" "),r+=t);return r}function ha(e,t){const n=Kt(e),{onChange:r}=t;let o=new Set(t.appear?void 0:n);const s=new WeakSet,[a,l]=z([],{equals:!1}),[i]=Es(),u=c=>{l(f=>(f.push.apply(f,c),f));for(const f of c)s.delete(f)},d=(c,f,g)=>c.splice(g,0,f);return L(c=>{const f=a(),g=e();if(g[_o],Kt(i))return i(),c;if(f.length){const h=c.filter(y=>!f.includes(y));return f.length=0,r({list:h,added:[],removed:[],unchanged:h,finishRemoved:u}),h}return Kt(()=>{const h=new Set(g),y=g.slice(),m=[],v=[],x=[];for(const w of g)(o.has(w)?x:m).push(w);let b=!m.length;for(let w=0;w<c.length;w++){const $=c[w];h.has($)||(s.has($)||(v.push($),s.add($)),d(y,$,w)),b&&$!==y[w]&&(b=!1)}return!v.length&&b?c:(r({list:y,added:m,removed:v,unchanged:x,finishRemoved:u}),o=h,y)})},t.appear?[]:n.slice())}function De(...e){return zs(e)}var Qr=e=>e instanceof Element;function Qn(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return Qn(e(),t);if(Array.isArray(e)){const n=[];for(const r of e){const o=Qn(r,t);o&&(Array.isArray(o)?n.push.apply(n,o):n.push(o))}return n.length?n:null}return null}function pa(e,t=Qr,n=Qr){const r=L(e),o=L(()=>Qn(r(),t));return o.toArray=()=>{const s=o();return Array.isArray(s)?s:s?[s]:[]},o}function ma(e){return L(()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function jo(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function va(e,t,n,r){const{onBeforeEnter:o,onEnter:s,onAfterEnter:a}=t;o?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return r?.();s?.(n,()=>l())}),jo(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!s||s.length<2)&&(n.addEventListener("transitionend",l),n.addEventListener("animationend",l))});function l(i){(!i||i.target===n)&&(n.removeEventListener("transitionend",l),n.removeEventListener("animationend",l),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),a?.(n))}}function ya(e,t,n,r){const{onBeforeExit:o,onExit:s,onAfterExit:a}=t;if(!n.parentNode)return r?.();o?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),s?.(n,()=>l()),jo(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!s||s.length<2)&&(n.addEventListener("transitionend",l),n.addEventListener("animationend",l))});function l(i){(!i||i.target===n)&&(r?.(),n.removeEventListener("transitionend",l),n.removeEventListener("animationend",l),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),a?.(n))}}var Yr=e=>{const t=ma(e);return ha(pa(()=>e.children).toArray,{appear:e.appear,onChange({added:n,removed:r,finishRemoved:o,list:s}){const a=t();for(const i of n)va(a,e,i);const l=[];for(const i of s)i.isConnected&&(i instanceof HTMLElement||i instanceof SVGElement)&&l.push({el:i,rect:i.getBoundingClientRect()});queueMicrotask(()=>{const i=[];for(const{el:u,rect:d}of l)if(u.isConnected){const c=u.getBoundingClientRect(),f=d.left-c.left,g=d.top-c.top;(f||g)&&(u.style.transform=`translate(${f}px, ${g}px)`,u.style.transitionDuration="0s",i.push(u))}document.body.offsetHeight;for(const u of i){let d=function(c){(c.target===u||/transform$/.test(c.propertyName))&&(u.removeEventListener("transitionend",d),u.classList.remove(...a.move))};u.classList.add(...a.move),u.style.transform=u.style.transitionDuration="",u.addEventListener("transitionend",d)}});for(const i of r)ya(a,e,i,()=>o([i]))}})},Kn=Symbol("fallback");function Xr(e){for(const t of e)t.dispose()}function ba(e,t,n,r={}){const o=new Map;return H(()=>Xr(o.values())),()=>{const a=e()||[];return a[_o],Kt(()=>{if(!a.length)return Xr(o.values()),o.clear(),r.fallback?[Br(c=>(o.set(Kn,{dispose:c}),r.fallback()))]:[];const l=new Array(a.length),i=o.get(Kn);if(!o.size||i){i?.dispose(),o.delete(Kn);for(let d=0;d<a.length;d++){const c=a[d],f=t(c,d);s(l,c,d,f)}return l}const u=new Set(o.keys());for(let d=0;d<a.length;d++){const c=a[d],f=t(c,d);u.delete(f);const g=o.get(f);g?(l[d]=g.mapped,g.setIndex?.(d),g.setItem(()=>c)):s(l,c,d,f)}for(const d of u)o.get(d)?.dispose(),o.delete(d);return l})};function s(a,l,i,u){Br(d=>{const[c,f]=z(l),g={setItem:f,dispose:d};if(n.length>1){const[h,y]=z(i);g.setIndex=y,g.mapped=n(c,h)}else g.mapped=n(c);o.set(u,g),a[i]=g.mapped})}}function wn(e){const{by:t}=e;return L(ba(()=>e.each,typeof t=="function"?t:n=>n[t],e.children,"fallback"in e?{fallback:()=>e.fallback}:void 0))}function xa(e,t,n,r){return e.addEventListener(t,n,r),Bs(e.removeEventListener.bind(e,t,n,r))}function wa(e,t,n,r){const o=()=>{jn(E(e)).forEach(s=>{s&&jn(E(t)).forEach(a=>xa(s,a,n,r))})};typeof e=="function"?B(o):U(o)}function $a(e,t){const n=new ResizeObserver(e);return H(n.disconnect.bind(n)),{observe:r=>n.observe(r,t),unobserve:n.unobserve.bind(n)}}function Ca(e,t,n){const r=new WeakMap,{observe:o,unobserve:s}=$a(a=>{for(const l of a){const{contentRect:i,target:u}=l,d=Math.round(i.width),c=Math.round(i.height),f=r.get(u);(!f||f.width!==d||f.height!==c)&&(t(i,u,l),r.set(u,{width:d,height:c}))}},n);B(a=>{const l=Rs(jn(E(e)));return Ns(l,a,o,s),l},[])}var Sa=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function Zr(e){const t={};let n;for(;n=Sa.exec(e);)t[n[1]]=n[2];return t}function An(e,t){if(typeof e=="string"){if(typeof t=="string")return`${e};${t}`;e=Zr(e)}else typeof t=="string"&&(t=Zr(t));return{...e,...t}}function ka(e,t,n=-1){return n in e?[...e.slice(0,n),t,...e.slice(n)]:[...e,t]}function Yn(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Ea(e){return typeof e=="number"}function qt(e){return Object.prototype.toString.call(e)==="[object String]"}function Ma(e){return typeof e=="function"}function un(e){return t=>`${e()}-${t}`}function Ke(e,t){return e?e===t||e.contains(t):!1}function nn(e,t=!1){const{activeElement:n}=Ze(e);if(!n?.nodeName)return null;if(Wo(n)&&n.contentDocument)return nn(n.contentDocument.body,t);if(t){const r=n.getAttribute("aria-activedescendant");if(r){const o=Ze(n).getElementById(r);if(o)return o}}return n}function Da(e){return Ze(e).defaultView||window}function Ze(e){return e?e.ownerDocument||e:document}function Wo(e){return e.tagName==="IFRAME"}var lr=(e=>(e.Escape="Escape",e.Enter="Enter",e.Tab="Tab",e.Space=" ",e.ArrowDown="ArrowDown",e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.ArrowUp="ArrowUp",e.End="End",e.Home="Home",e.PageDown="PageDown",e.PageUp="PageUp",e))(lr||{});function ur(e){return typeof window<"u"&&window.navigator!=null?e.test(window.navigator.userAgentData?.platform||window.navigator.platform):!1}function Tn(){return ur(/^Mac/i)}function Aa(){return ur(/^iPhone/i)}function Ta(){return ur(/^iPad/i)||Tn()&&navigator.maxTouchPoints>1}function Fa(){return Aa()||Ta()}function Ia(){return Tn()||Fa()}function de(e,t){return t&&(Ma(t)?t(e):t[0](t[1],e)),e?.defaultPrevented}function be(e){return t=>{for(const n of e)de(t,n)}}function Pa(e){return Tn()?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey}function ke(e){if(e)if(Oa())e.focus({preventScroll:!0});else{const t=La(e);e.focus(),qa(t)}}var vn=null;function Oa(){if(vn==null){vn=!1;try{document.createElement("div").focus({get preventScroll(){return vn=!0,!0}})}catch{}}return vn}function La(e){let t=e.parentNode;const n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}function qa(e){for(const{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}var Qo=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],_a=[...Qo,'[tabindex]:not([tabindex="-1"]):not([disabled])'],cr=Qo.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])",Ra=_a.join(':not([hidden]):not([tabindex="-1"]),');function Yo(e,t){const r=Array.from(e.querySelectorAll(cr)).filter(Jr);return t&&Jr(e)&&r.unshift(e),r.forEach((o,s)=>{if(Wo(o)&&o.contentDocument){const a=o.contentDocument.body,l=Yo(a,!1);r.splice(s,1,...l)}}),r}function Jr(e){return Xo(e)&&!za(e)}function Xo(e){return e.matches(cr)&&dr(e)}function za(e){return parseInt(e.getAttribute("tabindex")||"0",10)<0}function dr(e,t){return e.nodeName!=="#comment"&&Ka(e)&&Ba(e,t)&&(!e.parentElement||dr(e.parentElement,e))}function Ka(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;const{display:t,visibility:n}=e.style;let r=t!=="none"&&n!=="hidden"&&n!=="collapse";if(r){if(!e.ownerDocument.defaultView)return r;const{getComputedStyle:o}=e.ownerDocument.defaultView,{display:s,visibility:a}=o(e);r=s!=="none"&&a!=="hidden"&&a!=="collapse"}return r}function Ba(e,t){return!e.hasAttribute("hidden")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function Na(e,t,n){const r=t?.tabbable?Ra:cr,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(s){return t?.from?.contains(s)?NodeFilter.FILTER_REJECT:s.matches(r)&&dr(s)&&(!t?.accept||t.accept(s))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t?.from&&(o.currentNode=t.from),o}function eo(e){for(;e&&!Ga(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function Ga(e){const t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function Ua(){}function Ha(e,t){const[n,r]=e;let o=!1;const s=t.length;for(let a=s,l=0,i=a-1;l<a;i=l++){const[u,d]=t[l],[c,f]=t[i],[,g]=t[i===0?a-1:i-1]||[0,0],h=(d-f)*(n-u)-(u-c)*(r-d);if(f<d){if(r>=f&&r<d){if(h===0)return!0;h>0&&(r===f?r>g&&(o=!o):o=!o)}}else if(d<f){if(r>d&&r<=f){if(h===0)return!0;h<0&&(r===f?r<g&&(o=!o):o=!o)}}else if(r==d&&(n>=c&&n<=u||n>=u&&n<=c))return!0}return o}function Q(e,t){return j(e,t)}var Zt=new Map,to=new Set;function no(){if(typeof window>"u")return;const e=n=>{if(!n.target)return;let r=Zt.get(n.target);r||(r=new Set,Zt.set(n.target,r),n.target.addEventListener("transitioncancel",t)),r.add(n.propertyName)},t=n=>{if(!n.target)return;const r=Zt.get(n.target);if(r&&(r.delete(n.propertyName),r.size===0&&(n.target.removeEventListener("transitioncancel",t),Zt.delete(n.target)),Zt.size===0)){for(const o of to)o();to.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",t)}typeof document<"u"&&(document.readyState!=="loading"?no():document.addEventListener("DOMContentLoaded",no));function Xn(e,t){const n=ro(e,t,"left"),r=ro(e,t,"top"),o=t.offsetWidth,s=t.offsetHeight;let a=e.scrollLeft,l=e.scrollTop;const i=a+e.offsetWidth,u=l+e.offsetHeight;n<=a?a=n:n+o>i&&(a+=n+o-i),r<=l?l=r:r+s>u&&(l+=r+s-u),e.scrollLeft=a,e.scrollTop=l}function ro(e,t,n){const r=n==="left"?"offsetLeft":"offsetTop";let o=0;for(;t.offsetParent&&(o+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){o-=e[r];break}t=t.offsetParent}return o}function Va(e,t){if(document.contains(e)){const n=document.scrollingElement||document.documentElement;if(window.getComputedStyle(n).overflow==="hidden"){let o=eo(e);for(;e&&o&&e!==n&&o!==n;)Xn(o,e),e=o,o=eo(e)}else{const{left:o,top:s}=e.getBoundingClientRect();e?.scrollIntoView?.({block:"nearest"});const{left:a,top:l}=e.getBoundingClientRect();(Math.abs(o-a)>1||Math.abs(s-l)>1)&&e.scrollIntoView?.({block:"nearest"})}}}var Zo={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"};function Be(e){return t=>(e(t),()=>e(void 0))}function Fn(e,t){const[n,r]=z(oo(t?.()));return B(()=>{r(e()?.tagName.toLowerCase()||oo(t?.()))}),n}function oo(e){return qt(e)?e:void 0}function fe(e){const[t,n]=J(e,["as"]);if(!t.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return p(Os,j(n,{get component(){return t.as}}))}var ja=["id","name","validationState","required","disabled","readOnly"];function Wa(e){const t=`form-control-${Le()}`,n=Q({id:t},e),[r,o]=z(),[s,a]=z(),[l,i]=z(),[u,d]=z(),c=(y,m,v)=>{const x=v!=null||r()!=null;return[v,r(),x&&m!=null?y:void 0].filter(Boolean).join(" ")||void 0},f=y=>[l(),u(),y].filter(Boolean).join(" ")||void 0,g=L(()=>({"data-valid":E(n.validationState)==="valid"?"":void 0,"data-invalid":E(n.validationState)==="invalid"?"":void 0,"data-required":E(n.required)?"":void 0,"data-disabled":E(n.disabled)?"":void 0,"data-readonly":E(n.readOnly)?"":void 0}));return{formControlContext:{name:()=>E(n.name)??E(n.id),dataset:g,validationState:()=>E(n.validationState),isRequired:()=>E(n.required),isDisabled:()=>E(n.disabled),isReadOnly:()=>E(n.readOnly),labelId:r,fieldId:s,descriptionId:l,errorMessageId:u,getAriaLabelledBy:c,getAriaDescribedBy:f,generateId:un(()=>E(n.id)),registerLabel:Be(o),registerField:Be(a),registerDescription:Be(i),registerErrorMessage:Be(d)}}}var Jo=xe();function cn(){const e=we(Jo);if(e===void 0)throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return e}function ei(e){const t=cn(),n=Q({id:t.generateId("description")},e);return B(()=>H(t.registerDescription(n.id))),p(fe,j({as:"div"},()=>t.dataset(),n))}function ti(e){const t=cn(),n=Q({id:t.generateId("error-message")},e),[r,o]=J(n,["forceMount"]),s=()=>t.validationState()==="invalid";return B(()=>{s()&&H(t.registerErrorMessage(o.id))}),p(R,{get when(){return r.forceMount||s()},get children(){return p(fe,j({as:"div"},()=>t.dataset(),o))}})}function Qa(e){let t;const n=cn(),r=Q({id:n.generateId("label")},e),[o,s]=J(r,["ref"]),a=Fn(()=>t,()=>"label");return B(()=>H(n.registerLabel(s.id))),p(fe,j({as:"label",ref(l){const i=De(u=>t=u,o.ref);typeof i=="function"&&i(l)},get for(){return pe(()=>a()==="label")()?n.fieldId():void 0}},()=>n.dataset(),s))}function Ya(e,t){B(dt(e,n=>{if(n==null)return;const r=Xa(n);r!=null&&(r.addEventListener("reset",t,{passive:!0}),H(()=>{r.removeEventListener("reset",t)}))}))}function Xa(e){return Za(e)?e.form:e.closest("form")}function Za(e){return e.matches("textarea, input, select, button")}function dn(e){const[t,n]=z(e.defaultValue?.()),r=L(()=>e.value?.()!==void 0),o=L(()=>r()?e.value?.():t());return[o,a=>{Kt(()=>{const l=Ks(a,o());return Object.is(l,o())||(r()||n(l),e.onChange?.(l)),l})}]}function ni(e){const[t,n]=dn(e);return[()=>t()??!1,n]}function Ja(e){const[t,n]=dn(e);return[()=>t()??[],n]}function el(e={}){const[t,n]=ni({value:()=>E(e.isSelected),defaultValue:()=>!!E(e.defaultIsSelected),onChange:s=>e.onSelectedChange?.(s)});return{isSelected:t,setIsSelected:s=>{!E(e.isReadOnly)&&!E(e.isDisabled)&&n(s)},toggle:()=>{!E(e.isReadOnly)&&!E(e.isDisabled)&&n(!t())}}}var tl=Object.defineProperty,In=(e,t)=>{for(var n in t)tl(e,n,{get:t[n],enumerable:!0})},ri=xe();function oi(){return we(ri)}function nl(){const e=oi();if(e===void 0)throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");return e}function ii(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function rl(e,t){const n=t.ref();if(!n)return-1;let r=e.length;if(!r)return-1;for(;r--;){const o=e[r]?.ref();if(o&&ii(o,n))return r+1}return 0}function ol(e){const t=e.map((r,o)=>[o,r]);let n=!1;return t.sort(([r,o],[s,a])=>{const l=o.ref(),i=a.ref();return l===i||!l||!i?0:ii(l,i)?(r>s&&(n=!0),-1):(r<s&&(n=!0),1)}),n?t.map(([r,o])=>o):e}function si(e,t){const n=ol(e);e!==n&&t(n)}function il(e){const t=e[0],n=e[e.length-1]?.ref();let r=t?.ref()?.parentElement;for(;r;){if(n&&r.contains(n))return r;r=r.parentElement}return Ze(r).body}function sl(e,t){B(()=>{const n=setTimeout(()=>{si(e(),t)});H(()=>clearTimeout(n))})}function al(e,t){if(typeof IntersectionObserver!="function"){sl(e,t);return}let n=[];B(()=>{const r=()=>{const a=!!n.length;n=e(),a&&si(e(),t)},o=il(e()),s=new IntersectionObserver(r,{root:o});for(const a of e()){const l=a.ref();l&&s.observe(l)}H(()=>s.disconnect())})}function ll(e={}){const[t,n]=Ja({value:()=>E(e.items),onChange:s=>e.onItemsChange?.(s)});al(t,n);const r=s=>(n(a=>{const l=rl(a,s);return ka(a,s,l)}),()=>{n(a=>{const l=a.filter(i=>i.ref()!==s.ref());return a.length===l.length?a:l})});return{DomCollectionProvider:s=>p(ri.Provider,{value:{registerItem:r},get children(){return s.children}})}}function ul(e){const t=nl(),n=Q({shouldRegisterItem:!0},e);B(()=>{if(!n.shouldRegisterItem)return;const r=t.registerItem(n.getItem());H(r)})}function ai(e){let t=e.startIndex??0;const n=e.startLevel??0,r=[],o=i=>{if(i==null)return"";const u=e.getKey??"key",d=qt(u)?i[u]:u(i);return d!=null?String(d):""},s=i=>{if(i==null)return"";const u=e.getTextValue??"textValue",d=qt(u)?i[u]:u(i);return d!=null?String(d):""},a=i=>{if(i==null)return!1;const u=e.getDisabled??"disabled";return(qt(u)?i[u]:u(i))??!1},l=i=>{if(i!=null)return qt(e.getSectionChildren)?i[e.getSectionChildren]:e.getSectionChildren?.(i)};for(const i of e.dataSource){if(qt(i)||Ea(i)){r.push({type:"item",rawValue:i,key:String(i),textValue:String(i),disabled:a(i),level:n,index:t}),t++;continue}if(l(i)!=null){r.push({type:"section",rawValue:i,key:"",textValue:"",disabled:!1,level:n,index:t}),t++;const u=l(i)??[];if(u.length>0){const d=ai({dataSource:u,getKey:e.getKey,getTextValue:e.getTextValue,getDisabled:e.getDisabled,getSectionChildren:e.getSectionChildren,startIndex:t,startLevel:n+1});r.push(...d),t+=d.length}}else r.push({type:"item",rawValue:i,key:o(i),textValue:s(i),disabled:a(i),level:n,index:t}),t++}return r}function cl(e,t=[]){return L(()=>{const n=ai({dataSource:E(e.dataSource),getKey:E(e.getKey),getTextValue:E(e.getTextValue),getDisabled:E(e.getDisabled),getSectionChildren:E(e.getSectionChildren)});for(let r=0;r<t.length;r++)t[r]();return e.factory(n)})}var dl=new Set(["Avst","Arab","Armi","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),fl=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function gl(e){if(Intl.Locale){const n=new Intl.Locale(e).maximize().script??"";return dl.has(n)}const t=e.split("-")[0];return fl.has(t)}function hl(e){return gl(e)?"rtl":"ltr"}function li(){let e=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";return{locale:e,direction:hl(e)}}var Zn=li(),rn=new Set;function io(){Zn=li();for(const e of rn)e(Zn)}function pl(){const[e,t]=z(Zn),n=L(()=>e());return Dt(()=>{rn.size===0&&window.addEventListener("languagechange",io),rn.add(t),H(()=>{rn.delete(t),rn.size===0&&window.removeEventListener("languagechange",io)})}),{locale:()=>n().locale,direction:()=>n().direction}}var ml=xe();function Ct(){const e=pl();return we(ml)||e}var Bn=new Map;function vl(e){const{locale:t}=Ct(),n=L(()=>t()+(e?Object.entries(e).sort((r,o)=>r[0]<o[0]?-1:1).join():""));return L(()=>{const r=n();let o;return Bn.has(r)&&(o=Bn.get(r)),o||(o=new Intl.Collator(t(),e),Bn.set(r,o)),o})}var lt=class ui extends Set{anchorKey;currentKey;constructor(t,n,r){super(t),t instanceof ui?(this.anchorKey=n||t.anchorKey,this.currentKey=r||t.currentKey):(this.anchorKey=n,this.currentKey=r)}};function yl(e){const[t,n]=dn(e);return[()=>t()??new lt,n]}function ci(e){return Ia()?e.altKey:e.ctrlKey}function _t(e){return Tn()?e.metaKey:e.ctrlKey}function so(e){return new lt(e)}function bl(e,t){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}function xl(e){const t=Q({selectionMode:"none",selectionBehavior:"toggle"},e),[n,r]=z(!1),[o,s]=z(),a=L(()=>{const y=E(t.selectedKeys);return y!=null?so(y):y}),l=L(()=>{const y=E(t.defaultSelectedKeys);return y!=null?so(y):new lt}),[i,u]=yl({value:a,defaultValue:l,onChange:y=>t.onSelectionChange?.(y)}),[d,c]=z(E(t.selectionBehavior)),f=()=>E(t.selectionMode),g=()=>E(t.disallowEmptySelection)??!1,h=y=>{(E(t.allowDuplicateSelectionEvents)||!bl(y,i()))&&u(y)};return B(()=>{const y=i();E(t.selectionBehavior)==="replace"&&d()==="toggle"&&typeof y=="object"&&y.size===0&&c("replace")}),B(()=>{c(E(t.selectionBehavior)??"toggle")}),{selectionMode:f,disallowEmptySelection:g,selectionBehavior:d,setSelectionBehavior:c,isFocused:n,setFocused:r,focusedKey:o,setFocusedKey:s,selectedKeys:i,setSelectedKeys:h}}function wl(e){const[t,n]=z(""),[r,o]=z(-1);return{typeSelectHandlers:{onKeyDown:a=>{if(E(e.isDisabled))return;const l=E(e.keyboardDelegate),i=E(e.selectionManager);if(!l.getKeyForSearch)return;const u=$l(a.key);if(!u||a.ctrlKey||a.metaKey)return;u===" "&&t().trim().length>0&&(a.preventDefault(),a.stopPropagation());let d=n(f=>f+u),c=l.getKeyForSearch(d,i.focusedKey())??l.getKeyForSearch(d);c==null&&Cl(d)&&(d=d[0],c=l.getKeyForSearch(d,i.focusedKey())??l.getKeyForSearch(d)),c!=null&&(i.setFocusedKey(c),e.onTypeSelect?.(c)),clearTimeout(r()),o(window.setTimeout(()=>n(""),500))}}}}function $l(e){return e.length===1||!/^[A-Z]/i.test(e)?e:""}function Cl(e){return e.split("").every(t=>t===e[0])}function Sl(e,t,n){const o=j({selectOnFocus:()=>E(e.selectionManager).selectionBehavior()==="replace"},e),s=()=>t(),{direction:a}=Ct();let l={top:0,left:0};wa(()=>E(o.isVirtualized)?void 0:s(),"scroll",()=>{const m=s();m&&(l={top:m.scrollTop,left:m.scrollLeft})});const{typeSelectHandlers:i}=wl({isDisabled:()=>E(o.disallowTypeAhead),keyboardDelegate:()=>E(o.keyboardDelegate),selectionManager:()=>E(o.selectionManager)}),u=()=>E(o.orientation)??"vertical",d=m=>{de(m,i.onKeyDown),m.altKey&&m.key==="Tab"&&m.preventDefault();const v=t();if(!v?.contains(m.target))return;const x=E(o.selectionManager),b=E(o.selectOnFocus),w=I=>{I!=null&&(x.setFocusedKey(I),m.shiftKey&&x.selectionMode()==="multiple"?x.extendSelection(I):b&&!ci(m)&&x.replaceSelection(I))},$=E(o.keyboardDelegate),q=E(o.shouldFocusWrap),D=x.focusedKey();switch(m.key){case(u()==="vertical"?"ArrowDown":"ArrowRight"):{if($.getKeyBelow){m.preventDefault();let I;D!=null?I=$.getKeyBelow(D):I=$.getFirstKey?.(),I==null&&q&&(I=$.getFirstKey?.(D)),w(I)}break}case(u()==="vertical"?"ArrowUp":"ArrowLeft"):{if($.getKeyAbove){m.preventDefault();let I;D!=null?I=$.getKeyAbove(D):I=$.getLastKey?.(),I==null&&q&&(I=$.getLastKey?.(D)),w(I)}break}case(u()==="vertical"?"ArrowLeft":"ArrowUp"):{if($.getKeyLeftOf){m.preventDefault();const I=a()==="rtl";let k;D!=null?k=$.getKeyLeftOf(D):k=I?$.getFirstKey?.():$.getLastKey?.(),w(k)}break}case(u()==="vertical"?"ArrowRight":"ArrowDown"):{if($.getKeyRightOf){m.preventDefault();const I=a()==="rtl";let k;D!=null?k=$.getKeyRightOf(D):k=I?$.getLastKey?.():$.getFirstKey?.(),w(k)}break}case"Home":if($.getFirstKey){m.preventDefault();const I=$.getFirstKey(D,_t(m));I!=null&&(x.setFocusedKey(I),_t(m)&&m.shiftKey&&x.selectionMode()==="multiple"?x.extendSelection(I):b&&x.replaceSelection(I))}break;case"End":if($.getLastKey){m.preventDefault();const I=$.getLastKey(D,_t(m));I!=null&&(x.setFocusedKey(I),_t(m)&&m.shiftKey&&x.selectionMode()==="multiple"?x.extendSelection(I):b&&x.replaceSelection(I))}break;case"PageDown":if($.getKeyPageBelow&&D!=null){m.preventDefault();const I=$.getKeyPageBelow(D);w(I)}break;case"PageUp":if($.getKeyPageAbove&&D!=null){m.preventDefault();const I=$.getKeyPageAbove(D);w(I)}break;case"a":_t(m)&&x.selectionMode()==="multiple"&&E(o.disallowSelectAll)!==!0&&(m.preventDefault(),x.selectAll());break;case"Escape":m.defaultPrevented||(m.preventDefault(),E(o.disallowEmptySelection)||x.clearSelection());break;case"Tab":if(!E(o.allowsTabNavigation)){if(m.shiftKey)v.focus();else{const I=Na(v,{tabbable:!0});let k,T;do T=I.lastChild(),T&&(k=T);while(T);k&&!k.contains(document.activeElement)&&ke(k)}break}}},c=m=>{const v=E(o.selectionManager),x=E(o.keyboardDelegate),b=E(o.selectOnFocus);if(v.isFocused()){m.currentTarget.contains(m.target)||v.setFocused(!1);return}if(m.currentTarget.contains(m.target)){if(v.setFocused(!0),v.focusedKey()==null){const w=q=>{q!=null&&(v.setFocusedKey(q),b&&v.replaceSelection(q))},$=m.relatedTarget;$&&m.currentTarget.compareDocumentPosition($)&Node.DOCUMENT_POSITION_FOLLOWING?w(v.lastSelectedKey()??x.getLastKey?.()):w(v.firstSelectedKey()??x.getFirstKey?.())}else if(!E(o.isVirtualized)){const w=s();if(w){w.scrollTop=l.top,w.scrollLeft=l.left;const $=w.querySelector(`[data-key="${v.focusedKey()}"]`);$&&(ke($),Xn(w,$))}}}},f=m=>{const v=E(o.selectionManager);m.currentTarget.contains(m.relatedTarget)||v.setFocused(!1)},g=m=>{s()===m.target&&m.preventDefault()},h=()=>{const m=E(o.autoFocus);if(!m)return;const v=E(o.selectionManager),x=E(o.keyboardDelegate);let b;m==="first"&&(b=x.getFirstKey?.()),m==="last"&&(b=x.getLastKey?.());const w=v.selectedKeys();w.size&&(b=w.values().next().value),v.setFocused(!0),v.setFocusedKey(b);const $=t();$&&b==null&&!E(o.shouldUseVirtualFocus)&&ke($)};return Dt(()=>{o.deferAutoFocus?setTimeout(h,0):h()}),B(dt([s,()=>E(o.isVirtualized),()=>E(o.selectionManager).focusedKey()],m=>{const[v,x,b]=m;if(x)b&&o.scrollToKey?.(b);else if(b&&v){const w=v.querySelector(`[data-key="${b}"]`);w&&Xn(v,w)}})),{tabIndex:L(()=>{if(!E(o.shouldUseVirtualFocus))return E(o.selectionManager).focusedKey()==null?0:-1}),onKeyDown:d,onMouseDown:g,onFocusIn:c,onFocusOut:f}}function di(e,t){const n=()=>E(e.selectionManager),r=()=>E(e.key),o=()=>E(e.shouldUseVirtualFocus),s=x=>{n().selectionMode()!=="none"&&(n().selectionMode()==="single"?n().isSelected(r())&&!n().disallowEmptySelection()?n().toggleSelection(r()):n().replaceSelection(r()):x?.shiftKey?n().extendSelection(r()):n().selectionBehavior()==="toggle"||_t(x)||"pointerType"in x&&x.pointerType==="touch"?n().toggleSelection(r()):n().replaceSelection(r()))},a=()=>n().isSelected(r()),l=()=>E(e.disabled)||n().isDisabled(r()),i=()=>!l()&&n().canSelectItem(r());let u=null;const d=x=>{i()&&(u=x.pointerType,x.pointerType==="mouse"&&x.button===0&&!E(e.shouldSelectOnPressUp)&&s(x))},c=x=>{i()&&x.pointerType==="mouse"&&x.button===0&&E(e.shouldSelectOnPressUp)&&E(e.allowsDifferentPressOrigin)&&s(x)},f=x=>{i()&&(E(e.shouldSelectOnPressUp)&&!E(e.allowsDifferentPressOrigin)||u!=="mouse")&&s(x)},g=x=>{!i()||!["Enter"," "].includes(x.key)||(ci(x)?n().toggleSelection(r()):s(x))},h=x=>{l()&&x.preventDefault()},y=x=>{const b=t();o()||l()||!b||x.target===b&&n().setFocusedKey(r())},m=L(()=>{if(!(o()||l()))return r()===n().focusedKey()?0:-1}),v=L(()=>E(e.virtualized)?void 0:r());return B(dt([t,r,o,()=>n().focusedKey(),()=>n().isFocused()],([x,b,w,$,q])=>{x&&b===$&&q&&!w&&document.activeElement!==x&&(e.focus?e.focus():ke(x))})),{isSelected:a,isDisabled:l,allowsSelection:i,tabIndex:m,dataKey:v,onPointerDown:d,onPointerUp:c,onClick:f,onKeyDown:g,onMouseDown:h,onFocus:y}}var kl=class{collection;state;constructor(e,t){this.collection=e,this.state=t}selectionMode(){return this.state.selectionMode()}disallowEmptySelection(){return this.state.disallowEmptySelection()}selectionBehavior(){return this.state.selectionBehavior()}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}isFocused(){return this.state.isFocused()}setFocused(e){this.state.setFocused(e)}focusedKey(){return this.state.focusedKey()}setFocusedKey(e){(e==null||this.collection().getItem(e))&&this.state.setFocusedKey(e)}selectedKeys(){return this.state.selectedKeys()}isSelected(e){if(this.state.selectionMode()==="none")return!1;const t=this.getKey(e);return t==null?!1:this.state.selectedKeys().has(t)}isEmpty(){return this.state.selectedKeys().size===0}isSelectAll(){if(this.isEmpty())return!1;const e=this.state.selectedKeys();return this.getAllSelectableKeys().every(t=>e.has(t))}firstSelectedKey(){let e;for(const t of this.state.selectedKeys()){const n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index<e.index;(!e||r)&&(e=n)}return e?.key}lastSelectedKey(){let e;for(const t of this.state.selectedKeys()){const n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index>e.index;(!e||r)&&(e=n)}return e?.key}extendSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"){this.replaceSelection(e);return}const t=this.getKey(e);if(t==null)return;const n=this.state.selectedKeys(),r=n.anchorKey||t,o=new lt(n,r,t);for(const s of this.getKeyRange(r,n.currentKey||t))o.delete(s);for(const s of this.getKeyRange(t,r))this.canSelectItem(s)&&o.add(s);this.state.setSelectedKeys(o)}getKeyRange(e,t){const n=this.collection().getItem(e),r=this.collection().getItem(t);return n&&r?n.index!=null&&r.index!=null&&n.index<=r.index?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){const n=[];let r=e;for(;r!=null;){const o=this.collection().getItem(r);if(o&&o.type==="item"&&n.push(r),r===t)return n;r=this.collection().getKeyAfter(r)}return[]}getKey(e){const t=this.collection().getItem(e);return t?!t||t.type!=="item"?null:t.key:e}toggleSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"&&!this.isSelected(e)){this.replaceSelection(e);return}const t=this.getKey(e);if(t==null)return;const n=new lt(this.state.selectedKeys());n.has(t)?n.delete(t):this.canSelectItem(t)&&(n.add(t),n.anchorKey=t,n.currentKey=t),!(this.disallowEmptySelection()&&n.size===0)&&this.state.setSelectedKeys(n)}replaceSelection(e){if(this.selectionMode()==="none")return;const t=this.getKey(e);if(t==null)return;const n=this.canSelectItem(t)?new lt([t],t,t):new lt;this.state.setSelectedKeys(n)}setSelectedKeys(e){if(this.selectionMode()==="none")return;const t=new lt;for(const n of e){const r=this.getKey(n);if(r!=null&&(t.add(r),this.selectionMode()==="single"))break}this.state.setSelectedKeys(t)}selectAll(){this.selectionMode()==="multiple"&&this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()))}clearSelection(){const e=this.state.selectedKeys();!this.disallowEmptySelection()&&e.size>0&&this.state.setSelectedKeys(new lt)}toggleSelectAll(){this.isSelectAll()?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode()!=="none"&&(this.selectionMode()==="single"?this.isSelected(e)&&!this.disallowEmptySelection()?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior()==="toggle"||t&&t.pointerType==="touch"?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys())return!0;const t=this.selectedKeys();if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;for(const n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){if(this.state.selectionMode()==="none")return!1;const t=this.collection().getItem(e);return t!=null&&!t.disabled}isDisabled(e){const t=this.collection().getItem(e);return!t||t.disabled}getAllSelectableKeys(){const e=[];return(n=>{for(;n!=null;){if(this.canSelectItem(n)){const r=this.collection().getItem(n);if(!r)continue;r.type==="item"&&e.push(n)}n=this.collection().getKeyAfter(n)}})(this.collection().getFirstKey()),e}},ao=class{keyMap=new Map;iterable;firstKey;lastKey;constructor(e){this.iterable=e;for(const r of e)this.keyMap.set(r.key,r);if(this.keyMap.size===0)return;let t,n=0;for(const[r,o]of this.keyMap)t?(t.nextKey=r,o.prevKey=t.key):(this.firstKey=r,o.prevKey=void 0),o.type==="item"&&(o.index=n++),t=o,t.nextKey=void 0;this.lastKey=t.key}*[Symbol.iterator](){yield*this.iterable}getSize(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){return this.keyMap.get(e)?.prevKey}getKeyAfter(e){return this.keyMap.get(e)?.nextKey}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}};function El(e){const t=xl(e),r=cl({dataSource:()=>E(e.dataSource),getKey:()=>E(e.getKey),getTextValue:()=>E(e.getTextValue),getDisabled:()=>E(e.getDisabled),getSectionChildren:()=>E(e.getSectionChildren),factory:s=>e.filter?new ao(e.filter(s)):new ao(s)},[()=>e.filter]),o=new kl(r,t);return Ls(()=>{const s=t.focusedKey();s!=null&&!r().getItem(s)&&t.setFocusedKey(void 0)}),{collection:r,selectionManager:()=>o}}var Se=e=>typeof e=="function"?e():e,Ml=e=>{const t=L(()=>{const a=Se(e.element);if(a)return getComputedStyle(a)}),n=()=>t()?.animationName??"none",[r,o]=z(Se(e.show)?"present":"hidden");let s="none";return B(a=>{const l=Se(e.show);return Kt(()=>{if(a===l)return l;const i=s,u=n();l?o("present"):u==="none"||t()?.display==="none"?o("hidden"):o(a===!0&&i!==u?"hiding":"hidden")}),l}),B(()=>{const a=Se(e.element);if(!a)return;const l=u=>{u.target===a&&(s=n())},i=u=>{const c=n().includes(u.animationName);u.target===a&&c&&r()==="hiding"&&o("hidden")};a.addEventListener("animationstart",l),a.addEventListener("animationcancel",i),a.addEventListener("animationend",i),H(()=>{a.removeEventListener("animationstart",l),a.removeEventListener("animationcancel",i),a.removeEventListener("animationend",i)})}),{present:()=>r()==="present"||r()==="hiding",state:r}},Dl=Ml,fi=Dl,$n="data-kb-top-layer",gi,Jn=!1,ft=[];function on(e){return ft.findIndex(t=>t.node===e)}function Al(e){return ft[on(e)]}function Tl(e){return ft[ft.length-1].node===e}function hi(){return ft.filter(e=>e.isPointerBlocking)}function Fl(){return[...hi()].slice(-1)[0]}function fr(){return hi().length>0}function pi(e){const t=on(Fl()?.node);return on(e)<t}function Il(e){ft.push(e)}function Pl(e){const t=on(e);t<0||ft.splice(t,1)}function Ol(){for(const{node:e}of ft)e.style.pointerEvents=pi(e)?"none":"auto"}function Ll(e){if(fr()&&!Jn){const t=Ze(e);gi=document.body.style.pointerEvents,t.body.style.pointerEvents="none",Jn=!0}}function ql(e){if(fr())return;const t=Ze(e);t.body.style.pointerEvents=gi,t.body.style.length===0&&t.body.removeAttribute("style"),Jn=!1}var Fe={layers:ft,isTopMostLayer:Tl,hasPointerBlockingLayer:fr,isBelowPointerBlockingLayer:pi,addLayer:Il,removeLayer:Pl,indexOf:on,find:Al,assignPointerEventToLayers:Ol,disableBodyPointerEvents:Ll,restoreBodyPointerEvents:ql},_l={};In(_l,{Button:()=>Kl,Root:()=>gr});var Rl=["button","color","file","image","reset","submit"];function zl(e){const t=e.tagName.toLowerCase();return t==="button"?!0:t==="input"&&e.type?Rl.indexOf(e.type)!==-1:!1}function gr(e){let t;const n=Q({type:"button"},e),[r,o]=J(n,["ref","type","disabled"]),s=Fn(()=>t,()=>"button"),a=L(()=>{const u=s();return u==null?!1:zl({tagName:u,type:r.type})}),l=L(()=>s()==="input"),i=L(()=>s()==="a"&&t?.getAttribute("href")!=null);return p(fe,j({as:"button",ref(u){const d=De(c=>t=c,r.ref);typeof d=="function"&&d(u)},get type(){return a()||l()?r.type:void 0},get role(){return!a()&&!i()?"button":void 0},get tabIndex(){return!a()&&!i()&&!r.disabled?0:void 0},get disabled(){return a()||l()?r.disabled:void 0},get"aria-disabled"(){return!a()&&!l()&&r.disabled?!0:void 0},get"data-disabled"(){return r.disabled?"":void 0}},o))}var Kl=gr,Bl=["top","right","bottom","left"],Xe=Math.min,Pe=Math.max,Cn=Math.round,yn=Math.floor,xt=e=>({x:e,y:e}),Nl={left:"right",right:"left",bottom:"top",top:"bottom"},Gl={start:"end",end:"start"};function er(e,t,n){return Pe(e,Xe(t,n))}function Ft(e,t){return typeof e=="function"?e(t):e}function wt(e){return e.split("-")[0]}function Ut(e){return e.split("-")[1]}function mi(e){return e==="x"?"y":"x"}function hr(e){return e==="y"?"height":"width"}function At(e){return["top","bottom"].includes(wt(e))?"y":"x"}function pr(e){return mi(At(e))}function Ul(e,t,n){n===void 0&&(n=!1);const r=Ut(e),o=pr(e),s=hr(o);let a=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=Sn(a)),[a,Sn(a)]}function Hl(e){const t=Sn(e);return[tr(e),t,tr(t)]}function tr(e){return e.replace(/start|end/g,t=>Gl[t])}function Vl(e,t,n){const r=["left","right"],o=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?s:a;default:return[]}}function jl(e,t,n,r){const o=Ut(e);let s=Vl(wt(e),n==="start",r);return o&&(s=s.map(a=>a+"-"+o),t&&(s=s.concat(s.map(tr)))),s}function Sn(e){return e.replace(/left|right|bottom|top/g,t=>Nl[t])}function Wl(e){return{top:0,right:0,bottom:0,left:0,...e}}function vi(e){return typeof e!="number"?Wl(e):{top:e,right:e,bottom:e,left:e}}function kn(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function lo(e,t,n){let{reference:r,floating:o}=e;const s=At(t),a=pr(t),l=hr(a),i=wt(t),u=s==="y",d=r.x+r.width/2-o.width/2,c=r.y+r.height/2-o.height/2,f=r[l]/2-o[l]/2;let g;switch(i){case"top":g={x:d,y:r.y-o.height};break;case"bottom":g={x:d,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:c};break;case"left":g={x:r.x-o.width,y:c};break;default:g={x:r.x,y:r.y}}switch(Ut(t)){case"start":g[a]-=f*(n&&u?-1:1);break;case"end":g[a]+=f*(n&&u?-1:1);break}return g}var Ql=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:s=[],platform:a}=n,l=s.filter(Boolean),i=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:d,y:c}=lo(u,r,i),f=r,g={},h=0;for(let y=0;y<l.length;y++){const{name:m,fn:v}=l[y],{x,y:b,data:w,reset:$}=await v({x:d,y:c,initialPlacement:r,placement:f,strategy:o,middlewareData:g,rects:u,platform:a,elements:{reference:e,floating:t}});d=x??d,c=b??c,g={...g,[m]:{...g[m],...w}},$&&h<=50&&(h++,typeof $=="object"&&($.placement&&(f=$.placement),$.rects&&(u=$.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):$.rects),{x:d,y:c}=lo(u,f,i)),y=-1)}return{x:d,y:c,placement:f,strategy:o,middlewareData:g}};async function sn(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:s,rects:a,elements:l,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:c="floating",altBoundary:f=!1,padding:g=0}=Ft(t,e),h=vi(g),m=l[f?c==="floating"?"reference":"floating":c],v=kn(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(m)))==null||n?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:i})),x=c==="floating"?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),w=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},$=kn(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:b,strategy:i}):x);return{top:(v.top-$.top+h.top)/w.y,bottom:($.bottom-v.bottom+h.bottom)/w.y,left:(v.left-$.left+h.left)/w.x,right:($.right-v.right+h.right)/w.x}}var Yl=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:s,platform:a,elements:l,middlewareData:i}=t,{element:u,padding:d=0}=Ft(e,t)||{};if(u==null)return{};const c=vi(d),f={x:n,y:r},g=pr(o),h=hr(g),y=await a.getDimensions(u),m=g==="y",v=m?"top":"left",x=m?"bottom":"right",b=m?"clientHeight":"clientWidth",w=s.reference[h]+s.reference[g]-f[g]-s.floating[h],$=f[g]-s.reference[g],q=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u));let D=q?q[b]:0;(!D||!await(a.isElement==null?void 0:a.isElement(q)))&&(D=l.floating[b]||s.floating[h]);const I=w/2-$/2,k=D/2-y[h]/2-1,T=Xe(c[v],k),N=Xe(c[x],k),G=T,ne=D-y[h]-N,ee=D/2-y[h]/2+I,le=er(G,ee,ne),ie=!i.arrow&&Ut(o)!=null&&ee!==le&&s.reference[h]/2-(ee<G?T:N)-y[h]/2<0,re=ie?ee<G?ee-G:ee-ne:0;return{[g]:f[g]+re,data:{[g]:le,centerOffset:ee-le-re,...ie&&{alignmentOffset:re}},reset:ie}}}),Xl=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:s,rects:a,initialPlacement:l,platform:i,elements:u}=t,{mainAxis:d=!0,crossAxis:c=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:y=!0,...m}=Ft(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const v=wt(o),x=At(l),b=wt(l)===l,w=await(i.isRTL==null?void 0:i.isRTL(u.floating)),$=f||(b||!y?[Sn(l)]:Hl(l)),q=h!=="none";!f&&q&&$.push(...jl(l,y,h,w));const D=[l,...$],I=await sn(t,m),k=[];let T=((r=s.flip)==null?void 0:r.overflows)||[];if(d&&k.push(I[v]),c){const ee=Ul(o,a,w);k.push(I[ee[0]],I[ee[1]])}if(T=[...T,{placement:o,overflows:k}],!k.every(ee=>ee<=0)){var N,G;const ee=(((N=s.flip)==null?void 0:N.index)||0)+1,le=D[ee];if(le)return{data:{index:ee,overflows:T},reset:{placement:le}};let ie=(G=T.filter(re=>re.overflows[0]<=0).sort((re,se)=>re.overflows[1]-se.overflows[1])[0])==null?void 0:G.placement;if(!ie)switch(g){case"bestFit":{var ne;const re=(ne=T.filter(se=>{if(q){const ue=At(se.placement);return ue===x||ue==="y"}return!0}).map(se=>[se.placement,se.overflows.filter(ue=>ue>0).reduce((ue,me)=>ue+me,0)]).sort((se,ue)=>se[1]-ue[1])[0])==null?void 0:ne[0];re&&(ie=re);break}case"initialPlacement":ie=l;break}if(o!==ie)return{reset:{placement:ie}}}return{}}}};function uo(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function co(e){return Bl.some(t=>e[t]>=0)}var Zl=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=Ft(e,t);switch(r){case"referenceHidden":{const s=await sn(t,{...o,elementContext:"reference"}),a=uo(s,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:co(a)}}}case"escaped":{const s=await sn(t,{...o,altBoundary:!0}),a=uo(s,n.floating);return{data:{escapedOffsets:a,escaped:co(a)}}}default:return{}}}}};async function Jl(e,t){const{placement:n,platform:r,elements:o}=e,s=await(r.isRTL==null?void 0:r.isRTL(o.floating)),a=wt(n),l=Ut(n),i=At(n)==="y",u=["left","top"].includes(a)?-1:1,d=s&&i?-1:1,c=Ft(t,e);let{mainAxis:f,crossAxis:g,alignmentAxis:h}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return l&&typeof h=="number"&&(g=l==="end"?h*-1:h),i?{x:g*d,y:f*u}:{x:f*u,y:g*d}}var eu=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:s,placement:a,middlewareData:l}=t,i=await Jl(t,e);return a===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:o+i.x,y:s+i.y,data:{...i,placement:a}}}}},tu=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:m=>{let{x:v,y:x}=m;return{x:v,y:x}}},...i}=Ft(e,t),u={x:n,y:r},d=await sn(t,i),c=At(wt(o)),f=mi(c);let g=u[f],h=u[c];if(s){const m=f==="y"?"top":"left",v=f==="y"?"bottom":"right",x=g+d[m],b=g-d[v];g=er(x,g,b)}if(a){const m=c==="y"?"top":"left",v=c==="y"?"bottom":"right",x=h+d[m],b=h-d[v];h=er(x,h,b)}const y=l.fn({...t,[f]:g,[c]:h});return{...y,data:{x:y.x-n,y:y.y-r}}}}},nu=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:s}=t,{apply:a=()=>{},...l}=Ft(e,t),i=await sn(t,l),u=wt(n),d=Ut(n),c=At(n)==="y",{width:f,height:g}=r.floating;let h,y;u==="top"||u==="bottom"?(h=u,y=d===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?"start":"end")?"left":"right"):(y=u,h=d==="end"?"top":"bottom");const m=g-i.top-i.bottom,v=f-i.left-i.right,x=Xe(g-i[h],m),b=Xe(f-i[y],v),w=!t.middlewareData.shift;let $=x,q=b;if(c?q=d||w?Xe(b,v):v:$=d||w?Xe(x,m):m,w&&!d){const I=Pe(i.left,0),k=Pe(i.right,0),T=Pe(i.top,0),N=Pe(i.bottom,0);c?q=f-2*(I!==0||k!==0?I+k:Pe(i.left,i.right)):$=g-2*(T!==0||N!==0?T+N:Pe(i.top,i.bottom))}await a({...t,availableWidth:q,availableHeight:$});const D=await o.getDimensions(s.floating);return f!==D.width||g!==D.height?{reset:{rects:!0}}:{}}}};function Ht(e){return yi(e)?(e.nodeName||"").toLowerCase():"#document"}function Oe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function gt(e){var t;return(t=(yi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function yi(e){return e instanceof Node||e instanceof Oe(e).Node}function He(e){return e instanceof Element||e instanceof Oe(e).Element}function Je(e){return e instanceof HTMLElement||e instanceof Oe(e).HTMLElement}function fo(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Oe(e).ShadowRoot}function fn(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Ve(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function ru(e){return["table","td","th"].includes(Ht(e))}function Pn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function mr(e){const t=vr(),n=He(e)?Ve(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function ou(e){let t=$t(e);for(;Je(t)&&!Gt(t);){if(mr(t))return t;if(Pn(t))return null;t=$t(t)}return null}function vr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Gt(e){return["html","body","#document"].includes(Ht(e))}function Ve(e){return Oe(e).getComputedStyle(e)}function On(e){return He(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function $t(e){if(Ht(e)==="html")return e;const t=e.assignedSlot||e.parentNode||fo(e)&&e.host||gt(e);return fo(t)?t.host:t}function bi(e){const t=$t(e);return Gt(t)?e.ownerDocument?e.ownerDocument.body:e.body:Je(t)&&fn(t)?t:bi(t)}function an(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=bi(e),s=o===((r=e.ownerDocument)==null?void 0:r.body),a=Oe(o);return s?t.concat(a,a.visualViewport||[],fn(o)?o:[],a.frameElement&&n?an(a.frameElement):[]):t.concat(o,an(o,[],n))}function xi(e){const t=Ve(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Je(e),s=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=Cn(n)!==s||Cn(r)!==a;return l&&(n=s,r=a),{width:n,height:r,$:l}}function yr(e){return He(e)?e:e.contextElement}function Bt(e){const t=yr(e);if(!Je(t))return xt(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:s}=xi(t);let a=(s?Cn(n.width):n.width)/r,l=(s?Cn(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}var iu=xt(0);function wi(e){const t=Oe(e);return!vr()||!t.visualViewport?iu:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function su(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Oe(e)?!1:t}function Tt(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),s=yr(e);let a=xt(1);t&&(r?He(r)&&(a=Bt(r)):a=Bt(e));const l=su(s,n,r)?wi(s):xt(0);let i=(o.left+l.x)/a.x,u=(o.top+l.y)/a.y,d=o.width/a.x,c=o.height/a.y;if(s){const f=Oe(s),g=r&&He(r)?Oe(r):r;let h=f,y=h.frameElement;for(;y&&r&&g!==h;){const m=Bt(y),v=y.getBoundingClientRect(),x=Ve(y),b=v.left+(y.clientLeft+parseFloat(x.paddingLeft))*m.x,w=v.top+(y.clientTop+parseFloat(x.paddingTop))*m.y;i*=m.x,u*=m.y,d*=m.x,c*=m.y,i+=b,u+=w,h=Oe(y),y=h.frameElement}}return kn({width:d,height:c,x:i,y:u})}function au(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const s=o==="fixed",a=gt(r),l=t?Pn(t.floating):!1;if(r===a||l&&s)return n;let i={scrollLeft:0,scrollTop:0},u=xt(1);const d=xt(0),c=Je(r);if((c||!c&&!s)&&((Ht(r)!=="body"||fn(a))&&(i=On(r)),Je(r))){const f=Tt(r);u=Bt(r),d.x=f.x+r.clientLeft,d.y=f.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-i.scrollLeft*u.x+d.x,y:n.y*u.y-i.scrollTop*u.y+d.y}}function lu(e){return Array.from(e.getClientRects())}function $i(e){return Tt(gt(e)).left+On(e).scrollLeft}function uu(e){const t=gt(e),n=On(e),r=e.ownerDocument.body,o=Pe(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Pe(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+$i(e);const l=-n.scrollTop;return Ve(r).direction==="rtl"&&(a+=Pe(t.clientWidth,r.clientWidth)-o),{width:o,height:s,x:a,y:l}}function cu(e,t){const n=Oe(e),r=gt(e),o=n.visualViewport;let s=r.clientWidth,a=r.clientHeight,l=0,i=0;if(o){s=o.width,a=o.height;const u=vr();(!u||u&&t==="fixed")&&(l=o.offsetLeft,i=o.offsetTop)}return{width:s,height:a,x:l,y:i}}function du(e,t){const n=Tt(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,s=Je(e)?Bt(e):xt(1),a=e.clientWidth*s.x,l=e.clientHeight*s.y,i=o*s.x,u=r*s.y;return{width:a,height:l,x:i,y:u}}function go(e,t,n){let r;if(t==="viewport")r=cu(e,n);else if(t==="document")r=uu(gt(e));else if(He(t))r=du(t,n);else{const o=wi(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return kn(r)}function Ci(e,t){const n=$t(e);return n===t||!He(n)||Gt(n)?!1:Ve(n).position==="fixed"||Ci(n,t)}function fu(e,t){const n=t.get(e);if(n)return n;let r=an(e,[],!1).filter(l=>He(l)&&Ht(l)!=="body"),o=null;const s=Ve(e).position==="fixed";let a=s?$t(e):e;for(;He(a)&&!Gt(a);){const l=Ve(a),i=mr(a);!i&&l.position==="fixed"&&(o=null),(s?!i&&!o:!i&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||fn(a)&&!i&&Ci(e,a))?r=r.filter(d=>d!==a):o=l,a=$t(a)}return t.set(e,r),r}function gu(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?Pn(t)?[]:fu(t,this._c):[].concat(n),r],l=a[0],i=a.reduce((u,d)=>{const c=go(t,d,o);return u.top=Pe(c.top,u.top),u.right=Xe(c.right,u.right),u.bottom=Xe(c.bottom,u.bottom),u.left=Pe(c.left,u.left),u},go(t,l,o));return{width:i.right-i.left,height:i.bottom-i.top,x:i.left,y:i.top}}function hu(e){const{width:t,height:n}=xi(e);return{width:t,height:n}}function pu(e,t,n){const r=Je(t),o=gt(t),s=n==="fixed",a=Tt(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const i=xt(0);if(r||!r&&!s)if((Ht(t)!=="body"||fn(o))&&(l=On(t)),r){const c=Tt(t,!0,s,t);i.x=c.x+t.clientLeft,i.y=c.y+t.clientTop}else o&&(i.x=$i(o));const u=a.left+l.scrollLeft-i.x,d=a.top+l.scrollTop-i.y;return{x:u,y:d,width:a.width,height:a.height}}function Nn(e){return Ve(e).position==="static"}function ho(e,t){return!Je(e)||Ve(e).position==="fixed"?null:t?t(e):e.offsetParent}function Si(e,t){const n=Oe(e);if(Pn(e))return n;if(!Je(e)){let o=$t(e);for(;o&&!Gt(o);){if(He(o)&&!Nn(o))return o;o=$t(o)}return n}let r=ho(e,t);for(;r&&ru(r)&&Nn(r);)r=ho(r,t);return r&&Gt(r)&&Nn(r)&&!mr(r)?n:r||ou(e)||n}var mu=async function(e){const t=this.getOffsetParent||Si,n=this.getDimensions,r=await n(e.floating);return{reference:pu(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function vu(e){return Ve(e).direction==="rtl"}var ki={convertOffsetParentRelativeRectToViewportRelativeRect:au,getDocumentElement:gt,getClippingRect:gu,getOffsetParent:Si,getElementRects:mu,getClientRects:lu,getDimensions:hu,getScale:Bt,isElement:He,isRTL:vu};function yu(e,t){let n=null,r;const o=gt(e);function s(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,i){l===void 0&&(l=!1),i===void 0&&(i=1),s();const{left:u,top:d,width:c,height:f}=e.getBoundingClientRect();if(l||t(),!c||!f)return;const g=yn(d),h=yn(o.clientWidth-(u+c)),y=yn(o.clientHeight-(d+f)),m=yn(u),x={rootMargin:-g+"px "+-h+"px "+-y+"px "+-m+"px",threshold:Pe(0,Xe(1,i))||1};let b=!0;function w($){const q=$[0].intersectionRatio;if(q!==i){if(!b)return a();q?a(!1,q):r=setTimeout(()=>{a(!1,1e-7)},1e3)}b=!1}try{n=new IntersectionObserver(w,{...x,root:o.ownerDocument})}catch{n=new IntersectionObserver(w,x)}n.observe(e)}return a(!0),s}function bu(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:i=!1}=r,u=yr(e),d=o||s?[...u?an(u):[],...an(t)]:[];d.forEach(v=>{o&&v.addEventListener("scroll",n,{passive:!0}),s&&v.addEventListener("resize",n)});const c=u&&l?yu(u,n):null;let f=-1,g=null;a&&(g=new ResizeObserver(v=>{let[x]=v;x&&x.target===u&&g&&(g.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var b;(b=g)==null||b.observe(t)})),n()}),u&&!i&&g.observe(u),g.observe(t));let h,y=i?Tt(e):null;i&&m();function m(){const v=Tt(e);y&&(v.x!==y.x||v.y!==y.y||v.width!==y.width||v.height!==y.height)&&n(),y=v,h=requestAnimationFrame(m)}return n(),()=>{var v;d.forEach(x=>{o&&x.removeEventListener("scroll",n),s&&x.removeEventListener("resize",n)}),c?.(),(v=g)==null||v.disconnect(),g=null,i&&cancelAnimationFrame(h)}}var xu=eu,wu=tu,$u=Xl,Cu=nu,Su=Zl,ku=Yl,Eu=(e,t,n)=>{const r=new Map,o={platform:ki,...n},s={...o.platform,_c:r};return Ql(e,t,{...o,platform:s})},br=xe();function xr(){const e=we(br);if(e===void 0)throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");return e}var Mu=_('<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">'),nr=30,po=nr/2,Du={top:180,right:-90,bottom:0,left:90};function wr(e){const t=xr(),n=Q({size:nr},e),[r,o]=J(n,["ref","style","size"]),s=()=>t.currentPlacement().split("-")[0],a=Au(t.contentRef),l=()=>a()?.getPropertyValue("background-color")||"none",i=()=>a()?.getPropertyValue(`border-${s()}-color`)||"none",u=()=>a()?.getPropertyValue(`border-${s()}-width`)||"0px",d=()=>Number.parseInt(u())*2*(nr/r.size),c=()=>`rotate(${Du[s()]} ${po} ${po}) translate(0 2)`;return p(fe,j({as:"div",ref(f){const g=De(t.setArrowRef,r.ref);typeof g=="function"&&g(f)},"aria-hidden":"true",get style(){return An({position:"absolute","font-size":`${r.size}px`,width:"1em",height:"1em","pointer-events":"none",fill:l(),stroke:i(),"stroke-width":d()},r.style)}},o,{get children(){const f=Mu(),g=f.firstChild;return U(()=>A(g,"transform",c())),f}}))}function Au(e){const[t,n]=z();return B(()=>{const r=e();r&&n(Da(r).getComputedStyle(r))}),t}function Tu(e){const t=xr(),[n,r]=J(e,["ref","style"]);return p(fe,j({as:"div",ref(o){const s=De(t.setPositionerRef,n.ref);typeof s=="function"&&s(o)},"data-popper-positioner":"",get style(){return An({position:"absolute",top:0,left:0,"min-width":"max-content"},n.style)}},r))}function mo(e){const{x:t=0,y:n=0,width:r=0,height:o=0}=e??{};if(typeof DOMRect=="function")return new DOMRect(t,n,r,o);const s={x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:n+o,left:t};return{...s,toJSON:()=>s}}function Fu(e,t){return{contextElement:e,getBoundingClientRect:()=>{const r=t(e);return r?mo(r):e?e.getBoundingClientRect():mo()}}}function Iu(e){return/^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e)}var Pu={top:"bottom",right:"left",bottom:"top",left:"right"};function Ou(e,t){const[n,r]=e.split("-"),o=Pu[n];return r?n==="left"||n==="right"?`${o} ${r==="start"?"top":"bottom"}`:r==="start"?`${o} ${t==="rtl"?"right":"left"}`:`${o} ${t==="rtl"?"left":"right"}`:`${o} center`}function Lu(e){const t=Q({getAnchorRect:f=>f?.getBoundingClientRect(),placement:"bottom",gutter:0,shift:0,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,hideWhenDetached:!1,detachedPadding:0,arrowPadding:4,overflowPadding:8},e),[n,r]=z(),[o,s]=z(),[a,l]=z(t.placement),i=()=>Fu(t.anchorRef?.(),t.getAnchorRect),{direction:u}=Ct();async function d(){const f=i(),g=n(),h=o();if(!f||!g)return;const y=(h?.clientHeight||0)/2,m=typeof t.gutter=="number"?t.gutter+y:t.gutter??y;g.style.setProperty("--kb-popper-content-overflow-padding",`${t.overflowPadding}px`),f.getBoundingClientRect();const v=[xu(({placement:q})=>{const D=!!q.split("-")[1];return{mainAxis:m,crossAxis:D?void 0:t.shift,alignmentAxis:t.shift}})];if(t.flip!==!1){const q=typeof t.flip=="string"?t.flip.split(" "):void 0;if(q!==void 0&&!q.every(Iu))throw new Error("`flip` expects a spaced-delimited list of placements");v.push($u({padding:t.overflowPadding,fallbackPlacements:q}))}(t.slide||t.overlap)&&v.push(wu({mainAxis:t.slide,crossAxis:t.overlap,padding:t.overflowPadding})),v.push(Cu({padding:t.overflowPadding,apply({availableWidth:q,availableHeight:D,rects:I}){const k=Math.round(I.reference.width);q=Math.floor(q),D=Math.floor(D),g.style.setProperty("--kb-popper-anchor-width",`${k}px`),g.style.setProperty("--kb-popper-content-available-width",`${q}px`),g.style.setProperty("--kb-popper-content-available-height",`${D}px`),t.sameWidth&&(g.style.width=`${k}px`),t.fitViewport&&(g.style.maxWidth=`${q}px`,g.style.maxHeight=`${D}px`)}})),t.hideWhenDetached&&v.push(Su({padding:t.detachedPadding})),h&&v.push(ku({element:h,padding:t.arrowPadding}));const x=await Eu(f,g,{placement:t.placement,strategy:"absolute",middleware:v,platform:{...ki,isRTL:()=>u()==="rtl"}});if(l(x.placement),t.onCurrentPlacementChange?.(x.placement),!g)return;g.style.setProperty("--kb-popper-content-transform-origin",Ou(x.placement,u()));const b=Math.round(x.x),w=Math.round(x.y);let $;if(t.hideWhenDetached&&($=x.middlewareData.hide?.referenceHidden?"hidden":"visible"),Object.assign(g.style,{top:"0",left:"0",transform:`translate3d(${b}px, ${w}px, 0)`,visibility:$}),h&&x.middlewareData.arrow){const{x:q,y:D}=x.middlewareData.arrow,I=x.placement.split("-")[0];Object.assign(h.style,{left:q!=null?`${q}px`:"",top:D!=null?`${D}px`:"",[I]:"100%"})}}B(()=>{const f=i(),g=n();if(!f||!g)return;const h=bu(f,g,d,{elementResize:typeof ResizeObserver=="function"});H(h)}),B(()=>{const f=n(),g=t.contentRef?.();!f||!g||queueMicrotask(()=>{f.style.zIndex=getComputedStyle(g).zIndex})});const c={currentPlacement:a,contentRef:()=>t.contentRef?.(),setPositionerRef:r,setArrowRef:s};return p(br.Provider,{value:c,get children(){return t.children}})}var Ei=Object.assign(Lu,{Arrow:wr,Context:br,usePopperContext:xr,Positioner:Tu});function qu(e){const t=n=>{n.key===lr.Escape&&e.onEscapeKeyDown?.(n)};B(()=>{if(E(e.isDisabled))return;const n=e.ownerDocument?.()??Ze();n.addEventListener("keydown",t),H(()=>{n.removeEventListener("keydown",t)})})}var vo="interactOutside.pointerDownOutside",yo="interactOutside.focusOutside";function _u(e,t){let n,r=Ua;const o=()=>Ze(t()),s=c=>e.onPointerDownOutside?.(c),a=c=>e.onFocusOutside?.(c),l=c=>e.onInteractOutside?.(c),i=c=>{const f=c.target;return!(f instanceof HTMLElement)||f.closest(`[${$n}]`)||!Ke(o(),f)||Ke(t(),f)?!1:!e.shouldExcludeElement?.(f)},u=c=>{function f(){const g=t(),h=c.target;if(!g||!h||!i(c))return;const y=be([s,l]);h.addEventListener(vo,y,{once:!0});const m=new CustomEvent(vo,{bubbles:!1,cancelable:!0,detail:{originalEvent:c,isContextMenu:c.button===2||Pa(c)&&c.button===0}});h.dispatchEvent(m)}c.pointerType==="touch"?(o().removeEventListener("click",f),r=f,o().addEventListener("click",f,{once:!0})):f()},d=c=>{const f=t(),g=c.target;if(!f||!g||!i(c))return;const h=be([a,l]);g.addEventListener(yo,h,{once:!0});const y=new CustomEvent(yo,{bubbles:!1,cancelable:!0,detail:{originalEvent:c,isContextMenu:!1}});g.dispatchEvent(y)};B(()=>{E(e.isDisabled)||(n=window.setTimeout(()=>{o().addEventListener("pointerdown",u,!0)},0),o().addEventListener("focusin",d,!0),H(()=>{window.clearTimeout(n),o().removeEventListener("click",r),o().removeEventListener("pointerdown",u,!0),o().removeEventListener("focusin",d,!0)}))})}var Mi=xe();function Ru(){return we(Mi)}function zu(e){let t;const n=Ru(),[r,o]=J(e,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),s=new Set([]),a=c=>{s.add(c);const f=n?.registerNestedLayer(c);return()=>{s.delete(c),f?.()}};_u({shouldExcludeElement:c=>t?r.excludedElements?.some(f=>Ke(f(),c))||[...s].some(f=>Ke(f,c)):!1,onPointerDownOutside:c=>{!t||Fe.isBelowPointerBlockingLayer(t)||!r.bypassTopMostLayerCheck&&!Fe.isTopMostLayer(t)||(r.onPointerDownOutside?.(c),r.onInteractOutside?.(c),c.defaultPrevented||r.onDismiss?.())},onFocusOutside:c=>{r.onFocusOutside?.(c),r.onInteractOutside?.(c),c.defaultPrevented||r.onDismiss?.()}},()=>t),qu({ownerDocument:()=>Ze(t),onEscapeKeyDown:c=>{!t||!Fe.isTopMostLayer(t)||(r.onEscapeKeyDown?.(c),!c.defaultPrevented&&r.onDismiss&&(c.preventDefault(),r.onDismiss()))}}),Dt(()=>{if(!t)return;Fe.addLayer({node:t,isPointerBlocking:r.disableOutsidePointerEvents,dismiss:r.onDismiss});const c=n?.registerNestedLayer(t);Fe.assignPointerEventToLayers(),Fe.disableBodyPointerEvents(t),H(()=>{t&&(Fe.removeLayer(t),c?.(),Fe.assignPointerEventToLayers(),Fe.restoreBodyPointerEvents(t))})}),B(dt([()=>t,()=>r.disableOutsidePointerEvents],([c,f])=>{if(!c)return;const g=Fe.find(c);g&&g.isPointerBlocking!==f&&(g.isPointerBlocking=f,Fe.assignPointerEventToLayers()),f&&Fe.disableBodyPointerEvents(c),H(()=>{Fe.restoreBodyPointerEvents(c)})},{defer:!0}));const d={registerNestedLayer:a};return p(Mi.Provider,{value:d,get children(){return p(fe,j({as:"div",ref(c){const f=De(g=>t=g,r.ref);typeof f=="function"&&f(c)}},o))}})}function Di(e={}){const[t,n]=ni({value:()=>E(e.open),defaultValue:()=>!!E(e.defaultOpen),onChange:a=>e.onOpenChange?.(a)}),r=()=>{n(!0)},o=()=>{n(!1)};return{isOpen:t,setIsOpen:n,open:r,close:o,toggle:()=>{t()?o():r()}}}var ze={};In(ze,{Description:()=>ei,ErrorMessage:()=>ti,Item:()=>Ii,ItemControl:()=>Pi,ItemDescription:()=>Oi,ItemIndicator:()=>Li,ItemInput:()=>qi,ItemLabel:()=>_i,Label:()=>Ri,RadioGroup:()=>Ku,Root:()=>zi});var Ai=xe();function Ti(){const e=we(Ai);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}var Fi=xe();function gn(){const e=we(Fi);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function Ii(e){const t=cn(),n=Ti(),r=`${t.generateId("item")}-${Le()}`,o=Q({id:r},e),[s,a]=J(o,["value","disabled","onPointerDown"]),[l,i]=z(),[u,d]=z(),[c,f]=z(),[g,h]=z(),[y,m]=z(!1),v=L(()=>n.isSelectedValue(s.value)),x=L(()=>s.disabled||t.isDisabled()||!1),b=q=>{de(q,s.onPointerDown),y()&&q.preventDefault()},w=L(()=>({...t.dataset(),"data-disabled":x()?"":void 0,"data-checked":v()?"":void 0})),$={value:()=>s.value,dataset:w,isSelected:v,isDisabled:x,inputId:l,labelId:u,descriptionId:c,inputRef:g,select:()=>n.setSelectedValue(s.value),generateId:un(()=>a.id),registerInput:Be(i),registerLabel:Be(d),registerDescription:Be(f),setIsFocused:m,setInputRef:h};return p(Fi.Provider,{value:$,get children(){return p(fe,j({as:"div",role:"group",onPointerDown:b},w,a))}})}function Pi(e){const t=gn(),n=Q({id:t.generateId("control")},e),[r,o]=J(n,["onClick","onKeyDown"]);return p(fe,j({as:"div",onClick:l=>{de(l,r.onClick),t.select(),t.inputRef()?.focus()},onKeyDown:l=>{de(l,r.onKeyDown),l.key===lr.Space&&(t.select(),t.inputRef()?.focus())}},()=>t.dataset(),o))}function Oi(e){const t=gn(),n=Q({id:t.generateId("description")},e);return B(()=>H(t.registerDescription(n.id))),p(fe,j({as:"div"},()=>t.dataset(),n))}function Li(e){const t=gn(),n=Q({id:t.generateId("indicator")},e),[r,o]=J(n,["ref","forceMount"]),[s,a]=z(),{present:l}=fi({show:()=>r.forceMount||t.isSelected(),element:()=>s()??null});return p(R,{get when(){return l()},get children(){return p(fe,j({as:"div",ref(i){const u=De(a,r.ref);typeof u=="function"&&u(i)}},()=>t.dataset(),o))}})}function qi(e){const t=cn(),n=Ti(),r=gn(),o=Q({id:r.generateId("input")},e),[s,a]=J(o,["ref","style","aria-labelledby","aria-describedby","onChange","onFocus","onBlur"]),l=()=>[s["aria-labelledby"],r.labelId(),s["aria-labelledby"]!=null&&a["aria-label"]!=null?a.id:void 0].filter(Boolean).join(" ")||void 0,i=()=>[s["aria-describedby"],r.descriptionId(),n.ariaDescribedBy()].filter(Boolean).join(" ")||void 0,[u,d]=z(!1),c=h=>{if(de(h,s.onChange),h.stopPropagation(),!u()){n.setSelectedValue(r.value());const y=h.target;y.checked=r.isSelected()}d(!1)},f=h=>{de(h,s.onFocus),r.setIsFocused(!0)},g=h=>{de(h,s.onBlur),r.setIsFocused(!1)};return B(dt([()=>r.isSelected(),()=>r.value()],h=>{if(!h[0]&&h[1]===r.value())return;d(!0);const y=r.inputRef();y?.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),y?.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))},{defer:!0})),B(()=>H(r.registerInput(a.id))),p(fe,j({as:"input",ref(h){const y=De(r.setInputRef,s.ref);typeof y=="function"&&y(h)},type:"radio",get name(){return t.name()},get value(){return r.value()},get checked(){return r.isSelected()},get required(){return t.isRequired()},get disabled(){return r.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return An({...Zo},s.style)},get"aria-labelledby"(){return l()},get"aria-describedby"(){return i()},onChange:c,onFocus:f,onBlur:g},()=>r.dataset(),a))}function _i(e){const t=gn(),n=Q({id:t.generateId("label")},e);return B(()=>H(t.registerLabel(n.id))),p(fe,j({as:"label",get for(){return t.inputId()}},()=>t.dataset(),n))}function Ri(e){return p(Qa,j({as:"span"},e))}function zi(e){let t;const n=`radiogroup-${Le()}`,r=Q({id:n,orientation:"vertical"},e),[o,s,a]=J(r,["ref","value","defaultValue","onChange","orientation","aria-labelledby","aria-describedby"],ja),[l,i]=dn({value:()=>o.value,defaultValue:()=>o.defaultValue,onChange:h=>o.onChange?.(h)}),{formControlContext:u}=Wa(s);Ya(()=>t,()=>i(o.defaultValue??""));const d=()=>u.getAriaLabelledBy(E(s.id),a["aria-label"],o["aria-labelledby"]),c=()=>u.getAriaDescribedBy(o["aria-describedby"]),f=h=>h===l(),g={ariaDescribedBy:c,isSelectedValue:f,setSelectedValue:h=>{if(!(u.isReadOnly()||u.isDisabled())&&(i(h),t))for(const y of t.querySelectorAll("[type='radio']")){const m=y;m.checked=f(m.value)}}};return p(Jo.Provider,{value:u,get children(){return p(Ai.Provider,{value:g,get children(){return p(fe,j({as:"div",ref(h){const y=De(m=>t=m,o.ref);typeof y=="function"&&y(h)},role:"radiogroup",get id(){return E(s.id)},get"aria-invalid"(){return u.validationState()==="invalid"||void 0},get"aria-required"(){return u.isRequired()||void 0},get"aria-disabled"(){return u.isDisabled()||void 0},get"aria-readonly"(){return u.isReadOnly()||void 0},get"aria-orientation"(){return o.orientation},get"aria-labelledby"(){return d()},get"aria-describedby"(){return c()}},()=>u.dataset(),a))}})}})}var Ku=Object.assign(zi,{Description:ei,ErrorMessage:ti,Item:Ii,ItemControl:Pi,ItemDescription:Oi,ItemIndicator:Li,ItemInput:qi,ItemLabel:_i,Label:Ri}),Bu=class{collection;ref;collator;constructor(e,t,n){this.collection=e,this.ref=t,this.collator=n}getKeyBelow(e){let t=this.collection().getKeyAfter(e);for(;t!=null;){const n=this.collection().getItem(t);if(n&&n.type==="item"&&!n.disabled)return t;t=this.collection().getKeyAfter(t)}}getKeyAbove(e){let t=this.collection().getKeyBefore(e);for(;t!=null;){const n=this.collection().getItem(t);if(n&&n.type==="item"&&!n.disabled)return t;t=this.collection().getKeyBefore(t)}}getFirstKey(){let e=this.collection().getFirstKey();for(;e!=null;){const t=this.collection().getItem(e);if(t&&t.type==="item"&&!t.disabled)return e;e=this.collection().getKeyAfter(e)}}getLastKey(){let e=this.collection().getLastKey();for(;e!=null;){const t=this.collection().getItem(e);if(t&&t.type==="item"&&!t.disabled)return e;e=this.collection().getKeyBefore(e)}}getItem(e){return this.ref?.()?.querySelector(`[data-key="${e}"]`)??null}getKeyPageAbove(e){const t=this.ref?.();let n=this.getItem(e);if(!t||!n)return;const r=Math.max(0,n.offsetTop+n.offsetHeight-t.offsetHeight);let o=e;for(;o&&n&&n.offsetTop>r;)o=this.getKeyAbove(o),n=o!=null?this.getItem(o):null;return o}getKeyPageBelow(e){const t=this.ref?.();let n=this.getItem(e);if(!t||!n)return;const r=Math.min(t.scrollHeight,n.offsetTop-n.offsetHeight+t.offsetHeight);let o=e;for(;o&&n&&n.offsetTop<r;)o=this.getKeyBelow(o),n=o!=null?this.getItem(o):null;return o}getKeyForSearch(e,t){const n=this.collator?.();if(!n)return;let r=t!=null?this.getKeyBelow(t):this.getFirstKey();for(;r!=null;){const o=this.collection().getItem(r);if(o){const s=o.textValue.slice(0,e.length);if(o.textValue&&n.compare(s,e)===0)return r}r=this.getKeyBelow(r)}}};function Nu(e,t,n){const r=vl({usage:"search",sensitivity:"base"}),o=L(()=>{const s=E(e.keyboardDelegate);return s||new Bu(e.collection,t,r)});return Sl({selectionManager:()=>E(e.selectionManager),keyboardDelegate:o,autoFocus:()=>E(e.autoFocus),deferAutoFocus:()=>E(e.deferAutoFocus),shouldFocusWrap:()=>E(e.shouldFocusWrap),disallowEmptySelection:()=>E(e.disallowEmptySelection),selectOnFocus:()=>E(e.selectOnFocus),disallowTypeAhead:()=>E(e.disallowTypeAhead),shouldUseVirtualFocus:()=>E(e.shouldUseVirtualFocus),allowsTabNavigation:()=>E(e.allowsTabNavigation),isVirtualized:()=>E(e.isVirtualized),scrollToKey:s=>E(e.scrollToKey)?.(s),orientation:()=>E(e.orientation)},t)}var Gn="focusScope.autoFocusOnMount",Un="focusScope.autoFocusOnUnmount",bo={bubbles:!1,cancelable:!0},xo={stack:[],active(){return this.stack[0]},add(e){e!==this.active()&&this.active()?.pause(),this.stack=Yn(this.stack,e),this.stack.unshift(e)},remove(e){this.stack=Yn(this.stack,e),this.active()?.resume()}};function Gu(e,t){const[n,r]=z(!1),o={pause(){r(!0)},resume(){r(!1)}};let s=null;const a=h=>e.onMountAutoFocus?.(h),l=h=>e.onUnmountAutoFocus?.(h),i=()=>Ze(t()),u=()=>{const h=i().createElement("span");return h.setAttribute("data-focus-trap",""),h.tabIndex=0,Object.assign(h.style,Zo),h},d=()=>{const h=t();return h?Yo(h,!0).filter(y=>!y.hasAttribute("data-focus-trap")):[]},c=()=>{const h=d();return h.length>0?h[0]:null},f=()=>{const h=d();return h.length>0?h[h.length-1]:null},g=()=>{const h=t();if(!h)return!1;const y=nn(h);return!y||Ke(h,y)?!1:Xo(y)};B(()=>{const h=t();if(!h)return;xo.add(o);const y=nn(h);if(!Ke(h,y)){const v=new CustomEvent(Gn,bo);h.addEventListener(Gn,a),h.dispatchEvent(v),v.defaultPrevented||setTimeout(()=>{ke(c()),nn(h)===y&&ke(h)},0)}H(()=>{h.removeEventListener(Gn,a),setTimeout(()=>{const v=new CustomEvent(Un,bo);g()&&v.preventDefault(),h.addEventListener(Un,l),h.dispatchEvent(v),v.defaultPrevented||ke(y??i().body),h.removeEventListener(Un,l),xo.remove(o)},0)})}),B(()=>{const h=t();if(!h||!E(e.trapFocus)||n())return;const y=v=>{const x=v.target;x?.closest(`[${$n}]`)||(Ke(h,x)?s=x:ke(s))},m=v=>{const b=v.relatedTarget??nn(h);b?.closest(`[${$n}]`)||Ke(h,b)||ke(s)};i().addEventListener("focusin",y),i().addEventListener("focusout",m),H(()=>{i().removeEventListener("focusin",y),i().removeEventListener("focusout",m)})}),B(()=>{const h=t();if(!h||!E(e.trapFocus)||n())return;const y=u();h.insertAdjacentElement("afterbegin",y);const m=u();h.insertAdjacentElement("beforeend",m);function v(b){const w=c(),$=f();b.relatedTarget===w?ke($):ke(w)}y.addEventListener("focusin",v),m.addEventListener("focusin",v);const x=new MutationObserver(b=>{for(const w of b)w.previousSibling===m&&(m.remove(),h.insertAdjacentElement("beforeend",m)),w.nextSibling===y&&(y.remove(),h.insertAdjacentElement("afterbegin",y))});x.observe(h,{childList:!0,subtree:!1}),H(()=>{y.removeEventListener("focusin",v),m.removeEventListener("focusin",v),y.remove(),m.remove(),x.disconnect()})})}var Uu="data-live-announcer";function Hu(e){B(()=>{E(e.isDisabled)||H(Vu(E(e.targets),E(e.root)))})}var Jt=new WeakMap,Re=[];function Vu(e,t=document.body){const n=new Set(e),r=new Set,o=i=>{for(const f of i.querySelectorAll(`[${Uu}], [${$n}]`))n.add(f);const u=f=>{if(n.has(f)||f.parentElement&&r.has(f.parentElement)&&f.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(const g of n)if(f.contains(g))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},d=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:u}),c=u(i);if(c===NodeFilter.FILTER_ACCEPT&&s(i),c!==NodeFilter.FILTER_REJECT){let f=d.nextNode();for(;f!=null;)s(f),f=d.nextNode()}},s=i=>{const u=Jt.get(i)??0;i.getAttribute("aria-hidden")==="true"&&u===0||(u===0&&i.setAttribute("aria-hidden","true"),r.add(i),Jt.set(i,u+1))};Re.length&&Re[Re.length-1].disconnect(),o(t);const a=new MutationObserver(i=>{for(const u of i)if(!(u.type!=="childList"||u.addedNodes.length===0)&&![...n,...r].some(d=>d.contains(u.target))){for(const d of u.removedNodes)d instanceof Element&&(n.delete(d),r.delete(d));for(const d of u.addedNodes)(d instanceof HTMLElement||d instanceof SVGElement)&&(d.dataset.liveAnnouncer==="true"||d.dataset.reactAriaTopLayer==="true")?n.add(d):d instanceof Element&&o(d)}});a.observe(t,{childList:!0,subtree:!0});const l={observe(){a.observe(t,{childList:!0,subtree:!0})},disconnect(){a.disconnect()}};return Re.push(l),()=>{a.disconnect();for(const i of r){const u=Jt.get(i);if(u==null)return;u===1?(i.removeAttribute("aria-hidden"),Jt.delete(i)):Jt.set(i,u-1)}l===Re[Re.length-1]?(Re.pop(),Re.length&&Re[Re.length-1].observe()):Re.splice(Re.indexOf(l),1)}}var bn=new Map,ju=e=>{B(()=>{const t=Se(e.style)??{},n=Se(e.properties)??[],r={};for(const s in t)r[s]=e.element.style[s];const o=bn.get(e.key);o?o.activeCount++:bn.set(e.key,{activeCount:1,originalStyles:r,properties:n.map(s=>s.key)}),Object.assign(e.element.style,e.style);for(const s of n)e.element.style.setProperty(s.key,s.value);H(()=>{const s=bn.get(e.key);if(s){if(s.activeCount!==1){s.activeCount--;return}bn.delete(e.key);for(const[a,l]of Object.entries(s.originalStyles))e.element.style[a]=l;for(const a of s.properties)e.element.style.removeProperty(a);e.element.style.length===0&&e.element.removeAttribute("style"),e.cleanup?.()}})})},wo=ju,Wu=(e,t)=>{switch(t){case"x":return[e.clientWidth,e.scrollLeft,e.scrollWidth];case"y":return[e.clientHeight,e.scrollTop,e.scrollHeight]}},Qu=(e,t)=>{const n=getComputedStyle(e),r=t==="x"?n.overflowX:n.overflowY;return r==="auto"||r==="scroll"||e.tagName==="HTML"&&r==="visible"},Yu=(e,t,n)=>{const r=t==="x"&&window.getComputedStyle(e).direction==="rtl"?-1:1;let o=e,s=0,a=0,l=!1;do{const[i,u,d]=Wu(o,t),c=d-i-r*u;(u!==0||c!==0)&&Qu(o,t)&&(s+=c,a+=u),o===(n??document.documentElement)?l=!0:o=o._$host??o.parentElement}while(o&&!l);return[s,a]},[$o,Co]=z([]),Xu=e=>$o().indexOf(e)===$o().length-1,Zu=e=>{const t=j({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:"padding",restoreScrollPosition:!0,allowPinchZoom:!1},e),n=Le();let r=[0,0],o=null,s=null;B(()=>{Se(t.enabled)&&(Co(u=>[...u,n]),H(()=>{Co(u=>u.filter(d=>d!==n))}))}),B(()=>{if(!Se(t.enabled)||!Se(t.hideScrollbar))return;const{body:u}=document,d=window.innerWidth-u.offsetWidth;if(Se(t.preventScrollbarShift)){const c={overflow:"hidden"},f=[];d>0&&(Se(t.preventScrollbarShiftMode)==="padding"?c.paddingRight=`calc(${window.getComputedStyle(u).paddingRight} + ${d}px)`:c.marginRight=`calc(${window.getComputedStyle(u).marginRight} + ${d}px)`,f.push({key:"--scrollbar-width",value:`${d}px`}));const g=window.scrollY,h=window.scrollX;wo({key:"prevent-scroll",element:u,style:c,properties:f,cleanup:()=>{Se(t.restoreScrollPosition)&&d>0&&window.scrollTo(h,g)}})}else wo({key:"prevent-scroll",element:u,style:{overflow:"hidden"}})}),B(()=>{!Xu(n)||!Se(t.enabled)||(document.addEventListener("wheel",l,{passive:!1}),document.addEventListener("touchstart",a,{passive:!1}),document.addEventListener("touchmove",i,{passive:!1}),H(()=>{document.removeEventListener("wheel",l),document.removeEventListener("touchstart",a),document.removeEventListener("touchmove",i)}))});const a=u=>{r=So(u),o=null,s=null},l=u=>{const d=u.target,c=Se(t.element),f=Ju(u),g=Math.abs(f[0])>Math.abs(f[1])?"x":"y",h=g==="x"?f[0]:f[1],y=ko(d,g,h,c);let m;c&&rr(c,d)?m=!y:m=!0,m&&u.cancelable&&u.preventDefault()},i=u=>{const d=Se(t.element),c=u.target;let f;if(u.touches.length===2)f=!Se(t.allowPinchZoom);else{if(o==null||s===null){const g=So(u).map((y,m)=>r[m]-y),h=Math.abs(g[0])>Math.abs(g[1])?"x":"y";o=h,s=h==="x"?g[0]:g[1]}if(c.type==="range")f=!1;else{const g=ko(c,o,s,d);d&&rr(d,c)?f=!g:f=!0}}f&&u.cancelable&&u.preventDefault()}},Ju=e=>[e.deltaX,e.deltaY],So=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],ko=(e,t,n,r)=>{const o=r!==null&&rr(r,e),[s,a]=Yu(e,t,o?r:void 0);return!(n>0&&Math.abs(s)<=1||n<0&&Math.abs(a)<1)},rr=(e,t)=>{if(e.contains(t))return!0;let n=t;for(;n;){if(n===e)return!0;n=n._$host??n.parentElement}return!1},ec=Zu,tc=ec,Ki=xe();function Bi(){return we(Ki)}function ht(){const e=Bi();if(e===void 0)throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");return e}var Ni=xe();function $r(){const e=we(Ni);if(e===void 0)throw new Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");return e}var Gi=xe();function et(){const e=we(Gi);if(e===void 0)throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");return e}function Cr(e){let t;const n=et(),r=ht(),o=Q({id:n.generateId(`item-${Le()}`)},e),[s,a]=J(o,["ref","textValue","disabled","closeOnSelect","checked","indeterminate","onSelect","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),[l,i]=z(),[u,d]=z(),[c,f]=z(),g=()=>r.listState().selectionManager(),h=()=>a.id,y=()=>g().focusedKey()===h(),m=()=>{s.onSelect?.(),s.closeOnSelect&&setTimeout(()=>{r.close(!0)})};ul({getItem:()=>({ref:()=>t,type:"item",key:h(),textValue:s.textValue??c()?.textContent??t?.textContent??"",disabled:s.disabled??!1})});const v=di({key:h,selectionManager:g,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>s.disabled},()=>t),x=k=>{de(k,s.onPointerMove),k.pointerType==="mouse"&&(s.disabled?r.onItemLeave(k):(r.onItemEnter(k),k.defaultPrevented||(ke(k.currentTarget),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(h()))))},b=k=>{de(k,s.onPointerLeave),k.pointerType==="mouse"&&r.onItemLeave(k)},w=k=>{de(k,s.onPointerUp),!s.disabled&&k.button===0&&m()},$=k=>{if(de(k,s.onKeyDown),!k.repeat&&!s.disabled)switch(k.key){case"Enter":case" ":m();break}},q=L(()=>{if(s.indeterminate)return"mixed";if(s.checked!=null)return s.checked}),D=L(()=>({"data-indeterminate":s.indeterminate?"":void 0,"data-checked":s.checked&&!s.indeterminate?"":void 0,"data-disabled":s.disabled?"":void 0,"data-highlighted":y()?"":void 0})),I={isChecked:()=>s.checked,dataset:D,setLabelRef:f,generateId:un(()=>a.id),registerLabel:Be(i),registerDescription:Be(d)};return p(Ni.Provider,{value:I,get children(){return p(fe,j({as:"div",ref(k){const T=De(N=>t=N,s.ref);typeof T=="function"&&T(k)},get tabIndex(){return v.tabIndex()},get"aria-checked"(){return q()},get"aria-disabled"(){return s.disabled},get"aria-labelledby"(){return l()},get"aria-describedby"(){return u()},get"data-key"(){return v.dataKey()},get onPointerDown(){return be([s.onPointerDown,v.onPointerDown])},get onPointerUp(){return be([w,v.onPointerUp])},get onClick(){return be([s.onClick,v.onClick])},get onKeyDown(){return be([$,v.onKeyDown])},get onMouseDown(){return be([s.onMouseDown,v.onMouseDown])},get onFocus(){return be([s.onFocus,v.onFocus])},onPointerMove:x,onPointerLeave:b},D,a))}})}function Ui(e){const t=Q({closeOnSelect:!1},e),[n,r]=J(t,["checked","defaultChecked","onChange","onSelect"]),o=el({isSelected:()=>n.checked,defaultIsSelected:()=>n.defaultChecked,onSelectedChange:a=>n.onChange?.(a),isDisabled:()=>r.disabled});return p(Cr,j({role:"menuitemcheckbox",get checked(){return o.isSelected()},onSelect:()=>{n.onSelect?.(),o.toggle()}},r))}var nc=xe();function Ln(){return we(nc)}var ln={next:(e,t)=>e==="ltr"?t==="horizontal"?"ArrowRight":"ArrowDown":t==="horizontal"?"ArrowLeft":"ArrowUp",previous:(e,t)=>ln.next(e==="ltr"?"rtl":"ltr",t)},Eo={first:e=>e==="horizontal"?"ArrowDown":"ArrowRight",last:e=>e==="horizontal"?"ArrowUp":"ArrowLeft"};function Hi(e){const t=et(),n=ht(),r=Ln(),{direction:o}=Ct(),s=Q({id:t.generateId("trigger")},e),[a,l]=J(s,["ref","id","disabled","onPointerDown","onClick","onKeyDown","onMouseOver","onFocus"]);let i=()=>t.value();r!==void 0&&(i=()=>t.value()??a.id,r.lastValue()===void 0&&r.setLastValue(i));const u=Fn(()=>n.triggerRef(),()=>"button"),d=L(()=>u()==="a"&&n.triggerRef()?.getAttribute("href")!=null);B(dt(()=>r?.value(),v=>{d()&&v===i()&&n.triggerRef()?.focus()}));const c=()=>{r!==void 0?n.isOpen()?r.value()===i()&&r.closeMenu():(r.autoFocusMenu()||r.setAutoFocusMenu(!0),n.open(!1)):n.toggle(!0)},f=v=>{de(v,a.onPointerDown),v.currentTarget.dataset.pointerType=v.pointerType,!a.disabled&&v.pointerType!=="touch"&&v.button===0&&c()},g=v=>{de(v,a.onClick),a.disabled||v.currentTarget.dataset.pointerType==="touch"&&c()},h=v=>{if(de(v,a.onKeyDown),!a.disabled){if(d())switch(v.key){case"Enter":case" ":return}switch(v.key){case"Enter":case" ":case Eo.first(t.orientation()):v.stopPropagation(),v.preventDefault(),Va(v.currentTarget),n.open("first"),r?.setAutoFocusMenu(!0),r?.setValue(i);break;case Eo.last(t.orientation()):v.stopPropagation(),v.preventDefault(),n.open("last");break;case ln.next(o(),t.orientation()):if(r===void 0)break;v.stopPropagation(),v.preventDefault(),r.nextMenu();break;case ln.previous(o(),t.orientation()):if(r===void 0)break;v.stopPropagation(),v.preventDefault(),r.previousMenu();break}}},y=v=>{de(v,a.onMouseOver),n.triggerRef()?.dataset.pointerType!=="touch"&&!a.disabled&&r!==void 0&&r.value()!==void 0&&r.setValue(i)},m=v=>{de(v,a.onFocus),r!==void 0&&v.currentTarget.dataset.pointerType!=="touch"&&r.setValue(i)};return B(()=>H(n.registerTriggerId(a.id))),p(gr,j({ref(v){const x=De(n.setTriggerRef,a.ref);typeof x=="function"&&x(v)},get"data-kb-menu-value-trigger"(){return t.value()},get id(){return a.id},get disabled(){return a.disabled},"aria-haspopup":"true",get"aria-expanded"(){return n.isOpen()},get"aria-controls"(){return pe(()=>!!n.isOpen())()?n.contentId():void 0},get"data-highlighted"(){return i()!==void 0&&r?.value()===i()?!0:void 0},get tabIndex(){return r!==void 0?r.value()===i()||r.lastValue()===i()?0:-1:void 0},onPointerDown:f,onMouseOver:y,onClick:g,onKeyDown:h,onFocus:m,role:r!==void 0?"menuitem":void 0},()=>n.dataset(),l))}var rc=xe();function Vi(){return we(rc)}function ji(e){let t;const n=et(),r=ht(),o=Ln(),s=Vi(),{direction:a}=Ct(),l=Q({id:n.generateId(`content-${Le()}`)},e),[i,u]=J(l,["ref","id","style","onOpenAutoFocus","onCloseAutoFocus","onEscapeKeyDown","onFocusOutside","onPointerEnter","onPointerMove","onKeyDown","onMouseDown","onFocusIn","onFocusOut"]);let d=0;const c=()=>r.parentMenuContext()==null&&o===void 0&&n.isModal(),f=Nu({selectionManager:r.listState().selectionManager,collection:r.listState().collection,autoFocus:r.autoFocus,deferAutoFocus:!0,shouldFocusWrap:!0,disallowTypeAhead:()=>!r.listState().selectionManager().isFocused(),orientation:()=>n.orientation()==="horizontal"?"vertical":"horizontal"},()=>t);Gu({trapFocus:()=>c()&&r.isOpen(),onMountAutoFocus:b=>{o===void 0&&i.onOpenAutoFocus?.(b)},onUnmountAutoFocus:i.onCloseAutoFocus},()=>t);const g=b=>{if(Ke(b.currentTarget,b.target)&&(b.key==="Tab"&&r.isOpen()&&b.preventDefault(),o!==void 0&&b.currentTarget.getAttribute("aria-haspopup")!=="true"))switch(b.key){case ln.next(a(),n.orientation()):b.stopPropagation(),b.preventDefault(),r.close(!0),o.setAutoFocusMenu(!0),o.nextMenu();break;case ln.previous(a(),n.orientation()):if(b.currentTarget.hasAttribute("data-closed"))break;b.stopPropagation(),b.preventDefault(),r.close(!0),o.setAutoFocusMenu(!0),o.previousMenu();break}},h=b=>{i.onEscapeKeyDown?.(b),o?.setAutoFocusMenu(!1),r.close(!0)},y=b=>{i.onFocusOutside?.(b),n.isModal()&&b.preventDefault()},m=b=>{de(b,i.onPointerEnter),r.isOpen()&&(r.parentMenuContext()?.listState().selectionManager().setFocused(!1),r.parentMenuContext()?.listState().selectionManager().setFocusedKey(void 0))},v=b=>{if(de(b,i.onPointerMove),b.pointerType!=="mouse")return;const w=b.target,$=d!==b.clientX;Ke(b.currentTarget,w)&&$&&(r.setPointerDir(b.clientX>d?"right":"left"),d=b.clientX)};B(()=>H(r.registerContentId(i.id)));const x={ref:De(b=>{r.setContentRef(b),t=b},i.ref),role:"menu",get id(){return i.id},get tabIndex(){return f.tabIndex()},get"aria-labelledby"(){return r.triggerId()},onKeyDown:be([i.onKeyDown,f.onKeyDown,g]),onMouseDown:be([i.onMouseDown,f.onMouseDown]),onFocusIn:be([i.onFocusIn,f.onFocusIn]),onFocusOut:be([i.onFocusOut,f.onFocusOut]),onPointerEnter:m,onPointerMove:v,get"data-orientation"(){return n.orientation()}};return p(R,{get when(){return r.contentPresent()},get children(){return p(R,{get when(){return s===void 0||r.parentMenuContext()!=null},get fallback(){return p(fe,j({as:"div"},()=>r.dataset(),x,u))},get children(){return p(Ei.Positioner,{get children(){return p(zu,j({get disableOutsidePointerEvents(){return pe(()=>!!c())()&&r.isOpen()},get excludedElements(){return[r.triggerRef]},bypassTopMostLayerCheck:!0,get style(){return An({"--kb-menu-content-transform-origin":"var(--kb-popper-content-transform-origin)",position:"relative"},i.style)},onEscapeKeyDown:h,onFocusOutside:y,get onDismiss(){return r.close}},()=>r.dataset(),x,u))}})}})}})}function oc(e){let t;const n=et(),r=ht(),[o,s]=J(e,["ref"]);return tc({element:()=>t??null,enabled:()=>r.contentPresent()&&n.preventScroll()}),p(ji,j({ref(a){const l=De(i=>{t=i},o.ref);typeof l=="function"&&l(a)}},s))}var Wi=xe();function ic(){const e=we(Wi);if(e===void 0)throw new Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");return e}function Sr(e){const t=et(),n=Q({id:t.generateId(`group-${Le()}`)},e),[r,o]=z(),s={generateId:un(()=>n.id),registerLabelId:Be(o)};return p(Wi.Provider,{value:s,get children(){return p(fe,j({as:"div",role:"group",get"aria-labelledby"(){return r()}},n))}})}function Qi(e){const t=ic(),n=Q({id:t.generateId("label")},e),[r,o]=J(n,["id"]);return B(()=>H(t.registerLabelId(r.id))),p(fe,j({as:"span",get id(){return r.id},"aria-hidden":"true"},o))}function Yi(e){const t=ht(),n=Q({children:"▼"},e);return p(fe,j({as:"span","aria-hidden":"true"},()=>t.dataset(),n))}function Xi(e){return p(Cr,j({role:"menuitem",closeOnSelect:!0},e))}function Zi(e){const t=$r(),n=Q({id:t.generateId("description")},e),[r,o]=J(n,["id"]);return B(()=>H(t.registerDescription(r.id))),p(fe,j({as:"div",get id(){return r.id}},()=>t.dataset(),o))}function Ji(e){const t=$r(),n=Q({id:t.generateId("indicator")},e),[r,o]=J(n,["forceMount"]);return p(R,{get when(){return r.forceMount||t.isChecked()},get children(){return p(fe,j({as:"div"},()=>t.dataset(),o))}})}function es(e){const t=$r(),n=Q({id:t.generateId("label")},e),[r,o]=J(n,["ref","id"]);return B(()=>H(t.registerLabel(r.id))),p(fe,j({as:"div",ref(s){const a=De(t.setLabelRef,r.ref);typeof a=="function"&&a(s)},get id(){return r.id}},()=>t.dataset(),o))}function ts(e){const t=ht();return p(R,{get when(){return t.contentPresent()},get children(){return p(qo,e)}})}var ns=xe();function sc(){const e=we(ns);if(e===void 0)throw new Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");return e}function rs(e){const n=et().generateId(`radiogroup-${Le()}`),r=Q({id:n},e),[o,s]=J(r,["value","defaultValue","onChange","disabled"]),[a,l]=dn({value:()=>o.value,defaultValue:()=>o.defaultValue,onChange:u=>o.onChange?.(u)}),i={isDisabled:()=>o.disabled,isSelectedValue:u=>u===a(),setSelectedValue:l};return p(ns.Provider,{value:i,get children(){return p(Sr,s)}})}function os(e){const t=sc(),n=Q({closeOnSelect:!1},e),[r,o]=J(n,["value","onSelect"]);return p(Cr,j({role:"menuitemradio",get checked(){return t.isSelectedValue(r.value)},onSelect:()=>{r.onSelect?.(),t.setSelectedValue(r.value)}},o))}function ac(e,t,n){const r=e.split("-")[0],o=n.getBoundingClientRect(),s=[],a=t.clientX,l=t.clientY;switch(r){case"top":s.push([a,l+5]),s.push([o.left,o.bottom]),s.push([o.left,o.top]),s.push([o.right,o.top]),s.push([o.right,o.bottom]);break;case"right":s.push([a-5,l]),s.push([o.left,o.top]),s.push([o.right,o.top]),s.push([o.right,o.bottom]),s.push([o.left,o.bottom]);break;case"bottom":s.push([a,l-5]),s.push([o.right,o.top]),s.push([o.right,o.bottom]),s.push([o.left,o.bottom]),s.push([o.left,o.top]);break;case"left":s.push([a+5,l]),s.push([o.right,o.bottom]),s.push([o.left,o.bottom]),s.push([o.left,o.top]),s.push([o.right,o.top]);break}return s}function lc(e,t){return t?Ha([e.clientX,e.clientY],t):!1}function is(e){const t=et(),n=oi(),r=Bi(),o=Ln(),s=Vi(),a=Q({placement:t.orientation()==="horizontal"?"bottom-start":"right-start"},e),[l,i]=J(a,["open","defaultOpen","onOpenChange"]);let u=0,d=null,c="right";const[f,g]=z(),[h,y]=z(),[m,v]=z(),[x,b]=z(),[w,$]=z(!0),[q,D]=z(i.placement),[I,k]=z([]),[T,N]=z([]),{DomCollectionProvider:G}=ll({items:T,onItemsChange:N}),ne=Di({open:()=>l.open,defaultOpen:()=>l.defaultOpen,onOpenChange:V=>l.onOpenChange?.(V)}),{present:ee}=fi({show:()=>t.forceMount()||ne.isOpen(),element:()=>x()??null}),le=El({selectionMode:"none",dataSource:T}),ie=V=>{$(V),ne.open()},re=(V=!1)=>{ne.close(),V&&r&&r.close(!0)},se=V=>{$(V),ne.toggle()},ue=()=>{const V=x();V&&(ke(V),le.selectionManager().setFocused(!0),le.selectionManager().setFocusedKey(void 0))},me=()=>{s!=null?setTimeout(()=>ue()):ue()},Ae=V=>{k(Ce=>[...Ce,V]);const Ne=r?.registerNestedMenu(V);return()=>{k(Ce=>Yn(Ce,V)),Ne?.()}},he=V=>c===d?.side&&lc(V,d?.area),Ee=V=>{he(V)&&V.preventDefault()},M=V=>{he(V)||me()},ge=V=>{he(V)&&V.preventDefault()};Hu({isDisabled:()=>!(r==null&&ne.isOpen()&&t.isModal()),targets:()=>[x(),...I()].filter(Boolean)}),B(()=>{const V=x();if(!V||!r)return;const Ne=r.registerNestedMenu(V);H(()=>{Ne()})}),B(()=>{r===void 0&&o?.registerMenu(t.value(),[x(),...I()])}),B(()=>{r!==void 0||o===void 0||(o.value()===t.value()?(m()?.focus(),o.autoFocusMenu()&&ie(!0)):re())}),B(()=>{r!==void 0||o===void 0||ne.isOpen()&&o.setValue(t.value())}),H(()=>{r===void 0&&o?.unregisterMenu(t.value())});const pt={dataset:L(()=>({"data-expanded":ne.isOpen()?"":void 0,"data-closed":ne.isOpen()?void 0:""})),isOpen:ne.isOpen,contentPresent:ee,nestedMenus:I,currentPlacement:q,pointerGraceTimeoutId:()=>u,autoFocus:w,listState:()=>le,parentMenuContext:()=>r,triggerRef:m,contentRef:x,triggerId:f,contentId:h,setTriggerRef:v,setContentRef:b,open:ie,close:re,toggle:se,focusContent:me,onItemEnter:Ee,onItemLeave:M,onTriggerLeave:ge,setPointerDir:V=>c=V,setPointerGraceTimeoutId:V=>u=V,setPointerGraceIntent:V=>d=V,registerNestedMenu:Ae,registerItemToParentDomCollection:n?.registerItem,registerTriggerId:Be(g),registerContentId:Be(y)};return p(G,{get children(){return p(Ki.Provider,{value:pt,get children(){return p(R,{when:s===void 0,get fallback(){return i.children},get children(){return p(Ei,j({anchorRef:m,contentRef:x,onCurrentPlacementChange:D},i))}})}})}})}function ss(e){const{direction:t}=Ct();return p(is,j({get placement(){return t()==="rtl"?"left-start":"right-start"},flip:!0},e))}var uc={close:(e,t)=>e==="ltr"?[t==="horizontal"?"ArrowLeft":"ArrowUp"]:[t==="horizontal"?"ArrowRight":"ArrowDown"]};function as(e){const t=ht(),n=et(),[r,o]=J(e,["onFocusOutside","onKeyDown"]),{direction:s}=Ct();return p(ji,j({onOpenAutoFocus:d=>{d.preventDefault()},onCloseAutoFocus:d=>{d.preventDefault()},onFocusOutside:d=>{r.onFocusOutside?.(d);const c=d.target;Ke(t.triggerRef(),c)||t.close()},onKeyDown:d=>{de(d,r.onKeyDown);const c=Ke(d.currentTarget,d.target),f=uc.close(s(),n.orientation()).includes(d.key),g=t.parentMenuContext()!=null;c&&f&&g&&(t.close(),ke(t.triggerRef()))}},o))}var Mo=["Enter"," "],cc={open:(e,t)=>e==="ltr"?[...Mo,t==="horizontal"?"ArrowRight":"ArrowDown"]:[...Mo,t==="horizontal"?"ArrowLeft":"ArrowUp"]};function ls(e){let t;const n=et(),r=ht(),o=Q({id:n.generateId(`sub-trigger-${Le()}`)},e),[s,a]=J(o,["ref","id","textValue","disabled","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]);let l=null;const i=()=>{l&&window.clearTimeout(l),l=null},{direction:u}=Ct(),d=()=>s.id,c=()=>{const b=r.parentMenuContext();if(b==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");return b.listState().selectionManager()},f=()=>r.listState().collection(),g=()=>c().focusedKey()===d(),h=di({key:d,selectionManager:c,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>s.disabled},()=>t),y=b=>{de(b,s.onClick),!r.isOpen()&&!s.disabled&&r.open(!0)},m=b=>{if(de(b,s.onPointerMove),b.pointerType!=="mouse")return;const w=r.parentMenuContext();if(w?.onItemEnter(b),!b.defaultPrevented){if(s.disabled){w?.onItemLeave(b);return}!r.isOpen()&&!l&&(r.parentMenuContext()?.setPointerGraceIntent(null),l=window.setTimeout(()=>{r.open(!1),i()},100)),w?.onItemEnter(b),b.defaultPrevented||(r.listState().selectionManager().isFocused()&&(r.listState().selectionManager().setFocused(!1),r.listState().selectionManager().setFocusedKey(void 0)),ke(b.currentTarget),w?.listState().selectionManager().setFocused(!0),w?.listState().selectionManager().setFocusedKey(d()))}},v=b=>{if(de(b,s.onPointerLeave),b.pointerType!=="mouse")return;i();const w=r.parentMenuContext(),$=r.contentRef();if($){w?.setPointerGraceIntent({area:ac(r.currentPlacement(),b,$),side:r.currentPlacement().split("-")[0]}),window.clearTimeout(w?.pointerGraceTimeoutId());const q=window.setTimeout(()=>{w?.setPointerGraceIntent(null)},300);w?.setPointerGraceTimeoutId(q)}else{if(w?.onTriggerLeave(b),b.defaultPrevented)return;w?.setPointerGraceIntent(null)}w?.onItemLeave(b)},x=b=>{de(b,s.onKeyDown),!b.repeat&&(s.disabled||cc.open(u(),n.orientation()).includes(b.key)&&(b.stopPropagation(),b.preventDefault(),c().setFocused(!1),c().setFocusedKey(void 0),r.isOpen()||r.open("first"),r.focusContent(),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(f().getFirstKey())))};return B(()=>{if(r.registerItemToParentDomCollection==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");const b=r.registerItemToParentDomCollection({ref:()=>t,type:"item",key:d(),textValue:s.textValue??t?.textContent??"",disabled:s.disabled??!1});H(b)}),B(dt(()=>r.parentMenuContext()?.pointerGraceTimeoutId(),b=>{H(()=>{window.clearTimeout(b),r.parentMenuContext()?.setPointerGraceIntent(null)})})),B(()=>H(r.registerTriggerId(s.id))),H(()=>{i()}),p(fe,j({as:"div",ref(b){const w=De($=>{r.setTriggerRef($),t=$},s.ref);typeof w=="function"&&w(b)},get id(){return s.id},role:"menuitem",get tabIndex(){return h.tabIndex()},"aria-haspopup":"true",get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return pe(()=>!!r.isOpen())()?r.contentId():void 0},get"aria-disabled"(){return s.disabled},get"data-key"(){return h.dataKey()},get"data-highlighted"(){return g()?"":void 0},get"data-disabled"(){return s.disabled?"":void 0},get onPointerDown(){return be([s.onPointerDown,h.onPointerDown])},get onPointerUp(){return be([s.onPointerUp,h.onPointerUp])},get onClick(){return be([y,h.onClick])},get onKeyDown(){return be([x,h.onKeyDown])},get onMouseDown(){return be([s.onMouseDown,h.onMouseDown])},get onFocus(){return be([s.onFocus,h.onFocus])},onPointerMove:m,onPointerLeave:v},()=>r.dataset(),a))}function dc(e){const t=Ln(),n=`menu-${Le()}`,r=Q({id:n,modal:!0},e),[o,s]=J(r,["id","modal","preventScroll","forceMount","open","defaultOpen","onOpenChange","value","orientation"]),a=Di({open:()=>o.open,defaultOpen:()=>o.defaultOpen,onOpenChange:i=>o.onOpenChange?.(i)}),l={isModal:()=>o.modal??!0,preventScroll:()=>o.preventScroll??l.isModal(),forceMount:()=>o.forceMount??!1,generateId:un(()=>o.id),value:()=>o.value,orientation:()=>o.orientation??t?.orientation()??"horizontal"};return p(Gi.Provider,{value:l,get children(){return p(is,j({get open(){return a.isOpen()},get onOpenChange(){return a.setIsOpen}},s))}})}var fc={};In(fc,{Root:()=>qn,Separator:()=>gc});function qn(e){let t;const n=Q({orientation:"horizontal"},e),[r,o]=J(n,["ref","orientation"]),s=Fn(()=>t,()=>"hr");return p(fe,j({as:"hr",ref(a){const l=De(i=>t=i,r.ref);typeof l=="function"&&l(a)},get role(){return s()!=="hr"?"separator":void 0},get"aria-orientation"(){return r.orientation==="vertical"?"vertical":void 0},get"data-orientation"(){return r.orientation}},o))}var gc=qn,Z={};In(Z,{Arrow:()=>wr,CheckboxItem:()=>Ui,Content:()=>us,DropdownMenu:()=>hc,Group:()=>Sr,GroupLabel:()=>Qi,Icon:()=>Yi,Item:()=>Xi,ItemDescription:()=>Zi,ItemIndicator:()=>Ji,ItemLabel:()=>es,Portal:()=>ts,RadioGroup:()=>rs,RadioItem:()=>os,Root:()=>cs,Separator:()=>qn,Sub:()=>ss,SubContent:()=>as,SubTrigger:()=>ls,Trigger:()=>Hi});function us(e){const t=et(),n=ht(),[r,o]=J(e,["onCloseAutoFocus","onInteractOutside"]);let s=!1;return p(oc,j({onCloseAutoFocus:i=>{r.onCloseAutoFocus?.(i),s||ke(n.triggerRef()),s=!1,i.preventDefault()},onInteractOutside:i=>{r.onInteractOutside?.(i),(!t.isModal()||i.detail.isContextMenu)&&(s=!0)}},o))}function cs(e){const t=`dropdownmenu-${Le()}`,n=Q({id:t},e);return p(dc,n)}var hc=Object.assign(cs,{Arrow:wr,CheckboxItem:Ui,Content:us,Group:Sr,GroupLabel:Qi,Icon:Yi,Item:Xi,ItemDescription:Zi,ItemIndicator:Ji,ItemLabel:es,Portal:ts,RadioGroup:rs,RadioItem:os,Separator:qn,Sub:ss,SubContent:as,SubTrigger:ls,Trigger:Hi}),C={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{90:"e5",80:"cc"},font:{size:{xs:"calc(var(--tsqd-font-size) * 0.75)",sm:"calc(var(--tsqd-font-size) * 0.875)",md:"var(--tsqd-font-size)"},lineHeight:{xs:"calc(var(--tsqd-font-size) * 1)",sm:"calc(var(--tsqd-font-size) * 1.25)",md:"calc(var(--tsqd-font-size) * 1.5)"},weight:{medium:"500",semibold:"600",bold:"700"}},border:{radius:{xs:"calc(var(--tsqd-font-size) * 0.125)",sm:"calc(var(--tsqd-font-size) * 0.25)",full:"9999px"}},size:{.25:"calc(var(--tsqd-font-size) * 0.0625)",.5:"calc(var(--tsqd-font-size) * 0.125)",1:"calc(var(--tsqd-font-size) * 0.25)",1.5:"calc(var(--tsqd-font-size) * 0.375)",2:"calc(var(--tsqd-font-size) * 0.5)",2.5:"calc(var(--tsqd-font-size) * 0.625)",3:"calc(var(--tsqd-font-size) * 0.75)",3.5:"calc(var(--tsqd-font-size) * 0.875)",4:"calc(var(--tsqd-font-size) * 1)",4.5:"calc(var(--tsqd-font-size) * 1.125)",5:"calc(var(--tsqd-font-size) * 1.25)",6:"calc(var(--tsqd-font-size) * 1.5)",6.5:"calc(var(--tsqd-font-size) * 1.625)",14:"calc(var(--tsqd-font-size) * 3.5)"},shadow:{xs:(e="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(e="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${e}`,inner:(e="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${e}`,none:()=>"none"}},pc=_('<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),mc=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),vc=_('<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),yc=_('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),kr=_('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),bc=_('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),xc=_('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),wc=_('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),$c=_('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">'),Cc=_('<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">'),Sc=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),kc=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ec=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'),Mc=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),ds=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Dc=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ac=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>'),Tc=_('<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Fc=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ic=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>'),Pc=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Oc=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Lc=_('<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>');function qc(){return pc()}function fs(){return mc()}function zt(){return vc()}function Do(){return yc()}function Ao(){return kr()}function _c(){return(()=>{var e=kr();return e.style.setProperty("transform","rotate(90deg)"),e})()}function Rc(){return(()=>{var e=kr();return e.style.setProperty("transform","rotate(-90deg)"),e})()}function zc(){return bc()}function Kc(){return xc()}function Bc(){return wc()}function Nc(){return $c()}function Gc(){return Cc()}function Uc(){return Sc()}function Hc(){return kc()}function Vc(){return Ec()}function jc(){return Mc()}function Wc(e){return(()=>{var t=ds(),n=t.firstChild;return U(()=>A(n,"stroke",e.theme==="dark"?"#12B76A":"#027A48")),t})()}function Qc(){return Dc()}function Yc(){return Ac()}function Xc(e){return[p(R,{get when(){return e.checked},get children(){var t=ds(),n=t.firstChild;return U(()=>A(n,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),t}}),p(R,{get when(){return!e.checked},get children(){var t=Tc(),n=t.firstChild;return U(()=>A(n,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),t}})]}function or(){return Fc()}function Zc(){return Ic()}function Jc(){return Pc()}function ed(){return Oc()}function To(){const e=Le();return(()=>{var t=Lc(),n=t.firstChild,r=n.nextSibling,o=r.nextSibling,s=o.firstChild,a=o.nextSibling,l=a.firstChild,i=a.nextSibling,u=i.nextSibling,d=u.firstChild,c=u.nextSibling,f=c.firstChild,g=c.nextSibling,h=g.nextSibling,y=h.firstChild,m=h.nextSibling,v=m.firstChild,x=m.nextSibling,b=x.nextSibling,w=b.firstChild,$=b.nextSibling,q=$.firstChild,D=$.nextSibling,I=D.nextSibling,k=I.firstChild,T=I.nextSibling,N=T.firstChild,G=T.nextSibling,ne=G.nextSibling,ee=ne.firstChild,le=ne.nextSibling,ie=le.firstChild,re=le.nextSibling,se=re.nextSibling,ue=se.firstChild,me=se.nextSibling,Ae=me.firstChild,he=me.nextSibling,Ee=he.firstChild,M=Ee.nextSibling,ge=M.nextSibling,Y=ge.nextSibling,pt=Y.nextSibling,V=he.nextSibling,Ne=V.firstChild,Ce=V.nextSibling,It=Ce.firstChild,qe=Ce.nextSibling,mt=qe.firstChild,St=mt.nextSibling,tt=St.nextSibling,Qe=tt.firstChild,nt=Qe.nextSibling,P=nt.nextSibling,oe=P.nextSibling,Me=oe.nextSibling,ae=Me.nextSibling,te=ae.nextSibling,ce=te.nextSibling,ve=ce.nextSibling,X=ve.nextSibling,rt=X.nextSibling,ot=rt.nextSibling,Ge=qe.nextSibling,kt=Ge.firstChild,it=Ge.nextSibling,Et=it.firstChild,st=it.nextSibling,vt=st.firstChild,hn=vt.nextSibling,Wt=st.nextSibling,pn=Wt.firstChild,Pt=Wt.nextSibling,mn=Pt.firstChild,Qt=Pt.nextSibling,Yt=Qt.firstChild,Xt=Yt.nextSibling,Ot=Xt.nextSibling,Er=Ot.nextSibling,Mr=Er.nextSibling,Dr=Mr.nextSibling,Ar=Dr.nextSibling,Tr=Ar.nextSibling,Fr=Tr.nextSibling,Ir=Fr.nextSibling,Pr=Ir.nextSibling,Or=Pr.nextSibling,Lr=Or.nextSibling,qr=Lr.nextSibling,_r=qr.nextSibling,Rr=_r.nextSibling,zr=Rr.nextSibling,bs=zr.nextSibling;return A(n,"id",`a-${e}`),A(r,"fill",`url(#a-${e})`),A(s,"id",`am-${e}`),A(a,"id",`b-${e}`),A(l,"filter",`url(#am-${e})`),A(i,"mask",`url(#b-${e})`),A(d,"id",`ah-${e}`),A(c,"id",`k-${e}`),A(f,"filter",`url(#ah-${e})`),A(g,"mask",`url(#k-${e})`),A(y,"id",`ae-${e}`),A(m,"id",`j-${e}`),A(v,"filter",`url(#ae-${e})`),A(x,"mask",`url(#j-${e})`),A(w,"id",`ai-${e}`),A($,"id",`i-${e}`),A(q,"filter",`url(#ai-${e})`),A(D,"mask",`url(#i-${e})`),A(k,"id",`aj-${e}`),A(T,"id",`h-${e}`),A(N,"filter",`url(#aj-${e})`),A(G,"mask",`url(#h-${e})`),A(ee,"id",`ag-${e}`),A(le,"id",`g-${e}`),A(ie,"filter",`url(#ag-${e})`),A(re,"mask",`url(#g-${e})`),A(ue,"id",`af-${e}`),A(me,"id",`f-${e}`),A(Ae,"filter",`url(#af-${e})`),A(he,"mask",`url(#f-${e})`),A(Y,"id",`m-${e}`),A(pt,"fill",`url(#m-${e})`),A(Ne,"id",`ak-${e}`),A(Ce,"id",`e-${e}`),A(It,"filter",`url(#ak-${e})`),A(qe,"mask",`url(#e-${e})`),A(mt,"id",`n-${e}`),A(St,"fill",`url(#n-${e})`),A(Qe,"id",`r-${e}`),A(nt,"fill",`url(#r-${e})`),A(P,"id",`s-${e}`),A(oe,"fill",`url(#s-${e})`),A(Me,"id",`q-${e}`),A(ae,"fill",`url(#q-${e})`),A(te,"id",`p-${e}`),A(ce,"fill",`url(#p-${e})`),A(ve,"id",`o-${e}`),A(X,"fill",`url(#o-${e})`),A(rt,"id",`l-${e}`),A(ot,"fill",`url(#l-${e})`),A(kt,"id",`al-${e}`),A(it,"id",`d-${e}`),A(Et,"filter",`url(#al-${e})`),A(st,"mask",`url(#d-${e})`),A(vt,"id",`u-${e}`),A(hn,"fill",`url(#u-${e})`),A(pn,"id",`ad-${e}`),A(Pt,"id",`c-${e}`),A(mn,"filter",`url(#ad-${e})`),A(Qt,"mask",`url(#c-${e})`),A(Yt,"id",`t-${e}`),A(Xt,"fill",`url(#t-${e})`),A(Ot,"id",`v-${e}`),A(Er,"stroke",`url(#v-${e})`),A(Mr,"id",`aa-${e}`),A(Dr,"stroke",`url(#aa-${e})`),A(Ar,"id",`w-${e}`),A(Tr,"stroke",`url(#w-${e})`),A(Fr,"id",`ac-${e}`),A(Ir,"stroke",`url(#ac-${e})`),A(Pr,"id",`ab-${e}`),A(Or,"stroke",`url(#ab-${e})`),A(Lr,"id",`y-${e}`),A(qr,"stroke",`url(#y-${e})`),A(_r,"id",`x-${e}`),A(Rr,"stroke",`url(#x-${e})`),A(zr,"id",`z-${e}`),A(bs,"stroke",`url(#z-${e})`),t})()}var td=_('<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),nd=_('<button title="Copy object to clipboard">'),rd=_('<button title="Remove all items"aria-label="Remove all items">'),od=_('<button title="Delete item"aria-label="Delete item">'),id=_('<button title="Toggle value"aria-label="Toggle value">'),sd=_('<button title="Bulk Edit Data"aria-label="Bulk Edit Data">'),en=_("<div>"),ad=_("<div><button> <span></span> <span> "),ld=_("<input>"),Fo=_("<span>"),ud=_("<div><label>:"),cd=_("<div><div><button> [<!>...<!>]");function dd(e,t){let n=0;const r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n=n+t;return r}var Io=e=>{const t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=L(()=>t()==="dark"?jt(n):Vt(n));return(()=>{var o=td();return U(()=>F(o,O(r().expander,n`
          transform: rotate(${e.expanded?90:0}deg);
        `,e.expanded&&n`
            & svg {
              top: -1px;
            }
          `))),o})()},fd=e=>{const t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=L(()=>t()==="dark"?jt(n):Vt(n)),[o,s]=z("NoCopy");return(()=>{var a=nd();return Ts(a,"click",o()==="NoCopy"?()=>{navigator.clipboard.writeText(Fs(e.value)).then(()=>{s("SuccessCopy"),setTimeout(()=>{s("NoCopy")},1500)},l=>{console.error("Failed to copy: ",l),s("ErrorCopy"),setTimeout(()=>{s("NoCopy")},1500)})}:void 0,!0),S(a,p(Is,{get children(){return[p(zn,{get when(){return o()==="NoCopy"},get children(){return p(Vc,{})}}),p(zn,{get when(){return o()==="SuccessCopy"},get children(){return p(Wc,{get theme(){return t()}})}}),p(zn,{get when(){return o()==="ErrorCopy"},get children(){return p(Qc,{})}})]}})),U(l=>{var i=r().actionButton,u=`${o()==="NoCopy"?"Copy object to clipboard":o()==="SuccessCopy"?"Object copied to clipboard":"Error copying object to clipboard"}`;return i!==l.e&&F(a,l.e=i),u!==l.t&&A(a,"aria-label",l.t=u),l},{e:void 0,t:void 0}),a})()},gd=e=>{const t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=L(()=>t()==="dark"?jt(n):Vt(n)),o=K().client;return(()=>{var s=rd();return s.$$click=()=>{const a=e.activeQuery.state.data,l=sr(a,e.dataPath,[]);o.setQueryData(e.activeQuery.queryKey,l)},S(s,p(Yc,{})),U(()=>F(s,r().actionButton)),s})()},Po=e=>{const t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=L(()=>t()==="dark"?jt(n):Vt(n)),o=K().client;return(()=>{var s=od();return s.$$click=()=>{const a=e.activeQuery.state.data,l=Ps(a,e.dataPath);o.setQueryData(e.activeQuery.queryKey,l)},S(s,p(fs,{})),U(()=>F(s,O(r().actionButton))),s})()},hd=e=>{const t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=L(()=>t()==="dark"?jt(n):Vt(n)),o=K().client;return(()=>{var s=id();return s.$$click=()=>{const a=e.activeQuery.state.data,l=sr(a,e.dataPath,!e.value);o.setQueryData(e.activeQuery.queryKey,l)},S(s,p(Xc,{get theme(){return t()},get checked(){return e.value}})),U(()=>F(s,O(r().actionButton,n`
          width: ${C.size[3.5]};
          height: ${C.size[3.5]};
        `))),s})()};function Oo(e){return Symbol.iterator in e}function yt(e){const t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=L(()=>t()==="dark"?jt(n):Vt(n)),o=K().client,[s,a]=z((e.defaultExpanded||[]).includes(e.label)),l=()=>a(y=>!y),[i,u]=z([]),d=L(()=>Array.isArray(e.value)?e.value.map((y,m)=>({label:m.toString(),value:y})):e.value!==null&&typeof e.value=="object"&&Oo(e.value)&&typeof e.value[Symbol.iterator]=="function"?e.value instanceof Map?Array.from(e.value,([y,m])=>({label:y,value:m})):Array.from(e.value,(y,m)=>({label:m.toString(),value:y})):typeof e.value=="object"&&e.value!==null?Object.entries(e.value).map(([y,m])=>({label:y,value:m})):[]),c=L(()=>Array.isArray(e.value)?"array":e.value!==null&&typeof e.value=="object"&&Oo(e.value)&&typeof e.value[Symbol.iterator]=="function"?"Iterable":typeof e.value=="object"&&e.value!==null?"object":typeof e.value),f=L(()=>dd(d(),100)),g=e.dataPath??[],h=Le();return(()=>{var y=en();return S(y,p(R,{get when(){return f().length},get children(){return[(()=>{var m=ad(),v=m.firstChild,x=v.firstChild,b=x.nextSibling,w=b.nextSibling,$=w.nextSibling,q=$.firstChild;return v.$$click=()=>l(),S(v,p(Io,{get expanded(){return s()}}),x),S(b,()=>e.label),S($,()=>String(c()).toLowerCase()==="iterable"?"(Iterable) ":"",q),S($,()=>d().length,q),S($,()=>d().length>1?"items":"item",null),S(m,p(R,{get when(){return e.editable},get children(){var D=en();return S(D,p(fd,{get value(){return e.value}}),null),S(D,p(R,{get when(){return e.itemsDeletable&&e.activeQuery!==void 0},get children(){return p(Po,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),S(D,p(R,{get when(){return c()==="array"&&e.activeQuery!==void 0},get children(){return p(gd,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),S(D,p(R,{get when(){return pe(()=>!!e.onEdit)()&&!Ds(e.value).meta},get children(){var I=sd();return I.$$click=()=>{e.onEdit?.()},S(I,p(jc,{})),U(()=>F(I,r().actionButton)),I}}),null),U(()=>F(D,r().actions)),D}}),null),U(D=>{var I=r().expanderButtonContainer,k=r().expanderButton,T=s()?"true":"false",N=r().info;return I!==D.e&&F(m,D.e=I),k!==D.t&&F(v,D.t=k),T!==D.a&&A(v,"aria-expanded",D.a=T),N!==D.o&&F($,D.o=N),D},{e:void 0,t:void 0,a:void 0,o:void 0}),m})(),p(R,{get when(){return s()},get children(){return[p(R,{get when(){return f().length===1},get children(){var m=en();return S(m,p(wn,{get each(){return d()},by:v=>v.label,children:v=>p(yt,{get defaultExpanded(){return e.defaultExpanded},get label(){return v().label},get value(){return v().value},get editable(){return e.editable},get dataPath(){return[...g,v().label]},get activeQuery(){return e.activeQuery},get itemsDeletable(){return c()==="array"||c()==="Iterable"||c()==="object"}})})),U(()=>F(m,r().subEntry)),m}}),p(R,{get when(){return f().length>1},get children(){var m=en();return S(m,p(As,{get each(){return f()},children:(v,x)=>(()=>{var b=cd(),w=b.firstChild,$=w.firstChild,q=$.firstChild,D=q.nextSibling,I=D.nextSibling,k=I.nextSibling;return k.nextSibling,$.$$click=()=>u(T=>T.includes(x)?T.filter(N=>N!==x):[...T,x]),S($,p(Io,{get expanded(){return i().includes(x)}}),q),S($,x*100,D),S($,x*100+100-1,k),S(w,p(R,{get when(){return i().includes(x)},get children(){var T=en();return S(T,p(wn,{get each(){return v()},by:N=>N.label,children:N=>p(yt,{get defaultExpanded(){return e.defaultExpanded},get label(){return N().label},get value(){return N().value},get editable(){return e.editable},get dataPath(){return[...g,N().label]},get activeQuery(){return e.activeQuery}})})),U(()=>F(T,r().subEntry)),T}}),null),U(T=>{var N=r().entry,G=r().expanderButton;return N!==T.e&&F(w,T.e=N),G!==T.t&&F($,T.t=G),T},{e:void 0,t:void 0}),b})()})),U(()=>F(m,r().subEntry)),m}})]}})]}}),null),S(y,p(R,{get when(){return f().length===0},get children(){var m=ud(),v=m.firstChild,x=v.firstChild;return A(v,"for",h),S(v,()=>e.label,x),S(m,p(R,{get when(){return pe(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(c()==="string"||c()==="number"||c()==="boolean")},get fallback(){return(()=>{var b=Fo();return S(b,()=>xn(e.value)),U(()=>F(b,r().value)),b})()},get children(){return[p(R,{get when(){return pe(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(c()==="string"||c()==="number")},get children(){var b=ld();return b.addEventListener("change",w=>{const $=e.activeQuery.state.data,q=sr($,g,c()==="number"?w.target.valueAsNumber:w.target.value);o.setQueryData(e.activeQuery.queryKey,q)}),A(b,"id",h),U(w=>{var $=c()==="number"?"number":"text",q=O(r().value,r().editableInput);return $!==w.e&&A(b,"type",w.e=$),q!==w.t&&F(b,w.t=q),w},{e:void 0,t:void 0}),U(()=>b.value=e.value),b}}),p(R,{get when(){return c()==="boolean"},get children(){var b=Fo();return S(b,p(hd,{get activeQuery(){return e.activeQuery},dataPath:g,get value(){return e.value}}),null),S(b,()=>xn(e.value),null),U(()=>F(b,O(r().value,r().actions,r().editableInput))),b}})]}}),null),S(m,p(R,{get when(){return e.editable&&e.itemsDeletable&&e.activeQuery!==void 0},get children(){return p(Po,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),U(b=>{var w=r().row,$=r().label;return w!==b.e&&F(m,b.e=w),$!==b.t&&F(v,b.t=$),b},{e:void 0,t:void 0}),m}}),null),U(()=>F(y,r().entry)),y})()}var gs=(e,t)=>{const{colors:n,font:r,size:o,border:s}=C,a=(l,i)=>e==="light"?l:i;return{entry:t`
      & * {
        font-size: ${r.size.xs};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,subEntry:t`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${a(n.gray[300],n.darkGray[400])};
      /* outline: 1px solid ${n.teal[400]}; */
    `,expander:t`
      & path {
        stroke: ${n.gray[400]};
      }
      & svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${n.blue[400]}; */
    `,expanderButtonContainer:t`
      display: flex;
      align-items: center;
      line-height: ${o[4]};
      min-height: ${o[4]};
      gap: ${o[2]};
    `,expanderButton:t`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${o[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${o[1]};
      position: relative;
      /* outline: 1px solid ${n.green[400]}; */

      &:focus-visible {
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,info:t`
      color: ${a(n.gray[500],n.gray[500])};
      font-size: ${r.size.xs};
      margin-left: ${o[1]};
      /* outline: 1px solid ${n.yellow[400]}; */
    `,label:t`
      color: ${a(n.gray[700],n.gray[300])};
      white-space: nowrap;
    `,value:t`
      color: ${a(n.purple[600],n.purple[400])};
      flex-grow: 1;
    `,actions:t`
      display: inline-flex;
      gap: ${o[2]};
      align-items: center;
    `,row:t`
      display: inline-flex;
      gap: ${o[2]};
      width: 100%;
      margin: ${o[.25]} 0px;
      line-height: ${o[4.5]};
      align-items: center;
    `,editableInput:t`
      border: none;
      padding: ${o[.5]} ${o[1]} ${o[.5]} ${o[1.5]};
      flex-grow: 1;
      border-radius: ${s.radius.xs};
      background-color: ${a(n.gray[200],n.darkGray[500])};

      &:hover {
        background-color: ${a(n.gray[300],n.darkGray[600])};
      }
    `,actionButton:t`
      background-color: transparent;
      color: ${a(n.gray[500],n.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${o[3]};
      height: ${o[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${a(n.gray[600],n.gray[400])};
      }

      &:focus-visible {
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
        outline-offset: 2px;
      }
    `}},Vt=e=>gs("light",e),jt=e=>gs("dark",e);ir(["click"]);var pd=_('<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>'),_n=_("<div>"),md=_('<aside aria-label="Tanstack query devtools"><div></div><button aria-label="Close tanstack query devtools">'),vd=_("<select name=tsqd-queries-filter-sort>"),yd=_("<select name=tsqd-mutations-filter-sort>"),bd=_("<span>Asc"),xd=_("<span>Desc"),wd=_('<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">'),$d=_("<div>Settings"),Cd=_("<span>Position"),Sd=_("<span>Top"),kd=_("<span>Bottom"),Ed=_("<span>Left"),Md=_("<span>Right"),Dd=_("<span>Theme"),Ad=_("<span>Light"),Td=_("<span>Dark"),Fd=_("<span>System"),Id=_("<span>Disabled Queries"),Pd=_("<span>Show"),Od=_("<span>Hide"),Ld=_("<div><div class=tsqd-queries-container>"),qd=_("<div><div class=tsqd-mutations-container>"),_d=_('<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>'),Lo=_("<option>Sort by "),Rd=_("<div class=tsqd-query-disabled-indicator>disabled"),zd=_("<div class=tsqd-query-static-indicator>static"),hs=_("<button><div></div><code class=tsqd-query-hash>"),Kd=_("<div role=tooltip id=tsqd-status-tooltip>"),Bd=_("<span>"),Nd=_("<button><span></span><span>"),Gd=_("<button><span></span> Error"),Ud=_('<div><span></span>Trigger Error<select><option value=""disabled selected>'),Hd=_('<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">'),Vd=_("<form><textarea name=data></textarea><div><span></span><div><button type=button>Cancel</button><button>Save"),jd=_('<div><div>Query Details</div><div role=status aria-live=polite aria-atomic=true><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div>Actions</div><div><button><span></span>Refetch</button><button><span></span>Invalidate</button><button><span></span>Reset</button><button><span></span>Remove</button><button><span></span> Loading</button></div><div>Data </div><div>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),Wd=_("<option>"),Qd=_('<div><div>Mutation Details</div><div role=status aria-live=polite aria-atomic=true><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),[Ie,Rn]=z(null),[bt,ps]=z(null),[ct,ms]=z(0),[tn,Yd]=z(!1),Xd=e=>{const t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=L(()=>t()==="dark"?We(n):je(n)),o=L(()=>K().onlineManager);Dt(()=>{const c=o().subscribe(f=>{Yd(!f)});H(()=>{c()})});const s=ar(),a=L(()=>K().buttonPosition||js),l=L(()=>e.localStore.open==="true"?!0:e.localStore.open==="false"?!1:K().initialIsOpen||Qs),i=L(()=>e.localStore.position||K().position||Wn);let u;B(()=>{const c=u.parentElement,f=e.localStore.height||zo,g=e.localStore.width||Ko,h=i();c.style.setProperty("--tsqd-panel-height",`${h==="top"?"-":""}${f}px`),c.style.setProperty("--tsqd-panel-width",`${h==="left"?"-":""}${g}px`)}),Dt(()=>{const c=()=>{const f=u.parentElement,g=getComputedStyle(f).fontSize;f.style.setProperty("--tsqd-font-size",g)};c(),window.addEventListener("focus",c),H(()=>{window.removeEventListener("focus",c)})});const d=L(()=>e.localStore.pip_open??"false");return[p(R,{get when(){return pe(()=>!!s().pipWindow)()&&d()=="true"},get children(){return p(qo,{get mount(){return s().pipWindow?.document.body},get children(){return p(Zd,{get children(){return p(vs,e)}})}})}}),(()=>{var c=_n(),f=u;return typeof f=="function"?Dn(f,c):u=c,S(c,p(Yr,{name:"tsqd-panel-transition",get children(){return p(R,{get when(){return pe(()=>!!(l()&&!s().pipWindow))()&&d()=="false"},get children(){return p(Jd,{get localStore(){return e.localStore},get setLocalStore(){return e.setLocalStore}})}})}}),null),S(c,p(Yr,{name:"tsqd-button-transition",get children(){return p(R,{get when(){return!l()},get children(){var g=pd(),h=g.firstChild,y=h.nextSibling;return S(h,p(To,{})),y.$$click=()=>e.setLocalStore("open","true"),S(y,p(To,{})),U(()=>F(g,O(r().devtoolsBtn,r()[`devtoolsBtn-position-${a()}`],"tsqd-open-btn-container"))),g}})}}),null),U(()=>F(c,O(n`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${i()==="top"||i()==="bottom"?"transform: translateY(var(--tsqd-panel-height));":"transform: translateX(var(--tsqd-panel-width));"}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${a()==="relative"?"none;":a()==="top-left"?"translateX(-72px);":a()==="top-right"?"translateX(72px);":"translateY(72px);"};
              opacity: 0;
            }
          `,"tsqd-transitions-container"))),c})()]},Zd=e=>{const t=ar(),n=$e(),r=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,o=L(()=>n()==="dark"?We(r):je(r)),s=()=>{const{colors:a}=C,l=(i,u)=>n()==="dark"?u:i;return ct()<Nt?r`
        flex-direction: column;
        background-color: ${l(a.gray[300],a.gray[600])};
      `:r`
      flex-direction: row;
      background-color: ${l(a.gray[200],a.darkGray[900])};
    `};return B(()=>{const a=t().pipWindow,l=()=>{a&&ms(a.innerWidth)};a&&(a.addEventListener("resize",l),l()),H(()=>{a&&a.removeEventListener("resize",l)})}),(()=>{var a=_n();return a.style.setProperty("--tsqd-font-size","16px"),a.style.setProperty("max-height","100vh"),a.style.setProperty("height","100vh"),a.style.setProperty("width","100vw"),S(a,()=>e.children),U(()=>F(a,O(o().panel,s(),{[r`
            min-width: min-content;
          `]:ct()<Ro},"tsqd-main-panel"))),a})()},Jd=e=>{const t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=L(()=>t()==="dark"?We(n):je(n)),[o,s]=z(!1),a=L(()=>e.localStore.position||K().position||Wn),l=d=>{const c=d.currentTarget.parentElement;if(!c)return;s(!0);const{height:f,width:g}=c.getBoundingClientRect(),h=d.clientX,y=d.clientY;let m=0;const v=Kr(3.5),x=Kr(12),b=$=>{if($.preventDefault(),a()==="left"||a()==="right"){const q=a()==="right"?h-$.clientX:$.clientX-h;m=Math.round(g+q),m<x&&(m=x),e.setLocalStore("width",String(Math.round(m)));const D=c.getBoundingClientRect().width;Number(e.localStore.width)<D&&e.setLocalStore("width",String(D))}else{const q=a()==="bottom"?y-$.clientY:$.clientY-y;m=Math.round(f+q),m<v&&(m=v,Rn(null)),e.setLocalStore("height",String(Math.round(m)))}},w=()=>{o()&&s(!1),document.removeEventListener("mousemove",b,!1),document.removeEventListener("mouseUp",w,!1)};document.addEventListener("mousemove",b,!1),document.addEventListener("mouseup",w,!1)};let i;Dt(()=>{Ca(i,({width:d},c)=>{c===i&&ms(d)})}),B(()=>{const d=i.parentElement?.parentElement?.parentElement;if(!d)return;const c=e.localStore.position||Wn,f=ws("padding",c),g=e.localStore.position==="left"||e.localStore.position==="right",h=(({padding:y,paddingTop:m,paddingBottom:v,paddingLeft:x,paddingRight:b})=>({padding:y,paddingTop:m,paddingBottom:v,paddingLeft:x,paddingRight:b}))(d.style);d.style[f]=`${g?e.localStore.width:e.localStore.height}px`,H(()=>{Object.entries(h).forEach(([y,m])=>{d.style[y]=m})})});const u=()=>{const{colors:d}=C,c=(f,g)=>t()==="dark"?g:f;return ct()<Nt?n`
        flex-direction: column;
        background-color: ${c(d.gray[300],d.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${c(d.gray[200],d.darkGray[900])};
    `};return(()=>{var d=md(),c=d.firstChild,f=c.nextSibling,g=i;return typeof g=="function"?Dn(g,d):i=d,c.$$mousedown=l,f.$$click=()=>e.setLocalStore("open","false"),S(f,p(zt,{})),S(d,p(vs,e),null),U(h=>{var y=O(r().panel,r()[`panel-position-${a()}`],u(),{[n`
            min-width: min-content;
          `]:ct()<Ro&&(a()==="right"||a()==="left")},"tsqd-main-panel"),m=a()==="bottom"||a()==="top"?`${e.localStore.height||zo}px`:"auto",v=a()==="right"||a()==="left"?`${e.localStore.width||Ko}px`:"auto",x=O(r().dragHandle,r()[`dragHandle-position-${a()}`],"tsqd-drag-handle"),b=O(r().closeBtn,r()[`closeBtn-position-${a()}`],"tsqd-minimize-btn");return y!==h.e&&F(d,h.e=y),m!==h.t&&((h.t=m)!=null?d.style.setProperty("height",m):d.style.removeProperty("height")),v!==h.a&&((h.a=v)!=null?d.style.setProperty("width",v):d.style.removeProperty("width")),x!==h.o&&F(c,h.o=x),b!==h.i&&F(f,h.i=b),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),d})()},vs=e=>{s0(),a0();let t;const n=$e(),r=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,o=L(()=>n()==="dark"?We(r):je(r)),s=ar(),[a,l]=z("queries"),i=L(()=>e.localStore.sort||Xs),u=L(()=>Number(e.localStore.sortOrder)||Gr),d=L(()=>e.localStore.mutationSort||Zs),c=L(()=>Number(e.localStore.mutationSortOrder)||Gr),f=L(()=>Hn[i()]),g=L(()=>Vn[d()]),h=L(()=>K().onlineManager),y=L(()=>K().client.getQueryCache()),m=L(()=>K().client.getMutationCache()),v=ye(D=>D().getAll().length,!1),x=L(dt(()=>[v(),e.localStore.filter,i(),u(),e.localStore.hideDisabledQueries],()=>{const D=y().getAll();let I=e.localStore.filter?D.filter(T=>Ur(T.queryHash,e.localStore.filter||"").passed):[...D];return e.localStore.hideDisabledQueries==="true"&&(I=I.filter(T=>!T.isDisabled())),f()?I.sort((T,N)=>f()(T,N)*u()):I})),b=Ue(D=>D().getAll().length,!1),w=L(dt(()=>[b(),e.localStore.mutationFilter,d(),c()],()=>{const D=m().getAll(),I=e.localStore.mutationFilter?D.filter(T=>{const N=`${T.options.mutationKey?JSON.stringify(T.options.mutationKey)+" - ":""}${new Date(T.state.submittedAt).toLocaleString()}`;return Ur(N,e.localStore.mutationFilter||"").passed}):[...D];return g()?I.sort((T,N)=>g()(T,N)*c()):I})),$=D=>{e.setLocalStore("position",D)},q=D=>{const k=getComputedStyle(t).getPropertyValue("--tsqd-font-size");D.style.setProperty("--tsqd-font-size",k)};return[(()=>{var D=_d(),I=D.firstChild,k=I.firstChild,T=k.firstChild,N=T.firstChild,G=N.nextSibling,ne=G.firstChild,ee=I.nextSibling,le=ee.firstChild,ie=le.firstChild,re=ie.firstChild,se=ie.nextSibling,ue=se.nextSibling,me=le.nextSibling,Ae=me.firstChild,he=Ae.nextSibling,Ee=t;return typeof Ee=="function"?Dn(Ee,D):t=D,T.$$click=()=>{if(!s().pipWindow&&!e.showPanelViewOnly){e.setLocalStore("open","false");return}e.onClose&&e.onClose()},S(G,()=>K().queryFlavor,ne),S(G,()=>K().version,null),S(k,p(ze.Root,{get class(){return O(o().viewToggle)},get value(){return a()},onChange:M=>{l(M),Rn(null),ps(null)},get children(){return[p(ze.Item,{value:"queries",class:"tsqd-radio-toggle",get children(){return[p(ze.ItemInput,{}),p(ze.ItemControl,{get children(){return p(ze.ItemIndicator,{})}}),p(ze.ItemLabel,{title:"Toggle Queries View",children:"Queries"})]}}),p(ze.Item,{value:"mutations",class:"tsqd-radio-toggle",get children(){return[p(ze.ItemInput,{}),p(ze.ItemControl,{get children(){return p(ze.ItemIndicator,{})}}),p(ze.ItemLabel,{title:"Toggle Mutations View",children:"Mutations"})]}})]}}),null),S(I,p(R,{get when(){return a()==="queries"},get children(){return p(n0,{})}}),null),S(I,p(R,{get when(){return a()==="mutations"},get children(){return p(r0,{})}}),null),S(ie,p(qc,{}),re),re.$$input=M=>{a()==="queries"?e.setLocalStore("filter",M.currentTarget.value):e.setLocalStore("mutationFilter",M.currentTarget.value)},S(se,p(R,{get when(){return a()==="queries"},get children(){var M=vd();return M.addEventListener("change",ge=>{e.setLocalStore("sort",ge.currentTarget.value)}),S(M,()=>Object.keys(Hn).map(ge=>(()=>{var Y=Lo();return Y.firstChild,Y.value=ge,S(Y,ge,null),Y})())),U(()=>M.value=i()),M}}),null),S(se,p(R,{get when(){return a()==="mutations"},get children(){var M=yd();return M.addEventListener("change",ge=>{e.setLocalStore("mutationSort",ge.currentTarget.value)}),S(M,()=>Object.keys(Vn).map(ge=>(()=>{var Y=Lo();return Y.firstChild,Y.value=ge,S(Y,ge,null),Y})())),U(()=>M.value=d()),M}}),null),S(se,p(zt,{}),null),ue.$$click=()=>{a()==="queries"?e.setLocalStore("sortOrder",String(u()*-1)):e.setLocalStore("mutationSortOrder",String(c()*-1))},S(ue,p(R,{get when(){return(a()==="queries"?u():c())===1},get children(){return[bd(),p(Do,{})]}}),null),S(ue,p(R,{get when(){return(a()==="queries"?u():c())===-1},get children(){return[xd(),p(Ao,{})]}}),null),Ae.$$click=()=>{a()==="queries"?(Ye({type:"CLEAR_QUERY_CACHE"}),y().clear()):(Ye({type:"CLEAR_MUTATION_CACHE"}),m().clear())},S(Ae,p(fs,{})),he.$$click=()=>{h().setOnline(!h().isOnline())},S(he,(()=>{var M=pe(()=>!!tn());return()=>M()?p(Gc,{}):p(Nc,{})})()),S(me,p(R,{get when(){return pe(()=>!s().pipWindow)()&&!s().disabled},get children(){var M=wd();return M.$$click=()=>{s().requestPipWindow(Number(window.innerWidth),Number(e.localStore.height??500))},S(M,p(Hc,{})),U(()=>F(M,O(o().actionsBtn,"tsqd-actions-btn","tsqd-action-open-pip"))),M}}),null),S(me,p(Z.Root,{gutter:4,get children(){return[p(Z.Trigger,{get class(){return O(o().actionsBtn,"tsqd-actions-btn","tsqd-action-settings")},"aria-label":"Open settings menu",title:"Open settings menu",get children(){return p(Uc,{})}}),p(Z.Portal,{ref:M=>q(M),get mount(){return pe(()=>!!s().pipWindow)()?s().pipWindow.document.body:document.body},get children(){return p(Z.Content,{get class(){return O(o().settingsMenu,"tsqd-settings-menu")},get children(){return[(()=>{var M=$d();return U(()=>F(M,O(o().settingsMenuHeader,"tsqd-settings-menu-header"))),M})(),p(R,{get when(){return!e.showPanelViewOnly},get children(){return p(Z.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[p(Z.SubTrigger,{get class(){return O(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Cd(),p(zt,{})]}}),p(Z.Portal,{ref:M=>q(M),get mount(){return pe(()=>!!s().pipWindow)()?s().pipWindow.document.body:document.body},get children(){return p(Z.SubContent,{get class(){return O(o().settingsMenu,"tsqd-settings-submenu")},get children(){return p(Z.RadioGroup,{"aria-label":"Position settings",get value(){return e.localStore.position},onChange:M=>$(M),get children(){return[p(Z.RadioItem,{value:"top",get class(){return O(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Sd(),p(Do,{})]}}),p(Z.RadioItem,{value:"bottom",get class(){return O(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[kd(),p(Ao,{})]}}),p(Z.RadioItem,{value:"left",get class(){return O(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Ed(),p(_c,{})]}}),p(Z.RadioItem,{value:"right",get class(){return O(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-right")},get children(){return[Md(),p(Rc,{})]}})]}})}})}})]}})}}),p(Z.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[p(Z.SubTrigger,{get class(){return O(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Dd(),p(zt,{})]}}),p(Z.Portal,{ref:M=>q(M),get mount(){return pe(()=>!!s().pipWindow)()?s().pipWindow.document.body:document.body},get children(){return p(Z.SubContent,{get class(){return O(o().settingsMenu,"tsqd-settings-submenu")},get children(){return p(Z.RadioGroup,{get value(){return e.localStore.theme_preference},onChange:M=>{e.setLocalStore("theme_preference",M)},"aria-label":"Theme preference",get children(){return[p(Z.RadioItem,{value:"light",get class(){return O(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Ad(),p(zc,{})]}}),p(Z.RadioItem,{value:"dark",get class(){return O(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Td(),p(Kc,{})]}}),p(Z.RadioItem,{value:"system",get class(){return O(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Fd(),p(Bc,{})]}})]}})}})}})]}}),p(Z.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[p(Z.SubTrigger,{get class(){return O(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-disabled-queries")},get children(){return[Id(),p(zt,{})]}}),p(Z.Portal,{ref:M=>q(M),get mount(){return pe(()=>!!s().pipWindow)()?s().pipWindow.document.body:document.body},get children(){return p(Z.SubContent,{get class(){return O(o().settingsMenu,"tsqd-settings-submenu")},"aria-label":"Hide disabled queries setting",get children(){return p(Z.RadioGroup,{get value(){return e.localStore.hideDisabledQueries},onChange:M=>e.setLocalStore("hideDisabledQueries",M),get children(){return[p(Z.RadioItem,{value:"false",get class(){return O(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-show")},get children(){return[Pd(),p(R,{get when(){return e.localStore.hideDisabledQueries!=="true"},get children(){return p(or,{})}})]}}),p(Z.RadioItem,{value:"true",get class(){return O(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-hide")},get children(){return[Od(),p(R,{get when(){return e.localStore.hideDisabledQueries==="true"},get children(){return p(or,{})}})]}})]}})}})}})]}})]}})}})]}}),null),S(D,p(R,{get when(){return a()==="queries"},get children(){var M=Ld(),ge=M.firstChild;return S(ge,p(wn,{by:Y=>Y.queryHash,get each(){return x()},children:Y=>p(e0,{get query(){return Y()}})})),U(()=>F(M,O(o().overflowQueryContainer,"tsqd-queries-overflow-container"))),M}}),null),S(D,p(R,{get when(){return a()==="mutations"},get children(){var M=qd(),ge=M.firstChild;return S(ge,p(wn,{by:Y=>Y.mutationId,get each(){return w()},children:Y=>p(t0,{get mutation(){return Y()}})})),U(()=>F(M,O(o().overflowQueryContainer,"tsqd-mutations-overflow-container"))),M}}),null),U(M=>{var ge=O(o().queriesContainer,ct()<Nt&&(Ie()||bt())&&r`
              height: 50%;
              max-height: 50%;
            `,ct()<Nt&&!(Ie()||bt())&&r`
              height: 100%;
              max-height: 100%;
            `,"tsqd-queries-container"),Y=O(o().row,"tsqd-header"),pt=o().logoAndToggleContainer,V=O(o().logo,"tsqd-text-logo-container"),Ne=O(o().tanstackLogo,"tsqd-text-logo-tanstack"),Ce=O(o().queryFlavorLogo,"tsqd-text-logo-query-flavor"),It=O(o().row,"tsqd-filters-actions-container"),qe=O(o().filtersContainer,"tsqd-filters-container"),mt=O(o().filterInput,"tsqd-query-filter-textfield-container"),St=O("tsqd-query-filter-textfield"),tt=O(o().filterSelect,"tsqd-query-filter-sort-container"),Qe=`Sort order ${(a()==="queries"?u():c())===-1?"descending":"ascending"}`,nt=(a()==="queries"?u():c())===-1,P=O(o().actionsContainer,"tsqd-actions-container"),oe=O(o().actionsBtn,"tsqd-actions-btn","tsqd-action-clear-cache"),Me=`Clear ${a()} cache`,ae=O(o().actionsBtn,tn()&&o().actionsBtnOffline,"tsqd-actions-btn","tsqd-action-mock-offline-behavior"),te=`${tn()?"Unset offline mocking behavior":"Mock offline behavior"}`,ce=tn(),ve=`${tn()?"Unset offline mocking behavior":"Mock offline behavior"}`;return ge!==M.e&&F(D,M.e=ge),Y!==M.t&&F(I,M.t=Y),pt!==M.a&&F(k,M.a=pt),V!==M.o&&F(T,M.o=V),Ne!==M.i&&F(N,M.i=Ne),Ce!==M.n&&F(G,M.n=Ce),It!==M.s&&F(ee,M.s=It),qe!==M.h&&F(le,M.h=qe),mt!==M.r&&F(ie,M.r=mt),St!==M.d&&F(re,M.d=St),tt!==M.l&&F(se,M.l=tt),Qe!==M.u&&A(ue,"aria-label",M.u=Qe),nt!==M.c&&A(ue,"aria-pressed",M.c=nt),P!==M.w&&F(me,M.w=P),oe!==M.m&&F(Ae,M.m=oe),Me!==M.f&&A(Ae,"title",M.f=Me),ae!==M.y&&F(he,M.y=ae),te!==M.g&&A(he,"aria-label",M.g=te),ce!==M.p&&A(he,"aria-pressed",M.p=ce),ve!==M.b&&A(he,"title",M.b=ve),M},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),U(()=>re.value=a()==="queries"?e.localStore.filter||"":e.localStore.mutationFilter||""),D})(),p(R,{get when(){return pe(()=>a()==="queries")()&&Ie()},get children(){return p(o0,{})}}),p(R,{get when(){return pe(()=>a()==="mutations")()&&bt()},get children(){return p(i0,{})}})]},e0=e=>{const t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=L(()=>t()==="dark"?We(n):je(n)),{colors:o,alpha:s}=C,a=(h,y)=>t()==="dark"?y:h,l=ye(h=>h().find({queryKey:e.query.queryKey})?.state,!0,h=>h.query.queryHash===e.query.queryHash),i=ye(h=>h().find({queryKey:e.query.queryKey})?.isDisabled()??!1,!0,h=>h.query.queryHash===e.query.queryHash),u=ye(h=>h().find({queryKey:e.query.queryKey})?.isStatic()??!1,!0,h=>h.query.queryHash===e.query.queryHash),d=ye(h=>h().find({queryKey:e.query.queryKey})?.isStale()??!1,!0,h=>h.query.queryHash===e.query.queryHash),c=ye(h=>h().find({queryKey:e.query.queryKey})?.getObserversCount()??0,!0,h=>h.query.queryHash===e.query.queryHash),f=L(()=>Cs({queryState:l(),observerCount:c(),isStale:d()})),g=()=>f()==="gray"?n`
        background-color: ${a(o[f()][200],o[f()][700])};
        color: ${a(o[f()][700],o[f()][300])};
      `:n`
      background-color: ${a(o[f()][200]+s[80],o[f()][900])};
      color: ${a(o[f()][800],o[f()][300])};
    `;return p(R,{get when(){return l()},get children(){var h=hs(),y=h.firstChild,m=y.nextSibling;return h.$$click=()=>Rn(e.query.queryHash===Ie()?null:e.query.queryHash),S(y,c),S(m,()=>e.query.queryHash),S(h,p(R,{get when(){return i()},get children(){return Rd()}}),null),S(h,p(R,{get when(){return u()},get children(){return zd()}}),null),U(v=>{var x=O(r().queryRow,Ie()===e.query.queryHash&&r().selectedQueryRow,"tsqd-query-row"),b=`Query key ${e.query.queryHash}`,w=O(g(),"tsqd-query-observer-count");return x!==v.e&&F(h,v.e=x),b!==v.t&&A(h,"aria-label",v.t=b),w!==v.a&&F(y,v.a=w),v},{e:void 0,t:void 0,a:void 0}),h}})},t0=e=>{const t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=L(()=>t()==="dark"?We(n):je(n)),{colors:o,alpha:s}=C,a=(f,g)=>t()==="dark"?g:f,l=Ue(f=>f().getAll().find(y=>y.mutationId===e.mutation.mutationId)?.state),i=Ue(f=>{const h=f().getAll().find(y=>y.mutationId===e.mutation.mutationId);return h?h.state.isPaused:!1}),u=Ue(f=>{const h=f().getAll().find(y=>y.mutationId===e.mutation.mutationId);return h?h.state.status:"idle"}),d=L(()=>Rt({isPaused:i(),status:u()})),c=()=>d()==="gray"?n`
        background-color: ${a(o[d()][200],o[d()][700])};
        color: ${a(o[d()][700],o[d()][300])};
      `:n`
      background-color: ${a(o[d()][200]+s[80],o[d()][900])};
      color: ${a(o[d()][800],o[d()][300])};
    `;return p(R,{get when(){return l()},get children(){var f=hs(),g=f.firstChild,h=g.nextSibling;return f.$$click=()=>{ps(e.mutation.mutationId===bt()?null:e.mutation.mutationId)},S(g,p(R,{get when(){return d()==="purple"},get children(){return p(ed,{})}}),null),S(g,p(R,{get when(){return d()==="green"},get children(){return p(or,{})}}),null),S(g,p(R,{get when(){return d()==="red"},get children(){return p(Jc,{})}}),null),S(g,p(R,{get when(){return d()==="yellow"},get children(){return p(Zc,{})}}),null),S(h,p(R,{get when(){return e.mutation.options.mutationKey},get children(){return[pe(()=>JSON.stringify(e.mutation.options.mutationKey))," -"," "]}}),null),S(h,()=>new Date(e.mutation.state.submittedAt).toLocaleString(),null),U(y=>{var m=O(r().queryRow,bt()===e.mutation.mutationId&&r().selectedQueryRow,"tsqd-query-row"),v=`Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`,x=O(c(),"tsqd-query-observer-count");return m!==y.e&&F(f,y.e=m),v!==y.t&&A(f,"aria-label",y.t=v),x!==y.a&&F(g,y.a=x),y},{e:void 0,t:void 0,a:void 0}),f}})},n0=()=>{const e=ye(i=>i().getAll().filter(u=>Lt(u)==="stale").length),t=ye(i=>i().getAll().filter(u=>Lt(u)==="fresh").length),n=ye(i=>i().getAll().filter(u=>Lt(u)==="fetching").length),r=ye(i=>i().getAll().filter(u=>Lt(u)==="paused").length),o=ye(i=>i().getAll().filter(u=>Lt(u)==="inactive").length),s=$e(),a=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,l=L(()=>s()==="dark"?We(a):je(a));return(()=>{var i=_n();return S(i,p(ut,{label:"Fresh",color:"green",get count(){return t()}}),null),S(i,p(ut,{label:"Fetching",color:"blue",get count(){return n()}}),null),S(i,p(ut,{label:"Paused",color:"purple",get count(){return r()}}),null),S(i,p(ut,{label:"Stale",color:"yellow",get count(){return e()}}),null),S(i,p(ut,{label:"Inactive",color:"gray",get count(){return o()}}),null),U(()=>F(i,O(l().queryStatusContainer,"tsqd-query-status-container"))),i})()},r0=()=>{const e=Ue(l=>l().getAll().filter(i=>Rt({isPaused:i.state.isPaused,status:i.state.status})==="green").length),t=Ue(l=>l().getAll().filter(i=>Rt({isPaused:i.state.isPaused,status:i.state.status})==="yellow").length),n=Ue(l=>l().getAll().filter(i=>Rt({isPaused:i.state.isPaused,status:i.state.status})==="purple").length),r=Ue(l=>l().getAll().filter(i=>Rt({isPaused:i.state.isPaused,status:i.state.status})==="red").length),o=$e(),s=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,a=L(()=>o()==="dark"?We(s):je(s));return(()=>{var l=_n();return S(l,p(ut,{label:"Paused",color:"purple",get count(){return n()}}),null),S(l,p(ut,{label:"Pending",color:"yellow",get count(){return t()}}),null),S(l,p(ut,{label:"Success",color:"green",get count(){return e()}}),null),S(l,p(ut,{label:"Error",color:"red",get count(){return r()}}),null),U(()=>F(l,O(a().queryStatusContainer,"tsqd-query-status-container"))),l})()},ut=e=>{const t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=L(()=>t()==="dark"?We(n):je(n)),{colors:o,alpha:s}=C,a=(g,h)=>t()==="dark"?h:g;let l;const[i,u]=z(!1),[d,c]=z(!1),f=L(()=>!(Ie()&&ct()<Vs&&ct()>Nt||ct()<Nt));return(()=>{var g=Nd(),h=g.firstChild,y=h.nextSibling,m=l;return typeof m=="function"?Dn(m,g):l=g,g.addEventListener("mouseleave",()=>{u(!1),c(!1)}),g.addEventListener("mouseenter",()=>u(!0)),g.addEventListener("blur",()=>c(!1)),g.addEventListener("focus",()=>c(!0)),Ms(g,j({get disabled(){return f()},get class(){return O(r().queryStatusTag,!f()&&n`
            cursor: pointer;
            &:hover {
              background: ${a(o.gray[200],o.darkGray[400])}${s[80]};
            }
          `,"tsqd-query-status-tag",`tsqd-query-status-tag-${e.label.toLowerCase()}`)}},()=>i()||d()?{"aria-describedby":"tsqd-status-tooltip"}:{}),!1,!0),S(g,p(R,{get when(){return pe(()=>!f())()&&(i()||d())},get children(){var v=Kd();return S(v,()=>e.label),U(()=>F(v,O(r().statusTooltip,"tsqd-query-status-tooltip"))),v}}),h),S(g,p(R,{get when(){return f()},get children(){var v=Bd();return S(v,()=>e.label),U(()=>F(v,O(r().queryStatusTagLabel,"tsqd-query-status-tag-label"))),v}}),y),S(y,()=>e.count),U(v=>{var x=O(n`
            width: ${C.size[1.5]};
            height: ${C.size[1.5]};
            border-radius: ${C.border.radius.full};
            background-color: ${C.colors[e.color][500]};
          `,"tsqd-query-status-tag-dot"),b=O(r().queryStatusCount,e.count>0&&e.color!=="gray"&&n`
              background-color: ${a(o[e.color][100],o[e.color][900])};
              color: ${a(o[e.color][700],o[e.color][300])};
            `,"tsqd-query-status-tag-count");return x!==v.e&&F(h,v.e=x),b!==v.t&&F(y,v.t=b),v},{e:void 0,t:void 0}),g})()},o0=()=>{const e=$e(),t=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,n=L(()=>e()==="dark"?We(t):je(t)),{colors:r}=C,o=(k,T)=>e()==="dark"?T:k,s=K().client,[a,l]=z(!1),[i,u]=z("view"),[d,c]=z(!1),f=L(()=>K().errorTypes||[]),g=ye(k=>k().getAll().find(T=>T.queryHash===Ie()),!1),h=ye(k=>k().getAll().find(T=>T.queryHash===Ie()),!1),y=ye(k=>k().getAll().find(T=>T.queryHash===Ie())?.state,!1),m=ye(k=>k().getAll().find(T=>T.queryHash===Ie())?.state.data,!1),v=ye(k=>{const T=k().getAll().find(N=>N.queryHash===Ie());return T?Lt(T):"inactive"}),x=ye(k=>{const T=k().getAll().find(N=>N.queryHash===Ie());return T?T.state.status:"pending"}),b=ye(k=>k().getAll().find(T=>T.queryHash===Ie())?.getObserversCount()??0),w=L(()=>Ss(v())),$=()=>{Ye({type:"REFETCH",queryHash:g()?.queryHash}),g()?.fetch()?.catch(()=>{})},q=k=>{const T=g();if(!T)return;Ye({type:"TRIGGER_ERROR",queryHash:T.queryHash,metadata:{error:k?.name}});const N=k?.initializer(T)??new Error("Unknown error from devtools"),G=T.options;T.setState({status:"error",error:N,fetchMeta:{...T.state.fetchMeta,__previousQueryOptions:G}})},D=()=>{const k=g();if(!k)return;Ye({type:"RESTORE_LOADING",queryHash:k.queryHash});const T=k.state,N=k.state.fetchMeta?k.state.fetchMeta.__previousQueryOptions:null;k.cancel({silent:!0}),k.setState({...T,fetchStatus:"idle",fetchMeta:null}),N&&k.fetch(N)};B(()=>{v()!=="fetching"&&l(!1)});const I=()=>w()==="gray"?t`
        background-color: ${o(r[w()][200],r[w()][700])};
        color: ${o(r[w()][700],r[w()][300])};
        border-color: ${o(r[w()][400],r[w()][600])};
      `:t`
      background-color: ${o(r[w()][100],r[w()][900])};
      color: ${o(r[w()][700],r[w()][300])};
      border-color: ${o(r[w()][400],r[w()][600])};
    `;return p(R,{get when(){return pe(()=>!!g())()&&y()},get children(){var k=jd(),T=k.firstChild,N=T.nextSibling,G=N.firstChild,ne=G.firstChild,ee=ne.firstChild,le=ne.nextSibling,ie=G.nextSibling,re=ie.firstChild,se=re.nextSibling,ue=ie.nextSibling,me=ue.firstChild,Ae=me.nextSibling,he=N.nextSibling,Ee=he.nextSibling,M=Ee.firstChild,ge=M.firstChild,Y=M.nextSibling,pt=Y.firstChild,V=Y.nextSibling,Ne=V.firstChild,Ce=V.nextSibling,It=Ce.firstChild,qe=Ce.nextSibling,mt=qe.firstChild,St=mt.nextSibling,tt=Ee.nextSibling;tt.firstChild;var Qe=tt.nextSibling,nt=Qe.nextSibling;return S(ee,()=>xn(g().queryKey,!0)),S(le,v),S(se,b),S(Ae,()=>new Date(y().dataUpdatedAt).toLocaleTimeString()),M.$$click=$,Y.$$click=()=>{Ye({type:"INVALIDATE",queryHash:g()?.queryHash}),s.invalidateQueries(g())},V.$$click=()=>{Ye({type:"RESET",queryHash:g()?.queryHash}),s.resetQueries(g())},Ce.$$click=()=>{Ye({type:"REMOVE",queryHash:g()?.queryHash}),s.removeQueries(g()),Rn(null)},qe.$$click=()=>{if(g()?.state.data===void 0)l(!0),D();else{const P=g();if(!P)return;Ye({type:"TRIGGER_LOADING",queryHash:P.queryHash});const oe=P.options;P.fetch({...oe,queryFn:()=>new Promise(()=>{}),gcTime:-1}),P.setState({data:void 0,status:"pending",fetchMeta:{...P.state.fetchMeta,__previousQueryOptions:oe}})}},S(qe,()=>x()==="pending"?"Restore":"Trigger",St),S(Ee,p(R,{get when(){return f().length===0||x()==="error"},get children(){var P=Gd(),oe=P.firstChild,Me=oe.nextSibling;return P.$$click=()=>{g().state.error?(Ye({type:"RESTORE_ERROR",queryHash:g()?.queryHash}),s.resetQueries(g())):q()},S(P,()=>x()==="error"?"Restore":"Trigger",Me),U(ae=>{var te=O(t`
                  color: ${o(r.red[500],r.red[400])};
                `,"tsqd-query-details-actions-btn","tsqd-query-details-action-error"),ce=x()==="pending",ve=t`
                  background-color: ${o(r.red[500],r.red[400])};
                `;return te!==ae.e&&F(P,ae.e=te),ce!==ae.t&&(P.disabled=ae.t=ce),ve!==ae.a&&F(oe,ae.a=ve),ae},{e:void 0,t:void 0,a:void 0}),P}}),null),S(Ee,p(R,{get when(){return!(f().length===0||x()==="error")},get children(){var P=Ud(),oe=P.firstChild,Me=oe.nextSibling,ae=Me.nextSibling;return ae.firstChild,ae.addEventListener("change",te=>{const ce=f().find(ve=>ve.name===te.currentTarget.value);q(ce)}),S(ae,p(ks,{get each(){return f()},children:te=>(()=>{var ce=Wd();return S(ce,()=>te.name),U(()=>ce.value=te.name),ce})()}),null),S(P,p(zt,{}),null),U(te=>{var ce=O(n().actionsSelect,"tsqd-query-details-actions-btn","tsqd-query-details-action-error-multiple"),ve=t`
                  background-color: ${C.colors.red[400]};
                `,X=x()==="pending";return ce!==te.e&&F(P,te.e=ce),ve!==te.t&&F(oe,te.t=ve),X!==te.a&&(ae.disabled=te.a=X),te},{e:void 0,t:void 0,a:void 0}),P}}),null),S(tt,()=>i()==="view"?"Explorer":"Editor",null),S(k,p(R,{get when(){return i()==="view"},get children(){var P=Hd();return S(P,p(yt,{label:"Data",defaultExpanded:["Data"],get value(){return m()},editable:!0,onEdit:()=>u("edit"),get activeQuery(){return g()}})),U(oe=>(oe=C.size[2])!=null?P.style.setProperty("padding",oe):P.style.removeProperty("padding")),P}}),Qe),S(k,p(R,{get when(){return i()==="edit"},get children(){var P=Vd(),oe=P.firstChild,Me=oe.nextSibling,ae=Me.firstChild,te=ae.nextSibling,ce=te.firstChild,ve=ce.nextSibling;return P.addEventListener("submit",X=>{X.preventDefault();const ot=new FormData(X.currentTarget).get("data");try{const Ge=JSON.parse(ot);g().setState({...g().state,data:Ge}),u("view")}catch{c(!0)}}),oe.addEventListener("focus",()=>c(!1)),S(ae,()=>d()?"Invalid Value":""),ce.$$click=()=>u("view"),U(X=>{var rt=O(n().devtoolsEditForm,"tsqd-query-details-data-editor"),ot=n().devtoolsEditTextarea,Ge=d(),kt=n().devtoolsEditFormActions,it=n().devtoolsEditFormError,Et=n().devtoolsEditFormActionContainer,st=O(n().devtoolsEditFormAction,t`
                      color: ${o(r.gray[600],r.gray[300])};
                    `),vt=O(n().devtoolsEditFormAction,t`
                      color: ${o(r.blue[600],r.blue[400])};
                    `);return rt!==X.e&&F(P,X.e=rt),ot!==X.t&&F(oe,X.t=ot),Ge!==X.a&&A(oe,"data-error",X.a=Ge),kt!==X.o&&F(Me,X.o=kt),it!==X.i&&F(ae,X.i=it),Et!==X.n&&F(te,X.n=Et),st!==X.s&&F(ce,X.s=st),vt!==X.h&&F(ve,X.h=vt),X},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),U(()=>oe.value=JSON.stringify(m(),null,2)),P}}),Qe),S(nt,p(yt,{label:"Query",defaultExpanded:["Query","queryKey"],get value(){return h()}})),U(P=>{var oe=O(n().detailsContainer,"tsqd-query-details-container"),Me=O(n().detailsHeader,"tsqd-query-details-header"),ae=O(n().detailsBody,"tsqd-query-details-summary-container"),te=O(n().queryDetailsStatus,I()),ce=O(n().detailsHeader,"tsqd-query-details-header"),ve=O(n().actionsBody,"tsqd-query-details-actions-container"),X=O(t`
                color: ${o(r.blue[600],r.blue[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-refetch"),rt=v()==="fetching",ot=t`
                background-color: ${o(r.blue[600],r.blue[400])};
              `,Ge=O(t`
                color: ${o(r.yellow[600],r.yellow[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-invalidate"),kt=x()==="pending",it=t`
                background-color: ${o(r.yellow[600],r.yellow[400])};
              `,Et=O(t`
                color: ${o(r.gray[600],r.gray[300])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-reset"),st=x()==="pending",vt=t`
                background-color: ${o(r.gray[600],r.gray[400])};
              `,hn=O(t`
                color: ${o(r.pink[500],r.pink[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-remove"),Wt=v()==="fetching",pn=t`
                background-color: ${o(r.pink[500],r.pink[400])};
              `,Pt=O(t`
                color: ${o(r.cyan[500],r.cyan[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-loading"),mn=a(),Qt=t`
                background-color: ${o(r.cyan[500],r.cyan[400])};
              `,Yt=O(n().detailsHeader,"tsqd-query-details-header"),Xt=O(n().detailsHeader,"tsqd-query-details-header"),Ot=C.size[2];return oe!==P.e&&F(k,P.e=oe),Me!==P.t&&F(T,P.t=Me),ae!==P.a&&F(N,P.a=ae),te!==P.o&&F(le,P.o=te),ce!==P.i&&F(he,P.i=ce),ve!==P.n&&F(Ee,P.n=ve),X!==P.s&&F(M,P.s=X),rt!==P.h&&(M.disabled=P.h=rt),ot!==P.r&&F(ge,P.r=ot),Ge!==P.d&&F(Y,P.d=Ge),kt!==P.l&&(Y.disabled=P.l=kt),it!==P.u&&F(pt,P.u=it),Et!==P.c&&F(V,P.c=Et),st!==P.w&&(V.disabled=P.w=st),vt!==P.m&&F(Ne,P.m=vt),hn!==P.f&&F(Ce,P.f=hn),Wt!==P.y&&(Ce.disabled=P.y=Wt),pn!==P.g&&F(It,P.g=pn),Pt!==P.p&&F(qe,P.p=Pt),mn!==P.b&&(qe.disabled=P.b=mn),Qt!==P.T&&F(mt,P.T=Qt),Yt!==P.A&&F(tt,P.A=Yt),Xt!==P.O&&F(Qe,P.O=Xt),Ot!==P.I&&((P.I=Ot)!=null?nt.style.setProperty("padding",Ot):nt.style.removeProperty("padding")),P},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0,T:void 0,A:void 0,O:void 0,I:void 0}),k}})},i0=()=>{const e=$e(),t=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,n=L(()=>e()==="dark"?We(t):je(t)),{colors:r}=C,o=(d,c)=>e()==="dark"?c:d,s=Ue(d=>{const f=d().getAll().find(g=>g.mutationId===bt());return f?f.state.isPaused:!1}),a=Ue(d=>{const f=d().getAll().find(g=>g.mutationId===bt());return f?f.state.status:"idle"}),l=L(()=>Rt({isPaused:s(),status:a()})),i=Ue(d=>d().getAll().find(c=>c.mutationId===bt()),!1),u=()=>l()==="gray"?t`
        background-color: ${o(r[l()][200],r[l()][700])};
        color: ${o(r[l()][700],r[l()][300])};
        border-color: ${o(r[l()][400],r[l()][600])};
      `:t`
      background-color: ${o(r[l()][100],r[l()][900])};
      color: ${o(r[l()][700],r[l()][300])};
      border-color: ${o(r[l()][400],r[l()][600])};
    `;return p(R,{get when(){return i()},get children(){var d=Qd(),c=d.firstChild,f=c.nextSibling,g=f.firstChild,h=g.firstChild,y=h.firstChild,m=h.nextSibling,v=g.nextSibling,x=v.firstChild,b=x.nextSibling,w=f.nextSibling,$=w.nextSibling,q=$.nextSibling,D=q.nextSibling,I=D.nextSibling,k=I.nextSibling,T=k.nextSibling,N=T.nextSibling;return S(y,p(R,{get when(){return i().options.mutationKey},fallback:"No mutationKey found",get children(){return xn(i().options.mutationKey,!0)}})),S(m,p(R,{get when(){return l()==="purple"},children:"pending"}),null),S(m,p(R,{get when(){return l()!=="purple"},get children(){return a()}}),null),S(b,()=>new Date(i().state.submittedAt).toLocaleTimeString()),S($,p(yt,{label:"Variables",defaultExpanded:["Variables"],get value(){return i().state.variables}})),S(D,p(yt,{label:"Context",defaultExpanded:["Context"],get value(){return i().state.context}})),S(k,p(yt,{label:"Data",defaultExpanded:["Data"],get value(){return i().state.data}})),S(N,p(yt,{label:"Mutation",defaultExpanded:["Mutation"],get value(){return i()}})),U(G=>{var ne=O(n().detailsContainer,"tsqd-query-details-container"),ee=O(n().detailsHeader,"tsqd-query-details-header"),le=O(n().detailsBody,"tsqd-query-details-summary-container"),ie=O(n().queryDetailsStatus,u()),re=O(n().detailsHeader,"tsqd-query-details-header"),se=C.size[2],ue=O(n().detailsHeader,"tsqd-query-details-header"),me=C.size[2],Ae=O(n().detailsHeader,"tsqd-query-details-header"),he=C.size[2],Ee=O(n().detailsHeader,"tsqd-query-details-header"),M=C.size[2];return ne!==G.e&&F(d,G.e=ne),ee!==G.t&&F(c,G.t=ee),le!==G.a&&F(f,G.a=le),ie!==G.o&&F(m,G.o=ie),re!==G.i&&F(w,G.i=re),se!==G.n&&((G.n=se)!=null?$.style.setProperty("padding",se):$.style.removeProperty("padding")),ue!==G.s&&F(q,G.s=ue),me!==G.h&&((G.h=me)!=null?D.style.setProperty("padding",me):D.style.removeProperty("padding")),Ae!==G.r&&F(I,G.r=Ae),he!==G.d&&((G.d=he)!=null?k.style.setProperty("padding",he):k.style.removeProperty("padding")),Ee!==G.l&&F(T,G.l=Ee),M!==G.u&&((G.u=M)!=null?N.style.setProperty("padding",M):N.style.removeProperty("padding")),G},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),d}})},En=new Map,s0=()=>{const e=L(()=>K().client.getQueryCache()),t=e().subscribe(n=>{$s(()=>{for(const[r,o]of En.entries())o.shouldUpdate(n)&&o.setter(r(e))})});return H(()=>{En.clear(),t()}),t},ye=(e,t=!0,n=()=>!0)=>{const r=L(()=>K().client.getQueryCache()),[o,s]=z(e(r),t?void 0:{equals:!1});return B(()=>{s(e(r))}),En.set(e,{setter:s,shouldUpdate:n}),H(()=>{En.delete(e)}),o},Mn=new Map,a0=()=>{const e=L(()=>K().client.getMutationCache()),t=e().subscribe(()=>{for(const[n,r]of Mn.entries())queueMicrotask(()=>{r(n(e))})});return H(()=>{Mn.clear(),t()}),t},Ue=(e,t=!0)=>{const n=L(()=>K().client.getMutationCache()),[r,o]=z(e(n),t?void 0:{equals:!1});return B(()=>{o(e(n))}),Mn.set(e,o),H(()=>{Mn.delete(e)}),r},l0="@tanstack/query-devtools-event",Ye=({type:e,queryHash:t,metadata:n})=>{const r=new CustomEvent(l0,{detail:{type:e,queryHash:t,metadata:n},bubbles:!0,cancelable:!0});window.dispatchEvent(r)},ys=(e,t)=>{const{colors:n,font:r,size:o,alpha:s,shadow:a,border:l}=C,i=(u,d)=>e==="light"?u:d;return{devtoolsBtn:t`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${a.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${n.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,panel:t`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${C.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${i(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${i(n.gray[400],n.darkGray[300])};
      }
    `,parentPanel:t`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${C.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${i(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${i(n.gray[400],n.darkGray[300])};
      }
    `,"devtoolsBtn-position-bottom-right":t`
      bottom: 12px;
      right: 12px;
    `,"devtoolsBtn-position-bottom-left":t`
      bottom: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-left":t`
      top: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-right":t`
      top: 12px;
      right: 12px;
    `,"devtoolsBtn-position-relative":t`
      position: relative;
    `,"panel-position-top":t`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-bottom":t`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-right":t`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,"panel-position-left":t`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,closeBtn:t`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${i(n.gray[50],n.darkGray[700])};
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${n.blue[600]};
      }
      & svg {
        color: ${i(n.gray[600],n.gray[400])};
        width: ${o[2]};
        height: ${o[2]};
      }
    `,"closeBtn-position-top":t`
      bottom: 0;
      right: ${o[2]};
      transform: translate(0, 100%);
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${l.radius.sm} ${l.radius.sm};
      padding: ${o[.5]} ${o[1.5]} ${o[1]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,"closeBtn-position-bottom":t`
      top: 0;
      right: ${o[2]};
      transform: translate(0, -100%);
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${l.radius.sm} ${l.radius.sm} 0px 0px;
      padding: ${o[1]} ${o[1.5]} ${o[.5]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }
    `,"closeBtn-position-right":t`
      bottom: ${o[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: ${l.radius.sm} 0px 0px ${l.radius.sm};
      padding: ${o[1.5]} ${o[.5]} ${o[1.5]} ${o[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,"closeBtn-position-left":t`
      bottom: ${o[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px ${l.radius.sm} ${l.radius.sm} 0px;
      padding: ${o[1.5]} ${o[1]} ${o[1.5]} ${o[.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,queriesContainer:t`
      flex: 1 1 700px;
      background-color: ${i(n.gray[50],n.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,dragHandle:t`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${n.purple[400]}${i("",s[90])};
      }
      z-index: 4;
    `,"dragHandle-position-top":t`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-bottom":t`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-right":t`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,"dragHandle-position-left":t`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,row:t`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${C.size[2]} ${C.size[2.5]};
      gap: ${C.size[2.5]};
      border-bottom: ${i(n.gray[300],n.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${o[.5]};
        flex-direction: column;
      }
    `,logoAndToggleContainer:t`
      display: flex;
      gap: ${C.size[3]};
      align-items: center;
    `,logo:t`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${C.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,tanstackLogo:t`
      font-size: ${r.size.md};
      font-weight: ${r.weight.bold};
      line-height: ${r.lineHeight.xs};
      white-space: nowrap;
      color: ${i(n.gray[600],n.gray[300])};
    `,queryFlavorLogo:t`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(
        to right,
        ${i("#ea4037, #ff9b11","#dd524b, #e9a03b")}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,queryStatusContainer:t`
      display: flex;
      gap: ${C.size[2]};
      height: min-content;
    `,queryStatusTag:t`
      display: flex;
      gap: ${C.size[1.5]};
      box-sizing: border-box;
      height: ${C.size[6.5]};
      background: ${i(n.gray[50],n.darkGray[500])};
      color: ${i(n.gray[700],n.gray[300])};
      border-radius: ${C.border.radius.sm};
      font-size: ${r.size.sm};
      padding: ${C.size[1]};
      padding-left: ${C.size[1.5]};
      align-items: center;
      font-weight: ${r.weight.medium};
      border: ${i("1px solid "+n.gray[300],"1px solid transparent")};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,queryStatusTagLabel:t`
      font-size: ${r.size.xs};
    `,queryStatusCount:t`
      font-size: ${r.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${i(n.gray[500],n.gray[400])};
      background-color: ${i(n.gray[200],n.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${C.size[4.5]};
    `,statusTooltip:t`
      position: absolute;
      z-index: 1;
      background-color: ${i(n.gray[50],n.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${C.size[2]}));
      padding: ${C.size[.5]} ${C.size[2]};
      border-radius: ${C.border.radius.sm};
      font-size: ${r.size.xs};
      border: 1px solid ${i(n.gray[400],n.gray[600])};
      color: ${i(n.gray[600],n.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${i(n.gray[400],n.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${i(n.gray[100],n.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,filtersContainer:t`
      display: flex;
      gap: ${C.size[2]};
      & > button {
        cursor: pointer;
        padding: ${C.size[.5]} ${C.size[1.5]} ${C.size[.5]}
          ${C.size[2]};
        border-radius: ${C.border.radius.sm};
        background-color: ${i(n.gray[100],n.darkGray[400])};
        border: 1px solid ${i(n.gray[300],n.darkGray[200])};
        color: ${i(n.gray[700],n.gray[300])};
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        line-height: ${r.lineHeight.sm};
        gap: ${C.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${l.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        & svg {
          width: ${C.size[3]};
          height: ${C.size[3]};
          color: ${i(n.gray[500],n.gray[400])};
        }
      }
    `,filterInput:t`
      padding: ${o[.5]} ${o[2]};
      border-radius: ${C.border.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${C.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      height: min-content;
      color: ${i(n.gray[600],n.gray[400])};
      & > svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      & input {
        font-size: ${r.size.xs};
        width: 100%;
        background-color: ${i(n.gray[100],n.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${r.lineHeight.sm};
        color: ${i(n.gray[700],n.gray[300])};
        &::placeholder {
          color: ${i(n.gray[700],n.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,filterSelect:t`
      padding: ${C.size[.5]} ${C.size[2]};
      border-radius: ${C.border.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${C.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${i(n.gray[600],n.gray[400])};
        width: ${C.size[2]};
        height: ${C.size[2]};
      }
      & > select {
        appearance: none;
        color: ${i(n.gray[700],n.gray[300])};
        min-width: 100px;
        line-height: ${r.lineHeight.sm};
        font-size: ${r.size.xs};
        background-color: ${i(n.gray[100],n.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsContainer:t`
      display: flex;
      gap: ${C.size[2]};
    `,actionsBtn:t`
      border-radius: ${C.border.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[400])};
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      width: ${C.size[6.5]};
      height: ${C.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${C.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      & svg {
        color: ${i(n.gray[700],n.gray[300])};
        width: ${C.size[3]};
        height: ${C.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsBtnOffline:t`
      & svg {
        stroke: ${i(n.yellow[700],n.yellow[500])};
        fill: ${i(n.yellow[700],n.yellow[500])};
      }
    `,overflowQueryContainer:t`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,queryRow:t`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${i(n.gray[700],n.gray[300])};
      background-color: ${i(n.gray[50],n.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${i(n.gray[200],n.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${C.size[1]};
        user-select: none;
        min-width: ${C.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${r.size.xs};
        font-weight: ${r.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${i(n.gray[300],n.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        min-height: ${C.size[6]};
        flex: 1;
        padding: ${C.size[1]} ${C.size[2]};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${i(n.gray[300],n.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${C.size[2]};
        color: ${i(n.gray[800],n.gray[300])};
        background-color: ${i(n.gray[300],n.darkGray[600])};
        border-bottom: 1px solid ${i(n.gray[300],n.darkGray[400])};
        font-size: ${r.size.xs};
      }

      & .tsqd-query-static-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${C.size[2]};
        color: ${i(n.teal[800],n.teal[300])};
        background-color: ${i(n.teal[100],n.teal[900])};
        border-bottom: 1px solid ${i(n.teal[300],n.teal[700])};
        font-size: ${r.size.xs};
      }
    `,selectedQueryRow:t`
      background-color: ${i(n.gray[200],n.darkGray[500])};
    `,detailsContainer:t`
      flex: 1 1 700px;
      background-color: ${i(n.gray[50],n.darkGray[700])};
      color: ${i(n.gray[700],n.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,detailsHeader:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${i(n.gray[200],n.darkGray[600])};
      padding: ${C.size[1.5]} ${C.size[2]};
      font-weight: ${r.weight.medium};
      font-size: ${r.size.xs};
      line-height: ${r.lineHeight.xs};
      text-align: left;
    `,detailsBody:t`
      margin: ${C.size[1.5]} 0px ${C.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${C.size[2]};
        line-height: ${r.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${r.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${C.size[1.5]};
      }

      & code {
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${r.size.xs};
        line-height: ${r.lineHeight.xs};
        max-width: 100%;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,queryDetailsStatus:t`
      border: 1px solid ${n.darkGray[200]};
      border-radius: ${C.border.radius.sm};
      font-weight: ${r.weight.medium};
      padding: ${C.size[1]} ${C.size[2.5]};
    `,actionsBody:t`
      flex-wrap: wrap;
      margin: ${C.size[2]} 0px ${C.size[2]} 0px;
      display: flex;
      gap: ${C.size[2]};
      padding: 0px ${C.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${r.size.xs};
        padding: ${C.size[1]} ${C.size[2]};
        display: flex;
        border-radius: ${C.border.radius.sm};
        background-color: ${i(n.gray[100],n.darkGray[600])};
        border: 1px solid ${i(n.gray[300],n.darkGray[400])};
        align-items: center;
        gap: ${C.size[2]};
        font-weight: ${r.weight.medium};
        line-height: ${r.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${l.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        &:hover {
          background-color: ${i(n.gray[200],n.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${o[1.5]};
          height: ${o[1.5]};
          border-radius: ${C.border.radius.full};
        }
      }
    `,actionsSelect:t`
      font-size: ${r.size.xs};
      padding: ${C.size[.5]} ${C.size[2]};
      display: flex;
      border-radius: ${C.border.radius.sm};
      overflow: hidden;
      background-color: ${i(n.gray[100],n.darkGray[600])};
      border: 1px solid ${i(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${C.size[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.sm};
      color: ${i(n.red[500],n.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      & > span {
        width: ${o[1.5]};
        height: ${o[1.5]};
        border-radius: ${C.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${C.colors.red[400]};
      }
      & svg {
        width: ${C.size[2]};
        height: ${C.size[2]};
      }
    `,settingsMenu:t`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${o[.5]};
      border-radius: ${C.border.radius.sm};
      border: 1px solid ${i(n.gray[300],n.gray[700])};
      background-color: ${i(n.gray[50],n.darkGray[600])};
      font-size: ${r.size.xs};
      color: ${i(n.gray[700],n.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${o[.5]};
    `,settingsSubTrigger:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${C.border.radius.xs};
      padding: ${C.size[1]} ${C.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${i(n.gray[700],n.gray[300])};
      & svg {
        color: ${i(n.gray[600],n.gray[400])};
        transform: rotate(-90deg);
        width: ${C.size[2]};
        height: ${C.size[2]};
      }
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,settingsMenuHeader:t`
      padding: ${C.size[1]} ${C.size[1]};
      font-weight: ${r.weight.medium};
      border-bottom: 1px solid ${i(n.gray[300],n.darkGray[400])};
      color: ${i(n.gray[500],n.gray[400])};
      font-size: ${r.size.xs};
    `,settingsSubButton:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${i(n.gray[700],n.gray[300])};
      font-size: ${r.size.xs};
      border-radius: ${C.border.radius.xs};
      padding: ${C.size[1]} ${C.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${i(n.gray[600],n.gray[400])};
      }
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &[data-checked] {
        background-color: ${i(n.purple[100],n.purple[900])};
        color: ${i(n.purple[700],n.purple[300])};
        & svg {
          color: ${i(n.purple[700],n.purple[300])};
        }
        &:hover {
          background-color: ${i(n.purple[100],n.purple[900])};
        }
      }
    `,viewToggle:t`
      border-radius: ${C.border.radius.sm};
      background-color: ${i(n.gray[200],n.darkGray[600])};
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${r.size.xs};
      color: ${i(n.gray[700],n.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${n.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${r.lineHeight.md};
        }

        & label:hover {
          background-color: ${i(n.gray[100],n.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${i(n.gray[100],n.darkGray[400])};
        & label:hover {
          background-color: ${i(n.gray[100],n.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${C.size[1.5]} 0 ${C.size[2]};
        }
        border-right: 1px solid ${i(n.gray[300],n.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${C.size[2]} 0 ${C.size[1.5]};
        }
      }
    `,devtoolsEditForm:t`
      padding: ${o[2]};
      & > [data-error='true'] {
        outline: 2px solid ${i(n.red[200],n.red[800])};
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
      }
    `,devtoolsEditTextarea:t`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${r.size.xs};
      border-radius: ${l.radius.sm};
      field-sizing: content;
      padding: ${o[2]};
      background-color: ${i(n.gray[100],n.darkGray[800])};
      color: ${i(n.gray[900],n.gray[100])};
      border: 1px solid ${i(n.gray[200],n.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${i(n.blue[200],n.blue[800])};
      }
    `,devtoolsEditFormActions:t`
      display: flex;
      justify-content: space-between;
      gap: ${o[2]};
      align-items: center;
      padding-top: ${o[1]};
      font-size: ${r.size.xs};
    `,devtoolsEditFormError:t`
      color: ${i(n.red[700],n.red[500])};
    `,devtoolsEditFormActionContainer:t`
      display: flex;
      gap: ${o[2]};
    `,devtoolsEditFormAction:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${r.size.xs};
      padding: ${o[1]} ${C.size[2]};
      display: flex;
      border-radius: ${l.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[600])};
      border: 1px solid ${i(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${o[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}},je=e=>ys("light",e),We=e=>ys("dark",e);ir(["click","mousedown","input"]);var u0=e=>{const[t,n]=Us({prefix:"TanstackQueryDevtools"}),r=qs(),o=L(()=>{const s=e.theme||t.theme_preference||Ws;return s!=="system"?s:r()});return p(Bo.Provider,{value:e,get children(){return p(Js,{localStore:t,setLocalStore:n,get children(){return p(Go.Provider,{value:o,get children(){return p(Xd,{localStore:t,setLocalStore:n})}})}})}})},d0=u0;export{d0 as default};
