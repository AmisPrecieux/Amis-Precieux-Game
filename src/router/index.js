import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/puzzle-6-pieces',
      name: 'Puzzle',
      component: () => import('../views/Puzzle.vue')
    },
    {
      path: '/association-image',
      name: 'associationImage',
      component: () => import('../views/GameLink.vue')
    },
    {
      path: '/association-sonore',
      name: 'SoundAssociation',
      component: () => import('../views/SoundAssociation.vue')
    },
    {
      path: '/adminPanel',
      name: 'AdminPanel',
      component: () => import('../views/AdminPanel.vue')
    },
    {
      path: '/LoginAdmin',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
    },
    {
      path: '/searchword',
      name: 'SearchWord',
      component: () => import('../views/SearchWord.vue')
  
    }
  ]
})

export default router
