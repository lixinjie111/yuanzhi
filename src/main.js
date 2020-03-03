// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'view-design/dist/styles/iview.css';
import ViewUI  from 'view-design';
import axios from 'axios';
import Recorder from 'js-audio-recorder';
import 'echarts/map/js/china.js';
axios.defaults.baseURL = 'http://106.13.122.156:8088';
Vue.prototype.$axios = axios;
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.use(ViewUI);
Vue.config.productionTip = false

Vue.prototype.$Recorder = new Recorder({
  sampleBits: 16,         // 采样位数，支持 8 或 16，默认是16
  sampleRate: 16000,      // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
  numChannels: 1,         // 声道，支持 1 或 2， 默认是1
  compiling: false,       // 是否边录边转换，默认是false
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
