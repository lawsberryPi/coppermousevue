(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72bb3e2e"],{"163b":function(t,e,i){"use strict";var n=i("2b0e");e["a"]=n["default"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this[t+"Delay"],10);this[t+"Timeout"]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}})},"261e":function(t,e,i){"use strict";var n=i("2b0e"),o=i("80d2");function s(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}e["a"]=n["default"].extend().extend({name:"stackable",data:function(){return{stackClass:"unpecified",stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(o["j"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(o["j"])(e)],n=[].concat(s(document.getElementsByClassName(this.stackClass))),a=0;a<n.length;a++)t.includes(n[a])||i.push(Object(o["j"])(n[a]));return Math.max.apply(Math,i)}}})},"30d4":function(t,e,i){"use strict";var n=i("3e79"),o=i("d9bd"),s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t){var e="undefined"===typeof t?"undefined":s(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}e["a"]={name:"detachable",mixins:[n["a"]],props:{attach:{type:null,default:!1,validator:r},contentClass:{default:""}},data:function(){return{hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:"initDetach"},beforeMount:function(){var t=this;this.$nextTick(function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach(function(e){e.elm&&t.$el.parentNode.insertBefore(e.elm,t.$el)})}})},mounted:function(){!this.lazy&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(function(t){t.elm&&t.elm.parentNode.removeChild(t.elm)})}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=this.$vnode&&this.$vnode.context.$options._scopeId;return t&&a({},t,"")},initDetach:function(){if(!this._isDestroyed&&this.$refs.content&&!this.hasDetached&&""!==this.attach&&!0!==this.attach&&"attach"!==this.attach){var t=void 0;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.insertBefore(this.$refs.content,t.firstChild),this.hasDetached=!0):Object(o["c"])("Unable to locate target "+(this.attach||"[data-app]"),this)}}}}},3656:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{icon:"",dark:""}},n),[i("v-icon",[t._v("account_box")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-card",[i("v-list",[i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-content",[t.isSignIn?i("v-list-tile-title",[t._v(t._s(t.userName)+", welcome!")]):i("v-list-tile-title",[t._v("welcome")]),i("v-list-tile-sub-title",[t._v("-- from Copper Mouse Ink")])],1),i("v-list-tile-action",[i("v-btn",{class:t.fav?"red--text":"",attrs:{icon:""},on:{click:function(e){t.fav=!t.fav}}},[i("v-icon",[t._v("favorite")])],1)],1)],1)],1),i("v-divider"),t.isSignIn?t._e():i("v-btn",{attrs:{block:"",color:"primary"},on:{click:t.handleClickSignIn}},[t._v("google sign In")]),t.isSignIn?i("v-btn",{attrs:{block:"",color:"primary"},on:{click:t.handleClickSignOut}},[t._v("sign out")]):t._e(),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{flat:""},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.menu=!1}}},[t._v("Save")])],1)],1)],1)],1)},o=[],s=(i("96cf"),i("3b8d")),a=i("cebc"),r=(i("cadf"),i("551c"),i("f751"),i("097d"),i("d5b5")),c=function(){function t(){var t="https://apis.google.com/js/api.js";return new Promise(e=>{var i=document.createElement("script");i.src=t,i.onreadystatechange=i.onload=function(){i.readyState&&!/loaded|complete/.test(i.readyState)||setTimeout(function(){e()},500)},document.getElementsByTagName("head")[0].appendChild(i)})}function e(t){return new Promise(e=>{window.gapi.load("auth2",()=>{window.gapi.auth2.init(t).then(()=>{e(window.gapi)})})})}function i(){if(!(this instanceof i))return new i;this.GoogleAuth=null,this.isAuthorized=!1,this.isInit=!1,this.prompt=null,this.isLoaded=function(){return console.warn('isLoaded() will be deprecated. You can use "this.$gAuth.isInit"'),!!this.GoogleAuth},this.load=((i,n)=>{t().then(()=>{return e(i)}).then(t=>{this.GoogleAuth=t.auth2.getAuthInstance(),this.isInit=!0,this.prompt=n,this.isAuthorized=this.GoogleAuth.isSignedIn.get()})}),this.signIn=((t,e)=>{return new Promise((i,n)=>{if(!this.GoogleAuth)return"function"===typeof e&&e(!1),void n(!1);this.GoogleAuth.signIn().then(e=>{"function"===typeof t&&t(e),this.isAuthorized=this.GoogleAuth.isSignedIn.get(),i(e)}).catch(t=>{"function"===typeof e&&e(t),n(t)})})}),this.getAuthCode=((t,e)=>{return new Promise((i,n)=>{if(!this.GoogleAuth)return"function"===typeof e&&e(!1),void n(!1);this.GoogleAuth.grantOfflineAccess({prompt:this.prompt}).then(function(e){"function"===typeof t&&t(e.code),i(e.code)}).catch(function(t){"function"===typeof e&&e(t),n(t)})})}),this.signOut=((t,e)=>{return new Promise((i,n)=>{if(!this.GoogleAuth)return"function"===typeof e&&e(!1),void n(!1);this.GoogleAuth.signOut().then(()=>{"function"===typeof t&&t(),this.isAuthorized=!1,i(!0)}).catch(t=>{"function"===typeof e&&e(t),n(t)})})})}return new i}();function u(t,e){let i=null,n={scope:"profile email",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]},o="select_account";"object"===typeof e?(i=Object.assign(n,e),e.scope&&(i.scope=e.scope),e.prompt&&(o=e.prompt),e.clientId||console.warn("clientId is required")):console.warn("invalid option type. Object type accepted only"),t.gAuth=c,Object.defineProperties(t.prototype,{$gAuth:{get:function(){return t.gAuth}}}),t.gAuth.load(i,o)}var h=u,l=i("2b0e"),d=i("2f62"),f={clientId:"233063685114-iph55c2beq847967msjhbodns5k34321.apps.googleusercontent.com",scope:"profile email",prompt:"select_account"};l["default"].use(h,f);var v={name:"login",components:{GAuth:h},data:function(){return{isSignIn:!1}},computed:Object(a["a"])({},Object(d["d"])(["userName"])),methods:{handleClickGetAuth:function(){var t=this;this.$gAuth.getAuthCode().then(function(e){return t.$http.post("http://your-backend-server.com/auth/google",{code:e,redirect_uri:"postmessage"})}).then(function(t){}).catch(function(t){})},handleClickSignIn:function(){var t=this;this.$gAuth.signIn().then(function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(i){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("user",i),t.isSignIn=t.$gAuth.isAuthorized,n={userName:null,userEmail:null},n.userName=i.w3.ig,n.userEmail=i.w3.U3,e.next=7,r["a"].insertPost(n).then(function(e){t.$store.commit("setUserInfo",e.data.user),console.log(e)});case 7:e.sent;case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(t){console.log(t)})},handleClickSignOut:function(){var t=this;this.$gAuth.signOut().then(function(){t.isSignIn=t.$gAuth.isAuthorized}).catch(function(t){})}}},p=v,m=i("2877"),g=i("6544"),y=i.n(g),b=i("8336"),A=i("b0af"),w=i("99d9"),O=i("ce7e"),k=i("132d"),x=i("8860"),T=i("ba95"),C=i("40fe"),I=i("5d23"),S=(i("3880"),i("163b")),$=i("c69d"),_=i("30d4"),D=i("c22b"),N=i("261e"),E=i("d9bd"),W="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L={activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0},hasWindow:!1},M=l["default"].extend({name:"menuable",mixins:[D["a"],N["a"]],props:{activator:{default:null,validator:function(t){return["string","object"].includes("undefined"===typeof t?"undefined":W(t))}},allowOverflow:Boolean,inputActivator:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,dimensions:Object.assign({},L),isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(this.isAttached?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),o=0;if(o+=this.left?i-(n-t.width):i,this.offsetX){var s=isNaN(this.maxWidth)?t.width:Math.min(t.width,this.maxWidth);o+=this.left?-s:t.width}return this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),o},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),this.isAttached?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||this.activator||this.inputActivator},isAttached:function(){return!1!==this.attach}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.checkForWindow()},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return(this.isAttached?this.computedLeft:this.calcXOverflow(this.computedLeft,t))+"px"},calcTop:function(){return(this.isAttached?this.computedTop:this.calcYOverflow(this.computedTop))+"px"},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,o=this.dimensions.content.height,s=t+o,a=i<s;return a&&this.offsetOverflow&&n.top>o?t=this.pageYOffset+(n.top-o):a&&!this.allowOverflow?t=i-o-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForWindow:function(){this.hasWindow||(this.hasWindow="undefined"!==typeof window)},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.getOffsetTop())},deactivate:function(){},getActivator:function(t){if(this.inputActivator)return this.$el.querySelector(".v-input__slot");if(this.activator)return"string"===typeof this.activator?document.querySelector(this.activator):this.activator;if(this.$refs.activator)return this.$refs.activator.children.length>0?this.$refs.activator.children[0]:this.$refs.activator;if(t)return this.activatedBy=t.currentTarget||t.target,this.activatedBy;if(this.activatedBy)return this.activatedBy;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode[0]:this.activatorNode,i=e&&e.elm;if(i)return i}Object(E["a"])("No activator found")},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(this.isAttached){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame(function(){var i=e.$refs.content;if(!i||e.isShown(i))return t();i.style.display="inline-block",t(),i.style.display="none"})},startTransition:function(){var t=this;return new Promise(function(e){return requestAnimationFrame(function(){t.isContentActive=t.hasJustFocused=t.isActive,e()})})},isShown:function(t){return"none"!==t.style.display},updateDimensions:function(){var t=this;this.checkForWindow(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,this.isAttached?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek(function(){e.content=t.measure(t.$refs.content),t.dimensions=e})}}}),B=i("e949"),H=i("98a1"),j=i("6a18"),Y={methods:{activatorClickHandler:function(t){this.openOnClick&&!this.isActive?(this.getActivator(t).focus(),this.isActive=!0,this.absoluteX=t.clientX,this.absoluteY=t.clientY):this.closeOnClick&&this.isActive&&(this.getActivator(t).blur(),this.isActive=!1)},mouseEnterHandler:function(){var t=this;this.runDelay("open",function(){t.hasJustFocused||(t.hasJustFocused=!0,t.isActive=!0)})},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame(function(){e.isActive=!1,e.callDeactivate()})})},addActivatorEvents:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&!this.disabled&&t.addEventListener("click",this.activatorClickHandler)},removeActivatorEvents:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&t.removeEventListener("click",this.activatorClickHandler)}}},P=i("80d2"),V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};function z(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function q(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}var F={methods:{genActivator:function(){if(!this.$slots.activator&&!this.$scopedSlots.activator)return null;var t={};if(this.disabled||(this.openOnHover?(t.mouseenter=this.mouseEnterHandler,t.mouseleave=this.mouseLeaveHandler):this.openOnClick&&(t.click=this.activatorClickHandler)),"scoped"===Object(P["i"])(this,"activator")){var e=this.$scopedSlots.activator({on:t});return this.activatorNode=e,e}return this.$createElement("div",{staticClass:"v-menu__activator",class:{"v-menu__activator--active":this.hasJustFocused||this.isActive,"v-menu__activator--disabled":this.disabled},ref:"activator",on:t},this.$slots.activator)},genTransition:function(){return this.transition?this.$createElement("transition",{props:{name:this.transition}},[this.genContent()]):this.genContent()},genDirectives:function(){var t=this,e=!this.openOnHover&&this.closeOnClick?[{name:"click-outside",value:function(){return t.isActive=!1},args:{closeConditional:this.closeConditional,include:function(){return[t.$el].concat(q(t.getOpenDependentElements()))}}}]:[];return e.push({name:"show",value:this.isContentActive}),e},genContent:function(){var t=this,e={attrs:this.getScopeIdAttrs(),staticClass:"v-menu__content",class:V({},this.rootThemeClasses,z({"v-menu__content--auto":this.auto,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){e.stopPropagation(),e.target.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)}}};return!this.disabled&&this.openOnHover&&(e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.showLazyContent(this.$slots.default))}}},X={props:{disableKeys:Boolean},data:function(){return{listIndex:-1,tiles:[]}},watch:{isActive:function(t){t||(this.listIndex=-1)},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list__tile--highlighted"),this.$refs.content.scrollTop=i.offsetTop-i.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list__tile--highlighted")}},methods:{onKeyDown:function(t){var e=this;t.keyCode===P["l"].esc?this.isActive=!1:t.keyCode===P["l"].tab?setTimeout(function(){e.$refs.content.contains(document.activeElement)||(e.isActive=!1)}):this.changeListIndex(t)},changeListIndex:function(t){if(this.getTiles(),t.keyCode===P["l"].down&&this.listIndex<this.tiles.length-1)this.listIndex++;else if(t.keyCode===P["l"].up&&this.listIndex>-1)this.listIndex--;else{if(t.keyCode!==P["l"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()},getTiles:function(){this.tiles=this.$refs.content.querySelectorAll(".v-list__tile")}}},R={data:function(){return{calculatedTopAuto:0}},methods:{calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list__tile--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return this.isAttached?0:parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list__tile--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list__tile").offsetTop;return this.computedTop-i-n}}},G=i("c584"),J=i("0d3d"),Z=i("bfc5"),K=l["default"].extend({name:"v-menu",provide:function(){return{theme:this.theme}},directives:{ClickOutside:G["a"],Resize:J["a"]},mixins:[Y,$["a"],S["a"],_["a"],F,X,M,R,B["a"],H["a"],j["a"]],props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,fullWidth:Boolean,maxHeight:{default:"auto"},openOnClick:{type:Boolean,default:!0},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{defaultOffset:8,hasJustFocused:!1,resizeTimeout:null}},computed:{calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?this.calcXOverflow(this.calcLeftAuto(),t)+"px":this.calcLeft(t)},calculatedMaxHeight:function(){return this.auto?"200px":Object(P["a"])(this.maxHeight)},calculatedMaxWidth:function(){return isNaN(this.maxWidth)?this.maxWidth:this.maxWidth+"px"},calculatedMinWidth:function(){if(this.minWidth)return isNaN(this.minWidth)?this.minWidth:this.minWidth+"px";var t=Math.min(this.dimensions.activator.width+this.nudgeWidth+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Math.min(e,t)+"px"},calculatedTop:function(){return!this.auto||this.isAttached?this.calcTop():this.calcYOverflow(this.calculatedTopAuto)+"px"},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{activator:function(t,e){this.removeActivatorEvents(e),this.addActivatorEvents(t)},disabled:function(t){this.activator&&(t?this.removeActivatorEvents(this.activator):this.addActivatorEvents(this.activator))},isContentActive:function(t){this.hasJustFocused=t}},mounted:function(){this.isActive&&this.activate(),"v-slot"===Object(P["i"])(this,"activator",!0)&&Object(E["a"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){var t=this;this.getTiles(),this.updateDimensions(),requestAnimationFrame(function(){t.startTransition().then(function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))})})},closeConditional:function(){return this.isActive&&this.closeOnClick},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(this.updateDimensions,100))}},render:function(t){var e={staticClass:"v-menu",class:{"v-menu--inline":!this.fullWidth&&this.$slots.activator},directives:[{arg:500,name:"resize",value:this.onResize}],on:this.disableKeys?void 0:{keydown:this.onKeyDown}};return t("div",e,[this.genActivator(),this.$createElement(Z["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])])}}),U=i("9910"),Q=Object(m["a"])(p,n,o,!1,null,null,null);e["default"]=Q.exports;y()(Q,{VBtn:b["a"],VCard:A["a"],VCardActions:w["a"],VDivider:O["a"],VIcon:k["a"],VList:x["a"],VListTile:T["a"],VListTileAction:C["a"],VListTileContent:I["a"],VListTileSubTitle:I["b"],VListTileTitle:I["c"],VMenu:K,VSpacer:U["a"]})},3880:function(t,e,i){},bfc5:function(t,e,i){"use strict";var n=i("6a18"),o=i("58df");e["a"]=Object(o["a"])(n["a"]).extend({name:"theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:n["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find(function(t){return!t.isComment&&" "!==t.text})}})},c584:function(t,e,i){"use strict";function n(){return!1}function o(t,e,i){i.args=i.args||{};var o=i.args.closeConditional||n;if(t&&!1!==o(t)&&!("isTrusted"in t&&!t.isTrusted||"pointerType"in t&&!t.pointerType)){var a=(i.args.include||function(){return[]})();a.push(e),!s(t,a)&&setTimeout(function(){o(t)&&i.value&&i.value(t)},0)}}function s(t,e){var i=t.clientX,n=t.clientY,o=!0,s=!1,r=void 0;try{for(var c,u=e[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var h=c.value;if(a(h,i,n))return!0}}catch(l){s=!0,r=l}finally{try{!o&&u.return&&u.return()}finally{if(s)throw r}}return!1}function a(t,e,i){var n=t.getBoundingClientRect();return e>=n.left&&e<=n.right&&i>=n.top&&i<=n.bottom}e["a"]={inserted:function(t,e){var i=function(i){return o(i,t,e)},n=document.querySelector("[data-app]")||document.body;n.addEventListener("click",i,!0),t._clickOutside=i},unbind:function(t){if(t._clickOutside){var e=document.querySelector("[data-app]")||document.body;e&&e.removeEventListener("click",t._clickOutside,!0),delete t._clickOutside}}}},c69d:function(t,e,i){"use strict";var n=i("58df");function o(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function s(t){for(var e=[],i=0;i<t.length;i++){var n=t[i];n.isActive&&n.isDependent?e.push(n):e.push.apply(e,o(s(n.$children)))}return e}e["a"]=Object(n["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?s(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,o(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),t.push.apply(t,o(this.getOpenDependentElements())),t}}})},e949:function(t,e,i){"use strict";var n=i("2b0e");e["a"]=n["default"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:returnValue",this.originalValue)}},methods:{save:function(t){this.originalValue=t,this.isActive=!1}}})}}]);
//# sourceMappingURL=chunk-72bb3e2e.2ba1c381.js.map