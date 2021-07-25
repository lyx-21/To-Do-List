import Home from '../views/Home/index.vue';
import Login from '../views/Login/index.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blogbetail/:id',
    name: 'BlogDetail',
    component: () => import('../views/Home/Detail.vue'),
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('../views/Article/index.vue'),
  },
  {
    path: '/state',
    name: 'State',
    component: () => import('../views/State/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/index.vue'),
  },
  {
    path: '/item',
    name: 'Item',
    component: () => import('../views/Item/index.vue'),
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    components: {
      login: Login,
    },
  },
];
