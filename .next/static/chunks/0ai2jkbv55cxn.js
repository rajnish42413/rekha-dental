(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,453299,e=>{"use strict";let t,i;var a=e.i(843476),r=e.i(500932);let n={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},s={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},o={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},l=Object.entries(o),d=l.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),u=l.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),m=Object.entries(u).reduce((e,[t,i])=>{let a=d[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"}),c=Object.entries(d).reduce((e,[t,i])=>{let a=u[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),h={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},p={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},v={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},b={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},g={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},E={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function f(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function y(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function A(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function T(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function k(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function w(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}e.s(["AttributeToStateChangeEventMap",0,c,"AvailabilityStates",0,b,"MediaStateChangeEvents",0,u,"MediaStateReceiverAttributes",0,s,"MediaUIAttributes",0,d,"MediaUIEvents",0,n,"MediaUIProps",0,o,"PointerTypes",0,v,"ReadyStates",0,{HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},"StateChangeEventToAttributeMap",0,m,"StreamTypes",0,g,"TextTrackKinds",0,h,"TextTrackModes",0,p,"VolumeLevels",0,{HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},"WebkitPresentationModes",0,E],792837),e.i(792837);let _=e=>new Promise(t=>setTimeout(t,e)),I=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],C=e=>{if(!k(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>{let i;return e&&(i=1===e?I[t].singular:I[t].plural,`${e} ${i}`)}).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function S(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}let M=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});e.s(["emptyTimeRanges",0,M,"formatAsTimePhrase",0,C,"formatTime",0,S,"serializeTimeRanges",0,function(e=M){return Array.from(e).map((t,i)=>[Number(e.start(i).toFixed(3)),Number(e.end(i).toFixed(3))].join(":")).join(" ")}],577335),e.i(577335);let R={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},L=(null==(n5=globalThis.navigator)?void 0:n5.language)||"en",x=(e,t={})=>(e=>{var t,i,a;let[r]=L.split("-");return(null==(t=R[L])?void 0:t[e])||(null==(i=R[r])?void 0:i[e])||(null==(a=R.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`);class D{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class N extends D{}class O extends N{constructor(){super(...arguments),this.role=null}}let P={createElement:function(){return new U.HTMLElement},createElementNS:function(){return new U.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},U={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:P,Node:N,Element:O,HTMLElement:class extends O{constructor(){super(...arguments),this.innerHTML=""}get content(){return new U.DocumentFragment}},DocumentFragment:class extends D{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},W="u"<typeof window||void 0===window.customElements,B=Object.keys(U).every(e=>e in globalThis),$=W&&!B?U:globalThis,H=W&&!B?P:globalThis.document,V=new WeakMap,F=e=>{let t=V.get(e);return t||V.set(e,t=new Set),t},K=new $.ResizeObserver(e=>{for(let t of e)for(let e of F(t.target))e(t)});function Y(e,t){F(e).add(t),K.observe(e)}function G(e,t){let i=F(e);i.delete(t),i.size||K.unobserve(e)}function q(e){let t={};for(let i of e)t[i.name]=i.value;return t}function j(e){var t;return null!=(t=Z(e))?t:J(e,"media-controller")}function Z(e){var t;let{MEDIA_CONTROLLER:i}=s,a=e.getAttribute(i);if(a)return null==(t=et(e))?void 0:t.getElementById(a)}let z=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},Q=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},X=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||X(e,t.getRootNode().host)),J=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||J(e.getRootNode().host,t)};function ee(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=ee(i.shadowRoot))?t:i:null}function et(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function ei(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function ea(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||er(e,t)}function er(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function en(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function es(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}en(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function eo(e,t){return e.hasAttribute(t)}function el(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}eo(e,t)!=i&&e.toggleAttribute(t,i)}function ed(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function eu(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;ed(e,t,void 0)!==a&&e.setAttribute(t,a)}var em=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ec=(e,t,i)=>(em(e,t,"read from private field"),i?i.call(e):t.get(e)),eh=(e,t,i,a)=>(em(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ep extends $.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,n9,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=q(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER,d.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ec(this,n9))?void 0:a.unassociateElement)||r.call(a,this),eh(this,n9,null)),i&&this.isConnected&&(eh(this,n9,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ec(this,n9))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i,a,r,n;let o;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),eh(this,n9,(r=this,(o=r.getAttribute(s.MEDIA_CONTROLLER))?null==(n=r.getRootNode())?void 0:n.getElementById(o):J(r,"media-controller"))),this.getAttribute(s.MEDIA_CONTROLLER)&&(null==(t=null==(e=ec(this,n9))?void 0:e.associateElement)||t.call(e,this)),null==(i=ec(this,n9))||i.addEventListener("pointerdown",this),null==(a=ec(this,n9))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(s.MEDIA_CONTROLLER)&&(null==(t=null==(e=ec(this,n9))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=ec(this,n9))||i.removeEventListener("pointerdown",this),null==(a=ec(this,n9))||a.removeEventListener("click",this),eh(this,n9,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===v.TOUCH)return void this.handleTap(e);if(d===v.MOUSE)return void this.handleMouseClick(e)}}}get mediaPaused(){return eo(this,d.MEDIA_PAUSED)}set mediaPaused(e){el(this,d.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?n.MEDIA_PLAY_REQUEST:n.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new $.CustomEvent(t,{composed:!0,bubbles:!0}))}}n9=new WeakMap,ep.shadowRootOptions={mode:"open"},ep.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},$.customElements.get("media-gesture-receiver")||$.customElements.define("media-gesture-receiver",ep);var ev=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},eb=(e,t,i)=>(ev(e,t,"read from private field"),i?i.call(e):t.get(e)),eg=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eE=(e,t,i,a)=>(ev(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ef=(e,t,i)=>(ev(e,t,"access private method"),i);let ey="audio",eA="autohide",eT="breakpoints",ek="gesturesdisabled",ew="keyboardcontrol",e_="noautohide",eI="userinactive",eC="autohideovercontrols",eS=Object.values(d);function eM(e,t){var i,a,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(eT))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(a=n,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(u.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(u.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class eR extends $.HTMLElement{constructor(){if(super(),eg(this,si),eg(this,ss),eg(this,sl),eg(this,su),eg(this,sc),eg(this,sp),eg(this,n8,0),eg(this,n6,null),eg(this,n7,null),eg(this,se,void 0),this.breakpointsComputed=!1,eg(this,st,new MutationObserver(ef(this,si,sa).bind(this))),eg(this,sr,!1),eg(this,sn,e=>{eb(this,sr)||(setTimeout(()=>{eM(e.target,e.contentRect.width),eE(this,sr,!1)},0),eE(this,sr,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=q(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){eb(this,n6)&&this.mediaUnsetCallback(eb(this,n6));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[eA,ek].concat(eS).filter(e=>![d.MEDIA_RENDITION_LIST,d.MEDIA_AUDIO_TRACK_LIST,d.MEDIA_CHAPTERS_CUES,d.MEDIA_WIDTH,d.MEDIA_HEIGHT,d.MEDIA_ERROR,d.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==eA&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(eE(this,n6,e),e.localName.includes("-")&&await $.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;eb(this,st).observe(this,{childList:!0,subtree:!0}),Y(this,eb(this,sn));let t=null!=this.getAttribute(ey)?x("audio player"):x("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(eI,""),eM(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=$.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;eb(this,st).disconnect(),G(this,eb(this,sn)),this.media&&this.mediaUnsetCallback(this.media),null==(e=$.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){eE(this,n6,null)}handleEvent(e){switch(e.type){case"pointerdown":eE(this,n8,e.timeStamp);break;case"pointermove":ef(this,ss,so).call(this,e);break;case"pointerup":ef(this,sl,sd).call(this,e);break;case"mouseleave":ef(this,su,sm).call(this);break;case"mouseup":this.removeAttribute(ew);break;case"keyup":ef(this,sp,sv).call(this),this.setAttribute(ew,"")}}set autohide(e){let t=Number(e);eE(this,se,isNaN(t)?0:t)}get autohide(){return(void 0===eb(this,se)?2:eb(this,se)).toString()}get breakpoints(){return ed(this,eT)}set breakpoints(e){eu(this,eT,e)}get audio(){return eo(this,ey)}set audio(e){el(this,ey,e)}get gesturesDisabled(){return eo(this,ek)}set gesturesDisabled(e){el(this,ek,e)}get keyboardControl(){return eo(this,ew)}set keyboardControl(e){el(this,ew,e)}get noAutohide(){return eo(this,e_)}set noAutohide(e){el(this,e_,e)}get autohideOverControls(){return eo(this,eC)}set autohideOverControls(e){el(this,eC,e)}get userInteractive(){return eo(this,eI)}set userInteractive(e){el(this,eI,e)}}n8=new WeakMap,n6=new WeakMap,n7=new WeakMap,se=new WeakMap,st=new WeakMap,si=new WeakSet,sa=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},sr=new WeakMap,sn=new WeakMap,ss=new WeakSet,so=function(e){if("mouse"!==e.pointerType&&e.timeStamp-eb(this,n8)<250)return;ef(this,sc,sh).call(this),clearTimeout(eb(this,n7));let t=this.hasAttribute(eC);([this,this.media].includes(e.target)||t)&&ef(this,sp,sv).call(this)},sl=new WeakSet,sd=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(eI);[this,this.media].includes(e.target)&&t?ef(this,su,sm).call(this):ef(this,sp,sv).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&ef(this,sp,sv).call(this)},su=new WeakSet,sm=function(){if(0>eb(this,se)||this.hasAttribute(eI))return;this.setAttribute(eI,"");let e=new $.CustomEvent(u.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},sc=new WeakSet,sh=function(){if(!this.hasAttribute(eI))return;this.removeAttribute(eI);let e=new $.CustomEvent(u.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},sp=new WeakSet,sv=function(){ef(this,sc,sh).call(this),clearTimeout(eb(this,n7));let e=parseInt(this.autohide);e<0||eE(this,n7,setTimeout(()=>{ef(this,su,sm).call(this)},1e3*e))},eR.shadowRootOptions={mode:"open"},eR.getTemplateHTML=function(e){return`
    <style>
      
      :host([${d.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${ey}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${ey}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${ey}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${ey}])[${ek}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${ey}])[${ek}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${ey}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${ey}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${ey}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${ey}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${e_}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${eI}]:not([${d.MEDIA_PAUSED}]):not([${d.MEDIA_IS_AIRPLAYING}]):not([${d.MEDIA_IS_CASTING}]):not([${ey}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${e_}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${eI}]:not([${e_}]):not([${d.MEDIA_PAUSED}]):not([${d.MEDIA_IS_CASTING}]):not([${ey}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${eI}][${eC}]:not([${e_}]):not([${d.MEDIA_PAUSED}]):not([${d.MEDIA_IS_CASTING}]):not([${ey}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${ey}])[${d.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${ep.shadowRootOptions.mode}">
          ${ep.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},$.customElements.get("media-container")||$.customElements.define("media-container",eR);var eL=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ex=(e,t,i)=>(eL(e,t,"read from private field"),i?i.call(e):t.get(e)),eD=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eN=(e,t,i,a)=>(eL(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class eO{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){eD(this,sy),eD(this,sb,void 0),eD(this,sg,void 0),eD(this,sE,void 0),eD(this,sf,new Set),eN(this,sb,e),eN(this,sg,t),eN(this,sE,new Set(i))}[Symbol.iterator](){return ex(this,sy,sA).values()}get length(){return ex(this,sy,sA).size}get value(){var e;return null!=(e=[...ex(this,sy,sA)].join(" "))?e:""}set value(e){var t;e!==this.value&&(eN(this,sf,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...ex(this,sy,sA)][e]}values(){return ex(this,sy,sA).values()}forEach(e,t){ex(this,sy,sA).forEach(e,t)}add(...e){var t,i;e.forEach(e=>ex(this,sf).add(e)),(""!==this.value||(null==(t=ex(this,sb))?void 0:t.hasAttribute(`${ex(this,sg)}`)))&&(null==(i=ex(this,sb))||i.setAttribute(`${ex(this,sg)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>ex(this,sf).delete(e)),null==(t=ex(this,sb))||t.setAttribute(`${ex(this,sg)}`,`${this.value}`)}contains(e){return ex(this,sy,sA).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}sb=new WeakMap,sg=new WeakMap,sE=new WeakMap,sf=new WeakMap,sy=new WeakSet,sA=function(){return ex(this,sf).size?ex(this,sf):ex(this,sE)};let eP=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?h.CAPTIONS:h.SUBTITLES,language:i,label:r}},eU=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=eP(e);return{...t,...i}}),eW=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?eP(e):e):"string"==typeof e?eU(e):[e]:[],eB=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,e$=(e=[])=>Array.prototype.map.call(e,eB).join(" "),eH=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},eV=(e,t=[],i=[])=>{let a=eW(i).map(eH);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},eF=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:eH(t);return Array.from(e.textTracks).filter(i)},eK=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(d.MEDIA_SUBTITLES_SHOWING)},eY="exitFullscreen"in H?"exitFullscreen":"webkitExitFullscreen"in H?"webkitExitFullscreen":"webkitCancelFullScreen"in H?"webkitCancelFullScreen":void 0,eG="fullscreenElement"in H?"fullscreenElement":"webkitFullscreenElement"in H?"webkitFullscreenElement":void 0,eq="fullscreenEnabled"in H?"fullscreenEnabled":"webkitFullscreenEnabled"in H?"webkitFullscreenEnabled":void 0,ej=()=>{var e;return t||(t=null==(e=null==H?void 0:H.createElement)?void 0:e.call(H,"video"))},eZ=async(e=ej())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([ez(e,i.signal),eQ(e,t)]);return i.abort(),a},ez=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),eQ=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await _(10)}return e.volume!==t},eX=/.*Version\/.*Safari\/.*/.test($.navigator.userAgent),eJ=(e=ej())=>(!$.matchMedia("(display-mode: standalone)").matches||!eX)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),e0=(e=ej())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[eq])||i&&"webkitSupportsFullscreen"in i})({documentElement:H,media:e}),e1=e0(),e2=eJ(),e3=!!$.WebKitPlaybackTargetAvailabilityEvent,e4=!!$.chrome,e5=e=>eF(e.media,e=>[h.SUBTITLES,h.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),e9=e=>eF(e.media,e=>e.mode===p.SHOWING&&[h.SUBTITLES,h.CAPTIONS].includes(e.kind)),e8=(e,t)=>{let i=e5(e),a=e9(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)eV(p.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;eV(p.DISABLED,i,a),eV(p.SHOWING,i,[{language:n,label:s,kind:o}])}}},e6=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?e7(e,t):Object.entries(e).every(([e,i])=>e in t&&e6(i,t[e])))),e7=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>e6(e,t[i])))},te=Object.values(g),tt=eZ().then(e=>i=e),ti=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof $.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=$.customElements.get(t);i&&e instanceof i||(await $.customElements.whenDefined(t),$.customElements.upgrade(e))}))},ta=new $.DOMParser,tr={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;if(i){try{$.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}i.muted=e}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===$.localStorage.getItem("media-chrome-pref-muted");tr.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?$.localStorage.removeItem("media-chrome-pref-volume"):$.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=$.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;tr.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&k(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[g.LIVE,g.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(te.includes(r))return r===g.UNKNOWN?a:r;let n=t.duration;return n===1/0?g.LIVE:Number.isFinite(n)?g.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=tr.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===g.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(tr.mediaStreamType.get(e)!==g.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>e5(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>e9(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![h.CAPTIONS,h.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||e8(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=eF(i,{kind:h.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&ta.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&X(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!H.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else H.pictureInPictureElement&&H.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[eG];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===E.FULLSCREEN?i:a})(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(eG in e))return X(n,r);for(;null==e?void 0:e[eG];){if(e[eG]===r)return!0;e=null==(t=e[eG])?void 0:t.shadowRoot}}return!1})(e),set(e,t){e?(e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t):(e=>{var t;let{documentElement:i}=e;if(eY){let e=null==(t=null==i?void 0:i[eY])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&$.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!e1||!e0(t))return b.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!e2||!eJ(t))return b.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===i||(null==t?void 0:t.volume)==void 0)return b.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==i&&tt.then(t=>e(t?void 0:b.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return e4&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?b.UNAVAILABLE:void 0:b.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>e3?(null==t?void 0:t.availability)==="not-available"?b.UNAVAILABLE:void 0:b.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:b.UNAVAILABLE:b.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?b.UNAVAILABLE:void 0:b.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},tn={[n.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=eF(l,{kind:h.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),m=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==m&&(m=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:m}},[n.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[n.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===g.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[n.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[n.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[n.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[n.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[n.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[n.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[n.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=e5(t),s=eW(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&$.localStorage.setItem("media-chrome-pref-subtitles-lang",o),eV(p.SHOWING,n,s)},[n.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=e5(t);eV(p.DISABLED,a,null!=i?i:[])},[n.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){e8(t,i)},[n.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[n.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[n.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[n.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[n.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[n.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[n.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[n.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[n.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var ts=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},to=(e,t,i)=>(ts(e,t,"read from private field"),i?i.call(e):t.get(e)),tl=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},td=(e,t,i,a)=>(ts(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tu=(e,t,i)=>(ts(e,t,"access private method"),i);let tm=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],tc="defaultsubtitles",th="defaultstreamtype",tp="defaultduration",tv="fullscreenelement",tb="hotkeys",tg="keysused",tE="liveedgeoffset",tf="seektoliveoffset",ty="noautoseektolive",tA="nohotkeys",tT="novolumepref",tk="nosubtitleslangpref",tw="nodefaultstore",t_="keyboardforwardseekoffset",tI="keyboardbackwardseekoffset",tC="lang";sT=new WeakMap,sk=new WeakMap,sw=new WeakMap,s_=new WeakMap,sI=new WeakMap,sC=new WeakMap,sS=new WeakSet,sM=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=tr,requestMap:r=tn,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),m=e=>{void 0==e||e6(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},c=()=>{m(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},h={},p=async(e,t)=>{var i,r,n,u,p,v,b,g,E,f,y,A,T,k,w,_;let I=!!o;if(o={...d,...null!=o?o:{},...e},I)return;await ti(...Object.values(e));let C=l.length>0&&0===t&&s,S=d.media!==o.media,M=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),R=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),L=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),x=(null==(b=d.media)?void 0:b.remote)!==(null==(g=o.media)?void 0:g.remote),D=d.documentElement!==o.documentElement,N=!!d.media&&(S||C),O=!!(null==(E=d.media)?void 0:E.textTracks)&&(M||C),P=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(R||C),U=!!(null==(y=d.media)?void 0:y.audioTracks)&&(L||C),W=!!(null==(A=d.media)?void 0:A.remote)&&(x||C),B=!!d.documentElement&&(D||C),$=N||O||P||U||W||B,H=0===l.length&&1===t&&s,V=!!o.media&&(S||H),F=!!(null==(T=o.media)?void 0:T.textTracks)&&(M||H),K=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(R||H),Y=!!(null==(w=o.media)?void 0:w.audioTracks)&&(L||H),G=!!(null==(_=o.media)?void 0:_.remote)&&(x||H),q=!!o.documentElement&&(D||H),j=V||F||K||Y||G||q;if(!($||j)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let c;h[e]||(h[e]={});let p=i=>{m({[e]:t(d,i)})};c=h[e].mediaEvents,i.forEach(t=>{c&&N&&(d.media.removeEventListener(t,c),h[e].mediaEvents=void 0),V&&(o.media.addEventListener(t,p),h[e].mediaEvents=p)}),c=h[e].textTracksEvents,a.forEach(t=>{var i,a;c&&O&&(null==(i=d.media.textTracks)||i.removeEventListener(t,c),h[e].textTracksEvents=void 0),F&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),h[e].textTracksEvents=p)}),c=h[e].videoRenditionsEvents,r.forEach(t=>{var i,a;c&&P&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,c),h[e].videoRenditionsEvents=void 0),K&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),h[e].videoRenditionsEvents=p)}),c=h[e].audioTracksEvents,n.forEach(t=>{var i,a;c&&U&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,c),h[e].audioTracksEvents=void 0),Y&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),h[e].audioTracksEvents=p)}),c=h[e].remoteEvents,s.forEach(t=>{var i,a;c&&W&&(null==(i=d.media.remote)||i.removeEventListener(t,c),h[e].remoteEvents=void 0),G&&(null==(a=o.media.remote)||a.addEventListener(t,p),h[e].remoteEvents=p)}),c=h[e].rootEvents,l.forEach(t=>{c&&B&&(d.documentElement.removeEventListener(t,c),h[e].rootEvents=void 0),q&&(o.documentElement.addEventListener(t,p),h[e].rootEvents=p)});let v=h[e].stateOwnersUpdateHandlers;u.forEach(t=>{v&&$&&v(),j&&(h[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;r[t]&&null==u.mediaErrorCode?m(r[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(tc),defaultDuration:this.hasAttribute(tp)?+this.getAttribute(tp):void 0,defaultStreamType:null!=(e=this.getAttribute(th))?e:void 0,liveEdgeOffset:this.hasAttribute(tE)?+this.getAttribute(tE):void 0,seekToLiveOffset:this.hasAttribute(tf)?+this.getAttribute(tf):this.hasAttribute(tE)?+this.getAttribute(tE):void 0,noAutoSeekToLive:this.hasAttribute(ty),noVolumePref:this.hasAttribute(tT),noSubtitlesLangPref:this.hasAttribute(tk)}})},sR=new WeakSet,sL=function(e){let{key:t}=e;tm.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",tu(this,sR,sL))},sx=new WeakSet,sD=function(e){let{metaKey:t,altKey:i,key:a}=e;t||i||!tm.includes(a)?this.removeEventListener("keyup",tu(this,sR,sL)):([" ","ArrowLeft","ArrowRight"].includes(a)&&!(to(this,sT).contains(`no${a.toLowerCase()}`)||" "===a&&to(this,sT).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",tu(this,sR,sL),{once:!0}))};let tS=Object.values(d),tM=Object.values(o),tR=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&($.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let o=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,s.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||o)?(n||o).filter(e=>tS.includes(e)):[]},tL=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&$.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof $.customElements.get(e.nodeName.toLowerCase()))&&$.customElements.upgrade(e),tM.some(t=>t in e)||!!tR(e).length},tx=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},tD={[d.MEDIA_SUBTITLES_LIST]:e$,[d.MEDIA_SUBTITLES_SHOWING]:e$,[d.MEDIA_SEEKABLE]:tx,[d.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(tx).join(" "),[d.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[d.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(f).join(" ")},[d.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(A).join(" ")}},tN=async(e,t,i)=>{var a,r;if(e.isConnected||await _(0),"boolean"==typeof i||null==i)return el(e,t,i);if("number"==typeof i)return es(e,t,i);if("string"==typeof i)return eu(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=tD[t])?void 0:a.call(tD,i))?r:i;return e.setAttribute(t,n)},tO=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;tL(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>tO(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!tL(e)?$.customElements.whenDefined(r).then(()=>{a(e,t)}):a(e,t)},tP=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=tR(e),r=t.toLowerCase();a.includes(r)&&tN(e,r,i)})};$.customElements.get("media-controller")||$.customElements.define("media-controller",class extends eR{constructor(){super(),tl(this,sS),tl(this,sR),tl(this,sx),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,tl(this,sT,new eO(this,tb)),tl(this,sk,void 0),tl(this,sw,void 0),tl(this,s_,void 0),tl(this,sI,void 0),tl(this,sC,e=>{var t;null==(t=to(this,sw))||t.dispatch(e)}),this.associateElement(this);let e={};td(this,s_,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new $.CustomEvent(c[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(tA,tb,th,tc,tp,tC)}get mediaStore(){return to(this,sw)}set mediaStore(e){var t,i;(to(this,sw)&&(null==(t=to(this,sI))||t.call(this),td(this,sI,void 0)),td(this,sw,e),to(this,sw)||this.hasAttribute(tw))?td(this,sI,null==(i=to(this,sw))?void 0:i.subscribe(to(this,s_))):tu(this,sS,sM).call(this)}get fullscreenElement(){var e;return null!=(e=to(this,sk))?e:this}set fullscreenElement(e){var t;this.hasAttribute(tv)&&this.removeAttribute(tv),td(this,sk,e),null==(t=to(this,sw))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return eo(this,tc)}set defaultSubtitles(e){el(this,tc,e)}get defaultStreamType(){return ed(this,th)}set defaultStreamType(e){eu(this,th,e)}get defaultDuration(){return en(this,tp)}set defaultDuration(e){es(this,tp,e)}get noHotkeys(){return eo(this,tA)}set noHotkeys(e){el(this,tA,e)}get keysUsed(){return ed(this,tg)}set keysUsed(e){eu(this,tg,e)}get liveEdgeOffset(){return en(this,tE)}set liveEdgeOffset(e){es(this,tE,e)}get noAutoSeekToLive(){return eo(this,ty)}set noAutoSeekToLive(e){el(this,ty,e)}get noVolumePref(){return eo(this,tT)}set noVolumePref(e){el(this,tT,e)}get noSubtitlesLangPref(){return eo(this,tk)}set noSubtitlesLangPref(e){el(this,tk,e)}get noDefaultStore(){return eo(this,tw)}set noDefaultStore(e){el(this,tw,e)}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,d,u;(super.attributeChangedCallback(e,t,i),e===tA)?i!==t&&""===i?(this.hasAttribute(tb)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys():e===tb?to(this,sT).value=i:e===tc&&i!==t?null==(a=to(this,sw))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(tc)}}):e===th?null==(n=to(this,sw))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(th))?r:void 0}}):e===tE?null==(s=to(this,sw))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(tE)?+this.getAttribute(tE):void 0,seekToLiveOffset:this.hasAttribute(tf)?void 0:+this.getAttribute(tE)}}):e===tf?null==(o=to(this,sw))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(tf)?+this.getAttribute(tf):void 0}}):e===ty?null==(l=to(this,sw))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(ty)}}):e===tv?(td(this,sk,i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0),null==(u=to(this,sw))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})):e===tC&&i!==t&&(L=i)}connectedCallback(){var e,t;to(this,sw)||this.hasAttribute(tw)||tu(this,sS,sM).call(this),null==(e=to(this,sw))||e.dispatch({type:"documentelementchangerequest",detail:H}),super.connectedCallback(),to(this,sw)&&!to(this,sI)&&td(this,sI,null==(t=to(this,sw))?void 0:t.subscribe(to(this,s_))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),to(this,sw)&&(null==(t=to(this,sw))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=to(this,sw))||i.dispatch({type:n.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),to(this,sI)&&(null==(a=to(this,sI))||a.call(this),td(this,sI,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=to(this,sw))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=to(this,sw))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){tP(this.mediaStateReceivers,e,t)}associateElement(e){var t,i,a;let r,o,l,d,u;if(!e)return;let{associatedElementSubscriptions:m}=this;if(m.has(e))return;let c=this.registerMediaStateReceiver.bind(this),h=(t=e,i=c,a=this.unregisterMediaStateReceiver.bind(this),tO(t,i),r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)},o=e=>{var t;a(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)},t.addEventListener(n.REGISTER_MEDIA_STATE_RECEIVER,r),t.addEventListener(n.UNREGISTER_MEDIA_STATE_RECEIVER,o),l=[],d=e=>{let t=e.target;"media"!==t.name&&(l.forEach(e=>tO(e,a)),(l=[...t.assignedElements({flatten:!0})]).forEach(e=>tO(e,i)))},t.addEventListener("slotchange",d),(u=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:t=[],removedNodes:r=[],type:n,target:o,attributeName:l}=e;"childList"===n?(Array.prototype.forEach.call(t,e=>tO(e,i)),Array.prototype.forEach.call(r,e=>tO(e,a))):"attributes"===n&&l===s.MEDIA_CHROME_ATTRIBUTES&&(tL(o)?i(o):a(o))})})).observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{tO(t,a),t.removeEventListener("slotchange",d),u.disconnect(),t.removeEventListener(n.REGISTER_MEDIA_STATE_RECEIVER,r),t.removeEventListener(n.UNREGISTER_MEDIA_STATE_RECEIVER,o)});Object.values(n).forEach(t=>{e.addEventListener(t,to(this,sC))}),m.set(e,h)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(n).forEach(t=>{e.removeEventListener(t,to(this,sC))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),to(this,sw)&&Object.entries(to(this,sw).getState()).forEach(([t,i])=>{tP([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",tu(this,sx,sD))}disableHotkeys(){this.removeEventListener("keydown",tu(this,sx,sD)),this.removeEventListener("keyup",tu(this,sR,sL))}get hotkeys(){return ed(this,tb)}set hotkeys(e){eu(this,tb,e)}keyboardShortcutHandler(e){var t,i,a,r,s;let o,l,d,u=e.target;if(!((null!=(a=null!=(i=null==(t=u.getAttribute(tg))?void 0:t.split(" "))?i:null==u?void 0:u.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||to(this,sT).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&to(this,sT).contains("nospace")))switch(e.key){case" ":case"k":o=to(this,sw).getState().mediaPaused?n.MEDIA_PLAY_REQUEST:n.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new $.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"m":o="off"===this.mediaStore.getState().mediaVolumeLevel?n.MEDIA_UNMUTE_REQUEST:n.MEDIA_MUTE_REQUEST,this.dispatchEvent(new $.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"f":o=this.mediaStore.getState().mediaIsFullscreen?n.MEDIA_EXIT_FULLSCREEN_REQUEST:n.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new $.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new $.CustomEvent(n.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(tI)?+this.getAttribute(tI):10;l=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),d=new $.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d);break}case"ArrowRight":{let e=this.hasAttribute(t_)?+this.getAttribute(t_):10;l=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)+e,0),d=new $.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d)}}}});let tU="placement",tW="bounds";class tB extends $.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!ei(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=J(this,"#"+this.bounds))?e:j(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),m=u?parseFloat(u.replace("px","")):0,c=s-r+d-m,h=s+o-(r+n)+d+m;c<0?this.style.setProperty("--media-tooltip-offset-x",`${c}px`):h>0?this.style.setProperty("--media-tooltip-offset-x",`${h}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=q(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[tU,tW]}get placement(){return ed(this,tU)}set placement(e){eu(this,tU,e)}get bounds(){return ed(this,tW)}set bounds(e){eu(this,tW,e)}}tB.shadowRootOptions={mode:"open"},tB.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},$.customElements.get("media-tooltip")||$.customElements.define("media-tooltip",tB);var t$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tH=(e,t,i)=>(t$(e,t,"read from private field"),i?i.call(e):t.get(e)),tV=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tF=(e,t,i,a)=>(t$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let tK="tooltipplacement",tY="disabled",tG="notooltip";class tq extends $.HTMLElement{constructor(){if(super(),tV(this,sB),tV(this,sN,void 0),this.preventClick=!1,this.tooltipEl=null,tV(this,sO,e=>{this.preventClick||this.handleClick(e),setTimeout(tH(this,sP),0)}),tV(this,sP,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),tV(this,sU,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",tH(this,sU))}),tV(this,sW,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",tH(this,sU)):this.addEventListener("keyup",tH(this,sU),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=q(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",tK,s.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",tH(this,sO)),this.addEventListener("keydown",tH(this,sW)),this.tabIndex=0}disable(){this.removeEventListener("click",tH(this,sO)),this.removeEventListener("keydown",tH(this,sW)),this.removeEventListener("keyup",tH(this,sU)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=tH(this,sN))?void 0:a.unassociateElement)||r.call(a,this),tF(this,sN,null)),i&&this.isConnected&&(tF(this,sN,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=tH(this,sN))?void 0:o.associateElement)||l.call(o,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===tK&&this.tooltipEl&&i!==t&&(this.tooltipEl.placement=i),tH(this,sP).call(this)}connectedCallback(){var e,t,i;let{style:a}=ea(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(tF(this,sN,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=tH(this,sN))?void 0:t.associateElement)||i.call(t,this)),$.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=sB,t=s$,t$(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=tH(this,sN))?void 0:e.unassociateElement)||t.call(e,this),tF(this,sN,null),this.removeEventListener("mouseenter",tH(this,sP)),this.removeEventListener("focus",tH(this,sP)),this.removeEventListener("click",tH(this,sO))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return ed(this,tK)}set tooltipPlacement(e){eu(this,tK,e)}get mediaController(){return ed(this,s.MEDIA_CONTROLLER)}set mediaController(e){eu(this,s.MEDIA_CONTROLLER,e)}get disabled(){return eo(this,tY)}set disabled(e){el(this,tY,e)}get noTooltip(){return eo(this,tG)}set noTooltip(e){el(this,tG,e)}handleClick(e){}}sN=new WeakMap,sO=new WeakMap,sP=new WeakMap,sU=new WeakMap,sW=new WeakMap,sB=new WeakSet,s$=function(){this.addEventListener("mouseenter",tH(this,sP)),this.addEventListener("focus",tH(this,sP)),this.addEventListener("click",tH(this,sO));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},tq.shadowRootOptions={mode:"open"},tq.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${tB.shadowRootOptions.mode}">
          ${tB.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},tq.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},tq.getTooltipContentHTML=function(){return""},$.customElements.get("media-chrome-button")||$.customElements.define("media-chrome-button",tq);let tj=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,tZ=e=>{let t=e.mediaIsAirplaying?x("stop airplay"):x("start airplay");e.setAttribute("aria-label",t)};class tz extends tq{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_AIRPLAYING,d.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),tZ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_IS_AIRPLAYING&&tZ(this)}get mediaIsAirplaying(){return eo(this,d.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){el(this,d.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return ed(this,d.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){eu(this,d.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new $.CustomEvent(n.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}tz.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${d.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${d.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${d.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${d.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${tj}</slot>
      <slot name="exit">${tj}</slot>
    </slot>
  `},tz.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${x("start airplay")}</slot>
    <slot name="tooltip-exit">${x("stop airplay")}</slot>
  `},$.customElements.get("media-airplay-button")||$.customElements.define("media-airplay-button",tz);let tQ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,tX=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,tJ=e=>{e.setAttribute("aria-checked",eK(e).toString())};class t0 extends tq{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_SUBTITLES_LIST,d.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",x("closed captions")),tJ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_SUBTITLES_SHOWING&&tJ(this)}get mediaSubtitlesList(){return t1(this,d.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){t2(this,d.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return t1(this,d.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){t2(this,d.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new $.CustomEvent(n.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}t0.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${tQ}</slot>
      <slot name="off">${tX}</slot>
    </slot>
  `},t0.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${x("Enable captions")}</slot>
    <slot name="tooltip-disable">${x("Disable captions")}</slot>
  `};let t1=(e,t)=>{let i=e.getAttribute(t);return i?eU(i):[]},t2=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=e$(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};$.customElements.get("media-captions-button")||$.customElements.define("media-captions-button",t0);let t3=e=>{let t=e.mediaIsCasting?x("stop casting"):x("start casting");e.setAttribute("aria-label",t)};class t4 extends tq{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_CASTING,d.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),t3(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_IS_CASTING&&t3(this)}get mediaIsCasting(){return eo(this,d.MEDIA_IS_CASTING)}set mediaIsCasting(e){el(this,d.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return ed(this,d.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){eu(this,d.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?n.MEDIA_EXIT_CAST_REQUEST:n.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new $.CustomEvent(e,{composed:!0,bubbles:!0}))}}t4.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${d.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${d.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${d.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${d.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},t4.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${x("Start casting")}</slot>
    <slot name="tooltip-exit">${x("Stop casting")}</slot>
  `},$.customElements.get("media-cast-button")||$.customElements.define("media-cast-button",t4);var t5=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},t9=(e,t,i)=>(t5(e,t,"read from private field"),i?i.call(e):t.get(e)),t8=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},t6=(e,t,i,a)=>(t5(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),t7=(e,t,i)=>(t5(e,t,"access private method"),i);let ie="open";class it extends $.HTMLElement{constructor(){super(),t8(this,sK),t8(this,sG),t8(this,sj),t8(this,sz),t8(this,sX),t8(this,s0),t8(this,sH,!1),t8(this,sV,null),t8(this,sF,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[ie,"anchor"]}get open(){return eo(this,ie)}set open(e){el(this,ie,e)}handleEvent(e){switch(e.type){case"invoke":t7(this,sz,sQ).call(this,e);break;case"focusout":t7(this,sX,sJ).call(this,e);break;case"keydown":t7(this,s0,s1).call(this,e)}}connectedCallback(){t7(this,sK,sY).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){t7(this,sK,sY).call(this),e===ie&&i!==t&&(this.open?t7(this,sG,sq).call(this):t7(this,sj,sZ).call(this))}focus(){t6(this,sV,ee());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}sH=new WeakMap,sV=new WeakMap,sF=new WeakMap,sK=new WeakSet,sY=function(){if(!t9(this,sH)&&(t6(this,sH,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=q(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=ea(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},sG=new WeakSet,sq=function(){var e;null==(e=t9(this,sF))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},sj=new WeakSet,sZ=function(){var e;null==(e=t9(this,sF))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},sz=new WeakSet,sQ=function(e){t6(this,sF,e.relatedTarget),X(this,e.relatedTarget)||(this.open=!this.open)},sX=new WeakSet,sJ=function(e){var t;!X(this,e.relatedTarget)&&(null==(t=t9(this,sV))||t.focus(),t9(this,sF)&&t9(this,sF)!==e.relatedTarget&&this.open&&(this.open=!1))},s0=new WeakSet,s1=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=t9(this,sV))||n.focus(),this.open=!1))},it.shadowRootOptions={mode:"open"},it.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},it.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},$.customElements.get("media-chrome-dialog")||$.customElements.define("media-chrome-dialog",it);var ii=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ia=(e,t,i)=>(ii(e,t,"read from private field"),i?i.call(e):t.get(e)),ir=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},is=(e,t,i,a)=>(ii(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),io=(e,t,i)=>(ii(e,t,"access private method"),i);class il extends $.HTMLElement{constructor(){if(super(),ir(this,ot),ir(this,oa),ir(this,on),ir(this,oo),ir(this,od),ir(this,om),ir(this,oh),ir(this,ov),ir(this,s2,void 0),ir(this,s3,void 0),ir(this,s4,void 0),ir(this,s5,void 0),ir(this,s9,{}),ir(this,s8,[]),ir(this,s6,()=>{if(this.range.matches(":focus-visible")){let{style:e}=ea(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),ir(this,s7,()=>{let{style:e}=ea(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),ir(this,oe,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=q(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),is(this,s4,this.shadowRoot.querySelector("#startpoint")),is(this,s5,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=ia(this,s2))?void 0:a.unassociateElement)||r.call(a,this),is(this,s2,null)),i&&this.isConnected&&(is(this,s2,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ia(this,s2))?void 0:o.associateElement)||l.call(o,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),io(this,oa,or).call(this)):(this.range.setAttribute(e,i),io(this,on,os).call(this)))}connectedCallback(){var e,t,i;let{style:a}=ea(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),ia(this,s9).pointer=ea(this.shadowRoot,"#pointer"),ia(this,s9).progress=ea(this.shadowRoot,"#progress"),ia(this,s9).thumb=ea(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),ia(this,s9).activeSegment=ea(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(is(this,s2,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ia(this,s2))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",ia(this,s6)),this.shadowRoot.addEventListener("focusout",ia(this,s7)),io(this,oa,or).call(this),Y(this.container,ia(this,oe))}disconnectedCallback(){var e,t;io(this,on,os).call(this),null==(t=null==(e=ia(this,s2))?void 0:e.unassociateElement)||t.call(e,this),is(this,s2,null),this.shadowRoot.removeEventListener("focusin",ia(this,s6)),this.shadowRoot.removeEventListener("focusout",ia(this,s7)),G(this.container,ia(this,oe))}updatePointerBar(e){var t;null==(t=ia(this,s9).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=ia(this,s9).progress)||e.style.setProperty("width",`${i}%`),null==(t=ia(this,s9).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];is(this,s8,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=H.createElementNS("http://www.w3.org/2000/svg","rect"),m=ea(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);m.style.setProperty("x",o),m.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,i,a,r;let n,s,o;return t=e.clientX,i=e.clientY,a=ia(this,s4).getBoundingClientRect(),n=(r=ia(this,s5).getBoundingClientRect()).x-a.x,0==(o=n*n+(s=r.y-a.y)*s)?0:Math.max(0,Math.min(1,((t-a.x)*n+(i-a.y)*s)/o))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":io(this,ov,ob).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":io(this,od,ou).call(this,e);break;case"pointerdown":io(this,oo,ol).call(this,e);break;case"pointerup":io(this,om,oc).call(this);break;case"pointerleave":io(this,oh,op).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}s2=new WeakMap,s3=new WeakMap,s4=new WeakMap,s5=new WeakMap,s9=new WeakMap,s8=new WeakMap,s6=new WeakMap,s7=new WeakMap,oe=new WeakMap,ot=new WeakSet,oi=function(e){let t=ia(this,s9).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=ia(this,s8).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},oa=new WeakSet,or=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},on=new WeakSet,os=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=$.window)||e.removeEventListener("pointerup",this),null==(t=$.window)||t.removeEventListener("pointermove",this)},oo=new WeakSet,ol=function(e){var t;is(this,s3,e.composedPath().includes(this.range)),null==(t=$.window)||t.addEventListener("pointerup",this)},od=new WeakSet,ou=function(e){var t;"mouse"!==e.pointerType&&io(this,oo,ol).call(this,e),this.addEventListener("pointerleave",this),null==(t=$.window)||t.addEventListener("pointermove",this)},om=new WeakSet,oc=function(){var e;null==(e=$.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},oh=new WeakSet,op=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=$.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=ia(this,s9).activeSegment)||t.style.removeProperty("transform")},ov=new WeakSet,ob=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),io(this,ot,oi).call(this,e),this.dragging&&("mouse"!==e.pointerType||!ia(this,s3))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},il.shadowRootOptions={mode:"open"},il.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `},$.customElements.get("media-chrome-range")||$.customElements.define("media-chrome-range",il);var id=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iu=(e,t,i)=>(id(e,t,"read from private field"),i?i.call(e):t.get(e)),im=(e,t,i,a)=>(id(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ic extends $.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,og,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=q(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iu(this,og))?void 0:a.unassociateElement)||r.call(a,this),im(this,og,null)),i&&this.isConnected&&(im(this,og,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=iu(this,og))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(im(this,og,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=iu(this,og))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iu(this,og))?void 0:e.unassociateElement)||t.call(e,this),im(this,og,null)}}og=new WeakMap,ic.shadowRootOptions={mode:"open"},ic.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},$.customElements.get("media-control-bar")||$.customElements.define("media-control-bar",ic);var ih=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ip=(e,t,i)=>(ih(e,t,"read from private field"),i?i.call(e):t.get(e)),iv=(e,t,i,a)=>(ih(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ib extends $.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,oE,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=q(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ip(this,oE))?void 0:a.unassociateElement)||r.call(a,this),iv(this,oE,null)),i&&this.isConnected&&(iv(this,oE,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ip(this,oE))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let{style:a}=ea(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(iv(this,oE,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ip(this,oE))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ip(this,oE))?void 0:e.unassociateElement)||t.call(e,this),iv(this,oE,null)}}oE=new WeakMap,ib.shadowRootOptions={mode:"open"},ib.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},ib.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},$.customElements.get("media-text-display")||$.customElements.define("media-text-display",ib);var ig=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iE=(e,t,i)=>(ig(e,t,"read from private field"),i?i.call(e):t.get(e));class iy extends ib{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,of,void 0),((e,t,i,a)=>(ig(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,of,this.shadowRoot.querySelector("slot")),iE(this,of).textContent=S(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===d.MEDIA_DURATION&&(iE(this,of).textContent=S(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return en(this,d.MEDIA_DURATION)}set mediaDuration(e){es(this,d.MEDIA_DURATION,e)}}of=new WeakMap,iy.getSlotTemplateHTML=function(e,t){return`
    <slot>${S(t.mediaDuration)}</slot>
  `},$.customElements.get("media-duration-display")||$.customElements.define("media-duration-display",iy);let iA={2:x("Network Error"),3:x("Decode Error"),4:x("Source Not Supported"),5:x("Encryption Error")},iT={2:x("A network error caused the media download to fail."),3:x("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:x("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:x("The media is encrypted and there are no keys to decrypt it.")},ik=e=>{var t,i;return 1===e.code?null:{title:null!=(t=iA[e.code])?t:`Error ${e.code}`,message:null!=(i=iT[e.code])?i:e.message}};var iw=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function i_(e){var t;let{title:i,message:a}=null!=(t=ik(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let iI=[d.MEDIA_ERROR_CODE,d.MEDIA_ERROR_MESSAGE];class iC extends it{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,oy,null)}static get observedAttributes(){return[...super.observedAttributes,...iI]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!iI.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=r.code&&null!==ik(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){var e,t;return iw(this,e=oy,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;iw(this,t=oy,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return en(this,"mediaerrorcode")}set mediaErrorCode(e){es(this,"mediaerrorcode",e)}get mediaErrorMessage(){return ed(this,"mediaerrormessage")}set mediaErrorMessage(e){eu(this,"mediaerrormessage",e)}}oy=new WeakMap,iC.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${i_({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},iC.formatErrorMessage=i_,$.customElements.get("media-error-dialog")||$.customElements.define("media-error-dialog",iC);let iS=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,iM=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,iR=e=>{let t=e.mediaIsFullscreen?x("exit fullscreen mode"):x("enter fullscreen mode");e.setAttribute("aria-label",t)};class iL extends tq{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_FULLSCREEN,d.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),iR(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_IS_FULLSCREEN&&iR(this)}get mediaFullscreenUnavailable(){return ed(this,d.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){eu(this,d.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return eo(this,d.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){el(this,d.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?n.MEDIA_EXIT_FULLSCREEN_REQUEST:n.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new $.CustomEvent(e,{composed:!0,bubbles:!0}))}}iL.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${d.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${d.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${d.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${d.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${iS}</slot>
      <slot name="exit">${iM}</slot>
    </slot>
  `},iL.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${x("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${x("Exit fullscreen mode")}</slot>
  `},$.customElements.get("media-fullscreen-button")||$.customElements.define("media-fullscreen-button",iL);let{MEDIA_TIME_IS_LIVE:ix,MEDIA_PAUSED:iD}=d,{MEDIA_SEEK_TO_LIVE_REQUEST:iN,MEDIA_PLAY_REQUEST:iO}=n,iP=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?x("seek to live"):x("playing live");e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class iU extends tq{static get observedAttributes(){return[...super.observedAttributes,ix,iD]}connectedCallback(){super.connectedCallback(),iP(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),iP(this)}get mediaPaused(){return eo(this,d.MEDIA_PAUSED)}set mediaPaused(e){el(this,d.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return eo(this,d.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){el(this,d.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new $.CustomEvent(iN,{composed:!0,bubbles:!0})),this.hasAttribute(iD)&&this.dispatchEvent(new $.CustomEvent(iO,{composed:!0,bubbles:!0})))}}iU.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${ix}]:not([${iD}])) slot[name=indicator] > *,
      :host([${ix}]:not([${iD}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${ix}]:not([${iD}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${x("live")}</slot>
  `},$.customElements.get("media-live-button")||$.customElements.define("media-live-button",iU);var iW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iB=(e,t,i)=>(iW(e,t,"read from private field"),i?i.call(e):t.get(e)),i$=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iH=(e,t,i,a)=>(iW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let iV="loadingdelay",iF="noautohide",iK=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class iY extends $.HTMLElement{constructor(){if(super(),i$(this,oA,void 0),i$(this,oT,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=q(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER,d.MEDIA_PAUSED,d.MEDIA_LOADING,iV]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===iV&&t!==i?this.loadingDelay=Number(i):e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iB(this,oA))?void 0:a.unassociateElement)||r.call(a,this),iH(this,oA,null)),i&&this.isConnected&&(iH(this,oA,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=iB(this,oA))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(iH(this,oA,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=iB(this,oA))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iB(this,oA))?void 0:e.unassociateElement)||t.call(e,this),iH(this,oA,null)}get loadingDelay(){return iB(this,oT)}set loadingDelay(e){iH(this,oT,e);let{style:t}=ea(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return eo(this,d.MEDIA_PAUSED)}set mediaPaused(e){el(this,d.MEDIA_PAUSED,e)}get mediaLoading(){return eo(this,d.MEDIA_LOADING)}set mediaLoading(e){el(this,d.MEDIA_LOADING,e)}get mediaController(){return ed(this,s.MEDIA_CONTROLLER)}set mediaController(e){eu(this,s.MEDIA_CONTROLLER,e)}get noAutohide(){return eo(this,iF)}set noAutohide(e){el(this,iF,e)}}oA=new WeakMap,oT=new WeakMap,iY.shadowRootOptions={mode:"open"},iY.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${d.MEDIA_LOADING}]:not([${d.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${d.MEDIA_LOADING}]:not([${d.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${d.MEDIA_LOADING}]:not([${d.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${iK}</slot>
    <div id="status" role="status" aria-live="polite">${x("media loading")}</div>
  `},$.customElements.get("media-loading-indicator")||$.customElements.define("media-loading-indicator",iY);let iG=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,iq=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,ij=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,iZ=e=>{let t="off"===e.mediaVolumeLevel?x("unmute"):x("mute");e.setAttribute("aria-label",t)};class iz extends tq{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),iZ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_VOLUME_LEVEL&&iZ(this)}get mediaVolumeLevel(){return ed(this,d.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){eu(this,d.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?n.MEDIA_UNMUTE_REQUEST:n.MEDIA_MUTE_REQUEST;this.dispatchEvent(new $.CustomEvent(e,{composed:!0,bubbles:!0}))}}iz.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${d.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${d.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${d.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${d.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${d.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${d.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${d.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${iG}</slot>
      <slot name="low">${iq}</slot>
      <slot name="medium">${iq}</slot>
      <slot name="high">${ij}</slot>
    </slot>
  `},iz.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${x("Mute")}</slot>
    <slot name="tooltip-unmute">${x("Unmute")}</slot>
  `},$.customElements.get("media-mute-button")||$.customElements.define("media-mute-button",iz);let iQ=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,iX=e=>{let t=e.mediaIsPip?x("exit picture in picture mode"):x("enter picture in picture mode");e.setAttribute("aria-label",t)};class iJ extends tq{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_PIP,d.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),iX(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_IS_PIP&&iX(this)}get mediaPipUnavailable(){return ed(this,d.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){eu(this,d.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return eo(this,d.MEDIA_IS_PIP)}set mediaIsPip(e){el(this,d.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?n.MEDIA_EXIT_PIP_REQUEST:n.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new $.CustomEvent(e,{composed:!0,bubbles:!0}))}}iJ.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${d.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${d.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${d.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${d.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${iQ}</slot>
      <slot name="exit">${iQ}</slot>
    </slot>
  `},iJ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${x("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${x("Exit picture in picture mode")}</slot>
  `},$.customElements.get("media-pip-button")||$.customElements.define("media-pip-button",iJ);var i0=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let i1="rates",i2=[1,1.2,1.5,1.7,2];class i3 extends tq{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ok,new eO(this,i1,{defaultValue:i2})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PLAYBACK_RATE,i1]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===i1&&(i0(this,ok).value=i),e===d.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",x("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return i0(this,ok)}set rates(e){e?Array.isArray(e)?i0(this,ok).value=e.join(" "):"string"==typeof e&&(i0(this,ok).value=e):i0(this,ok).value=""}get mediaPlaybackRate(){return en(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){es(this,d.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(i0(this,ok).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new $.CustomEvent(n.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}ok=new WeakMap,i3.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},i3.getTooltipContentHTML=function(){return x("Playback rate")},$.customElements.get("media-playback-rate-button")||$.customElements.define("media-playback-rate-button",i3);let i4=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,i5=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,i9=e=>{let t=e.mediaPaused?x("play"):x("pause");e.setAttribute("aria-label",t)};class i8 extends tq{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PAUSED,d.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),i9(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_PAUSED&&i9(this)}get mediaPaused(){return eo(this,d.MEDIA_PAUSED)}set mediaPaused(e){el(this,d.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?n.MEDIA_PLAY_REQUEST:n.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new $.CustomEvent(e,{composed:!0,bubbles:!0}))}}i8.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${d.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${d.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${d.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${d.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${i4}</slot>
      <slot name="pause">${i5}</slot>
    </slot>
  `},i8.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${x("Play")}</slot>
    <slot name="tooltip-pause">${x("Pause")}</slot>
  `},$.customElements.get("media-play-button")||$.customElements.define("media-play-button",i8);let i6="placeholdersrc";class i7 extends $.HTMLElement{static get observedAttributes(){return[i6,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=q(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===i6)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return ed(this,i6)}set placeholderSrc(e){eu(this,"src",e)}get src(){return ed(this,"src")}set src(e){eu(this,"src",e)}}i7.shadowRootOptions={mode:"open"},i7.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},$.customElements.get("media-poster-image")||$.customElements.define("media-poster-image",i7);var ae=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};ow=new WeakMap,$.customElements.get("media-preview-chapter-display")||$.customElements.define("media-preview-chapter-display",class extends ib{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ow,void 0),((e,t,i,a)=>(ae(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,ow,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===d.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i){var a;(ae(this,ow,"read from private field"),a?a.call(this):ow.get(this)).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return ed(this,d.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){eu(this,d.MEDIA_PREVIEW_CHAPTER,e)}});var at=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ai=(e,t,i)=>(at(e,t,"read from private field"),i?i.call(e):t.get(e)),aa=(e,t,i,a)=>(at(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ar extends $.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,o_,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=q(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER,d.MEDIA_PREVIEW_IMAGE,d.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(aa(this,o_,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=ai(this,o_))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ai(this,o_))?void 0:e.unassociateElement)||t.call(e,this),aa(this,o_,null)}attributeChangedCallback(e,t,i){var a,r,n,o,l;[d.MEDIA_PREVIEW_IMAGE,d.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ai(this,o_))?void 0:a.unassociateElement)||r.call(a,this),aa(this,o_,null)),i&&this.isConnected&&(aa(this,o_,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ai(this,o_))?void 0:o.associateElement)||l.call(o,this)))}get mediaPreviewImage(){return ed(this,d.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){eu(this,d.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(d.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(d.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(d.MEDIA_PREVIEW_COORDS)}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),m=Math.min(parseInt(o)/r,parseInt(l)/n),c=Math.max(parseInt(d)/r,parseInt(u)/n),h=m<1,p=h?m:c>1?c:1,{style:v}=ea(this.shadowRoot,":host"),b=ea(this.shadowRoot,"img").style,g=this.shadowRoot.querySelector("img"),E=h?"min":"max";v.setProperty(`${E}-width`,"initial","important"),v.setProperty(`${E}-height`,"initial","important"),v.width=`${r*p}px`,v.height=`${n*p}px`;let f=()=>{b.width=`${this.imgWidth*p}px`,b.height=`${this.imgHeight*p}px`,b.display="block"};g.src!==s&&(g.onload=()=>{this.imgWidth=g.naturalWidth,this.imgHeight=g.naturalHeight,f()},g.src=s,f()),f(),b.transform=`translate(-${i*p}px, -${a*p}px)`}}o_=new WeakMap,ar.shadowRootOptions={mode:"open"},ar.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},$.customElements.get("media-preview-thumbnail")||$.customElements.define("media-preview-thumbnail",ar);var an=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},as=(e,t,i)=>(an(e,t,"read from private field"),i?i.call(e):t.get(e));oI=new WeakMap,$.customElements.get("media-preview-time-display")||$.customElements.define("media-preview-time-display",class extends ib{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,oI,void 0),((e,t,i,a)=>(an(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,oI,this.shadowRoot.querySelector("slot")),as(this,oI).textContent=S(0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_PREVIEW_TIME&&null!=i&&(as(this,oI).textContent=S(parseFloat(i)))}get mediaPreviewTime(){return en(this,d.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){es(this,d.MEDIA_PREVIEW_TIME,e)}});let ao="seekoffset";class al extends tq{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_CURRENT_TIME,ao]}connectedCallback(){super.connectedCallback(),this.seekOffset=en(this,ao,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ao&&(this.seekOffset=en(this,ao,30))}get seekOffset(){return en(this,ao,30)}set seekOffset(e){es(this,ao,e),this.setAttribute("aria-label",x("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),z(Q(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return en(this,d.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){es(this,d.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new $.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}al.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},al.getTooltipContentHTML=function(){return x("Seek backward")},$.customElements.get("media-seek-backward-button")||$.customElements.define("media-seek-backward-button",al);let ad="seekoffset";class au extends tq{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_CURRENT_TIME,ad]}connectedCallback(){super.connectedCallback(),this.seekOffset=en(this,ad,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ad&&(this.seekOffset=en(this,ad,30))}get seekOffset(){return en(this,ad,30)}set seekOffset(e){es(this,ad,e),this.setAttribute("aria-label",x("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),z(Q(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return en(this,d.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){es(this,d.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new $.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}au.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},au.getTooltipContentHTML=function(){return x("Seek forward")},$.customElements.get("media-seek-forward-button")||$.customElements.define("media-seek-forward-button",au);var am=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ac=(e,t,i)=>(am(e,t,"read from private field"),i?i.call(e):t.get(e));let ah={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},ap=[...Object.values(ah),d.MEDIA_CURRENT_TIME,d.MEDIA_DURATION,d.MEDIA_SEEKABLE],av=["Enter"," "],ab="&nbsp;/&nbsp;",ag=(e,{timesSep:t=ab}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?S(0-(s-r)):S(r);return e.showDuration?`${o}${t}${S(s)}`:o};class aE extends ib{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,oC,void 0),((e,t,i,a)=>(am(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,oC,this.shadowRoot.querySelector("slot")),ac(this,oC).innerHTML=`${ag(this)}`}static get observedAttributes(){return[...super.observedAttributes,...ap,"disabled"]}connectedCallback(){let{style:e}=ea(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",x("playback time"));let t=e=>{let{key:i}=e;av.includes(i)?this.toggleTimeDisplay():this.removeEventListener("keyup",t)};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;i||a||!av.includes(r)?this.removeEventListener("keyup",t):this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){ap.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return eo(this,ah.REMAINING)}set remaining(e){el(this,ah.REMAINING,e)}get showDuration(){return eo(this,ah.SHOW_DURATION)}set showDuration(e){el(this,ah.SHOW_DURATION,e)}get noToggle(){return eo(this,ah.NO_TOGGLE)}set noToggle(e){el(this,ah.NO_TOGGLE,e)}get mediaDuration(){return en(this,d.MEDIA_DURATION)}set mediaDuration(e){es(this,d.MEDIA_DURATION,e)}get mediaCurrentTime(){return en(this,d.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){es(this,d.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(d.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(d.MEDIA_SEEKABLE):this.setAttribute(d.MEDIA_SEEKABLE,e.join(":"))}update(){let e=ag(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-valuetext","video not loaded, unknown time.");let n=e.remaining?C(0-(r-i)):C(i);if(!e.showDuration)return e.setAttribute("aria-valuetext",n);let s=C(r),o=`${n} of ${s}`;e.setAttribute("aria-valuetext",o)})(this),e!==ac(this,oC).innerHTML&&(ac(this,oC).innerHTML=e)}}oC=new WeakMap,aE.getSlotTemplateHTML=function(e,t){return`
    <slot>${ag(t)}</slot>
  `},$.customElements.get("media-time-display")||$.customElements.define("media-time-display",aE);var af=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ay=(e,t,i)=>(af(e,t,"read from private field"),i?i.call(e):t.get(e)),aA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aT=(e,t,i,a)=>(af(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ak{constructor(e,t,i){aA(this,oS,void 0),aA(this,oM,void 0),aA(this,oR,void 0),aA(this,oL,void 0),aA(this,ox,void 0),aA(this,oD,void 0),aA(this,oN,void 0),aA(this,oO,void 0),aA(this,oP,0),aA(this,oU,(e=performance.now())=>{aT(this,oP,requestAnimationFrame(ay(this,oU))),aT(this,oL,performance.now()-ay(this,oR));let t=1e3/this.fps;if(ay(this,oL)>t){let i,a,r,n;aT(this,oR,e-ay(this,oL)%t);let s=1e3/((e-ay(this,oM))/++(i=this,a=ox,{set _(value){aT(i,a,value,r)},get _(){return ay(i,a,n)}})._),o=(e-ay(this,oD))/1e3/this.duration,l=ay(this,oN)+o*this.playbackRate;l-ay(this,oS).valueAsNumber>0?aT(this,oO,this.playbackRate/this.duration/s):(aT(this,oO,.995*ay(this,oO)),l=ay(this,oS).valueAsNumber+ay(this,oO)),this.callback(l)}}),aT(this,oS,e),this.callback=t,this.fps=i}start(){0===ay(this,oP)&&(aT(this,oR,performance.now()),aT(this,oM,ay(this,oR)),aT(this,ox,0),ay(this,oU).call(this))}stop(){0!==ay(this,oP)&&(cancelAnimationFrame(ay(this,oP)),aT(this,oP,0))}update({start:e,duration:t,playbackRate:i}){let a=e-ay(this,oS).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),aT(this,oN,e),aT(this,oD,performance.now()),this.duration=t,this.playbackRate=i}}oS=new WeakMap,oM=new WeakMap,oR=new WeakMap,oL=new WeakMap,ox=new WeakMap,oD=new WeakMap,oN=new WeakMap,oO=new WeakMap,oP=new WeakMap,oU=new WeakMap;var aw=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a_=(e,t,i)=>(aw(e,t,"read from private field"),i?i.call(e):t.get(e)),aI=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aC=(e,t,i,a)=>(aw(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aS=(e,t,i)=>(aw(e,t,"access private method"),i);let aM=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},aR=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class aL extends il{constructor(){super(),aI(this,oq),aI(this,oZ),aI(this,oX),aI(this,o0),aI(this,o2),aI(this,o4),aI(this,o9),aI(this,o6),aI(this,oW,void 0),aI(this,oB,void 0),aI(this,o$,void 0),aI(this,oH,void 0),aI(this,oV,void 0),aI(this,oF,void 0),aI(this,oK,void 0),aI(this,oY,void 0),aI(this,oG,void 0),aI(this,oQ,e=>{this.dragging||(k(e)&&(this.range.valueAsNumber=e),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),aC(this,o$,this.shadowRoot.querySelectorAll('[part~="box"]')),aC(this,oV,this.shadowRoot.querySelector('[part~="preview-box"]')),aC(this,oF,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);aC(this,oK,parseInt(e.getPropertyValue("--media-box-padding-left"))),aC(this,oY,parseInt(e.getPropertyValue("--media-box-padding-right"))),aC(this,oB,new ak(this.range,a_(this,oQ),60))}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PAUSED,d.MEDIA_DURATION,d.MEDIA_SEEKABLE,d.MEDIA_CURRENT_TIME,d.MEDIA_PREVIEW_IMAGE,d.MEDIA_PREVIEW_TIME,d.MEDIA_PREVIEW_CHAPTER,d.MEDIA_BUFFERED,d.MEDIA_PLAYBACK_RATE,d.MEDIA_LOADING,d.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",x("seek")),aS(this,oq,oj).call(this),aC(this,oW,this.getRootNode()),null==(e=a_(this,oW))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),aS(this,oq,oj).call(this),null==(e=a_(this,oW))||e.removeEventListener("transitionstart",this),aC(this,oW,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===d.MEDIA_CURRENT_TIME||e===d.MEDIA_PAUSED||e===d.MEDIA_ENDED||e===d.MEDIA_LOADING||e===d.MEDIA_DURATION||e===d.MEDIA_SEEKABLE){let e,t,i,a;a_(this,oB).update({start:aM(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),aS(this,oq,oj).call(this),e=this.range,t=C(+aR(this)),i=C(+this.mediaSeekableEnd),a=t&&i?`${t} of ${i}`:"video not loaded, unknown time.",e.setAttribute("aria-valuetext",a)}else e===d.MEDIA_BUFFERED&&this.updateBufferedBar();(e===d.MEDIA_DURATION||e===d.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=a_(this,oG),this.updateBar())}}get mediaChaptersCues(){return a_(this,oG)}set mediaChaptersCues(e){var t;aC(this,oG,e),this.updateSegments(null==(t=a_(this,oG))?void 0:t.map(e=>({start:aM(this,e.startTime),end:aM(this,e.endTime)})))}get mediaPaused(){return eo(this,d.MEDIA_PAUSED)}set mediaPaused(e){el(this,d.MEDIA_PAUSED,e)}get mediaLoading(){return eo(this,d.MEDIA_LOADING)}set mediaLoading(e){el(this,d.MEDIA_LOADING,e)}get mediaDuration(){return en(this,d.MEDIA_DURATION)}set mediaDuration(e){es(this,d.MEDIA_DURATION,e)}get mediaCurrentTime(){return en(this,d.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){es(this,d.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return en(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){es(this,d.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(d.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(d.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(d.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(d.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(d.MEDIA_SEEKABLE):this.setAttribute(d.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return ed(this,d.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){eu(this,d.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return en(this,d.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){es(this,d.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return eo(this,d.MEDIA_ENDED)}set mediaEnded(e){el(this,d.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=aM(this,r)}let{style:a}=ea(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=ea(this.shadowRoot,"#current-rail"),t=ea(this.shadowRoot,'[part~="current-box"]'),i=aS(this,oX,oJ).call(this,a_(this,oF)),a=aS(this,o0,o1).call(this,i,this.range.valueAsNumber),r=aS(this,o2,o3).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":aS(this,o6,o7).call(this);break;case"pointermove":aS(this,o4,o5).call(this,e);break;case"pointerup":case"pointerleave":aS(this,o9,o8).call(this,null);break;case"transitionstart":X(e.target,this)&&setTimeout(()=>aS(this,oq,oj).call(this),0)}}}oW=new WeakMap,oB=new WeakMap,o$=new WeakMap,oH=new WeakMap,oV=new WeakMap,oF=new WeakMap,oK=new WeakMap,oY=new WeakMap,oG=new WeakMap,oq=new WeakSet,oj=function(){aS(this,oZ,oz).call(this)?a_(this,oB).start():a_(this,oB).stop()},oZ=new WeakSet,oz=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&ei(this)},oQ=new WeakMap,oX=new WeakSet,oJ=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?J(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},o0=new WeakSet,o1=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},o2=new WeakSet,o3=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+a_(this,oK)){let t=e.range.left-e.bounds.left-a_(this,oK);return`${n-i/2+t}px`}if(n>r-a_(this,oY)){let t=e.bounds.right-e.range.right-a_(this,oY);return`${n+i/2-t-e.range.width}px`}return 0},o4=new WeakSet,o5=function(e){let t=[...a_(this,o$)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void aS(this,o9,o8).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=ea(this.shadowRoot,"#preview-rail"),r=ea(this.shadowRoot,'[part~="preview-box"]'),n=aS(this,oX,oJ).call(this,a_(this,oV)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=aS(this,o0,o1).call(this,n,s),l=aS(this,o2,o3).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(a_(this,oH))-Math.round(s*i))&&s>.01&&s<.99||(aC(this,oH,s*i),aS(this,o9,o8).call(this,a_(this,oH)))},o9=new WeakSet,o8=function(e){this.dispatchEvent(new $.CustomEvent(n.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},o6=new WeakSet,o7=function(){a_(this,oB).stop();let e=aR(this);this.dispatchEvent(new $.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},aL.shadowRootOptions={mode:"open"},aL.getTemplateHTML=function(e){return`
    ${il.getTemplateHTML(e)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${d.MEDIA_PREVIEW_IMAGE}], [${d.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${d.MEDIA_PREVIEW_IMAGE}], [${d.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${d.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${d.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${d.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${d.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${d.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${d.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${d.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${d.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${d.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${d.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${d.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${d.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${ar.shadowRootOptions.mode}">
            ${ar.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},$.customElements.get("media-time-range")||$.customElements.define("media-time-range",aL),$.customElements.get("media-volume-range")||$.customElements.define("media-volume-range",class extends il{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_VOLUME,d.MEDIA_MUTED,d.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new $.CustomEvent(n.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",x("volume"))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===d.MEDIA_VOLUME||e===d.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return en(this,d.MEDIA_VOLUME,1)}set mediaVolume(e){es(this,d.MEDIA_VOLUME,e)}get mediaMuted(){return eo(this,d.MEDIA_MUTED)}set mediaMuted(e){el(this,d.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return ed(this,d.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){eu(this,d.MEDIA_VOLUME_UNAVAILABLE,e)}});var ax=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aD=(e,t,i)=>(ax(e,t,"read from private field"),i?i.call(e):t.get(e)),aN=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aO=(e,t,i,a)=>(ax(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let aP={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof aK&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof aK?a.element[a.attributeName]=t:a.value=t}}}};class aU extends $.DocumentFragment{constructor(e,t,i=aP){var a;super(),aN(this,le,void 0),aN(this,lt,void 0),this.append(e.content.cloneNode(!0)),aO(this,le,aW(this)),aO(this,lt,i),null==(a=i.createCallback)||a.call(i,this,aD(this,le),t),i.processCallback(this,aD(this,le),t)}update(e){aD(this,lt).processCallback(this,aD(this,le),e)}}le=new WeakMap,lt=new WeakMap;let aW=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new aF;for([i,a]of a$(r.value))if(i){let i=new aK(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of a$(n))if(i){let i=new aY(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new aG(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else aW(r,t);return t},aB={},a$=e=>{let t="",i=0,a=aB[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),aB[e]=a};class aH{get value(){return""}set value(e){}toString(){return this.value}}let aV=new WeakMap;class aF{constructor(){aN(this,li,[])}[Symbol.iterator](){return aD(this,li).values()}get length(){return aD(this,li).length}item(e){return aD(this,li)[e]}append(...e){for(let t of e)t instanceof aK&&aV.set(t,this),aD(this,li).push(t)}toString(){return aD(this,li).join("")}}li=new WeakMap;class aK extends aH{constructor(e,t,i){super(),aN(this,lo),aN(this,la,""),aN(this,lr,void 0),aN(this,ln,void 0),aN(this,ls,void 0),aO(this,lr,e),aO(this,ln,t),aO(this,ls,i)}get attributeName(){return aD(this,ln)}get attributeNamespace(){return aD(this,ls)}get element(){return aD(this,lr)}get value(){return aD(this,la)}set value(e){aD(this,la)!==e&&(aO(this,la,e),aD(this,lo,ll)&&1!==aD(this,lo,ll).length?aD(this,lr).setAttributeNS(aD(this,ls),aD(this,ln),aD(this,lo,ll).toString()):null==e?aD(this,lr).removeAttributeNS(aD(this,ls),aD(this,ln)):aD(this,lr).setAttributeNS(aD(this,ls),aD(this,ln),e))}get booleanValue(){return aD(this,lr).hasAttributeNS(aD(this,ls),aD(this,ln))}set booleanValue(e){if(aD(this,lo,ll)&&1!==aD(this,lo,ll).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}la=new WeakMap,lr=new WeakMap,ln=new WeakMap,ls=new WeakMap,lo=new WeakSet,ll=function(){return aV.get(this)};class aY extends aH{constructor(e,t){super(),aN(this,ld,void 0),aN(this,lu,void 0),aO(this,ld,e),aO(this,lu,t?[...t]:[new Text])}get replacementNodes(){return aD(this,lu)}get parentNode(){return aD(this,ld)}get nextSibling(){return aD(this,lu)[aD(this,lu).length-1].nextSibling}get previousSibling(){return aD(this,lu)[0].previousSibling}get value(){return aD(this,lu).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),aO(this,lu,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(aD(this,lu)[0].parentNode,aD(this,lu),t,this.nextSibling))}}ld=new WeakMap,lu=new WeakMap;class aG extends aY{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let aq={string:e=>String(e)};class aj{constructor(e){this.template=e,this.state=void 0}}let aZ=new WeakMap,az=new WeakMap,aQ={partial:(e,t)=>{t[e.expression]=new aj(e.template)},if:(e,t)=>{var i;if(a1(e.expression,t))if(aZ.get(e)!==e.template){aZ.set(e,e.template);let i=new aU(e.template,t,aJ);e.replace(i),az.set(e,i)}else null==(i=az.get(e))||i.update(t);else e.replace(""),aZ.delete(e),az.delete(e)}},aX=Object.keys(aQ),aJ={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof aG){if(!n.directive){let e=aX.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=aQ[n.directive])||a.call(aQ,n,i);continue}let t=a1(e,i);if(t instanceof aj){aZ.get(n)!==t.template?(aZ.set(n,t.template),n.value=t=new aU(t.template,t.state,aJ),az.set(n,t)):null==(r=az.get(n))||r.update(t.state);continue}t?(n instanceof aK&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof aK?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,aZ.delete(n),az.delete(n))):n instanceof aK?n.value=void 0:(n.value=void 0,aZ.delete(n),az.delete(n))}}},a0={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=aq[t])?void 0:i.call(aq,e)}};function a1(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return a2(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return a2(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=a4(d,t))}return i}if(1===d.length)return a3(d[0])?a4(d[0].token,t):a2(e);if(2===d.length){let i=a0[null==(o=d[0])?void 0:o.token];return i&&a3(d[1])?i(a4(d[1].token,t)):a2(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=a0[i];if(!a||!a3(d[0])||!a3(d[2]))return a2(e);let r=a4(d[0].token,t);return a(r,"|"===i?d[2].token:a4(d[2].token,t))}}function a2(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function a3({type:e}){return["number","boolean","string","param"].includes(e)}function a4(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):w(e)?parseFloat(e):t[e]}var a5=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a9=(e,t,i)=>(a5(e,t,"read from private field"),i?i.call(e):t.get(e)),a8=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a6=(e,t,i,a)=>(a5(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),a7=(e,t,i)=>(a5(e,t,"access private method"),i);let re={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},rt=H.createElement("template");rt.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class ri extends $.HTMLElement{constructor(){super(),a8(this,lp),a8(this,lb),a8(this,lm,void 0),a8(this,lc,void 0),a8(this,lh,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(re[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(u.BREAKPOINTS_COMPUTED,this.render),a7(this,lp,lv).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=a9(this,lm))?e:this.constructor.template}set template(e){a6(this,lh,null),a6(this,lm,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>re[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=re[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(w(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&a7(this,lb,lg).call(this)}connectedCallback(){a7(this,lb,lg).call(this)}createRenderer(){this.template&&this.template!==a9(this,lc)&&(a6(this,lc,this.template),this.renderer=new aU(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(rt.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function ra(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function rr(e){return e.split("-")[0]}lm=new WeakMap,lc=new WeakMap,lh=new WeakMap,lp=new WeakSet,lv=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},lb=new WeakSet,lg=function(){var e;let t=this.getAttribute("template");if(!t||t===a9(this,lh))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){a6(this,lh,t),a6(this,lm,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(a6(this,lh,t),ra(t).then(e=>{let t=H.createElement("template");t.innerHTML=e,a6(this,lm,t),this.createRenderer()}).catch(console.error))},ri.observedAttributes=["template"],ri.processor=aJ,$.customElements.get("media-theme")||$.customElements.define("media-theme",ri);class rn extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class rs extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var ro=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rl=(e,t,i)=>(ro(e,t,"read from private field"),i?i.call(e):t.get(e)),rd=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ru=(e,t,i,a)=>(ro(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rm=(e,t,i)=>(ro(e,t,"access private method"),i);function rc({type:e,text:t,value:i,checked:a}){let r=H.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=H.createElement("span");return n.textContent=t,r.append(n),r}function rh(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let rp="style",rv="hidden",rb="disabled";class rg extends $.HTMLElement{constructor(){if(super(),rd(this,l_),rd(this,lS),rd(this,lR),rd(this,lx),rd(this,lN),rd(this,lW),rd(this,l$),rd(this,lV),rd(this,lK),rd(this,lG),rd(this,lj),rd(this,lz),rd(this,lX),rd(this,l0),rd(this,l2),rd(this,l4),rd(this,l9),rd(this,lE,null),rd(this,lf,null),rd(this,ly,null),rd(this,lA,new Set),rd(this,lT,void 0),rd(this,lk,!1),rd(this,lw,null),rd(this,lC,()=>{let e=rl(this,lA),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));ru(this,lA,t)}),rd(this,lP,()=>{rm(this,lW,lB).call(this),rm(this,l$,lH).call(this,!1)}),rd(this,lU,()=>{rm(this,lW,lB).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=q(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),ru(this,lT,new MutationObserver(rl(this,lC))),rl(this,lT).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[rb,rv,rp,"anchor",s.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":rm(this,l_,lI).call(this,e);break;case"invoke":rm(this,lR,lL).call(this,e);break;case"click":rm(this,lV,lF).call(this,e);break;case"toggle":rm(this,lG,lq).call(this,e);break;case"focusout":rm(this,lz,lQ).call(this,e);break;case"keydown":rm(this,lX,lJ).call(this,e)}}connectedCallback(){var e,t;ru(this,lw,er(this.shadowRoot,":host")),rm(this,lS,lM).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),ru(this,lE,Z(this)),null==(t=null==(e=rl(this,lE))?void 0:e.associateElement)||t.call(e,this),this.hidden||(Y(rf(this),rl(this,lP)),Y(this,rl(this,lU)))}disconnectedCallback(){var e,t;G(rf(this),rl(this,lP)),G(this,rl(this,lU)),this.disable(),null==(t=null==(e=rl(this,lE))?void 0:e.unassociateElement)||t.call(e,this),ru(this,lE,null)}attributeChangedCallback(e,t,i){var a,r,n,o;e===rv&&i!==t?(rl(this,lk)||ru(this,lk,!0),this.hidden?rm(this,lN,lO).call(this):rm(this,lx,lD).call(this),this.dispatchEvent(new rs({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=rl(this,lE))?void 0:a.unassociateElement)||r.call(a,this),ru(this,lE,null)),i&&this.isConnected&&(ru(this,lE,Z(this)),null==(o=null==(n=rl(this,lE))?void 0:n.associateElement)||o.call(n,this))):e===rb&&i!==t?null==i?this.enable():this.disable():e===rp&&i!==t&&rm(this,lS,lM).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=et(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(rE)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&rm(this,l9,l8).call(this,t)}focus(){if(ru(this,lf,ee()),this.items.length){rm(this,l4,l5).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=rm(this,l0,l1).call(this,e);i&&(rm(this,l9,l8).call(this,i,"checkbox"===i.type),rl(this,ly)&&!this.hidden&&(null==(t=rl(this,lf))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=rm(this,l0,l1).call(this,e))?t:rm(this,l2,l3).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),rm(this,l4,l5).call(this,r[s]),r[s].focus()}}function rE(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function rf(e){var t;return null!=(t=e.getAttribute("bounds")?J(e,`#${e.getAttribute("bounds")}`):j(e)||e.parentElement)?t:e}lE=new WeakMap,lf=new WeakMap,ly=new WeakMap,lA=new WeakMap,lT=new WeakMap,lk=new WeakMap,lw=new WeakMap,l_=new WeakSet,lI=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||rl(this,lC).call(this)},lC=new WeakMap,lS=new WeakSet,lM=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},lR=new WeakSet,lL=function(e){ru(this,ly,e.relatedTarget),X(this,e.relatedTarget)||(this.hidden=!this.hidden)},lx=new WeakSet,lD=function(){var e;null==(e=rl(this,ly))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Y(rf(this),rl(this,lP)),Y(this,rl(this,lU))},lN=new WeakSet,lO=function(){var e;null==(e=rl(this,ly))||e.setAttribute("aria-expanded","false"),G(rf(this),rl(this,lP)),G(this,rl(this,lU))},lP=new WeakMap,lU=new WeakMap,lW=new WeakSet,lB=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(rr(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=rr(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i,a,r;let n,s;return{anchor:(i=e,a=t.offsetParent,n=i.getBoundingClientRect(),s=null!=(r=null==a?void 0:a.getBoundingClientRect())?r:{x:0,y:0},{x:n.x-s.x,y:n.y-s.y,width:n.width,height:n.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=rf(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=rl(this,lw);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},l$=new WeakSet,lH=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=rl(this,lw);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),rm(this,lW,lB).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),rm(this,lW,lB).call(this);a.removeProperty("--media-menu-transition-in")},lV=new WeakSet,lF=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(rl(this,lK,lY))){null==(t=rl(this,lf))||t.focus(),this.hidden=!0;return}let i=rm(this,l0,l1).call(this,e);!i||i.hasAttribute("disabled")||(rm(this,l4,l5).call(this,i),this.handleSelect(e))},lK=new WeakSet,lY=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},lG=new WeakSet,lq=function(e){if(e.target===this)return;rm(this,lj,lZ).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new rn({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);rm(this,l$,lH).call(this,!0)},lj=new WeakSet,lZ=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},lz=new WeakSet,lQ=function(e){var t;X(this,e.relatedTarget)||(rl(this,lk)&&(null==(t=rl(this,lf))||t.focus()),rl(this,ly)&&rl(this,ly)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},lX=new WeakSet,lJ=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(rl(this,lk)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=rl(this,lf))||n.focus(),rl(this,lk)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},l0=new WeakSet,l1=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},l2=new WeakSet,l3=function(){return this.items.find(e=>0===e.tabIndex)},l4=new WeakSet,l5=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},l9=new WeakSet,l8=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},rg.shadowRootOptions={mode:"open"},rg.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex);
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},$.customElements.get("media-chrome-menu")||$.customElements.define("media-chrome-menu",rg);var ry=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rA=(e,t,i)=>(ry(e,t,"read from private field"),i?i.call(e):t.get(e)),rT=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rk=(e,t,i,a)=>(ry(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rw=(e,t,i)=>(ry(e,t,"access private method"),i);let r_="type",rI="value",rC="checked",rS="disabled";class rM extends $.HTMLElement{constructor(){if(super(),rT(this,de),rT(this,di),rT(this,dr),rT(this,dl),rT(this,du),rT(this,dc),rT(this,l6,!1),rT(this,l7,void 0),rT(this,ds,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=H.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=q(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[r_,rS,rC,rI]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),rR(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":rw(this,de,dt).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":rw(this,du,dm).call(this,e);break;case"keyup":rw(this,dl,dd).call(this,e)}}attributeChangedCallback(e,t,i){e===rC&&rR(this)&&!rA(this,l6)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===r_&&i!==t?this.role="menuitem"+i:e===rS&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(rS)||this.enable(),this.role="menuitem"+this.type,rk(this,l7,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),rw(this,dc,dh).call(this)}disconnectedCallback(){this.disable(),rw(this,dc,dh).call(this),rk(this,l7,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=et(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(r_))?e:""}set type(e){this.setAttribute(r_,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(rI))?e:this.text}set value(e){this.setAttribute(rI,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(rR(this))return"true"===this.getAttribute("aria-checked")}set checked(e){rR(this)&&(rk(this,l6,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!rR(this)&&this.invokeTargetElement&&X(this,e.target)&&this.invokeTargetElement.dispatchEvent(new rn({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function rR(e){return"radio"===e.type||"checkbox"===e.type}l6=new WeakMap,l7=new WeakMap,de=new WeakSet,dt=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?rw(this,di,da).call(this):rw(this,dr,dn).call(this))},di=new WeakSet,da=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",rA(this,ds)),this.submenuElement.addEventListener("addmenuitem",rA(this,ds)),this.submenuElement.addEventListener("removemenuitem",rA(this,ds)),rA(this,ds).call(this)},dr=new WeakSet,dn=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",rA(this,ds)),this.submenuElement.removeEventListener("addmenuitem",rA(this,ds)),this.submenuElement.removeEventListener("removemenuitem",rA(this,ds)),rA(this,ds).call(this)},ds=new WeakMap,dl=new WeakSet,dd=function(e){let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",rw(this,dl,dd))},du=new WeakSet,dm=function(e){let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",rw(this,dl,dd)):this.addEventListener("keyup",rw(this,dl,dd),{once:!0})},dc=new WeakSet,dh=function(){var e;let t=null==(e=rA(this,l7))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},rM.shadowRootOptions={mode:"open"},rM.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},rM.getSuffixSlotInnerHTML=function(e){return""},$.customElements.get("media-chrome-menu-item")||$.customElements.define("media-chrome-menu-item",rM);class rL extends rg{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:j(this).querySelector("media-settings-menu-button")}}rL.getTemplateHTML=function(e){return`
    ${rg.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},$.customElements.get("media-settings-menu")||$.customElements.define("media-settings-menu",rL);class rx extends rM{}rx.shadowRootOptions={mode:"open"},rx.getTemplateHTML=function(e){return`
    ${rM.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},rx.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},$.customElements.get("media-settings-menu-item")||$.customElements.define("media-settings-menu-item",rx);class rD extends tq{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=et(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new rn({relatedTarget:this}))}}$.customElements.get("media-chrome-menu-button")||$.customElements.define("media-chrome-menu-button",rD);class rN extends rD{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",x("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:j(this).querySelector("media-settings-menu")}}rN.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},rN.getTooltipContentHTML=function(){return x("Settings")},$.customElements.get("media-settings-menu-button")||$.customElements.define("media-settings-menu-button",rN);var rO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rP=(e,t,i)=>(rO(e,t,"read from private field"),i?i.call(e):t.get(e)),rU=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rW=(e,t,i,a)=>(rO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rB=(e,t,i)=>(rO(e,t,"access private method"),i);dp=new WeakMap,dv=new WeakMap,db=new WeakSet,dg=function(){if(rP(this,dv)===JSON.stringify(this.mediaAudioTrackList))return;rW(this,dv,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=rc({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(rh(this,"checked-indicator")),this.defaultSlot.append(e)}},dE=new WeakSet,df=function(){if(null==this.value)return;let e=new $.CustomEvent(n.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},$.customElements.get("media-audio-track-menu")||$.customElements.define("media-audio-track-menu",class extends rg{constructor(){super(...arguments),rU(this,db),rU(this,dE),rU(this,dp,[]),rU(this,dv,void 0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_AUDIO_TRACK_LIST,d.MEDIA_AUDIO_TRACK_ENABLED,d.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===d.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===d.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;rW(this,dp,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(T)),rB(this,db,dg).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",rB(this,dE,df))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",rB(this,dE,df))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=j(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return rP(this,dp)}set mediaAudioTrackList(e){rW(this,dp,e),rB(this,db,dg).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=ed(this,d.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){eu(this,d.MEDIA_AUDIO_TRACK_ENABLED,e)}});let r$=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;class rH extends rD{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_AUDIO_TRACK_ENABLED,d.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",x("Audio"))}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=j(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=ed(this,d.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){eu(this,d.MEDIA_AUDIO_TRACK_ENABLED,e)}}rH.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${r$}</slot>
  `},rH.getTooltipContentHTML=function(){return x("Audio")},$.customElements.get("media-audio-track-menu-button")||$.customElements.define("media-audio-track-menu-button",rH);var rV=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rF=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rK=(e,t,i)=>(rV(e,t,"access private method"),i);let rY=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class rG extends rg{constructor(){super(...arguments),rF(this,dA),rF(this,dk),rF(this,dy,void 0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_SUBTITLES_LIST,d.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_SUBTITLES_LIST&&t!==i?rK(this,dA,dT).call(this):e===d.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",rK(this,dk,dw))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",rK(this,dk,dw))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:j(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return rq(this,d.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){rj(this,d.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return rq(this,d.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){rj(this,d.MEDIA_SUBTITLES_SHOWING,e)}}dy=new WeakMap,dA=new WeakSet,dT=function(){var e,t,i,a,r,n;if(rV(this,t=dy,"read from private field"),(i?i.call(this):t.get(this))===JSON.stringify(this.mediaSubtitlesList))return;a=dy,r=JSON.stringify(this.mediaSubtitlesList),rV(this,a,"write to private field"),n?n.call(this,r):a.set(this,r),this.defaultSlot.textContent="";let s=!this.value,o=rc({type:"radio",text:this.formatMenuItemText(x("Off")),value:"off",checked:s});for(let t of(o.prepend(rh(this,"checked-indicator")),this.defaultSlot.append(o),this.mediaSubtitlesList)){let i=rc({type:"radio",text:this.formatMenuItemText(t.label,t),value:eB(t),checked:this.value==eB(t)});i.prepend(rh(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(rh(this,"captions-indicator")),this.defaultSlot.append(i)}},dk=new WeakSet,dw=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(d.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new $.CustomEvent(n.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new $.CustomEvent(n.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},rG.getTemplateHTML=function(e){return`
    ${rg.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${rY}</slot>
  `};let rq=(e,t)=>{let i=e.getAttribute(t);return i?eU(i):[]},rj=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=e$(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};$.customElements.get("media-captions-menu")||$.customElements.define("media-captions-menu",rG);let rZ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,rz=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,rQ=e=>{e.setAttribute("aria-checked",eK(e).toString())};class rX extends rD{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_SUBTITLES_LIST,d.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",x("closed captions")),rQ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_SUBTITLES_SHOWING&&rQ(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=j(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return rJ(this,d.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){r0(this,d.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return rJ(this,d.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){r0(this,d.MEDIA_SUBTITLES_SHOWING,e)}}rX.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${rZ}</slot>
      <slot name="off">${rz}</slot>
    </slot>
  `},rX.getTooltipContentHTML=function(){return x("Captions")};let rJ=(e,t)=>{let i=e.getAttribute(t);return i?eU(i):[]},r0=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=e$(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};$.customElements.get("media-captions-menu-button")||$.customElements.define("media-captions-menu-button",rX);var r1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r2=(e,t,i)=>(r1(e,t,"read from private field"),i?i.call(e):t.get(e)),r3=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r4=(e,t,i)=>(r1(e,t,"access private method"),i);let r5="rates";d_=new WeakMap,dI=new WeakSet,dC=function(){for(let e of(this.defaultSlot.textContent="",r2(this,d_))){let t=rc({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate===Number(e)});t.prepend(rh(this,"checked-indicator")),this.defaultSlot.append(t)}},dS=new WeakSet,dM=function(){if(!this.value)return;let e=new $.CustomEvent(n.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},$.customElements.get("media-playback-rate-menu")||$.customElements.define("media-playback-rate-menu",class extends rg{constructor(){super(),r3(this,dI),r3(this,dS),r3(this,d_,new eO(this,r5,{defaultValue:i2})),r4(this,dI,dC).call(this)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PLAYBACK_RATE,r5]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===r5&&t!=i&&(r2(this,d_).value=i,r4(this,dI,dC).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",r4(this,dS,dM))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",r4(this,dS,dM))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:j(this).querySelector("media-playback-rate-menu-button")}get rates(){return r2(this,d_)}set rates(e){e?Array.isArray(e)?r2(this,d_).value=e.join(" "):"string"==typeof e&&(r2(this,d_).value=e):r2(this,d_).value="",r4(this,dI,dC).call(this)}get mediaPlaybackRate(){return en(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){es(this,d.MEDIA_PLAYBACK_RATE,e)}});class r9 extends rD{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===d.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",x("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:j(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return en(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){es(this,d.MEDIA_PLAYBACK_RATE,e)}}r9.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},r9.getTooltipContentHTML=function(){return x("Playback rate")},$.customElements.get("media-playback-rate-menu-button")||$.customElements.define("media-playback-rate-menu-button",r9);var r8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r6=(e,t,i)=>(r8(e,t,"read from private field"),i?i.call(e):t.get(e)),r7=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ne=(e,t,i,a)=>(r8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nt=(e,t,i)=>(r8(e,t,"access private method"),i);dR=new WeakMap,dL=new WeakMap,dx=new WeakSet,dD=function(){if(r6(this,dL).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&r6(this,dL).mediaHeight===this.mediaHeight)return;r6(this,dL).mediaRenditionList=JSON.stringify(this.mediaRenditionList),r6(this,dL).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);for(let t of e)t.selected=t.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=rc({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(rh(this,"checked-indicator")),this.defaultSlot.append(e)}let i=rc({type:"radio",text:t?this.formatMenuItemText(`${x("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(x("Auto")),value:"auto",checked:t}),a=this.mediaHeight>0?`${x("Auto")} (${this.mediaHeight}p)`:x("Auto");i.dataset.description=a,i.prepend(rh(this,"checked-indicator")),this.defaultSlot.append(i)},dN=new WeakSet,dO=function(){if(null==this.value)return;let e=new $.CustomEvent(n.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},$.customElements.get("media-rendition-menu")||$.customElements.define("media-rendition-menu",class extends rg{constructor(){super(...arguments),r7(this,dx),r7(this,dN),r7(this,dR,[]),r7(this,dL,{})}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_RENDITION_LIST,d.MEDIA_RENDITION_SELECTED,d.MEDIA_RENDITION_UNAVAILABLE,d.MEDIA_HEIGHT]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===d.MEDIA_RENDITION_SELECTED&&t!==i)this.value=null!=i?i:"auto",nt(this,dx,dD).call(this);else if(e===d.MEDIA_RENDITION_LIST&&t!==i)ne(this,dR,null==i?void 0:i.split(/\s+/).map(y)),nt(this,dx,dD).call(this);else e===d.MEDIA_HEIGHT&&t!==i&&nt(this,dx,dD).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",nt(this,dN,dO))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",nt(this,dN,dO))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:j(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return r6(this,dR)}set mediaRenditionList(e){ne(this,dR,e),nt(this,dx,dD).call(this)}get mediaRenditionSelected(){return ed(this,d.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){eu(this,d.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return en(this,d.MEDIA_HEIGHT)}set mediaHeight(e){es(this,d.MEDIA_HEIGHT,e)}});let ni=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class na extends rD{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_RENDITION_SELECTED,d.MEDIA_RENDITION_UNAVAILABLE,d.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",x("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:j(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return ed(this,d.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){eu(this,d.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return en(this,d.MEDIA_HEIGHT)}set mediaHeight(e){es(this,d.MEDIA_HEIGHT,e)}}na.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${ni}</slot>
  `},na.getTooltipContentHTML=function(){return x("Quality")},$.customElements.get("media-rendition-menu-button")||$.customElements.define("media-rendition-menu-button",na);let nr=$.document?.createElement?.("template");nr&&(nr.innerHTML=`
    <!-- Sutro -->
    <style>
      :host {
        --_primary-color: var(--media-primary-color, #fff);
        --_secondary-color: var(--media-secondary-color, transparent);
        --_accent-color: var(--media-accent-color, #fff);
      }

      media-controller {
        --base: 18px;

        font-size: calc(0.75 * var(--base));
        font-family: Roboto, Arial, sans-serif;
        --media-font-family: Roboto, helvetica neue, segoe ui, arial, sans-serif;
        -webkit-font-smoothing: antialiased;

        --media-primary-color: #fff;
        --media-secondary-color: transparent;
        --media-menu-background: rgba(28, 28, 28, 0.6);
        --media-text-color: var(--_primary-color);
        --media-control-hover-background: var(--media-secondary-color);

        --media-range-track-height: calc(0.125 * var(--base));
        --media-range-thumb-height: var(--base);
        --media-range-thumb-width: var(--base);
        --media-range-thumb-border-radius: var(--base);

        --media-control-height: calc(2 * var(--base));
      }

      media-controller[breakpointmd] {
        --base: 20px;
      }

      /* The biggest size controller is tied to going fullscreen
          instead of a player width */
      media-controller[mediaisfullscreen] {
        --base: 24px;
      }

      .media-button {
        --media-control-hover-background: var(--_secondary-color);
        --media-tooltip-background: rgb(28 28 28 / .24);
        --media-text-content-height: 1.2;
        --media-tooltip-padding: .7em 1em;
        --media-tooltip-distance: 8px;
        --media-tooltip-container-margin: 18px;
        position: relative;
        padding: 0;
        opacity: 0.9;
        transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
      }

      .media-button svg {
        fill: none;
        stroke: var(--_primary-color);
        stroke-width: 1;
        stroke-linecap: 'round';
        stroke-linejoin: 'round';
      }

      svg .svg-shadow {
        stroke: #000;
        stroke-opacity: 0.15;
        stroke-width: 2px;
        fill: none;
      }
    </style>

    <media-controller
      breakpoints="md:480"
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <slot name="centered-chrome" slot="centered-chrome"></slot>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <!-- Controls Gradient -->
      <style>
        .media-gradient-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: calc(8 * var(--base));
          pointer-events: none;
        }

        .media-gradient-bottom::before {
          content: '';
          --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
            hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
            hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
            hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
            hsl(0 0% 0%) 100%;

          position: absolute;
          inset: 0;
          opacity: 0.7;
          background: linear-gradient(to bottom, var(--gradient-steps));
        }
      </style>
      <div class="media-gradient-bottom"></div>

      <!-- Settings Menu -->
      <style>
        media-settings-menu {
          --media-menu-icon-height: 20px;
          --media-menu-item-icon-height: 20px;
          --media-settings-menu-min-width: calc(10 * var(--base));
          --media-menu-transform-in: translateY(0) scale(1);
          --media-menu-transform-out: translateY(20px) rotate(3deg) scale(1);
          padding-block: calc(0.15 * var(--base));
          margin-right: 10px;
          margin-bottom: 17px;
          border-radius: 8px;
          z-index: 2;
          user-select: none;
        }

        media-settings-menu-item,
        [role='menu']::part(menu-item) {
          --media-icon-color: var(--_primary-color);
          margin-inline: calc(0.45 * var(--base));
          height: calc(1.6 * var(--base));
          font-size: calc(0.7 * var(--base));
          font-weight: 400;
          padding: 0;
          padding-left: calc(0.4 * var(--base));
          padding-right: calc(0.1 * var(--base));
          border-radius: 6px;
          text-shadow: none;
        }

        [slot='submenu']::part(back button) {
          font-size: calc(0.7 * var(--base));
        }

        media-settings-menu-item:hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item),
        [slot='submenu']::part(back indicator) {
          --media-icon-color: var(--_primary-color);
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item):hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item[submenusize='0'] {
          display: none;
        }

        /* Also hide if only 'Auto' is added. */
        .quality-settings[submenusize='1'] {
          display: none;
        }
      </style>
      <media-settings-menu hidden anchor="auto">
        <media-settings-menu-item>
          Playback Speed
          <media-playback-rate-menu slot="submenu" hidden>
            <div slot="title">Playback Speed</div>
          </media-playback-rate-menu>
        </media-settings-menu-item>
        <media-settings-menu-item class="quality-settings">
          Quality
          <media-rendition-menu slot="submenu" hidden>
            <div slot="title">Quality</div>
          </media-rendition-menu>
        </media-settings-menu-item>
        <media-settings-menu-item>
          Subtitles/CC
          <media-captions-menu slot="submenu" hidden>
            <div slot="title">Subtitles/CC</div>
          </media-captions-menu>
        </media-settings-menu-item>
      </media-settings-menu>

      <!-- Control Bar -->
      <style>
        media-control-bar {
          position: absolute;
          height: calc(2 * var(--base));
          line-height: calc(2 * var(--base));
          bottom: var(--base);
          left: var(--base);
          right: var(--base);
        }
      </style>
      <media-control-bar>
        <!-- Play/Pause -->
        <style>
          @keyframes bounce-scale-play {
            0% {
              transform: scale(0.75, 0.75);
            }
            50% {
              transform: scale(115%, 115%);
            }
            100% {
              transform: scale(1, 1);
            }
          }

          .media-button {
            border-radius: 25%;
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s, box-shadow 0.3s;
          }

          .media-button:hover {
            /* background-color: rgba(0, 0, 0, 0.05); */
            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
            /* hue-rotate(120deg) */
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s;
          }

          media-play-button #icon-play {
            opacity: 0;
            transform-box: view-box;
            transform-origin: center center;
            transform: scale(0.5, 0.5);
            transition: all 0.5s;
          }

          media-play-button[mediapaused] #icon-play {
            opacity: 1;
            transform: scale(1, 1);
            animation: 0.35s bounce-scale-play ease-in-out;
          }

          @keyframes bounce-pause-left {
            0% {
              font-size: 10px;
            }
            50% {
              font-size: 3px;
            }
            100% {
              font-size: 4px;
            }
          }

          @keyframes bounce-pause-right {
            0% {
              font-size: 10px;
              transform: translateX(-8px);
            }
            50% {
              font-size: 3px;
              transform: translateX(1px);
            }
            100% {
              font-size: 4px;
              transform: translateX(0);
            }
          }

          media-play-button #pause-left,
          media-play-button #pause-right {
            /* Using font-size to animate height because using scale was resulting in unexpected positioning */
            font-size: 4px;
            opacity: 1;
            transform: translateX(0);
            transform-box: view-box;
          }

          media-play-button:not([mediapaused]) #pause-left {
            animation: 0.3s bounce-pause-left ease-out;
          }

          media-play-button:not([mediapaused]) #pause-right {
            animation: 0.3s bounce-pause-right ease-out;
          }

          media-play-button[mediapaused] #pause-left,
          media-play-button[mediapaused] #pause-right {
            opacity: 0;
            font-size: 10px;
          }

          media-play-button[mediapaused] #pause-right {
            transform-origin: right center;
            transform: translateX(-8px);
          }
        </style>
        <media-play-button mediapaused class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <!-- <use class="svg-shadow" xlink:href="#icon-play"></use> -->
            <g>
              <path
                id="icon-play"
                d="M20.7131 14.6976C21.7208 15.2735 21.7208 16.7265 20.7131 17.3024L12.7442 21.856C11.7442 22.4274 10.5 21.7054 10.5 20.5536L10.5 11.4464C10.5 10.2946 11.7442 9.57257 12.7442 10.144L20.7131 14.6976Z"
              />
            </g>
            <!-- <use class="svg-shadow" xlink:href="#icon-pause"></use> -->
            <g id="icon-pause">
              <rect id="pause-left" x="10.5" width="1em" y="10.5" height="11" rx="0.5" />
              <rect id="pause-right" x="17.5" width="1em" y="10.5" height="11" rx="0.5" />
            </g>
          </svg>
        </media-play-button>

        <!-- Volume/Mute -->
        <style>
          media-mute-button {
            position: relative;
          }

          media-mute-button .muted-path {
            transition: clip-path 0.2s ease-out;
          }

          media-mute-button #muted-path-2 {
            transition-delay: 0.2s;
          }

          media-mute-button .muted-path {
            clip-path: inset(0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-1 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-2 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button .muted-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='off'] .muted-path {
            opacity: 1;
          }

          media-mute-button .vol-path {
            opacity: 1;
            transition: opacity 0.4s;
          }

          media-mute-button[mediavolumelevel='off'] .vol-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='low'] #vol-high-path,
          media-mute-button[mediavolumelevel='medium'] #vol-high-path {
            opacity: 0;
          }

          media-volume-range {
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-thumb-opacity: 0;
          }

          @keyframes volume-in {
            0% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
            50% {
              visibility: visible;
              opacity: 1;
              transform: rotate(-2deg);
            }
            100% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
          }

          @keyframes volume-out {
            0% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: rotate(0deg);
            }
            100% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
          }

          .media-volume-range-wrapper {
            opacity: 0;
            visibility: hidden;

            position: absolute;
            top: -100%;
            left: calc(2 * var(--base));

            width: calc(10 * var(--base));
            height: calc(2.5 * var(--base));
            transform-origin: center left;
          }

          media-volume-range {
            /*
              Hide range and animation until mediavolume attribute is set.
              'visibility' didn't work, hovering over media-volume-range-wrapper
              caused it to show. Should require mute-button:hover.
            */
            opacity: 0;
            transition: opacity 0s 1s;

            width: calc(10 * var(--base));
            height: var(--base);
            padding: 0;
            border-radius: calc(0.25 * var(--base));
            overflow: hidden;
            background: rgba(0, 0, 0, 0.2);

            --media-range-bar-color: var(--media-accent-color);

            --media-range-padding-left: 0;
            --media-range-padding-right: 0;

            --media-range-track-width: calc(10 * var(--base));
            --media-range-track-height: var(--base);
            --media-range-track-border-radius: calc(0.25 * var(--base));
            --media-range-track-backdrop-filter: blur(10px) brightness(80%);

            /* This makes zero volume still show some of the bar.
               I can't make the bar have curved corners otherwise though. */
            --media-range-thumb-width: var(--base);
            --media-range-thumb-border-radius: calc(0.25 * var(--base));

            /* The Sutro design has a gradient like this, but not sure I like it */
            /* --media-range-thumb-box-shadow: 10px 0px 20px rgba(255, 255, 255, 0.5); */
          }

          media-volume-range[mediavolume] {
            opacity: 1;
          }

          [keyboardcontrol] media-volume-range:focus {
            /* TODO: This appears to be creating a think outline */
            outline: 1px solid rgba(27, 127, 204, 0.9);
          }

          media-mute-button:hover + .media-volume-range-wrapper,
          media-mute-button:focus + .media-volume-range-wrapper,
          media-mute-button:focus-within + .media-volume-range-wrapper,
          .media-volume-range-wrapper:hover,
          .media-volume-range-wrapper:focus,
          .media-volume-range-wrapper:focus-within {
            animation: 0.3s volume-in forwards ease-out;
          }

          .media-volume-range-wrapper:not(:hover, :focus-within) {
            animation: 0.3s volume-out ease-out;
          }

          /* When keyboard navigating the volume range and wrapper need to always be visible
            otherwise focus state can't land on it. This is ok when keyboard navigating because
            the hovering issues aren't a concern, unless you happen to be keyboard AND mouse navigating.
          */
          [keyboardcontrol] .media-volume-range-wrapper,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within media-volume-range {
            visibility: visible;
          }
        </style>
        <media-mute-button class="media-button" notooltip>
          <use class="svg-shadow" xlink:href="#vol-paths"></use>
          <svg slot="icon" viewBox="0 0 32 32">
            <g id="vol-paths">
              <path
                id="speaker-path"
                d="M16.5 20.486v-8.972c0-1.537-2.037-2.08-2.802-.745l-1.026 1.79a2.5 2.5 0 0 1-.8.85l-1.194.78A1.5 1.5 0 0 0 10 15.446v1.11c0 .506.255.978.678 1.255l1.194.782a2.5 2.5 0 0 1 .8.849l1.026 1.79c.765 1.334 2.802.792 2.802-.745Z"
              />
              <path
                id="vol-low-path"
                class="vol-path"
                d="M18.5 18C19.6046 18 20.5 17.1046 20.5 16C20.5 14.8954 19.6046 14 18.5 14"
              />
              <path
                id="vol-high-path"
                class="vol-path"
                d="M18 21C20.7614 21 23 18.7614 23 16C23 13.2386 20.7614 11 18 11"
              />
              <path id="muted-path-1" class="muted-path" d="M23 18L19 14" />
              <path id="muted-path-2" class="muted-path" d="M23 14L19 18" />
            </g>
          </svg>
        </media-mute-button>
        <div class="media-volume-range-wrapper">
          <media-volume-range></media-volume-range>
        </div>

        <!-- Time Display -->
        <style>
          media-time-display {
            position: relative;
            padding: calc(0.5 * var(--base));
            font-size: calc(0.7 * var(--base));
            border-radius: calc(0.5 * var(--base));
          }

          media-controller[breakpointmd] media-time-display:not([showduration]) {
            display: none;
          }

          media-controller:not([breakpointmd]) media-time-display[showduration] {
            display: none;
          }
        </style>
        <media-time-display></media-time-display>
        <media-time-display showduration></media-time-display>

        <!-- Time Range / Progress Bar -->
        <style>
          media-time-range {
            height: calc(2 * var(--base));
            border-radius: calc(0.25 * var(--base));

            --media-range-track-backdrop-filter: invert(10%) blur(5px) brightness(110%);
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-track-pointer-background: rgba(255, 255, 255, 0.5);
            --media-range-track-border-radius: calc(0.25 * var(--base));

            --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
            --media-range-bar-color: var(--media-accent-color);

            --media-range-thumb-background: var(--media-accent-color);
            --media-range-thumb-transition: opacity 0.1s linear;
            --media-range-thumb-opacity: 0;

            --media-preview-thumbnail-border: calc(0.125 * var(--base)) solid #fff;
            --media-preview-thumbnail-border-radius: calc(0.5 * var(--base));
            --media-preview-thumbnail-min-width: calc(8 * var(--base));
            --media-preview-thumbnail-max-width: calc(10 * var(--base));
            --media-preview-thumbnail-min-height: calc(5 * var(--base));
            --media-preview-thumbnail-max-height: calc(7 * var(--base));
            --media-preview-box-margin: 0 0 -10px;
          }
          media-time-range:hover {
            --media-range-thumb-opacity: 1;
            --media-range-track-height: calc(0.25 * var(--base));
          }

          media-preview-thumbnail {
            margin-bottom: 5px;
          }

          media-preview-chapter-display {
            font-size: calc(0.6 * var(--base));
            padding-block: 0;
          }

          media-preview-time-display {
            font-size: calc(0.65 * var(--base));
            padding-top: 0;
          }
        </style>
        <media-time-range>
          <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
          <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
          <media-preview-time-display slot="preview"></media-preview-time-display>
        </media-time-range>

        <!-- Subtitles/CC Button -->
        <style>
          media-captions-button {
            position: relative;
          }

          media-controller:not([breakpointmd]) media-captions-button {
            display: none;
          }

          media-captions-button svg :is(path, rect) {
            stroke: none;
            fill: var(--_primary-color);
          }

          /* Disble the captions button when no subtitles are available */
          media-captions-button:not([mediasubtitleslist]) svg {
            opacity: 0.3;
          }

          media-captions-button #cc-underline {
            opacity: 1;
          }

          media-captions-button[mediasubtitleslist][aria-checked='true'] #cc-underline {
            opacity: 1;
          }

          media-captions-button #cc-underline {
            transition: clip-path 0.15s ease-out;
          }

          media-captions-button #cc-underline {
            clip-path: inset(0 100% 0 0);
          }

          media-captions-button[aria-checked='true'] #cc-underline {
            clip-path: inset(0 0 0 0);
          }
        </style>
        <media-captions-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cc-icon"></use>
            <g id="cc-icon">
              <path
                class="cc-c"
                d="M15.6634 14.3574H14.5636C14.4985 14.0523 14.3847 13.7842 14.2221 13.5532C14.0624 13.3222 13.8673 13.1283 13.6367 12.9715C13.409 12.8118 13.1562 12.692 12.8783 12.6122C12.6004 12.5323 12.3107 12.4924 12.0091 12.4924C11.4592 12.4924 10.961 12.6264 10.5146 12.8945C10.0711 13.1625 9.71776 13.5575 9.45463 14.0794C9.19445 14.6012 9.06436 15.2414 9.06436 16C9.06436 16.7586 9.19445 17.3988 9.45463 17.9206C9.71776 18.4425 10.0711 18.8375 10.5146 19.1055C10.961 19.3736 11.4592 19.5076 12.0091 19.5076C12.3107 19.5076 12.6004 19.4677 12.8783 19.3878C13.1562 19.308 13.409 19.1896 13.6367 19.0328C13.8673 18.8731 14.0624 18.6778 14.2221 18.4468C14.3847 18.2129 14.4985 17.9449 14.5636 17.6426H15.6634C15.5806 18.0903 15.4298 18.491 15.2111 18.8446C14.9923 19.1982 14.7203 19.499 14.3951 19.7471C14.0698 19.9924 13.7047 20.1792 13.2996 20.3075C12.8976 20.4358 12.4674 20.5 12.0091 20.5C11.2345 20.5 10.5456 20.3175 9.94246 19.9525C9.33932 19.5875 8.8648 19.0684 8.51888 18.3954C8.17296 17.7224 8 16.924 8 16C8 15.076 8.17296 14.2776 8.51888 13.6046C8.8648 12.9316 9.33932 12.4125 9.94246 12.0475C10.5456 11.6825 11.2345 11.5 12.0091 11.5C12.4674 11.5 12.8976 11.5642 13.2996 11.6925C13.7047 11.8208 14.0698 12.009 14.3951 12.2571C14.7203 12.5024 14.9923 12.8018 15.2111 13.1554C15.4298 13.5062 15.5806 13.9068 15.6634 14.3574Z"
              />
              <path
                class="cc-c"
                d="M24 14.3574H22.9002C22.8351 14.0523 22.7213 13.7842 22.5587 13.5532C22.399 13.3222 22.2039 13.1283 21.9733 12.9715C21.7456 12.8118 21.4928 12.692 21.2149 12.6122C20.937 12.5323 20.6473 12.4924 20.3457 12.4924C19.7958 12.4924 19.2976 12.6264 18.8511 12.8945C18.4077 13.1625 18.0543 13.5575 17.7912 14.0794C17.531 14.6012 17.4009 15.2414 17.4009 16C17.4009 16.7586 17.531 17.3988 17.7912 17.9206C18.0543 18.4425 18.4077 18.8375 18.8511 19.1055C19.2976 19.3736 19.7958 19.5076 20.3457 19.5076C20.6473 19.5076 20.937 19.4677 21.2149 19.3878C21.4928 19.308 21.7456 19.1896 21.9733 19.0328C22.2039 18.8731 22.399 18.6778 22.5587 18.4468C22.7213 18.2129 22.8351 17.9449 22.9002 17.6426H24C23.9172 18.0903 23.7664 18.491 23.5476 18.8446C23.3289 19.1982 23.0569 19.499 22.7316 19.7471C22.4064 19.9924 22.0413 20.1792 21.6362 20.3075C21.2341 20.4358 20.804 20.5 20.3457 20.5C19.5711 20.5 18.8822 20.3175 18.279 19.9525C17.6759 19.5875 17.2014 19.0684 16.8555 18.3954C16.5095 17.7224 16.3366 16.924 16.3366 16C16.3366 15.076 16.5095 14.2776 16.8555 13.6046C17.2014 12.9316 17.6759 12.4125 18.279 12.0475C18.8822 11.6825 19.5711 11.5 20.3457 11.5C20.804 11.5 21.2341 11.5642 21.6362 11.6925C22.0413 11.8208 22.4064 12.009 22.7316 12.2571C23.0569 12.5024 23.3289 12.8018 23.5476 13.1554C23.7664 13.5062 23.9172 13.9068 24 14.3574Z"
              />
              <rect id="cc-underline" x="8" y="23" width="16" height="1" rx="0.5" />
            </g>
          </svg>
        </media-captions-button>

        <!-- Settings Menu Button -->
        <style>
          media-settings-menu-button svg {
            transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
            transform: rotateZ(0deg);
          }
          media-settings-menu-button[aria-expanded='true'] svg {
            transform: rotateZ(30deg);
          }
        </style>
        <media-settings-menu-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#settings-icon"></use>
            <g id="settings-icon">
              <path
                d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
              />
              <path
                d="M21.0176 13.0362L20.9715 12.9531C20.8445 12.7239 20.7797 12.4629 20.784 12.1982L20.8049 10.8997C20.8092 10.6343 20.675 10.3874 20.4545 10.2549L18.5385 9.10362C18.3186 8.97143 18.0472 8.9738 17.8293 9.10981L16.7658 9.77382C16.5485 9.90953 16.2999 9.98121 16.0465 9.98121H15.9543C15.7004 9.98121 15.4513 9.90922 15.2336 9.77295L14.1652 9.10413C13.9467 8.96728 13.674 8.96518 13.4535 9.09864L11.5436 10.2545C11.3242 10.3873 11.1908 10.6336 11.1951 10.8981L11.216 12.1982C11.2203 12.4629 11.1555 12.7239 11.0285 12.9531L10.9831 13.0351C10.856 13.2645 10.6715 13.4535 10.4493 13.5819L9.36075 14.2109C9.13763 14.3398 8.99942 14.5851 9 14.8511L9.00501 17.152C9.00559 17.4163 9.1432 17.6597 9.36476 17.7883L10.4481 18.4167C10.671 18.546 10.8559 18.7364 10.9826 18.9673L11.0313 19.0559C11.1565 19.284 11.2203 19.5431 11.2161 19.8059L11.1951 21.1003C11.1908 21.3657 11.325 21.6126 11.5456 21.7452L13.4615 22.8964C13.6814 23.0286 13.9528 23.0262 14.1707 22.8902L15.2342 22.2262C15.4515 22.0905 15.7001 22.0188 15.9535 22.0188H16.0457C16.2996 22.0188 16.5487 22.0908 16.7664 22.227L17.8348 22.8959C18.0534 23.0327 18.326 23.0348 18.5465 22.9014L20.4564 21.7455C20.6758 21.6127 20.8092 21.3664 20.8049 21.1019L20.784 19.8018C20.7797 19.5371 20.8445 19.2761 20.9715 19.0469L21.0169 18.9649C21.144 18.7355 21.3285 18.5465 21.5507 18.4181L22.6393 17.7891C22.8624 17.6602 23.0006 17.4149 23 17.1489L22.995 14.848C22.9944 14.5837 22.8568 14.3403 22.6352 14.2117L21.5493 13.5818C21.328 13.4534 21.1442 13.2649 21.0176 13.0362Z"
              />
            </g>
          </svg>
        </media-settings-menu-button>

        <!-- PIP/Mini Player Button -->
        <style>
          media-controller:not([breakpointmd]) media-pip-button {
            display: none;
          }
        </style>
        <media-pip-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#pip-icon"></use>
            <g id="pip-icon">
              <path
                d="M12 22H9.77778C9.34822 22 9 21.6162 9 21.1429V10.8571C9 10.3838 9.34822 10 9.77778 10L22.2222 10C22.6518 10 23 10.3838 23 10.8571V12.5714"
              />
              <path
                d="M15 21.5714V16.4286C15 16.1919 15.199 16 15.4444 16H22.5556C22.801 16 23 16.1919 23 16.4286V17V21.5714C23 21.8081 22.801 22 22.5556 22H20.3333H17.6667H15.4444C15.199 22 15 21.8081 15 21.5714Z"
              />
            </g>
          </svg>
        </media-pip-button>

        <!-- Airplay Button -->
        <media-airplay-button class="media-button">
          <svg viewBox="0 0 32 32" aria-hidden="true" slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.5 20h1.722c.43 0 .778-.32.778-.714v-8.572c0-.394-.348-.714-.778-.714H9.778c-.43 0-.778.32-.778.714v1.429"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.5 20H9.778c-.43 0-.778-.32-.778-.714v-8.572c0-.394.348-.714.778-.714h12.444c.43 0 .778.32.778.714v1.429"/>
            <path stroke-linejoin="round" d="m16 19 3.464 3.75h-6.928L16 19Z"/>
          </svg>
        </media-airplay-button>

        <!-- Cast Button -->
        <media-cast-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cast-icon"></use>
            <g id="cast-icon">
              <path
                d="M18.5 21.833h4.167c.46 0 .833-.373.833-.833V11a.833.833 0 0 0-.833-.833H9.333A.833.833 0 0 0 8.5 11v1.111m0 8.056c.92 0 1.667.746 1.667 1.666M8.5 17.667a4.167 4.167 0 0 1 4.167 4.166"
              />
              <path d="M8.5 15.167a6.667 6.667 0 0 1 6.667 6.666" />
            </g>
          </svg>
        </media-cast-button>

        <!-- Fullscreen Button -->
        <style>
          /* Having trouble getting @property to work in the shadow dom
             to clean this up. Like https://codepen.io/luwes/pen/oNRyZyx */

          media-fullscreen-button .fs-arrow {
            translate: 0% 0%;
          }
          media-fullscreen-button:hover .fs-arrow {
            animation: 0.35s up-left-bounce cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          media-fullscreen-button:hover #fs-enter-top,
          media-fullscreen-button:hover #fs-exit-bottom {
            animation-name: up-right-bounce;
          }

          media-fullscreen-button:hover #fs-enter-bottom,
          media-fullscreen-button:hover #fs-exit-top {
            animation-name: down-left-bounce;
          }

          @keyframes up-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% -4%;
            }
          }
          @keyframes up-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% -4%;
            }
          }
          @keyframes down-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% 4%;
            }
          }
          @keyframes down-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% 4%;
            }
          }
        </style>
        <media-fullscreen-button class="media-button">
          <svg slot="enter" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-enter-paths"></use>
            <g id="fs-enter-paths">
              <g id="fs-enter-top" class="fs-arrow">
                <path d="M18 10H22V14" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-enter-bottom" class="fs-arrow">
                <path d="M14 22L10 22V18" />
                <path d="M10 22L14 18" />
              </g>
            </g>
          </svg>
          <svg slot="exit" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-exit-paths"></use>
            <g id="fs-exit-paths">
              <g id="fs-exit-top" class="fs-arrow">
                <path d="M22 14H18V10" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-exit-bottom" class="fs-arrow">
                <path d="M10 18L14 18V22" />
                <path d="M14 18L10 22" />
              </g>
            </g>
          </svg>
        </media-fullscreen-button>
      </media-control-bar>
    </media-controller>

  `),$.customElements&&!$.customElements.get("media-theme-sutro")&&$.customElements.define("media-theme-sutro",class extends ri{static template=nr});var nn=e.i(271645),ns=e.i(339954),no=e.i(650471),nl=no.default,nd="video",nu=e=>e===nd?"playback":e,nm=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};nm.MEDIA_ERR_ABORTED=1,nm.MEDIA_ERR_NETWORK=2,nm.MEDIA_ERR_DECODE=3,nm.MEDIA_ERR_SRC_NOT_SUPPORTED=4,nm.MEDIA_ERR_ENCRYPTED=5,nm.MEDIA_ERR_CUSTOM=100,nm.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var nc=(e,t)=>null!=t&&e in t,nh={ANY:"any",MUTED:"muted"},np="on-demand",nv="live",nb="unknown",ng="native",nE={HEADER:"header",QUERY:"query",NONE:"none"},nf=Object.values(nE),ny={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},nA={HLS:ny.M3U8};Object.keys(nA),[...Object.values(ny)];var nT={code:"en"},nk=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},nw=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},n_=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return nc(e,nA)?nA[e]:t}return nS(e)},nI=e=>"VOD"===e?np:nv,nC=e=>"EVENT"===e?1/0:"VOD"===e?NaN:0,nS=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=nR(t).pathname}catch{console.error("Invalid url when trying to infer mime type",t)}let a=i.lastIndexOf(".");if(a<0)return nx(e)?ny.M3U8:"";let r=i.slice(a+1).toUpperCase();return nc(r,ny)?ny[r]:""},nM=e=>{try{return new URL(e),!1}catch{return!0}},nR=(e,t)=>{var i;if(!nM(e))return new URL(e);let a=null==(i=null==window?void 0:window.location)?void 0:i.href,r=null!=t?t:a;return t&&nM(t.toString())&&(r=new URL(t,a)),new URL(e,r)},nL="mux.com",nx=({src:e,customDomain:t=nL})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return a&&r&&s&&o},nD=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}};function nN(e,t=!0){var i;return new nO(t&&null!=(i=null==nT?void 0:nT[e])?i:e,t?nT.code:"en")}var nO=class{constructor(e,t=(e=>null!=(e=nT)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},nP=Object.values(nh),nU=e=>"boolean"==typeof e||"string"==typeof e&&nP.includes(e),nW=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case nh.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case nh.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},nB=e=>"time"in e?e.time:e.startTime;function n$(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function nH(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function nV(e,t,i,a){let r=nH(e,i,a);return r||((r=n$(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>nB(t)-nB(e)).forEach(t=>{var i,n;let s=t.value,o=nB(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var nF="cuepoints",nK=Object.freeze({label:nF});async function nY(e,t,i=nK){return nV(e,t,i.label,"metadata")}var nG=e=>({time:e.startTime,value:JSON.parse(e.text)});function nq(e,t={label:nF}){var i,a;let r=nH(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return nG(r.activeCues[0]);let{currentTime:n}=e;return nG(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function nj(e,t=nK){return new Promise(i=>{nk(e,"loadstart",async()=>{let a=await nY(e,[],t);nk(e,"cuechange",()=>{let t=nq(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var nZ="chapters",nz=Object.freeze({label:nZ}),nQ=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function nX(e,t,i=nz){return nV(e,t,i.label,"chapters")}function nJ(e,t={label:nZ}){var i,a;let r=nH(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return nQ(r.activeCues[0]);let{currentTime:n}=e;return nQ(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function n0(e,t=nz){return new Promise(i=>{nk(e,"loadstart",async()=>{let a=await nX(e,[],t);nk(e,"cuechange",()=>{let t=nJ(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var n1=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o,l,d;let u,m;if(n){let i=nN("Your device appears to be offline",r),a=nm.MEDIA_ERR_NETWORK,n=new nm(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=2000002,n.data=e,n}let c="status"in e?e.status:e.code,h=Date.now(),p=nm.MEDIA_ERR_NETWORK;if(200===c)return;let v=nu(t),b=(u=nu(t),m=`${u}Token`,null!=(l=i.tokens)&&l[u]?null==(d=i.tokens)?void 0:d[u]:nc(m,i)?i[m]:void 0),g=t===nd?"v":"drm"===t?"d":void 0,[E]=nw(null!=(s=i.playbackId)?s:"");if(!c||!E)return;let f=nD(b);if(b&&!f){let i=new nm(nN("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:v}),p,!0,nN("Compact JWT string: {token}",r).format({token:b}));return i.errorCategory=t,i.muxCode=2412202,i.data=e,i}if(c>=500){let e=new nm("",p,null==a||a);return e.errorCategory=t,e.muxCode=2e6,e}if(403===c)if(f){if((({exp:e},t=Date.now())=>!e||1e3*e<t)(f,h)){let i={timeStyle:"medium",dateStyle:"medium"},a=new nm(nN("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:v}),p,!0,nN("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(null!=(o=f.exp)?o:0),currentDate:new Intl.DateTimeFormat("en",i).format(h)}));return a.errorCategory=t,a.muxCode=2403210,a.data=e,a}if((({sub:e},t)=>e!==t)(f,E)){let i=new nm(nN("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:v}),p,!0,nN("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:v,playbackId:E,tokenPlaybackId:f.sub}));return i.errorCategory=t,i.muxCode=2403232,i.data=e,i}if((({aud:e},t)=>!e)(f,0)){let i=new nm(nN("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:v}),p,!0,nN("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:v,expectedAud:g}));return i.errorCategory=t,i.muxCode=2403221,i.data=e,i}if((({aud:e},t)=>e!==t)(f,g)){let i=new nm(nN("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:v}),p,!0,nN("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:v,expectedAud:g,aud:f.aud}));return i.errorCategory=t,i.muxCode=2403222,i.data=e,i}}else{let i=new nm(nN("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:v,category:t}),p,null==a||a,nN("Specified playback ID: {playbackId}",r).format({playbackId:E}));return i.errorCategory=t,i.muxCode=2403201,i.data=e,i}if(412===c){let n=new nm(nN("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),p,null==a||a,nN("Specified playback ID: {playbackId}",r).format({playbackId:E}));return n.errorCategory=t,n.muxCode=2412e3,n.streamType=i.streamType===nv?"live":i.streamType===np?"on-demand":"unknown",n.data=e,n}if(404===c){let i=new nm(nN("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),p,null==a||a,nN("Specified playback ID: {playbackId}",r).format({playbackId:E}));return i.errorCategory=t,i.muxCode=2404e3,i.data=e,i}if(400===c){let i=new nm(nN("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),p,null==a||a,nN("Specified playback ID: {playbackId}",r).format({playbackId:E}));return i.errorCategory=t,i.muxCode=24e5,i.data=e,i}let y=new nm("",p,null==a||a);return y.errorCategory=t,y.muxCode=2e6,y.data=e,y},n2=nl.DefaultConfig.capLevelController,n3={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},n4=class e extends n2{constructor(e){super(e)}static setMaxAutoResolution(t,i){i?e.maxAutoResolution.set(t,i):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return null!=(t=e.maxAutoResolution.get(i))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),i=this.getMaxAutoResolution();if(!i)return super.getMaxLevel(e);let a=n3[i.toLowerCase().trim()];if(!a)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=a),n=r.findIndex(e=>e.width*e.height===a);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let s=r[r.length-1];return t.findIndex(e=>e===s)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:n2.getMaxLevelByMediaSize(a,16/9*n,n)}};n4.minMaxResolution=720,n4.maxAutoResolution=new WeakMap;var n5,n9,n8,n6,n7,se,st,si,sa,sr,sn,ss,so,sl,sd,su,sm,sc,sh,sp,sv,sb,sg,sE,sf,sy,sA,sT,sk,sw,s_,sI,sC,sS,sM,sR,sL,sx,sD,sN,sO,sP,sU,sW,sB,s$,sH,sV,sF,sK,sY,sG,sq,sj,sZ,sz,sQ,sX,sJ,s0,s1,s2,s3,s4,s5,s9,s8,s6,s7,oe,ot,oi,oa,or,on,os,oo,ol,od,ou,om,oc,oh,op,ov,ob,og,oE,of,oy,oA,oT,ok,ow,o_,oI,oC,oS,oM,oR,oL,ox,oD,oN,oO,oP,oU,oW,oB,o$,oH,oV,oF,oK,oY,oG,oq,oj,oZ,oz,oQ,oX,oJ,o0,o1,o2,o3,o4,o5,o9,o8,o6,o7,le,lt,li,la,lr,ln,ls,lo,ll,ld,lu,lm,lc,lh,lp,lv,lb,lg,lE,lf,ly,lA,lT,lk,lw,l_,lI,lC,lS,lM,lR,lL,lx,lD,lN,lO,lP,lU,lW,lB,l$,lH,lV,lF,lK,lY,lG,lq,lj,lZ,lz,lQ,lX,lJ,l0,l1,l2,l3,l4,l5,l9,l8,l6,l7,de,dt,di,da,dr,dn,ds,dl,dd,du,dm,dc,dh,dp,dv,db,dg,dE,df,dy,dA,dT,dk,dw,d_,dI,dC,dS,dM,dR,dL,dx,dD,dN,dO,dP,dU,dW,dB,d$,dH,dV=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1),dF="fairplay",dK=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,dY=async(e,t)=>{if(t===ny.MP4)return{streamType:np,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===ny.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let i=await t.text(),a=await ((e,t)=>{let i,a=e.split(`
`).find((e,t,i)=>t>0&&i[t-1].startsWith("#EXT-X-STREAM-INF"));if(!a)return Promise.reject(Error("No media playlist URL found in multivariant playlist"));if(nM(a)&&!t)return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));try{i=nR(a,t)}catch(e){return Promise.reject(e)}return fetch(i).then(e=>200!==e.status?Promise.reject(e):e.text())})(i,t.url);return{...(e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(dK)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}})(i),...(e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),s=nI(n),o=nC(n),l;if(s===nv){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=(null!=t?t:6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}})(a)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},dG=async(e,t,i=n_({src:e}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u}=await dY(e,i),m=null==u?void 0:u["com.apple.hls.chapters"];(null!=m&&m.URI||null!=m&&m.VALUE.toLocaleLowerCase().startsWith("http"))&&dq(null!=(a=m.URI)?a:m.VALUE,t),(null!=(r=dQ.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=dQ.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=dQ.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},dq=async(e,t)=>{var i,a;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!(null!=(i=null==n?void 0:n[0])&&i.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(s[e.key]=e.value);(null!=(a=dQ.get(t))?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(e){console.error(e)}},dj=null!=(dU=null==(dP=null==globalThis?void 0:globalThis.navigator)?void 0:dP.userAgent)?dU:"",dZ=null!=(d$=null==(dB=null==(dW=null==globalThis?void 0:globalThis.navigator)?void 0:dW.userAgentData)?void 0:dB.platform)?d$:"",dz=dj.toLowerCase().includes("android")||["x11","android"].some(e=>dZ.toLowerCase().includes(e)),dQ=new WeakMap,dX="mux.com",dJ=null==(dH=nl.isSupported)?void 0:dH.call(nl),d0=()=>{if("u">typeof window)return ns.default.utils.now()},d1=ns.default.utils.generateUUID,d2=({playbackId:e,customDomain:t=dX,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:m={}}={})=>{if(!e)return;let[c,h=""]=nw(e),p=new URL(`https://stream.${t}/${c}.m3u8${h}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(m).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},d3=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},d4=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},d5=e=>{var t;return null==(t=dQ.get(e))?void 0:t.error},d9=e=>{var t,i;return null!=(i=null==(t=dQ.get(e))?void 0:t.streamType)?i:nb},d8=e=>{var t,i;return null!=(i=null==(t=dQ.get(e))?void 0:t.seekable)?i:e.seekable},d6=.034,d7=(e,t,i=d6)=>e>t||((e,t,i=d6)=>Math.abs(e-t)<=i)(e,t,i),ue=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},ut=(e,t)=>e.ended||e.loop?e.ended:!!(t&&ue(e,t))||((e,t=d6)=>e.paused&&d7(e.currentTime,e.duration,t))(e),ui=(e,t,i)=>{var a,r,n;ua(t,i,e);let{metadata:s={}}=e,{view_session_id:o=d1()}=s,l=null!=(a=null==e?void 0:e.metadata)&&a.video_id?e.metadata.video_id:uc(e)&&null!=(n=null!=(r=d3(e.playbackId))?r:d4(e.src))?n:e.src;s.view_session_id=o,s.video_id=l,e.metadata=s,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{var i;let a=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let n=e.muxDataKeepSession;e.muxDataKeepSession=!0;let s=null==(i=dQ.get(t))?void 0:i.coreReference;ui(e,t,s),e.muxDataKeepSession=n,e.useWebkitFairplay=!1,a&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},dQ.set(t,{retryCount:0});let d=un(e,t),u=(({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return nk(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d})(e,t,d);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?d&&t.mux.addHLSJS({hlsjs:d,Hls:d?nl:void 0}):up(e,t,d),uv(e,t,d),nj(t),n0(t);let m=((e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=nU(a)?a:!!a,o=()=>{r||nk(t,"playing",()=>{r=!0},{once:!0})};if(o(),nk(t,"loadstart",()=>{r=!1,o(),nW(t,s)},{once:!0}),nk(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==nb?e.streamType===nv:!Number.isFinite(t.duration)),nW(t,s)},{once:!0}),i&&i.once(nl.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==nb?e.streamType===nv:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&nk(t,"play",()=>{"metadata"===t.preload?i.once(nl.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||nW(t,s=nU(e)?e:!!e)}})(e,t,d);((e,t,i)=>{let{minPreloadSegments:a}=e;if(null==a||a<=0||!i)return;let r=0,n=!1,s=t.playbackRate||1,o=()=>{0!==t.playbackRate&&(s=t.playbackRate,t.playbackRate=0)};t.playbackRate=0,nk(t,"ratechange",o);let l=(e,{frag:i})=>{n||"main"!==i.type||++r>=a&&(n=!0,t.removeEventListener("ratechange",o),t.playbackRate=s)};i.on(nl.Events.FRAG_BUFFERED,l),t.addEventListener("teardown",()=>{n||(n=!0,i.off(nl.Events.FRAG_BUFFERED,l),t.playbackRate=s)},{once:!0})})(e,t,d),((e,t,i)=>{let{initialEstimateSegments:a}=e;if(null==a||a<=0||!i)return;let r=0;i.on(nl.Events.FRAG_BUFFERED,(e,{frag:t})=>{"main"===t.type&&++r<a&&i.abrController.resetEstimator(i.config.abrEwmaDefaultEstimate)})})(e,0,d);let c={engine:d,setAutoplay:m,setPreload:u},h=dQ.get(t);return h&&(h.coreReference=c),c},ua=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",ug),e.removeEventListener("error",uf),e.removeEventListener("durationchange",ub),dQ.delete(e),e.dispatchEvent(new Event("teardown")))};function ur(e,t){var i;let a=n_(e);if(a!==ny.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=dJ&&("mse"===n||dz||!(/^((?!chrome|android).)*safari/i.test(dj)&&t.canPlayType("application/vnd.apple.mpegurl")));return r&&(n===ng||!s)}var un=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l,initialBandwidthEstimateKbps:d}=e,u=n_(e)===ny.M3U8,m=ur(e,t);if(u&&!m&&dJ){let u={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...null!=d?{abrEwmaDefaultEstimate:1e3*d}:{}},m=us(a),c=uo(e),h=[nE.QUERY,nE.HEADER].includes(s)?{useHeaders:s===nE.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,p=uh(e,o),v=new nl({debug:i,startPosition:r,cmcd:h,xhrSetup:(e,t)=>{var i,a;if(s&&s!==nE.QUERY)return;let r=nR(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},...u,...p,...m,...c,...o});return p.capLevelController===n4&&void 0!==l&&n4.setMaxAutoResolution(v,l),v.on(nl.Events.MANIFEST_PARSED,async function(e,i){var a,r;let n=null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&dq(null!=(r=null==n?void 0:n.URI)?r:null==n?void 0:n.VALUE,t)}),v}},us=e=>e===nv?{backBufferLength:8}:{},uo=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=d3(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:uu(e,"fairplay"),serverCertificateUrl:um(e,"fairplay")},"com.widevine.alpha":{licenseUrl:uu(e,"widevine")},"com.microsoft.playready":{licenseUrl:uu(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=e.includes("fps")?dF:e.includes("playready")?"playready":e.includes("widevine")?"widevine":void 0;return null==a||a(i),t}))}:{}},ul=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},ud=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},uu=({playbackId:e,tokens:{drm:t}={},customDomain:i=dX},a)=>{let r=d3(e);return`https://license.${i.toLocaleLowerCase().endsWith(dX)?i:dX}/license/${a}/${r}?token=${t}`},um=({playbackId:e,tokens:{drm:t}={},customDomain:i=dX},a)=>{let r=d3(e);return`https://license.${i.toLocaleLowerCase().endsWith(dX)?i:dX}/appcert/${a}/${r}?token=${t}`},uc=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(dX)||!!i&&a.includes(i.toLocaleLowerCase())},uh=(e,t)=>{let i={};return i.capLevelToPlayerSize=e.capRenditionToPlayerSize,null==i.capLevelToPlayerSize?(i.capLevelController=n4,i.capLevelToPlayerSize=!0):i.capLevelController=no.CapLevelController,i},up=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=ns.default,muxDataSDKOptions:o={}}=e,l=uc(e);if(!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:m,disableCookies:c}=e,h={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};s.monitor(t,{debug:m,beaconCollectionDomain:u,hlsjs:i,Hls:i?nl:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:c,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...h}})}},uv=(e,t,i)=>{var a,r;let n=ur(e,t),{src:s,customDomain:o=dX}=e,l=()=>{t.ended||e.disablePseudoEnded||!ut(t,i)||(ue(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},d,u,m=()=>{let e=d8(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(u!==a||d!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),d=i,u=a};if(nk(t,"durationchange",m),t&&n){let i=n_(e);if("string"==typeof s){if(s.endsWith(".mp4")&&s.includes(o)){let e=d4(s);dq(new URL(`https://stream.${o}/${e}/metadata.json`).toString(),t)}let n=()=>{if(d9(t)!==nv||Number.isFinite(t.duration))return;let e=setInterval(m,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),nk(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},l=async()=>dG(s,t,i).then(n).catch(i=>{if(i instanceof Response){let a=n1(i,nd,e);if(a)return void uE(t,a)}});if("none"===t.preload){let e=()=>{l(),t.removeEventListener("loadedmetadata",i)},i=()=>{l(),t.removeEventListener("play",e)};nk(t,"play",e,{once:!0}),nk(t,"loadedmetadata",i,{once:!0})}else l();null!=(a=e.tokens)&&a.drm?((e,t)=>{let i={mediaEl:t,getAppCertificate:()=>ul(um(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=n1(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)}),getLicenseKey:t=>ud(t,uu(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=n1(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)}),saveAndDispatchError:uE,drmTypeCb:()=>{var t;null==(t=e.drmTypeCb)||t.call(e,dF)}};if(e.useWebkitFairplay)(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let t=new nm(nN("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),nm.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000005,a(e,t),()=>{}}let n=t(),s=null,o=t=>{(async()=>{try{var i,r;let a,s,o,u,m,c,h,p;e.webkitKeys||l();let v=await n;if(null===t.initData||null==v)return;let b=(i=t.initData,r=v,a=function(e){let t=new ArrayBuffer(2*e.length),i=new DataView(t);for(let t=0;t<e.length;t++)i.setUint16(2*t,e.charCodeAt(t),!0);return t}(dV(i)),s=new Uint8Array(i),o=new Uint8Array(a),u=new Uint8Array(r),m=new Uint8Array(s.byteLength+4+u.byteLength+4+o.byteLength),c=0,h=e=>{m.set(e,c),c+=e.byteLength},p=e=>{let t=new DataView(m.buffer),i=e.byteLength;t.setUint32(c,i,!0),c+=4,h(e)},h(s),p(o),p(u),m);d(b)}catch(t){console.error("Could not start encrypted playback due to exception",t),a(e,t)}})()},l=()=>{try{let t=new WebKitMediaKeys("com.apple.fps.1_0");e.webkitSetMediaKeys(t),r()}catch{let e=new nm("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",nm.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory="drm",e.muxCode=5000001,e}},d=t=>{let r=e.webkitKeys.createSession("application/vnd.apple.mpegurl",t),n=async t=>{try{let e=t.message,a=await i(e);r.update(a)}catch(t){console.error("Error on FairPlay session message",t),a(e,t)}},o=t=>{let i=t.target.error;if(!i)return;console.error(`Internal Webkit Key Session Error - sysCode: ${i.systemCode} code: ${i.code}`);let r=new nm(nN("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),nm.MEDIA_ERR_ENCRYPTED,!0);r.errorCategory="drm",r.muxCode=5000005,a(e,r)},l=()=>{r.removeEventListener("webkitkeymessage",n),r.removeEventListener("webkitkeyerror",o),e.removeEventListener("teardown",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",l),s=null;try{r.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",l,{once:!0}),r.addEventListener("webkitkeymessage",n),r.addEventListener("webkitkeyerror",o),e.addEventListener("teardown",l),s=l},u=()=>{e.removeEventListener("webkitneedkey",o),e.removeEventListener("teardown",u),null==s||s();try{e.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",o),e.addEventListener("teardown",u,{once:!0})})(i);else{let t=(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async t=>{try{let i=t.initDataType;if("skd"!==i)return void console.error(`Received unexpected initialization data type "${i}"`);e.mediaKeys||await l(i);let a=t.initData;if(null==a)return void console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);await d(i,a)}catch(t){a(e,t);return}},l=async i=>{let n=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(e=>(r(),e)).catch(()=>{let t=new nm(nN("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),nm.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000001,a(e,t)});if(!n)return;let s=await n.createMediaKeys();try{let e=await t();await s.setServerCertificate(e).catch(()=>{let e=nN("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new nm(e,nm.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000004,Promise.reject(t)})}catch(t){a(e,t);return}await e.setMediaKeys(s)},d=async(t,r)=>{let o=e.mediaKeys.createSession(),l=async t=>{let r=t.message,n=await i(r);try{await o.update(n)}catch{let t=new nm(nN("Failed to update DRM license. This may be an issue with the player or your protected content."),nm.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000003,a(e,t)}},d=()=>{o.keyStatuses.forEach(t=>{let i;"internal-error"===t?((i=new nm(nN("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),nm.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",i.muxCode=5000005):("output-restricted"===t||"output-downscaled"===t)&&((i=new nm(nN("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),nm.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",i.muxCode=5000006),i&&a(e,i)})};o.addEventListener("keystatuseschange",d),o.addEventListener("message",l);let u=async()=>{o.removeEventListener("keystatuseschange",d),o.removeEventListener("message",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",u),e.removeEventListener("teardown",u),await o.close().catch(e=>{console.warn("There was an error when closing EME session",e)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",u,{once:!0}),e.addEventListener("teardown",u,{once:!0}),s=u,await o.generateRequest(t,r).catch(async t=>{if("NotSupportedError"===t.name&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==n||n();else{let e=new nm(nN("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),nm.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory="drm",e.muxCode=5000002,console.error("Failed to generate license request",t),Promise.reject(e)}})},u=async()=>{e.removeEventListener("encrypted",o),e.removeEventListener("teardown",u),s&&await s(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",o),e.addEventListener("teardown",u,{once:!0}),u})({fallbackToWebkitFairplay:async()=>{var i;await t(),null==(i=e.fallbackToWebkitFairplay)||i.call(e)},...i})}})(e,t):nk(t,"encrypted",()=>{let e=new nm(nN("Attempting to play DRM-protected content without providing a DRM token."),nm.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory="drm",e.muxCode=5000002,uE(t,e)},{once:!0}),t.setAttribute("src",s),e.startTime&&((null!=(r=dQ.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",ub,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",ug),t.addEventListener("error",uf),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),nk(t,"pause",l),nk(t,"seeked",l),nk(t,"play",()=>{t.ended||d7(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else{let a,r;i&&s?(i.once(nl.Events.LEVEL_LOADED,(e,a)=>{((e,t,i)=>{var a,r,n,s,o,l,d,u,m;let c,h,p,v,b,{streamType:g,targetLiveWindow:E,liveEdgeStartOffset:f,lowLatency:y}=(h=nI(c=e.type),p=nC(c),b=!!(null!=(m=e.partList)&&m.length),h===nv&&(v=b?2*e.partTarget:3*e.targetduration),{streamType:h,targetLiveWindow:p,liveEdgeStartOffset:v,lowLatency:b});if(g===nv){y?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=dQ.get(t))?o:{}).seekable=e}(null!=(l=dQ.get(t))?l:{}).liveEdgeStartOffset=f,(null!=(d=dQ.get(t))?d:{}).targetLiveWindow=E,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=dQ.get(t))?u:{}).streamType=g,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(a.details,t,i),m(),d9(t)!==nv||Number.isFinite(t.duration)||(i.on(nl.Events.LEVEL_UPDATED,m),nk(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(nl.Events.LEVELS_UPDATED,m)}))}),i.on(nl.Events.ERROR,(a,r)=>{var n,s;let o=uN(r,e);if(2412e3===o.muxCode){let e=null!=(n=dQ.get(t))?n:{},a=null!=(s=e.retryCount)?s:0;if(a<6){let n=0===a?5e3:6e4,s=new nm(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),uE(t,s);let l=setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===r.details&&r.url&&i.loadSource(r.url)},n);t.addEventListener("teardown",()=>clearTimeout(l),{once:!0});return}{e.retryCount=0;let i=new nm('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',o.code,o.fatal);Object.assign(i,o),uE(t,i);return}}uE(t,o)}),i.on(nl.Events.MANIFEST_LOADED,()=>{let e=dQ.get(t);e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",uf),nk(t,"waiting",l),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(nl.Events.MANIFEST_PARSED,function(t,i){o();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(nl.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(s(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}});let r=()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)};e.audioTracks.addEventListener("change",r),t.on(nl.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let n=e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)};null==(i=e.videoRenditions)||i.addEventListener("change",n);let s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},o=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),s()};t.once(nl.Events.DESTROYING,()=>{var t,i;o(),null==(t=e.audioTracks)||t.removeEventListener("change",r),null==(i=e.videoRenditions)||i.removeEventListener("change",n)})}(e,i),i.on(nl.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(e,{tracks:a})=>{a.forEach(e=>{var a,r;let n=null!=(a=e.subtitleTrack)?a:e.closedCaptions,s=i.subtitleTracks.findIndex(({lang:t,name:i,type:a})=>t==(null==n?void 0:n.lang)&&i===e.label&&a.toLowerCase()===e.kind),o=(null!=(r=e._id)?r:e.default)?"default":`${e.kind}${s}`;n$(t,e.kind,e.label,null==n?void 0:n.lang,o,e.default)})}),a=()=>{if(!i.subtitleTracks.length)return;let e=Array.from(t.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!e)return;let a=i.subtitleTracks[i.subtitleTrack],r=a?a.default?"default":`${i.subtitleTracks[i.subtitleTrack].type.toLowerCase()}${i.subtitleTrack}`:void 0;if(i.subtitleTrack<0||(null==e?void 0:e.id)!==r){let t=i.subtitleTracks.findIndex(({lang:t,name:i,type:a,default:r})=>"default"===e.id&&r||t==e.language&&i===e.label&&a.toLowerCase()===e.kind);i.subtitleTrack=t}(null==e?void 0:e.id)===r&&e.cues&&Array.from(e.cues).forEach(t=>{e.addCue(t)})},t.textTracks.addEventListener("change",a),i.on(nl.Events.CUES_PARSED,(e,{track:i,cues:a})=>{let r=t.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),i.once(nl.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",a),t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})}),r=()=>{Array.from(t.textTracks).forEach(e=>{var i,a;if(!["subtitles","caption"].includes(e.kind)&&("thumbnails"===e.label||"chapters"===e.kind)){if(!(null!=(i=e.cues)&&i.length)){let i="track";e.kind&&(i+=`[kind="${e.kind}"]`),e.label&&(i+=`[label="${e.label}"]`);let r=t.querySelector(i),n=null!=(a=null==r?void 0:r.getAttribute("src"))?a:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==e.mode&&(e.mode="hidden")}})},i.once(nl.Events.MANIFEST_LOADED,r),i.once(nl.Events.MEDIA_ATTACHED,r),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")}};function ub(e){var t;let i=e.target,a=null==(t=dQ.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function ug(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new nm(i,a);if(t.src&&a===nm.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var e;let i=null!=(e=d5(t))?e:t.error;(null==i?void 0:i.code)===nm.MEDIA_ERR_SRC_NOT_SUPPORTED&&uE(t,r)},500);if(t.src&&(a!==nm.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}uE(t,r)}function uE(e,t){var i;t.fatal&&((null!=(i=dQ.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function uf(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof nm))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=dQ.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var uy,uA,uT,uk,uw,u_,uI,uC,uS,uM,uR,uL,ux,uD,uN=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[nl.ErrorTypes.NETWORK_ERROR]:nm.MEDIA_ERR_NETWORK,[nl.ErrorTypes.MEDIA_ERROR]:nm.MEDIA_ERR_DECODE,[nl.ErrorTypes.KEY_SYSTEM_ERROR]:nm.MEDIA_ERR_ENCRYPTED},s,o=[nl.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,nl.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?nm.MEDIA_ERR_NETWORK:n[e.type];if(o===nm.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=e.type===nl.ErrorTypes.KEY_SYSTEM_ERROR?"drm":e.type===nl.ErrorTypes.NETWORK_ERROR?nd:void 0)?i:nd;s=null!=(a=n1(e.response,r,t,e.fatal))?a:new nm("",o,e.fatal)}else o===nm.MEDIA_ERR_ENCRYPTED?e.details===nl.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new nm(nN("Attempting to play DRM-protected content without providing a DRM token."),nm.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000002):e.details===nl.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new nm(nN("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),nm.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000001):e.details===nl.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new nm(nN("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),nm.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",s.muxCode=5000002):e.details===nl.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new nm(nN("Failed to update DRM license. This may be an issue with the player or your protected content."),nm.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000003):e.details===nl.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new nm(nN("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),nm.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000004):e.details===nl.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new nm(nN("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),nm.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000005):e.details===nl.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new nm(nN("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),nm.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",s.muxCode=5000006):((s=new nm(e.error.message,nm.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5e6):s=new nm("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s},uO=e.i(502709),uP=e=>{throw TypeError(e)},uU=(e,t,i)=>t.has(e)||uP("Cannot "+i),uW=(e,t,i)=>(uU(e,t,"read from private field"),i?i.call(e):t.get(e)),uB=(e,t,i)=>t.has(e)?uP("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),u$=(e,t,i,a)=>(uU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uH=(e,t,i)=>(uU(e,t,"access private method"),i),uV=(()=>{try{return"0.31.0"}catch{}return"UNKNOWN"})(),uF=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,uK={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},uY=Object.values(uK),uG="mux-video",uq=class extends uO.CustomVideoElement{constructor(){super(),uB(this,uR),uB(this,uy),uB(this,uA),uB(this,uT,{}),uB(this,uk,{}),uB(this,uw),uB(this,u_),uB(this,uI),uB(this,uC),uB(this,uS,""),uB(this,uM,e=>{var t,i,a;let r=(i=this.nativeEl,null==(a=dQ.get(i))?void 0:a.metadata),n=null!=(t=this.metadata)?t:{};this.metadata={...r,...n},(null==r?void 0:r["com.mux.video.branding"])==="mux-free-plan"&&(u$(this,uS,"default"),this.updateLogo())}),uB(this,ux),u$(this,uA,d0())}static get NAME(){return uG}static get VERSION(){return uV}static get observedAttributes(){var e;return[...uY,...null!=(e=uO.CustomVideoElement.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?uF:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${uO.CustomVideoElement.getTemplateHTML(e)}
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
        ${this.getLogoHTML(null!=(t=e[uK.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(uK.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?nf.includes(e)?this.setAttribute(uK.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${nf.join()}`):this.removeAttribute(uK.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(uK.PLAYER_INIT_TIME)?+this.getAttribute(uK.PLAYER_INIT_TIME):uW(this,uA)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(uK.PLAYER_INIT_TIME):this.setAttribute(uK.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=uW(this,uI))?e:uG}set playerSoftwareName(e){u$(this,uI,e)}get playerSoftwareVersion(){var e;return null!=(e=uW(this,u_))?e:uV}set playerSoftwareVersion(e){u$(this,u_,e)}get _hls(){var e;return null==(e=uW(this,uR,uL))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=d5(this.nativeEl))?e:null}get errorTranslator(){return uW(this,uC)}set errorTranslator(e){u$(this,uC,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(uK.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(uK.TYPE,e):this.removeAttribute(uK.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(uK.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(uK.DEBUG,""):this.removeAttribute(uK.DEBUG))}get disableTracking(){return this.hasAttribute(uK.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(uK.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(uK.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(uK.DISABLE_COOKIES,""):this.removeAttribute(uK.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(uK.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(uK.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(uK.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(uK.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(uK.START_TIME):this.setAttribute(uK.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(uK.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(null==e?this.removeAttribute(uK.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(uK.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(uK.INITIAL_ESTIMATE_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(null==e?this.removeAttribute(uK.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(uK.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(uK.MIN_PRELOAD_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set minPreloadSegments(e){e!==this.minPreloadSegments&&(null==e?this.removeAttribute(uK.MIN_PRELOAD_SEGMENTS):this.setAttribute(uK.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(uK.PLAYBACK_ID)?this.getAttribute(uK.PLAYBACK_ID):null!=(e=d4(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(uK.PLAYBACK_ID,e):this.removeAttribute(uK.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(uK.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(uK.MAX_RESOLUTION,e):this.removeAttribute(uK.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(uK.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(uK.MIN_RESOLUTION,e):this.removeAttribute(uK.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(uK.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(uK.MAX_AUTO_RESOLUTION):this.setAttribute(uK.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(uK.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(uK.RENDITION_ORDER,e):this.removeAttribute(uK.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(uK.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(uK.PROGRAM_START_TIME):this.setAttribute(uK.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(uK.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(uK.PROGRAM_END_TIME):this.setAttribute(uK.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(uK.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(uK.ASSET_START_TIME):this.setAttribute(uK.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(uK.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(uK.ASSET_END_TIME):this.setAttribute(uK.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(uK.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(uK.CUSTOM_DOMAIN,e):this.removeAttribute(uK.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return(null==(e=this._hlsConfig)?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:uW(this,ux)}set capRenditionToPlayerSize(e){u$(this,ux,e)}get drmToken(){var e;return null!=(e=this.getAttribute(uK.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(uK.DRM_TOKEN,e):this.removeAttribute(uK.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(uK.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(uK.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(uK.PLAYBACK_ID)){let[,e]=nw(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(uK.PLAYBACK_TOKEN,e):this.removeAttribute(uK.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(uK.PLAYBACK_TOKEN),t=this.getAttribute(uK.DRM_TOKEN);return{...uW(this,uk),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){u$(this,uk,null!=e?e:{})}get ended(){return ut(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(uK.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(uK.ENV_KEY,e):this.removeAttribute(uK.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(uK.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(uK.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(uK.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(uK.STREAM_TYPE))?e:d9(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(uK.STREAM_TYPE,e):this.removeAttribute(uK.STREAM_TYPE))}get targetLiveWindow(){var e,t,i;return this.hasAttribute(uK.TARGET_LIVE_WINDOW)?+this.getAttribute(uK.TARGET_LIVE_WINDOW):(e=this.nativeEl,null!=(i=null==(t=dQ.get(e))?void 0:t.targetLiveWindow)?i:NaN)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(uK.TARGET_LIVE_WINDOW):this.setAttribute(uK.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(uK.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return(e=>{var t;let i=null==(t=dQ.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return NaN;let a=d8(e);return a.length?a.end(a.length-1)-i:NaN})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(uK.LIVE_EDGE_OFFSET))return+this.getAttribute(uK.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(uK.LIVE_EDGE_OFFSET):this.setAttribute(uK.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return d8(this.nativeEl)}async addCuePoints(e){return nY(this.nativeEl,e)}get activeCuePoint(){return nq(this.nativeEl)}get cuePoints(){return function(e,t={label:nF}){let i=nH(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>nG(e)):[]}(this.nativeEl)}async addChapters(e){return nX(this.nativeEl,e)}get activeChapter(){return nJ(this.nativeEl)}get chapters(){return function(e,t={label:nZ}){var i;let a=nH(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>nQ(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(uK.PREFER_PLAYBACK);if("mse"===e||e===ng)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===ng?this.setAttribute(uK.PREFER_PLAYBACK,e):this.removeAttribute(uK.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![uK.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...uW(this,uT)}}set metadata(e){u$(this,uT,null!=e?e:{}),this.mux&&this.mux.emit("hb",uW(this,uT))}get _hlsConfig(){return uW(this,uw)}set _hlsConfig(e){u$(this,uw,e)}get logo(){var e;return null!=(e=this.getAttribute(uK.LOGO))?e:uW(this,uS)}set logo(e){e?this.setAttribute(uK.LOGO,e):this.removeAttribute(uK.LOGO)}load(){ui(this,this.nativeEl,uW(this,uR,uL))}unload(){ua(this.nativeEl,uW(this,uR,uL),this)}attributeChangedCallback(e,t,i){var a,r;switch(uO.CustomVideoElement.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case uK.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case uK.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?uH(this,uR,uD).call(this):e&&!a?this.unload():e&&a&&(this.unload(),uH(this,uR,uD).call(this));break}case"autoplay":if(i===t)break;null==(a=uW(this,uR,uL))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=uW(this,uR,uL))||r.setPreload(i);break;case uK.PLAYBACK_ID:case uK.CUSTOM_DOMAIN:case uK.MAX_RESOLUTION:case uK.MIN_RESOLUTION:case uK.RENDITION_ORDER:case uK.PROGRAM_START_TIME:case uK.PROGRAM_END_TIME:case uK.ASSET_START_TIME:case uK.ASSET_END_TIME:case uK.PLAYBACK_TOKEN:this.src=d2(this);break;case uK.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case uK.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case uK.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case uK.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case uK.LOGO:(null==i||i!==t)&&this.updateLogo();break;case uK.DISABLE_TRACKING:if(null==i||i!==t){let e=this.currentTime,t=this.paused;this.unload(),uH(this,uR,uD).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case uK.DISABLE_COOKIES:(null==i||i!==t)&&this.disableCookies&&document.cookie.split(";").forEach(e=>{e.trim().startsWith("muxData")&&(document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break;case uK.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(uW(this,uS)||this.logo))}connectedCallback(){var e,t;null==(e=super.connectedCallback)||e.call(this),null==(t=this.nativeEl)||t.addEventListener("muxmetadata",uW(this,uM)),this.nativeEl&&this.src&&!uW(this,uR,uL)&&uH(this,uR,uD).call(this)}disconnectedCallback(){var e,t;null==(e=this.nativeEl)||e.removeEventListener("muxmetadata",uW(this,uM)),this.unload(),null==(t=super.disconnectedCallback)||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};uy=new WeakMap,uA=new WeakMap,uT=new WeakMap,uk=new WeakMap,uw=new WeakMap,u_=new WeakMap,uI=new WeakMap,uC=new WeakMap,uS=new WeakMap,uM=new WeakMap,uR=new WeakSet,uL=function(){var e,t;return e=this.nativeEl,null==(t=dQ.get(e))?void 0:t.coreReference},ux=new WeakMap,uD=async function(){uW(this,uy)||(await u$(this,uy,Promise.resolve()),u$(this,uy,null),this.load())};var uj=e.i(861554);e.i(791205);var uZ=e.i(7180),uz=e=>{throw TypeError(e)},uQ=(e,t,i)=>t.has(e)||uz("Cannot "+i),uX=(e,t,i)=>(uQ(e,t,"read from private field"),i?i.call(e):t.get(e)),uJ=(e,t,i)=>t.has(e)?uz("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),u0=(e,t,i,a)=>(uQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),u1=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends u1{});var u2,u3=class extends u1{},u4=class{constructor(e,t={}){uJ(this,u2),u0(this,u2,null==t?void 0:t.detail)}get detail(){return uX(this,u2)}initCustomEvent(){}};u2=new WeakMap;var u5={document:{createElement:function(e,t){return new u3}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(u3)},CustomEvent:u4,EventTarget:u1,HTMLElement:u3,HTMLVideoElement:class extends u1{}},u9="u"<typeof window||void 0===globalThis.customElements,u8=u9?u5:globalThis;u9&&u5.document;var u6,u7=class extends(0,uj.CastableMediaMixin)((0,uZ.MediaTracksMixin)(uq)){constructor(){super(...arguments),uJ(this,u6)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=uX(this,u6))?e:this.muxCastCustomData}set castCustomData(e){u0(this,u6,e)}};u6=new WeakMap,u8.customElements.get("mux-video")||(u8.customElements.define("mux-video",u7),u8.MuxVideoElement=u7),e.i(667880);var me=e.i(117431),mt=e.i(34642),mi=e.i(129159),ma=e.i(992617),mr=e.i(886845),mn=e.i(95277);e.i(368103);var ms=e=>{throw TypeError(e)},mo=(e,t,i)=>t.has(e)||ms("Cannot "+i),ml=(e,t,i)=>(mo(e,t,"read from private field"),i?i.call(e):t.get(e)),md=(e,t,i)=>t.has(e)?ms("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),mu=(e,t,i,a)=>(mo(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),mm=(e,t,i)=>(mo(e,t,"access private method"),i),mc=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends mc{});var mh,mp=class extends mc{},mv=class{constructor(e,t={}){md(this,mh),mu(this,mh,null==t?void 0:t.detail)}get detail(){return ml(this,mh)}initCustomEvent(){}};mh=new WeakMap;var mb={document:{createElement:function(e,t){return new mp}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(mp)},CustomEvent:mv,EventTarget:mc,HTMLElement:mp,HTMLVideoElement:class extends mc{}},mg="u"<typeof window||void 0===globalThis.customElements,mE=mg?mb:globalThis,mf=mg?mb.document:globalThis.document;function my(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function mA(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function mT(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function mk(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var mw,m_,mI,mC=(e,t)=>!!e&&!!t&&(!!e.contains(t)||mC(e,t.getRootNode().host)),mS="mux.com",mM=(()=>{try{return"3.13.0"}catch{}return"UNKNOWN"})(),mR=e=>{if(e){if([nv,np].includes(e))return e;if(null!=e&&e.includes("live"))return nv}},mL={crossorigin:"crossOrigin",playsinline:"playsInline"},mx=class{constructor(e,t){md(this,mw),md(this,m_),md(this,mI,[]),mu(this,mw,e),mu(this,m_,t)}[Symbol.iterator](){return ml(this,mI).values()}get length(){return ml(this,mI).length}get value(){var e;return null!=(e=ml(this,mI).join(" "))?e:""}set value(e){var t;e!==this.value&&(mu(this,mI,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return ml(this,mI)[e]}values(){return ml(this,mI).values()}keys(){return ml(this,mI).keys()}forEach(e){ml(this,mI).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||ml(this,mI).push(e)}),(""!==this.value||null!=(t=ml(this,mw))&&t.hasAttribute(`${ml(this,m_)}`))&&null!=(i=ml(this,mw))&&i.setAttribute(`${ml(this,m_)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{ml(this,mI).splice(ml(this,mI).indexOf(e),1)}),null==(t=ml(this,mw))||t.setAttribute(`${ml(this,m_)}`,`${this.value}`)}contains(e){return ml(this,mI).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};mw=new WeakMap,m_=new WeakMap,mI=new WeakMap;var mD=`[mux-player ${mM}]`;function mN(...e){console.warn(mD,...e)}function mO(...e){console.error(mD,...e)}function mP(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${nN("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),mN(i)}var mU={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},mW={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},mB=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),m$=[...Object.values(mU).filter(e=>mU.PLAYSINLINE!==e),...Object.values(mW)];function mH(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var mV=class extends mE.HTMLElement{static get observedAttributes(){return m$}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case mW.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case mW.VOLUME:{let e=null!=(a=mT(i))?a:1;this.media&&(this.media.volume=e);return}case mW.PLAYBACKRATE:{let e=null!=(r=mT(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:mB}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:mB}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=mT(this.getAttribute(mW.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(mW.PLAYBACKRATE,`${e}`):this.removeAttribute(mW.PLAYBACKRATE)}get crossOrigin(){return mH(this,mU.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(mU.CROSSORIGIN,`${e}`)}get autoplay(){return null!=mH(this,mU.AUTOPLAY)}set autoplay(e){e?this.setAttribute(mU.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(mU.AUTOPLAY)}get loop(){return null!=mH(this,mU.LOOP)}set loop(e){e?this.setAttribute(mU.LOOP,""):this.removeAttribute(mU.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=mH(this,mU.MUTED)}set defaultMuted(e){e?this.setAttribute(mU.MUTED,""):this.removeAttribute(mU.MUTED)}get playsInline(){return null!=mH(this,mU.PLAYSINLINE)}set playsInline(e){mO("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(mU.PRELOAD,e):this.removeAttribute(mU.PRELOAD)}},mF=`:host {
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
`,mK=new WeakMap,mY=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=mK.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=mK.get(this.element);e&&e.delete(this.type)}}static for(t){mK.has(t.element)||mK.set(t.element,new Map);let i=t.attributeName.slice(2),a=mK.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},mG=new Map,mq=new WeakMap,mj=new WeakMap,mZ=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(mG.has(this.stringsKey))return mG.get(this.stringsKey);{let e=mf.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),mG.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(mq.get(e)!==i){mq.set(e,i);let t=new mn.TemplateInstance(i,this.values,this.processor);mj.set(e,t),e instanceof mn.ChildNodePart?e.replace(...t.children):e.appendChild(t);return}let a=mj.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},mz={processCallback(e,t,i){var a;if(i)for(let[e,r]of t)e in i&&function(e,t){(function(e,t){if(e instanceof mn.AttrPart&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof mn.AttrPart){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof mn.AttrPart&&e.attributeName.startsWith("on")&&(mY.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof mn.ChildNodePart&&(e.replace(""),1)||t instanceof mZ&&e instanceof mn.ChildNodePart&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof mn.ChildNodePart&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof mn.AttrPart){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(e,t)}(r,null!=(a=i[e])?a:"")}};function mQ(e,...t){return new mZ(e,t,mz)}var mX=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),mJ=e=>e.charAt(0).toUpperCase()+e.slice(1),m0=(e,t)=>{let i=(e=>{if(e.muxCode){if(2403210===e.muxCode)return"403-expired-token.md";if(2412202===e.muxCode)return"403-malformatted-token.md";if([2403222,2403221].includes(e.muxCode))return"403-incorrect-aud-value.md";if(2403232===e.muxCode)return"403-playback-id-mismatch.md";if(2403201===e.muxCode)return"missing-signed-tokens.md";if(2404e3===e.muxCode)return"404-not-found.md";if(2412e3===e.muxCode)return"412-not-playable.md"}if(e.code){if(e.code===nm.MEDIA_ERR_NETWORK)return"";if(e.code===nm.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===nm.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(e);return{message:e.message,context:e.context,file:i}},m1=`<template id="media-theme-gerwig">
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
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
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
`,m2=mf.createElement("template");"innerHTML"in m2&&(m2.innerHTML=m1);var m3,m4,m5=class extends mr.MediaThemeElement{};m5.template=null==(m4=null==(m3=m2.content)?void 0:m3.children)?void 0:m4[0],mE.customElements.get("media-theme-gerwig")||mE.customElements.define("media-theme-gerwig",m5);var m9={SRC:"src",POSTER:"poster"},m8={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},m6=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],m7=mt.MediaErrorDialog.formatErrorMessage;function ce(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}mt.MediaErrorDialog.formatErrorMessage=e=>{var t,i;if(e instanceof nm){let a=((e,t=!1)=>({title:((e,t=!1)=>{var i,a;if(e.muxCode){let r=mJ(null!=(i=e.errorCategory)?i:"video"),n=nu(null!=(a=e.errorCategory)?a:nd);if(2000002===e.muxCode)return nN("Your device appears to be offline",t);if(2403210===e.muxCode)return nN("{category} URL has expired",t).format({category:r});if([2403232,2403222,2403221,2412202].includes(e.muxCode))return nN("{category} URL is formatted incorrectly",t).format({category:r});if(2403201===e.muxCode)return nN("Invalid {categoryName} URL",t).format({categoryName:n});if(2404e3===e.muxCode)return nN("{category} does not exist",t).format({category:r});if(2412e3===e.muxCode){let i="live"===e.streamType?"Live stream":"Video";return nN("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===nm.MEDIA_ERR_NETWORK)return nN("Network Error",t);if(e.code===nm.MEDIA_ERR_DECODE)return nN("Media Error",t);if(e.code===nm.MEDIA_ERR_SRC_NOT_SUPPORTED)return nN("Source Not Supported",t)}return nN("Error",t)})(e,t).toString(),message:((e,t=!1)=>{var i,a;if(e.muxCode){let r=mJ(null!=(i=e.errorCategory)?i:"video"),n=nu(null!=(a=e.errorCategory)?a:nd);return 2000002===e.muxCode?nN("Check your internet connection and try reloading this video.",t):2403210===e.muxCode?nN("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):2403232===e.muxCode?nN("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):2412202===e.muxCode?nN("{category} URL is formatted incorrectly",t).format({category:r}):[2403222,2403221].includes(e.muxCode)?nN("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[2403201,24e5].includes(e.muxCode)?nN("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):2404e3===e.muxCode?"":e.message}return e.code&&(e.code===nm.MEDIA_ERR_NETWORK||e.code===nm.MEDIA_ERR_DECODE||e.code===nm.MEDIA_ERR_SRC_NOT_SUPPORTED),e.message})(e,t).toString()}))(e,!1);return`
      ${null!=a&&a.title?`<h3>${a.title}</h3>`:""}
      ${null!=a&&a.message||null!=a&&a.linkUrl?`<p>
        ${null==a?void 0:a.message}
        ${null!=a&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=a.linkText)?t:""} ${nN("(opens in a new window)")}"
              >${null!=(i=a.linkText)?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return m7(e)};var ct,ci,ca,cr,cn,cs,co,cl,cd,cu,cm,cc,ch,cp,cv,cb,cg,cE,cf,cy,cA,cT=Object.values(uK),ck=Object.values(m9),cw=Object.values(m8),c_="mux-player",cI={isDialogOpen:!1},cC={redundant_streams:!0},cS=class extends mV{constructor(){super(),md(this,ch),md(this,ct),md(this,ci,!1),md(this,ca,{}),md(this,cr,!0),md(this,cn,new mx(this,"hotkeys")),md(this,cs),md(this,co,()=>mm(this,ch,cg).call(this)),md(this,cl,()=>mm(this,ch,cg).call(this)),md(this,cd,()=>mm(this,ch,cg).call(this)),md(this,cu),md(this,cm,{...cI,onCloseErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&mm(this,ch,cb).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(mC(this,mf.activeElement)||e.preventDefault())}}),md(this,cc,e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof nm)){let{message:e,code:t}=null!=i?i:{};i=new nm(e,t)}if(!(null!=i&&i.fatal)){mN(i),i.data&&mN(`${i.name} data:`,i.data);return}let a=m0(i,!1);a.message&&mP(a),mO(i),i.data&&mO(`${i.name} data:`,i.data),mm(this,ch,cb).call(this,{isDialogOpen:!0})}),mu(this,ct,d0()),this.attachShadow({mode:"open"}),mm(this,ch,cv).call(this),this.isConnected&&mm(this,ch,cp).call(this)}static get NAME(){return c_}static get VERSION(){return mM}static get observedAttributes(){var e;return[...null!=(e=mV.observedAttributes)?e:[],...ck,...cT,...cw]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){mm(this,ch,cp).call(this);let e=this.media;e&&(e.metadata=ce(this))}disconnectedCallback(){var e,t,i,a,r,n,s,o;null==(e=ml(this,cs))||e.disconnect(),null==(t=this.media)||t.removeEventListener("streamtypechange",ml(this,co)),null==(i=this.media)||i.removeEventListener("loadstart",ml(this,cl)),this.removeEventListener("error",ml(this,cc)),this.media&&(this.media.errorTranslator=void 0),null==(r=null==(a=this.media)?void 0:a.textTracks)||r.removeEventListener("addtrack",ml(this,cd)),null==(s=null==(n=this.media)?void 0:n.textTracks)||s.removeEventListener("removetrack",ml(this,cd)),null==(o=ml(this,cu))||o.call(this),mu(this,cu,void 0),mu(this,ci,!1)}attributeChangedCallback(e,t,i){var a;switch(mm(this,ch,cp).call(this),super.attributeChangedCallback(e,t,i),e){case m8.HOTKEYS:ml(this,cn).value=i;break;case m8.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&mN(nN("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case m8.THUMBNAIL_TOKEN:if(i){let e=nD(i);if(e){let{aud:t}=e;"t"!==t&&mN(nN("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"t",tokenNamePrefix:"thumbnail"}))}}break;case m8.STORYBOARD_TOKEN:if(i){let e=nD(i);if(e){let{aud:t}=e;"s"!==t&&mN(nN("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"s",tokenNamePrefix:"storyboard"}))}}break;case m8.DRM_TOKEN:if(i){let e=nD(i);if(e){let{aud:t}=e;"d"!==t&&mN(nN("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"d",tokenNamePrefix:"drm"}))}}break;case uK.PLAYBACK_ID:null!=i&&i.includes("?token")&&mO(nN("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case uK.STREAM_TYPE:i&&![nv,np,nb].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?1/0:0:mP({file:"invalid-stream-type.md",message:nN("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===nv?null==this.getAttribute(m8.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case m8.FULLSCREEN_ELEMENT:if(null!=i||i!==t){let e=mf.getElementById(i),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case uK.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}[uK.PLAYBACK_ID,m9.SRC,m8.PLAYBACK_TOKEN].includes(e)&&t!==i&&mu(this,cm,{...ml(this,cm),...cI}),mm(this,ch,cg).call(this,{[null!=(a=mL[e])?a:mA(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(ma.MediaUIAttributes.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new mE.CustomEvent(ma.MediaUIEvents.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(ma.MediaStateChangeEvents.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(ma.MediaUIAttributes.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new mE.CustomEvent(ma.MediaUIEvents.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(ma.MediaStateChangeEvents.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(uK.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?nf.includes(e)?this.setAttribute(uK.PREFER_CMCD,e):mN(`Invalid value for preferCmcd. Must be one of ${nf.join()}`):this.removeAttribute(uK.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(ma.MediaUIAttributes.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(ma.MediaUIAttributes.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(m8.THEME))?e:"gerwig"}set theme(e){this.setAttribute(m8.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(m6.includes(i))continue;let a=e.getAttribute(i);t[mA(i)]=""===a||a}return t}set themeProps(e){var t,i;mm(this,ch,cp).call(this);let a={...this.themeProps,...e};for(let r in a){if(m6.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(my(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(my(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(uK.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(uK.PLAYBACK_ID,e):this.removeAttribute(uK.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=cM(this,m9.SRC))?e:void 0:null!=(t=this.getAttribute(m9.SRC))?t:void 0}set src(e){e?this.setAttribute(m9.SRC,e):this.removeAttribute(m9.SRC)}get poster(){var e;let t=this.getAttribute(m9.POSTER);if(null!=t)return t;let{tokens:i}=this;return i.playback&&!i.thumbnail?void mN("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((e,{token:t,customDomain:i=mS,thumbnailTime:a,programTime:r}={})=>{var n;let s=null==t?a:void 0,{aud:o}=null!=(n=nD(t))?n:{};if(!(t&&"t"!==o))return`https://image.${i}/${e}/thumbnail.webp${mk({token:t,time:s,program_time:r})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(m9.POSTER,e):this.removeAttribute(m9.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(m8.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(m8.STORYBOARD_SRC,e):this.removeAttribute(m8.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[nv,nb].includes(this.streamType)||e.playback&&!e.storyboard?void 0:((e,{token:t,customDomain:i=mS,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=nD(t))?n:{};if(!(t&&"s"!==s))return`https://image.${i}/${e}/storyboard.vtt${mk({token:t,format:"webp",program_start_time:a,program_end_time:r})}`})(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(m8.AUDIO)}set audio(e){e?this.setAttribute(m8.AUDIO,""):this.removeAttribute(m8.AUDIO)}get hotkeys(){return ml(this,cn)}get nohotkeys(){return this.hasAttribute(m8.NOHOTKEYS)}set nohotkeys(e){e?this.setAttribute(m8.NOHOTKEYS,""):this.removeAttribute(m8.NOHOTKEYS)}get thumbnailTime(){return mT(this.getAttribute(m8.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(m8.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(m8.VIDEO_TITLE))?e:this.getAttribute(m8.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(m8.VIDEO_TITLE,e):this.removeAttribute(m8.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=cM(this,m8.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(m8.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(m8.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=mE.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(m8.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(m8.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=mE.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(m8.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(m8.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=mE.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(m8.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(m8.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(m8.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(m8.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(m8.PLAYBACK_RATES))return this.getAttribute(m8.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){e?this.setAttribute(m8.PLAYBACK_RATES,e.join(" ")):this.removeAttribute(m8.PLAYBACK_RATES)}get forwardSeekOffset(){var e;return null!=(e=mT(this.getAttribute(m8.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(m8.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=mT(this.getAttribute(m8.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(m8.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(m8.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(m8.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(m8.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return mT(this.getAttribute(m8.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(m8.DEFAULT_DURATION):this.setAttribute(m8.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(uK.PLAYER_INIT_TIME)?mT(this.getAttribute(uK.PLAYER_INIT_TIME)):ml(this,ct)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(uK.PLAYER_INIT_TIME):this.setAttribute(uK.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(uK.PLAYER_SOFTWARE_NAME))?e:c_}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(uK.PLAYER_SOFTWARE_VERSION))?e:mM}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(uK.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(uK.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(uK.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(uK.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(uK.MAX_RESOLUTION,e):this.removeAttribute(uK.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(uK.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(uK.MIN_RESOLUTION,e):this.removeAttribute(uK.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(uK.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(uK.MAX_AUTO_RESOLUTION):this.setAttribute(uK.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(uK.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(uK.RENDITION_ORDER,e):this.removeAttribute(uK.RENDITION_ORDER))}get programStartTime(){return mT(this.getAttribute(uK.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(uK.PROGRAM_START_TIME):this.setAttribute(uK.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return mT(this.getAttribute(uK.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(uK.PROGRAM_END_TIME):this.setAttribute(uK.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return mT(this.getAttribute(uK.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(uK.ASSET_START_TIME):this.setAttribute(uK.ASSET_START_TIME,`${e}`)}get assetEndTime(){return mT(this.getAttribute(uK.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(uK.ASSET_END_TIME):this.setAttribute(uK.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(m8.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(m8.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):cC}set extraSourceParams(e){null==e?this.removeAttribute(m8.EXTRA_SOURCE_PARAMS):this.setAttribute(m8.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(uK.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(uK.CUSTOM_DOMAIN,e):this.removeAttribute(uK.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=cM(this,uK.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(uK.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(m8.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(m8.NO_VOLUME_PREF,""):this.removeAttribute(m8.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(m8.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(m8.NO_MUTED_PREF,""):this.removeAttribute(m8.NO_MUTED_PREF)}get debug(){return null!=cM(this,uK.DEBUG)}set debug(e){e?this.setAttribute(uK.DEBUG,""):this.removeAttribute(uK.DEBUG)}get disableTracking(){return null!=cM(this,uK.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(uK.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=cM(this,uK.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(uK.DISABLE_COOKIES,""):this.removeAttribute(uK.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(uK.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:nb}set streamType(e){this.setAttribute(uK.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(m8.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(m8.DEFAULT_STREAM_TYPE))?i:np}set defaultStreamType(e){e?this.setAttribute(m8.DEFAULT_STREAM_TYPE,e):this.removeAttribute(m8.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(m8.TARGET_LIVE_WINDOW)?+this.getAttribute(m8.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(m8.TARGET_LIVE_WINDOW):this.setAttribute(m8.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return mT(cM(this,uK.START_TIME))}set startTime(e){this.setAttribute(uK.START_TIME,`${e}`)}get initialBandwidthEstimateKbps(){return mT(cM(this,uK.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(e){null==e?this.removeAttribute(uK.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(uK.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`)}get initialEstimateSegments(){return mT(cM(this,uK.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(e){null==e?this.removeAttribute(uK.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(uK.INITIAL_ESTIMATE_SEGMENTS,`${e}`)}get minPreloadSegments(){return mT(cM(this,uK.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(e){null==e?this.removeAttribute(uK.MIN_PRELOAD_SEGMENTS):this.setAttribute(uK.MIN_PRELOAD_SEGMENTS,`${e}`)}get preferPlayback(){let e=this.getAttribute(uK.PREFER_PLAYBACK);if("mse"===e||e===ng)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===ng?this.setAttribute(uK.PREFER_PLAYBACK,e):this.removeAttribute(uK.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){(mm(this,ch,cp).call(this),this.media)?this.media.metadata={...ce(this),...e}:mO("underlying media element missing when trying to set metadata. metadata will not be set.")}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){(mm(this,ch,cp).call(this),this.media)?this.media._hlsConfig=e:mO("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.")}async addCuePoints(e){var t;return(mm(this,ch,cp).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void mO("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(mm(this,ch,cp).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void mO("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(m8.PLAYBACK_TOKEN),t=this.getAttribute(m8.DRM_TOKEN),i=this.getAttribute(m8.THUMBNAIL_TOKEN),a=this.getAttribute(m8.STORYBOARD_TOKEN);return{...ml(this,ca),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){mu(this,ca,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(m8.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(m8.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(m8.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(m8.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(m8.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(m8.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(m8.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(m8.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return n$(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(m8.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(m8.CAST_RECEIVER,e):this.removeAttribute(m8.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){this.media?this.media.castCustomData=e:mO("underlying media element missing when trying to set castCustomData. castCustomData will not be set.")}get noTooltips(){return this.hasAttribute(m8.NO_TOOLTIPS)}set noTooltips(e){e?this.setAttribute(m8.NO_TOOLTIPS,""):this.removeAttribute(m8.NO_TOOLTIPS)}get proudlyDisplayMuxBadge(){return this.hasAttribute(m8.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(m8.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(m8.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return null==(e=this.media)?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){this.media?this.media.capRenditionToPlayerSize=e:mO("underlying media element missing when trying to set capRenditionToPlayerSize")}};function cM(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}ct=new WeakMap,ci=new WeakMap,ca=new WeakMap,cr=new WeakMap,cn=new WeakMap,cs=new WeakMap,co=new WeakMap,cl=new WeakMap,cd=new WeakMap,cu=new WeakMap,cm=new WeakMap,cc=new WeakMap,ch=new WeakSet,cp=function(){var e,t,i,a;if(!ml(this,ci)){mu(this,ci,!0),mm(this,ch,cg).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof mE.HTMLElement))throw""}catch{mO("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{mO("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof me.MediaController))throw""}catch{mO("<media-controller> failed to upgrade!")}mm(this,ch,cE).call(this),mm(this,ch,cf).call(this),mm(this,ch,cy).call(this),mu(this,cr,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(mi.Attributes.USER_INACTIVE))||t),mm(this,ch,cA).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",ml(this,co)),null==(a=this.media)||a.addEventListener("loadstart",ml(this,cl))}},cv=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},cb=function(e){Object.assign(ml(this,cm),e),mm(this,ch,cg).call(this)},cg=function(e={}){var t,i,a,r,n,s,o,l,d,u,m,c,h,p,v,b,g,E,f,y,A,T,k,w,_,I,C,S,M,R,L,x,D,N,O,P,U,W,B,$,H,V,F,K,Y,G,q,j,Z,z;let Q,X,J,ee;t={...ml(this,cm),...e},Q={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(i=this.media)?void 0:i.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(m8.STORYBOARD_SRC),fullscreenElement:this.getAttribute(m8.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=mE.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(m8.NOHOTKEYS),hotKeys:this.getAttribute(m8.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,initialBandwidthEstimateKbps:this.initialBandwidthEstimateKbps,initialEstimateSegments:this.initialEstimateSegments,minPreloadSegments:this.minPreloadSegments,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(uK.TARGET_LIVE_WINDOW),streamType:mR(this.getAttribute(uK.STREAM_TYPE)),primaryColor:this.getAttribute(m8.PRIMARY_COLOR),secondaryColor:this.getAttribute(m8.SECONDARY_COLOR),accentColor:this.getAttribute(m8.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(X=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(X).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(m8.PLAYBACK_RATES),customDomain:null!=(a=this.getAttribute(uK.CUSTOM_DOMAIN))?a:void 0,title:this.getAttribute(m8.TITLE),videoTitle:null!=(r=this.getAttribute(m8.VIDEO_TITLE))?r:this.getAttribute(m8.TITLE),novolumepref:this.hasAttribute(m8.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(m8.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(m8.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(m8.DISABLE_PSEUDO_ENDED),capRenditionToPlayerSize:this.capRenditionToPlayerSize,...t,extraSourceParams:this.extraSourceParams},s=mQ`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(Q)}
    ${mF}
  </style>
  ${l=Q,mQ`
  <media-theme
    template="${l.themeTemplate||!1}"
    defaultstreamtype="${null!=(d=l.defaultStreamType)&&d}"
    hotkeys="${J=l.hotKeys?`${l.hotKeys}`:"","live"===mR(l.streamType)&&(J+=" noarrowleft noarrowright"),J||!1}"
    nohotkeys="${l.noHotKeys||!l.hasSrc||!1}"
    noautoseektolive="${!!(null!=(u=l.streamType)&&u.includes(nv))&&0!==l.targetLiveWindow}"
    novolumepref="${l.novolumepref||!1}"
    nomutedpref="${l.nomutedpref||!1}"
    disabled="${!l.hasSrc||l.isDialogOpen}"
    audio="${null!=(m=l.audio)&&m}"
    style="${null!=(z={"--media-primary-color":l.primaryColor,"--media-secondary-color":l.secondaryColor,"--media-accent-color":l.accentColor},ee="",Object.entries(z).forEach(([e,t])=>{null!=t&&(ee+=`${my(e)}: ${t}; `)}),c=ee?ee.trim():void 0)&&c}"
    defaultsubtitles="${!l.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(h=l.forwardSeekOffset)&&h}"
    backwardseekoffset="${null!=(p=l.backwardSeekOffset)&&p}"
    playbackrates="${null!=(v=l.playbackRates)&&v}"
    defaultshowremainingtime="${null!=(b=l.defaultShowRemainingTime)&&b}"
    defaultduration="${null!=(g=l.defaultDuration)&&g}"
    hideduration="${null!=(E=l.hideDuration)&&E}"
    title="${null!=(f=l.title)&&f}"
    videotitle="${null!=(y=l.videoTitle)&&y}"
    proudlydisplaymuxbadge="${null!=(A=l.proudlyDisplayMuxBadge)&&A}"
    exportparts="${mX}"
    onclose="${l.onCloseErrorDialog}"
    onfocusin="${l.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${null!=(T=l.noHotKeys)&&T}"
      target-live-window="${null!=(k=l.targetLiveWindow)&&k}"
      stream-type="${null!=(w=mR(l.streamType))&&w}"
      crossorigin="${null!=(_=l.crossOrigin)?_:""}"
      playsinline
      autoplay="${null!=(I=l.autoplay)&&I}"
      muted="${null!=(C=l.muted)&&C}"
      loop="${null!=(S=l.loop)&&S}"
      preload="${null!=(M=l.preload)&&M}"
      debug="${null!=(R=l.debug)&&R}"
      prefer-cmcd="${null!=(L=l.preferCmcd)&&L}"
      disable-tracking="${null!=(x=l.disableTracking)&&x}"
      disable-cookies="${null!=(D=l.disableCookies)&&D}"
      prefer-playback="${null!=(N=l.preferPlayback)&&N}"
      start-time="${null!=l.startTime&&l.startTime}"
      initial-bandwidth-estimate-kbps="${null!=l.initialBandwidthEstimateKbps&&l.initialBandwidthEstimateKbps}"
      initial-estimate-segments="${null!=l.initialEstimateSegments&&l.initialEstimateSegments}"
      min-preload-segments="${null!=l.minPreloadSegments&&l.minPreloadSegments}"
      beacon-collection-domain="${null!=(O=l.beaconCollectionDomain)&&O}"
      player-init-time="${null!=(P=l.playerInitTime)&&P}"
      player-software-name="${null!=(U=l.playerSoftwareName)&&U}"
      player-software-version="${null!=(W=l.playerSoftwareVersion)&&W}"
      env-key="${null!=(B=l.envKey)&&B}"
      custom-domain="${null!=($=l.customDomain)&&$}"
      src="${l.src?l.src:!!l.playbackId&&d2(l)}"
      cast-src="${l.src?l.src:!!l.playbackId&&d2(l)}"
      cast-receiver="${null!=(H=l.castReceiver)&&H}"
      drm-token="${null!=(F=null==(V=l.tokens)?void 0:V.drm)&&F}"
      playback-token="${null!=(Y=null==(K=l.tokens)?void 0:K.playback)&&Y}"
      exportparts="video"
      disable-pseudo-ended="${null!=(G=l.disablePseudoEnded)&&G}"
      max-auto-resolution="${null!=(q=l.maxAutoResolution)&&q}"
      cap-rendition-to-player-size="${null!=(j=l.capRenditionToPlayerSize)&&j}"
    >
      ${l.storyboard?mQ`<track label="thumbnails" default kind="metadata" src="${l.storyboard}" />`:mQ``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!l.poster&&l.poster}"
        placeholdersrc="${null!=(Z=l.placeholder)&&Z}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,o=this.shadowRoot,s.renderInto(o)},cE=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(m6.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};mu(this,cs,new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)})),ml(this,cs).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},cf=function(){this.addEventListener("error",ml(this,cc)),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof nm))return e;let r=m0(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},cy=function(){var e,t,i,a;null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",ml(this,cd)),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",ml(this,cd))},cA=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===nv&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===nv&&(r=-2);let n=r-t;if(e.line===n&&!i)return;a.has(e)||a.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(mi.Attributes.USER_INACTIVE))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,ml(this,cr))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o);let l=()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(mi.Attributes.USER_INACTIVE))||t;ml(this,cr)!==a&&(mu(this,cr,a),n(i,ml(this,cr)))};this.addEventListener("userinactivechange",l),mu(this,cu,()=>{var e,t;null==i||i.removeEventListener("cuechange",s),null==(e=this.textTracks)||e.removeEventListener("change",o),null==(t=this.textTracks)||t.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};var cR=e=>{throw TypeError(e)},cL=(e,t,i)=>t.has(e)||cR("Cannot "+i),cx=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends cx{});var cD,cN=class extends cx{},cO=class{constructor(e,t={}){((e,t,i)=>t.has(e)?cR("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i))(this,cD),((e,t,i,a)=>(cL(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,cD,null==t?void 0:t.detail)}get detail(){let e,t;return cL(this,e=cD,"read from private field"),t?t.call(this):e.get(this)}initCustomEvent(){}};cD=new WeakMap;var cP={document:{createElement:function(e,t){return new cN}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(cN)},CustomEvent:cO,EventTarget:cx,HTMLElement:cN,HTMLVideoElement:class extends cx{}},cU="u"<typeof window||void 0===globalThis.customElements,cW=cU?cP:globalThis;cU&&cP.document,cW.customElements.get("mux-player")||(cW.customElements.define("mux-player",cS),cW.MuxPlayerElement=cS);var cB=parseInt(nn.default.version)>=19,c$={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"};function cH(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var cV=Object.prototype.hasOwnProperty,cF=(e,t,i)=>!((e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!cV.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0})(t,e[i]),cK=(e,t,i)=>{e[i]=t},cY=(e,t,i,a=cK,r=cF)=>(0,nn.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t]),cG=(()=>{try{return"3.13.0"}catch{}return"UNKNOWN"})(),cq=(e,t,i)=>(0,nn.useEffect)(()=>{let a=null==t?void 0:t.current;if(a&&i)return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i,e]),cj=nn.default.forwardRef(({children:e,...t},i)=>nn.default.createElement("mux-player",{suppressHydrationWarning:!0,...((e={})=>{let{ref:t,...i}=e;return Object.entries(i).reduce((e,[t,i])=>{let a=((e,t)=>{if(!(!cB&&"boolean"==typeof t&&!t)){let i,a;if(i=e,null!=(a=c$)&&i in a)return c$[e];if(void 0!==t)return/[A-Z]/.test(e)?e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`):e}})(t,i);if(!a)return e;let r=cB||"boolean"!=typeof i?i:"";return e[a]=r,e},{})})(t),ref:i},e)),cZ=nn.default.forwardRef((e,t)=>{var i;let a=(0,nn.useRef)(null),r=function(...e){return nn.useCallback(function(...e){return t=>{let i=!1,a=e.map(e=>{let a=cH(e,t);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let t=0;t<a.length;t++){let i=a[t];"function"==typeof i?i():cH(e[t],null)}}}}(...e),e)}(a,t),[n]=((e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:m,onRateChange:c,onResize:h,onWaiting:p,onPlay:v,onPlaying:b,onTimeUpdate:g,onPause:E,onSeeking:f,onSeeked:y,onStalled:A,onSuspend:T,onEnded:k,onError:w,onCuePointChange:_,onChapterChange:I,metadata:C,tokens:S,paused:M,playbackId:R,playbackRates:L,currentTime:x,themeProps:D,extraSourceParams:N,castCustomData:O,_hlsConfig:P,...U}=t;return cY("tokens",S,e),cY("playbackId",R,e),cY("playbackRates",L,e),cY("metadata",C,e),cY("extraSourceParams",N,e),cY("_hlsConfig",P,e),cY("themeProps",D,e),cY("castCustomData",O,e),cY("paused",M,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&cF(e,t,i)),cY("currentTime",x,e,(e,t)=>{null!=t&&(e.currentTime=t)}),cq("abort",e,i),cq("canplay",e,a),cq("canplaythrough",e,r),cq("emptied",e,n),cq("loadstart",e,s),cq("loadeddata",e,o),cq("loadedmetadata",e,l),cq("progress",e,d),cq("durationchange",e,u),cq("volumechange",e,m),cq("ratechange",e,c),cq("resize",e,h),cq("waiting",e,p),cq("play",e,v),cq("playing",e,b),cq("timeupdate",e,g),cq("pause",e,E),cq("seeking",e,f),cq("seeked",e,y),cq("stalled",e,A),cq("suspend",e,T),cq("ended",e,k),cq("error",e,w),cq("cuepointchange",e,_),cq("chapterchange",e,I),[U]})(a,e),[s]=(0,nn.useState)(null!=(i=e.playerInitTime)?i:d0());return nn.default.createElement(cj,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:"mux-player-react",playerSoftwareVersion:cG,playerInitTime:s,...n})});e.s(["VideoPlayer",0,function(e){let t,i,n=(0,r.c)(5),{customDomain:s,playbackId:o,tokens:l}=e;return n[0]===Symbol.for("react.memo_cache_sentinel")?(t={position:"absolute",inset:0},n[0]=t):t=n[0],n[1]!==s||n[2]!==o||n[3]!==l?(i=(0,a.jsx)(cZ,{customDomain:s,theme:"sutro",playbackId:o,tokens:l,autoPlay:!1,loop:!1,style:t}),n[1]=s,n[2]=o,n[3]=l,n[4]=i):i=n[4],i}],453299)}]);