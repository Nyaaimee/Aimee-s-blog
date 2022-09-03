import { createRouter, createWebHistory } from 'vue-router'
import Signup from "../components/Signup.vue"
import Welcome from "../components/Welcome.vue"
import Profile from "../components/Profile.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: Signup
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
  ]
})

export default router
