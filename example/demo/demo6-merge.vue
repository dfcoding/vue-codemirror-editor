<template>
    <demo-card title="<code> Theme: duotone-light, Mode: application/xml" class="demo6-merge">
        <vue-codemirror-editor
                v-model="code"
                merge
                :option="{
                    orig:origin || '',
                    origRight:origin || '',
                    mode:'text/html',
                    theme:'monokai',
                }"/>
    </demo-card>
</template>

<script>

    import 'codemirror/addon/merge/merge.js'
    import 'codemirror/addon/merge/merge.css'

    import 'codemirror/theme/monokai.css'

    import DiffMatchPatch from 'diff-match-patch'

    window.diff_match_patch = DiffMatchPatch
    window.DIFF_DELETE = -1
    window.DIFF_INSERT = 1
    window.DIFF_EQUAL = 0

    const code =
        `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="icon" href="<%= BASE_URL %>favicon.ico">
        <title>vue-codemirror-editor</title>
    </head>
    <body>
        <noscript>
          <strong>We're sorry but vue-codemirror-editor doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
    <div id="app"></div>
    </body>
</html>`


    const origin =
        `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="GBK">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="icon" href="<%= BASE_URL %>favicon.ico">
        <title>vue-codemirror-editor hello world</title>
    </head>
    <body>
        <noscript>
          <strong>We're sorry but vue-codemirror-editor doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
    <div id="app"></div>
    </body>
</html>`

    export default {
        name: "demo6-merge",
        data() {
            return {
                code,
                origin,
            }
        },
    }
</script>

<style lang="scss">
    .demo6-merge {
        .CodeMirror-merge-pane {
            height: 100%;

            & > div {
                height: 100%;
            }
        }

        .CodeMirror-merge-r-chunk {
            background-color: rgba(255, 7, 178, 0.16);
            border: none;
        }
    }
</style>
