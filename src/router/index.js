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
      path: '/puzzle',
      name: 'Puzzle',
      component: () => import('../views/Puzzle.vue')
    },
    {
      path: '/gamelink',
      name: 'gamelink',
      component: () => import('../views/GameLink.vue')
    },
    {
      path: '/soundAssociation',
      name: 'SoundAssociation',
      component: () => import('../views/SoundAssociation.vue')
    }
  ]
})

export default router
