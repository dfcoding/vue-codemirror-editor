<template>
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
</script>

<style lang="scss">
    .vue-codemirror-editor {
        height: 100%;
        width: 100%;

        & > div {
            height: 100%;
        }
    }
</style>
