<template>
    <demo-card title="<code> Basic Usage" href="https://github.com/martSforever/vue-codemirror-editor/blob/master/example/demo/demo1-basic-usage.vue">
        <vue-codemirror-editor v-model="code"/>
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

    export default {
        name: "demo1-basic-usage",
        data() {
            return {
                code,
            }
        },
    }
</script>

<style lang="scss">

</style>
