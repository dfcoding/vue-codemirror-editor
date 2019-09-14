<template>
    <demo-card title="<code> Theme: monikai, Mode: text/html">
        <vue-codemirror-editor
                v-model="code"
                :option="{
                    theme:'monokai',
                    mode:'text/html',
                }"/>
    </demo-card>
</template>

<script>

    import 'codemirror/theme/monokai.css'

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
        data() {
            return {
                code,
            }
        },
    }
</script>

<style lang="scss">

</style>
