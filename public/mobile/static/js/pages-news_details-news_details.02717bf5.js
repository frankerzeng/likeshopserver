(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news_details-news_details"],{"05a7":function(t,e,n){"use strict";n.r(e);var i=n("a022"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"0646":function(t,e,n){"use strict";n.r(e);var i=n("e494"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},1498:function(t,e,n){"use strict";n.r(e);var i=n("61ff"),a=n("0646");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("a842");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"760fa146",null,!1,i["a"],void 0);e["default"]=s.exports},"19d2":function(t,e,n){"use strict";n.r(e);var i=n("dd10"),a=n("20f9");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("378d");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"02ab9a7e",null,!1,i["a"],void 0);e["default"]=s.exports},"1b2f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".loading[data-v-02ab9a7e]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;display:flex;justify-content:center;align-items:center}.loading.flex[data-v-02ab9a7e]{position:static;flex:1;width:100%}",""]),t.exports=e},"20f9":function(t,e,n){"use strict";n.r(e);var i=n("b678"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"237d":function(t,e,n){"use strict";n.r(e);var i=n("e6a5"),a=n("05a7");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("cc00");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"6d8b3c66",null,!1,i["a"],void 0);e["default"]=s.exports},"2a76":function(t,e,n){var i=n("fc45");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5cf6d466",i,!0,{sourceMap:!1,shadowMode:!1})},"2da9":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.getArticleDetail=function(t){var e=t.type,n=e?"help/detail":"article/detail";return delete t.type,a.default.get(n,{params:{id:t.id}})},e.getArticleList=function(t){var e=t.type,n=e?"help/lists":"article/lists";return delete t.type,a.default.get(n,{params:t})},e.getCategoryList=function(t){var e=t.type,n=e?"help/category":"article/category";return delete t.type,a.default.get(n)};var a=i(n("be8a"));n("f2e5")},"378d":function(t,e,n){"use strict";var i=n("b465"),a=n.n(i);a.a},"37c9":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-6d8b3c66{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-6d8b3c66{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},"61ff":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uParse:n("237d").default,loadingView:n("19d2").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"news-details"},[n("v-uni-view",{staticClass:"header"},[n("v-uni-view",{staticClass:"title xxl mb20"},[t._v(t._s(t.articleDetail.title))]),n("v-uni-view",{staticClass:"row-between"},[n("v-uni-view",{staticClass:"xs lighter"},[t._v("发布时间："+t._s(t.articleDetail.create_time))]),n("v-uni-view",{staticClass:"row"},[n("v-uni-image",{staticClass:"icon-sm",attrs:{src:"/static/images/icon_see.png"}}),n("v-uni-view",{staticClass:"ml10 xs muted"},[t._v(t._s(t.articleDetail.visit)+"人浏览")])],1)],1)],1),n("v-uni-view",{staticClass:"main"},[n("u-parse",{attrs:{html:t.article_content,"tag-style":t.tagStyle}})],1)],1),t.showLoading?n("loading-view"):t._e()],1)},r=[]},7435:function(t,e){var n={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:i(" , ,\t,\r,\n,\f"),boolAttrs:i("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:i("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:i("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:i("a,colgroup,fieldset,legend"),selfClosingTags:i("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:i("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function i(t){for(var e=Object.create(null),n=t.split(","),i=n.length;i--;)e[n[i]]=!0;return e}t.exports=n},"7fe9":function(t,e,n){"use strict";var i=n("c1b7"),a=n.n(i);a.a},"93cf":function(t,e,n){"use strict";n.r(e);var i=n("bd88"),a=n("e7cb");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("7fe9");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"13a5beb4",null,!1,i["a"],void 0);e["default"]=s.exports},a022:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("b85c"));n("c975"),n("caad"),n("2532"),n("ac1f"),n("466d"),n("841c"),n("5319"),n("e25e"),n("14d9"),n("99af"),n("acd8");var r=uni.getSystemInfoSync(),o=r.windowWidth,s=(r.platform,n("7435")),l={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var n,i=e.split("://")[0],a=i.length;n=e[a];a++){if("/"==n&&"/"!=e[a-1]&&"/"!=e[a+1])break;i+=Math.random()>.5?n.toUpperCase():n}return i+=e.substr(a),this[t]=i}if(this[t]=e,e.includes("data:image")){var r=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!r)return}}}},mounted:function(){this.document=document.getElementById("rtf"+this._uid),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var n=this;if(t){var i=document.createElement("div");e?this.rtf?this.rtf.appendChild(i):this.rtf=i:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=i),i.innerHTML=this._handleHtml(t,e);for(var r,l=this.rtf.getElementsByTagName("style"),d=0;r=l[d++];)r.innerHTML=r.innerHTML.replace(/body/g,"#rtf"+this._uid),r.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,i=0;e=t[i++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),n._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var c=this,u=this.rtf.getElementsByTagName("title");u.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:u[0].innerText});var f=function(t){var e=t.getAttribute("src");n.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(n.domain.includes("://")?n.domain.split("://")[0]:"")+":"+e:t.src=n.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=n.domain+"/"+e))};this.imgList.length=0;for(var h,g=this.rtf.getElementsByTagName("img"),p=0,v=0;h=g[p];p++)parseInt(h.style.width||h.getAttribute("width"))>o&&(h.style.height="auto"),f(h),h.hasAttribute("ignore")||"A"==h.parentElement.nodeName||(h.i=v++,c.imgList.push(h.getAttribute("original-src")||h.src||h.getAttribute("data-src")),h.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},c.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:c.imgList})}),h.onerror=function(){s.errorImg&&(c.imgList[this.i]=this.src=s.errorImg),c.$emit("error",{source:"img",target:this})},c.lazyLoad&&this._observer&&h.src&&0!=h.i&&(h.setAttribute("data-src",h.src),h.removeAttribute("src"),this._observer.observe(h));var b,m=this.rtf.getElementsByTagName("a"),y=(0,a.default)(m);try{for(y.s();!(b=y.n()).done;){var _=b.value;_.onclick=function(t){t.stopPropagation();var e=!0,n=this.getAttribute("href");if(c.$emit("linkpress",{href:n,ignore:function(){return e=!1}}),e&&n)if("#"==n[0])c.useAnchor&&c.navigateTo({id:n.substr(1)});else{if(0==n.indexOf("http")||0==n.indexOf("//"))return!0;uni.navigateTo({url:n})}return!1}}}catch(I){y.e(I)}finally{y.f()}var w=this.rtf.getElementsByTagName("video");c.videoContexts=w;for(var x,k=0;x=w[k++];)f(x),x.style.maxWidth="100%",x.onerror=function(){c.$emit("error",{source:"video",target:this})},x.onplay=function(){if(c.autopause)for(var t,e=0;t=c.videoContexts[e++];)t!=this&&t.pause()};var C,T,A=this.rtf.getElementsByTagName("audio"),O=(0,a.default)(A);try{for(O.s();!(C=O.n()).done;){var S=C.value;f(S),S.onerror=function(){c.$emit("error",{source:"audio",target:this})}}}catch(I){O.e(I)}finally{O.f()}if(this.autoscroll){var M,L=this.rtf.getElementsByTagName("table"),B=(0,a.default)(L);try{for(B.s();!(M=B.n()).done;){var z=M.value,E=document.createElement("div");E.style.overflow="scroll",z.parentNode.replaceChild(E,z),E.appendChild(z)}}catch(I){B.e(I)}finally{B.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){n.nodes=[1],n.$emit("load")})),setTimeout((function(){return n.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){n.rect=n.rtf.getBoundingClientRect(),n.rect.height==T&&(n.$emit("ready",n.rect),clearInterval(n._timer)),T=n.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var n=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(" ","#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(" ",".").concat(t.id):"")).boundingClientRect();this._in?n.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():n.selectViewport().scrollOffset(),n.exec((function(n){if(!n[0])return t.fail&&t.fail("Label not found");var i=n[1].scrollTop+n[0].top-(n[2]?n[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=i:uni.pageScrollTo({scrollTop:i,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var n="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var i in s.userAgentStyles)n+="".concat(i,"{").concat(s.userAgentStyles[i],"}");for(i in this.tagStyle)n+="".concat(i,"{").concat(this.tagStyle[i],"}");n+="</style>",t=n+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*o/750+"px"}))),t}}};e.default=l},a842:function(t,e,n){"use strict";var i=n("2a76"),a=n.n(i);a.a},b465:function(t,e,n){var i=n("1b2f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7c39a516",i,!0,{sourceMap:!1,shadowMode:!1})},b678:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={data:function(){return{}},props:{type:{type:String,default:"fixed"},backgroundColor:{type:String,default:"#fff"},color:{type:String},size:{type:Number,default:40}},methods:{}};e.default=i},bbf4:function(t,e,n){var i=n("37c9");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("937489be",i,!0,{sourceMap:!1,shadowMode:!1})},bd88:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:"loading "+(t.vertical?"loading--vertical":"")},[n("v-uni-view",{class:"loading__spinner loading__spinner--"+t.type,style:{color:t.color,width:t.size+"rpx",height:t.size+"rpx"}},t._l(t.array12,(function(e,i){return"spinner"===t.type?n("v-uni-view",{key:i,staticClass:"loading__dot"}):t._e()})),1),n("v-uni-view",{staticClass:"loading__text",style:{"font-size":t.textSize+"rpx",color:t.color}},[t._t("default")],2)],1)},a=[]},c1b7:function(t,e,n){var i=n("ca2d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("be95e154",i,!0,{sourceMap:!1,shadowMode:!1})},ca2d:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'[data-v-13a5beb4]:host{font-size:0;line-height:1}.loading[data-v-13a5beb4]{display:inline-flex;align-items:center;justify-content:center;color:#c8c9cc}.loading__spinner[data-v-13a5beb4]{position:relative;box-sizing:border-box;width:%?45?%;max-width:100%;max-height:100%;height:%?45?%;-webkit-animation:rotate-data-v-13a5beb4 .8s linear infinite;animation:rotate-data-v-13a5beb4 .8s linear infinite}.loading__spinner--spinner[data-v-13a5beb4]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.loading__spinner--circular[data-v-13a5beb4]{border:%?2?% solid transparent;border-top-color:initial;border-radius:100%}.loading__text[data-v-13a5beb4]{margin-left:%?16?%;color:#969799;font-size:%?28?%;line-height:%?40?%}.loading__text[data-v-13a5beb4]:empty{display:none}.loading--vertical[data-v-13a5beb4]{-webkit-flex-direction:column;flex-direction:column}.loading--vertical .loading__text[data-v-13a5beb4]{margin:%?16?% 0 0}.loading__dot[data-v-13a5beb4]{position:absolute;top:0;left:0;width:100%;height:100%}.loading__dot[data-v-13a5beb4]:before{display:block;width:%?4?%;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.loading__dot[data-v-13a5beb4]:first-of-type{-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.loading__dot[data-v-13a5beb4]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.loading__dot[data-v-13a5beb4]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.loading__dot[data-v-13a5beb4]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.loading__dot[data-v-13a5beb4]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.loading__dot[data-v-13a5beb4]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.loading__dot[data-v-13a5beb4]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.loading__dot[data-v-13a5beb4]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.loading__dot[data-v-13a5beb4]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.loading__dot[data-v-13a5beb4]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.loading__dot[data-v-13a5beb4]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.loading__dot[data-v-13a5beb4]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes rotate-data-v-13a5beb4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-13a5beb4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},cc00:function(t,e,n){"use strict";var i=n("bbf4"),a=n.n(i);a.a},dd10:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={loading:n("93cf").default},a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{class:"loading "+("flex"==this.type?"flex":""),style:{backgroundColor:this.backgroundColor}},[e("loading",{attrs:{color:this.color,size:this.size}})],1)},r=[]},e22f:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("a630"),n("3ca3");var i={props:{color:String,vertical:Boolean,type:{type:String,default:"spinner"},size:{type:Number,default:40},textSize:String},data:function(){return{array12:Array.from({length:12})}}};e.default=i},e494:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2da9"),a={data:function(){return{showLoading:!0,articleDetail:{},article_content:"",tagStyle:{img:"width:100%;"}}},components:{},props:{},onLoad:function(t){this.type=t.type||"",this.id=t.id,this.type?uni.setNavigationBarTitle({title:"帮助详情"}):uni.setNavigationBarTitle({title:"资讯详情"}),this.getArticleDetailFun()},methods:{getArticleDetailFun:function(){var t=this;(0,i.getArticleDetail)({type:this.type,id:this.id}).then((function(e){1==e.code&&(t.articleDetail=e.data,setTimeout((function(){t.article_content=e.data.content}),200),setTimeout((function(){t.showLoading=!1}),300))}))}}};e.default=a},e6a5:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[this.nodes.length?this._e():this._t("default"),e("v-uni-view",{style:this.showAm+(this.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[e("div",{attrs:{id:"rtf"+this.uid}})])],2)},a=[]},e7cb:function(t,e,n){"use strict";n.r(e);var i=n("e22f"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},fc45:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* pages/news_details/news_details.wxss */uni-page-body[data-v-760fa146]{background-color:#fff}body.?%PAGE?%[data-v-760fa146]{background-color:#fff}.news-details .header[data-v-760fa146]{padding:%?20?% 15px;border-bottom:var(--border)}.news-details .main[data-v-760fa146]{padding:%?40?% 15px}.wxParse-p uni-image[data-v-760fa146]{width:100%}",""]),t.exports=e}}]);