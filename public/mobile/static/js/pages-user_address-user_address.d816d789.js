(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user_address-user_address"],{"56b3":function(t,e,s){"use strict";s.r(e);var i=s("5ffb"),a=s("9ce4");for(var n in a)["default"].indexOf(n)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(n);s("9519");var d=s("f0c5"),r=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"9d71ac26",null,!1,i["a"],void 0);e["default"]=r.exports},"5ffb":function(t,e,s){"use strict";s.d(e,"b",(function(){return a})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return i}));var i={uModal:s("d82a").default},a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"user-address"},[t.hasAddress?s("v-uni-view",{staticClass:"address-list"},[s("v-uni-radio-group",{staticClass:"radio-group",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.addressList,(function(e,i){return s("v-uni-view",{key:i,staticClass:"item bg-white mb20",attrs:{"data-id":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSelect.apply(void 0,arguments)}}},[s("v-uni-view",{staticClass:"address"},[s("v-uni-view",{staticClass:"consignee md bold"},[t._v(t._s(e.contact)),s("v-uni-text",{staticClass:"phone ml10"},[t._v(t._s(e.telephone))])],1),s("v-uni-view",{staticClass:"lighter sm mt10"},[t._v(t._s(e.province)+" "+t._s(e.city)+" "+t._s(e.district)+" "+t._s(e.address))])],1),s("v-uni-view",{staticClass:"operation row-between"},[s("v-uni-view",[s("v-uni-radio",{staticClass:"radio row",attrs:{color:"#FF2C3C",value:e.id+"",checked:"1"==e.is_default}},[s("v-uni-text",[t._v("设为默认")])],1)],1),s("v-uni-view",{staticClass:"row-center"},[s("v-uni-view",{staticClass:"row mr20",on:{click:function(s){s.stopPropagation(),arguments[0]=s=t.$handleEvent(s),t.editAddress(e.id)}}},[s("v-uni-image",{staticClass:"icon-md mr10",attrs:{src:"/static/images/icon_edit.png"}}),t._v("编辑")],1),s("v-uni-view",{staticClass:"row ml20",attrs:{"data-id":e.id},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.showSurePop.apply(void 0,arguments)}}},[s("v-uni-image",{staticClass:"icon-md mr10",attrs:{src:"/static/images/icon_del_1.png"}}),t._v("删除")],1)],1)],1)],1)})),1)],1):s("v-uni-view",{staticClass:"no-address column-center"},[s("v-uni-image",{staticClass:"img-null mt20",attrs:{src:"/static/images/address_null.png"}}),s("v-uni-view",{staticClass:"sm muted"},[t._v("暂无添加地址，请添加~")])],1),s("u-modal",{attrs:{id:"delete-dialog",showCancelButton:!0,"confirm-text":"狠心删除","confirm-color":"#FF2C3C","show-title":!1},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.delAddressFun.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.hidePop.apply(void 0,arguments)}},model:{value:t.deleteSure,callback:function(e){t.deleteSure=e},expression:"deleteSure"}},[s("v-uni-view",{staticClass:"column-center tips-dialog"},[s("v-uni-image",{staticClass:"icon-lg",attrs:{src:"/static/images/icon_warning.png"}}),s("v-uni-view",{staticStyle:{"margin-top":"30rpx"}},[t._v("确认删除该地址吗？")])],1)],1),s("v-uni-view",{staticClass:"footer row-between fixed bg-white"},[t.isWeixin?s("v-uni-view",{staticClass:"btn row-center bg-gray br60 mr20",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getWxAddressFun.apply(void 0,arguments)}}},[s("v-uni-image",{staticClass:"icon-lg mr10",attrs:{src:"/static/images/icon_wechat.png"}}),s("v-uni-text",{staticClass:"md"},[t._v("微信导入")])],1):t._e(),s("v-uni-view",{staticClass:"btn bg-primary white md row-center br60",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addAddress.apply(void 0,arguments)}}},[t._v("新增收货地址")])],1)],1)},n=[]},"6c84":function(t,e,s){"use strict";s("7a82");var i=s("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,s("e9c4");var a=s("2a53"),n=i(s("3a23")),d=s("f2e5"),r={data:function(){return{addressList:[],hasAddress:!0,deleteSure:!1,currentId:0,isWeixin:!0}},props:{},onLoad:function(t){this.type=t.type,this.isWeixin=(0,d.isWeixinClient)()},onShow:function(){this.getAddressListsFun()},methods:{onSelect:function(t){if(this.type){var e=t.currentTarget.dataset.id;uni.$emit("selectaddress",{id:e}),uni.navigateBack()}},addAddress:function(){uni.navigateTo({url:"/pages/address_edit/address_edit"})},editAddress:function(t){uni.navigateTo({url:"/pages/address_edit/address_edit?id=".concat(t)})},getAddressListsFun:function(){var t=this;(0,a.getAddressLists)().then((function(e){1==e.code&&e.data.length?(t.addressList=e.data,t.hasAddress=!0):t.hasAddress=!1}))},radioChange:function(t){var e=this,s=t.detail.value;console.log(t),(0,a.setDefaultAddress)(s).then((function(t){1==t.code&&e.getAddressListsFun()}))},onLoadFun:function(){this.getAddressListsFun()},delAddressFun:function(t){var e=this,s=this.currentId;(0,a.delAddress)(s).then((function(t){1==t.code&&(e.$toast({title:t.msg}),e.deleteSure=!1,e.getAddressListsFun())}))},getWxAddressFun:function(){n.default.getWxAddress().then((function(t){uni.setStorageSync("wxAddress",JSON.stringify(t)),setTimeout((function(){uni.navigateTo({url:"/pages/address_edit/address_edit"})}),200)}))},showSurePop:function(t){this.deleteSure=!0,this.currentId=t.currentTarget.dataset.id},hidePop:function(t){this.deleteSure=!1}}};e.default=r},9519:function(t,e,s){"use strict";var i=s("b22e"),a=s.n(i);a.a},"9ce4":function(t,e,s){"use strict";s.r(e);var i=s("6c84"),a=s.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(n);e["default"]=a.a},b22e:function(t,e,s){var i=s("cdab");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=s("4f06").default;a("1a6c75c1",i,!0,{sourceMap:!1,shadowMode:!1})},cdab:function(t,e,s){var i=s("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* pages/user_address/user_address.wxss */.user-address[data-v-9d71ac26]{padding-bottom:calc(%?140?% + env(safe-area-inset-bottom))}.user-address .no-address[data-v-9d71ac26]{padding-top:%?300?%;text-align:center}.user-address .address-list[data-v-9d71ac26]{padding:%?10?% 0}.user-address .address-list .item[data-v-9d71ac26]{padding:0 %?30?%}.user-address .address-list .item .address[data-v-9d71ac26]{padding:%?20?% 0;border-bottom:1px solid #e5e5e5}.user-address .address-list .item .operation[data-v-9d71ac26]{height:%?80?%}.user-address .footer[data-v-9d71ac26]{position:fixed;left:0;right:0;bottom:0;height:%?118?%;padding:0 %?30?%;box-sizing:initial;padding-bottom:env(safe-area-inset-bottom)}.user-address .footer .btn[data-v-9d71ac26]{flex:1;height:%?80?%}.tips-dialog[data-v-9d71ac26]{height:%?230?%;width:100%}',""]),t.exports=e}}]);