/* eslint-disable */
import VueRouter from 'vue-router'
// import Introduce from "@/components/Introduce.vue";
// import Me from "@/components/Me.vue";
// 路由懒加载, 得结合 babel-plugin-syntax-dynamic-import 插件使用
const Introduce = () => import('@/components/Introduce.vue')
const Me = () => import('@/components/Me.vue')
const router = new VueRouter({
    mode: 'hash',
    routes: [
        { path: '/', redirect: { name: 'introduce' } },
        {
            path: '/introduce',
            name: 'introduce',
            component: Introduce,
        },
        {
            path: '/me',
            name: 'me',
            component: Me,
        },
    ],
})

export default router
