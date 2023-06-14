import { createRouter, createWebHistory } from 'vue-router'
import Base from '@/views/Base.vue'  //此处的@代表src目录的缩写，在vite.config.js文件中被定义

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'base',
      component: Base,
      children: [//使用children的目的,实现界面风格统一
        {
          path: '/',
          name: 'index',
          component: () => import('@/views/Index.vue')
        },
        {
          path: 'role',
          name: 'role',
          component: () => import('@/views/role/Base.vue'),
          children: [
            {
              path: '',
              name: 'role_list',
              component: () => import('@/views/role/Index.vue')
            },
            {
              path: 'create',
              name: 'role_create',
              component: () => import('@/views/role/Create.vue')
            },
            {
              path: 'update/:id',
              name: 'role_update',
              component: () => import('@/views/role/Update.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Login.vue')//按需加载，延迟加载，目的是提高网页加载速度
    }
  ]
})

export default router
