import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import waterfall from 'vue-waterfall2'

import * as API from "./api"

import "lib-flexible/flexible"


Vue.use(waterfall)
Vue.config.productionTip = false

Vue.prototype.$API = API


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
