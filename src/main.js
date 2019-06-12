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
import i18n from './lang'; // 多语言
import './mixins'; // mixin
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
});
