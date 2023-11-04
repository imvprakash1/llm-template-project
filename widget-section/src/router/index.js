import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContextPrompt from '../components/ContextPrompt.vue'
import TestingPrompt from '../components/TestingPrompt.vue'
import TonePrompt from '../components/TonePrompt.vue'
import OptimizationPrompt from '../components/OptimizationPrompt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/prompt/context',
      name: 'context prompt',
      component: ContextPrompt
    },
    {
      path: '/prompt/tone',
      name: 'tone prompt',
      component: TonePrompt
    },
    {
      path: '/prompt/testing',
      name: 'testing prompt',
      component: TestingPrompt
    },
    {
      path: '/prompt/optimization',
      name: 'optimization prompt',
      component: OptimizationPrompt
    }
  ]
})

export default router
