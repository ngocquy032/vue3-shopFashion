import { createRouter, createWebHistory, } from 'vue-router';
import AppHome from '../View/AppHome.vue'
import ShowProductVue from '@/View/ShowProduct.vue';
import AboutUs from '@/View/AboutUs.vue';
import CartProduct from '@/View/CartProduct.vue';
import ContacUs from '@/View/ContacUs.vue';


const routes = [
  {
    path: '/',
    component: AppHome
  },
  {
    path: '/showProduct',
    component: ShowProductVue
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



];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;