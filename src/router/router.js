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

// 判断用户登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isLogin)) {
    if (localStorage.getItem('token') == '123456') {
      next()
    } else {
      next({
        path: "/logo",
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }

})


export default router