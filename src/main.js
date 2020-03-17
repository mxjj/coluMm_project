import Vue from 'vue'
import App from './App.vue'
import './utils/rem.js'
import router from '@/router/router'
import './utils/base.css'
import './utils/style.css'
import store from './store/store'

import { Icon } from 'vant';
Vue.use(Icon);

import { Lazyload } from 'vant';
Vue.use(Lazyload, {
  lazyComponent: true
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
