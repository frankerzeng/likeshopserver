(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"14c5":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* components/recommend/recommend.wxss */.recommend[data-v-90fb66ec]{padding-bottom:%?50?%}.recommend .header .title[data-v-90fb66ec]{width:%?468?%;height:%?45?%;margin:%?10?% 0}.recommend .goods-title[data-v-90fb66ec]{height:%?100?%}.recommend .goods-title .line[data-v-90fb66ec]{width:%?58?%;height:1px;background-color:#ccc;margin:0 %?22?%}.recommend .goods-title uni-image[data-v-90fb66ec]{width:%?38?%;height:%?38?%}",""]),e.exports=t},"1b0b":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n("c7eb")),a=i(n("1da1")),o=i(n("5530")),r=n("26cb"),c=(n("2a53"),n("2a10")),u=n("a65e"),v=n("f2e5"),l=i(n("70ab")),d=(getApp(),{data:function(){return{showNav:!1,navH:0,navBg:0,menuList:[],statusBarH:""}},components:{},props:{},onLoad:function(e){(0,v.setTabbar)(),this.getMenuFun()},onShow:function(){this.getUser(),this.getCartNum()},onPageScroll:function(e){var t=uni.upx2px(100),n=e.scrollTop,i=n/t>1?1:n/t;this.navBg=i},onUnload:function(){},onPullDownRefresh:function(){this.getUser().then((function(){uni.stopPullDownRefresh()})),this.getMenuFun()},onShareAppMessage:function(){var e=l.default.get("shareInfo");return{title:e.mnp_share_title,path:"pages/index/index?invite_code="+this.inviteCode}},methods:(0,o.default)((0,o.default)({},(0,r.mapActions)(["getCartNum","getUser"])),{},{goLogin:function(){var e=this.isLogin;e?uni.navigateTo({url:"/pages/bundle/user_profile/user_profile"}):(0,u.toLogin)()},goPage:function(e){if(!this.isLogin)return(0,u.toLogin)();uni.navigateTo({url:e})},tapMenu:function(e){if(!this.isLogin)return(0,u.toLogin)();console.log(e),(0,v.menuJump)(e)},getMenuFun:function(){var e=this;return(0,a.default)((0,s.default)().mark((function t(){var n,i,a;return(0,s.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,c.getMenu)({type:2});case 2:n=t.sent,i=n.data,a=n.code,1==a&&(e.menuList=i);case 6:case"end":return t.stop()}}),t)})))()},onCopy:function(e){(0,v.copy)(this.userInfo.sn)}}),computed:(0,o.default)((0,o.default)({},(0,r.mapGetters)(["cartNum","userInfo","inviteCode","appConfig"])),{},{background:function(){var e=this.appConfig.center_setting;return e.top_bg_image?{"background-image":"url(".concat(e.top_bg_image,")")}:{}}})});t.default=d},"1de5":function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"22e4":function(e,t){e.exports="data:image/png;base64,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"},"5f27":function(e,t,n){var i=n("14c5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=n("4f06").default;s("ae37d1c8",i,!0,{sourceMap:!1,shadowMode:!1})},7466:function(e,t,n){"use strict";n.r(t);var i=n("1b0b"),s=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=s.a},"7c8a":function(e,t,n){"use strict";n.r(t);var i=n("e5cf"),s=n("b001");for(var a in s)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(a);n("c366");var o=n("f0c5"),r=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"90fb66ec",null,!1,i["a"],void 0);t["default"]=r.exports},"97c0":function(e,t,n){e.exports=n.p+"static/img/my_topbg.3e057c41.png"},a681:function(e,t,n){"use strict";n.r(t);var i=n("bd4e"),s=n("7466");for(var a in s)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(a);n("a697");var o=n("f0c5"),r=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"13781c96",null,!1,i["a"],void 0);t["default"]=r.exports},a697:function(e,t,n){"use strict";var i=n("bb4c"),s=n.n(i);s.a},b001:function(e,t,n){"use strict";n.r(t);var i=n("fe80"),s=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=s.a},bb4c:function(e,t,n){var i=n("f8fd");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=n("4f06").default;s("44f5151d",i,!0,{sourceMap:!1,shadowMode:!1})},bd4e:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uIcon:n("5108").default,recommend:n("7c8a").default},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"user",style:[e.background]},[n("v-uni-view",{staticClass:"header"},[n("v-uni-view",{staticClass:"user-info row-between"},[n("v-uni-view",{staticClass:"info row"},[n("v-uni-image",{staticClass:"avatar mr20 flexnone",attrs:{src:e.isLogin?e.userInfo.avatar:"/static/images/my_portrait_empty.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goLogin.apply(void 0,arguments)}}}),e.isLogin?n("v-uni-view",{staticClass:"white"},[n("v-uni-view",{staticClass:"name xxl line1"},[e._v(e._s(e.userInfo.nickname))]),e.userInfo.sn?n("v-uni-view",{staticClass:"user-id row-between"},[n("v-uni-view",{staticClass:"xs white ml20 mr20"},[e._v("会员ID: "+e._s(e.userInfo.sn||""))]),n("v-uni-view",{staticClass:"xs normal copy-btn row-center ml5",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.onCopy.apply(void 0,arguments)}}},[e._v("复制")])],1):e._e()],1):n("v-uni-view",{staticClass:"white",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goLogin.apply(void 0,arguments)}}},[n("v-uni-view",{staticStyle:{"font-size":"42rpx"}},[e._v("点击登录")]),n("v-uni-view",{staticClass:"sm"},[e._v("登录体验更多功能")])],1)],1),n("v-uni-view",{staticClass:"row",staticStyle:{"align-self":"flex-start"}},[n("v-uni-view",{staticClass:"user-opt",staticStyle:{"margin-right":"30rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPage("/pages/bundle/message_center/message_center")}}},[e.userInfo.notice_num?n("v-uni-view",{staticClass:"dot row-center"}):e._e(),n("v-uni-image",{staticStyle:{width:"58rpx",height:"58rpx"},attrs:{src:"/static/images/icon_my_news.png"}})],1),n("v-uni-view",{staticClass:"user-opt",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPage("/pages/bundle/user_profile/user_profile")}}},[n("v-uni-image",{staticStyle:{width:"58rpx",height:"58rpx"},attrs:{src:"/static/images/icon_my_setting.png"}})],1)],1)],1),n("v-uni-view",{staticClass:"member column-end",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPage("/pages/user_vip/user_vip")}}},[n("v-uni-view",{staticClass:"member-entery row-between"},[n("v-uni-view",{staticClass:"row"},[n("v-uni-image",{staticClass:"icon-md",attrs:{src:"/static/images/icon_member.png"}}),n("v-uni-view",{staticClass:"ml10"},[e._v(e._s(e.isLogin?e.userInfo.level:"登录查看会员权益"))])],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"sm"},[e._v(e._s(e.userInfo.next_level_tips||"查看会员权益"))]),n("u-icon",{attrs:{name:"arrow-right"}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"my-assets bg-white"},[n("v-uni-view",{staticClass:"title row lg"},[e._v("我的资产")]),n("v-uni-view",{staticClass:"nav row"},[n("v-uni-view",{staticClass:"column-center mb20 assets-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPage("/pages/bundle/user_wallet/user_wallet")}}},[n("v-uni-view",{staticClass:"xl primary"},[e._v(e._s(e.userInfo.user_money))]),n("v-uni-view",{staticClass:"sm"},[e._v("余额")])],1),n("v-uni-view",{staticClass:"column-center mb20 assets-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPage("/pages/bundle/user_sign/user_sign")}}},[n("v-uni-view",{staticClass:"xl primary"},[e._v(e._s(e.userInfo.user_integral))]),n("v-uni-view",{staticClass:"sm"},[e._v("积分")])],1),n("v-uni-view",{staticClass:"column-center mb20 assets-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPage("/pages/user_coupon/user_coupon")}}},[n("v-uni-view",{staticClass:"xl primary"},[e._v(e._s(e.userInfo.coupon))]),n("v-uni-view",{staticClass:"sm"},[e._v("优惠券")])],1)],1)],1),n("v-uni-view",{staticClass:"order-nav bg-white"},[n("v-uni-view",{staticClass:"title row-between",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPage("/pages/user_order/user_order")}}},[n("v-uni-view",{staticClass:"lg"},[e._v("我的订单")]),n("v-uni-view",{staticClass:"muted sm row"},[e._v("全部订单"),n("v-uni-image",{staticClass:"icon-sm ml10",attrs:{src:"/static/images/arrow_right.png"}})],1)],1),n("v-uni-view",{staticClass:"nav row"},[n("v-uni-view",{staticClass:"item column-center mb20",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPage("/pages/user_order/user_order?type=pay")}}},[n("v-uni-view",{staticClass:"icon-contain"},[e.userInfo.wait_pay?n("v-uni-view",{staticClass:"badge xs row-center bg-white"},[e._v(e._s(e.userInfo.wait_pay))]):e._e(),n("v-uni-image",{staticClass:"nav-icon",attrs:{src:"/static/images/icon_my_payment.png"}})],1),n("v-uni-view",{staticClass:"sm mt10"},[e._v("待付款")])],1),n("v-uni-view",{staticClass:"item column-center mb20",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPage("/pages/user_order/user_order?type=delivery")}}},[n("v-uni-view",{staticClass:"icon-contain"},[e.userInfo.wait_delivery?n("v-uni-view",{staticClass:"badge xs row-center bg-white"},[e._v(e._s(e.userInfo.wait_delivery))]):e._e(),n("v-uni-image",{staticClass:"nav-icon mb10",attrs:{src:"/static/images/icon_my_fahuo.png"}})],1),n("v-uni-view",{staticClass:"sm"},[e._v("待发货")])],1),n("v-uni-view",{staticClass:"item column-center mb20",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPage("/pages/user_order/user_order?type=delivery")}}},[n("v-uni-view",{staticClass:"icon-contain"},[e.userInfo.wait_take?n("v-uni-view",{staticClass:"badge xs row-center bg-white"},[e._v(e._s(e.userInfo.wait_take))]):e._e(),n("v-uni-image",{staticClass:"nav-icon",attrs:{src:"/static/images/icon_my_shouhuo.png"}})],1),n("v-uni-view",{staticClass:"sm mt10"},[e._v("待收货")])],1),n("v-uni-view",{staticClass:"item column-center mb20",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPage("/pages/bundle/goods_comment_list/goods_comment_list")}}},[n("v-uni-view",{staticClass:"icon-contain"},[e.userInfo.wait_comment?n("v-uni-view",{staticClass:"badge xs row-center bg-white"},[e._v(e._s(e.userInfo.wait_comment))]):e._e(),n("v-uni-image",{staticClass:"nav-icon",attrs:{src:"/static/images/icon_my_pingjia.png"}})],1),n("v-uni-view",{staticClass:"sm mt10"},[e._v("商品评价")])],1),n("v-uni-view",{staticClass:"item column-center mb20",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPage("/pages/bundle/post_sale/post_sale")}}},[n("v-uni-view",{staticClass:"icon-contain"},[e.userInfo.after_sale?n("v-uni-view",{staticClass:"badge xs row-center bg-white"},[e._v(e._s(e.userInfo.after_sale))]):e._e(),n("v-uni-image",{staticClass:"nav-icon",attrs:{src:"/static/images/icon_my_shouhou.png"}})],1),n("v-uni-view",{staticClass:"sm mt10"},[e._v("退款/售后")])],1)],1)],1),e.menuList&&e.menuList.length>0?n("v-uni-view",{staticClass:"server-nav bg-white"},[n("v-uni-view",[n("v-uni-view",{staticClass:"title row-between"},[n("v-uni-view",{staticClass:"lg"},[e._v("我的功能")])],1)],1),n("v-uni-view",{staticClass:"nav row wrap"},e._l(e.menuList,(function(t,i){return n("v-uni-button",{key:i,staticClass:"item column-center mb20",staticStyle:{width:"25%"},attrs:{"hover-class":"none","open-type":3==t.link_type?"contact":""},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.tapMenu(t)}}},[n("v-uni-image",{staticClass:"nav-icon",attrs:{src:t.image}}),n("v-uni-view",{staticClass:"sm mt10"},[e._v(e._s(t.name))])],1)})),1)],1):e._e(),n("recommend"),n("v-uni-view",{staticClass:"xs muted",staticStyle:{margin:"50rpx 0"}},[n("v-uni-view",{staticClass:"row-center"},[e._v("由 likeshop 提供免费开源商城系统")]),n("v-uni-view",{staticClass:"row-center"},[e._v("© likeshop.cn")])],1)],1)},a=[]},c366:function(e,t,n){"use strict";var i=n("5f27"),s=n.n(i);s.a},e5cf:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={goodsList:n("69cf").default},s=function(){var e=this.$createElement,t=this._self._c||e;return this.goodsList.length?t("v-uni-view",{staticClass:"recommend"},[t("v-uni-view",{staticClass:"goods-title row-center"},[t("v-uni-text",{staticClass:"line"}),t("v-uni-view",{staticClass:"row"},[t("v-uni-image",{staticClass:"mr10",attrs:{src:"/static/images/icon_like.png"}}),t("v-uni-text",{staticClass:"bold xxl"},[this._v("好物优选")])],1),t("v-uni-text",{staticClass:"line"})],1),t("goods-list",{attrs:{list:this.goodsList}})],1):this._e()},a=[]},f8fd:function(e,t,n){var i=n("24fb"),s=n("1de5"),a=n("97c0"),o=n("22e4");t=i(!1);var r=s(a),c=s(o);t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.user[data-v-13781c96]{background-image:url('+r+");background-size:100% %?420?%;background-repeat:no-repeat}.user .header[data-v-13781c96]{display:flex;flex-direction:column;height:%?420?%}.user .header .user-info[data-v-13781c96]{padding:%?10?% %?30?%;padding-top:%?90?%}.user .header .user-info .avatar[data-v-13781c96]{height:%?110?%;width:%?110?%;border-radius:50%;overflow:hidden}.user .header .user-info .name[data-v-13781c96]{text-align:left;margin-bottom:%?5?%;max-width:%?400?%}.user .header .user-info .user-id[data-v-13781c96]{border:1px solid #fff;border-radius:%?100?%}.user .header .user-info .user-id .copy-btn[data-v-13781c96]{background-color:#ffdfda;height:%?40?%;width:%?90?%;border-radius:%?100?%}.user .header .user-info .user-opt[data-v-13781c96]{position:relative}.user .header .user-info .user-opt .dot[data-v-13781c96]{position:absolute;background-color:#ee0a24;border:%?2?% solid #fff;color:#ff2c3c;border-radius:100%;top:%?6?%;right:%?0?%;font-size:%?22?%;min-width:%?16?%;height:%?16?%}.user .header .user-info .buyer-type[data-v-13781c96]{background-color:#ffa200;height:%?38?%;padding:0 %?10?%}.user .header .member[data-v-13781c96]{flex:1;padding:0 %?20?%}.user .header .member .member-entery[data-v-13781c96]{color:#ffe0a1;padding:0 %?16?%;width:100%;height:%?80?%;background:url("+c+");background-size:100%}.user .order-nav .icon-contain[data-v-13781c96]{position:relative}.user .order-nav[data-v-13781c96],\n.user .my-assets[data-v-13781c96]{margin:%?20?% %?20?% 0;border-radius:%?8?%}.user .server-nav[data-v-13781c96]{margin:%?20?%;border-radius:%?8?%}.user .title[data-v-13781c96]{height:%?88?%;padding:0 %?30?%;border-bottom:1px dashed #e5e5e5}.user .nav[data-v-13781c96]{padding:%?26?% 0 0}.user .nav .assets-item[data-v-13781c96]{flex:1}.user .nav .item[data-v-13781c96]{width:25%}.user .nav .badge[data-v-13781c96]{padding:0 %?6?%;min-width:%?28?%;height:%?28?%;border-radius:%?28?%;box-sizing:border-box;border:%?1?% solid #ff2c3c;color:#ff2c3c;position:absolute;left:%?33?%;top:%?-10?%;z-index:2}.user .nav .nav-icon[data-v-13781c96]{width:%?52?%;height:%?52?%}",""]),e.exports=t},fe80:function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n("2a10"),a=i(n("69cf")),o={data:function(){return{goodsList:[]}},components:{goodsList:a.default},props:{},beforeMount:function(){this.getBestListFun()},destroyed:function(){},methods:{getBestListFun:function(){var e=this;(0,s.getBestList)({page_no:1,page_size:6}).then((function(t){1==t.code&&(e.goodsList=t.data.list)}))}}};t.default=o}}]);