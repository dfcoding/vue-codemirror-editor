import Vue from 'vue'
import App from './App'
import DemoCard from './demo-card'

Vue.config.productionTip = false
Vue.component(DemoCard.name, DemoCard)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
