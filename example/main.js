import Vue from 'vue'

import VueCodemirrorEditor from 'vue-codemirror-editor'
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/addon/selection/active-line.js'

import App from './App'
import DemoCard from './demo-card'

window.CodeMirror = CodeMirror
Vue.config.productionTip = false
Vue.component(VueCodemirrorEditor.name, VueCodemirrorEditor)
Vue.component(DemoCard.name, DemoCard)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
