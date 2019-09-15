# Vue-Codemirror-Editor

A vue component base on codemirror

一个基于Vue以及Codemirror的代码编辑器

[Github Page](https://martsforever.github.io/vue-codemirror-editor/index.html)

# Install

```
npm i vue-codemirror-editor -S
```

# Basic Usage

```javascript
import Vue from 'vue'

/*must import CodeMirror before import App.vue, because you have to import codemirror.js before modes or addons such as merge.js*/
import VueCodemirrorEditor from 'vue-codemirror-editor'
import CodeMirror from 'codemirror'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/addon/selection/active-line.js'

import 'codemirror/lib/codemirror.css'
import 'vue-codemirror-editor/dist/vue-codemirror-editor.css'

import App from './App.vue'

window.CodeMirror = CodeMirror
Vue.component(VueCodemirrorEditor.name, VueCodemirrorEditor)

new Vue({
    render: h => h(App),
}).$mount('#app')

```

# More Example

[Github Page](https://martsforever.github.io/vue-codemirror-editor/index.html)


