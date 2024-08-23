import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Cadastro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/relatorio',
      name: 'relatorio',
      
      component: () => import('../views/RelatorioLivro.vue')
    }
  ]
})

export default router
