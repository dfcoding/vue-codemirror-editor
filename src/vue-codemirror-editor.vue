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
            merge: {type: Boolean},
            readonly: {type: Boolean},
        },
        watch: {
            value: {
                immediate: true,
                handler(val) {
                    if (val !== this.p_value) {
                        this.p_value = val || ''
                        !!this.editor && this.editor.setValue(this.p_value)
                    }
                },
            },
            readonly: {
                immediate: true,
                handler(val) {
                    !!this.editor && this.editor.setOption('readOnly', val)
                },
            },
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
        mounted() {
            this.merge ? this.pl_initMergeEditor() : this.pl_initSimpleEditor()
        },
        methods: {
            pl_initEvent() {
                this.editor.on('change', () => {
                    this.p_value = this.editor.getValue()
                    this.$emit('input', this.p_value)
                })
                this.editor.on('keydown', (cm, e) => this.$emit('keydown', e))
            },
            pl_initSimpleEditor() {
                this.cm = CodeMirror(this.$el, {
                    value: this.p_value,
                    ...Object.assign({}, this.p_defaultOption, this.option),
                })
                this.editor = this.cm
                this.pl_initEvent()
            },
            pl_initMergeEditor() {
                this.cm = CodeMirror.MergeView(this.$el, {
                    value: this.p_value,
                    ...Object.assign({}, this.p_defaultOption, this.option),
                })
                this.editor = this.cm.editor()
                this.pl_initEvent()
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
