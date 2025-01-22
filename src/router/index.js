import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import HeAlsoHasWorms from '../views/HeAlsoHasWorms.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/healsohasworms',
    name: 'HeAlsoHasWorms',
    component: HeAlsoHasWorms,
  },
  // ...existing code...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
