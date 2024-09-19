import { createRouter, createWebHistory } from 'vue-router'
import Cadastro from '../views/Cadastro.vue'
import PaginaInicialView from '@/views/PaginaInicialView.vue'
import PaginaAventura from '@/views/PaginaAventura.vue'
import CadLivrosView from '@/views/CadLivrosView.vue'
import LoginView from '@/views/LoginView.vue'
import PaginaGerenteView from '@/views/PaginaGerenteView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
  
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/paginainicial',
      name: 'paginainicial',
      component: PaginaInicialView
      
    },
    {
      path: '/paginagerenciamento',
      name: 'paginagerente',
      component: PaginaGerenteView
      
    },
    
    {
      path: '/relatorio',
      name: 'relatorio',
      
      component: () => import('../views/RelatorioLivro.vue')
    },
    {
      path: '/LivroResumo',
      name: 'LivroResumo',
      
      component: () => import('../views/LivroResumo.vue')
    },
    {
      path: '/PagInfantil',
      name: 'PagInfantil',
      
      component: () => import('../views/PagInfantil.vue')
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
