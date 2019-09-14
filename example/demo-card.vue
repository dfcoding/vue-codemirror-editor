<template>
    <div class="demo-card">
        <div class="demo-card-head">
            <a :href="href">{{title}}</a>
        </div>
        <div class="demo-card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "demo-card",
        props: {
            title: {type: String},
            href: {type: String},
        },
    }
</script>

<style lang="scss">
    .demo-card {
        border-radius: 3px;
        overflow: hidden;
        border: solid 1px #12b4a5;

        .demo-card-head {
            background-color: #12b4a5;
            padding: 9px 28px;
            color: white;

            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }

        .demo-card-body {
            height: 200px;
            border-bottom: 1px solid #eee;
        }

        display: inline-block;
        width: 1000px;
    }
</style>
