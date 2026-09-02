module.exports=[161539,a=>{"use strict";var b=a.i(572131),c=a.i(65872),d=a.i(230947),e=d.default,f="video",g=a=>a===f?"playback":a,h=class a extends Error{constructor(b,c=a.MEDIA_ERR_CUSTOM,d,e){var f;super(b),this.name="MediaError",this.code=c,this.context=e,this.fatal=null!=d?d:c>=a.MEDIA_ERR_NETWORK&&c<=a.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(f=a.defaultMessages[this.code])?f:"")}};h.MEDIA_ERR_ABORTED=1,h.MEDIA_ERR_NETWORK=2,h.MEDIA_ERR_DECODE=3,h.MEDIA_ERR_SRC_NOT_SUPPORTED=4,h.MEDIA_ERR_ENCRYPTED=5,h.MEDIA_ERR_CUSTOM=100,h.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var i=(a,b)=>null!=b&&a in b,j={ANY:"any",MUTED:"muted"},k="on-demand",l="live",m="unknown",n="native",o={HEADER:"header",QUERY:"query",NONE:"none"},p=Object.values(o),q={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},r={HLS:q.M3U8};Object.keys(r),[...Object.values(q)];var s={code:"en"},t=(a,b,c,d,e=a)=>{e.addEventListener(b,c,d),a.addEventListener("teardown",()=>{e.removeEventListener(b,c)},{once:!0})},u=a=>{let b=a.indexOf("?");return b<0?[a]:[a.slice(0,b),a.slice(b)]},v=a=>{let{type:b}=a;if(b){let a=b.toUpperCase();return i(a,r)?r[a]:b}return y(a)},w=a=>"VOD"===a?k:l,x=a=>"EVENT"===a?1/0:"VOD"===a?NaN:0,y=a=>{let{src:b}=a;if(!b)return"";let c="";try{c=A(b).pathname}catch{console.error("Invalid url when trying to infer mime type",b)}let d=c.lastIndexOf(".");if(d<0)return C(a)?q.M3U8:"";let e=c.slice(d+1).toUpperCase();return i(e,q)?q[e]:""},z=a=>{try{return new URL(a),!1}catch{return!0}},A=(a,b)=>{var c;if(!z(a))return new URL(a);let d=null==(c=null==window?void 0:window.location)?void 0:c.href,e=null!=b?b:d;return b&&z(b.toString())&&(e=new URL(b,d)),new URL(a,e)},B="mux.com",C=({src:a,customDomain:b=B})=>{let c;try{c=new URL(`${a}`)}catch{return!1}let d="https:"===c.protocol,e=c.hostname===`stream.${b}`.toLowerCase(),f=c.pathname.split("/"),g=2===f.length,h=!(null!=f&&f[1].includes("."));return d&&e&&g&&h},D=a=>{let b=(null!=a?a:"").split(".")[1];if(b)try{let a=b.replace(/-/g,"+").replace(/_/g,"/"),c=decodeURIComponent(atob(a).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(c)}catch{return}};function E(a,b=!0){var c;return new F(b&&null!=(c=null==s?void 0:s[a])?c:a,b?s.code:"en")}var F=class{constructor(a,b=(a=>null!=(a=s)?a:"en")()){this.message=a,this.locale=b}format(a){return this.message.replace(/\{(\w+)\}/g,(b,c)=>{var d;return null!=(d=a[c])?d:""})}toString(){return this.message}},G=Object.values(j),H=a=>"boolean"==typeof a||"string"==typeof a&&G.includes(a),I=(a,b)=>{if(!b)return;let c=a.muted,d=()=>a.muted=c;switch(b){case j.ANY:a.play().catch(()=>{a.muted=!0,a.play().catch(d)});break;case j.MUTED:a.muted=!0,a.play().catch(d);break;default:a.play().catch(()=>{})}},J=a=>"time"in a?a.time:a.startTime;function K(a,b,c,d,e,f){let g=document.createElement("track");return g.kind=b,g.label=c,d&&(g.srclang=d),e&&(g.id=e),f&&(g.default=!0),g.track.mode=["subtitles","captions"].includes(b)?"disabled":"hidden",g.setAttribute("data-removeondestroy",""),a.append(g),g.track}function L(a,b,c){var d;return null==(d=Array.from(a.querySelectorAll("track")).find(a=>a.track.label===b&&a.track.kind===c))?void 0:d.track}async function M(a,b,c,d){let e=L(a,c,d);return e||((e=K(a,d,c)).mode="hidden",await new Promise(a=>setTimeout(()=>a(void 0),0))),"hidden"!==e.mode&&(e.mode="hidden"),[...b].sort((a,b)=>J(b)-J(a)).forEach(b=>{var c,f;let g=b.value,h=J(b);if("endTime"in b&&null!=b.endTime)null==e||e.addCue(new VTTCue(h,b.endTime,"chapters"===d?g:JSON.stringify(null!=g?g:null)));else{let b=Array.prototype.findIndex.call(null==e?void 0:e.cues,a=>a.startTime>=h),i=null==(c=null==e?void 0:e.cues)?void 0:c[b],j=i?i.startTime:Number.isFinite(a.duration)?a.duration:Number.MAX_SAFE_INTEGER,k=null==(f=null==e?void 0:e.cues)?void 0:f[b-1];k&&(k.endTime=h),null==e||e.addCue(new VTTCue(h,j,"chapters"===d?g:JSON.stringify(null!=g?g:null)))}}),a.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),e}var N="cuepoints",O=Object.freeze({label:N});async function P(a,b,c=O){return M(a,b,c.label,"metadata")}var Q=a=>({time:a.startTime,value:JSON.parse(a.text)});function R(a,b={label:N}){var c,d;let e=L(a,b.label,"metadata");if(!(null!=(c=null==e?void 0:e.activeCues)&&c.length))return;if(1===e.activeCues.length)return Q(e.activeCues[0]);let{currentTime:f}=a;return Q(Array.prototype.find.call(null!=(d=e.activeCues)?d:[],({startTime:a,endTime:b})=>a<=f&&b>f)||e.activeCues[0])}async function S(a,b=O){return new Promise(c=>{t(a,"loadstart",async()=>{let d=await P(a,[],b);t(a,"cuechange",()=>{let b=R(a);if(b){let c=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:b});a.dispatchEvent(c)}},{},d),c(d)})})}var T="chapters",U=Object.freeze({label:T}),V=a=>({startTime:a.startTime,endTime:a.endTime,value:a.text});async function W(a,b,c=U){return M(a,b,c.label,"chapters")}function X(a,b={label:T}){var c,d;let e=L(a,b.label,"chapters");if(!(null!=(c=null==e?void 0:e.activeCues)&&c.length))return;if(1===e.activeCues.length)return V(e.activeCues[0]);let{currentTime:f}=a;return V(Array.prototype.find.call(null!=(d=e.activeCues)?d:[],({startTime:a,endTime:b})=>a<=f&&b>f)||e.activeCues[0])}async function Y(a,b=U){return new Promise(c=>{t(a,"loadstart",async()=>{let d=await W(a,[],b);t(a,"cuechange",()=>{let b=X(a);if(b){let c=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:b});a.dispatchEvent(c)}},{},d),c(d)})})}var Z=(a,b,c,d,e=!1,j=!(a=>null==(a=globalThis.navigator)?void 0:a.onLine)())=>{var m,n,o,p;let q,r;if(j){let c=E("Your device appears to be offline",e),d=h.MEDIA_ERR_NETWORK,f=new h(c,d,!1,void 0);return f.errorCategory=b,f.muxCode=2000002,f.data=a,f}let s="status"in a?a.status:a.code,t=Date.now(),v=h.MEDIA_ERR_NETWORK;if(200===s)return;let w=g(b),x=(q=g(b),r=`${q}Token`,null!=(o=c.tokens)&&o[q]?null==(p=c.tokens)?void 0:p[q]:i(r,c)?c[r]:void 0),y=b===f?"v":"drm"===b?"d":void 0,[z]=u(null!=(m=c.playbackId)?m:"");if(!s||!z)return;let A=D(x);if(x&&!A){let c=new h(E("The {tokenNamePrefix}-token provided is invalid or malformed.",e).format({tokenNamePrefix:w}),v,!0,E("Compact JWT string: {token}",e).format({token:x}));return c.errorCategory=b,c.muxCode=2412202,c.data=a,c}if(s>=500){let a=new h("",v,null==d||d);return a.errorCategory=b,a.muxCode=2e6,a}if(403===s)if(A){if((({exp:a},b=Date.now())=>!a||1e3*a<b)(A,t)){let c={timeStyle:"medium",dateStyle:"medium"},d=new h(E("The video’s secured {tokenNamePrefix}-token has expired.",e).format({tokenNamePrefix:w}),v,!0,E("Expired at: {expiredDate}. Current time: {currentDate}.",e).format({expiredDate:new Intl.DateTimeFormat("en",c).format(null!=(n=A.exp)?n:0),currentDate:new Intl.DateTimeFormat("en",c).format(t)}));return d.errorCategory=b,d.muxCode=2403210,d.data=a,d}if((({sub:a},b)=>a!==b)(A,z)){let c=new h(E("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",e).format({tokenNamePrefix:w}),v,!0,E("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",e).format({tokenNamePrefix:w,playbackId:z,tokenPlaybackId:A.sub}));return c.errorCategory=b,c.muxCode=2403232,c.data=a,c}if((({aud:a},b)=>!a)(A,0)){let c=new h(E("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:w}),v,!0,E("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",e).format({tokenNamePrefix:w,expectedAud:y}));return c.errorCategory=b,c.muxCode=2403221,c.data=a,c}if((({aud:a},b)=>a!==b)(A,y)){let c=new h(E("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:w}),v,!0,E("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",e).format({tokenNamePrefix:w,expectedAud:y,aud:A.aud}));return c.errorCategory=b,c.muxCode=2403222,c.data=a,c}}else{let c=new h(E("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",e).format({tokenNamePrefix:w,category:b}),v,null==d||d,E("Specified playback ID: {playbackId}",e).format({playbackId:z}));return c.errorCategory=b,c.muxCode=2403201,c.data=a,c}if(412===s){let f=new h(E("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",e),v,null==d||d,E("Specified playback ID: {playbackId}",e).format({playbackId:z}));return f.errorCategory=b,f.muxCode=2412e3,f.streamType=c.streamType===l?"live":c.streamType===k?"on-demand":"unknown",f.data=a,f}if(404===s){let c=new h(E("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",e),v,null==d||d,E("Specified playback ID: {playbackId}",e).format({playbackId:z}));return c.errorCategory=b,c.muxCode=2404e3,c.data=a,c}if(400===s){let c=new h(E("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),v,null==d||d,E("Specified playback ID: {playbackId}",e).format({playbackId:z}));return c.errorCategory=b,c.muxCode=24e5,c.data=a,c}let B=new h("",v,null==d||d);return B.errorCategory=b,B.muxCode=2e6,B.data=a,B},$=e.DefaultConfig.capLevelController,_={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},aa=class a extends ${constructor(a){super(a)}static setMaxAutoResolution(b,c){c?a.maxAutoResolution.set(b,c):a.maxAutoResolution.delete(b)}getMaxAutoResolution(){var b;let c=this.hls;return null!=(b=a.maxAutoResolution.get(c))?b:void 0}get levels(){var a;return null!=(a=this.hls.levels)?a:[]}getValidLevels(a){return this.levels.filter((b,c)=>this.isLevelAllowed(b)&&c<=a)}getMaxLevelCapped(a){let b=this.getValidLevels(a),c=this.getMaxAutoResolution();if(!c)return super.getMaxLevel(a);let d=_[c.toLowerCase().trim()];if(!d)return super.getMaxLevel(a);let e=b.filter(a=>a.width*a.height<=d),f=e.findIndex(a=>a.width*a.height===d);if(-1!==f){let a=e[f];return b.findIndex(b=>b===a)}if(0===e.length)return 0;let g=e[e.length-1];return b.findIndex(a=>a===g)}getMaxLevel(b){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(b);let c=super.getMaxLevel(b),d=this.getValidLevels(b);if(!d[c])return c;let e=Math.min(d[c].width,d[c].height),f=a.minMaxResolution;return e>=f?c:$.getMaxLevelByMediaSize(d,16/9*f,f)}};aa.minMaxResolution=720,aa.maxAutoResolution=new WeakMap;var ab,ac,ad,ae,af,ag,ah=a=>new TextDecoder("utf-16le").decode(a).replace("skd://","").slice(1),ai="fairplay",aj=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,ak=async(a,b)=>{if(b===q.MP4)return{streamType:k,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(b===q.M3U8){let b=await fetch(a);if(!b.ok)return Promise.reject(b);let c=await b.text(),d=await ((a,b)=>{let c,d=a.split(`
`).find((a,b,c)=>b>0&&c[b-1].startsWith("#EXT-X-STREAM-INF"));if(!d)return Promise.reject(Error("No media playlist URL found in multivariant playlist"));if(z(d)&&!b)return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));try{c=A(d,b)}catch(a){return Promise.reject(a)}return fetch(c).then(a=>200!==a.status?Promise.reject(a):a.text())})(c,b.url);return{...(a=>{let b=a.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!b.length)return{};let c={};for(let a of b){let b=Object.fromEntries([...a.matchAll(aj)].map(([,a,b])=>[a,b])),d=b["DATA-ID"];d&&(c[d]={...b})}return{sessionData:c}})(c),...(a=>{var b,c,d;let e=a.split(`
`),f=null==(c=(null!=(b=e.find(a=>a.startsWith("#EXT-X-PLAYLIST-TYPE")))?b:"").split(":")[1])?void 0:c.trim(),g=w(f),h=x(f),i;if(g===l){let a=e.find(a=>a.startsWith("#EXT-X-PART-INF"));if(a)i=2*a.split(":")[1].split("=")[1];else{let a=e.find(a=>a.startsWith("#EXT-X-TARGETDURATION")),b=null==(d=null==a?void 0:a.split(":"))?void 0:d[1];i=(null!=b?b:6)*3}}return{streamType:g,targetLiveWindow:h,liveEdgeStartOffset:i}})(d)}}return console.error(`Media type ${b} is an unrecognized or unsupported type for src ${a}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},al=async(a,b,c=v({src:a}))=>{var d,e,f,g;let{streamType:h,targetLiveWindow:i,liveEdgeStartOffset:j,sessionData:k}=await ak(a,c),l=null==k?void 0:k["com.apple.hls.chapters"];(null!=l&&l.URI||null!=l&&l.VALUE.toLocaleLowerCase().startsWith("http"))&&am(null!=(d=l.URI)?d:l.VALUE,b),(null!=(e=aq.get(b))?e:{}).liveEdgeStartOffset=j,(null!=(f=aq.get(b))?f:{}).targetLiveWindow=i,b.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(g=aq.get(b))?g:{}).streamType=h,b.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},am=async(a,b)=>{var c,d;try{let e=await fetch(a);if(!e.ok)throw Error(`Failed to fetch Mux metadata: ${e.status} ${e.statusText}`);let f=await e.json(),g={};if(!(null!=(c=null==f?void 0:f[0])&&c.metadata))return;for(let a of f[0].metadata)a.key&&a.value&&(g[a.key]=a.value);(null!=(d=aq.get(b))?d:{}).metadata=g;let h=new CustomEvent("muxmetadata");b.dispatchEvent(h)}catch(a){console.error(a)}},an=null!=(ac=null==(ab=null==globalThis?void 0:globalThis.navigator)?void 0:ab.userAgent)?ac:"",ao=null!=(af=null==(ae=null==(ad=null==globalThis?void 0:globalThis.navigator)?void 0:ad.userAgentData)?void 0:ae.platform)?af:"",ap=an.toLowerCase().includes("android")||["x11","android"].some(a=>ao.toLowerCase().includes(a)),aq=new WeakMap,ar="mux.com",as=null==(ag=e.isSupported)?void 0:ag.call(e),at=()=>{},au=c.default.utils.generateUUID,av=({playbackId:a,customDomain:b=ar,maxResolution:c,minResolution:d,renditionOrder:e,programStartTime:f,programEndTime:g,assetStartTime:h,assetEndTime:i,playbackToken:j,tokens:{playback:k=j}={},extraSourceParams:l={}}={})=>{if(!a)return;let[m,n=""]=u(a),o=new URL(`https://stream.${b}/${m}.m3u8${n}`);return k||o.searchParams.has("token")?(o.searchParams.forEach((a,b)=>{"token"!=b&&o.searchParams.delete(b)}),k&&o.searchParams.set("token",k)):(c&&o.searchParams.set("max_resolution",c),d&&(o.searchParams.set("min_resolution",d),c&&+c.slice(0,-1)<+d.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",d,"maxResolution",c)),e&&o.searchParams.set("rendition_order",e),f&&o.searchParams.set("program_start_time",`${f}`),g&&o.searchParams.set("program_end_time",`${g}`),h&&o.searchParams.set("asset_start_time",`${h}`),i&&o.searchParams.set("asset_end_time",`${i}`),Object.entries(l).forEach(([a,b])=>{null!=b&&o.searchParams.set(a,b)})),o.toString()},aw=a=>{if(!a)return;let[b]=a.split("?");return b||void 0},ax=a=>{if(!a||!a.startsWith("https://stream."))return;let[b]=new URL(a).pathname.slice(1).split(/\.m3u8|\//);return b||void 0},ay=a=>{var b;return null==(b=aq.get(a))?void 0:b.error},az=a=>{var b,c;return null!=(c=null==(b=aq.get(a))?void 0:b.streamType)?c:m},aA=a=>{var b,c;return null!=(c=null==(b=aq.get(a))?void 0:b.seekable)?c:a.seekable},aB=.034,aC=(a,b,c=aB)=>a>b||((a,b,c=aB)=>Math.abs(a-b)<=c)(a,b,c),aD=(a,b)=>{var c,d,e;if(!b||!a.buffered.length)return;if(a.readyState>2)return!1;let f=b.currentLevel>=0?null==(d=null==(c=b.levels)?void 0:c[b.currentLevel])?void 0:d.details:null==(e=b.levels.find(a=>!!a.details))?void 0:e.details;if(!f||f.live)return;let{fragments:g}=f;if(!(null!=g&&g.length))return;if(a.currentTime<a.duration-(f.targetduration+.5))return!1;let h=g[g.length-1];if(a.currentTime<=h.start)return!1;let i=h.start+h.duration/2,j=a.buffered.start(a.buffered.length-1),k=a.buffered.end(a.buffered.length-1);return i>j&&i<k},aE=(a,b)=>a.ended||a.loop?a.ended:!!(b&&aD(a,b))||((a,b=aB)=>a.paused&&aC(a.currentTime,a.duration,b))(a),aF=(a,b,c)=>{var d,f,g;aG(b,c,a);let{metadata:h={}}=a,{view_session_id:i=au()}=h,j=null!=(d=null==a?void 0:a.metadata)&&d.video_id?a.metadata.video_id:aP(a)&&null!=(g=null!=(f=aw(a.playbackId))?f:ax(a.src))?g:a.src;h.view_session_id=i,h.video_id=j,a.metadata=h,a.drmTypeCb=a=>{var c;null==(c=b.mux)||c.emit("hb",{view_drm_type:a})},a.fallbackToWebkitFairplay=async()=>{var c;let d=!b.paused,e=b.currentTime;a.useWebkitFairplay=!0;let f=a.muxDataKeepSession;a.muxDataKeepSession=!0;let g=null==(c=aq.get(b))?void 0:c.coreReference;aF(a,b,g),a.muxDataKeepSession=f,a.useWebkitFairplay=!1,d&&await b.play().then(()=>{b.currentTime=e}).catch(()=>{}),b.currentTime=e},aq.set(b,{retryCount:0});let k=aI(a,b),n=(({preload:a,src:b},c,d)=>{let e=a=>{null!=a&&["","none","metadata","auto"].includes(a)?c.setAttribute("preload",a):c.removeAttribute("preload")};if(!d)return e(a),e;let f=!1,g=!1,h=d.config.maxBufferLength,i=d.config.maxBufferSize,j=a=>{e(a);let b=null!=a?a:c.preload;g||"none"===b||("metadata"===b?(d.config.maxBufferLength=1,d.config.maxBufferSize=1):(d.config.maxBufferLength=h,d.config.maxBufferSize=i),k())},k=()=>{!f&&b&&(f=!0,d.loadSource(b))};return t(c,"play",()=>{g=!0,d.config.maxBufferLength=h,d.config.maxBufferSize=i,k()},{once:!0}),j(a),j})(a,b,k);null!=a&&a.muxDataKeepSession&&null!=b&&b.mux&&!b.mux.deleted?k&&b.mux.addHLSJS({hlsjs:k,Hls:k?e:void 0}):aR(a,b,k),aS(a,b,k),S(b),Y(b);let o=((a,b,c)=>{let{autoplay:d}=a,f=!1,g=!1,h=H(d)?d:!!d,i=()=>{f||t(b,"playing",()=>{f=!0},{once:!0})};if(i(),t(b,"loadstart",()=>{f=!1,i(),I(b,h)},{once:!0}),t(b,"loadstart",()=>{c||(g=a.streamType&&a.streamType!==m?a.streamType===l:!Number.isFinite(b.duration)),I(b,h)},{once:!0}),c&&c.once(e.Events.LEVEL_LOADED,(b,c)=>{var d;g=a.streamType&&a.streamType!==m?a.streamType===l:null!=(d=c.details.live)&&d}),!h){let d=()=>{!g||Number.isFinite(a.startTime)||(null!=c&&c.liveSyncPosition?b.currentTime=c.liveSyncPosition:Number.isFinite(b.seekable.end(0))&&(b.currentTime=b.seekable.end(0)))};c&&t(b,"play",()=>{"metadata"===b.preload?c.once(e.Events.LEVEL_UPDATED,d):d()},{once:!0})}return a=>{f||I(b,h=H(a)?a:!!a)}})(a,b,k);((a,b,c)=>{let{minPreloadSegments:d}=a;if(null==d||d<=0||!c)return;let f=0,g=!1,h=b.playbackRate||1,i=()=>{0!==b.playbackRate&&(h=b.playbackRate,b.playbackRate=0)};b.playbackRate=0,t(b,"ratechange",i);let j=(a,{frag:c})=>{g||"main"!==c.type||++f>=d&&(g=!0,b.removeEventListener("ratechange",i),b.playbackRate=h)};c.on(e.Events.FRAG_BUFFERED,j),b.addEventListener("teardown",()=>{g||(g=!0,c.off(e.Events.FRAG_BUFFERED,j),b.playbackRate=h)},{once:!0})})(a,b,k),((a,b,c)=>{let{initialEstimateSegments:d}=a;if(null==d||d<=0||!c)return;let f=0;c.on(e.Events.FRAG_BUFFERED,(a,{frag:b})=>{"main"===b.type&&++f<d&&c.abrController.resetEstimator(c.config.abrEwmaDefaultEstimate)})})(a,0,k);let p={engine:k,setAutoplay:o,setPreload:n},q=aq.get(b);return q&&(q.coreReference=p),p},aG=(a,b,c)=>{let d=null==b?void 0:b.engine;null!=a&&a.mux&&!a.mux.deleted&&(null!=c&&c.muxDataKeepSession?d&&a.mux.removeHLSJS():(a.mux.destroy(),delete a.mux)),d&&(d.detachMedia(),d.destroy()),a&&(a.hasAttribute("src")&&(a.removeAttribute("src"),a.load()),a.removeEventListener("error",aU),a.removeEventListener("error",aW),a.removeEventListener("durationchange",aT),aq.delete(a),a.dispatchEvent(new Event("teardown")))};function aH(a,b){var c;let d=v(a);if(d!==q.M3U8)return!0;let e=!d||null==(c=b.canPlayType(d))||c,{preferPlayback:f}=a,g=as&&("mse"===f||ap||!(/^((?!chrome|android).)*safari/i.test(an)&&b.canPlayType("application/vnd.apple.mpegurl")));return e&&(f===n||!g)}var aI=(a,b)=>{let{debug:c,streamType:d,startTime:f=-1,metadata:g,preferCmcd:h,_hlsConfig:i={},maxAutoResolution:j,initialBandwidthEstimateKbps:k}=a,l=v(a)===q.M3U8,m=aH(a,b);if(l&&!m&&as){let l={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...null!=k?{abrEwmaDefaultEstimate:1e3*k}:{}},m=aJ(d),n=aK(a),p=[o.QUERY,o.HEADER].includes(h)?{useHeaders:h===o.HEADER,sessionId:null==g?void 0:g.view_session_id,contentId:null==g?void 0:g.video_id}:void 0,q=aQ(a,i),r=new e({debug:c,startPosition:f,cmcd:p,xhrSetup:(a,b)=>{var c,d;if(h&&h!==o.QUERY)return;let e=A(b);if(!e.searchParams.has("CMCD"))return;let f=(null!=(d=null==(c=e.searchParams.get("CMCD"))?void 0:c.split(","))?d:[]).filter(a=>a.startsWith("sid")||a.startsWith("cid")).join(",");e.searchParams.set("CMCD",f),a.open("GET",e)},...l,...q,...m,...n,...i});return q.capLevelController===aa&&void 0!==j&&aa.setMaxAutoResolution(r,j),r.on(e.Events.MANIFEST_PARSED,async function(a,c){var d,e;let f=null==(d=c.sessionData)?void 0:d["com.apple.hls.chapters"];(null!=f&&f.URI||null!=f&&f.VALUE.toLocaleLowerCase().startsWith("http"))&&am(null!=(e=null==f?void 0:f.URI)?e:null==f?void 0:f.VALUE,b)}),r}},aJ=a=>a===l?{backBufferLength:8}:{},aK=a=>{let{tokens:{drm:b}={},playbackId:c,drmTypeCb:d}=a,e=aw(c);return b&&e?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:aN(a,"fairplay"),serverCertificateUrl:aO(a,"fairplay")},"com.widevine.alpha":{licenseUrl:aN(a,"widevine")},"com.microsoft.playready":{licenseUrl:aN(a,"playready")}},requestMediaKeySystemAccessFunc:(a,b)=>("com.widevine.alpha"===a&&(b=[...b.map(a=>{var b;let c=null==(b=a.videoCapabilities)?void 0:b.map(a=>({...a,robustness:"HW_SECURE_ALL"}));return{...a,videoCapabilities:c}}),...b]),navigator.requestMediaKeySystemAccess(a,b).then(b=>{let c=a.includes("fps")?ai:a.includes("playready")?"playready":a.includes("widevine")?"widevine":void 0;return null==d||d(c),b}))}:{}},aL=async a=>{let b=await fetch(a);return 200!==b.status?Promise.reject(b):await b.arrayBuffer()},aM=async(a,b)=>{let c=await fetch(b,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:a});return 200!==c.status?Promise.reject(c):new Uint8Array(await c.arrayBuffer())},aN=({playbackId:a,tokens:{drm:b}={},customDomain:c=ar},d)=>{let e=aw(a);return`https://license.${c.toLocaleLowerCase().endsWith(ar)?c:ar}/license/${d}/${e}?token=${b}`},aO=({playbackId:a,tokens:{drm:b}={},customDomain:c=ar},d)=>{let e=aw(a);return`https://license.${c.toLocaleLowerCase().endsWith(ar)?c:ar}/appcert/${d}/${e}?token=${b}`},aP=({playbackId:a,src:b,customDomain:c})=>{if(a)return!0;if("string"!=typeof b)return!1;let d=new URL(b,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return d.includes(ar)||!!c&&d.includes(c.toLocaleLowerCase())},aQ=(a,b)=>{let c={};return c.capLevelToPlayerSize=a.capRenditionToPlayerSize,null==c.capLevelToPlayerSize?(c.capLevelController=aa,c.capLevelToPlayerSize=!0):c.capLevelController=d.CapLevelController,c},aR=(a,b,d)=>{var f;let{envKey:g,disableTracking:h,muxDataSDK:i=c.default,muxDataSDKOptions:j={}}=a,k=aP(a);if(!h&&(g||k)){let{playerInitTime:c,playerSoftwareName:h,playerSoftwareVersion:k,beaconCollectionDomain:l,debug:m,disableCookies:n}=a,o={...a.metadata,video_title:(null==(f=null==a?void 0:a.metadata)?void 0:f.video_title)||void 0};i.monitor(b,{debug:m,beaconCollectionDomain:l,hlsjs:d,Hls:d?e:void 0,automaticErrorTracking:!1,errorTranslator:b=>"string"!=typeof b.player_error_code&&("function"==typeof a.errorTranslator?a.errorTranslator(b):b),disableCookies:n,...j,data:{...g?{env_key:g}:{},player_software_name:h,player_software:h,player_software_version:k,player_init_time:c,...o}})}},aS=(a,b,c)=>{var d,g,i;let j=aH(a,b),{src:k,customDomain:m=ar}=a,n=()=>{b.ended||a.disablePseudoEnded||!aE(b,c)||(aD(b,c)?b.currentTime=b.buffered.end(b.buffered.length-1):b.dispatchEvent(new Event("ended")))},o,p,q=()=>{let a=aA(b),c,d;a.length>0&&(c=a.start(0),d=a.end(0)),(p!==d||o!==c)&&b.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),o=c,p=d};if(t(b,"durationchange",q),b&&j){let c=v(a);if("string"==typeof k){if(k.endsWith(".mp4")&&k.includes(m)){let a=ax(k);am(new URL(`https://stream.${m}/${a}/metadata.json`).toString(),b)}let e=()=>{if(az(b)!==l||Number.isFinite(b.duration))return;let a=setInterval(q,1e3);b.addEventListener("teardown",()=>{clearInterval(a)},{once:!0}),t(b,"durationchange",()=>{Number.isFinite(b.duration)&&clearInterval(a)})},i=async()=>al(k,b,c).then(e).catch(c=>{if(c instanceof Response){let d=Z(c,f,a);if(d)return void aV(b,d)}});if("none"===b.preload){let a=()=>{i(),b.removeEventListener("loadedmetadata",c)},c=()=>{i(),b.removeEventListener("play",a)};t(b,"play",a,{once:!0}),t(b,"loadedmetadata",c,{once:!0})}else i();null!=(d=a.tokens)&&d.drm?((a,b)=>{let c={mediaEl:b,getAppCertificate:()=>aL(aO(a,"fairplay")).catch(b=>{if(b instanceof Response){let c=Z(b,"drm",a);return console.error("mediaError",null==c?void 0:c.message,null==c?void 0:c.context),c?Promise.reject(c):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(b)}),getLicenseKey:b=>aM(b,aN(a,"fairplay")).catch(b=>{if(b instanceof Response){let c=Z(b,"drm",a);return console.error("mediaError",null==c?void 0:c.message,null==c?void 0:c.context),c?Promise.reject(c):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(b)}),saveAndDispatchError:aV,drmTypeCb:()=>{var b;null==(b=a.drmTypeCb)||b.call(a,ai)}};if(a.useWebkitFairplay)(({mediaEl:a,getAppCertificate:b,getLicenseKey:c,saveAndDispatchError:d,drmTypeCb:e})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in a)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let b=new h(E("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),h.MEDIA_ERR_ENCRYPTED,!0);return b.errorCategory="drm",b.muxCode=5000005,d(a,b),()=>{}}let f=b(),g=null,i=b=>{(async()=>{try{var c,e;let d,g,h,i,l,m,n,o;a.webkitKeys||j();let p=await f;if(null===b.initData||null==p)return;let q=(c=b.initData,e=p,d=function(a){let b=new ArrayBuffer(2*a.length),c=new DataView(b);for(let b=0;b<a.length;b++)c.setUint16(2*b,a.charCodeAt(b),!0);return b}(ah(c)),g=new Uint8Array(c),h=new Uint8Array(d),i=new Uint8Array(e),l=new Uint8Array(g.byteLength+4+i.byteLength+4+h.byteLength),m=0,n=a=>{l.set(a,m),m+=a.byteLength},o=a=>{let b=new DataView(l.buffer),c=a.byteLength;b.setUint32(m,c,!0),m+=4,n(a)},n(g),o(h),o(i),l);k(q)}catch(b){console.error("Could not start encrypted playback due to exception",b),d(a,b)}})()},j=()=>{try{let b=new WebKitMediaKeys("com.apple.fps.1_0");a.webkitSetMediaKeys(b),e()}catch{let a=new h("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",h.MEDIA_ERR_ENCRYPTED,!0);throw a.errorCategory="drm",a.muxCode=5000001,a}},k=b=>{let e=a.webkitKeys.createSession("application/vnd.apple.mpegurl",b),f=async b=>{try{let a=b.message,d=await c(a);e.update(d)}catch(b){console.error("Error on FairPlay session message",b),d(a,b)}},i=b=>{let c=b.target.error;if(!c)return;console.error(`Internal Webkit Key Session Error - sysCode: ${c.systemCode} code: ${c.code}`);let e=new h(E("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),h.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory="drm",e.muxCode=5000005,d(a,e)},j=()=>{e.removeEventListener("webkitkeymessage",f),e.removeEventListener("webkitkeyerror",i),a.removeEventListener("teardown",j),"webkitCurrentPlaybackTargetIsWireless"in a&&a.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",j),g=null;try{e.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in a&&a.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",j,{once:!0}),e.addEventListener("webkitkeymessage",f),e.addEventListener("webkitkeyerror",i),a.addEventListener("teardown",j),g=j},l=()=>{a.removeEventListener("webkitneedkey",i),a.removeEventListener("teardown",l),null==g||g();try{a.webkitSetMediaKeys(null)}catch{}};return a.addEventListener("webkitneedkey",i),a.addEventListener("teardown",l,{once:!0})})(c);else{let b=(({mediaEl:a,getAppCertificate:b,getLicenseKey:c,saveAndDispatchError:d,drmTypeCb:e,fallbackToWebkitFairplay:f})=>{let g=null,i=async b=>{try{let c=b.initDataType;if("skd"!==c)return void console.error(`Received unexpected initialization data type "${c}"`);a.mediaKeys||await j(c);let d=b.initData;if(null==d)return void console.error(`Could not start encrypted playback due to missing initData in ${b.type} event`);await k(c,d)}catch(b){d(a,b);return}},j=async c=>{let f=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[c],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(a=>(e(),a)).catch(()=>{let b=new h(E("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),h.MEDIA_ERR_ENCRYPTED,!0);b.errorCategory="drm",b.muxCode=5000001,d(a,b)});if(!f)return;let g=await f.createMediaKeys();try{let a=await b();await g.setServerCertificate(a).catch(()=>{let a=E("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),b=new h(a,h.MEDIA_ERR_ENCRYPTED,!0);return b.errorCategory="drm",b.muxCode=5000004,Promise.reject(b)})}catch(b){d(a,b);return}await a.setMediaKeys(g)},k=async(b,e)=>{let i=a.mediaKeys.createSession(),j=async b=>{let e=b.message,f=await c(e);try{await i.update(f)}catch{let b=new h(E("Failed to update DRM license. This may be an issue with the player or your protected content."),h.MEDIA_ERR_ENCRYPTED,!0);b.errorCategory="drm",b.muxCode=5000003,d(a,b)}},k=()=>{i.keyStatuses.forEach(b=>{let c;"internal-error"===b?((c=new h(E("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),h.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",c.muxCode=5000005):("output-restricted"===b||"output-downscaled"===b)&&((c=new h(E("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),h.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",c.muxCode=5000006),c&&d(a,c)})};i.addEventListener("keystatuseschange",k),i.addEventListener("message",j);let l=async()=>{i.removeEventListener("keystatuseschange",k),i.removeEventListener("message",j),"webkitCurrentPlaybackTargetIsWireless"in a&&a.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",l),a.removeEventListener("teardown",l),await i.close().catch(a=>{console.warn("There was an error when closing EME session",a)}),g=null};"webkitCurrentPlaybackTargetIsWireless"in a&&a.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",l,{once:!0}),a.addEventListener("teardown",l,{once:!0}),g=l,await i.generateRequest(b,e).catch(async b=>{if("NotSupportedError"===b.name&&"webkitCurrentPlaybackTargetIsWireless"in a&&a.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==f||f();else{let a=new h(E("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),h.MEDIA_ERR_ENCRYPTED,!0);return a.errorCategory="drm",a.muxCode=5000002,console.error("Failed to generate license request",b),Promise.reject(a)}})},l=async()=>{a.removeEventListener("encrypted",i),a.removeEventListener("teardown",l),g&&await g(),await a.setMediaKeys(null).catch(()=>{})};return a.addEventListener("encrypted",i),a.addEventListener("teardown",l,{once:!0}),l})({fallbackToWebkitFairplay:async()=>{var c;await b(),null==(c=a.fallbackToWebkitFairplay)||c.call(a)},...c})}})(a,b):t(b,"encrypted",()=>{let a=new h(E("Attempting to play DRM-protected content without providing a DRM token."),h.MEDIA_ERR_ENCRYPTED,!0);a.errorCategory="drm",a.muxCode=5000002,aV(b,a)},{once:!0}),b.setAttribute("src",k),a.startTime&&((null!=(g=aq.get(b))?g:{}).startTime=a.startTime,b.addEventListener("durationchange",aT,{once:!0}))}else b.removeAttribute("src");b.addEventListener("error",aU),b.addEventListener("error",aW),b.addEventListener("emptied",()=>{b.querySelectorAll("track[data-removeondestroy]").forEach(a=>{a.remove()})},{once:!0}),t(b,"pause",n),t(b,"seeked",n),t(b,"play",()=>{b.ended||aC(b.currentTime,b.duration)&&(b.currentTime=b.seekable.length?b.seekable.start(0):0)})}else if(c&&k){let d,g;c.once(e.Events.LEVEL_LOADED,(a,d)=>{((a,b,c)=>{var d,e,f,g,h,i,j,k,m;let n,o,p,q,r,{streamType:s,targetLiveWindow:t,liveEdgeStartOffset:u,lowLatency:v}=(o=w(n=a.type),p=x(n),r=!!(null!=(m=a.partList)&&m.length),o===l&&(q=r?2*a.partTarget:3*a.targetduration),{streamType:o,targetLiveWindow:p,liveEdgeStartOffset:q,lowLatency:r});if(s===l){v?(c.config.backBufferLength=null!=(d=c.userConfig.backBufferLength)?d:4,c.config.maxFragLookUpTolerance=null!=(e=c.userConfig.maxFragLookUpTolerance)?e:.001,c.config.abrBandWidthUpFactor=null!=(f=c.userConfig.abrBandWidthUpFactor)?f:c.config.abrBandWidthFactor):c.config.backBufferLength=null!=(g=c.userConfig.backBufferLength)?g:8;let a=Object.freeze({get length(){return b.seekable.length},start:a=>b.seekable.start(a),end(a){var d;return a>this.length||a<0||Number.isFinite(b.duration)?b.seekable.end(a):null!=(d=c.liveSyncPosition)?d:b.seekable.end(a)}});(null!=(h=aq.get(b))?h:{}).seekable=a}(null!=(i=aq.get(b))?i:{}).liveEdgeStartOffset=u,(null!=(j=aq.get(b))?j:{}).targetLiveWindow=t,b.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(k=aq.get(b))?k:{}).streamType=s,b.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(d.details,b,c),q(),az(b)!==l||Number.isFinite(b.duration)||(c.on(e.Events.LEVEL_UPDATED,q),t(b,"durationchange",()=>{Number.isFinite(b.duration)&&c.off(e.Events.LEVELS_UPDATED,q)}))});let j=null!=(i=a.maxReconnectRetries)?i:0,m=j>0?(({hls:a,mediaEl:b,src:c,muxMediaState:d,saveAndDispatchError:g,maxRetries:i})=>{var j;let k,l=0,m=!1,n=!1,o=!1,p=()=>{null!=k&&(clearTimeout(k),k=void 0)},q=a=>(null==a?void 0:a.muxCode)===2000003,r=()=>{!o&&c?a.loadSource(c):a.startLoad(b.currentTime)},s=()=>{let a=d.get(b);!(null!=a&&a.networkError)||n||!b.paused&&b.readyState<HTMLMediaElement.HAVE_FUTURE_DATA&&((()=>{let a=d.get(b);if(q(null==a?void 0:a.error))return;let c=new h(E("Attempting to reconnect..."),h.MEDIA_ERR_NETWORK,!1);c.errorCategory=f,c.muxCode=2000003,a&&(a.error=c),b.dispatchEvent(new CustomEvent("error",{detail:c}))})(),(()=>{if(null==k&&!m){if(l>=i){let a;return m=!1,n=!0,p(),(a=new h(E("Network error, try reloading."),h.MEDIA_ERR_NETWORK,!0)).errorCategory=f,a.reload=!0,g(b,a)}m=!0,k=setTimeout(()=>{k=void 0,l+=1,r()},Math.min(1e3*2**l,3e4))}})())},u=()=>{let a=d.get(b);null!=a&&a.networkError&&(l=0,n=!1,p(),m=!0,r())};return null==(j=globalThis.addEventListener)||j.call(globalThis,"online",u),a.on(e.Events.FRAG_BUFFERED,()=>{let a=d.get(b);a&&(a.networkError||q(a.error))&&(a.networkError=!1,m=!1,l=0,n=!1,p(),a.error&&(a.error=null,b.dispatchEvent(new Event("emptied"))))}),t(b,"playing",()=>{let a=d.get(b);null!=a&&a.networkError&&(m=!1,l=0,n=!1,p(),a.error&&(a.error=null))}),t(b,"waiting",s),b.addEventListener("teardown",()=>{var a;null==(a=globalThis.removeEventListener)||a.call(globalThis,"online",u),p()},{once:!0}),{handleHlsError:(a,c)=>{var f,g;let h;if(a.type!==e.ErrorTypes.NETWORK_ERROR)return!1;let i=null!=(g=null==(f=a.response)?void 0:f.code)?g:0;return(2000002===c.muxCode||0===i||i>=500)&&!!a.fatal&&((h=d.get(b))&&(h.networkError=!0),m=!1,s(),!0)},onManifestLoaded:()=>{o=!0,m=!1,p()}}})({hls:c,mediaEl:b,src:k,muxMediaState:aq,saveAndDispatchError:aV,maxRetries:j}):void 0;c.on(e.Events.ERROR,(d,e)=>{var f,g;let i=a9(e,a);if(2412e3===i.muxCode){let a=null!=(f=aq.get(b))?f:{},d=null!=(g=a.retryCount)?g:0;if(d<6){let f=0===d?5e3:6e4,g=new h(`Retrying in ${f/1e3} seconds...`,i.code,i.fatal);Object.assign(g,i),aV(b,g);let j=setTimeout(()=>{a.retryCount=d+1,"manifestLoadError"===e.details&&e.url&&c.loadSource(e.url)},f);b.addEventListener("teardown",()=>clearTimeout(j),{once:!0});return}{a.retryCount=0;let c=new h("Network error, try reloading.",i.code,i.fatal);Object.assign(c,i),c.reload=!0,aV(b,c);return}}null!=m&&m.handleHlsError(e,i)||aV(b,i)}),c.on(e.Events.MANIFEST_LOADED,()=>{null==m||m.onManifestLoaded();let a=aq.get(b);null!=a&&a.networkError||a&&a.error&&(a.error=null,a.retryCount=0,b.dispatchEvent(new Event("emptied")),b.dispatchEvent(new Event("loadstart")))}),b.addEventListener("error",aW),t(b,"waiting",n),function(a,b){var c;if(!("videoTracks"in a))return;let d=new WeakMap;b.on(e.Events.MANIFEST_PARSED,function(b,c){i();let e=a.addVideoTrack("main");for(let[a,b]of(e.selected=!0,c.levels.entries())){let c=e.addRendition(b.url[0],b.width,b.height,b.videoCodec,b.bitrate);d.set(b,`${a}`),c.id=`${a}`}}),b.on(e.Events.AUDIO_TRACKS_UPDATED,function(b,c){for(let b of(h(),c.audioTracks)){let c=b.default?"main":"alternative",d=a.addAudioTrack(c,b.name,b.lang);d.id=`${b.id}`,b.default&&(d.enabled=!0)}});let f=()=>{var c;let d=+(null==(c=[...a.audioTracks].find(a=>a.enabled))?void 0:c.id),e=b.audioTracks.map(a=>a.id);d!=b.audioTrack&&e.includes(d)&&(b.audioTrack=d)};a.audioTracks.addEventListener("change",f),b.on(e.Events.LEVELS_UPDATED,function(b,c){var e;let f=a.videoTracks[null!=(e=a.videoTracks.selectedIndex)?e:0];if(!f)return;let g=c.levels.map(a=>d.get(a));for(let b of a.videoRenditions)b.id&&!g.includes(b.id)&&f.removeRendition(b)});let g=a=>{let c=a.target.selectedIndex;c!=b.nextLevel&&(b.nextLevel=c)};null==(c=a.videoRenditions)||c.addEventListener("change",g);let h=()=>{for(let b of a.audioTracks)a.removeAudioTrack(b)},i=()=>{(()=>{for(let b of a.videoTracks)a.removeVideoTrack(b)})(),h()};b.once(e.Events.DESTROYING,()=>{var b,c;i(),null==(b=a.audioTracks)||b.removeEventListener("change",f),null==(c=a.videoRenditions)||c.removeEventListener("change",g)})}(a,c),c.on(e.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(a,{tracks:d})=>{d.forEach(a=>{var d,e;let f=null!=(d=a.subtitleTrack)?d:a.closedCaptions,g=c.subtitleTracks.findIndex(({lang:b,name:c,type:d})=>b==(null==f?void 0:f.lang)&&c===a.label&&d.toLowerCase()===a.kind),h=(null!=(e=a._id)?e:a.default)?"default":`${a.kind}${g}`;K(b,a.kind,a.label,null==f?void 0:f.lang,h,a.default)})}),d=()=>{if(!c.subtitleTracks.length)return;let a=Array.from(b.textTracks).find(a=>a.id&&"showing"===a.mode&&["subtitles","captions"].includes(a.kind));if(!a)return;let d=c.subtitleTracks[c.subtitleTrack],e=d?d.default?"default":`${c.subtitleTracks[c.subtitleTrack].type.toLowerCase()}${c.subtitleTrack}`:void 0;if(c.subtitleTrack<0||(null==a?void 0:a.id)!==e){let b=c.subtitleTracks.findIndex(({lang:b,name:c,type:d,default:e})=>"default"===a.id&&e||b==a.language&&c===a.label&&d.toLowerCase()===a.kind);c.subtitleTrack=b}(null==a?void 0:a.id)===e&&a.cues&&Array.from(a.cues).forEach(b=>{a.addCue(b)})},b.textTracks.addEventListener("change",d),c.on(e.Events.CUES_PARSED,(a,{track:c,cues:d})=>{let e=b.textTracks.getTrackById(c);if(!e)return;let f="disabled"===e.mode;f&&(e.mode="hidden"),d.forEach(a=>{var b;null!=(b=e.cues)&&b.getCueById(a.id)||e.addCue(a)}),f&&(e.mode="disabled")}),c.once(e.Events.DESTROYING,()=>{b.textTracks.removeEventListener("change",d),b.querySelectorAll("track[data-removeondestroy]").forEach(a=>{a.remove()})}),g=()=>{Array.from(b.textTracks).forEach(a=>{var c,d;if(!["subtitles","caption"].includes(a.kind)&&("thumbnails"===a.label||"chapters"===a.kind)){if(!(null!=(c=a.cues)&&c.length)){let c="track";a.kind&&(c+=`[kind="${a.kind}"]`),a.label&&(c+=`[label="${a.label}"]`);let e=b.querySelector(c),f=null!=(d=null==e?void 0:e.getAttribute("src"))?d:"";null==e||e.removeAttribute("src"),setTimeout(()=>{null==e||e.setAttribute("src",f)},0)}"hidden"!==a.mode&&(a.mode="hidden")}})},c.once(e.Events.MANIFEST_LOADED,g),c.once(e.Events.MEDIA_ATTACHED,g),c.attachMedia(b)}else console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function aT(a){var b;let c=a.target,d=null==(b=aq.get(c))?void 0:b.startTime;if(d&&function(a,b,c){b&&c>b&&(c=b);for(let b=0;b<a.length;b++)if(a.start(b)<=c&&a.end(b)>=c)return!0;return!1}(c.seekable,c.duration,d)){let a="auto"===c.preload;a&&(c.preload="none"),c.currentTime=d,a&&(c.preload="auto")}}async function aU(a){if(!a.isTrusted)return;a.stopImmediatePropagation();let b=a.target;if(!(null!=b&&b.error))return;let{message:c,code:d}=b.error,e=new h(c,d);if(b.src&&d===h.MEDIA_ERR_SRC_NOT_SUPPORTED&&b.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var a;let c=null!=(a=ay(b))?a:b.error;(null==c?void 0:c.code)===h.MEDIA_ERR_SRC_NOT_SUPPORTED&&aV(b,e)},500);if(b.src&&(d!==h.MEDIA_ERR_DECODE||void 0!==d))try{let{status:a}=await fetch(b.src);e.data={response:{code:a}}}catch{}aV(b,e)}function aV(a,b){var c;b.fatal&&((null!=(c=aq.get(a))?c:{}).error=b,a.dispatchEvent(new CustomEvent("error",{detail:b})))}function aW(a){var b,c;if(!(a instanceof CustomEvent)||!(a.detail instanceof h))return;let d=a.target,e=a.detail;e&&e.fatal&&((null!=(b=aq.get(d))?b:{}).error=e,null==(c=d.mux)||c.emit("error",{player_error_code:e.code,player_error_message:e.message,player_error_context:e.context}))}var aX,aY,aZ,a$,a_,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=(a,b)=>{var c,d,g;a.fatal?console.error("getErrorFromHlsErrorData()",a):b.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",a);let i={[e.ErrorTypes.NETWORK_ERROR]:h.MEDIA_ERR_NETWORK,[e.ErrorTypes.MEDIA_ERROR]:h.MEDIA_ERR_DECODE,[e.ErrorTypes.KEY_SYSTEM_ERROR]:h.MEDIA_ERR_ENCRYPTED},j,k=[e.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,e.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(a.details)?h.MEDIA_ERR_NETWORK:i[a.type];if(k===h.MEDIA_ERR_NETWORK&&a.response){let g=null!=(c=a.type===e.ErrorTypes.KEY_SYSTEM_ERROR?"drm":a.type===e.ErrorTypes.NETWORK_ERROR?f:void 0)?c:f;j=null!=(d=Z(a.response,g,b,a.fatal))?d:new h("",k,a.fatal)}else k===h.MEDIA_ERR_ENCRYPTED?a.details===e.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((j=new h(E("Attempting to play DRM-protected content without providing a DRM token."),h.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory="drm",j.muxCode=5000002):a.details===e.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((j=new h(E("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),h.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory="drm",j.muxCode=5000001):a.details===e.ErrorDetails.KEY_SYSTEM_NO_SESSION?((j=new h(E("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),h.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",j.muxCode=5000002):a.details===e.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((j=new h(E("Failed to update DRM license. This may be an issue with the player or your protected content."),h.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory="drm",j.muxCode=5000003):a.details===e.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((j=new h(E("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),h.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory="drm",j.muxCode=5000004):a.details===e.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((j=new h(E("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),h.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory="drm",j.muxCode=5000005):a.details===e.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((j=new h(E("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),h.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",j.muxCode=5000006):((j=new h(a.error.message,h.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory="drm",j.muxCode=5e6):j=new h("",k,a.fatal);return j.context||(j.context=`${a.url?`url: ${a.url}
`:""}${a.response&&(a.response.code||a.response.text)?`response: ${a.response.code}, ${a.response.text}
`:""}${a.reason?`failure reason: ${a.reason}
`:""}${a.level?`level: ${a.level}
`:""}${a.parent?`parent stream controller: ${a.parent}
`:""}${a.buffer?`buffer length: ${a.buffer}
`:""}${a.error?`error: ${a.error}
`:""}${a.event?`event: ${a.event}
`:""}${a.err?`error message: ${null==(g=a.err)?void 0:g.message}
`:""}`),j.data=a,j},ba=a.i(96274),bb=a=>{throw TypeError(a)},bc=(a,b,c)=>b.has(a)||bb("Cannot "+c),bd=(a,b,c)=>(bc(a,b,"read from private field"),c?c.call(a):b.get(a)),be=(a,b,c)=>b.has(a)?bb("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),bf=(a,b,c,d)=>(bc(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),bg=(a,b,c)=>(bc(a,b,"access private method"),c),bh=(()=>{try{return"0.31.2"}catch{}return"UNKNOWN"})(),bi=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,bj={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",MAX_RECONNECT_RETRIES:"max-reconnect-retries",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},bk=Object.values(bj),bl="mux-video",bm=class extends ba.CustomVideoElement{constructor(){super(),be(this,a5),be(this,aX),be(this,aY),be(this,aZ,{}),be(this,a$,{}),be(this,a_),be(this,a0),be(this,a1),be(this,a2),be(this,a3,""),be(this,a4,a=>{var b,c,d;let e=(c=this.nativeEl,null==(d=aq.get(c))?void 0:d.metadata),f=null!=(b=this.metadata)?b:{};this.metadata={...e,...f},(null==e?void 0:e["com.mux.video.branding"])==="mux-free-plan"&&(bf(this,a3,"default"),this.updateLogo())}),be(this,a7),bf(this,aY,at())}static get NAME(){return bl}static get VERSION(){return bh}static get observedAttributes(){var a;return[...bk,...null!=(a=ba.CustomVideoElement.observedAttributes)?a:[]]}static getLogoHTML(a){return a&&"false"!==a?"default"===a?bi:`<img part="logo" src="${a}" />`:""}static getTemplateHTML(a={}){var b;return`
      ${ba.CustomVideoElement.getTemplateHTML(a)}
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
        ${this.getLogoHTML(null!=(b=a[bj.LOGO])?b:"")}
      </slot>
    `}get preferCmcd(){var a;return null!=(a=this.getAttribute(bj.PREFER_CMCD))?a:void 0}set preferCmcd(a){a!==this.preferCmcd&&(a?p.includes(a)?this.setAttribute(bj.PREFER_CMCD,a):console.warn(`Invalid value for preferCmcd. Must be one of ${p.join()}`):this.removeAttribute(bj.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(bj.PLAYER_INIT_TIME)?+this.getAttribute(bj.PLAYER_INIT_TIME):bd(this,aY)}set playerInitTime(a){a!=this.playerInitTime&&(null==a?this.removeAttribute(bj.PLAYER_INIT_TIME):this.setAttribute(bj.PLAYER_INIT_TIME,`${+a}`))}get playerSoftwareName(){var a;return null!=(a=bd(this,a1))?a:bl}set playerSoftwareName(a){bf(this,a1,a)}get playerSoftwareVersion(){var a;return null!=(a=bd(this,a0))?a:bh}set playerSoftwareVersion(a){bf(this,a0,a)}get _hls(){var a;return null==(a=bd(this,a5,a6))?void 0:a.engine}get mux(){var a;return null==(a=this.nativeEl)?void 0:a.mux}get error(){var a;return null!=(a=ay(this.nativeEl))?a:null}get errorTranslator(){return bd(this,a2)}set errorTranslator(a){bf(this,a2,a)}get src(){return this.getAttribute("src")}set src(a){a!==this.src&&(null==a?this.removeAttribute("src"):this.setAttribute("src",a))}get type(){var a;return null!=(a=this.getAttribute(bj.TYPE))?a:void 0}set type(a){a!==this.type&&(a?this.setAttribute(bj.TYPE,a):this.removeAttribute(bj.TYPE))}get preload(){let a=this.getAttribute("preload");return""===a?"auto":["none","metadata","auto"].includes(a)?a:super.preload}set preload(a){a!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(a)?this.setAttribute("preload",a):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(bj.DEBUG)}set debug(a){a!==this.debug&&(a?this.setAttribute(bj.DEBUG,""):this.removeAttribute(bj.DEBUG))}get disableTracking(){return this.hasAttribute(bj.DISABLE_TRACKING)}set disableTracking(a){a!==this.disableTracking&&this.toggleAttribute(bj.DISABLE_TRACKING,!!a)}get disableCookies(){return this.hasAttribute(bj.DISABLE_COOKIES)}set disableCookies(a){a!==this.disableCookies&&(a?this.setAttribute(bj.DISABLE_COOKIES,""):this.removeAttribute(bj.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(bj.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(a){a!==this.disablePseudoEnded&&(a?this.setAttribute(bj.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(bj.DISABLE_PSEUDO_ENDED))}get maxReconnectRetries(){let a=this.getAttribute(bj.MAX_RECONNECT_RETRIES);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set maxReconnectRetries(a){a!==this.maxReconnectRetries&&(null==a?this.removeAttribute(bj.MAX_RECONNECT_RETRIES):this.setAttribute(bj.MAX_RECONNECT_RETRIES,`${a}`))}get startTime(){let a=this.getAttribute(bj.START_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set startTime(a){a!==this.startTime&&(null==a?this.removeAttribute(bj.START_TIME):this.setAttribute(bj.START_TIME,`${a}`))}get initialBandwidthEstimateKbps(){let a=this.getAttribute(bj.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set initialBandwidthEstimateKbps(a){a!==this.initialBandwidthEstimateKbps&&(null==a?this.removeAttribute(bj.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(bj.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${a}`))}get initialEstimateSegments(){let a=this.getAttribute(bj.INITIAL_ESTIMATE_SEGMENTS);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set initialEstimateSegments(a){a!==this.initialEstimateSegments&&(null==a?this.removeAttribute(bj.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(bj.INITIAL_ESTIMATE_SEGMENTS,`${a}`))}get minPreloadSegments(){let a=this.getAttribute(bj.MIN_PRELOAD_SEGMENTS);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set minPreloadSegments(a){a!==this.minPreloadSegments&&(null==a?this.removeAttribute(bj.MIN_PRELOAD_SEGMENTS):this.setAttribute(bj.MIN_PRELOAD_SEGMENTS,`${a}`))}get playbackId(){var a;return this.hasAttribute(bj.PLAYBACK_ID)?this.getAttribute(bj.PLAYBACK_ID):null!=(a=ax(this.src))?a:void 0}set playbackId(a){a!==this.playbackId&&(a?this.setAttribute(bj.PLAYBACK_ID,a):this.removeAttribute(bj.PLAYBACK_ID))}get maxResolution(){var a;return null!=(a=this.getAttribute(bj.MAX_RESOLUTION))?a:void 0}set maxResolution(a){a!==this.maxResolution&&(a?this.setAttribute(bj.MAX_RESOLUTION,a):this.removeAttribute(bj.MAX_RESOLUTION))}get minResolution(){var a;return null!=(a=this.getAttribute(bj.MIN_RESOLUTION))?a:void 0}set minResolution(a){a!==this.minResolution&&(a?this.setAttribute(bj.MIN_RESOLUTION,a):this.removeAttribute(bj.MIN_RESOLUTION))}get maxAutoResolution(){var a;return null!=(a=this.getAttribute(bj.MAX_AUTO_RESOLUTION))?a:void 0}set maxAutoResolution(a){null==a?this.removeAttribute(bj.MAX_AUTO_RESOLUTION):this.setAttribute(bj.MAX_AUTO_RESOLUTION,a)}get renditionOrder(){var a;return null!=(a=this.getAttribute(bj.RENDITION_ORDER))?a:void 0}set renditionOrder(a){a!==this.renditionOrder&&(a?this.setAttribute(bj.RENDITION_ORDER,a):this.removeAttribute(bj.RENDITION_ORDER))}get programStartTime(){let a=this.getAttribute(bj.PROGRAM_START_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set programStartTime(a){null==a?this.removeAttribute(bj.PROGRAM_START_TIME):this.setAttribute(bj.PROGRAM_START_TIME,`${a}`)}get programEndTime(){let a=this.getAttribute(bj.PROGRAM_END_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set programEndTime(a){null==a?this.removeAttribute(bj.PROGRAM_END_TIME):this.setAttribute(bj.PROGRAM_END_TIME,`${a}`)}get assetStartTime(){let a=this.getAttribute(bj.ASSET_START_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set assetStartTime(a){null==a?this.removeAttribute(bj.ASSET_START_TIME):this.setAttribute(bj.ASSET_START_TIME,`${a}`)}get assetEndTime(){let a=this.getAttribute(bj.ASSET_END_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set assetEndTime(a){null==a?this.removeAttribute(bj.ASSET_END_TIME):this.setAttribute(bj.ASSET_END_TIME,`${a}`)}get customDomain(){var a;return null!=(a=this.getAttribute(bj.CUSTOM_DOMAIN))?a:void 0}set customDomain(a){a!==this.customDomain&&(a?this.setAttribute(bj.CUSTOM_DOMAIN,a):this.removeAttribute(bj.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var a;return(null==(a=this._hlsConfig)?void 0:a.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:bd(this,a7)}set capRenditionToPlayerSize(a){bf(this,a7,a)}get drmToken(){var a;return null!=(a=this.getAttribute(bj.DRM_TOKEN))?a:void 0}set drmToken(a){a!==this.drmToken&&(a?this.setAttribute(bj.DRM_TOKEN,a):this.removeAttribute(bj.DRM_TOKEN))}get playbackToken(){var a,b,c,d;if(this.hasAttribute(bj.PLAYBACK_TOKEN))return null!=(a=this.getAttribute(bj.PLAYBACK_TOKEN))?a:void 0;if(this.hasAttribute(bj.PLAYBACK_ID)){let[,a]=u(null!=(b=this.playbackId)?b:"");return null!=(c=new URLSearchParams(a).get("token"))?c:void 0}if(this.src)return null!=(d=new URLSearchParams(this.src).get("token"))?d:void 0}set playbackToken(a){a!==this.playbackToken&&(a?this.setAttribute(bj.PLAYBACK_TOKEN,a):this.removeAttribute(bj.PLAYBACK_TOKEN))}get tokens(){let a=this.getAttribute(bj.PLAYBACK_TOKEN),b=this.getAttribute(bj.DRM_TOKEN);return{...bd(this,a$),...null!=a?{playback:a}:{},...null!=b?{drm:b}:{}}}set tokens(a){bf(this,a$,null!=a?a:{})}get ended(){return aE(this.nativeEl,this._hls)}get envKey(){var a;return null!=(a=this.getAttribute(bj.ENV_KEY))?a:void 0}set envKey(a){a!==this.envKey&&(a?this.setAttribute(bj.ENV_KEY,a):this.removeAttribute(bj.ENV_KEY))}get beaconCollectionDomain(){var a;return null!=(a=this.getAttribute(bj.BEACON_COLLECTION_DOMAIN))?a:void 0}set beaconCollectionDomain(a){a!==this.beaconCollectionDomain&&(a?this.setAttribute(bj.BEACON_COLLECTION_DOMAIN,a):this.removeAttribute(bj.BEACON_COLLECTION_DOMAIN))}get streamType(){var a;return null!=(a=this.getAttribute(bj.STREAM_TYPE))?a:az(this.nativeEl)}set streamType(a){a!==this.streamType&&(a?this.setAttribute(bj.STREAM_TYPE,a):this.removeAttribute(bj.STREAM_TYPE))}get targetLiveWindow(){var a,b,c;return this.hasAttribute(bj.TARGET_LIVE_WINDOW)?+this.getAttribute(bj.TARGET_LIVE_WINDOW):(a=this.nativeEl,null!=(c=null==(b=aq.get(a))?void 0:b.targetLiveWindow)?c:NaN)}set targetLiveWindow(a){a!=this.targetLiveWindow&&(null==a?this.removeAttribute(bj.TARGET_LIVE_WINDOW):this.setAttribute(bj.TARGET_LIVE_WINDOW,`${+a}`))}get liveEdgeStart(){var a,b;if(this.hasAttribute(bj.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:c}=this,d=null!=(a=this.nativeEl.seekable.end(0))?a:0;return Math.max(null!=(b=this.nativeEl.seekable.start(0))?b:0,d-c)}return(a=>{var b;let c=null==(b=aq.get(a))?void 0:b.liveEdgeStartOffset;if("number"!=typeof c)return NaN;let d=aA(a);return d.length?d.end(d.length-1)-c:NaN})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(bj.LIVE_EDGE_OFFSET))return+this.getAttribute(bj.LIVE_EDGE_OFFSET)}set liveEdgeOffset(a){a!=this.liveEdgeOffset&&(null==a?this.removeAttribute(bj.LIVE_EDGE_OFFSET):this.setAttribute(bj.LIVE_EDGE_OFFSET,`${+a}`))}get seekable(){return aA(this.nativeEl)}async addCuePoints(a){return this.nativeEl.currentSrc||console.warn("addCuePoints() was called before the media element has loaded. Wait for the loadstart event before calling addCuePoints()."),P(this.nativeEl,a)}get activeCuePoint(){return R(this.nativeEl)}get cuePoints(){return function(a,b={label:N}){let c=L(a,b.label,"metadata");return null!=c&&c.cues?Array.from(c.cues,a=>Q(a)):[]}(this.nativeEl)}async addChapters(a){return this.nativeEl.currentSrc||console.warn("addChapters() was called before the media element has loaded. Wait for the loadstart event before calling addChapters()."),W(this.nativeEl,a)}get activeChapter(){return X(this.nativeEl)}get chapters(){return function(a,b={label:T}){var c;let d=L(a,b.label,"chapters");return null!=(c=null==d?void 0:d.cues)&&c.length?Array.from(d.cues,a=>V(a)):[]}(this.nativeEl)}getStartDate(){return function(a,b){if(b){let c=b.playingDate;if(null!=c)return new Date(c.getTime()-1e3*a.currentTime)}return"function"==typeof a.getStartDate?a.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var a,b;return a=this.nativeEl,(b=this._hls)&&b.playingDate?b.playingDate:new Date("function"==typeof a.getStartDate?a.getStartDate().getTime()+1e3*a.currentTime:NaN)}get preferPlayback(){let a=this.getAttribute(bj.PREFER_PLAYBACK);if("mse"===a||a===n)return a}set preferPlayback(a){a!==this.preferPlayback&&("mse"===a||a===n?this.setAttribute(bj.PREFER_PLAYBACK,a):this.removeAttribute(bj.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(a=>a.startsWith("metadata-")&&![bj.METADATA_URL].includes(a)).reduce((a,b)=>{let c=this.getAttribute(b);return null!=c&&(a[b.replace(/^metadata-/,"").replace(/-/g,"_")]=c),a},{}),...bd(this,aZ)}}set metadata(a){bf(this,aZ,null!=a?a:{}),this.mux&&this.mux.emit("hb",bd(this,aZ))}get _hlsConfig(){return bd(this,a_)}set _hlsConfig(a){bf(this,a_,a)}get logo(){var a;return null!=(a=this.getAttribute(bj.LOGO))?a:bd(this,a3)}set logo(a){a?this.setAttribute(bj.LOGO,a):this.removeAttribute(bj.LOGO)}load(){aF(this,this.nativeEl,bd(this,a5,a6))}unload(){aG(this.nativeEl,bd(this,a5,a6),this)}attributeChangedCallback(a,b,c){var d,e;switch(ba.CustomVideoElement.observedAttributes.includes(a)&&!["src","autoplay","preload"].includes(a)&&super.attributeChangedCallback(a,b,c),a){case bj.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=c?c:void 0;break;case bj.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=c?c:void 0;break;case"src":{let a=!!b,d=!!c;!a&&d?bg(this,a5,a8).call(this):a&&!d?this.unload():a&&d&&(this.unload(),bg(this,a5,a8).call(this));break}case"autoplay":if(c===b)break;null==(d=bd(this,a5,a6))||d.setAutoplay(this.autoplay);break;case"preload":if(c===b)break;null==(e=bd(this,a5,a6))||e.setPreload(c);break;case bj.PLAYBACK_ID:case bj.CUSTOM_DOMAIN:case bj.MAX_RESOLUTION:case bj.MIN_RESOLUTION:case bj.RENDITION_ORDER:case bj.PROGRAM_START_TIME:case bj.PROGRAM_END_TIME:case bj.ASSET_START_TIME:case bj.ASSET_END_TIME:case bj.PLAYBACK_TOKEN:this.src=av(this);break;case bj.DEBUG:{let a=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=a);break}case bj.METADATA_URL:c&&fetch(c).then(a=>a.json()).then(a=>this.metadata=a).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${c}!`));break;case bj.STREAM_TYPE:(null==c||c!==b)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case bj.TARGET_LIVE_WINDOW:(null==c||c!==b)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case bj.LOGO:(null==c||c!==b)&&this.updateLogo();break;case bj.DISABLE_TRACKING:if(null==c||c!==b){let a=this.currentTime,b=this.paused;this.unload(),bg(this,a5,a8).call(this).then(()=>{this.currentTime=a,b||this.play()})}break;case bj.DISABLE_COOKIES:(null==c||c!==b)&&this.disableCookies&&document.cookie.split(";").forEach(a=>{a.trim().startsWith("muxData")&&(document.cookie=a.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break;case bj.CAP_RENDITION_TO_PLAYER_SIZE:(null==c||c!==b)&&(this.capRenditionToPlayerSize=null!=c||void 0)}}updateLogo(){if(!this.shadowRoot)return;let a=this.shadowRoot.querySelector('slot[name="logo"]');a&&(a.innerHTML=this.constructor.getLogoHTML(bd(this,a3)||this.logo))}connectedCallback(){var a,b;null==(a=super.connectedCallback)||a.call(this),null==(b=this.nativeEl)||b.addEventListener("muxmetadata",bd(this,a4)),this.nativeEl&&this.src&&!bd(this,a5,a6)&&bg(this,a5,a8).call(this)}disconnectedCallback(){var a,b;null==(a=this.nativeEl)||a.removeEventListener("muxmetadata",bd(this,a4)),this.unload(),null==(b=super.disconnectedCallback)||b.call(this)}handleEvent(a){a.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(a.type,{composed:!0,detail:a.detail}))}};aX=new WeakMap,aY=new WeakMap,aZ=new WeakMap,a$=new WeakMap,a_=new WeakMap,a0=new WeakMap,a1=new WeakMap,a2=new WeakMap,a3=new WeakMap,a4=new WeakMap,a5=new WeakSet,a6=function(){var a,b;return a=this.nativeEl,null==(b=aq.get(a))?void 0:b.coreReference},a7=new WeakMap,a8=async function(){bd(this,aX)||(await bf(this,aX,Promise.resolve()),bf(this,aX,null),this.load())};var bn=a.i(229602);a.i(742014);var bo=a.i(737399),bp=a=>{throw TypeError(a)},bq=(a,b,c)=>b.has(a)||bp("Cannot "+c),br=(a,b,c)=>(bq(a,b,"read from private field"),c?c.call(a):b.get(a)),bs=(a,b,c)=>b.has(a)?bp("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),bt=(a,b,c,d)=>(bq(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),bu=class{addEventListener(){}removeEventListener(){}dispatchEvent(a){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends bu{});var bv,bw=class extends bu{},bx=class{constructor(a,b={}){bs(this,bv),bt(this,bv,null==b?void 0:b.detail)}get detail(){return br(this,bv)}initCustomEvent(){}};bv=new WeakMap;var by={document:{createElement:function(a,b){return new bw}},DocumentFragment,customElements:{get(a){},define(a,b,c){},getName:a=>null,upgrade(a){},whenDefined:a=>Promise.resolve(bw)},CustomEvent:bx,EventTarget:bu,HTMLElement:bw,HTMLVideoElement:class extends bu{}};by.document;var bz,bA=class extends(0,bn.CastableMediaMixin)((0,bo.MediaTracksMixin)(bm)){constructor(){super(...arguments),bs(this,bz)}get autoplay(){let a=this.getAttribute("autoplay");return null!==a&&(""===a||a)}set autoplay(a){a!==this.autoplay&&(a?this.setAttribute("autoplay","string"==typeof a?a:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var a;return null!=(a=br(this,bz))?a:this.muxCastCustomData}set castCustomData(a){bt(this,bz,a)}};bz=new WeakMap,by.customElements.get("mux-video")||(by.customElements.define("mux-video",bA),by.MuxVideoElement=bA),a.i(409757);var bB=a.i(337518),bC=a.i(104357),bD=a.i(737755),bE=a.i(362627),bF=a.i(353869),bG=a.i(564301);a.i(842517);var bH=a=>{throw TypeError(a)},bI=(a,b,c)=>b.has(a)||bH("Cannot "+c),bJ=(a,b,c)=>(bI(a,b,"read from private field"),c?c.call(a):b.get(a)),bK=(a,b,c)=>b.has(a)?bH("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),bL=(a,b,c,d)=>(bI(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),bM=(a,b,c)=>(bI(a,b,"access private method"),c),bN=class{addEventListener(){}removeEventListener(){}dispatchEvent(a){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends bN{});var bO,bP=class extends bN{},bQ=class{constructor(a,b={}){bK(this,bO),bL(this,bO,null==b?void 0:b.detail)}get detail(){return bJ(this,bO)}initCustomEvent(){}};bO=new WeakMap;var bR={document:{createElement:function(a,b){return new bP}},DocumentFragment,customElements:{get(a){},define(a,b,c){},getName:a=>null,upgrade(a){},whenDefined:a=>Promise.resolve(bP)},CustomEvent:bQ,EventTarget:bN,HTMLElement:bP,HTMLVideoElement:class extends bN{}},bS=bR,bT=bR.document;function bU(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function bV(a){return a.replace(/[-_]([a-z])/g,(a,b)=>b.toUpperCase())}function bW(a){if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}function bX(a){let b=(function(a){let b={};for(let c in a)null!=a[c]&&(b[c]=a[c]);return new URLSearchParams(b)})(a).toString();return b?"?"+b:""}var bY,bZ,b$,b_=(a,b)=>!!a&&!!b&&(!!a.contains(b)||b_(a,b.getRootNode().host)),b0="mux.com",b1=(()=>{try{return"3.13.2"}catch{}return"UNKNOWN"})(),b2=a=>{if(a){if([l,k].includes(a))return a;if(null!=a&&a.includes("live"))return l}},b3={crossorigin:"crossOrigin",playsinline:"playsInline"},b4=class{constructor(a,b){bK(this,bY),bK(this,bZ),bK(this,b$,[]),bL(this,bY,a),bL(this,bZ,b)}[Symbol.iterator](){return bJ(this,b$).values()}get length(){return bJ(this,b$).length}get value(){var a;return null!=(a=bJ(this,b$).join(" "))?a:""}set value(a){var b;a!==this.value&&(bL(this,b$,[]),this.add(...null!=(b=null==a?void 0:a.split(" "))?b:[]))}toString(){return this.value}item(a){return bJ(this,b$)[a]}values(){return bJ(this,b$).values()}keys(){return bJ(this,b$).keys()}forEach(a){bJ(this,b$).forEach(a)}add(...a){var b,c;a.forEach(a=>{this.contains(a)||bJ(this,b$).push(a)}),(""!==this.value||null!=(b=bJ(this,bY))&&b.hasAttribute(`${bJ(this,bZ)}`))&&null!=(c=bJ(this,bY))&&c.setAttribute(`${bJ(this,bZ)}`,`${this.value}`)}remove(...a){var b;a.forEach(a=>{bJ(this,b$).splice(bJ(this,b$).indexOf(a),1)}),null==(b=bJ(this,bY))||b.setAttribute(`${bJ(this,bZ)}`,`${this.value}`)}contains(a){return bJ(this,b$).includes(a)}toggle(a,b){return void 0!==b?b?(this.add(a),!0):(this.remove(a),!1):this.contains(a)?(this.remove(a),!1):(this.add(a),!0)}replace(a,b){this.remove(a),this.add(b)}};bY=new WeakMap,bZ=new WeakMap,b$=new WeakMap;var b5=`[mux-player ${b1}]`;function b6(...a){console.warn(b5,...a)}function b7(...a){console.error(b5,...a)}function b8(a){var b;let c=null!=(b=a.message)?b:"";a.context&&(c+=` ${a.context}`),a.file&&(c+=` ${E("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${a.file}`),b6(c)}var b9={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},ca={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},cb=Object.freeze({length:0,start(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),cc=[...Object.values(b9).filter(a=>b9.PLAYSINLINE!==a),...Object.values(ca)];function cd(a,b){return a.media?a.media.getAttribute(b):a.getAttribute(b)}var ce=class extends bS.HTMLElement{static get observedAttributes(){return cc}constructor(){super()}attributeChangedCallback(a,b,c){var d,e;switch(a){case ca.MUTED:this.media&&(this.media.muted=null!=c,this.media.defaultMuted=null!=c);return;case ca.VOLUME:{let a=null!=(d=bW(c))?d:1;this.media&&(this.media.volume=a);return}case ca.PLAYBACKRATE:{let a=null!=(e=bW(c))?e:1;this.media&&(this.media.playbackRate=a,this.media.defaultPlaybackRate=a);return}}}play(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.play())?b:Promise.reject()}pause(){var a;null==(a=this.media)||a.pause()}load(){var a;null==(a=this.media)||a.load()}get media(){var a;return null==(a=this.shadowRoot)?void 0:a.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var a,b;return null==(b=null==(a=this.media)?void 0:a.paused)||b}get duration(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.duration)?b:NaN}get ended(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.ended)&&b}get buffered(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.buffered)?b:cb}get seekable(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.seekable)?b:cb}get readyState(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.readyState)?b:0}get videoWidth(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.videoWidth)?b:0}get videoHeight(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.videoHeight)?b:0}get currentSrc(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.currentSrc)?b:""}get currentTime(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.currentTime)?b:0}set currentTime(a){this.media&&(this.media.currentTime=Number(a))}get volume(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.volume)?b:1}set volume(a){this.media&&(this.media.volume=Number(a))}get playbackRate(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.playbackRate)?b:1}set playbackRate(a){this.media&&(this.media.playbackRate=Number(a))}get defaultPlaybackRate(){var a;return null!=(a=bW(this.getAttribute(ca.PLAYBACKRATE)))?a:1}set defaultPlaybackRate(a){null!=a?this.setAttribute(ca.PLAYBACKRATE,`${a}`):this.removeAttribute(ca.PLAYBACKRATE)}get crossOrigin(){return cd(this,b9.CROSSORIGIN)}set crossOrigin(a){this.setAttribute(b9.CROSSORIGIN,`${a}`)}get autoplay(){return null!=cd(this,b9.AUTOPLAY)}set autoplay(a){a?this.setAttribute(b9.AUTOPLAY,"string"==typeof a?a:""):this.removeAttribute(b9.AUTOPLAY)}get loop(){return null!=cd(this,b9.LOOP)}set loop(a){a?this.setAttribute(b9.LOOP,""):this.removeAttribute(b9.LOOP)}get muted(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.muted)&&b}set muted(a){this.media&&(this.media.muted=!!a)}get defaultMuted(){return null!=cd(this,b9.MUTED)}set defaultMuted(a){a?this.setAttribute(b9.MUTED,""):this.removeAttribute(b9.MUTED)}get playsInline(){return null!=cd(this,b9.PLAYSINLINE)}set playsInline(a){b7("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(a){["","none","metadata","auto"].includes(a)?this.setAttribute(b9.PRELOAD,a):this.removeAttribute(b9.PRELOAD)}},cf=`:host {
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
`,cg=new WeakMap,ch=class a{constructor(a,b){this.element=a,this.type=b,this.element.addEventListener(this.type,this);let c=cg.get(this.element);c&&c.set(this.type,this)}set(a){if("function"==typeof a)this.handleEvent=a.bind(this.element);else if("object"==typeof a&&"function"==typeof a.handleEvent)this.handleEvent=a.handleEvent.bind(a);else{this.element.removeEventListener(this.type,this);let a=cg.get(this.element);a&&a.delete(this.type)}}static for(b){cg.has(b.element)||cg.set(b.element,new Map);let c=b.attributeName.slice(2),d=cg.get(b.element);return d&&d.has(c)?d.get(c):new a(b.element,c)}},ci=new Map,cj=new WeakMap,ck=new WeakMap,cl=class{constructor(a,b,c){this.strings=a,this.values=b,this.processor=c,this.stringsKey=this.strings.join("\x01")}get template(){if(ci.has(this.stringsKey))return ci.get(this.stringsKey);{let a=bT.createElement("template"),b=this.strings.length-1;return a.innerHTML=this.strings.reduce((a,c,d)=>a+c+(d<b?`{{ ${d} }}`:""),""),ci.set(this.stringsKey,a),a}}renderInto(a){var b;let c=this.template;if(cj.get(a)!==c){cj.set(a,c);let b=new bG.TemplateInstance(c,this.values,this.processor);ck.set(a,b),a instanceof bG.ChildNodePart?a.replace(...b.children):a.appendChild(b);return}let d=ck.get(a);null==(b=null==d?void 0:d.update)||b.call(d,this.values)}},cm={processCallback(a,b,c){var d;if(c)for(let[a,e]of b)a in c&&function(a,b){(function(a,b){if(a instanceof bG.AttrPart&&b instanceof Element){let c=a.element;return c[a.attributeName]!==b&&(a.element.removeAttributeNS(a.attributeNamespace,a.attributeName),c[a.attributeName]=b),!0}return!1})(a,b)||function(a,b){if("boolean"==typeof b&&a instanceof bG.AttrPart){let c=a.attributeNamespace;return b!==a.element.hasAttributeNS(c,a.attributeName)&&(a.booleanValue=b),!0}return!1}(a,b)||a instanceof bG.AttrPart&&a.attributeName.startsWith("on")&&(ch.for(a).set(b),a.element.removeAttributeNS(a.attributeNamespace,a.attributeName),1)||!1===b&&a instanceof bG.ChildNodePart&&(a.replace(""),1)||b instanceof cl&&a instanceof bG.ChildNodePart&&(b.renderInto(a),1)||b instanceof DocumentFragment&&a instanceof bG.ChildNodePart&&(b.childNodes.length&&a.replace(...b.childNodes),1)||function(a,b){if(a instanceof bG.AttrPart){let c=a.attributeNamespace,d=a.element.getAttributeNS(c,a.attributeName);return String(b)!==d&&(a.value=String(b))}a.value=String(b)}(a,b)}(e,null!=(d=c[a])?d:"")}};function cn(a,...b){return new cl(a,b,cm)}var co=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),cp=a=>a.charAt(0).toUpperCase()+a.slice(1),cq=(a,b)=>{let c=(a=>{if(a.muxCode){if(2403210===a.muxCode)return"403-expired-token.md";if(2412202===a.muxCode)return"403-malformatted-token.md";if([2403222,2403221].includes(a.muxCode))return"403-incorrect-aud-value.md";if(2403232===a.muxCode)return"403-playback-id-mismatch.md";if(2403201===a.muxCode)return"missing-signed-tokens.md";if(2404e3===a.muxCode)return"404-not-found.md";if(2412e3===a.muxCode)return"412-not-playable.md"}if(a.code){if(a.code===h.MEDIA_ERR_NETWORK)return"";if(a.code===h.MEDIA_ERR_DECODE)return"media-decode-error.md";if(a.code===h.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(a);return{message:a.message,context:a.context,file:c}},cr=`<template id="media-theme-gerwig">
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
`,cs=bT.createElement("template");"innerHTML"in cs&&(cs.innerHTML=cr);var ct,cu,cv=class extends bF.MediaThemeElement{};cv.template=null==(cu=null==(ct=cs.content)?void 0:ct.children)?void 0:cu[0],bS.customElements.get("media-theme-gerwig")||bS.customElements.define("media-theme-gerwig",cv);var cw={SRC:"src",POSTER:"poster"},cx={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},cy=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],cz=bC.MediaErrorDialog.formatErrorMessage;function cA(a){let b=a.videoTitle?{video_title:a.videoTitle}:{};return a.getAttributeNames().filter(a=>a.startsWith("metadata-")).reduce((b,c)=>{let d=a.getAttribute(c);return null!==d&&(b[c.replace(/^metadata-/,"").replace(/-/g,"_")]=d),b},b)}bC.MediaErrorDialog.formatErrorMessage=a=>{var b,c;if(a instanceof h){let d=((a,b=!1)=>({title:((a,b=!1)=>{var c,d;if(a.muxCode){let e=cp(null!=(c=a.errorCategory)?c:"video"),h=g(null!=(d=a.errorCategory)?d:f);if(2000002===a.muxCode)return E("Your device appears to be offline",b);if(2000003===a.muxCode)return E("Reconnecting...",b);if(2403210===a.muxCode)return E("{category} URL has expired",b).format({category:e});if([2403232,2403222,2403221,2412202].includes(a.muxCode))return E("{category} URL is formatted incorrectly",b).format({category:e});if(2403201===a.muxCode)return E("Invalid {categoryName} URL",b).format({categoryName:h});if(2404e3===a.muxCode)return E("{category} does not exist",b).format({category:e});if(2412e3===a.muxCode){let c="live"===a.streamType?"Live stream":"Video";return E("{mediaType} is not currently available",b).format({mediaType:c})}}if(a.code){if(a.code===h.MEDIA_ERR_NETWORK)return E("Network Error",b);if(a.code===h.MEDIA_ERR_DECODE)return E("Media Error",b);if(a.code===h.MEDIA_ERR_SRC_NOT_SUPPORTED)return E("Source Not Supported",b)}return E("Error",b)})(a,b).toString(),message:((a,b=!1)=>{var c,d;if(a.reload)return'Try again later or <a href="#" data-mux-reload style="color: #4a90e2;">click here to retry</a>';if(a.muxCode){let e=cp(null!=(c=a.errorCategory)?c:"video"),h=g(null!=(d=a.errorCategory)?d:f);return 2000002===a.muxCode?E("Check your internet connection and try reloading this video.",b):2000003===a.muxCode?E("Your connection was interrupted. Attempting to resume playback...",b):2403210===a.muxCode?E("The video’s secured {tokenNamePrefix}-token has expired.",b).format({tokenNamePrefix:h}):2403232===a.muxCode?E("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",b).format({tokenNamePrefix:h}):2412202===a.muxCode?E("{category} URL is formatted incorrectly",b).format({category:e}):[2403222,2403221].includes(a.muxCode)?E("The {tokenNamePrefix}-token is formatted with incorrect information.",b).format({tokenNamePrefix:h}):[2403201,24e5].includes(a.muxCode)?E("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",b).format({tokenNamePrefix:h}):2404e3===a.muxCode?"":a.message}return a.code&&(a.code===h.MEDIA_ERR_NETWORK||a.code===h.MEDIA_ERR_DECODE||a.code===h.MEDIA_ERR_SRC_NOT_SUPPORTED),a.message})(a,b).toString()}))(a,!1);return`
      ${null!=d&&d.title?`<h3>${d.title}</h3>`:""}
      ${null!=d&&d.message||null!=d&&d.linkUrl?`<p>
        ${null==d?void 0:d.message}
        ${null!=d&&d.linkUrl?`<a
              href="${d.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(b=d.linkText)?b:""} ${E("(opens in a new window)")}"
              >${null!=(c=d.linkText)?c:d.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return cz(a)};var cB,cC,cD,cE,cF,cG,cH,cI,cJ,cK,cL,cM,cN,cO,cP,cQ,cR,cS,cT,cU,cV,cW,cX,cY,cZ=Object.values(bj),c$=Object.values(cw),c_=Object.values(cx),c0="mux-player",c1={isDialogOpen:!1},c2={redundant_streams:!0},c3=class extends ce{constructor(){super(),bK(this,cQ),bK(this,cB),bK(this,cC,!1),bK(this,cD,{}),bK(this,cE,!0),bK(this,cF,new b4(this,"hotkeys")),bK(this,cG),bK(this,cH,()=>bM(this,cQ,cU).call(this)),bK(this,cI,()=>bM(this,cQ,cU).call(this)),bK(this,cJ,()=>bM(this,cQ,cU).call(this)),bK(this,cK,a=>{a.composedPath().find(a=>{var b;return null==(b=null==a?void 0:a.hasAttribute)?void 0:b.call(a,"data-mux-reload")})&&(a.preventDefault(),window.location.reload())}),bK(this,cL,a=>{var b;(null==(b=a.composedPath()[0])?void 0:b.localName)==="media-error-dialog"&&bM(this,cQ,cT).call(this,{isDialogOpen:!1})}),bK(this,cM,a=>{var b;(null==(b=a.composedPath()[0])?void 0:b.localName)==="media-error-dialog"&&(b_(this,bT.activeElement)||a.preventDefault())}),bK(this,cN),bK(this,cO,{...c1}),bK(this,cP,a=>{var b;let c=null==(b=this.media)?void 0:b.error;if(!(c instanceof h)){let{message:a,code:b}=null!=c?c:{};c=new h(a,b)}if(!(null!=c&&c.fatal)){b6(c),c.data&&b6(`${c.name} data:`,c.data);return}let d=cq(c,!1);d.message&&b8(d),b7(c),c.data&&b7(`${c.name} data:`,c.data),bM(this,cQ,cT).call(this,{isDialogOpen:!0})}),bL(this,cB,at()),this.attachShadow({mode:"open"}),bM(this,cQ,cS).call(this),this.isConnected&&bM(this,cQ,cR).call(this)}static get NAME(){return c0}static get VERSION(){return b1}static get observedAttributes(){var a;return[...null!=(a=ce.observedAttributes)?a:[],...c$,...cZ,...c_]}setAttribute(a,b){super.setAttribute(a,b),a.startsWith("metadata-")&&this.media&&(this.media.metadata=cA(this))}removeAttribute(a){super.removeAttribute(a),a.startsWith("metadata-")&&this.media&&(this.media.metadata=cA(this))}get mediaTheme(){var a;return null==(a=this.shadowRoot)?void 0:a.querySelector("media-theme")}get mediaController(){var a,b;return null==(b=null==(a=this.mediaTheme)?void 0:a.shadowRoot)?void 0:b.querySelector("media-controller")}connectedCallback(){bM(this,cQ,cR).call(this);let a=this.media;a&&(a.metadata=cA(this))}disconnectedCallback(){var a,b,c,d,e,f,g,h,i,j;null==(a=bJ(this,cG))||a.disconnect(),null==(b=this.media)||b.removeEventListener("streamtypechange",bJ(this,cH)),null==(c=this.media)||c.removeEventListener("loadstart",bJ(this,cI)),this.removeEventListener("error",bJ(this,cP)),this.removeEventListener("click",bJ(this,cK)),null==(d=this.mediaTheme)||d.removeEventListener("close",bJ(this,cL)),null==(e=this.mediaTheme)||e.removeEventListener("focusin",bJ(this,cM)),this.media&&(this.media.errorTranslator=void 0),null==(g=null==(f=this.media)?void 0:f.textTracks)||g.removeEventListener("addtrack",bJ(this,cJ)),null==(i=null==(h=this.media)?void 0:h.textTracks)||i.removeEventListener("removetrack",bJ(this,cJ)),null==(j=bJ(this,cN))||j.call(this),bL(this,cN,void 0),bL(this,cC,!1)}attributeChangedCallback(a,b,c){var d;switch(bM(this,cQ,cR).call(this),super.attributeChangedCallback(a,b,c),a){case cx.HOTKEYS:bJ(this,cF).value=c;break;case cx.THUMBNAIL_TIME:null!=c&&this.tokens.thumbnail&&b6(E("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case cx.THUMBNAIL_TOKEN:if(c){let a=D(c);if(a){let{aud:b}=a;"t"!==b&&b6(E("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:b,expectedAud:"t",tokenNamePrefix:"thumbnail"}))}}break;case cx.STORYBOARD_TOKEN:if(c){let a=D(c);if(a){let{aud:b}=a;"s"!==b&&b6(E("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:b,expectedAud:"s",tokenNamePrefix:"storyboard"}))}}break;case cx.DRM_TOKEN:if(c){let a=D(c);if(a){let{aud:b}=a;"d"!==b&&b6(E("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:b,expectedAud:"d",tokenNamePrefix:"drm"}))}}break;case bj.PLAYBACK_ID:null!=c&&c.includes("?token")&&b7(E("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:c}));break;case bj.STREAM_TYPE:c&&![l,k,m].includes(c)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=c.includes("dvr")?1/0:0:b8({file:"invalid-stream-type.md",message:E("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):c===l?null==this.getAttribute(cx.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case cx.FULLSCREEN_ELEMENT:if(null!=c||c!==b){let a=bT.getElementById(c),b=null==a?void 0:a.querySelector("mux-player");this.mediaController&&a&&b&&(this.mediaController.fullscreenElement=a)}break;case bj.CAP_RENDITION_TO_PLAYER_SIZE:(null==c||c!==b)&&(this.capRenditionToPlayerSize=null!=c||void 0);break;case bj.MAX_RECONNECT_RETRIES:(null==c||c!==b)&&(this.maxReconnectRetries=Number(c))}[bj.PLAYBACK_ID,cw.SRC,cx.PLAYBACK_TOKEN].includes(a)&&b!==c&&bL(this,cO,{...bJ(this,cO),...c1}),bM(this,cQ,cU).call(this,{[null!=(d=b3[a])?d:bV(a)]:c})}async requestFullscreen(a){var b;if(!(!this.mediaController||this.mediaController.hasAttribute(bE.MediaUIAttributes.MEDIA_IS_FULLSCREEN)))return null==(b=this.mediaController)||b.dispatchEvent(new bS.CustomEvent(bE.MediaUIEvents.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((a,b)=>{var c;null==(c=this.mediaController)||c.addEventListener(bE.MediaStateChangeEvents.MEDIA_IS_FULLSCREEN,()=>a(),{once:!0})})}async exitFullscreen(){var a;if(!(!this.mediaController||!this.mediaController.hasAttribute(bE.MediaUIAttributes.MEDIA_IS_FULLSCREEN)))return null==(a=this.mediaController)||a.dispatchEvent(new bS.CustomEvent(bE.MediaUIEvents.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((a,b)=>{var c;null==(c=this.mediaController)||c.addEventListener(bE.MediaStateChangeEvents.MEDIA_IS_FULLSCREEN,()=>a(),{once:!0})})}get preferCmcd(){var a;return null!=(a=this.getAttribute(bj.PREFER_CMCD))?a:void 0}set preferCmcd(a){a!==this.preferCmcd&&(a?p.includes(a)?this.setAttribute(bj.PREFER_CMCD,a):b6(`Invalid value for preferCmcd. Must be one of ${p.join()}`):this.removeAttribute(bj.PREFER_CMCD))}get hasPlayed(){var a,b;return null!=(b=null==(a=this.mediaController)?void 0:a.hasAttribute(bE.MediaUIAttributes.MEDIA_HAS_PLAYED))&&b}get inLiveWindow(){var a;return null==(a=this.mediaController)?void 0:a.hasAttribute(bE.MediaUIAttributes.MEDIA_TIME_IS_LIVE)}get _hls(){var a;return null==(a=this.media)?void 0:a._hls}get mux(){var a;return null==(a=this.media)?void 0:a.mux}get theme(){var a;return null!=(a=this.getAttribute(cx.THEME))?a:"gerwig"}set theme(a){this.setAttribute(cx.THEME,`${a}`)}get themeProps(){let a=this.mediaTheme;if(!a)return;let b={};for(let c of a.getAttributeNames()){if(cy.includes(c))continue;let d=a.getAttribute(c);b[bV(c)]=""===d||d}return b}set themeProps(a){var b,c;bM(this,cQ,cR).call(this);let d={...this.themeProps,...a};for(let e in d){if(cy.includes(e))continue;let d=null==a?void 0:a[e];"boolean"==typeof d||null==d?null==(b=this.mediaTheme)||b.toggleAttribute(bU(e),!!d):null==(c=this.mediaTheme)||c.setAttribute(bU(e),d)}}get playbackId(){var a;return null!=(a=this.getAttribute(bj.PLAYBACK_ID))?a:void 0}set playbackId(a){a?this.setAttribute(bj.PLAYBACK_ID,a):this.removeAttribute(bj.PLAYBACK_ID)}get src(){var a,b;return this.playbackId?null!=(a=c4(this,cw.SRC))?a:void 0:null!=(b=this.getAttribute(cw.SRC))?b:void 0}set src(a){a?this.setAttribute(cw.SRC,a):this.removeAttribute(cw.SRC)}get poster(){var a;let b=this.getAttribute(cw.POSTER);if(null!=b)return b;let{tokens:c}=this;return c.playback&&!c.thumbnail?void b6("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((a,{token:b,customDomain:c=b0,thumbnailTime:d,programTime:e}={})=>{var f;let g=null==b?d:void 0,{aud:h}=null!=(f=D(b))?f:{};if(!(b&&"t"!==h))return`https://image.${c}/${a}/thumbnail.webp${bX({token:b,time:g,program_time:e})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(a=this.thumbnailTime)?a:this.startTime,programTime:this.programStartTime,token:c.thumbnail}):void 0}set poster(a){a||""===a?this.setAttribute(cw.POSTER,a):this.removeAttribute(cw.POSTER)}get storyboardSrc(){var a;return null!=(a=this.getAttribute(cx.STORYBOARD_SRC))?a:void 0}set storyboardSrc(a){a?this.setAttribute(cx.STORYBOARD_SRC,a):this.removeAttribute(cx.STORYBOARD_SRC)}get storyboard(){let{tokens:a}=this;return this.storyboardSrc&&!a.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[l,m].includes(this.streamType)||a.playback&&!a.storyboard?void 0:((a,{token:b,customDomain:c=b0,programStartTime:d,programEndTime:e}={})=>{var f;let{aud:g}=null!=(f=D(b))?f:{};if(!(b&&"s"!==g))return`https://image.${c}/${a}/storyboard.vtt${bX({token:b,format:"webp",program_start_time:d,program_end_time:e})}`})(this.playbackId,{customDomain:this.customDomain,token:a.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(cx.AUDIO)}set audio(a){a?this.setAttribute(cx.AUDIO,""):this.removeAttribute(cx.AUDIO)}get hotkeys(){return bJ(this,cF)}get nohotkeys(){return this.hasAttribute(cx.NOHOTKEYS)}set nohotkeys(a){a?this.setAttribute(cx.NOHOTKEYS,""):this.removeAttribute(cx.NOHOTKEYS)}get thumbnailTime(){return bW(this.getAttribute(cx.THUMBNAIL_TIME))}set thumbnailTime(a){this.setAttribute(cx.THUMBNAIL_TIME,`${a}`)}get videoTitle(){var a,b;return null!=(b=null!=(a=this.getAttribute(cx.VIDEO_TITLE))?a:this.getAttribute(cx.TITLE))?b:""}set videoTitle(a){a!==this.videoTitle&&(a?this.setAttribute(cx.VIDEO_TITLE,a):this.removeAttribute(cx.VIDEO_TITLE))}get placeholder(){var a;return null!=(a=c4(this,cx.PLACEHOLDER))?a:""}set placeholder(a){this.setAttribute(cx.PLACEHOLDER,`${a}`)}get primaryColor(){var a,b;let c=this.getAttribute(cx.PRIMARY_COLOR);if(null!=c||this.mediaTheme&&(c=null==(b=null==(a=bS.getComputedStyle(this.mediaTheme))?void 0:a.getPropertyValue("--_primary-color"))?void 0:b.trim()))return c}set primaryColor(a){this.setAttribute(cx.PRIMARY_COLOR,`${a}`)}get secondaryColor(){var a,b;let c=this.getAttribute(cx.SECONDARY_COLOR);if(null!=c||this.mediaTheme&&(c=null==(b=null==(a=bS.getComputedStyle(this.mediaTheme))?void 0:a.getPropertyValue("--_secondary-color"))?void 0:b.trim()))return c}set secondaryColor(a){this.setAttribute(cx.SECONDARY_COLOR,`${a}`)}get accentColor(){var a,b;let c=this.getAttribute(cx.ACCENT_COLOR);if(null!=c||this.mediaTheme&&(c=null==(b=null==(a=bS.getComputedStyle(this.mediaTheme))?void 0:a.getPropertyValue("--_accent-color"))?void 0:b.trim()))return c}set accentColor(a){this.setAttribute(cx.ACCENT_COLOR,`${a}`)}get defaultShowRemainingTime(){return this.hasAttribute(cx.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(a){a?this.setAttribute(cx.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(cx.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(cx.PLAYBACK_RATES))return this.getAttribute(cx.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(a=>Number(a)).filter(a=>!Number.isNaN(a)).sort((a,b)=>a-b)}set playbackRates(a){a?this.setAttribute(cx.PLAYBACK_RATES,a.join(" ")):this.removeAttribute(cx.PLAYBACK_RATES)}get forwardSeekOffset(){var a;return null!=(a=bW(this.getAttribute(cx.FORWARD_SEEK_OFFSET)))?a:10}set forwardSeekOffset(a){this.setAttribute(cx.FORWARD_SEEK_OFFSET,`${a}`)}get backwardSeekOffset(){var a;return null!=(a=bW(this.getAttribute(cx.BACKWARD_SEEK_OFFSET)))?a:10}set backwardSeekOffset(a){this.setAttribute(cx.BACKWARD_SEEK_OFFSET,`${a}`)}get defaultHiddenCaptions(){return this.hasAttribute(cx.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(a){a?this.setAttribute(cx.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(cx.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return bW(this.getAttribute(cx.DEFAULT_DURATION))}set defaultDuration(a){null==a?this.removeAttribute(cx.DEFAULT_DURATION):this.setAttribute(cx.DEFAULT_DURATION,`${a}`)}get playerInitTime(){return this.hasAttribute(bj.PLAYER_INIT_TIME)?bW(this.getAttribute(bj.PLAYER_INIT_TIME)):bJ(this,cB)}set playerInitTime(a){a!=this.playerInitTime&&(null==a?this.removeAttribute(bj.PLAYER_INIT_TIME):this.setAttribute(bj.PLAYER_INIT_TIME,`${+a}`))}get playerSoftwareName(){var a;return null!=(a=this.getAttribute(bj.PLAYER_SOFTWARE_NAME))?a:c0}get playerSoftwareVersion(){var a;return null!=(a=this.getAttribute(bj.PLAYER_SOFTWARE_VERSION))?a:b1}get beaconCollectionDomain(){var a;return null!=(a=this.getAttribute(bj.BEACON_COLLECTION_DOMAIN))?a:void 0}set beaconCollectionDomain(a){a!==this.beaconCollectionDomain&&(a?this.setAttribute(bj.BEACON_COLLECTION_DOMAIN,a):this.removeAttribute(bj.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var a;return null!=(a=this.getAttribute(bj.MAX_RESOLUTION))?a:void 0}set maxResolution(a){a!==this.maxResolution&&(a?this.setAttribute(bj.MAX_RESOLUTION,a):this.removeAttribute(bj.MAX_RESOLUTION))}get minResolution(){var a;return null!=(a=this.getAttribute(bj.MIN_RESOLUTION))?a:void 0}set minResolution(a){a!==this.minResolution&&(a?this.setAttribute(bj.MIN_RESOLUTION,a):this.removeAttribute(bj.MIN_RESOLUTION))}get maxAutoResolution(){var a;return null!=(a=this.getAttribute(bj.MAX_AUTO_RESOLUTION))?a:void 0}set maxAutoResolution(a){null==a?this.removeAttribute(bj.MAX_AUTO_RESOLUTION):this.setAttribute(bj.MAX_AUTO_RESOLUTION,a)}get renditionOrder(){var a;return null!=(a=this.getAttribute(bj.RENDITION_ORDER))?a:void 0}set renditionOrder(a){a!==this.renditionOrder&&(a?this.setAttribute(bj.RENDITION_ORDER,a):this.removeAttribute(bj.RENDITION_ORDER))}get programStartTime(){return bW(this.getAttribute(bj.PROGRAM_START_TIME))}set programStartTime(a){null==a?this.removeAttribute(bj.PROGRAM_START_TIME):this.setAttribute(bj.PROGRAM_START_TIME,`${a}`)}get programEndTime(){return bW(this.getAttribute(bj.PROGRAM_END_TIME))}set programEndTime(a){null==a?this.removeAttribute(bj.PROGRAM_END_TIME):this.setAttribute(bj.PROGRAM_END_TIME,`${a}`)}get assetStartTime(){return bW(this.getAttribute(bj.ASSET_START_TIME))}set assetStartTime(a){null==a?this.removeAttribute(bj.ASSET_START_TIME):this.setAttribute(bj.ASSET_START_TIME,`${a}`)}get assetEndTime(){return bW(this.getAttribute(bj.ASSET_END_TIME))}set assetEndTime(a){null==a?this.removeAttribute(bj.ASSET_END_TIME):this.setAttribute(bj.ASSET_END_TIME,`${a}`)}get extraSourceParams(){return this.hasAttribute(cx.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(cx.EXTRA_SOURCE_PARAMS)).entries()].reduce((a,[b,c])=>(a[b]=c,a),{}):c2}set extraSourceParams(a){null==a?this.removeAttribute(cx.EXTRA_SOURCE_PARAMS):this.setAttribute(cx.EXTRA_SOURCE_PARAMS,new URLSearchParams(a).toString())}get customDomain(){var a;return null!=(a=this.getAttribute(bj.CUSTOM_DOMAIN))?a:void 0}set customDomain(a){a!==this.customDomain&&(a?this.setAttribute(bj.CUSTOM_DOMAIN,a):this.removeAttribute(bj.CUSTOM_DOMAIN))}get envKey(){var a;return null!=(a=c4(this,bj.ENV_KEY))?a:void 0}set envKey(a){this.setAttribute(bj.ENV_KEY,`${a}`)}get noVolumePref(){return this.hasAttribute(cx.NO_VOLUME_PREF)}set noVolumePref(a){a?this.setAttribute(cx.NO_VOLUME_PREF,""):this.removeAttribute(cx.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(cx.NO_MUTED_PREF)}set noMutedPref(a){a?this.setAttribute(cx.NO_MUTED_PREF,""):this.removeAttribute(cx.NO_MUTED_PREF)}get debug(){return null!=c4(this,bj.DEBUG)}set debug(a){a?this.setAttribute(bj.DEBUG,""):this.removeAttribute(bj.DEBUG)}get disableTracking(){return null!=c4(this,bj.DISABLE_TRACKING)}set disableTracking(a){this.toggleAttribute(bj.DISABLE_TRACKING,!!a)}get disableCookies(){return null!=c4(this,bj.DISABLE_COOKIES)}set disableCookies(a){a?this.setAttribute(bj.DISABLE_COOKIES,""):this.removeAttribute(bj.DISABLE_COOKIES)}get streamType(){var a,b,c;return null!=(c=null!=(b=this.getAttribute(bj.STREAM_TYPE))?b:null==(a=this.media)?void 0:a.streamType)?c:m}set streamType(a){this.setAttribute(bj.STREAM_TYPE,`${a}`)}get defaultStreamType(){var a,b,c;return null!=(c=null!=(b=this.getAttribute(cx.DEFAULT_STREAM_TYPE))?b:null==(a=this.mediaController)?void 0:a.getAttribute(cx.DEFAULT_STREAM_TYPE))?c:k}set defaultStreamType(a){a?this.setAttribute(cx.DEFAULT_STREAM_TYPE,a):this.removeAttribute(cx.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var a,b;return this.hasAttribute(cx.TARGET_LIVE_WINDOW)?+this.getAttribute(cx.TARGET_LIVE_WINDOW):null!=(b=null==(a=this.media)?void 0:a.targetLiveWindow)?b:NaN}set targetLiveWindow(a){a==this.targetLiveWindow||Number.isNaN(a)&&Number.isNaN(this.targetLiveWindow)||(null==a?this.removeAttribute(cx.TARGET_LIVE_WINDOW):this.setAttribute(cx.TARGET_LIVE_WINDOW,`${+a}`))}get liveEdgeStart(){var a;return null==(a=this.media)?void 0:a.liveEdgeStart}get startTime(){return bW(c4(this,bj.START_TIME))}set startTime(a){this.setAttribute(bj.START_TIME,`${a}`)}get initialBandwidthEstimateKbps(){return bW(c4(this,bj.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(a){null==a?this.removeAttribute(bj.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(bj.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${a}`)}get initialEstimateSegments(){return bW(c4(this,bj.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(a){null==a?this.removeAttribute(bj.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(bj.INITIAL_ESTIMATE_SEGMENTS,`${a}`)}get minPreloadSegments(){return bW(c4(this,bj.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(a){null==a?this.removeAttribute(bj.MIN_PRELOAD_SEGMENTS):this.setAttribute(bj.MIN_PRELOAD_SEGMENTS,`${a}`)}get preferPlayback(){let a=this.getAttribute(bj.PREFER_PLAYBACK);if("mse"===a||a===n)return a}set preferPlayback(a){a!==this.preferPlayback&&("mse"===a||a===n?this.setAttribute(bj.PREFER_PLAYBACK,a):this.removeAttribute(bj.PREFER_PLAYBACK))}get metadata(){var a;return null==(a=this.media)?void 0:a.metadata}set metadata(a){(bM(this,cQ,cR).call(this),this.media)?this.media.metadata={...cA(this),...a}:b7("underlying media element missing when trying to set metadata. metadata will not be set.")}get _hlsConfig(){var a;return null==(a=this.media)?void 0:a._hlsConfig}set _hlsConfig(a){(bM(this,cQ,cR).call(this),this.media)?this.media._hlsConfig=a:b7("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.")}async addCuePoints(a){var b;return(bM(this,cQ,cR).call(this),this.media)?null==(b=this.media)?void 0:b.addCuePoints(a):void b7("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var a;return null==(a=this.media)?void 0:a.activeCuePoint}get cuePoints(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.cuePoints)?b:[]}addChapters(a){var b;return(bM(this,cQ,cR).call(this),this.media)?null==(b=this.media)?void 0:b.addChapters(a):void b7("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var a;return null==(a=this.media)?void 0:a.activeChapter}get chapters(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.chapters)?b:[]}getStartDate(){var a;return null==(a=this.media)?void 0:a.getStartDate()}get currentPdt(){var a;return null==(a=this.media)?void 0:a.currentPdt}get tokens(){let a=this.getAttribute(cx.PLAYBACK_TOKEN),b=this.getAttribute(cx.DRM_TOKEN),c=this.getAttribute(cx.THUMBNAIL_TOKEN),d=this.getAttribute(cx.STORYBOARD_TOKEN);return{...bJ(this,cD),...null!=a?{playback:a}:{},...null!=b?{drm:b}:{},...null!=c?{thumbnail:c}:{},...null!=d?{storyboard:d}:{}}}set tokens(a){bL(this,cD,null!=a?a:{})}get playbackToken(){var a;return null!=(a=this.getAttribute(cx.PLAYBACK_TOKEN))?a:void 0}set playbackToken(a){this.setAttribute(cx.PLAYBACK_TOKEN,`${a}`)}get drmToken(){var a;return null!=(a=this.getAttribute(cx.DRM_TOKEN))?a:void 0}set drmToken(a){this.setAttribute(cx.DRM_TOKEN,`${a}`)}get thumbnailToken(){var a;return null!=(a=this.getAttribute(cx.THUMBNAIL_TOKEN))?a:void 0}set thumbnailToken(a){this.setAttribute(cx.THUMBNAIL_TOKEN,`${a}`)}get storyboardToken(){var a;return null!=(a=this.getAttribute(cx.STORYBOARD_TOKEN))?a:void 0}set storyboardToken(a){this.setAttribute(cx.STORYBOARD_TOKEN,`${a}`)}addTextTrack(a,b,c,d){var e;let f=null==(e=this.media)?void 0:e.nativeEl;if(f)return K(f,a,b,c,d)}removeTextTrack(a){var b;let c=null==(b=this.media)?void 0:b.nativeEl;if(c){let b;return void(null==(b=Array.prototype.find.call(c.querySelectorAll("track"),b=>b.track===a))||b.remove())}}get textTracks(){var a;return null==(a=this.media)?void 0:a.textTracks}get castReceiver(){var a;return null!=(a=this.getAttribute(cx.CAST_RECEIVER))?a:void 0}set castReceiver(a){a!==this.castReceiver&&(a?this.setAttribute(cx.CAST_RECEIVER,a):this.removeAttribute(cx.CAST_RECEIVER))}get castCustomData(){var a;return null==(a=this.media)?void 0:a.castCustomData}set castCustomData(a){this.media?this.media.castCustomData=a:b7("underlying media element missing when trying to set castCustomData. castCustomData will not be set.")}get noTooltips(){return this.hasAttribute(cx.NO_TOOLTIPS)}set noTooltips(a){a?this.setAttribute(cx.NO_TOOLTIPS,""):this.removeAttribute(cx.NO_TOOLTIPS)}get proudlyDisplayMuxBadge(){return this.hasAttribute(cx.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(a){a?this.setAttribute(cx.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(cx.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var a;return null==(a=this.media)?void 0:a.capRenditionToPlayerSize}set capRenditionToPlayerSize(a){this.media?this.media.capRenditionToPlayerSize=a:b7("underlying media element missing when trying to set capRenditionToPlayerSize")}get maxReconnectRetries(){var a;return null==(a=this.media)?void 0:a.maxReconnectRetries}set maxReconnectRetries(a){this.media?this.media.maxReconnectRetries=a:b7("underlying media element missing when trying to set maxReconnectRetries")}};function c4(a,b){return a.media?a.media.getAttribute(b):a.getAttribute(b)}cB=new WeakMap,cC=new WeakMap,cD=new WeakMap,cE=new WeakMap,cF=new WeakMap,cG=new WeakMap,cH=new WeakMap,cI=new WeakMap,cJ=new WeakMap,cK=new WeakMap,cL=new WeakMap,cM=new WeakMap,cN=new WeakMap,cO=new WeakMap,cP=new WeakMap,cQ=new WeakSet,cR=function(){var a,b,c,d;if(!bJ(this,cC)){bL(this,cC,!0),bM(this,cQ,cU).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof bS.HTMLElement))throw""}catch{b7("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{b7("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof bB.MediaController))throw""}catch{b7("<media-controller> failed to upgrade!")}bM(this,cQ,cV).call(this),bM(this,cQ,cW).call(this),bM(this,cQ,cX).call(this),bL(this,cE,null==(b=null==(a=this.mediaController)?void 0:a.hasAttribute(bD.Attributes.USER_INACTIVE))||b),bM(this,cQ,cY).call(this),null==(c=this.media)||c.addEventListener("streamtypechange",bJ(this,cH)),null==(d=this.media)||d.addEventListener("loadstart",bJ(this,cI)),this.media&&(this.media.metadata=cA(this))}},cS=function(){var a,b;try{null==(a=null==window?void 0:window.CSS)||a.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(b=null==window?void 0:window.CSS)||b.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},cT=function(a){Object.assign(bJ(this,cO),a),bM(this,cQ,cU).call(this)},cU=function(a={}){var b,c,d,e,f,g,h,i,j,k,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$;let _,aa,ab,ac;b={...bJ(this,cO),...a},_={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(c=this.media)?void 0:c.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(cx.STORYBOARD_SRC),fullscreenElement:this.getAttribute(cx.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(a){var b,c;let d=a.theme;if(d){let e=null==(c=null==(b=a.getRootNode())?void 0:b.getElementById)?void 0:c.call(b,d);if(e&&e instanceof HTMLTemplateElement)return e;d.startsWith("media-theme-")||(d=`media-theme-${d}`);let f=bS.customElements.get(d);if(null!=f&&f.template)return f.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(cx.NOHOTKEYS),hotKeys:this.getAttribute(cx.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,initialBandwidthEstimateKbps:this.initialBandwidthEstimateKbps,initialEstimateSegments:this.initialEstimateSegments,minPreloadSegments:this.minPreloadSegments,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(bj.TARGET_LIVE_WINDOW),streamType:b2(this.getAttribute(bj.STREAM_TYPE)),primaryColor:this.getAttribute(cx.PRIMARY_COLOR),secondaryColor:this.getAttribute(cx.SECONDARY_COLOR),accentColor:this.getAttribute(cx.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(aa=null==(f=this.mediaController)?void 0:f.querySelector("media-time-display"))&&"none"===getComputedStyle(aa).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(cx.PLAYBACK_RATES),customDomain:null!=(d=this.getAttribute(bj.CUSTOM_DOMAIN))?d:void 0,title:this.getAttribute(cx.TITLE),videoTitle:null!=(e=this.getAttribute(cx.VIDEO_TITLE))?e:this.getAttribute(cx.TITLE),novolumepref:this.hasAttribute(cx.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(cx.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(cx.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(cx.DISABLE_PSEUDO_ENDED),maxReconnectRetries:this.maxReconnectRetries,capRenditionToPlayerSize:this.capRenditionToPlayerSize,...b,extraSourceParams:this.extraSourceParams},g=cn`
  <style>
    ${(a=>{let{tokens:b}=a;return b.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(_)}
    ${cf}
  </style>
  ${i=_,cn`
  <media-theme
    template="${i.themeTemplate||!1}"
    defaultstreamtype="${null!=(j=i.defaultStreamType)&&j}"
    hotkeys="${ab=i.hotKeys?`${i.hotKeys}`:"","live"===b2(i.streamType)&&(ab+=" noarrowleft noarrowright"),ab||!1}"
    nohotkeys="${i.noHotKeys||!i.hasSrc||!1}"
    noautoseektolive="${!!(null!=(k=i.streamType)&&k.includes(l))&&0!==i.targetLiveWindow}"
    novolumepref="${i.novolumepref||!1}"
    nomutedpref="${i.nomutedpref||!1}"
    disabled="${!i.hasSrc||i.isDialogOpen}"
    audio="${null!=(m=i.audio)&&m}"
    style="${null!=($={"--media-primary-color":i.primaryColor,"--media-secondary-color":i.secondaryColor,"--media-accent-color":i.accentColor},ac="",Object.entries($).forEach(([a,b])=>{null!=b&&(ac+=`${bU(a)}: ${b}; `)}),n=ac?ac.trim():void 0)&&n}"
    defaultsubtitles="${!i.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(o=i.forwardSeekOffset)&&o}"
    backwardseekoffset="${null!=(p=i.backwardSeekOffset)&&p}"
    playbackrates="${null!=(q=i.playbackRates)&&q}"
    defaultshowremainingtime="${null!=(r=i.defaultShowRemainingTime)&&r}"
    defaultduration="${null!=(s=i.defaultDuration)&&s}"
    hideduration="${null!=(t=i.hideDuration)&&t}"
    title="${null!=(u=i.title)&&u}"
    videotitle="${null!=(v=i.videoTitle)&&v}"
    proudlydisplaymuxbadge="${null!=(w=i.proudlyDisplayMuxBadge)&&w}"
    exportparts="${co}"
  >
    <mux-video
      slot="media"
      inert="${null!=(x=i.noHotKeys)&&x}"
      target-live-window="${null!=(y=i.targetLiveWindow)&&y}"
      stream-type="${null!=(z=b2(i.streamType))&&z}"
      crossorigin="${null!=(A=i.crossOrigin)?A:""}"
      playsinline
      autoplay="${null!=(B=i.autoplay)&&B}"
      muted="${null!=(C=i.muted)&&C}"
      loop="${null!=(D=i.loop)&&D}"
      preload="${null!=(E=i.preload)&&E}"
      debug="${null!=(F=i.debug)&&F}"
      prefer-cmcd="${null!=(G=i.preferCmcd)&&G}"
      disable-tracking="${null!=(H=i.disableTracking)&&H}"
      disable-cookies="${null!=(I=i.disableCookies)&&I}"
      prefer-playback="${null!=(J=i.preferPlayback)&&J}"
      start-time="${null!=i.startTime&&i.startTime}"
      initial-bandwidth-estimate-kbps="${null!=i.initialBandwidthEstimateKbps&&i.initialBandwidthEstimateKbps}"
      initial-estimate-segments="${null!=i.initialEstimateSegments&&i.initialEstimateSegments}"
      min-preload-segments="${null!=i.minPreloadSegments&&i.minPreloadSegments}"
      beacon-collection-domain="${null!=(K=i.beaconCollectionDomain)&&K}"
      player-init-time="${null!=(L=i.playerInitTime)&&L}"
      player-software-name="${null!=(M=i.playerSoftwareName)&&M}"
      player-software-version="${null!=(N=i.playerSoftwareVersion)&&N}"
      env-key="${null!=(O=i.envKey)&&O}"
      custom-domain="${null!=(P=i.customDomain)&&P}"
      src="${i.src?i.src:!!i.playbackId&&av(i)}"
      cast-src="${i.src?i.src:!!i.playbackId&&av(i)}"
      cast-receiver="${null!=(Q=i.castReceiver)&&Q}"
      drm-token="${null!=(S=null==(R=i.tokens)?void 0:R.drm)&&S}"
      playback-token="${null!=(U=null==(T=i.tokens)?void 0:T.playback)&&U}"
      exportparts="video"
      disable-pseudo-ended="${null!=(V=i.disablePseudoEnded)&&V}"
      max-reconnect-retries="${null!=(W=i.maxReconnectRetries)&&W}"
      max-auto-resolution="${null!=(X=i.maxAutoResolution)&&X}"
      cap-rendition-to-player-size="${null!=(Y=i.capRenditionToPlayerSize)&&Y}"
    >
      ${i.storyboard?cn`<track label="thumbnails" default kind="metadata" src="${i.storyboard}" />`:cn``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!i.poster&&i.poster}"
        placeholdersrc="${null!=(Z=i.placeholder)&&Z}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,h=this.shadowRoot,g.renderInto(h)},cV=function(){let a=a=>{var b,c;if(!(null!=a&&a.startsWith("theme-")))return;let d=a.replace(/^theme-/,"");if(cy.includes(d))return;let e=this.getAttribute(a);null!=e?null==(b=this.mediaTheme)||b.setAttribute(d,e):null==(c=this.mediaTheme)||c.removeAttribute(d)};bL(this,cG,new MutationObserver(b=>{for(let{attributeName:c}of b)a(c)})),bJ(this,cG).observe(this,{attributes:!0}),this.getAttributeNames().forEach(a)},cW=function(){var a,b;this.addEventListener("error",bJ(this,cP)),this.addEventListener("click",bJ(this,cK)),null==(a=this.mediaTheme)||a.addEventListener("close",bJ(this,cL)),null==(b=this.mediaTheme)||b.addEventListener("focusin",bJ(this,cM)),this.media&&(this.media.errorTranslator=(a={})=>{var b,c,d;if(!((null==(b=this.media)?void 0:b.error)instanceof h))return a;let e=cq(null==(c=this.media)?void 0:c.error,!1);return{player_error_code:null==(d=this.media)?void 0:d.error.code,player_error_message:e.message?String(e.message):a.player_error_message,player_error_context:e.context?String(e.context):a.player_error_context}})},cX=function(){var a,b,c,d;null==(b=null==(a=this.media)?void 0:a.textTracks)||b.addEventListener("addtrack",bJ(this,cJ)),null==(d=null==(c=this.media)?void 0:c.textTracks)||d.addEventListener("removetrack",bJ(this,cJ))},cY=function(){var a,b;if(!/Firefox/i.test(navigator.userAgent))return;let c,d=new WeakMap,e=()=>this.streamType===l&&!this.secondaryColor&&this.offsetWidth>=800,f=(a,b,c=!1)=>{e()||Array.from(a&&a.activeCues||[]).forEach(a=>{if(!(!a.snapToLines||a.line<-5||a.line>=0&&a.line<10))if(!b||this.paused){let b=a.text.split(`
`).length,e=-3;this.streamType===l&&(e=-2);let f=e-b;if(a.line===f&&!c)return;d.has(a)||d.set(a,a.line),a.line=f}else setTimeout(()=>{a.line=d.get(a)||"auto"},500)})},g=()=>{var a,b;f(c,null!=(b=null==(a=this.mediaController)?void 0:a.hasAttribute(bD.Attributes.USER_INACTIVE))&&b)},h=()=>{var a,b;let d=Array.from((null==(b=null==(a=this.mediaController)?void 0:a.media)?void 0:b.textTracks)||[]).filter(a=>["subtitles","captions"].includes(a.kind)&&"showing"===a.mode)[0];d!==c&&(null==c||c.removeEventListener("cuechange",g)),null==(c=d)||c.addEventListener("cuechange",g),f(c,bJ(this,cE))};h(),null==(a=this.textTracks)||a.addEventListener("change",h),null==(b=this.textTracks)||b.addEventListener("addtrack",h);let i=()=>{var a,b;let d=null==(b=null==(a=this.mediaController)?void 0:a.hasAttribute(bD.Attributes.USER_INACTIVE))||b;bJ(this,cE)!==d&&(bL(this,cE,d),f(c,bJ(this,cE)))};this.addEventListener("userinactivechange",i),bL(this,cN,()=>{var a,b;null==c||c.removeEventListener("cuechange",g),null==(a=this.textTracks)||a.removeEventListener("change",h),null==(b=this.textTracks)||b.removeEventListener("addtrack",h),this.removeEventListener("userinactivechange",i)})};var c5=a=>{throw TypeError(a)},c6=(a,b,c)=>b.has(a)||c5("Cannot "+c),c7=class{addEventListener(){}removeEventListener(){}dispatchEvent(a){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends c7{});var c8,c9=class extends c7{},da=class{constructor(a,b={}){((a,b,c)=>b.has(a)?c5("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c))(this,c8),((a,b,c,d)=>(c6(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,c8,null==b?void 0:b.detail)}get detail(){let a,b;return c6(this,a=c8,"read from private field"),b?b.call(this):a.get(this)}initCustomEvent(){}};c8=new WeakMap;var db={document:{createElement:function(a,b){return new c9}},DocumentFragment,customElements:{get(a){},define(a,b,c){},getName:a=>null,upgrade(a){},whenDefined:a=>Promise.resolve(c9)},CustomEvent:da,EventTarget:c7,HTMLElement:c9,HTMLVideoElement:class extends c7{}};db.document,db.customElements.get("mux-player")||(db.customElements.define("mux-player",c3),db.MuxPlayerElement=c3);var dc=parseInt(b.default.version)>=19,dd={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"};function de(a,b){if("function"==typeof a)return a(b);null!=a&&(a.current=b)}var df=Object.prototype.hasOwnProperty,dg=(a,b,c)=>!((a,b)=>{if(Object.is(a,b))return!0;if("object"!=typeof a||null===a||"object"!=typeof b||null===b)return!1;if(Array.isArray(a))return!!Array.isArray(b)&&a.length===b.length&&a.some((a,c)=>b[c]===a);let c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(let d=0;d<c.length;d++)if(!df.call(b,c[d])||!Object.is(a[c[d]],b[c[d]]))return!1;return!0})(b,a[c]),dh=(a,b,c)=>{a[c]=b},di=(a,c,d,e=dh,f=dg)=>(0,b.useEffect)(()=>{let b=null==d?void 0:d.current;b&&f(b,c,a)&&e(b,c,a)},[null==d?void 0:d.current,c]),dj=(()=>{try{return"3.13.2"}catch{}return"UNKNOWN"})(),dk=(a,c,d)=>(0,b.useEffect)(()=>{let b=null==c?void 0:c.current;if(b&&d)return b.addEventListener(a,d),()=>{b.removeEventListener(a,d)}},[null==c?void 0:c.current,d,a]),dl=b.default.forwardRef(({children:a,...c},d)=>b.default.createElement("mux-player",{suppressHydrationWarning:!0,...((a={})=>{let{ref:b,...c}=a;return Object.entries(c).reduce((a,[b,c])=>{let d=((a,b)=>{if(!(!dc&&"boolean"==typeof b&&!b)){let c,d;if(c=a,null!=(d=dd)&&c in d)return dd[a];if(void 0!==b)return/[A-Z]/.test(a)?a.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`):a}})(b,c);if(!d)return a;let e=dc||"boolean"!=typeof c?c:"";return a[d]=e,a},{})})(c),ref:d},a)),dm="mux-player-react",dn=b.default.forwardRef((a,c)=>{var d;let e=(0,b.useRef)(null),f=function(...a){return b.useCallback(function(...a){return b=>{let c=!1,d=a.map(a=>{let d=de(a,b);return c||"function"!=typeof d||(c=!0),d});if(c)return()=>{for(let b=0;b<d.length;b++){let c=d[b];"function"==typeof c?c():de(a[b],null)}}}}(...a),a)}(e,c),[g]=((a,b)=>{let{onAbort:c,onCanPlay:d,onCanPlayThrough:e,onEmptied:f,onLoadStart:g,onLoadedData:h,onLoadedMetadata:i,onProgress:j,onDurationChange:k,onVolumeChange:l,onRateChange:m,onResize:n,onWaiting:o,onPlay:p,onPlaying:q,onTimeUpdate:r,onPause:s,onSeeking:t,onSeeked:u,onStalled:v,onSuspend:w,onEnded:x,onError:y,onCuePointChange:z,onChapterChange:A,metadata:B,tokens:C,paused:D,playbackId:E,playbackRates:F,currentTime:G,themeProps:H,extraSourceParams:I,castCustomData:J,_hlsConfig:K,...L}=b;return di("tokens",C,a),di("playbackId",E,a),di("playbackRates",F,a),di("metadata",B,a),di("extraSourceParams",I,a),di("_hlsConfig",K,a),di("themeProps",H,a),di("castCustomData",J,a),di("paused",D,a,(a,b)=>{null!=b&&(b?a.pause():a.play())},(a,b,c)=>(!a.hasAttribute("autoplay")||!!a.hasPlayed)&&dg(a,b,c)),di("currentTime",G,a,(a,b)=>{null!=b&&(a.currentTime=b)}),dk("abort",a,c),dk("canplay",a,d),dk("canplaythrough",a,e),dk("emptied",a,f),dk("loadstart",a,g),dk("loadeddata",a,h),dk("loadedmetadata",a,i),dk("progress",a,j),dk("durationchange",a,k),dk("volumechange",a,l),dk("ratechange",a,m),dk("resize",a,n),dk("waiting",a,o),dk("play",a,p),dk("playing",a,q),dk("timeupdate",a,r),dk("pause",a,s),dk("seeking",a,t),dk("seeked",a,u),dk("stalled",a,v),dk("suspend",a,w),dk("ended",a,x),dk("error",a,y),dk("cuepointchange",a,z),dk("chapterchange",a,A),[L]})(e,a),[h]=(0,b.useState)(null!=(d=a.playerInitTime)?d:at());return b.default.createElement(dl,{ref:f,defaultHiddenCaptions:a.defaultHiddenCaptions,playerSoftwareName:dm,playerSoftwareVersion:dj,playerInitTime:h,...g})});a.s(["default",0,dn,"playerSoftwareName",0,dm,"playerSoftwareVersion",0,dj],954031),a.i(954031),a.s(["MaxResolution",0,{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},"MediaError",0,h,"MinResolution",0,{noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},"RenditionOrder",0,{DESCENDING:"desc"},"default",0,dn,"generatePlayerInitTime",0,at,"playerSoftwareName",0,dm,"playerSoftwareVersion",0,dj],161539)}];

//# sourceMappingURL=0lu2_%40mux_mux-player-react_dist_index_mjs_02b04cf._.js.map