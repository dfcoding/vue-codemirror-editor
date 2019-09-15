<template>
  <demo-card
    class="demo7-async-initialized"
    title="<code> Asynchronous Initialization And Code Split"
    href="https://github.com/martSforever/vue-codemirror-editor/blob/master/example/demo/demo7-async-initialized.vue">
    <component :is="VueCodemirrorEditor"
               v-if="!!VueCodemirrorEditor"
               v-model="code"
               merge
               :option="{
                    orig:origin || '',
                    origRight:origin || '',
                    mode:'text/html',
                    theme:'monokai',
                }"/>
    <div class="loading" v-else>
      loading...{{asyncTime}}s
    </div>
  </demo-card>
</template>

<script>

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
    name: "demo7-async-initialized",
    data() {
      return {
        code,
        origin,
        VueCodemirrorEditor: null,
        asyncTime: 8,
      }
    },
    created() {
      setTimeout(() => {
        this.init()
      }, this.asyncTime * 1000)

      const interval = setInterval(() => {
        this.asyncTime--
        if (this.asyncTime < 0) clearInterval(interval)
      }, 1000)

    },
    methods: {
      init() {
        require.ensure([], () => {
          const CodeMirror = require('codemirror')
          window.CodeMirror = CodeMirror

          let VueCodemirrorEditor = require('vue-codemirror-editor')
          VueCodemirrorEditor = VueCodemirrorEditor.default || VueCodemirrorEditor
          require('codemirror/mode/htmlmixed/htmlmixed')
          require('codemirror/addon/selection/active-line.js')
          require('codemirror/lib/codemirror.css')
          require('vue-codemirror-editor/dist/vue-codemirror-editor.css')

          require('codemirror/mode/vue/vue')
          require('codemirror/theme/monokai.css')

          require('codemirror/addon/merge/merge.js')
          require('codemirror/addon/merge/merge.css')
          const DiffMatchPatch = require('diff-match-patch')
          window.diff_match_patch = DiffMatchPatch
          window.DIFF_DELETE = -1
          window.DIFF_INSERT = 1
          window.DIFF_EQUAL = 0

          this.VueCodemirrorEditor = VueCodemirrorEditor
        }, 'vue-codemirror-editor')
      },
    }
  }
</script>

<style lang="scss">
  .demo7-async-initialized {
    .demo-card-body {
      position: relative;

      .loading {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 24px;
      }
    }

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
