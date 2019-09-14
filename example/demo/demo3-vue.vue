<template>
    <demo-card title="<code> Theme: monokai, Mode: text/x-vue" href="https://gitee.com/martsforever/vue-codemirror-editor/blob/master/example/demo/demo3-vue.vue">
        <vue-codemirror-editor
                v-model="code"
                :option="{
                    mode:'text/x-vue',
                    theme:'monokai',
                }"/>
    </demo-card>
</template>

<script>

    import 'codemirror/mode/vue/vue'
    import 'codemirror/theme/monokai.css'

    const code =
        `<template>
    <div class="vue-codemirror-editor">
    </div>
</template>

<script>
    import CodeMirror from 'codemirror'
    import 'codemirror/lib/codemirror.css'

    import 'codemirror/mode/htmlmixed/htmlmixed'
    import 'codemirror/addon/selection/active-line.js'

    export default {
        name: "vue-codemirror-editor",
        props: {
            value: {type: String},
            option: {type: Object},
        },
        mounted() {
            this.pl_initSimpleEditor()
        },
        data() {
            return {
                cm: null,
                editor: null,
                CodeMirror: window.CodeMirror || CodeMirror,

                p_value: this.value || '',
                p_defaultOption: {
                    lineNumbers: true,
                    styleActiveLine: true,
                }
            }
        },
        methods: {
            pl_initSimpleEditor() {
                this.cm = CodeMirror(this.$el, {
                    value: this.p_value,
                    ...Object.assign({}, this.p_defaultOption, this.option),
                })
            },
        }
    }
<\/script>

<style lang="scss">
    .vue-codemirror-editor {
        height: 100%;
        width: 100%;

        & > div {
            height: 100%;
        }
    }
</style>
`

    export default {
        name: "demo3-vue",
        data() {
            return {
                code,
            }
        },
    }
</script>

<style lang="scss">

</style>
