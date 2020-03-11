import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/Login'
        },
        {
            name: 'Login',
            path: '/Login',
            component: () => import('../components/Login.vue'),
        },
        {
            name: 'Home',
            path: '/Home',
            component: () => import('../components/Home.vue'),
        },
    ]
})
//设置路由守卫
router.beforeEach((to, from, next) => {
    //to将要访问的路径
    //from来自哪个路径
    //next是一个函数，表示放行，next('/login')
    if (to.path === '/Login') return next();
    const tokenStr = window.sessionStorage.getItem('token');
    if (!tokenStr) return next('/Login');
    next();
})
export default router

