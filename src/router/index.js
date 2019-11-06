import Vue from 'vue'
import Router from 'vue-router'

//如果使用模块化机制编程，导入 Vue 和 VueRouter，要调用 Vue.use(VueRouter)

Vue.use(Router);

// 定义路由


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

//创建 router 实例，然后传 `routes` 配置

const router = new Router({
  mode: 'history', // 去掉路由地址的#
  routes  // （缩写）相当于 routes: routes
});


//导出路由文件
export default router;
