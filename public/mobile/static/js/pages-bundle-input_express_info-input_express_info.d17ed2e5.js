(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bundle-input_express_info-input_express_info"],{"1f40":function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return i}));var i={uploader:e("bb6a").default},a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"input-express-info"},[e("v-uni-form",{on:{submit:function(t){arguments[0]=t=n.$handleEvent(t),n.formSubmit.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"input-contain mt20"},[e("v-uni-view",{staticClass:"input-item row"},[e("v-uni-view",{staticClass:"nr label"},[n._v("物流公司")]),e("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入物流公司名称",value:n.formInfo.express,name:"express"}})],1),e("v-uni-view",{staticClass:"input-item row"},[e("v-uni-view",{staticClass:"nr label"},[n._v("快递单号")]),e("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入快递单号",value:n.formInfo.number,name:"number"}})],1),e("v-uni-view",{staticClass:"input-item row"},[e("v-uni-view",{staticClass:"nr label"},[n._v("备注说明")]),e("v-uni-input",{staticClass:"input",attrs:{placeholder:"选填",value:n.formInfo.remark,name:"remark"}})],1)],1),e("v-uni-view",{staticClass:"upload-contain mt20"},[e("v-uni-view",{staticClass:"header row"},[e("v-uni-view",{staticClass:"nr normal"},[n._v("上传凭证")]),e("v-uni-view",{staticClass:"sm muted ml20"},[n._v("(请上传快递单号凭证）")])],1),e("v-uni-view",{staticClass:"upload"},[e("uploader",{attrs:{deletable:!0,"preview-size":"160rpx","max-count":"1","file-list":n.fileList},on:{delete:function(t){arguments[0]=t=n.$handleEvent(t),n.handleImage.apply(void 0,arguments)},"after-read":function(t){arguments[0]=t=n.$handleEvent(t),n.afterRead.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"submit-btn"},[e("v-uni-button",{staticClass:" br60 bg-primary white lg",attrs:{size:"lg","form-type":"submit"}},[n._v("提交")])],1)],1)],1)},s=[]},"2f74":function(n,t,e){"use strict";e.r(t);var i=e("1f40"),a=e("5906");for(var s in a)["default"].indexOf(s)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(s);e("f3bc");var u=e("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"0a46e02f",null,!1,i["a"],void 0);t["default"]=r.exports},5906:function(n,t,e){"use strict";e.r(t);var i=e("7f6a"),a=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(s);t["default"]=a.a},"7f6a":function(n,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("d3b7"),e("159b"),e("14d9"),e("a434");var i=e("2a53"),a=e("e42d"),s={data:function(){return{fileList:[],formInfo:{express:"",number:"",remark:""}}},components:{},props:{},onLoad:function(n){var t=n.id;this.afterSalesId=t},methods:{afterRead:function(n){var t=this,e=n;uni.showLoading({title:"正在上传中...",mask:!0}),e.forEach((function(n){t.uploadFile(n.path).then((function(n){uni.hideLoading(),t.fileList.push(n)}))}))},formSubmit:function(n){var t=n.detail.value,e=this.fileList;if(console.log(t),!t.express)return this.$toast({title:"请填写物流公司名称"});if(!t.number)return this.$toast({title:"请填写快递单号"});var i={id:this.afterSalesId,express_name:t.express,invoice_no:t.number,express_remark:t.remark,express_image:e.length<=0?"":e[0].url};this.inputExpressInfoFun(i)},uploadFile:function(n){var t=this;return new Promise((function(e){uni.uploadFile({url:a.baseURL+"file/formimage",filePath:n,name:"file",fileType:"image",cloudPath:"",success:function(n){console.log("uploadFile res ==> ",n);t.fileList;var i=JSON.parse(n.data);1==i.code&&e(i.data)},fail:function(n){console.log(n)}})}))},inputExpressInfoFun:function(n){var t=this;(0,i.inputExpressInfo)(n).then((function(n){1==n.code&&(t.$toast({title:"提交成功"},(function(){uni.navigateBack()})),uni.$emit("refreshsale"))}))},handleImage:function(n){this.fileList.splice(n)}}};t.default=s},cf14:function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* pages/input_express_info/input_express_info.wxss */.input-contain[data-v-0a46e02f]{background-color:#fff}.input-contain .input-item[data-v-0a46e02f]{padding:%?24?%}.input-item .label[data-v-0a46e02f]{width:%?152?%}.input-item .input[data-v-0a46e02f]{flex:1}.upload-contain[data-v-0a46e02f]{background-color:#fff;padding:%?24?% %?20?% %?44?%}.upload-contain .header[data-v-0a46e02f]{margin-bottom:%?30?%}.submit-btn[data-v-0a46e02f]{margin-top:%?50?%;margin-left:%?26?%;margin-right:%?26?%}",""]),n.exports=t},e3ad:function(n,t,e){var i=e("cf14");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("92196262",i,!0,{sourceMap:!1,shadowMode:!1})},f3bc:function(n,t,e){"use strict";var i=e("e3ad"),a=e.n(i);a.a}}]);