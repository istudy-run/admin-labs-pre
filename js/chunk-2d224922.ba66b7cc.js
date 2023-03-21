(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224922"],{e166:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("Row",{attrs:{gutter:24}},[e("Col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:8}},[e("Card",{attrs:{"dis-hover":!0},scopedSlots:t._u([{key:"title",fn:function(){return[e("Avatar",{staticStyle:{color:"#1890FF",background:"#E6F7FF"},attrs:{size:"small",icon:"md-person"}}),e("span",{staticClass:"ivu-pl-8"},[t._v("个人信息")])]},proxy:!0}])},[e("div",{staticClass:"component-user-avatar"},[e("Avatar",{attrs:{src:"https://dev-file.iviewui.com/avatar_default/avatar"}}),e("div",{staticClass:"component-user-avatar-cover"},[e("Icon",{attrs:{type:"ios-camera",size:42}})],1)],1),e("List",{staticClass:"ivu-mt",attrs:{size:"small"}},[e("ListItem",{scopedSlots:t._u([{key:"extra",fn:function(){return[e("span",{staticClass:"ivu-typography"},[t._v("admin")])]},proxy:!0}])},[e("ListItemMeta",{scopedSlots:t._u([{key:"title",fn:function(){return[e("Icon",{attrs:{type:"md-person"}}),e("span",{staticClass:"ivu-typography ivu-pl-8"},[t._v("用户名称")])]},proxy:!0}])})],1),e("ListItem",{scopedSlots:t._u([{key:"extra",fn:function(){return[e("span",{staticClass:"ivu-typography"},[t._v("18888888887")])]},proxy:!0}])},[e("ListItemMeta",{scopedSlots:t._u([{key:"title",fn:function(){return[e("Icon",{attrs:{type:"md-phone-portrait"}}),e("span",{staticClass:"ivu-typography ivu-pl-8"},[t._v("手机号码")])]},proxy:!0}])})],1),e("ListItem",{scopedSlots:t._u([{key:"extra",fn:function(){return[e("span",{staticClass:"ivu-typography"},[t._v("admin@iview.design")])]},proxy:!0}])},[e("ListItemMeta",{scopedSlots:t._u([{key:"title",fn:function(){return[e("Icon",{attrs:{type:"md-mail"}}),e("span",{staticClass:"ivu-typography ivu-pl-8"},[t._v("用户邮箱")])]},proxy:!0}])})],1),e("ListItem",{scopedSlots:t._u([{key:"extra",fn:function(){return[e("span",{staticClass:"ivu-typography"},[t._v("战略部 / 项目经理")])]},proxy:!0}])},[e("ListItemMeta",{scopedSlots:t._u([{key:"title",fn:function(){return[e("Icon",{attrs:{type:"md-people"}}),e("span",{staticClass:"ivu-typography ivu-pl-8"},[t._v("所属部门")])]},proxy:!0}])})],1),e("ListItem",{scopedSlots:t._u([{key:"extra",fn:function(){return[e("span",{staticClass:"ivu-typography"},[t._v("管理员")])]},proxy:!0}])},[e("ListItemMeta",{scopedSlots:t._u([{key:"title",fn:function(){return[e("Icon",{attrs:{type:"md-body"}}),e("span",{staticClass:"ivu-typography ivu-pl-8"},[t._v("所属角色")])]},proxy:!0}])})],1),e("ListItem",{scopedSlots:t._u([{key:"extra",fn:function(){return[e("span",{staticClass:"ivu-typography"},[t._v("2023-02-20 16:00:00")])]},proxy:!0}])},[e("ListItemMeta",{scopedSlots:t._u([{key:"title",fn:function(){return[e("Icon",{attrs:{type:"md-calendar"}}),e("span",{staticClass:"ivu-typography ivu-pl-8"},[t._v("创建日期")])]},proxy:!0}])})],1)],1)],1)],1),e("Col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:16}},[e("Card",{attrs:{"dis-hover":!0},scopedSlots:t._u([{key:"title",fn:function(){return[e("Avatar",{staticStyle:{color:"#722ED1",background:"#F9F0FF"},attrs:{size:"small",icon:"ios-create"}}),e("span",{staticClass:"ivu-pl-8"},[t._v("资料修改")])]},proxy:!0}])},[e("Tabs",{staticClass:"ivu-mb",attrs:{name:"name1"}},[e("TabPane",{attrs:{label:"基本信息",name:"name1"}},[e("Form",{ref:"form",attrs:{model:t.form1,rules:t.rule1,"label-width":80}},[e("FormItem",{attrs:{prop:"userName",label:"昵称"}},[e("Input",{model:{value:t.form1.userName,callback:function(e){t.$set(t.form1,"userName",e)},expression:"form1.userName"}})],1),e("FormItem",{attrs:{prop:"telPhone",label:"电话"}},[e("Input",{attrs:{maxlength:11,"show-word-limit":""},model:{value:t.form1.telPhone,callback:function(e){t.$set(t.form1,"telPhone",e)},expression:"form1.telPhone"}})],1),e("FormItem",{attrs:{prop:"email",label:"邮箱"}},[e("Input",{model:{value:t.form1.email,callback:function(e){t.$set(t.form1,"email",e)},expression:"form1.email"}})],1),e("FormItem",{attrs:{label:"性别"}},[e("RadioGroup",{model:{value:t.form1.gender,callback:function(e){t.$set(t.form1,"gender",e)},expression:"form1.gender"}},[e("Radio",{attrs:{label:"1"}},[t._v("男")]),e("Radio",{attrs:{label:"2"}},[t._v("女")])],1)],1),e("FormItem",{attrs:{label:"个人简介"}},[e("Input",{attrs:{type:"textarea",rows:4,maxlength:"200","show-word-limit":"",placeholder:"请输入个人简介"},model:{value:t.form1.intro,callback:function(e){t.$set(t.form1,"intro",e)},expression:"form1.intro"}})],1),e("FormItem",[e("Button",{attrs:{type:"primary"}},[t._v("提交")]),e("Button",{staticClass:"ivu-ml-8"},[t._v("重置")])],1)],1)],1),e("TabPane",{attrs:{label:"密码修改",name:"name2"}},[e("Form",{ref:"form",attrs:{model:t.form2,rules:t.rule2,"label-width":80}},[e("FormItem",{attrs:{prop:"userName",label:"旧密码"}},[e("Input",{attrs:{type:"password",password:"",placeholder:"请输入旧密码"},model:{value:t.form2.oldPassword,callback:function(e){t.$set(t.form2,"oldPassword",e)},expression:"form2.oldPassword"}})],1),e("FormItem",{attrs:{prop:"telPhone",label:"新密码"}},[e("Input",{attrs:{type:"password",password:"",placeholder:"请输入新密码"},model:{value:t.form2.newPassword,callback:function(e){t.$set(t.form2,"newPassword",e)},expression:"form2.newPassword"}})],1),e("FormItem",{attrs:{prop:"email",label:"确认密码"}},[e("Input",{attrs:{type:"password",password:"",placeholder:"请确认新密码"},model:{value:t.form2.confirmPassword,callback:function(e){t.$set(t.form2,"confirmPassword",e)},expression:"form2.confirmPassword"}})],1),e("FormItem",[e("Button",{attrs:{type:"primary"}},[t._v("提交")]),e("Button",{staticClass:"ivu-ml-8"},[t._v("重置")])],1)],1)],1)],1)],1)],1)],1)},a=[],o={name:"userInfo",data:function(){return{form1:{userName:"管理员",telPhone:"18888888887",email:"admin@iview.design",gender:"1",intro:""},rule1:{userName:[{required:!0,message:"用户昵称不能为空",trigger:"change"}],telPhone:[{required:!0,message:"手机号码不能为空",trigger:"change"}],email:[{required:!0,message:"邮箱地址不能为空",trigger:"change"}]},form2:{oldPassword:"",newPassword:"",confirmPassword:""},rule2:{oldPassword:[{required:!0,message:"旧密码不能为空",trigger:"change"}],newPassword:[{required:!0,message:"新密码不能为空",trigger:"change"}],confirmPassword:[{required:!0,message:"确认密码不能为空",trigger:"change"}]}}}},n=o,l=s("2877"),i=Object(l["a"])(n,r,a,!1,null,null,null);e["default"]=i.exports}}]);