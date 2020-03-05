// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'view-design/dist/styles/iview.css';
import ViewUI  from 'view-design';
import axios from 'axios';
import 'echarts/map/js/china.js';
axios.defaults.baseURL = 'http://106.13.122.156:8088';
Vue.prototype.$axios = axios;
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.use(ViewUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
