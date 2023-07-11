import { createRouter, createWebHistory,  } from 'vue-router';
import AppHome from '../View/AppHome.vue'
const routes = [
    {
        path: '/',
        component: AppHome
        
    }
  
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;