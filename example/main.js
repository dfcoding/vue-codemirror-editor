import Vue from 'vue'
import App from './App.vue'
import DemoCard from './demo-card'
import VueCodemirrorEditor from 'vue-codemirror-editor'

Vue.config.productionTip = false
Vue.use(VueCodemirrorEditor)
Vue.component(DemoCard.name, DemoCard)

new Vue({
    render: h => h(App),
}).$mount('#app')
