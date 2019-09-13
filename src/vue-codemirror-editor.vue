<template>
    <div class="vue-codemirror-editor">
    </div>
</template>

<script>
    import CodeMirror from 'codemirror'
    import 'codemirror/lib/codemirror.css'
    import 'codemirror/theme/monokai.css'

    import 'codemirror/mode/xml/xml'
    import 'codemirror/mode/javascript/javascript'
    import 'codemirror/mode/css/css'
    import 'codemirror/mode/htmlmixed/htmlmixed'
    import 'codemirror/addon/selection/active-line'

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
                    selectionPointer: true,
                    highlightDifferences: true,
                    connect: true,
                    revertButtons: true,
                    indentUnit: 4,
                    theme: 'monokai',
                    readOnly: false,
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

</style>
