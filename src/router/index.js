import { createRouter, createWebHistory, } from 'vue-router';
import AppHome from '../View/AppHome.vue'
import ShowProduct from '@/Product/ShowProduct';
import AboutUs from '@/View/AboutUs.vue';
import CartProduct from '@/View/CartProduct.vue';
import ContacUs from '@/View/ContacUs.vue';
import MainLayout from "@/layouts/MainLayout.vue";
import MenProduct from "@/View/MenProduct.vue";
import WomanProduct from "@/View/WomanProduct.vue";
// import LoginLayout from "@/layouts/LoginLayout.vue";


const routes = [
  {
      path: '/',
      component: MainLayout,
      children: [
      {
        path: '/',
        component: AppHome
      },
      {
        path: '/men',
        component: MenProduct

      },
      {
        path: '/woman',
        component: WomanProduct
      },
      {
        path: '/showProduct',
        component: ShowProduct
      },
      {
        path: '/aboutUs',
        component: AboutUs
      },
      {
        path: '/cartProduct',
        component: CartProduct
      },
      {
        path: '/contacUs',
        component: ContacUs
      },  
      ]
  },
  // {
  //   path: '/',
  //   component: LoginLayout,
  //   children: [
  //     {
  //       path: '/login',
  //       component: AppHome
  //     },  
  //   ]
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;