
const index = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        name: "home",
        // component: () => import('@/page/home/home')
        component: resolve => require(['@/page/home/home.vue'], resolve),
        meta: {
            isShow: true,
            isLogin: true
        }
    },
    {
        path: "/nav",
        name: "nav",
        component: () => import('@/page/nav/nav.vue'),
        meta: {
            isShow: true,
        }
    },
    {
        path: "/shop",
        name: "shop",
        component: () => import('@/page/shop/shop.vue'),
        meta: {
            isShow: true,
        }
    },
    {
        path: "/user",
        name: "user",
        component: () => import('@/page/user/usInfo.vue'),
        meta: {
            isShow: true,
        }
    },

]

export default index