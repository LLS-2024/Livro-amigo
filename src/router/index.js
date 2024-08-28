import { createRouter, createWebHistory } from 'vue-router'
import Cadastro from '../views/Cadastro.vue'
import PaginaInicialView from '@/views/PaginaInicialView.vue'
import PaginaAventura from '@/views/PaginaAventura.vue'
import CadLivrosView from '@/views/CadLivrosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'paginainicial',
      component: PaginaInicialView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
      
    },
    {
      path: '/relatorio',
      name: 'relatorio',
      
      component: () => import('../views/RelatorioLivro.vue')
    },
    {

      path: '/paginaaventura',
      name: 'paginaaventura',
      component: PaginaAventura
    },
      {
      path: '/terror',
      name: 'terror',
      
      component: () => import('../views/PagTerror.vue')
    },
    {
      path: '/fantasia',
      name: 'fantasia',
      
      component: () => import('../views/PagFantasia.vue')
    },
    {
      path: '/suspense',
      name: 'suspense',
      
      component: () => import('../views/PagSuspense.vue')

    },
    {
path: '/CadLivros',
name: 'CadLivros',
component: CadLivrosView
    }
  
  ]
})

export default router
