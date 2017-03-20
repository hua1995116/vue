// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
import User from './components/User';
import Hello from './components/Hello';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import VueLazyload from 'vue-lazyload';

NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './img/error.jpg',
  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
});
Vue.use(Router);

const routes = [{
  path: '/',
  component: Hello
}, {
  path: '/use',
  component: User
}];

const router = new Router({
  linkActiveClass: 'active',
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
