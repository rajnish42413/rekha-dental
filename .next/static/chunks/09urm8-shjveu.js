(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,114975,e=>{"use strict";var t=e.i(271645),a=e.i(339954),r=e.i(650471),i=r.default,n="video",o=e=>e===n?"playback":e,l=class e extends Error{constructor(t,a=e.MEDIA_ERR_CUSTOM,r,i){var n;super(t),this.name="MediaError",this.code=a,this.context=i,this.fatal=null!=r?r:a>=e.MEDIA_ERR_NETWORK&&a<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};l.MEDIA_ERR_ABORTED=1,l.MEDIA_ERR_NETWORK=2,l.MEDIA_ERR_DECODE=3,l.MEDIA_ERR_SRC_NOT_SUPPORTED=4,l.MEDIA_ERR_ENCRYPTED=5,l.MEDIA_ERR_CUSTOM=100,l.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var s=(e,t)=>null!=t&&e in t,d={ANY:"any",MUTED:"muted"},u="on-demand",m="live",c="unknown",p="native",h={HEADER:"header",QUERY:"query",NONE:"none"},b=Object.values(h),v={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},E={HLS:v.M3U8};Object.keys(E),[...Object.values(v)];var g={code:"en"},y=(e,t,a,r,i=e)=>{i.addEventListener(t,a,r),e.addEventListener("teardown",()=>{i.removeEventListener(t,a)},{once:!0})},f=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},T=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return s(e,E)?E[e]:t}return C(e)},A=e=>"VOD"===e?u:m,k=e=>"EVENT"===e?1/0:"VOD"===e?NaN:0,C=e=>{let{src:t}=e;if(!t)return"";let a="";try{a=R(t).pathname}catch{console.error("Invalid url when trying to infer mime type",t)}let r=a.lastIndexOf(".");if(r<0)return S(e)?v.M3U8:"";let i=a.slice(r+1).toUpperCase();return s(i,v)?v[i]:""},_=e=>{try{return new URL(e),!1}catch{return!0}},R=(e,t)=>{var a;if(!_(e))return new URL(e);let r=null==(a=null==window?void 0:window.location)?void 0:a.href,i=null!=t?t:r;return t&&_(t.toString())&&(i=new URL(t,r)),new URL(e,i)},w="mux.com",S=({src:e,customDomain:t=w})=>{let a;try{a=new URL(`${e}`)}catch{return!1}let r="https:"===a.protocol,i=a.hostname===`stream.${t}`.toLowerCase(),n=a.pathname.split("/"),o=2===n.length,l=!(null!=n&&n[1].includes("."));return r&&i&&o&&l},L=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch{return}};function I(e,t=!0){var a;return new D(t&&null!=(a=null==g?void 0:g[e])?a:e,t?g.code:"en")}var D=class{constructor(e,t=(e=>null!=(e=g)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,a)=>{var r;return null!=(r=e[a])?r:""})}toString(){return this.message}},M=Object.values(d),O=e=>"boolean"==typeof e||"string"==typeof e&&M.includes(e),x=(e,t)=>{if(!t)return;let a=e.muted,r=()=>e.muted=a;switch(t){case d.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(r)});break;case d.MUTED:e.muted=!0,e.play().catch(r);break;default:e.play().catch(()=>{})}},N=e=>"time"in e?e.time:e.startTime;function P(e,t,a,r,i,n){let o=document.createElement("track");return o.kind=t,o.label=a,r&&(o.srclang=r),i&&(o.id=i),n&&(o.default=!0),o.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",o.setAttribute("data-removeondestroy",""),e.append(o),o.track}function U(e,t,a){var r;return null==(r=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===a))?void 0:r.track}async function B(e,t,a,r){let i=U(e,a,r);return i||((i=P(e,r,a)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==i.mode&&(i.mode="hidden"),[...t].sort((e,t)=>N(t)-N(e)).forEach(t=>{var a,n;let o=t.value,l=N(t);if("endTime"in t&&null!=t.endTime)null==i||i.addCue(new VTTCue(l,t.endTime,"chapters"===r?o:JSON.stringify(null!=o?o:null)));else{let t=Array.prototype.findIndex.call(null==i?void 0:i.cues,e=>e.startTime>=l),s=null==(a=null==i?void 0:i.cues)?void 0:a[t],d=s?s.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==i?void 0:i.cues)?void 0:n[t-1];u&&(u.endTime=l),null==i||i.addCue(new VTTCue(l,d,"chapters"===r?o:JSON.stringify(null!=o?o:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),i}var K="cuepoints",Y=Object.freeze({label:K});async function $(e,t,a=Y){return B(e,t,a.label,"metadata")}var W=e=>({time:e.startTime,value:JSON.parse(e.text)});function F(e,t={label:K}){var a,r;let i=U(e,t.label,"metadata");if(!(null!=(a=null==i?void 0:i.activeCues)&&a.length))return;if(1===i.activeCues.length)return W(i.activeCues[0]);let{currentTime:n}=e;return W(Array.prototype.find.call(null!=(r=i.activeCues)?r:[],({startTime:e,endTime:t})=>e<=n&&t>n)||i.activeCues[0])}async function V(e,t=Y){return new Promise(a=>{y(e,"loadstart",async()=>{let r=await $(e,[],t);y(e,"cuechange",()=>{let t=F(e);if(t){let a=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(a)}},{},r),a(r)})})}var H="chapters",G=Object.freeze({label:H}),j=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function Z(e,t,a=G){return B(e,t,a.label,"chapters")}function z(e,t={label:H}){var a,r;let i=U(e,t.label,"chapters");if(!(null!=(a=null==i?void 0:i.activeCues)&&a.length))return;if(1===i.activeCues.length)return j(i.activeCues[0]);let{currentTime:n}=e;return j(Array.prototype.find.call(null!=(r=i.activeCues)?r:[],({startTime:e,endTime:t})=>e<=n&&t>n)||i.activeCues[0])}async function X(e,t=G){return new Promise(a=>{y(e,"loadstart",async()=>{let r=await Z(e,[],t);y(e,"cuechange",()=>{let t=z(e);if(t){let a=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(a)}},{},r),a(r)})})}var q=(e,t,a,r,i=!1,d=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var c,p,h,b;let v,E;if(d){let a=I("Your device appears to be offline",i),r=l.MEDIA_ERR_NETWORK,n=new l(a,r,!1,void 0);return n.errorCategory=t,n.muxCode=2000002,n.data=e,n}let g="status"in e?e.status:e.code,y=Date.now(),T=l.MEDIA_ERR_NETWORK;if(200===g)return;let A=o(t),k=(v=o(t),E=`${v}Token`,null!=(h=a.tokens)&&h[v]?null==(b=a.tokens)?void 0:b[v]:s(E,a)?a[E]:void 0),C=t===n?"v":"drm"===t?"d":void 0,[_]=f(null!=(c=a.playbackId)?c:"");if(!g||!_)return;let R=L(k);if(k&&!R){let a=new l(I("The {tokenNamePrefix}-token provided is invalid or malformed.",i).format({tokenNamePrefix:A}),T,!0,I("Compact JWT string: {token}",i).format({token:k}));return a.errorCategory=t,a.muxCode=2412202,a.data=e,a}if(g>=500){let e=new l("",T,null==r||r);return e.errorCategory=t,e.muxCode=2e6,e}if(403===g)if(R){if((({exp:e},t=Date.now())=>!e||1e3*e<t)(R,y)){let a={timeStyle:"medium",dateStyle:"medium"},r=new l(I("The video’s secured {tokenNamePrefix}-token has expired.",i).format({tokenNamePrefix:A}),T,!0,I("Expired at: {expiredDate}. Current time: {currentDate}.",i).format({expiredDate:new Intl.DateTimeFormat("en",a).format(null!=(p=R.exp)?p:0),currentDate:new Intl.DateTimeFormat("en",a).format(y)}));return r.errorCategory=t,r.muxCode=2403210,r.data=e,r}if((({sub:e},t)=>e!==t)(R,_)){let a=new l(I("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",i).format({tokenNamePrefix:A}),T,!0,I("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",i).format({tokenNamePrefix:A,playbackId:_,tokenPlaybackId:R.sub}));return a.errorCategory=t,a.muxCode=2403232,a.data=e,a}if((({aud:e},t)=>!e)(R,0)){let a=new l(I("The {tokenNamePrefix}-token is formatted with incorrect information.",i).format({tokenNamePrefix:A}),T,!0,I("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",i).format({tokenNamePrefix:A,expectedAud:C}));return a.errorCategory=t,a.muxCode=2403221,a.data=e,a}if((({aud:e},t)=>e!==t)(R,C)){let a=new l(I("The {tokenNamePrefix}-token is formatted with incorrect information.",i).format({tokenNamePrefix:A}),T,!0,I("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",i).format({tokenNamePrefix:A,expectedAud:C,aud:R.aud}));return a.errorCategory=t,a.muxCode=2403222,a.data=e,a}}else{let a=new l(I("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",i).format({tokenNamePrefix:A,category:t}),T,null==r||r,I("Specified playback ID: {playbackId}",i).format({playbackId:_}));return a.errorCategory=t,a.muxCode=2403201,a.data=e,a}if(412===g){let n=new l(I("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",i),T,null==r||r,I("Specified playback ID: {playbackId}",i).format({playbackId:_}));return n.errorCategory=t,n.muxCode=2412e3,n.streamType=a.streamType===m?"live":a.streamType===u?"on-demand":"unknown",n.data=e,n}if(404===g){let a=new l(I("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",i),T,null==r||r,I("Specified playback ID: {playbackId}",i).format({playbackId:_}));return a.errorCategory=t,a.muxCode=2404e3,a.data=e,a}if(400===g){let a=new l(I("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),T,null==r||r,I("Specified playback ID: {playbackId}",i).format({playbackId:_}));return a.errorCategory=t,a.muxCode=24e5,a.data=e,a}let w=new l("",T,null==r||r);return w.errorCategory=t,w.muxCode=2e6,w.data=e,w},J=i.DefaultConfig.capLevelController,Q={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},ee=class e extends J{constructor(e){super(e)}static setMaxAutoResolution(t,a){a?e.maxAutoResolution.set(t,a):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let a=this.hls;return null!=(t=e.maxAutoResolution.get(a))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,a)=>this.isLevelAllowed(t)&&a<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),a=this.getMaxAutoResolution();if(!a)return super.getMaxLevel(e);let r=Q[a.toLowerCase().trim()];if(!r)return super.getMaxLevel(e);let i=t.filter(e=>e.width*e.height<=r),n=i.findIndex(e=>e.width*e.height===r);if(-1!==n){let e=i[n];return t.findIndex(t=>t===e)}if(0===i.length)return 0;let o=i[i.length-1];return t.findIndex(e=>e===o)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let a=super.getMaxLevel(t),r=this.getValidLevels(t);if(!r[a])return a;let i=Math.min(r[a].width,r[a].height),n=e.minMaxResolution;return i>=n?a:J.getMaxLevelByMediaSize(r,16/9*n,n)}};ee.minMaxResolution=720,ee.maxAutoResolution=new WeakMap;var et,ea,er,ei,en,eo,el=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1),es="fairplay",ed=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,eu=async(e,t)=>{if(t===v.MP4)return{streamType:u,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===v.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let a=await t.text(),r=await ((e,t)=>{let a,r=e.split(`
`).find((e,t,a)=>t>0&&a[t-1].startsWith("#EXT-X-STREAM-INF"));if(!r)return Promise.reject(Error("No media playlist URL found in multivariant playlist"));if(_(r)&&!t)return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));try{a=R(r,t)}catch(e){return Promise.reject(e)}return fetch(a).then(e=>200!==e.status?Promise.reject(e):e.text())})(a,t.url);return{...(e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let a={};for(let e of t){let t=Object.fromEntries([...e.matchAll(ed)].map(([,e,t])=>[e,t])),r=t["DATA-ID"];r&&(a[r]={...t})}return{sessionData:a}})(a),...(e=>{var t,a,r;let i=e.split(`
`),n=null==(a=(null!=(t=i.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:a.trim(),o=A(n),l=k(n),s;if(o===m){let e=i.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)s=2*e.split(":")[1].split("=")[1];else{let e=i.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(r=null==e?void 0:e.split(":"))?void 0:r[1];s=(null!=t?t:6)*3}}return{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:s}})(r)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},em=async(e,t,a=T({src:e}))=>{var r,i,n,o;let{streamType:l,targetLiveWindow:s,liveEdgeStartOffset:d,sessionData:u}=await eu(e,a),m=null==u?void 0:u["com.apple.hls.chapters"];(null!=m&&m.URI||null!=m&&m.VALUE.toLocaleLowerCase().startsWith("http"))&&ec(null!=(r=m.URI)?r:m.VALUE,t),(null!=(i=ev.get(t))?i:{}).liveEdgeStartOffset=d,(null!=(n=ev.get(t))?n:{}).targetLiveWindow=s,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(o=ev.get(t))?o:{}).streamType=l,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},ec=async(e,t)=>{var a,r;try{let i=await fetch(e);if(!i.ok)throw Error(`Failed to fetch Mux metadata: ${i.status} ${i.statusText}`);let n=await i.json(),o={};if(!(null!=(a=null==n?void 0:n[0])&&a.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(o[e.key]=e.value);(null!=(r=ev.get(t))?r:{}).metadata=o;let l=new CustomEvent("muxmetadata");t.dispatchEvent(l)}catch(e){console.error(e)}},ep=null!=(ea=null==(et=null==globalThis?void 0:globalThis.navigator)?void 0:et.userAgent)?ea:"",eh=null!=(en=null==(ei=null==(er=null==globalThis?void 0:globalThis.navigator)?void 0:er.userAgentData)?void 0:ei.platform)?en:"",eb=ep.toLowerCase().includes("android")||["x11","android"].some(e=>eh.toLowerCase().includes(e)),ev=new WeakMap,eE="mux.com",eg=null==(eo=i.isSupported)?void 0:eo.call(i),ey=()=>{if("u">typeof window)return a.default.utils.now()},ef=a.default.utils.generateUUID,eT=({playbackId:e,customDomain:t=eE,maxResolution:a,minResolution:r,renditionOrder:i,programStartTime:n,programEndTime:o,assetStartTime:l,assetEndTime:s,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:m={}}={})=>{if(!e)return;let[c,p=""]=f(e),h=new URL(`https://stream.${t}/${c}.m3u8${p}`);return u||h.searchParams.has("token")?(h.searchParams.forEach((e,t)=>{"token"!=t&&h.searchParams.delete(t)}),u&&h.searchParams.set("token",u)):(a&&h.searchParams.set("max_resolution",a),r&&(h.searchParams.set("min_resolution",r),a&&+a.slice(0,-1)<+r.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",r,"maxResolution",a)),i&&h.searchParams.set("rendition_order",i),n&&h.searchParams.set("program_start_time",`${n}`),o&&h.searchParams.set("program_end_time",`${o}`),l&&h.searchParams.set("asset_start_time",`${l}`),s&&h.searchParams.set("asset_end_time",`${s}`),Object.entries(m).forEach(([e,t])=>{null!=t&&h.searchParams.set(e,t)})),h.toString()},eA=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},ek=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},eC=e=>{var t;return null==(t=ev.get(e))?void 0:t.error},e_=e=>{var t,a;return null!=(a=null==(t=ev.get(e))?void 0:t.streamType)?a:c},eR=e=>{var t,a;return null!=(a=null==(t=ev.get(e))?void 0:t.seekable)?a:e.seekable},ew=.034,eS=(e,t,a=ew)=>e>t||((e,t,a=ew)=>Math.abs(e-t)<=a)(e,t,a),eL=(e,t)=>{var a,r,i;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(r=null==(a=t.levels)?void 0:a[t.currentLevel])?void 0:r.details:null==(i=t.levels.find(e=>!!e.details))?void 0:i.details;if(!n||n.live)return;let{fragments:o}=n;if(!(null!=o&&o.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let l=o[o.length-1];if(e.currentTime<=l.start)return!1;let s=l.start+l.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return s>d&&s<u},eI=(e,t)=>e.ended||e.loop?e.ended:!!(t&&eL(e,t))||((e,t=ew)=>e.paused&&eS(e.currentTime,e.duration,t))(e),eD=(e,t,a)=>{var r,n,o;eM(t,a,e);let{metadata:l={}}=e,{view_session_id:s=ef()}=l,d=null!=(r=null==e?void 0:e.metadata)&&r.video_id?e.metadata.video_id:e$(e)&&null!=(o=null!=(n=eA(e.playbackId))?n:ek(e.src))?o:e.src;l.view_session_id=s,l.video_id=d,e.metadata=l,e.drmTypeCb=e=>{var a;null==(a=t.mux)||a.emit("hb",{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{var a;let r=!t.paused,i=t.currentTime;e.useWebkitFairplay=!0;let n=e.muxDataKeepSession;e.muxDataKeepSession=!0;let o=null==(a=ev.get(t))?void 0:a.coreReference;eD(e,t,o),e.muxDataKeepSession=n,e.useWebkitFairplay=!1,r&&await t.play().then(()=>{t.currentTime=i}).catch(()=>{}),t.currentTime=i},ev.set(t,{retryCount:0});let u=ex(e,t),p=(({preload:e,src:t},a,r)=>{let i=e=>{null!=e&&["","none","metadata","auto"].includes(e)?a.setAttribute("preload",e):a.removeAttribute("preload")};if(!r)return i(e),i;let n=!1,o=!1,l=r.config.maxBufferLength,s=r.config.maxBufferSize,d=e=>{i(e);let t=null!=e?e:a.preload;o||"none"===t||("metadata"===t?(r.config.maxBufferLength=1,r.config.maxBufferSize=1):(r.config.maxBufferLength=l,r.config.maxBufferSize=s),u())},u=()=>{!n&&t&&(n=!0,r.loadSource(t))};return y(a,"play",()=>{o=!0,r.config.maxBufferLength=l,r.config.maxBufferSize=s,u()},{once:!0}),d(e),d})(e,t,u);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?u&&t.mux.addHLSJS({hlsjs:u,Hls:u?i:void 0}):eF(e,t,u),eV(e,t,u),V(t),X(t);let h=((e,t,a)=>{let{autoplay:r}=e,n=!1,o=!1,l=O(r)?r:!!r,s=()=>{n||y(t,"playing",()=>{n=!0},{once:!0})};if(s(),y(t,"loadstart",()=>{n=!1,s(),x(t,l)},{once:!0}),y(t,"loadstart",()=>{a||(o=e.streamType&&e.streamType!==c?e.streamType===m:!Number.isFinite(t.duration)),x(t,l)},{once:!0}),a&&a.once(i.Events.LEVEL_LOADED,(t,a)=>{var r;o=e.streamType&&e.streamType!==c?e.streamType===m:null!=(r=a.details.live)&&r}),!l){let r=()=>{!o||Number.isFinite(e.startTime)||(null!=a&&a.liveSyncPosition?t.currentTime=a.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};a&&y(t,"play",()=>{"metadata"===t.preload?a.once(i.Events.LEVEL_UPDATED,r):r()},{once:!0})}return e=>{n||x(t,l=O(e)?e:!!e)}})(e,t,u);((e,t,a)=>{let{minPreloadSegments:r}=e;if(null==r||r<=0||!a)return;let n=0,o=!1,l=t.playbackRate||1,s=()=>{0!==t.playbackRate&&(l=t.playbackRate,t.playbackRate=0)};t.playbackRate=0,y(t,"ratechange",s);let d=(e,{frag:a})=>{o||"main"!==a.type||++n>=r&&(o=!0,t.removeEventListener("ratechange",s),t.playbackRate=l)};a.on(i.Events.FRAG_BUFFERED,d),t.addEventListener("teardown",()=>{o||(o=!0,a.off(i.Events.FRAG_BUFFERED,d),t.playbackRate=l)},{once:!0})})(e,t,u),((e,t,a)=>{let{initialEstimateSegments:r}=e;if(null==r||r<=0||!a)return;let n=0;a.on(i.Events.FRAG_BUFFERED,(e,{frag:t})=>{"main"===t.type&&++n<r&&a.abrController.resetEstimator(a.config.abrEwmaDefaultEstimate)})})(e,0,u);let b={engine:u,setAutoplay:h,setPreload:p},v=ev.get(t);return v&&(v.coreReference=b),b},eM=(e,t,a)=>{let r=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=a&&a.muxDataKeepSession?r&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),r&&(r.detachMedia(),r.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",eG),e.removeEventListener("error",eZ),e.removeEventListener("durationchange",eH),ev.delete(e),e.dispatchEvent(new Event("teardown")))};function eO(e,t){var a;let r=T(e);if(r!==v.M3U8)return!0;let i=!r||null==(a=t.canPlayType(r))||a,{preferPlayback:n}=e,o=eg&&("mse"===n||eb||!(/^((?!chrome|android).)*safari/i.test(ep)&&t.canPlayType("application/vnd.apple.mpegurl")));return i&&(n===p||!o)}var ex=(e,t)=>{let{debug:a,streamType:r,startTime:n=-1,metadata:o,preferCmcd:l,_hlsConfig:s={},maxAutoResolution:d,initialBandwidthEstimateKbps:u}=e,m=T(e)===v.M3U8,c=eO(e,t);if(m&&!c&&eg){let m={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...null!=u?{abrEwmaDefaultEstimate:1e3*u}:{}},c=eN(r),p=eP(e),b=[h.QUERY,h.HEADER].includes(l)?{useHeaders:l===h.HEADER,sessionId:null==o?void 0:o.view_session_id,contentId:null==o?void 0:o.video_id}:void 0,v=eW(e,s),E=new i({debug:a,startPosition:n,cmcd:b,xhrSetup:(e,t)=>{var a,r;if(l&&l!==h.QUERY)return;let i=R(t);if(!i.searchParams.has("CMCD"))return;let n=(null!=(r=null==(a=i.searchParams.get("CMCD"))?void 0:a.split(","))?r:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");i.searchParams.set("CMCD",n),e.open("GET",i)},...m,...v,...c,...p,...s});return v.capLevelController===ee&&void 0!==d&&ee.setMaxAutoResolution(E,d),E.on(i.Events.MANIFEST_PARSED,async function(e,a){var r,i;let n=null==(r=a.sessionData)?void 0:r["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&ec(null!=(i=null==n?void 0:n.URI)?i:null==n?void 0:n.VALUE,t)}),E}},eN=e=>e===m?{backBufferLength:8}:{},eP=e=>{let{tokens:{drm:t}={},playbackId:a,drmTypeCb:r}=e,i=eA(a);return t&&i?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:eK(e,"fairplay"),serverCertificateUrl:eY(e,"fairplay")},"com.widevine.alpha":{licenseUrl:eK(e,"widevine")},"com.microsoft.playready":{licenseUrl:eK(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let a=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:a}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let a=e.includes("fps")?es:e.includes("playready")?"playready":e.includes("widevine")?"widevine":void 0;return null==r||r(a),t}))}:{}},eU=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},eB=async(e,t)=>{let a=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==a.status?Promise.reject(a):new Uint8Array(await a.arrayBuffer())},eK=({playbackId:e,tokens:{drm:t}={},customDomain:a=eE},r)=>{let i=eA(e);return`https://license.${a.toLocaleLowerCase().endsWith(eE)?a:eE}/license/${r}/${i}?token=${t}`},eY=({playbackId:e,tokens:{drm:t}={},customDomain:a=eE},r)=>{let i=eA(e);return`https://license.${a.toLocaleLowerCase().endsWith(eE)?a:eE}/appcert/${r}/${i}?token=${t}`},e$=({playbackId:e,src:t,customDomain:a})=>{if(e)return!0;if("string"!=typeof t)return!1;let r=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return r.includes(eE)||!!a&&r.includes(a.toLocaleLowerCase())},eW=(e,t)=>{let a={};return a.capLevelToPlayerSize=e.capRenditionToPlayerSize,null==a.capLevelToPlayerSize?(a.capLevelController=ee,a.capLevelToPlayerSize=!0):a.capLevelController=r.CapLevelController,a},eF=(e,t,r)=>{var n;let{envKey:o,disableTracking:l,muxDataSDK:s=a.default,muxDataSDKOptions:d={}}=e,u=e$(e);if(!l&&(o||u)){let{playerInitTime:a,playerSoftwareName:l,playerSoftwareVersion:u,beaconCollectionDomain:m,debug:c,disableCookies:p}=e,h={...e.metadata,video_title:(null==(n=null==e?void 0:e.metadata)?void 0:n.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:m,hlsjs:r,Hls:r?i:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:p,...d,data:{...o?{env_key:o}:{},player_software_name:l,player_software:l,player_software_version:u,player_init_time:a,...h}})}},eV=(e,t,a)=>{var r,o,s;let d=eO(e,t),{src:u,customDomain:c=eE}=e,p=()=>{t.ended||e.disablePseudoEnded||!eI(t,a)||(eL(t,a)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},h,b,v=()=>{let e=eR(t),a,r;e.length>0&&(a=e.start(0),r=e.end(0)),(b!==r||h!==a)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),h=a,b=r};if(y(t,"durationchange",v),t&&d){let a=T(e);if("string"==typeof u){if(u.endsWith(".mp4")&&u.includes(c)){let e=ek(u);ec(new URL(`https://stream.${c}/${e}/metadata.json`).toString(),t)}let i=()=>{if(e_(t)!==m||Number.isFinite(t.duration))return;let e=setInterval(v,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),y(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},s=async()=>em(u,t,a).then(i).catch(a=>{if(a instanceof Response){let r=q(a,n,e);if(r)return void ej(t,r)}});if("none"===t.preload){let e=()=>{s(),t.removeEventListener("loadedmetadata",a)},a=()=>{s(),t.removeEventListener("play",e)};y(t,"play",e,{once:!0}),y(t,"loadedmetadata",a,{once:!0})}else s();null!=(r=e.tokens)&&r.drm?((e,t)=>{let a={mediaEl:t,getAppCertificate:()=>eU(eY(e,"fairplay")).catch(t=>{if(t instanceof Response){let a=q(t,"drm",e);return console.error("mediaError",null==a?void 0:a.message,null==a?void 0:a.context),a?Promise.reject(a):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)}),getLicenseKey:t=>eB(t,eK(e,"fairplay")).catch(t=>{if(t instanceof Response){let a=q(t,"drm",e);return console.error("mediaError",null==a?void 0:a.message,null==a?void 0:a.context),a?Promise.reject(a):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)}),saveAndDispatchError:ej,drmTypeCb:()=>{var t;null==(t=e.drmTypeCb)||t.call(e,es)}};if(e.useWebkitFairplay)(({mediaEl:e,getAppCertificate:t,getLicenseKey:a,saveAndDispatchError:r,drmTypeCb:i})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let t=new l(I("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),l.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000005,r(e,t),()=>{}}let n=t(),o=null,s=t=>{(async()=>{try{var a,i;let r,o,l,s,m,c,p,h;e.webkitKeys||d();let b=await n;if(null===t.initData||null==b)return;let v=(a=t.initData,i=b,r=function(e){let t=new ArrayBuffer(2*e.length),a=new DataView(t);for(let t=0;t<e.length;t++)a.setUint16(2*t,e.charCodeAt(t),!0);return t}(el(a)),o=new Uint8Array(a),l=new Uint8Array(r),s=new Uint8Array(i),m=new Uint8Array(o.byteLength+4+s.byteLength+4+l.byteLength),c=0,p=e=>{m.set(e,c),c+=e.byteLength},h=e=>{let t=new DataView(m.buffer),a=e.byteLength;t.setUint32(c,a,!0),c+=4,p(e)},p(o),h(l),h(s),m);u(v)}catch(t){console.error("Could not start encrypted playback due to exception",t),r(e,t)}})()},d=()=>{try{let t=new WebKitMediaKeys("com.apple.fps.1_0");e.webkitSetMediaKeys(t),i()}catch{let e=new l("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",l.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory="drm",e.muxCode=5000001,e}},u=t=>{let i=e.webkitKeys.createSession("application/vnd.apple.mpegurl",t),n=async t=>{try{let e=t.message,r=await a(e);i.update(r)}catch(t){console.error("Error on FairPlay session message",t),r(e,t)}},s=t=>{let a=t.target.error;if(!a)return;console.error(`Internal Webkit Key Session Error - sysCode: ${a.systemCode} code: ${a.code}`);let i=new l(I("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),l.MEDIA_ERR_ENCRYPTED,!0);i.errorCategory="drm",i.muxCode=5000005,r(e,i)},d=()=>{i.removeEventListener("webkitkeymessage",n),i.removeEventListener("webkitkeyerror",s),e.removeEventListener("teardown",d),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",d),o=null;try{i.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",d,{once:!0}),i.addEventListener("webkitkeymessage",n),i.addEventListener("webkitkeyerror",s),e.addEventListener("teardown",d),o=d},m=()=>{e.removeEventListener("webkitneedkey",s),e.removeEventListener("teardown",m),null==o||o();try{e.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",s),e.addEventListener("teardown",m,{once:!0})})(a);else{let t=(({mediaEl:e,getAppCertificate:t,getLicenseKey:a,saveAndDispatchError:r,drmTypeCb:i,fallbackToWebkitFairplay:n})=>{let o=null,s=async t=>{try{let a=t.initDataType;if("skd"!==a)return void console.error(`Received unexpected initialization data type "${a}"`);e.mediaKeys||await d(a);let r=t.initData;if(null==r)return void console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);await u(a,r)}catch(t){r(e,t);return}},d=async a=>{let n=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[a],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(e=>(i(),e)).catch(()=>{let t=new l(I("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),l.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000001,r(e,t)});if(!n)return;let o=await n.createMediaKeys();try{let e=await t();await o.setServerCertificate(e).catch(()=>{let e=I("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new l(e,l.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000004,Promise.reject(t)})}catch(t){r(e,t);return}await e.setMediaKeys(o)},u=async(t,i)=>{let s=e.mediaKeys.createSession(),d=async t=>{let i=t.message,n=await a(i);try{await s.update(n)}catch{let t=new l(I("Failed to update DRM license. This may be an issue with the player or your protected content."),l.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000003,r(e,t)}},u=()=>{s.keyStatuses.forEach(t=>{let a;"internal-error"===t?((a=new l(I("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),l.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",a.muxCode=5000005):("output-restricted"===t||"output-downscaled"===t)&&((a=new l(I("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),l.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",a.muxCode=5000006),a&&r(e,a)})};s.addEventListener("keystatuseschange",u),s.addEventListener("message",d);let m=async()=>{s.removeEventListener("keystatuseschange",u),s.removeEventListener("message",d),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",m),e.removeEventListener("teardown",m),await s.close().catch(e=>{console.warn("There was an error when closing EME session",e)}),o=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",m,{once:!0}),e.addEventListener("teardown",m,{once:!0}),o=m,await s.generateRequest(t,i).catch(async t=>{if("NotSupportedError"===t.name&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==n||n();else{let e=new l(I("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),l.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory="drm",e.muxCode=5000002,console.error("Failed to generate license request",t),Promise.reject(e)}})},m=async()=>{e.removeEventListener("encrypted",s),e.removeEventListener("teardown",m),o&&await o(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",s),e.addEventListener("teardown",m,{once:!0}),m})({fallbackToWebkitFairplay:async()=>{var a;await t(),null==(a=e.fallbackToWebkitFairplay)||a.call(e)},...a})}})(e,t):y(t,"encrypted",()=>{let e=new l(I("Attempting to play DRM-protected content without providing a DRM token."),l.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory="drm",e.muxCode=5000002,ej(t,e)},{once:!0}),t.setAttribute("src",u),e.startTime&&((null!=(o=ev.get(t))?o:{}).startTime=e.startTime,t.addEventListener("durationchange",eH,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",eG),t.addEventListener("error",eZ),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),y(t,"pause",p),y(t,"seeked",p),y(t,"play",()=>{t.ended||eS(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else if(a&&u){let r,o;a.once(i.Events.LEVEL_LOADED,(e,r)=>{((e,t,a)=>{var r,i,n,o,l,s,d,u,c;let p,h,b,v,E,{streamType:g,targetLiveWindow:y,liveEdgeStartOffset:f,lowLatency:T}=(h=A(p=e.type),b=k(p),E=!!(null!=(c=e.partList)&&c.length),h===m&&(v=E?2*e.partTarget:3*e.targetduration),{streamType:h,targetLiveWindow:b,liveEdgeStartOffset:v,lowLatency:E});if(g===m){T?(a.config.backBufferLength=null!=(r=a.userConfig.backBufferLength)?r:4,a.config.maxFragLookUpTolerance=null!=(i=a.userConfig.maxFragLookUpTolerance)?i:.001,a.config.abrBandWidthUpFactor=null!=(n=a.userConfig.abrBandWidthUpFactor)?n:a.config.abrBandWidthFactor):a.config.backBufferLength=null!=(o=a.userConfig.backBufferLength)?o:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var r;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(r=a.liveSyncPosition)?r:t.seekable.end(e)}});(null!=(l=ev.get(t))?l:{}).seekable=e}(null!=(s=ev.get(t))?s:{}).liveEdgeStartOffset=f,(null!=(d=ev.get(t))?d:{}).targetLiveWindow=y,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=ev.get(t))?u:{}).streamType=g,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(r.details,t,a),v(),e_(t)!==m||Number.isFinite(t.duration)||(a.on(i.Events.LEVEL_UPDATED,v),y(t,"durationchange",()=>{Number.isFinite(t.duration)&&a.off(i.Events.LEVELS_UPDATED,v)}))});let d=null!=(s=e.maxReconnectRetries)?s:0,c=d>0?(({hls:e,mediaEl:t,src:a,muxMediaState:r,saveAndDispatchError:o,maxRetries:s})=>{var d;let u,m=0,c=!1,p=!1,h=!1,b=()=>{null!=u&&(clearTimeout(u),u=void 0)},v=e=>(null==e?void 0:e.muxCode)===2000003,E=()=>{!h&&a?e.loadSource(a):e.startLoad(t.currentTime)},g=()=>{let e=r.get(t);!(null!=e&&e.networkError)||p||!t.paused&&t.readyState<HTMLMediaElement.HAVE_FUTURE_DATA&&((()=>{let e=r.get(t);if(v(null==e?void 0:e.error))return;let a=new l(I("Attempting to reconnect..."),l.MEDIA_ERR_NETWORK,!1);a.errorCategory=n,a.muxCode=2000003,e&&(e.error=a),t.dispatchEvent(new CustomEvent("error",{detail:a}))})(),(()=>{if(null==u&&!c){if(m>=s){let e;return c=!1,p=!0,b(),(e=new l(I("Network error, try reloading."),l.MEDIA_ERR_NETWORK,!0)).errorCategory=n,e.reload=!0,o(t,e)}c=!0,u=setTimeout(()=>{u=void 0,m+=1,E()},Math.min(1e3*2**m,3e4))}})())},f=()=>{let e=r.get(t);null!=e&&e.networkError&&(m=0,p=!1,b(),c=!0,E())};return null==(d=globalThis.addEventListener)||d.call(globalThis,"online",f),e.on(i.Events.FRAG_BUFFERED,()=>{let e=r.get(t);e&&(e.networkError||v(e.error))&&(e.networkError=!1,c=!1,m=0,p=!1,b(),e.error&&(e.error=null,t.dispatchEvent(new Event("emptied"))))}),y(t,"playing",()=>{let e=r.get(t);null!=e&&e.networkError&&(c=!1,m=0,p=!1,b(),e.error&&(e.error=null))}),y(t,"waiting",g),t.addEventListener("teardown",()=>{var e;null==(e=globalThis.removeEventListener)||e.call(globalThis,"online",f),b()},{once:!0}),{handleHlsError:(e,a)=>{var n,o;let l;if(e.type!==i.ErrorTypes.NETWORK_ERROR)return!1;let s=null!=(o=null==(n=e.response)?void 0:n.code)?o:0;return(2000002===a.muxCode||0===s||s>=500)&&!!e.fatal&&((l=r.get(t))&&(l.networkError=!0),c=!1,g(),!0)},onManifestLoaded:()=>{h=!0,c=!1,b()}}})({hls:a,mediaEl:t,src:u,muxMediaState:ev,saveAndDispatchError:ej,maxRetries:d}):void 0;a.on(i.Events.ERROR,(r,i)=>{var n,o;let s=e7(i,e);if(2412e3===s.muxCode){let e=null!=(n=ev.get(t))?n:{},r=null!=(o=e.retryCount)?o:0;if(r<6){let n=0===r?5e3:6e4,o=new l(`Retrying in ${n/1e3} seconds...`,s.code,s.fatal);Object.assign(o,s),ej(t,o);let d=setTimeout(()=>{e.retryCount=r+1,"manifestLoadError"===i.details&&i.url&&a.loadSource(i.url)},n);t.addEventListener("teardown",()=>clearTimeout(d),{once:!0});return}{e.retryCount=0;let a=new l("Network error, try reloading.",s.code,s.fatal);Object.assign(a,s),a.reload=!0,ej(t,a);return}}null!=c&&c.handleHlsError(i,s)||ej(t,s)}),a.on(i.Events.MANIFEST_LOADED,()=>{null==c||c.onManifestLoaded();let e=ev.get(t);null!=e&&e.networkError||e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",eZ),y(t,"waiting",p),function(e,t){var a;if(!("videoTracks"in e))return;let r=new WeakMap;t.on(i.Events.MANIFEST_PARSED,function(t,a){s();let i=e.addVideoTrack("main");for(let[e,t]of(i.selected=!0,a.levels.entries())){let a=i.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);r.set(t,`${e}`),a.id=`${e}`}}),t.on(i.Events.AUDIO_TRACKS_UPDATED,function(t,a){for(let t of(l(),a.audioTracks)){let a=t.default?"main":"alternative",r=e.addAudioTrack(a,t.name,t.lang);r.id=`${t.id}`,t.default&&(r.enabled=!0)}});let n=()=>{var a;let r=+(null==(a=[...e.audioTracks].find(e=>e.enabled))?void 0:a.id),i=t.audioTracks.map(e=>e.id);r!=t.audioTrack&&i.includes(r)&&(t.audioTrack=r)};e.audioTracks.addEventListener("change",n),t.on(i.Events.LEVELS_UPDATED,function(t,a){var i;let n=e.videoTracks[null!=(i=e.videoTracks.selectedIndex)?i:0];if(!n)return;let o=a.levels.map(e=>r.get(e));for(let t of e.videoRenditions)t.id&&!o.includes(t.id)&&n.removeRendition(t)});let o=e=>{let a=e.target.selectedIndex;a!=t.nextLevel&&(t.nextLevel=a)};null==(a=e.videoRenditions)||a.addEventListener("change",o);let l=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},s=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),l()};t.once(i.Events.DESTROYING,()=>{var t,a;s(),null==(t=e.audioTracks)||t.removeEventListener("change",n),null==(a=e.videoRenditions)||a.removeEventListener("change",o)})}(e,a),a.on(i.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(e,{tracks:r})=>{r.forEach(e=>{var r,i;let n=null!=(r=e.subtitleTrack)?r:e.closedCaptions,o=a.subtitleTracks.findIndex(({lang:t,name:a,type:r})=>t==(null==n?void 0:n.lang)&&a===e.label&&r.toLowerCase()===e.kind),l=(null!=(i=e._id)?i:e.default)?"default":`${e.kind}${o}`;P(t,e.kind,e.label,null==n?void 0:n.lang,l,e.default)})}),r=()=>{if(!a.subtitleTracks.length)return;let e=Array.from(t.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!e)return;let r=a.subtitleTracks[a.subtitleTrack],i=r?r.default?"default":`${a.subtitleTracks[a.subtitleTrack].type.toLowerCase()}${a.subtitleTrack}`:void 0;if(a.subtitleTrack<0||(null==e?void 0:e.id)!==i){let t=a.subtitleTracks.findIndex(({lang:t,name:a,type:r,default:i})=>"default"===e.id&&i||t==e.language&&a===e.label&&r.toLowerCase()===e.kind);a.subtitleTrack=t}(null==e?void 0:e.id)===i&&e.cues&&Array.from(e.cues).forEach(t=>{e.addCue(t)})},t.textTracks.addEventListener("change",r),a.on(i.Events.CUES_PARSED,(e,{track:a,cues:r})=>{let i=t.textTracks.getTrackById(a);if(!i)return;let n="disabled"===i.mode;n&&(i.mode="hidden"),r.forEach(e=>{var t;null!=(t=i.cues)&&t.getCueById(e.id)||i.addCue(e)}),n&&(i.mode="disabled")}),a.once(i.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",r),t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})}),o=()=>{Array.from(t.textTracks).forEach(e=>{var a,r;if(!["subtitles","caption"].includes(e.kind)&&("thumbnails"===e.label||"chapters"===e.kind)){if(!(null!=(a=e.cues)&&a.length)){let a="track";e.kind&&(a+=`[kind="${e.kind}"]`),e.label&&(a+=`[label="${e.label}"]`);let i=t.querySelector(a),n=null!=(r=null==i?void 0:i.getAttribute("src"))?r:"";null==i||i.removeAttribute("src"),setTimeout(()=>{null==i||i.setAttribute("src",n)},0)}"hidden"!==e.mode&&(e.mode="hidden")}})},a.once(i.Events.MANIFEST_LOADED,o),a.once(i.Events.MEDIA_ATTACHED,o),a.attachMedia(t)}else console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function eH(e){var t;let a=e.target,r=null==(t=ev.get(a))?void 0:t.startTime;if(r&&function(e,t,a){t&&a>t&&(a=t);for(let t=0;t<e.length;t++)if(e.start(t)<=a&&e.end(t)>=a)return!0;return!1}(a.seekable,a.duration,r)){let e="auto"===a.preload;e&&(a.preload="none"),a.currentTime=r,e&&(a.preload="auto")}}async function eG(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:a,code:r}=t.error,i=new l(a,r);if(t.src&&r===l.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var e;let a=null!=(e=eC(t))?e:t.error;(null==a?void 0:a.code)===l.MEDIA_ERR_SRC_NOT_SUPPORTED&&ej(t,i)},500);if(t.src&&(r!==l.MEDIA_ERR_DECODE||void 0!==r))try{let{status:e}=await fetch(t.src);i.data={response:{code:e}}}catch{}ej(t,i)}function ej(e,t){var a;t.fatal&&((null!=(a=ev.get(e))?a:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function eZ(e){var t,a;if(!(e instanceof CustomEvent)||!(e.detail instanceof l))return;let r=e.target,i=e.detail;i&&i.fatal&&((null!=(t=ev.get(r))?t:{}).error=i,null==(a=r.mux)||a.emit("error",{player_error_code:i.code,player_error_message:i.message,player_error_context:i.context}))}var ez,eX,eq,eJ,eQ,e0,e1,e3,e2,e9,e4,e8,e5,e6,e7=(e,t)=>{var a,r,o;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let s={[i.ErrorTypes.NETWORK_ERROR]:l.MEDIA_ERR_NETWORK,[i.ErrorTypes.MEDIA_ERROR]:l.MEDIA_ERR_DECODE,[i.ErrorTypes.KEY_SYSTEM_ERROR]:l.MEDIA_ERR_ENCRYPTED},d,u=[i.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,i.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?l.MEDIA_ERR_NETWORK:s[e.type];if(u===l.MEDIA_ERR_NETWORK&&e.response){let o=null!=(a=e.type===i.ErrorTypes.KEY_SYSTEM_ERROR?"drm":e.type===i.ErrorTypes.NETWORK_ERROR?n:void 0)?a:n;d=null!=(r=q(e.response,o,t,e.fatal))?r:new l("",u,e.fatal)}else u===l.MEDIA_ERR_ENCRYPTED?e.details===i.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((d=new l(I("Attempting to play DRM-protected content without providing a DRM token."),l.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",d.muxCode=5000002):e.details===i.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((d=new l(I("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),l.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",d.muxCode=5000001):e.details===i.ErrorDetails.KEY_SYSTEM_NO_SESSION?((d=new l(I("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),l.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",d.muxCode=5000002):e.details===i.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((d=new l(I("Failed to update DRM license. This may be an issue with the player or your protected content."),l.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",d.muxCode=5000003):e.details===i.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((d=new l(I("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),l.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",d.muxCode=5000004):e.details===i.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((d=new l(I("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),l.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",d.muxCode=5000005):e.details===i.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((d=new l(I("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),l.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",d.muxCode=5000006):((d=new l(e.error.message,l.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",d.muxCode=5e6):d=new l("",u,e.fatal);return d.context||(d.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(o=e.err)?void 0:o.message}
`:""}`),d.data=e,d},te=e.i(502709),tt=e=>{throw TypeError(e)},ta=(e,t,a)=>t.has(e)||tt("Cannot "+a),tr=(e,t,a)=>(ta(e,t,"read from private field"),a?a.call(e):t.get(e)),ti=(e,t,a)=>t.has(e)?tt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),tn=(e,t,a,r)=>(ta(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),to=(e,t,a)=>(ta(e,t,"access private method"),a),tl=(()=>{try{return"0.31.2"}catch{}return"UNKNOWN"})(),ts=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,td={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",MAX_RECONNECT_RETRIES:"max-reconnect-retries",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},tu=Object.values(td),tm="mux-video",tc=class extends te.CustomVideoElement{constructor(){super(),ti(this,e4),ti(this,ez),ti(this,eX),ti(this,eq,{}),ti(this,eJ,{}),ti(this,eQ),ti(this,e0),ti(this,e1),ti(this,e3),ti(this,e2,""),ti(this,e9,e=>{var t,a,r;let i=(a=this.nativeEl,null==(r=ev.get(a))?void 0:r.metadata),n=null!=(t=this.metadata)?t:{};this.metadata={...i,...n},(null==i?void 0:i["com.mux.video.branding"])==="mux-free-plan"&&(tn(this,e2,"default"),this.updateLogo())}),ti(this,e5),tn(this,eX,ey())}static get NAME(){return tm}static get VERSION(){return tl}static get observedAttributes(){var e;return[...tu,...null!=(e=te.CustomVideoElement.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?ts:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${te.CustomVideoElement.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[td.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(td.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?b.includes(e)?this.setAttribute(td.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${b.join()}`):this.removeAttribute(td.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(td.PLAYER_INIT_TIME)?+this.getAttribute(td.PLAYER_INIT_TIME):tr(this,eX)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(td.PLAYER_INIT_TIME):this.setAttribute(td.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=tr(this,e1))?e:tm}set playerSoftwareName(e){tn(this,e1,e)}get playerSoftwareVersion(){var e;return null!=(e=tr(this,e0))?e:tl}set playerSoftwareVersion(e){tn(this,e0,e)}get _hls(){var e;return null==(e=tr(this,e4,e8))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=eC(this.nativeEl))?e:null}get errorTranslator(){return tr(this,e3)}set errorTranslator(e){tn(this,e3,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(td.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(td.TYPE,e):this.removeAttribute(td.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(td.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(td.DEBUG,""):this.removeAttribute(td.DEBUG))}get disableTracking(){return this.hasAttribute(td.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(td.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(td.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(td.DISABLE_COOKIES,""):this.removeAttribute(td.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(td.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(td.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(td.DISABLE_PSEUDO_ENDED))}get maxReconnectRetries(){let e=this.getAttribute(td.MAX_RECONNECT_RETRIES);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set maxReconnectRetries(e){e!==this.maxReconnectRetries&&(null==e?this.removeAttribute(td.MAX_RECONNECT_RETRIES):this.setAttribute(td.MAX_RECONNECT_RETRIES,`${e}`))}get startTime(){let e=this.getAttribute(td.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(td.START_TIME):this.setAttribute(td.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(td.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(null==e?this.removeAttribute(td.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(td.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(td.INITIAL_ESTIMATE_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(null==e?this.removeAttribute(td.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(td.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(td.MIN_PRELOAD_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set minPreloadSegments(e){e!==this.minPreloadSegments&&(null==e?this.removeAttribute(td.MIN_PRELOAD_SEGMENTS):this.setAttribute(td.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(td.PLAYBACK_ID)?this.getAttribute(td.PLAYBACK_ID):null!=(e=ek(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(td.PLAYBACK_ID,e):this.removeAttribute(td.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(td.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(td.MAX_RESOLUTION,e):this.removeAttribute(td.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(td.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(td.MIN_RESOLUTION,e):this.removeAttribute(td.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(td.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(td.MAX_AUTO_RESOLUTION):this.setAttribute(td.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(td.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(td.RENDITION_ORDER,e):this.removeAttribute(td.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(td.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(td.PROGRAM_START_TIME):this.setAttribute(td.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(td.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(td.PROGRAM_END_TIME):this.setAttribute(td.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(td.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(td.ASSET_START_TIME):this.setAttribute(td.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(td.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(td.ASSET_END_TIME):this.setAttribute(td.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(td.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(td.CUSTOM_DOMAIN,e):this.removeAttribute(td.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return(null==(e=this._hlsConfig)?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:tr(this,e5)}set capRenditionToPlayerSize(e){tn(this,e5,e)}get drmToken(){var e;return null!=(e=this.getAttribute(td.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(td.DRM_TOKEN,e):this.removeAttribute(td.DRM_TOKEN))}get playbackToken(){var e,t,a,r;if(this.hasAttribute(td.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(td.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(td.PLAYBACK_ID)){let[,e]=f(null!=(t=this.playbackId)?t:"");return null!=(a=new URLSearchParams(e).get("token"))?a:void 0}if(this.src)return null!=(r=new URLSearchParams(this.src).get("token"))?r:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(td.PLAYBACK_TOKEN,e):this.removeAttribute(td.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(td.PLAYBACK_TOKEN),t=this.getAttribute(td.DRM_TOKEN);return{...tr(this,eJ),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){tn(this,eJ,null!=e?e:{})}get ended(){return eI(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(td.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(td.ENV_KEY,e):this.removeAttribute(td.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(td.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(td.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(td.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(td.STREAM_TYPE))?e:e_(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(td.STREAM_TYPE,e):this.removeAttribute(td.STREAM_TYPE))}get targetLiveWindow(){var e,t,a;return this.hasAttribute(td.TARGET_LIVE_WINDOW)?+this.getAttribute(td.TARGET_LIVE_WINDOW):(e=this.nativeEl,null!=(a=null==(t=ev.get(e))?void 0:t.targetLiveWindow)?a:NaN)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(td.TARGET_LIVE_WINDOW):this.setAttribute(td.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(td.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,r=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,r-a)}return(e=>{var t;let a=null==(t=ev.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof a)return NaN;let r=eR(e);return r.length?r.end(r.length-1)-a:NaN})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(td.LIVE_EDGE_OFFSET))return+this.getAttribute(td.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(td.LIVE_EDGE_OFFSET):this.setAttribute(td.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return eR(this.nativeEl)}async addCuePoints(e){return this.nativeEl.currentSrc||console.warn("addCuePoints() was called before the media element has loaded. Wait for the loadstart event before calling addCuePoints()."),$(this.nativeEl,e)}get activeCuePoint(){return F(this.nativeEl)}get cuePoints(){return function(e,t={label:K}){let a=U(e,t.label,"metadata");return null!=a&&a.cues?Array.from(a.cues,e=>W(e)):[]}(this.nativeEl)}async addChapters(e){return this.nativeEl.currentSrc||console.warn("addChapters() was called before the media element has loaded. Wait for the loadstart event before calling addChapters()."),Z(this.nativeEl,e)}get activeChapter(){return z(this.nativeEl)}get chapters(){return function(e,t={label:H}){var a;let r=U(e,t.label,"chapters");return null!=(a=null==r?void 0:r.cues)&&a.length?Array.from(r.cues,e=>j(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let a=t.playingDate;if(null!=a)return new Date(a.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(td.PREFER_PLAYBACK);if("mse"===e||e===p)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===p?this.setAttribute(td.PREFER_PLAYBACK,e):this.removeAttribute(td.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![td.METADATA_URL].includes(e)).reduce((e,t)=>{let a=this.getAttribute(t);return null!=a&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),...tr(this,eq)}}set metadata(e){tn(this,eq,null!=e?e:{}),this.mux&&this.mux.emit("hb",tr(this,eq))}get _hlsConfig(){return tr(this,eQ)}set _hlsConfig(e){tn(this,eQ,e)}get logo(){var e;return null!=(e=this.getAttribute(td.LOGO))?e:tr(this,e2)}set logo(e){e?this.setAttribute(td.LOGO,e):this.removeAttribute(td.LOGO)}load(){eD(this,this.nativeEl,tr(this,e4,e8))}unload(){eM(this.nativeEl,tr(this,e4,e8),this)}attributeChangedCallback(e,t,a){var r,i;switch(te.CustomVideoElement.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,a),e){case td.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=a?a:void 0;break;case td.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=a?a:void 0;break;case"src":{let e=!!t,r=!!a;!e&&r?to(this,e4,e6).call(this):e&&!r?this.unload():e&&r&&(this.unload(),to(this,e4,e6).call(this));break}case"autoplay":if(a===t)break;null==(r=tr(this,e4,e8))||r.setAutoplay(this.autoplay);break;case"preload":if(a===t)break;null==(i=tr(this,e4,e8))||i.setPreload(a);break;case td.PLAYBACK_ID:case td.CUSTOM_DOMAIN:case td.MAX_RESOLUTION:case td.MIN_RESOLUTION:case td.RENDITION_ORDER:case td.PROGRAM_START_TIME:case td.PROGRAM_END_TIME:case td.ASSET_START_TIME:case td.ASSET_END_TIME:case td.PLAYBACK_TOKEN:this.src=eT(this);break;case td.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case td.METADATA_URL:a&&fetch(a).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case td.STREAM_TYPE:(null==a||a!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case td.TARGET_LIVE_WINDOW:(null==a||a!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case td.LOGO:(null==a||a!==t)&&this.updateLogo();break;case td.DISABLE_TRACKING:if(null==a||a!==t){let e=this.currentTime,t=this.paused;this.unload(),to(this,e4,e6).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case td.DISABLE_COOKIES:(null==a||a!==t)&&this.disableCookies&&document.cookie.split(";").forEach(e=>{e.trim().startsWith("muxData")&&(document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break;case td.CAP_RENDITION_TO_PLAYER_SIZE:(null==a||a!==t)&&(this.capRenditionToPlayerSize=null!=a||void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(tr(this,e2)||this.logo))}connectedCallback(){var e,t;null==(e=super.connectedCallback)||e.call(this),null==(t=this.nativeEl)||t.addEventListener("muxmetadata",tr(this,e9)),this.nativeEl&&this.src&&!tr(this,e4,e8)&&to(this,e4,e6).call(this)}disconnectedCallback(){var e,t;null==(e=this.nativeEl)||e.removeEventListener("muxmetadata",tr(this,e9)),this.unload(),null==(t=super.disconnectedCallback)||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};ez=new WeakMap,eX=new WeakMap,eq=new WeakMap,eJ=new WeakMap,eQ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e3=new WeakMap,e2=new WeakMap,e9=new WeakMap,e4=new WeakSet,e8=function(){var e,t;return e=this.nativeEl,null==(t=ev.get(e))?void 0:t.coreReference},e5=new WeakMap,e6=async function(){tr(this,ez)||(await tn(this,ez,Promise.resolve()),tn(this,ez,null),this.load())};var tp=e.i(861554);e.i(791205);var th=e.i(7180),tb=e=>{throw TypeError(e)},tv=(e,t,a)=>t.has(e)||tb("Cannot "+a),tE=(e,t,a)=>(tv(e,t,"read from private field"),a?a.call(e):t.get(e)),tg=(e,t,a)=>t.has(e)?tb("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),ty=(e,t,a,r)=>(tv(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),tf=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends tf{});var tT,tA=class extends tf{},tk=class{constructor(e,t={}){tg(this,tT),ty(this,tT,null==t?void 0:t.detail)}get detail(){return tE(this,tT)}initCustomEvent(){}};tT=new WeakMap;var tC={document:{createElement:function(e,t){return new tA}},DocumentFragment,customElements:{get(e){},define(e,t,a){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(tA)},CustomEvent:tk,EventTarget:tf,HTMLElement:tA,HTMLVideoElement:class extends tf{}},t_="u"<typeof window||void 0===globalThis.customElements,tR=t_?tC:globalThis;t_&&tC.document;var tw,tS=class extends(0,tp.CastableMediaMixin)((0,th.MediaTracksMixin)(tc)){constructor(){super(...arguments),tg(this,tw)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=tE(this,tw))?e:this.muxCastCustomData}set castCustomData(e){ty(this,tw,e)}};tw=new WeakMap,tR.customElements.get("mux-video")||(tR.customElements.define("mux-video",tS),tR.MuxVideoElement=tS),e.i(667880);var tL=e.i(117431),tI=e.i(34642),tD=e.i(129159),tM=e.i(992617),tO=e.i(886845),tx=e.i(95277);e.i(368103);var tN=e=>{throw TypeError(e)},tP=(e,t,a)=>t.has(e)||tN("Cannot "+a),tU=(e,t,a)=>(tP(e,t,"read from private field"),a?a.call(e):t.get(e)),tB=(e,t,a)=>t.has(e)?tN("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),tK=(e,t,a,r)=>(tP(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),tY=(e,t,a)=>(tP(e,t,"access private method"),a),t$=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends t${});var tW,tF=class extends t${},tV=class{constructor(e,t={}){tB(this,tW),tK(this,tW,null==t?void 0:t.detail)}get detail(){return tU(this,tW)}initCustomEvent(){}};tW=new WeakMap;var tH={document:{createElement:function(e,t){return new tF}},DocumentFragment,customElements:{get(e){},define(e,t,a){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(tF)},CustomEvent:tV,EventTarget:t$,HTMLElement:tF,HTMLVideoElement:class extends t${}},tG="u"<typeof window||void 0===globalThis.customElements,tj=tG?tH:globalThis,tZ=tG?tH.document:globalThis.document;function tz(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function tX(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function tq(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function tJ(e){let t=(function(e){let t={};for(let a in e)null!=e[a]&&(t[a]=e[a]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var tQ,t0,t1,t3=(e,t)=>!!e&&!!t&&(!!e.contains(t)||t3(e,t.getRootNode().host)),t2="mux.com",t9=(()=>{try{return"3.13.2"}catch{}return"UNKNOWN"})(),t4=e=>{if(e){if([m,u].includes(e))return e;if(null!=e&&e.includes("live"))return m}},t8={crossorigin:"crossOrigin",playsinline:"playsInline"},t5=class{constructor(e,t){tB(this,tQ),tB(this,t0),tB(this,t1,[]),tK(this,tQ,e),tK(this,t0,t)}[Symbol.iterator](){return tU(this,t1).values()}get length(){return tU(this,t1).length}get value(){var e;return null!=(e=tU(this,t1).join(" "))?e:""}set value(e){var t;e!==this.value&&(tK(this,t1,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return tU(this,t1)[e]}values(){return tU(this,t1).values()}keys(){return tU(this,t1).keys()}forEach(e){tU(this,t1).forEach(e)}add(...e){var t,a;e.forEach(e=>{this.contains(e)||tU(this,t1).push(e)}),(""!==this.value||null!=(t=tU(this,tQ))&&t.hasAttribute(`${tU(this,t0)}`))&&null!=(a=tU(this,tQ))&&a.setAttribute(`${tU(this,t0)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{tU(this,t1).splice(tU(this,t1).indexOf(e),1)}),null==(t=tU(this,tQ))||t.setAttribute(`${tU(this,t0)}`,`${this.value}`)}contains(e){return tU(this,t1).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};tQ=new WeakMap,t0=new WeakMap,t1=new WeakMap;var t6=`[mux-player ${t9}]`;function t7(...e){console.warn(t6,...e)}function ae(...e){console.error(t6,...e)}function at(e){var t;let a=null!=(t=e.message)?t:"";e.context&&(a+=` ${e.context}`),e.file&&(a+=` ${I("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),t7(a)}var aa={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},ar={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},ai=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),an=[...Object.values(aa).filter(e=>aa.PLAYSINLINE!==e),...Object.values(ar)];function ao(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var al=class extends tj.HTMLElement{static get observedAttributes(){return an}constructor(){super()}attributeChangedCallback(e,t,a){var r,i;switch(e){case ar.MUTED:this.media&&(this.media.muted=null!=a,this.media.defaultMuted=null!=a);return;case ar.VOLUME:{let e=null!=(r=tq(a))?r:1;this.media&&(this.media.volume=e);return}case ar.PLAYBACKRATE:{let e=null!=(i=tq(a))?i:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:ai}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:ai}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=tq(this.getAttribute(ar.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(ar.PLAYBACKRATE,`${e}`):this.removeAttribute(ar.PLAYBACKRATE)}get crossOrigin(){return ao(this,aa.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(aa.CROSSORIGIN,`${e}`)}get autoplay(){return null!=ao(this,aa.AUTOPLAY)}set autoplay(e){e?this.setAttribute(aa.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(aa.AUTOPLAY)}get loop(){return null!=ao(this,aa.LOOP)}set loop(e){e?this.setAttribute(aa.LOOP,""):this.removeAttribute(aa.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=ao(this,aa.MUTED)}set defaultMuted(e){e?this.setAttribute(aa.MUTED,""):this.removeAttribute(aa.MUTED)}get playsInline(){return null!=ao(this,aa.PLAYSINLINE)}set playsInline(e){ae("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(aa.PRELOAD,e):this.removeAttribute(aa.PRELOAD)}},as=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,ad=new WeakMap,au=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let a=ad.get(this.element);a&&a.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=ad.get(this.element);e&&e.delete(this.type)}}static for(t){ad.has(t.element)||ad.set(t.element,new Map);let a=t.attributeName.slice(2),r=ad.get(t.element);return r&&r.has(a)?r.get(a):new e(t.element,a)}},am=new Map,ac=new WeakMap,ap=new WeakMap,ah=class{constructor(e,t,a){this.strings=e,this.values=t,this.processor=a,this.stringsKey=this.strings.join("\x01")}get template(){if(am.has(this.stringsKey))return am.get(this.stringsKey);{let e=tZ.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,a,r)=>e+a+(r<t?`{{ ${r} }}`:""),""),am.set(this.stringsKey,e),e}}renderInto(e){var t;let a=this.template;if(ac.get(e)!==a){ac.set(e,a);let t=new tx.TemplateInstance(a,this.values,this.processor);ap.set(e,t),e instanceof tx.ChildNodePart?e.replace(...t.children):e.appendChild(t);return}let r=ap.get(e);null==(t=null==r?void 0:r.update)||t.call(r,this.values)}},ab={processCallback(e,t,a){var r;if(a)for(let[e,i]of t)e in a&&function(e,t){(function(e,t){if(e instanceof tx.AttrPart&&t instanceof Element){let a=e.element;return a[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),a[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof tx.AttrPart){let a=e.attributeNamespace;return t!==e.element.hasAttributeNS(a,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof tx.AttrPart&&e.attributeName.startsWith("on")&&(au.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof tx.ChildNodePart&&(e.replace(""),1)||t instanceof ah&&e instanceof tx.ChildNodePart&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof tx.ChildNodePart&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof tx.AttrPart){let a=e.attributeNamespace,r=e.element.getAttributeNS(a,e.attributeName);return String(t)!==r&&(e.value=String(t))}e.value=String(t)}(e,t)}(i,null!=(r=a[e])?r:"")}};function av(e,...t){return new ah(e,t,ab)}var aE=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),ag=e=>e.charAt(0).toUpperCase()+e.slice(1),ay=(e,t)=>{let a=(e=>{if(e.muxCode){if(2403210===e.muxCode)return"403-expired-token.md";if(2412202===e.muxCode)return"403-malformatted-token.md";if([2403222,2403221].includes(e.muxCode))return"403-incorrect-aud-value.md";if(2403232===e.muxCode)return"403-playback-id-mismatch.md";if(2403201===e.muxCode)return"missing-signed-tokens.md";if(2404e3===e.muxCode)return"404-not-found.md";if(2412e3===e.muxCode)return"412-not-playable.md"}if(e.code){if(e.code===l.MEDIA_ERR_NETWORK)return"";if(e.code===l.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===l.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(e);return{message:e.message,context:e.context,file:a}},af=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,aT=tZ.createElement("template");"innerHTML"in aT&&(aT.innerHTML=af);var aA,ak,aC=class extends tO.MediaThemeElement{};aC.template=null==(ak=null==(aA=aT.content)?void 0:aA.children)?void 0:ak[0],tj.customElements.get("media-theme-gerwig")||tj.customElements.define("media-theme-gerwig",aC);var a_={SRC:"src",POSTER:"poster"},aR={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},aw=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],aS=tI.MediaErrorDialog.formatErrorMessage;function aL(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,a)=>{let r=e.getAttribute(a);return null!==r&&(t[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),t},t)}tI.MediaErrorDialog.formatErrorMessage=e=>{var t,a;if(e instanceof l){let r=((e,t=!1)=>({title:((e,t=!1)=>{var a,r;if(e.muxCode){let i=ag(null!=(a=e.errorCategory)?a:"video"),l=o(null!=(r=e.errorCategory)?r:n);if(2000002===e.muxCode)return I("Your device appears to be offline",t);if(2000003===e.muxCode)return I("Reconnecting...",t);if(2403210===e.muxCode)return I("{category} URL has expired",t).format({category:i});if([2403232,2403222,2403221,2412202].includes(e.muxCode))return I("{category} URL is formatted incorrectly",t).format({category:i});if(2403201===e.muxCode)return I("Invalid {categoryName} URL",t).format({categoryName:l});if(2404e3===e.muxCode)return I("{category} does not exist",t).format({category:i});if(2412e3===e.muxCode){let a="live"===e.streamType?"Live stream":"Video";return I("{mediaType} is not currently available",t).format({mediaType:a})}}if(e.code){if(e.code===l.MEDIA_ERR_NETWORK)return I("Network Error",t);if(e.code===l.MEDIA_ERR_DECODE)return I("Media Error",t);if(e.code===l.MEDIA_ERR_SRC_NOT_SUPPORTED)return I("Source Not Supported",t)}return I("Error",t)})(e,t).toString(),message:((e,t=!1)=>{var a,r;if(e.reload)return'Try again later or <a href="#" data-mux-reload style="color: #4a90e2;">click here to retry</a>';if(e.muxCode){let i=ag(null!=(a=e.errorCategory)?a:"video"),l=o(null!=(r=e.errorCategory)?r:n);return 2000002===e.muxCode?I("Check your internet connection and try reloading this video.",t):2000003===e.muxCode?I("Your connection was interrupted. Attempting to resume playback...",t):2403210===e.muxCode?I("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:l}):2403232===e.muxCode?I("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:l}):2412202===e.muxCode?I("{category} URL is formatted incorrectly",t).format({category:i}):[2403222,2403221].includes(e.muxCode)?I("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:l}):[2403201,24e5].includes(e.muxCode)?I("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:l}):2404e3===e.muxCode?"":e.message}return e.code&&(e.code===l.MEDIA_ERR_NETWORK||e.code===l.MEDIA_ERR_DECODE||e.code===l.MEDIA_ERR_SRC_NOT_SUPPORTED),e.message})(e,t).toString()}))(e,!1);return`
      ${null!=r&&r.title?`<h3>${r.title}</h3>`:""}
      ${null!=r&&r.message||null!=r&&r.linkUrl?`<p>
        ${null==r?void 0:r.message}
        ${null!=r&&r.linkUrl?`<a
              href="${r.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=r.linkText)?t:""} ${I("(opens in a new window)")}"
              >${null!=(a=r.linkText)?a:r.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return aS(e)};var aI,aD,aM,aO,ax,aN,aP,aU,aB,aK,aY,a$,aW,aF,aV,aH,aG,aj,aZ,az,aX,aq,aJ,aQ,a0=Object.values(td),a1=Object.values(a_),a3=Object.values(aR),a2="mux-player",a9={isDialogOpen:!1},a4={redundant_streams:!0},a8=class extends al{constructor(){super(),tB(this,aH),tB(this,aI),tB(this,aD,!1),tB(this,aM,{}),tB(this,aO,!0),tB(this,ax,new t5(this,"hotkeys")),tB(this,aN),tB(this,aP,()=>tY(this,aH,az).call(this)),tB(this,aU,()=>tY(this,aH,az).call(this)),tB(this,aB,()=>tY(this,aH,az).call(this)),tB(this,aK,e=>{e.composedPath().find(e=>{var t;return null==(t=null==e?void 0:e.hasAttribute)?void 0:t.call(e,"data-mux-reload")})&&(e.preventDefault(),window.location.reload())}),tB(this,aY,e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&tY(this,aH,aZ).call(this,{isDialogOpen:!1})}),tB(this,a$,e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(t3(this,tZ.activeElement)||e.preventDefault())}),tB(this,aW),tB(this,aF,{...a9}),tB(this,aV,e=>{var t;let a=null==(t=this.media)?void 0:t.error;if(!(a instanceof l)){let{message:e,code:t}=null!=a?a:{};a=new l(e,t)}if(!(null!=a&&a.fatal)){t7(a),a.data&&t7(`${a.name} data:`,a.data);return}let r=ay(a,!1);r.message&&at(r),ae(a),a.data&&ae(`${a.name} data:`,a.data),tY(this,aH,aZ).call(this,{isDialogOpen:!0})}),tK(this,aI,ey()),this.attachShadow({mode:"open"}),tY(this,aH,aj).call(this),this.isConnected&&tY(this,aH,aG).call(this)}static get NAME(){return a2}static get VERSION(){return t9}static get observedAttributes(){var e;return[...null!=(e=al.observedAttributes)?e:[],...a1,...a0,...a3]}setAttribute(e,t){super.setAttribute(e,t),e.startsWith("metadata-")&&this.media&&(this.media.metadata=aL(this))}removeAttribute(e){super.removeAttribute(e),e.startsWith("metadata-")&&this.media&&(this.media.metadata=aL(this))}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){tY(this,aH,aG).call(this);let e=this.media;e&&(e.metadata=aL(this))}disconnectedCallback(){var e,t,a,r,i,n,o,l,s,d;null==(e=tU(this,aN))||e.disconnect(),null==(t=this.media)||t.removeEventListener("streamtypechange",tU(this,aP)),null==(a=this.media)||a.removeEventListener("loadstart",tU(this,aU)),this.removeEventListener("error",tU(this,aV)),this.removeEventListener("click",tU(this,aK)),null==(r=this.mediaTheme)||r.removeEventListener("close",tU(this,aY)),null==(i=this.mediaTheme)||i.removeEventListener("focusin",tU(this,a$)),this.media&&(this.media.errorTranslator=void 0),null==(o=null==(n=this.media)?void 0:n.textTracks)||o.removeEventListener("addtrack",tU(this,aB)),null==(s=null==(l=this.media)?void 0:l.textTracks)||s.removeEventListener("removetrack",tU(this,aB)),null==(d=tU(this,aW))||d.call(this),tK(this,aW,void 0),tK(this,aD,!1)}attributeChangedCallback(e,t,a){var r;switch(tY(this,aH,aG).call(this),super.attributeChangedCallback(e,t,a),e){case aR.HOTKEYS:tU(this,ax).value=a;break;case aR.THUMBNAIL_TIME:null!=a&&this.tokens.thumbnail&&t7(I("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case aR.THUMBNAIL_TOKEN:if(a){let e=L(a);if(e){let{aud:t}=e;"t"!==t&&t7(I("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"t",tokenNamePrefix:"thumbnail"}))}}break;case aR.STORYBOARD_TOKEN:if(a){let e=L(a);if(e){let{aud:t}=e;"s"!==t&&t7(I("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"s",tokenNamePrefix:"storyboard"}))}}break;case aR.DRM_TOKEN:if(a){let e=L(a);if(e){let{aud:t}=e;"d"!==t&&t7(I("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"d",tokenNamePrefix:"drm"}))}}break;case td.PLAYBACK_ID:null!=a&&a.includes("?token")&&ae(I("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:a}));break;case td.STREAM_TYPE:a&&![m,u,c].includes(a)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=a.includes("dvr")?1/0:0:at({file:"invalid-stream-type.md",message:I("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):a===m?null==this.getAttribute(aR.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case aR.FULLSCREEN_ELEMENT:if(null!=a||a!==t){let e=tZ.getElementById(a),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case td.CAP_RENDITION_TO_PLAYER_SIZE:(null==a||a!==t)&&(this.capRenditionToPlayerSize=null!=a||void 0);break;case td.MAX_RECONNECT_RETRIES:(null==a||a!==t)&&(this.maxReconnectRetries=Number(a))}[td.PLAYBACK_ID,a_.SRC,aR.PLAYBACK_TOKEN].includes(e)&&t!==a&&tK(this,aF,{...tU(this,aF),...a9}),tY(this,aH,az).call(this,{[null!=(r=t8[e])?r:tX(e)]:a})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(tM.MediaUIAttributes.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new tj.CustomEvent(tM.MediaUIEvents.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var a;null==(a=this.mediaController)||a.addEventListener(tM.MediaStateChangeEvents.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(tM.MediaUIAttributes.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new tj.CustomEvent(tM.MediaUIEvents.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var a;null==(a=this.mediaController)||a.addEventListener(tM.MediaStateChangeEvents.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(td.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?b.includes(e)?this.setAttribute(td.PREFER_CMCD,e):t7(`Invalid value for preferCmcd. Must be one of ${b.join()}`):this.removeAttribute(td.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(tM.MediaUIAttributes.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(tM.MediaUIAttributes.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(aR.THEME))?e:"gerwig"}set theme(e){this.setAttribute(aR.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let a of e.getAttributeNames()){if(aw.includes(a))continue;let r=e.getAttribute(a);t[tX(a)]=""===r||r}return t}set themeProps(e){var t,a;tY(this,aH,aG).call(this);let r={...this.themeProps,...e};for(let i in r){if(aw.includes(i))continue;let r=null==e?void 0:e[i];"boolean"==typeof r||null==r?null==(t=this.mediaTheme)||t.toggleAttribute(tz(i),!!r):null==(a=this.mediaTheme)||a.setAttribute(tz(i),r)}}get playbackId(){var e;return null!=(e=this.getAttribute(td.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(td.PLAYBACK_ID,e):this.removeAttribute(td.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=a5(this,a_.SRC))?e:void 0:null!=(t=this.getAttribute(a_.SRC))?t:void 0}set src(e){e?this.setAttribute(a_.SRC,e):this.removeAttribute(a_.SRC)}get poster(){var e;let t=this.getAttribute(a_.POSTER);if(null!=t)return t;let{tokens:a}=this;return a.playback&&!a.thumbnail?void t7("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((e,{token:t,customDomain:a=t2,thumbnailTime:r,programTime:i}={})=>{var n;let o=null==t?r:void 0,{aud:l}=null!=(n=L(t))?n:{};if(!(t&&"t"!==l))return`https://image.${a}/${e}/thumbnail.webp${tJ({token:t,time:o,program_time:i})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:a.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(a_.POSTER,e):this.removeAttribute(a_.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(aR.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(aR.STORYBOARD_SRC,e):this.removeAttribute(aR.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[m,c].includes(this.streamType)||e.playback&&!e.storyboard?void 0:((e,{token:t,customDomain:a=t2,programStartTime:r,programEndTime:i}={})=>{var n;let{aud:o}=null!=(n=L(t))?n:{};if(!(t&&"s"!==o))return`https://image.${a}/${e}/storyboard.vtt${tJ({token:t,format:"webp",program_start_time:r,program_end_time:i})}`})(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(aR.AUDIO)}set audio(e){e?this.setAttribute(aR.AUDIO,""):this.removeAttribute(aR.AUDIO)}get hotkeys(){return tU(this,ax)}get nohotkeys(){return this.hasAttribute(aR.NOHOTKEYS)}set nohotkeys(e){e?this.setAttribute(aR.NOHOTKEYS,""):this.removeAttribute(aR.NOHOTKEYS)}get thumbnailTime(){return tq(this.getAttribute(aR.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(aR.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(aR.VIDEO_TITLE))?e:this.getAttribute(aR.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(aR.VIDEO_TITLE,e):this.removeAttribute(aR.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=a5(this,aR.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(aR.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let a=this.getAttribute(aR.PRIMARY_COLOR);if(null!=a||this.mediaTheme&&(a=null==(t=null==(e=tj.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return a}set primaryColor(e){this.setAttribute(aR.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let a=this.getAttribute(aR.SECONDARY_COLOR);if(null!=a||this.mediaTheme&&(a=null==(t=null==(e=tj.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return a}set secondaryColor(e){this.setAttribute(aR.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let a=this.getAttribute(aR.ACCENT_COLOR);if(null!=a||this.mediaTheme&&(a=null==(t=null==(e=tj.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return a}set accentColor(e){this.setAttribute(aR.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(aR.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(aR.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(aR.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(aR.PLAYBACK_RATES))return this.getAttribute(aR.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){e?this.setAttribute(aR.PLAYBACK_RATES,e.join(" ")):this.removeAttribute(aR.PLAYBACK_RATES)}get forwardSeekOffset(){var e;return null!=(e=tq(this.getAttribute(aR.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(aR.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=tq(this.getAttribute(aR.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(aR.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(aR.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(aR.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(aR.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return tq(this.getAttribute(aR.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(aR.DEFAULT_DURATION):this.setAttribute(aR.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(td.PLAYER_INIT_TIME)?tq(this.getAttribute(td.PLAYER_INIT_TIME)):tU(this,aI)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(td.PLAYER_INIT_TIME):this.setAttribute(td.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(td.PLAYER_SOFTWARE_NAME))?e:a2}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(td.PLAYER_SOFTWARE_VERSION))?e:t9}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(td.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(td.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(td.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(td.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(td.MAX_RESOLUTION,e):this.removeAttribute(td.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(td.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(td.MIN_RESOLUTION,e):this.removeAttribute(td.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(td.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(td.MAX_AUTO_RESOLUTION):this.setAttribute(td.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(td.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(td.RENDITION_ORDER,e):this.removeAttribute(td.RENDITION_ORDER))}get programStartTime(){return tq(this.getAttribute(td.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(td.PROGRAM_START_TIME):this.setAttribute(td.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return tq(this.getAttribute(td.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(td.PROGRAM_END_TIME):this.setAttribute(td.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return tq(this.getAttribute(td.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(td.ASSET_START_TIME):this.setAttribute(td.ASSET_START_TIME,`${e}`)}get assetEndTime(){return tq(this.getAttribute(td.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(td.ASSET_END_TIME):this.setAttribute(td.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(aR.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(aR.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,a])=>(e[t]=a,e),{}):a4}set extraSourceParams(e){null==e?this.removeAttribute(aR.EXTRA_SOURCE_PARAMS):this.setAttribute(aR.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(td.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(td.CUSTOM_DOMAIN,e):this.removeAttribute(td.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=a5(this,td.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(td.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(aR.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(aR.NO_VOLUME_PREF,""):this.removeAttribute(aR.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(aR.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(aR.NO_MUTED_PREF,""):this.removeAttribute(aR.NO_MUTED_PREF)}get debug(){return null!=a5(this,td.DEBUG)}set debug(e){e?this.setAttribute(td.DEBUG,""):this.removeAttribute(td.DEBUG)}get disableTracking(){return null!=a5(this,td.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(td.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=a5(this,td.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(td.DISABLE_COOKIES,""):this.removeAttribute(td.DISABLE_COOKIES)}get streamType(){var e,t,a;return null!=(a=null!=(t=this.getAttribute(td.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?a:c}set streamType(e){this.setAttribute(td.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,a;return null!=(a=null!=(t=this.getAttribute(aR.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(aR.DEFAULT_STREAM_TYPE))?a:u}set defaultStreamType(e){e?this.setAttribute(aR.DEFAULT_STREAM_TYPE,e):this.removeAttribute(aR.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(aR.TARGET_LIVE_WINDOW)?+this.getAttribute(aR.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(aR.TARGET_LIVE_WINDOW):this.setAttribute(aR.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return tq(a5(this,td.START_TIME))}set startTime(e){this.setAttribute(td.START_TIME,`${e}`)}get initialBandwidthEstimateKbps(){return tq(a5(this,td.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(e){null==e?this.removeAttribute(td.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(td.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`)}get initialEstimateSegments(){return tq(a5(this,td.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(e){null==e?this.removeAttribute(td.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(td.INITIAL_ESTIMATE_SEGMENTS,`${e}`)}get minPreloadSegments(){return tq(a5(this,td.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(e){null==e?this.removeAttribute(td.MIN_PRELOAD_SEGMENTS):this.setAttribute(td.MIN_PRELOAD_SEGMENTS,`${e}`)}get preferPlayback(){let e=this.getAttribute(td.PREFER_PLAYBACK);if("mse"===e||e===p)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===p?this.setAttribute(td.PREFER_PLAYBACK,e):this.removeAttribute(td.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){(tY(this,aH,aG).call(this),this.media)?this.media.metadata={...aL(this),...e}:ae("underlying media element missing when trying to set metadata. metadata will not be set.")}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){(tY(this,aH,aG).call(this),this.media)?this.media._hlsConfig=e:ae("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.")}async addCuePoints(e){var t;return(tY(this,aH,aG).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void ae("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(tY(this,aH,aG).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void ae("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(aR.PLAYBACK_TOKEN),t=this.getAttribute(aR.DRM_TOKEN),a=this.getAttribute(aR.THUMBNAIL_TOKEN),r=this.getAttribute(aR.STORYBOARD_TOKEN);return{...tU(this,aM),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=a?{thumbnail:a}:{},...null!=r?{storyboard:r}:{}}}set tokens(e){tK(this,aM,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(aR.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(aR.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(aR.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(aR.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(aR.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(aR.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(aR.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(aR.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,a,r){var i;let n=null==(i=this.media)?void 0:i.nativeEl;if(n)return P(n,e,t,a,r)}removeTextTrack(e){var t;let a=null==(t=this.media)?void 0:t.nativeEl;if(a){let t;return void(null==(t=Array.prototype.find.call(a.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(aR.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(aR.CAST_RECEIVER,e):this.removeAttribute(aR.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){this.media?this.media.castCustomData=e:ae("underlying media element missing when trying to set castCustomData. castCustomData will not be set.")}get noTooltips(){return this.hasAttribute(aR.NO_TOOLTIPS)}set noTooltips(e){e?this.setAttribute(aR.NO_TOOLTIPS,""):this.removeAttribute(aR.NO_TOOLTIPS)}get proudlyDisplayMuxBadge(){return this.hasAttribute(aR.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(aR.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(aR.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return null==(e=this.media)?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){this.media?this.media.capRenditionToPlayerSize=e:ae("underlying media element missing when trying to set capRenditionToPlayerSize")}get maxReconnectRetries(){var e;return null==(e=this.media)?void 0:e.maxReconnectRetries}set maxReconnectRetries(e){this.media?this.media.maxReconnectRetries=e:ae("underlying media element missing when trying to set maxReconnectRetries")}};function a5(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}aI=new WeakMap,aD=new WeakMap,aM=new WeakMap,aO=new WeakMap,ax=new WeakMap,aN=new WeakMap,aP=new WeakMap,aU=new WeakMap,aB=new WeakMap,aK=new WeakMap,aY=new WeakMap,a$=new WeakMap,aW=new WeakMap,aF=new WeakMap,aV=new WeakMap,aH=new WeakSet,aG=function(){var e,t,a,r;if(!tU(this,aD)){tK(this,aD,!0),tY(this,aH,az).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof tj.HTMLElement))throw""}catch{ae("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{ae("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof tL.MediaController))throw""}catch{ae("<media-controller> failed to upgrade!")}tY(this,aH,aX).call(this),tY(this,aH,aq).call(this),tY(this,aH,aJ).call(this),tK(this,aO,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(tD.Attributes.USER_INACTIVE))||t),tY(this,aH,aQ).call(this),null==(a=this.media)||a.addEventListener("streamtypechange",tU(this,aP)),null==(r=this.media)||r.addEventListener("loadstart",tU(this,aU)),this.media&&(this.media.metadata=aL(this))}},aj=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},aZ=function(e){Object.assign(tU(this,aF),e),tY(this,aH,az).call(this)},az=function(e={}){var t,a,r,i,n,o,l,s,d,u,c,p,h,b,v,E,g,y,f,T,A,k,C,_,R,w,S,L,I,D,M,O,x,N,P,U,B,K,Y,$,W,F,V,H,G,j,Z,z,X,q,J;let Q,ee,et,ea;t={...tU(this,aF),...e},Q={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(a=this.media)?void 0:a.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(aR.STORYBOARD_SRC),fullscreenElement:this.getAttribute(aR.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,a;let r=e.theme;if(r){let i=null==(a=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:a.call(t,r);if(i&&i instanceof HTMLTemplateElement)return i;r.startsWith("media-theme-")||(r=`media-theme-${r}`);let n=tj.customElements.get(r);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(aR.NOHOTKEYS),hotKeys:this.getAttribute(aR.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,initialBandwidthEstimateKbps:this.initialBandwidthEstimateKbps,initialEstimateSegments:this.initialEstimateSegments,minPreloadSegments:this.minPreloadSegments,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(td.TARGET_LIVE_WINDOW),streamType:t4(this.getAttribute(td.STREAM_TYPE)),primaryColor:this.getAttribute(aR.PRIMARY_COLOR),secondaryColor:this.getAttribute(aR.SECONDARY_COLOR),accentColor:this.getAttribute(aR.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(ee=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(ee).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(aR.PLAYBACK_RATES),customDomain:null!=(r=this.getAttribute(td.CUSTOM_DOMAIN))?r:void 0,title:this.getAttribute(aR.TITLE),videoTitle:null!=(i=this.getAttribute(aR.VIDEO_TITLE))?i:this.getAttribute(aR.TITLE),novolumepref:this.hasAttribute(aR.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(aR.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(aR.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(aR.DISABLE_PSEUDO_ENDED),maxReconnectRetries:this.maxReconnectRetries,capRenditionToPlayerSize:this.capRenditionToPlayerSize,...t,extraSourceParams:this.extraSourceParams},o=av`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(Q)}
    ${as}
  </style>
  ${s=Q,av`
  <media-theme
    template="${s.themeTemplate||!1}"
    defaultstreamtype="${null!=(d=s.defaultStreamType)&&d}"
    hotkeys="${et=s.hotKeys?`${s.hotKeys}`:"","live"===t4(s.streamType)&&(et+=" noarrowleft noarrowright"),et||!1}"
    nohotkeys="${s.noHotKeys||!s.hasSrc||!1}"
    noautoseektolive="${!!(null!=(u=s.streamType)&&u.includes(m))&&0!==s.targetLiveWindow}"
    novolumepref="${s.novolumepref||!1}"
    nomutedpref="${s.nomutedpref||!1}"
    disabled="${!s.hasSrc||s.isDialogOpen}"
    audio="${null!=(c=s.audio)&&c}"
    style="${null!=(J={"--media-primary-color":s.primaryColor,"--media-secondary-color":s.secondaryColor,"--media-accent-color":s.accentColor},ea="",Object.entries(J).forEach(([e,t])=>{null!=t&&(ea+=`${tz(e)}: ${t}; `)}),p=ea?ea.trim():void 0)&&p}"
    defaultsubtitles="${!s.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(h=s.forwardSeekOffset)&&h}"
    backwardseekoffset="${null!=(b=s.backwardSeekOffset)&&b}"
    playbackrates="${null!=(v=s.playbackRates)&&v}"
    defaultshowremainingtime="${null!=(E=s.defaultShowRemainingTime)&&E}"
    defaultduration="${null!=(g=s.defaultDuration)&&g}"
    hideduration="${null!=(y=s.hideDuration)&&y}"
    title="${null!=(f=s.title)&&f}"
    videotitle="${null!=(T=s.videoTitle)&&T}"
    proudlydisplaymuxbadge="${null!=(A=s.proudlyDisplayMuxBadge)&&A}"
    exportparts="${aE}"
  >
    <mux-video
      slot="media"
      inert="${null!=(k=s.noHotKeys)&&k}"
      target-live-window="${null!=(C=s.targetLiveWindow)&&C}"
      stream-type="${null!=(_=t4(s.streamType))&&_}"
      crossorigin="${null!=(R=s.crossOrigin)?R:""}"
      playsinline
      autoplay="${null!=(w=s.autoplay)&&w}"
      muted="${null!=(S=s.muted)&&S}"
      loop="${null!=(L=s.loop)&&L}"
      preload="${null!=(I=s.preload)&&I}"
      debug="${null!=(D=s.debug)&&D}"
      prefer-cmcd="${null!=(M=s.preferCmcd)&&M}"
      disable-tracking="${null!=(O=s.disableTracking)&&O}"
      disable-cookies="${null!=(x=s.disableCookies)&&x}"
      prefer-playback="${null!=(N=s.preferPlayback)&&N}"
      start-time="${null!=s.startTime&&s.startTime}"
      initial-bandwidth-estimate-kbps="${null!=s.initialBandwidthEstimateKbps&&s.initialBandwidthEstimateKbps}"
      initial-estimate-segments="${null!=s.initialEstimateSegments&&s.initialEstimateSegments}"
      min-preload-segments="${null!=s.minPreloadSegments&&s.minPreloadSegments}"
      beacon-collection-domain="${null!=(P=s.beaconCollectionDomain)&&P}"
      player-init-time="${null!=(U=s.playerInitTime)&&U}"
      player-software-name="${null!=(B=s.playerSoftwareName)&&B}"
      player-software-version="${null!=(K=s.playerSoftwareVersion)&&K}"
      env-key="${null!=(Y=s.envKey)&&Y}"
      custom-domain="${null!=($=s.customDomain)&&$}"
      src="${s.src?s.src:!!s.playbackId&&eT(s)}"
      cast-src="${s.src?s.src:!!s.playbackId&&eT(s)}"
      cast-receiver="${null!=(W=s.castReceiver)&&W}"
      drm-token="${null!=(V=null==(F=s.tokens)?void 0:F.drm)&&V}"
      playback-token="${null!=(G=null==(H=s.tokens)?void 0:H.playback)&&G}"
      exportparts="video"
      disable-pseudo-ended="${null!=(j=s.disablePseudoEnded)&&j}"
      max-reconnect-retries="${null!=(Z=s.maxReconnectRetries)&&Z}"
      max-auto-resolution="${null!=(z=s.maxAutoResolution)&&z}"
      cap-rendition-to-player-size="${null!=(X=s.capRenditionToPlayerSize)&&X}"
    >
      ${s.storyboard?av`<track label="thumbnails" default kind="metadata" src="${s.storyboard}" />`:av``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!s.poster&&s.poster}"
        placeholdersrc="${null!=(q=s.placeholder)&&q}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,l=this.shadowRoot,o.renderInto(l)},aX=function(){let e=e=>{var t,a;if(!(null!=e&&e.startsWith("theme-")))return;let r=e.replace(/^theme-/,"");if(aw.includes(r))return;let i=this.getAttribute(e);null!=i?null==(t=this.mediaTheme)||t.setAttribute(r,i):null==(a=this.mediaTheme)||a.removeAttribute(r)};tK(this,aN,new MutationObserver(t=>{for(let{attributeName:a}of t)e(a)})),tU(this,aN).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},aq=function(){var e,t;this.addEventListener("error",tU(this,aV)),this.addEventListener("click",tU(this,aK)),null==(e=this.mediaTheme)||e.addEventListener("close",tU(this,aY)),null==(t=this.mediaTheme)||t.addEventListener("focusin",tU(this,a$)),this.media&&(this.media.errorTranslator=(e={})=>{var t,a,r;if(!((null==(t=this.media)?void 0:t.error)instanceof l))return e;let i=ay(null==(a=this.media)?void 0:a.error,!1);return{player_error_code:null==(r=this.media)?void 0:r.error.code,player_error_message:i.message?String(i.message):e.player_error_message,player_error_context:i.context?String(i.context):e.player_error_context}})},aJ=function(){var e,t,a,r;null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",tU(this,aB)),null==(r=null==(a=this.media)?void 0:a.textTracks)||r.addEventListener("removetrack",tU(this,aB))},aQ=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let a,r=new WeakMap,i=()=>this.streamType===m&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,a=!1)=>{i()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,i=-3;this.streamType===m&&(i=-2);let n=i-t;if(e.line===n&&!a)return;r.has(e)||r.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=r.get(e)||"auto"},500)})},o=()=>{var e,t;n(a,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(tD.Attributes.USER_INACTIVE))&&t)},l=()=>{var e,t;let r=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];r!==a&&(null==a||a.removeEventListener("cuechange",o)),null==(a=r)||a.addEventListener("cuechange",o),n(a,tU(this,aO))};l(),null==(e=this.textTracks)||e.addEventListener("change",l),null==(t=this.textTracks)||t.addEventListener("addtrack",l);let s=()=>{var e,t;let r=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(tD.Attributes.USER_INACTIVE))||t;tU(this,aO)!==r&&(tK(this,aO,r),n(a,tU(this,aO)))};this.addEventListener("userinactivechange",s),tK(this,aW,()=>{var e,t;null==a||a.removeEventListener("cuechange",o),null==(e=this.textTracks)||e.removeEventListener("change",l),null==(t=this.textTracks)||t.removeEventListener("addtrack",l),this.removeEventListener("userinactivechange",s)})};var a6=e=>{throw TypeError(e)},a7=(e,t,a)=>t.has(e)||a6("Cannot "+a),re=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends re{});var rt,ra=class extends re{},rr=class{constructor(e,t={}){((e,t,a)=>t.has(e)?a6("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a))(this,rt),((e,t,a,r)=>(a7(e,t,"write to private field"),r?r.call(e,a):t.set(e,a)))(this,rt,null==t?void 0:t.detail)}get detail(){let e,t;return a7(this,e=rt,"read from private field"),t?t.call(this):e.get(this)}initCustomEvent(){}};rt=new WeakMap;var ri={document:{createElement:function(e,t){return new ra}},DocumentFragment,customElements:{get(e){},define(e,t,a){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(ra)},CustomEvent:rr,EventTarget:re,HTMLElement:ra,HTMLVideoElement:class extends re{}},rn="u"<typeof window||void 0===globalThis.customElements,ro=rn?ri:globalThis;rn&&ri.document,ro.customElements.get("mux-player")||(ro.customElements.define("mux-player",a8),ro.MuxPlayerElement=a8);var rl=parseInt(t.default.version)>=19,rs={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"};function rd(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var ru=Object.prototype.hasOwnProperty,rm=(e,t,a)=>!((e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,a)=>t[a]===e);let a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(let r=0;r<a.length;r++)if(!ru.call(t,a[r])||!Object.is(e[a[r]],t[a[r]]))return!1;return!0})(t,e[a]),rc=(e,t,a)=>{e[a]=t},rp=(e,a,r,i=rc,n=rm)=>(0,t.useEffect)(()=>{let t=null==r?void 0:r.current;t&&n(t,a,e)&&i(t,a,e)},[null==r?void 0:r.current,a]),rh=(()=>{try{return"3.13.2"}catch{}return"UNKNOWN"})(),rb=(e,a,r)=>(0,t.useEffect)(()=>{let t=null==a?void 0:a.current;if(t&&r)return t.addEventListener(e,r),()=>{t.removeEventListener(e,r)}},[null==a?void 0:a.current,r,e]),rv=t.default.forwardRef(({children:e,...a},r)=>t.default.createElement("mux-player",{suppressHydrationWarning:!0,...((e={})=>{let{ref:t,...a}=e;return Object.entries(a).reduce((e,[t,a])=>{let r=((e,t)=>{if(!(!rl&&"boolean"==typeof t&&!t)){let a,r;if(a=e,null!=(r=rs)&&a in r)return rs[e];if(void 0!==t)return/[A-Z]/.test(e)?e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`):e}})(t,a);if(!r)return e;let i=rl||"boolean"!=typeof a?a:"";return e[r]=i,e},{})})(a),ref:r},e)),rE="mux-player-react",rg=t.default.forwardRef((e,a)=>{var r;let i=(0,t.useRef)(null),n=function(...e){return t.useCallback(function(...e){return t=>{let a=!1,r=e.map(e=>{let r=rd(e,t);return a||"function"!=typeof r||(a=!0),r});if(a)return()=>{for(let t=0;t<r.length;t++){let a=r[t];"function"==typeof a?a():rd(e[t],null)}}}}(...e),e)}(i,a),[o]=((e,t)=>{let{onAbort:a,onCanPlay:r,onCanPlayThrough:i,onEmptied:n,onLoadStart:o,onLoadedData:l,onLoadedMetadata:s,onProgress:d,onDurationChange:u,onVolumeChange:m,onRateChange:c,onResize:p,onWaiting:h,onPlay:b,onPlaying:v,onTimeUpdate:E,onPause:g,onSeeking:y,onSeeked:f,onStalled:T,onSuspend:A,onEnded:k,onError:C,onCuePointChange:_,onChapterChange:R,metadata:w,tokens:S,paused:L,playbackId:I,playbackRates:D,currentTime:M,themeProps:O,extraSourceParams:x,castCustomData:N,_hlsConfig:P,...U}=t;return rp("tokens",S,e),rp("playbackId",I,e),rp("playbackRates",D,e),rp("metadata",w,e),rp("extraSourceParams",x,e),rp("_hlsConfig",P,e),rp("themeProps",O,e),rp("castCustomData",N,e),rp("paused",L,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,a)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&rm(e,t,a)),rp("currentTime",M,e,(e,t)=>{null!=t&&(e.currentTime=t)}),rb("abort",e,a),rb("canplay",e,r),rb("canplaythrough",e,i),rb("emptied",e,n),rb("loadstart",e,o),rb("loadeddata",e,l),rb("loadedmetadata",e,s),rb("progress",e,d),rb("durationchange",e,u),rb("volumechange",e,m),rb("ratechange",e,c),rb("resize",e,p),rb("waiting",e,h),rb("play",e,b),rb("playing",e,v),rb("timeupdate",e,E),rb("pause",e,g),rb("seeking",e,y),rb("seeked",e,f),rb("stalled",e,T),rb("suspend",e,A),rb("ended",e,k),rb("error",e,C),rb("cuepointchange",e,_),rb("chapterchange",e,R),[U]})(i,e),[l]=(0,t.useState)(null!=(r=e.playerInitTime)?r:ey());return t.default.createElement(rv,{ref:n,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:rE,playerSoftwareVersion:rh,playerInitTime:l,...o})});e.s(["default",0,rg,"playerSoftwareName",0,rE,"playerSoftwareVersion",0,rh],902723),e.i(902723),e.s(["MaxResolution",0,{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},"MediaError",0,l,"MinResolution",0,{noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},"RenditionOrder",0,{DESCENDING:"desc"},"default",0,rg,"generatePlayerInitTime",0,ey,"playerSoftwareName",0,rE,"playerSoftwareVersion",0,rh],114975)}]);