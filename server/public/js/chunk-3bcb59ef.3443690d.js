(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bcb59ef"],{"7a74":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-footer",{staticClass:"py-4",attrs:{dark:"",height:"auto"}},[e("v-container",{attrs:{"mx-auto":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs9:""}},t._l(t.items,function(i,n){return e("base-btn",{key:n,staticClass:"ml-0 mr-3",attrs:{href:i.href,color:"primary",square:"",target:"_blank"}},[e("v-icon",{domProps:{textContent:t._s(i.icon)}})],1)}),1),e("v-spacer"),e("base-btn",{staticClass:"mr-0",attrs:{square:"",title:"Go to top"},on:{click:function(i){return t.$vuetify.goTo(0)}}},[e("v-icon",[t._v("mdi-chevron-up")])],1)],1)],1)],1)},o=[],a={data:function(){return{items:[{href:"#!",icon:"mdi-twitter"},{href:"#!",icon:"mdi-instagram"},{href:"#!",icon:"mdi-facebook"},{href:"#!",icon:"mdi-google-plus"},{href:"#!",icon:"mdi-reddit"},{href:"#!",icon:"mdi-discord"},{href:"#!",icon:"mdi-pinterest"}]}}},r=a,s=e("2877"),c=e("6544"),p=e.n(c),h=e("a523"),u=e("0e8f"),l=(e("e93b"),e("c6f7")),d=e("b64a"),f=e("6a18"),m=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},v={name:"v-footer",mixins:[Object(l["a"])(null,["height","inset"]),d["a"],f["a"]],props:{height:{default:32,type:[Number,String]},inset:Boolean},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},computedMarginBottom:function(){if(this.app)return this.$vuetify.application.bottom},computedPaddingLeft:function(){return this.app&&this.inset?this.$vuetify.application.left:0},computedPaddingRight:function(){return this.app&&this.inset?this.$vuetify.application.right:0},styles:function(){var t={height:isNaN(this.height)?this.height:this.height+"px"};return this.computedPaddingLeft&&(t.paddingLeft=this.computedPaddingLeft+"px"),this.computedPaddingRight&&(t.paddingRight=this.computedPaddingRight+"px"),this.computedMarginBottom&&(t.marginBottom=this.computedMarginBottom+"px"),t}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var i=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:m({"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--inset":this.inset},this.themeClasses),style:this.styles,ref:"content"});return t("footer",i,this.$slots.default)}},g=e("132d"),b=e("a722"),y=e("9910"),x=Object(s["a"])(r,n,o,!1,null,null,null);i["default"]=x.exports;p()(x,{VContainer:h["a"],VFlex:u["a"],VFooter:v,VIcon:g["a"],VLayout:b["a"],VSpacer:y["a"]})},c6f7:function(t,i,e){"use strict";e.d(i,"a",function(){return a});var n=e("c22b"),o=e("58df");function a(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(o["a"])(Object(n["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,i){i?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,i){this.$vuetify.application.unbind(this._uid,i)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,e=i.length;t<e;t++)this.$watch(i[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.bind(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unbind(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},e93b:function(t,i,e){}}]);
//# sourceMappingURL=chunk-3bcb59ef.3443690d.js.map