webpackJsonp([1],{"3NDq":function(e,t){},"4/hK":function(e,t){},CWnG:function(e,t){},DAZU:function(e,t){},GggT:function(e,t){},KCx4:function(e,t){},SrUm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("/5sW"),i=n("woOf"),o=n.n(i),a=n("Dd8w"),l=n.n(a),d={name:"vue-codemirror-editor",props:{value:{type:String},option:{type:Object},merge:{type:Boolean},readonly:{type:Boolean}},watch:{value:{immediate:!0,handler:function(e){e!==this.p_value&&(this.p_value=e||"",this.editor&&this.editor.setValue(this.p_value))}},readonly:{immediate:!0,handler:function(e){this.editor&&this.editor.setOption("readOnly",e)}}},data:function(){return{cm:null,editor:null,CodeMirror:window.CodeMirror,p_value:this.value||"",p_defaultOption:{lineNumbers:!0,styleActiveLine:!0}}},mounted:function(){this.merge?this.pl_initMergeEditor():this.pl_initSimpleEditor()},methods:{pl_initEvent:function(){var e=this;this.editor.on("change",function(){e.p_value=e.editor.getValue(),e.$emit("input",e.p_value)}),this.editor.on("keydown",function(t,n){return e.$emit("keydown",n)})},pl_initSimpleEditor:function(){this.cm=CodeMirror(this.$el,l()({value:this.p_value},o()({},this.p_defaultOption,this.option))),this.editor=this.cm,this.pl_initEvent()},pl_initMergeEditor:function(){this.cm=CodeMirror.MergeView(this.$el,l()({value:this.p_value},o()({},this.p_defaultOption,this.option))),this.editor=this.cm.editor(),this.pl_initEvent()}}},s={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"vue-codemirror-editor"})},staticRenderFns:[]};var p=n("VU/8")(d,s,!1,function(e){n("Y8JN")},null,null).exports,c=n("8U58"),m=n.n(c),u=(n("4/hK"),n("8Nur"),n("aGTD"),{name:"demo1-basic-usage",data:function(){return{code:'<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n<meta name="viewport" content="width=device-width,initial-scale=1.0">\n<link rel="icon" href="<%= BASE_URL %>favicon.ico">\n<title>vue-codemirror-editor</title>\n</head>\n<body>\n<noscript>\n  <strong>We\'re sorry but vue-codemirror-editor doesn\'t work properly without JavaScript enabled. Please enable it to continue.</strong>\n</noscript>\n<div id="app"></div>\n</body>\n</html>'}}}),h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("demo-card",{attrs:{title:"<code> Basic Usage",href:"https://github.com/martSforever/vue-codemirror-editor/blob/master/example/demo/demo1-basic-usage.vue"}},[n("vue-codemirror-editor",{model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)},staticRenderFns:[]};var v=n("VU/8")(u,h,!1,function(e){n("k8zB")},null,null).exports,f=(n("jGSh"),{name:"demo2-theme",data:function(){return{code:'<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n<meta name="viewport" content="width=device-width,initial-scale=1.0">\n<link rel="icon" href="<%= BASE_URL %>favicon.ico">\n\n<title>vue-codemirror-editor</title>\n</head>\n<body>\n<noscript>\n  <strong>We\'re sorry but vue-codemirror-editor doesn\'t work properly without JavaScript enabled. Please enable it to continue.</strong>\n</noscript>\n<div id="app"></div>\n</body>\n</html>'}}}),g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("demo-card",{attrs:{title:"<code> Theme: base16-dark, Mode: text/html",href:"https://github.com/martSforever/vue-codemirror-editor/blob/master/example/demo/demo2-theme.vue"}},[n("vue-codemirror-editor",{attrs:{option:{theme:"base16-dark",mode:"text/html"}},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)},staticRenderFns:[]};var b=n("VU/8")(f,g,!1,function(e){n("CWnG")},null,null).exports,_=(n("/9hD"),n("UM8r"),{name:"demo3-vue",data:function(){return{code:"<template>\n    <div class=\"vue-codemirror-editor\">\n    </div>\n</template>\n\n<script>\n    import CodeMirror from 'codemirror'\n    import 'codemirror/lib/codemirror.css'\n\n    import 'codemirror/mode/htmlmixed/htmlmixed'\n    import 'codemirror/addon/selection/active-line.js'\n\n    export default {\n        name: \"vue-codemirror-editor\",\n        props: {\n            value: {type: String},\n            option: {type: Object},\n        },\n        mounted() {\n            this.pl_initSimpleEditor()\n        },\n        data() {\n            return {\n                cm: null,\n                editor: null,\n                CodeMirror: window.CodeMirror || CodeMirror,\n\n                p_value: this.value || '',\n                p_defaultOption: {\n                    lineNumbers: true,\n                    styleActiveLine: true,\n                }\n            }\n        },\n        methods: {\n            pl_initSimpleEditor() {\n                this.cm = CodeMirror(this.$el, {\n                    value: this.p_value,\n                    ...Object.assign({}, this.p_defaultOption, this.option),\n                })\n            },\n        }\n    }\n<\/script>\n\n<style lang=\"scss\">\n    .vue-codemirror-editor {\n        height: 100%;\n        width: 100%;\n\n        & > div {\n            height: 100%;\n        }\n    }\n</style>\n"}}}),y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("demo-card",{attrs:{title:"<code> Theme: monokai, Mode: text/x-vue",href:"https://github.com/martSforever/vue-codemirror-editor/blob/master/example/demo/demo3-vue.vue"}},[n("vue-codemirror-editor",{attrs:{option:{mode:"text/x-vue",theme:"monokai"}},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)},staticRenderFns:[]};var w=n("VU/8")(_,y,!1,function(e){n("ylFs")},null,null).exports,U=(n("6S2o"),n("spg9"),{name:"demo4-java",data:function(){return{code:'package com.martsforever.plain.base.upload;\n\nimport com.martsforever.plain.core.basic.BasicMapper;\nimport com.martsforever.plain.core.basic.BasicServiceImpl;\nimport com.martsforever.plain.core.basic.ConstantUtils;\nimport com.martsforever.plain.core.db.Generator;\nimport com.martsforever.plain.core.utils.StringUtils;\nimport org.springframework.stereotype.Service;\nimport org.springframework.transaction.annotation.Transactional;\nimport org.springframework.web.multipart.MultipartFile;\n\nimport javax.annotation.Resource;\nimport java.io.File;\nimport java.math.BigInteger;\nimport java.util.ArrayList;\nimport java.util.List;\n\n@Service\npublic class UploadServiceImpl extends BasicServiceImpl<Upload> implements UploadService {\n\n    @Resource\n    private UploadMapper uploadMapper;\n\n    @Resource\n    private Generator generator;\n\n    @Resource\n    private ConstantUtils constantUtils;\n\n    @Override\n    public BasicMapper<Upload> basicMapper() throws Exception {\n        return uploadMapper;\n    }\n\n    @Override\n    @Transactional\n    public Upload saveFile(MultipartFile file, String headId, String module) throws Exception {\n        Upload upload = this.newUpload(file, headId, module);\n        this.saveUploadFile(file, upload);\n        this.insert(upload);\n        upload = this.queryOne(upload);\n        return upload;\n    }\n\n    @Override\n    @Transactional\n    public List<Upload> saveFiles(List<MultipartFile> files, String headId, String module) throws Exception {\n        if (files == null || files.size() == 0) {\n            throw new RuntimeException("文件不能为空！");\n        }\n        List<Upload> uploads = this.newUpload(files, headId, module);\n        List<Upload> newUploads = new ArrayList<>();\n        for (int i = 0; i < uploads.size(); i++) {\n            Upload upload = uploads.get(i);\n            MultipartFile file = files.get(i);\n            this.saveUploadFile(file, upload);\n        }\n        for (Upload upload : uploads) {\n            this.uploadMapper.insert(upload);\n            newUploads.add(this.queryOne(upload));\n        }\n        return newUploads;\n    }\n\n    public Upload newUpload(MultipartFile file, String headId, String module) {\n        if (file == null || file.isEmpty()) {\n            throw new RuntimeException("文件不能为空！");\n        }\n        Upload upload = new Upload();\n        upload.setId(BigInteger.valueOf(generator.next()));\n        upload.setName(UploadUtils.getFileNameByOriginalFileName(file.getOriginalFilename()));\n        upload.setHeadId(headId);\n        upload.setModule(module);\n        upload.setSize(String.valueOf(file.getSize()));\n        upload.setId(BigInteger.valueOf(generator.next()));\n        return upload;\n    }\n\n    public List<Upload> newUpload(List<MultipartFile> files, String headId, String module) {\n        List<Upload> uploads = new ArrayList<>();\n        for (MultipartFile file : files) {\n            Upload upload = this.newUpload(file, headId, module);\n            uploads.add(upload);\n        }\n        return uploads;\n    }\n\n    public void saveUploadFile(MultipartFile file, Upload upload) throws Exception {\n        StringBuffer path = new StringBuffer("/");\n        if (!StringUtils.isBlank(upload.getModule())) {\n            path.append(upload.getModule() + "/");\n        }\n        path.append(upload.getId() + "/" + upload.getName());\n        upload.setUrl(path.toString());\n        File saveFile = new File(constantUtils.getUploadPath() + upload.getUrl());\n        File parentFile = saveFile.getParentFile();\n\n        if (!parentFile.exists()) {\n            Boolean mkdir = parentFile.mkdirs();\n            if (!mkdir) {\n                throw new Exception("创建文件夹失败" + saveFile.getParentFile().getAbsolutePath());\n            }\n        }\n        saveFile.createNewFile();\n        file.transferTo(saveFile);\n    }\n}'}}}),M={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("demo-card",{attrs:{title:"<code> Theme: idea, Mode: text/x-java",href:"https://github.com/martSforever/vue-codemirror-editor/blob/master/example/demo/demo4-java.vue"}},[n("vue-codemirror-editor",{attrs:{option:{mode:"text/x-java",theme:"idea"}},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)},staticRenderFns:[]};var x=n("VU/8")(U,M,!1,function(e){n("YRsO")},null,null).exports,S=(n("ezqs"),n("GggT"),{name:"demo5-xml",data:function(){return{code:'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="com.martsforever.plain.base.upload.UploadMapper">\n\n    <parameterMap id="paramMap" type="com.martsforever.plain.base.upload.Upload"/>\n    <resultMap id="resultMap" type="com.martsforever.plain.base.upload.Upload"/>\n\n    <sql id="selectAll">\n        select t1.id           as id,\n               t1.created_at   as created_at,\n               t1.updated_at   as updated_at,\n               t1.created_by   as created_by,\n               t1.updated_by   as updated_by,\n               t1.head_id      as head_id,\n               t1.module       as module,\n               t1.name         as name,\n               t1.size         as size,\n               t1.type         as type,\n               get_url(t1.url) as url\n    </sql>\n    <sql id="fromAll">\n        from pl_upload t1\n    </sql>\n    <sql id="whereAll">\n        <foreach collection="query.getFilters()" open="where 1=1 " item="item">\n            ${item.getFilterSql()}\n        </foreach>\n    </sql>\n    <sql id="orderAll">\n        <foreach collection="query.getOrders()" open="order by" item="item" separator=",">\n            ${item.field} ${item.orderVal()}\n        </foreach>\n    </sql>\n\n    <select id="queryOne" resultMap="resultMap" parameterMap="paramMap">\n        <include refid="selectAll"/>\n        <include refid="fromAll"/>\n        where t1.id = #{id}\n    </select>\n\n    <select id="queryAll" resultMap="resultMap" parameterMap="paramMap">\n        select * from (\n        <include refid="selectAll"/>\n        <include refid="fromAll"/>\n        ) as temp\n        <include refid="whereAll"/>\n        <include refid="orderAll"/>\n    </select>\n\n    <select id="queryPage" resultMap="resultMap" parameterMap="paramMap">\n        select * from (\n        <include refid="selectAll"/>\n        <include refid="fromAll"/>\n        ) as temp\n        <include refid="whereAll"/>\n        <include refid="orderAll"/>\n        limit ${(query.page - 1) * query.pageSize},${query.pageSize + 1}\n    </select>\n\n    <select id="queryCount" resultType="java.lang.Integer" parameterMap="paramMap">\n        select count(1) from (\n        <include refid="selectAll"/>\n        <include refid="fromAll"/>\n        ) as temp\n        <include refid="whereAll"/>\n    </select>\n</mapper>'}}}),C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("demo-card",{attrs:{title:"<code> Theme: duotone-light, Mode: application/xml",href:"https://github.com/martSforever/vue-codemirror-editor/blob/master/example/demo/demo5-xml.vue"}},[n("vue-codemirror-editor",{attrs:{option:{mode:"application/xml",theme:"duotone-light"}},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)},staticRenderFns:[]};var E=n("VU/8")(S,C,!1,function(e){n("g13S")},null,null).exports,F=(n("nkx7"),n("KCx4"),n("j4hi")),k=n.n(F);window.diff_match_patch=k.a,window.DIFF_DELETE=-1,window.DIFF_INSERT=1,window.DIFF_EQUAL=0;var A={name:"demo6-merge",data:function(){return{code:'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width,initial-scale=1.0">\n        <link rel="icon" href="<%= BASE_URL %>favicon.ico">\n        <title>vue-codemirror-editor</title>\n    </head>\n    <body>\n        <noscript>\n          <strong>We\'re sorry but vue-codemirror-editor doesn\'t work properly without JavaScript enabled. Please enable it to continue.</strong>\n        </noscript>\n    <div id="app"></div>\n    </body>\n</html>',origin:'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="GBK">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width,initial-scale=1.0">\n        <link rel="icon" href="<%= BASE_URL %>favicon.ico">\n        <title>vue-codemirror-editor hello world</title>\n    </head>\n    <body>\n        <noscript>\n          <strong>We\'re sorry but vue-codemirror-editor doesn\'t work properly without JavaScript enabled. Please enable it to continue.</strong>\n        </noscript>\n    <div id="app"></div>\n    </body>\n</html>'}}},O={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("demo-card",{staticClass:"demo6-merge",attrs:{title:"<code> Theme: duotone-light, Mode: application/xml",href:"https://github.com/martSforever/vue-codemirror-editor/blob/master/example/demo/demo6-merge.vue"}},[n("vue-codemirror-editor",{attrs:{merge:"",option:{orig:e.origin||"",origRight:e.origin||"",mode:"text/html",theme:"monokai"}},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)},staticRenderFns:[]};var I={name:"app",components:{Demo6Merge:n("VU/8")(A,O,!1,function(e){n("syC4")},null,null).exports,Demo5Xml:E,Demo4Java:x,Demo3Vue:w,Demo2Theme:b,Demo1BasicUsage:v}},q={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),e._v(" "),n("div",{staticClass:"app-body"},[e._m(1),e._v(" "),e._m(2),e._v(" "),n("div",{staticClass:"app-body-examples"},[n("demo1-basic-usage"),e._v(" "),n("demo2-theme"),e._v(" "),n("demo3-vue"),e._v(" "),n("demo4-java"),e._v(" "),n("demo5-xml"),e._v(" "),n("demo6-merge")],1)]),e._v(" "),e._m(3)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-head"},[t("div",{staticClass:"app-head-content"},[this._v("\n      Martsforever\n    ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-body-desc"},[t("div",[t("span",{staticClass:"app-body-desc-title"},[this._v("\n                      Vue-Codemirror-Editor\n                  ")]),this._v(" "),t("span",{staticClass:"app-body-desc-label"},[this._v("\n                    Vue component base on CodeMirror\n                  ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-body-tabs"},[n("a",{staticClass:"app-body-tab app-body-tab-active",attrs:{href:"https://martsforever.github.io/vue-codemirror-editor/index.html"}},[e._v("Example")]),e._v(" "),n("a",{staticClass:"app-body-tab",attrs:{href:"https://www.npmjs.com/package/vue-codemirror-editor",target:"_blank"}},[e._v("Install")]),e._v(" "),n("a",{staticClass:"app-body-tab",attrs:{href:"https://codemirror.net/",target:"_blank"}},[e._v("CodeMirror")]),e._v(" "),n("a",{staticClass:"app-body-tab",attrs:{href:"https://codemirror.net/demo/theme.html",target:"_blank"}},[e._v("Theme")]),e._v(" "),n("a",{staticClass:"app-body-tab",attrs:{href:"https://codemirror.net/mode/index.html",target:"_blank"}},[e._v("Language")]),e._v(" "),n("a",{staticClass:"app-body-tab",attrs:{href:"https://github.com/martSforever/vue-codemirror-editor",target:"_blank"}},[e._v("Github")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-foot"},[t("div",{staticClass:"app-foot-content"},[this._v("\n      power by martsforever\n    ")])])}]};var T=n("VU/8")(I,q,!1,function(e){n("DAZU")},null,null).exports,B={name:"demo-card",props:{title:{type:String},href:{type:String}}},D={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"demo-card"},[t("div",{staticClass:"demo-card-head"},[t("a",{attrs:{href:this.href,target:"_blank"}},[this._v(this._s(this.title))])]),this._v(" "),t("div",{staticClass:"demo-card-body"},[this._t("default")],2)])},staticRenderFns:[]};var R=n("VU/8")(B,D,!1,function(e){n("3NDq")},null,null).exports;window.CodeMirror=m.a,r.a.config.productionTip=!1,r.a.component(p.name,p),r.a.component(R.name,R),new r.a({el:"#app",render:e=>e(T)})},UM8r:function(e,t){},Y8JN:function(e,t){},YRsO:function(e,t){},g13S:function(e,t){},jGSh:function(e,t){},k8zB:function(e,t){},spg9:function(e,t){},syC4:function(e,t){},ylFs:function(e,t){}},["SrUm"]);
//# sourceMappingURL=app.32faa9b69bfd58323e54.js.map