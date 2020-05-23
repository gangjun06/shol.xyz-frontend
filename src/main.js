import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/index.css'
import VueClipboard from 'vue-clipboard2'
import 'v-msgx/dist/msg.min.css'
import Msg from 'v-msgx'
import 'material-icons/iconfont/material-icons.scss'

VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)
Vue.use(Msg)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
