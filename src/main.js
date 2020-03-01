// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import vuetify from '@/plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'


// import axios from 'axios'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.prototype.$http = axios;
// axios.get('/', function() {});
// axios.post('/', function() {});
// // 将 axios 添加的 Vue 原型上后就不需要再在每个需要使用它的页面引入了
// Vue.prototype.$http = axios;
// $http.get('/', function() {});
// $http.post('/', function() {});
// Vue.use(ElementUI)


Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  vuetify,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
