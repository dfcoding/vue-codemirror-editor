import Vue from 'vue'
import App from './App.vue'
import VueCodemirrorEditor from 'vue-codemirror-editor'

Vue.config.productionTip = false
Vue.use(VueCodemirrorEditor)

new Vue({
    render: h => h(App),
}).$mount('#app')
