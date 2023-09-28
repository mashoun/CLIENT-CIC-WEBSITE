import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home-page.vue')
    },
    
    {
      path: '/programs',
      name: 'programs',
      component: () => import('../views/programs-page.vue')
    },
    {
      path: '/admission',
      name: 'admission',
      component: () => import('../views/admission-page.vue')
    },
    {
      path: '/fees',
      name: 'fees',
      component: () => import('../views/fees-page.vue')
    },
    {
      path: '/partners',
      name: 'partners',
      component: () => import('../views/partners-page.vue')
    },
    {
      path: '/private-tutoring',
      name: 'private-tutoring',
      component: () => import('../views/private-tutoring-page.vue')
    },
    {
      path: '/workshops',
      name: 'workshops',
      component: () => import('../views/workshops-page.vue')
    },
  ]
})

export default router
