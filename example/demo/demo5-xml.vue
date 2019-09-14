<template>
    <demo-card title="<code> Theme: duotone-light, Mode: application/xml" href="https://gitee.com/martsforever/vue-codemirror-editor/blob/master/example/demo/demo5-xml.vue">
        <vue-codemirror-editor
                v-model="code"
                :option="{
                    mode:'application/xml',
                    theme:'duotone-light',
                }"/>
    </demo-card>
</template>

<script>

    import 'codemirror/mode/xml/xml'
    import 'codemirror/theme/duotone-light.css'

    const code =
        `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.martsforever.plain.base.upload.UploadMapper">

    <parameterMap id="paramMap" type="com.martsforever.plain.base.upload.Upload"/>
    <resultMap id="resultMap" type="com.martsforever.plain.base.upload.Upload"/>

    <sql id="selectAll">
        select t1.id           as id,
               t1.created_at   as created_at,
               t1.updated_at   as updated_at,
               t1.created_by   as created_by,
               t1.updated_by   as updated_by,
               t1.head_id      as head_id,
               t1.module       as module,
               t1.name         as name,
               t1.size         as size,
               t1.type         as type,
               get_url(t1.url) as url
    </sql>
    <sql id="fromAll">
        from pl_upload t1
    </sql>
    <sql id="whereAll">
        <foreach collection="query.getFilters()" open="where 1=1 " item="item">
            \${item.getFilterSql()}
        </foreach>
    </sql>
    <sql id="orderAll">
        <foreach collection="query.getOrders()" open="order by" item="item" separator=",">
            \${item.field} \${item.orderVal()}
        </foreach>
    </sql>

    <select id="queryOne" resultMap="resultMap" parameterMap="paramMap">
        <include refid="selectAll"/>
        <include refid="fromAll"/>
        where t1.id = #{id}
    </select>

    <select id="queryAll" resultMap="resultMap" parameterMap="paramMap">
        select * from (
        <include refid="selectAll"/>
        <include refid="fromAll"/>
        ) as temp
        <include refid="whereAll"/>
        <include refid="orderAll"/>
    </select>

    <select id="queryPage" resultMap="resultMap" parameterMap="paramMap">
        select * from (
        <include refid="selectAll"/>
        <include refid="fromAll"/>
        ) as temp
        <include refid="whereAll"/>
        <include refid="orderAll"/>
        limit \${(query.page - 1) * query.pageSize},\${query.pageSize + 1}
    </select>

    <select id="queryCount" resultType="java.lang.Integer" parameterMap="paramMap">
        select count(1) from (
        <include refid="selectAll"/>
        <include refid="fromAll"/>
        ) as temp
        <include refid="whereAll"/>
    </select>
</mapper>`

    export default {
        name: "demo5-xml",
        data() {
            return {code}
        },
    }
</script>

<style lang="scss">

</style>
