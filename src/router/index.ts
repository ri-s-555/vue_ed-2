import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '@/components/pages/main-page.vue'
import cardPage from '@/components/pages/card-page.vue'
import errorPage from '@/components/pages/error-page.vue'
import loginPage from '@/components/pages/login-page.vue'
import cartPage from '@/components/pages/cart-page.vue'
import categoryPage from '@/components/pages/category-page.vue'
import categoryListPage from '@/components/pages/category-list-page.vue'
import { RouteNames, RoutePaths } from '@/types/Route-names'
import AboutPage from '@/components/pages/about-page.vue'
import BlogPage from '@/components/pages/blog-page.vue'
import FeaturesPage from '@/components/pages/features-page.vue'
import profilePage from '@/components/pages/profile-page.vue'

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
      path: '/login',
      component: loginPage,
      name: RouteNames.Login,
      meta: {
        title: 'Login',
        withOutHeader: true,
      },
    },
    {
      path: '/profile',
      component: profilePage,
      name: RouteNames.Profile,
      meta: {
        title: 'Profile',
        withOutHeader: true,
      },
    },
    {
      path: RoutePaths.Card,
      component: cardPage,
      name: RouteNames.Card,
      meta: {
        title: 'Card',
        needAuth: true,
      },
    },
    {
      path: RoutePaths.CategoryList,
      component: categoryListPage,
      name: RouteNames.CategoryList,
      meta: {
        title: 'Category List',
      },
    },
    {
      path: RoutePaths.Category,
      component: categoryPage,
      name: RouteNames.Category,
      meta: {
        title: 'Category',
      },
    },
    {
      path: RoutePaths.Cart,
      component: cartPage,
      name: RouteNames.Cart,
      meta: {
        title: 'Cart',
        withOutHeader: true,
      },
    },
    {
      path: '/about',
      component: AboutPage,
      name: RouteNames.About,
      meta: {
        title: 'About',
      },
    },
    {
      path: '/blog',
      component: BlogPage,
      name: RouteNames.Blog,
      meta: {
        title: 'Blog',
      },
    },
    {
      path: '/features',
      component: FeaturesPage,
      name: RouteNames.Features,
      meta: {
        title: 'Features',
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
