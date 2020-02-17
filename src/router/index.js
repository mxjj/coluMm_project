
const index = [
    {
        path:"/",
        redirect:"/home"
    },
    {
        path: "/home",
        name: "home",
        // component: () => import('@/page/home/home')
        component: resolve => require(['@/page/home/home.vue'], resolve)
    }
]

export default index