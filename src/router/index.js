import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export  default  new VueRouter({
    routes:[
        {
            path: '/',
            component: () => import('../views/Parent.vue'),
            redirect:'/Layout'
        },
        {
            name:'Home',
            path: '/Home',
            component: () => import('../views/Home.vue'),
        },
        {
            name:'Layout',
            path: '/Layout',
            component: () => import('../views/element/Layout.vue'),
        }
    ]
})

