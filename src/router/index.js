import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index'),
    meta: {
      title: 'Home'
    }
  },

  // {
  //   path: '/forget',
  //   name: 'forgetpassword',
  //   component:() => import('@/views/home/forgetpassword'),
  // },

  // {
  //   path: '/error',
  //   name: 'error',
  //   component: () => import('@/views/error'),
  //   meta: {
  //     title: '404页'
  //   }
  // },
  {
    path: '*',
    redirect: 'error',
  },
];

const router = new Router({
  mode: 'history',
  // mode: 'hash',
  routes
});

export default router;
