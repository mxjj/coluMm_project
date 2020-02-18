import Vue from 'vue'
import App from './App.vue'
import './utils/rem.js'
import router from '@/router/router'
import './utils/base.css'
import './utils/style.css'

import { Lazyload } from 'vant';
Vue.use(Lazyload, {
  lazyComponent: true
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
