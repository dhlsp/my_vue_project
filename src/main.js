// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'babel-polyfill';
import 'normalize.css/normalize.css';
import '@/styles/index.scss';
import './config/elementui'; // 自定义element-ui组件
import App from './App';
import router from './router';
import './components'; // 自定义组件
import './icons'; // 注册svg-icon组件

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
