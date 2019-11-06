import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/iconfont/iconfont.css';

Vue.use(Vant);
import router from '@/router' //导入封装好的路由文件


// 创建和挂载根实例。

new Vue({
  router, // （缩写）相当于 router: router
  render: h => h(App),
}).$mount('#app');


//而这里的render就是一个渲染函数，而createElement(h)就是创建节点，App就是一般情况下Vue的html根文件，
//所以这里实质上就是将App这个html页面进行了渲染，当然在App页面中又有挂载的路由组件，进而可以渲染各种挂载的路由组件，
//这样就将整个页面盘活了
//$mount表示手动挂载路由组件


import axios from 'axios'
//Vue.use(axios)//vue.use()为注册全局插件所用，接收函数或者一个包含install属性的对象为参数，如果参数带有install就执行install,
 // 如果没有就直接将参数当install执行, 第一个参数始终为vue对象, 注册过的插件不会重新注册


import './components/mock/mockServer';
Vue.prototype.$http = axios    //通过Vue.prototype原型链的方式供全局都可调用

