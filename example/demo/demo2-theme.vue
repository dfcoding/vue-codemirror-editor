<template>
  <demo-card title="<code> Theme: base16-dark, Mode: text/html" href="https://github.com/martSforever/vue-codemirror-editor/blob/master/example/demo/demo2-theme.vue">
    <vue-codemirror-editor
      v-model="code"
      :option="{
                    theme:'base16-dark',
                    mode:'text/html',
                }"/>
  </demo-card>
</template>

<script>
  import VueCodemirrorEditor from 'vue-codemirror-editor'
  import 'vue-codemirror-editor/dist/vue-codemirror-editor.css'

  import CodeMirror from 'codemirror'
  import 'codemirror/lib/codemirror.css'
  import 'codemirror/mode/htmlmixed/htmlmixed'
  import 'codemirror/addon/selection/active-line.js'

  window.CodeMirror = CodeMirror

  import 'codemirror/theme/base16-dark.css'

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

  export default {
    name: "demo2-theme",
    components: {VueCodemirrorEditor},
    data() {
      return {
        code,
      }
    },
  }
</script>

<style lang="scss">

</style>
