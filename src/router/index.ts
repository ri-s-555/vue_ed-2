import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '@/pages/main-page.vue'
import cardPage from '@/pages/card-page.vue'
import errorPage from '@/pages/error-page.vue'
import loginPage from '@/pages/login-page.vue'

import { RouteNames } from './types'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: mainPage,
      name: RouteNames.Main,
      meta: {
        title: 'Main',
      },
    },
    {
      path: '/card/:id',
      component: cardPage,
      name: RouteNames.Card,
      meta: {
        title: 'Card',
        needAuth: true,
      },
    },
    {
      path: '/login',
      component: loginPage,
      name: RouteNames.Login,
      meta: {
        title: 'Login',
        withOutHeader: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: errorPage,
      name: RouteNames.Error,
      meta: {
        title: 'Error',
        withOutHeader: true,
      },
    },
  ],
})
// router.beforeEach((to,from,next)=>{

//   if(to.meta.needAuth && !localStorage.getItem('token')){
//     next({name:RouteNames.Login})
//   }
//   next()
// })

export default router
