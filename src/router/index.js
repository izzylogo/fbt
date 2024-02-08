import { createRouter, createWebHistory } from 'vue-router';
  import HomeView from '@/view/HomeView'
  import ProfileView from '@/view/ProfileView'
  
  const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
   
  ]
  
 
  // history: createWebHistory(),
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })
  
  export default router