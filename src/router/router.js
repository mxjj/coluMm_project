import Vue from 'vue'
import Router from 'vue-router'
import index from './index.js'
import item from './Item.js'
Vue.use(Router)

const createRouter = () => new Router({
    mode: 'history', //去掉#号
    routes: [
        ...index,
        ...item
    ]
  })
  
  const router = createRouter()


export default router