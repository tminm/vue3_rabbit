//createRouter创建路由实例
//createWebHistory创建history规则
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import subCategory from '@/views/subCategory/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path和components放置的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'/category/:id',
          component:Category
        },
        {
          path:'/category/sub/:id',
          component:subCategory
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }

  ]
})

export default router
