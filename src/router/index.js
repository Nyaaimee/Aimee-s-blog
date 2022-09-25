import { createRouter, createWebHistory } from 'vue-router'
import Signup from "../components/Signup.vue"
import Welcome from "../components/Welcome.vue"
import Write from "../components/Write.vue"
import Dashboard from "../components/Dashboard.vue"


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
      path: '/Dashboard',
      name: 'dashboard',
      component: Dashboard,
      children:[
        {
          path: 'write',
          name: 'write',
          component: Write
        },
        // {
        //   path: 'profile',
        //   name: 'profile',
        //   component: rofile
        // },
      ]
    },
  ]
})

export default router
