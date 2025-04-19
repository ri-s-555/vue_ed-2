import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '@/components/pages/main-page.vue'
import cardPage from '@/components/pages/card-page.vue'
import errorPage from '@/components/pages/error-page.vue'
import loginPage from '@/components/pages/login-page.vue'
import cartPage from '@/components/pages/cart-page.vue'

import { RouteNames } from '@/types/Route-names'

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
      path: '/cart',
      component: cartPage,
      name: RouteNames.Cart,
      meta: {
        title: 'Cart',
        withOutHeader: true,
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
