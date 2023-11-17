import { createRouter, createWebHistory } from 'vue-router';
const PageIndex = () => import('../views/PageIndex.vue')
const PageLogin = () => import('../views/PageLogin.vue')
const PageRegister = () => import('../views/PageRegister.vue')

export const router = createRouter({
  history: createWebHistory('/05-vue-router/01-AuthPages'),
  routes: [
    {
      path: '/',
      name: 'index',
      component: PageIndex,
    },
    {
      path: '/login',
      name: 'login',
      component: PageLogin,
    },
    {
      path: '/register',
      name: 'register',
      component: PageRegister,
    },
  ],
});
