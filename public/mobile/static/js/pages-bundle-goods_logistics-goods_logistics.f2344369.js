(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bundle-goods_logistics-goods_logistics"],{"14c5":function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* components/recommend/recommend.wxss */.recommend[data-v-90fb66ec]{padding-bottom:%?50?%}.recommend .header .title[data-v-90fb66ec]{width:%?468?%;height:%?45?%;margin:%?10?% 0}.recommend .goods-title[data-v-90fb66ec]{height:%?100?%}.recommend .goods-title .line[data-v-90fb66ec]{width:%?58?%;height:1px;background-color:#ccc;margin:0 %?22?%}.recommend .goods-title uni-image[data-v-90fb66ec]{width:%?38?%;height:%?38?%}",""]),t.exports=e},"19d2":function(t,e,i){"use strict";i.r(e);var s=i("dd10"),a=i("20f9");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("378d");var r=i("f0c5"),o=Object(r["a"])(a["default"],s["b"],s["c"],!1,null,"02ab9a7e",null,!1,s["a"],void 0);e["default"]=o.exports},"1b2f":function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,".loading[data-v-02ab9a7e]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;display:flex;justify-content:center;align-items:center}.loading.flex[data-v-02ab9a7e]{position:static;flex:1;width:100%}",""]),t.exports=e},"206d":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var s={recommend:i("7c8a").default,loadingView:i("19d2").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"goods-logistics mb20"},[i("v-uni-view",{staticClass:"header row bg-white"},[i("v-uni-view",{staticClass:"goods  mr20"},[i("v-uni-image",{staticClass:"goods-img",attrs:{src:t.order.image}}),i("v-uni-view",{staticClass:"count xs white br60"},[t._v("共"+t._s(t.order.count)+"件商品")])],1),i("v-uni-view",{staticClass:"info sm"},[i("v-uni-view",{staticClass:"bold lg"},[t._v(t._s(t.order.tips))]),i("v-uni-view",{staticClass:"black mt10 mb10"},[t._v("物流公司："+t._s(t.order.shipping_name))]),i("v-uni-view",{staticClass:"row"},[i("v-uni-text",{staticClass:"black"},[t._v("快递单号："+t._s(t.order.invoice_no))]),i("v-uni-text",{staticClass:"primary ml20",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCopy.apply(void 0,arguments)}}},[t._v("复制")])],1)],1)],1),i("v-uni-view",{staticClass:"main mt20 bg-white column"},[i("v-uni-view",{staticClass:"express"},[t.take.contacts?i("v-uni-view",{staticClass:"express-address row"},[i("v-uni-view",{staticClass:"express-left column-center"},[i("v-uni-image",{staticClass:"express-icon",attrs:{src:t.finish.tips?"/static/images/logistics_address.png":"/static/images/logistics_address_gray.png"}}),i("v-uni-view",{staticClass:"express-line"})],1),i("v-uni-view",{staticClass:"express-right"},[i("v-uni-view",{staticClass:"name bold mb10 sm"},[t._v(t._s(t.take.contacts)+" "+t._s(t.take.mobile))]),i("v-uni-view",{staticClass:"address sm lighter line2"},[t._v(t._s(t.take.address))])],1)],1):t._e(),t.finish.tips?i("v-uni-view",{staticClass:"express-item row"},[i("v-uni-view",{staticClass:"express-left column-center"},[i("v-uni-image",{staticClass:"express-icon",attrs:{src:"/static/images/logistics_success.png"}}),i("v-uni-view",{staticClass:"express-line"})],1),i("v-uni-view",{staticClass:"express-right"},[i("v-uni-view",{staticClass:"title bold sm"},[t._v(t._s(t.finish.title))]),i("v-uni-view",{staticClass:"dec sm"},[t._v(t._s(t.finish.tips))]),i("v-uni-view",{staticClass:"time xs muted"},[t._v(t._s(t.finish.time))])],1)],1):t._e(),t.delivery.traces&&t.delivery.traces.length?i("v-uni-view",{staticClass:"express-item row"},[i("v-uni-view",{staticClass:"express-left column-center"},[i("v-uni-image",{staticClass:"express-icon",attrs:{src:"/static/images/logistics_transit.png"}}),i("v-uni-view",{staticClass:"express-line"})],1),i("v-uni-view",{staticClass:"express-right muted"},[i("v-uni-view",{staticClass:"title bold sm "},[t._v(t._s(t.delivery.title))]),t.delivery.traces[0][0]?i("v-uni-view",{staticClass:"xs"},[t._v(t._s(t.delivery.traces[0][0]))]):t._e(),t.delivery.traces[0][1]?i("v-uni-view",{staticClass:"xs"},[t._v(t._s(t.delivery.traces[0][1]))]):t._e(),t.delivery.traces[0][2]?i("v-uni-view",{staticClass:"xs"},[t._v(t._s(t.delivery.traces[0][2]))]):t._e()],1)],1):t._e(),t._l(t.delivery.traces,(function(e,s){return[s>=1?i("v-uni-view",{key:s+"_0",staticClass:"express-item row"},[i("v-uni-view",{staticClass:"express-left column-center"},[i("v-uni-view",{staticClass:"express-doted"}),i("v-uni-view",{staticClass:"express-line"})],1),i("v-uni-view",{staticClass:"express-right muted"},[e[0]?i("v-uni-view",{staticClass:"sm"},[t._v(t._s(e[0]))]):t._e(),e[1]?i("v-uni-view",{staticClass:"sm"},[t._v(t._s(e[1]))]):t._e(),e[2]?i("v-uni-view",{staticClass:"sm"},[t._v(t._s(e[2]))]):t._e()],1)],1):t._e()]})),t.shipment.tips?i("v-uni-view",{staticClass:"express-item row"},[i("v-uni-view",{staticClass:"express-left column-center"},[i("v-uni-image",{staticClass:"express-icon",attrs:{src:"/static/images/logistics_delivered.png"}}),i("v-uni-view",{staticClass:"express-line"})],1),i("v-uni-view",{staticClass:"express-right muted"},[i("v-uni-view",{staticClass:"title bold sm"},[t._v(t._s(t.shipment.title))]),i("v-uni-view",{staticClass:"dec xs"},[t._v(t._s(t.shipment.tips))]),i("v-uni-view",{staticClass:"time xs muted"},[t._v(t._s(t.shipment.time))])],1)],1):t._e(),t.buy.tips?i("v-uni-view",{staticClass:"express-item row"},[i("v-uni-view",{staticClass:"express-left column-center"},[i("v-uni-image",{staticClass:"express-icon",attrs:{src:"/static/images/logistics_pay.png"}}),i("v-uni-view",{staticClass:"express-line"})],1),i("v-uni-view",{staticClass:"express-right muted"},[i("v-uni-view",{staticClass:"title bold sm"},[t._v(t._s(t.buy.title))]),i("v-uni-view",{staticClass:"dec xs"},[t._v(t._s(t.buy.tips))]),i("v-uni-view",{staticClass:"time xs muted"},[t._v(t._s(t.buy.time))])],1)],1):t._e()],2)],1)],1),i("recommend"),t.isFirstLoading?i("loading-view"):t._e()],1)},n=[]},"20f9":function(t,e,i){"use strict";i.r(e);var s=i("b678"),a=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},"378d":function(t,e,i){"use strict";var s=i("b465"),a=i.n(s);a.a},"407c":function(t,e,i){var s=i("d431");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("24674537",s,!0,{sourceMap:!1,shadowMode:!1})},"5f27":function(t,e,i){var s=i("14c5");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("ae37d1c8",s,!0,{sourceMap:!1,shadowMode:!1})},"76ab":function(t,e,i){"use strict";i.r(e);var s=i("206d"),a=i("a78d");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("d25b");var r=i("f0c5"),o=Object(r["a"])(a["default"],s["b"],s["c"],!1,null,"07e881d8",null,!1,s["a"],void 0);e["default"]=o.exports},"7c8a":function(t,e,i){"use strict";i.r(e);var s=i("e5cf"),a=i("b001");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("c366");var r=i("f0c5"),o=Object(r["a"])(a["default"],s["b"],s["c"],!1,null,"90fb66ec",null,!1,s["a"],void 0);e["default"]=o.exports},"7fe9":function(t,e,i){"use strict";var s=i("c1b7"),a=i.n(s);a.a},8359:function(t,e,i){"use strict";i("7a82");var s=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7");var a=s(i("c7eb")),n=s(i("1da1")),r=i("b55a"),o=i("f2e5"),d={data:function(){return{shipment:{},buy:{},delivery:{},finish:{},order:{},take:{},isFirstLoading:!0}},components:{},props:{},onLoad:function(t){this.id=t.id,this.orderTracesFun()},methods:{orderTracesFun:function(){var t=this;return(0,n.default)((0,a.default)().mark((function e(){var i,s,n,o,d,c,l,u,f;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.orderTraces)(t.id);case 2:i=e.sent,s=i.code,n=i.data,o=n.shipment,d=n.buy,c=n.delivery,l=n.finish,u=n.order,f=n.take,1==s?(t.shipment=o,t.buy=d,t.delivery=c,t.finish=l,t.order=u,t.take=f,t.isFirstLoading=!1):setTimeout((function(){return uni.navigateBack()}),1e3);case 12:case"end":return e.stop()}}),e)})))()},onCopy:function(){(0,o.copy)(this.order.invoice_no)}}};e.default=d},"93cf":function(t,e,i){"use strict";i.r(e);var s=i("bd88"),a=i("e7cb");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("7fe9");var r=i("f0c5"),o=Object(r["a"])(a["default"],s["b"],s["c"],!1,null,"13a5beb4",null,!1,s["a"],void 0);e["default"]=o.exports},a78d:function(t,e,i){"use strict";i.r(e);var s=i("8359"),a=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},b001:function(t,e,i){"use strict";i.r(e);var s=i("fe80"),a=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},b465:function(t,e,i){var s=i("1b2f");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("7c39a516",s,!0,{sourceMap:!1,shadowMode:!1})},b55a:function(t,e,i){"use strict";i("7a82");var s=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.cancelOrder=function(t){return a.default.post("order/cancel",{id:t})},e.confirmOrder=function(t){return a.default.post("order/confirm",{id:t})},e.delOrder=function(t){return a.default.post("order/del",{id:t})},e.getOrderCoupon=function(t){return a.default.post("coupon/orderCoupon",t)},e.getOrderDetail=function(t){return a.default.get("order/detail",{params:{id:t}})},e.getOrderList=function(t){return a.default.get("order/lists",{params:t})},e.orderBuy=function(t){return a.default.post("order/buy",t)},e.orderTraces=function(t){return a.default.get("order/orderTraces",{params:{id:t}})};var a=s(i("be8a"));i("f2e5")},b678:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var s={data:function(){return{}},props:{type:{type:String,default:"fixed"},backgroundColor:{type:String,default:"#fff"},color:{type:String},size:{type:Number,default:40}},methods:{}};e.default=s},bd88:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:"loading "+(t.vertical?"loading--vertical":"")},[i("v-uni-view",{class:"loading__spinner loading__spinner--"+t.type,style:{color:t.color,width:t.size+"rpx",height:t.size+"rpx"}},t._l(t.array12,(function(e,s){return"spinner"===t.type?i("v-uni-view",{key:s,staticClass:"loading__dot"}):t._e()})),1),i("v-uni-view",{staticClass:"loading__text",style:{"font-size":t.textSize+"rpx",color:t.color}},[t._t("default")],2)],1)},a=[]},c1b7:function(t,e,i){var s=i("ca2d");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("be95e154",s,!0,{sourceMap:!1,shadowMode:!1})},c366:function(t,e,i){"use strict";var s=i("5f27"),a=i.n(s);a.a},ca2d:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,'[data-v-13a5beb4]:host{font-size:0;line-height:1}.loading[data-v-13a5beb4]{display:inline-flex;align-items:center;justify-content:center;color:#c8c9cc}.loading__spinner[data-v-13a5beb4]{position:relative;box-sizing:border-box;width:%?45?%;max-width:100%;max-height:100%;height:%?45?%;-webkit-animation:rotate-data-v-13a5beb4 .8s linear infinite;animation:rotate-data-v-13a5beb4 .8s linear infinite}.loading__spinner--spinner[data-v-13a5beb4]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.loading__spinner--circular[data-v-13a5beb4]{border:%?2?% solid transparent;border-top-color:initial;border-radius:100%}.loading__text[data-v-13a5beb4]{margin-left:%?16?%;color:#969799;font-size:%?28?%;line-height:%?40?%}.loading__text[data-v-13a5beb4]:empty{display:none}.loading--vertical[data-v-13a5beb4]{-webkit-flex-direction:column;flex-direction:column}.loading--vertical .loading__text[data-v-13a5beb4]{margin:%?16?% 0 0}.loading__dot[data-v-13a5beb4]{position:absolute;top:0;left:0;width:100%;height:100%}.loading__dot[data-v-13a5beb4]:before{display:block;width:%?4?%;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.loading__dot[data-v-13a5beb4]:first-of-type{-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.loading__dot[data-v-13a5beb4]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.loading__dot[data-v-13a5beb4]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.loading__dot[data-v-13a5beb4]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.loading__dot[data-v-13a5beb4]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.loading__dot[data-v-13a5beb4]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.loading__dot[data-v-13a5beb4]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.loading__dot[data-v-13a5beb4]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.loading__dot[data-v-13a5beb4]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.loading__dot[data-v-13a5beb4]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.loading__dot[data-v-13a5beb4]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.loading__dot[data-v-13a5beb4]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes rotate-data-v-13a5beb4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-13a5beb4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},d25b:function(t,e,i){"use strict";var s=i("407c"),a=i.n(s);a.a},d431:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.goods-logistics[data-v-07e881d8]{padding-top:%?20?%}.goods-logistics .header[data-v-07e881d8]{padding:%?20?%}.goods-logistics .header .goods-img[data-v-07e881d8]{width:%?160?%;height:%?160?%;flex:none;border-radius:%?10?%}.goods-logistics .goods[data-v-07e881d8]{position:relative}.goods-logistics .goods .count[data-v-07e881d8]{position:absolute;bottom:0;width:100%;text-align:center;background-color:rgba(0,0,0,.6);padding:%?4?% 0}.goods-logistics .express[data-v-07e881d8]{width:%?700?%;padding-top:%?30?%;padding-bottom:%?100?%;margin:0 auto;border-radius:%?10?%}.goods-logistics .express-address[data-v-07e881d8],\n.goods-logistics .express-item[data-v-07e881d8]{align-items:flex-start;position:relative;padding:%?20?% 0}.goods-logistics .express-left[data-v-07e881d8]{margin-top:%?10?%;margin-right:%?24?%;height:100%;position:absolute;width:%?40?%;flex:none}.goods-logistics .express-left .express-icon[data-v-07e881d8]{width:%?40?%;height:%?40?%}.goods-logistics .express-left .express-line[data-v-07e881d8]{flex:1;border-left:1px dotted #e5e5e5}.goods-logistics .express-left .express-doted[data-v-07e881d8]{width:%?16?%;height:%?16?%;border-radius:50%;background-color:#e5e5e5}.goods-logistics .express-right[data-v-07e881d8]{padding-left:%?60?%}.goods-logistics .express-right .title[data-v-07e881d8],\n.goods-logistics .express-right .dec[data-v-07e881d8]{margin-bottom:%?5?%}.goods-logistics .express-item:last-of-type .express-left .express-line[data-v-07e881d8]{border:none}',""]),t.exports=e},dd10:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var s={loading:i("93cf").default},a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{class:"loading "+("flex"==this.type?"flex":""),style:{backgroundColor:this.backgroundColor}},[e("loading",{attrs:{color:this.color,size:this.size}})],1)},n=[]},e22f:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("a630"),i("3ca3");var s={props:{color:String,vertical:Boolean,type:{type:String,default:"spinner"},size:{type:Number,default:40},textSize:String},data:function(){return{array12:Array.from({length:12})}}};e.default=s},e5cf:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var s={goodsList:i("69cf").default},a=function(){var t=this.$createElement,e=this._self._c||t;return this.goodsList.length?e("v-uni-view",{staticClass:"recommend"},[e("v-uni-view",{staticClass:"goods-title row-center"},[e("v-uni-text",{staticClass:"line"}),e("v-uni-view",{staticClass:"row"},[e("v-uni-image",{staticClass:"mr10",attrs:{src:"/static/images/icon_like.png"}}),e("v-uni-text",{staticClass:"bold xxl"},[this._v("好物优选")])],1),e("v-uni-text",{staticClass:"line"})],1),e("goods-list",{attrs:{list:this.goodsList}})],1):this._e()},n=[]},e7cb:function(t,e,i){"use strict";i.r(e);var s=i("e22f"),a=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},fe80:function(t,e,i){"use strict";i("7a82");var s=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2a10"),n=s(i("69cf")),r={data:function(){return{goodsList:[]}},components:{goodsList:n.default},props:{},beforeMount:function(){this.getBestListFun()},destroyed:function(){},methods:{getBestListFun:function(){var t=this;(0,a.getBestList)({page_no:1,page_size:6}).then((function(e){1==e.code&&(t.goodsList=e.data.list)}))}}};e.default=r}}]);