import Vue from 'vue'
import MovieList from '@/components/MovieList.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
 
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuetify)



new Vue({

  el: '#MovieList',
  vuetify:new Vuetify,
  render: h => h(MovieList),

  icons: {
    iconfont: 'mdi',
  },
})