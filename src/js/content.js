import Vue from 'vue'
import content from '@/components/content.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuetify)
 

/* eslint-disable no-new */

new Vue({

el: '#content',
vuetify:new Vuetify,
  render: h => h(content),
  icons: {
    iconfont: 'mdi',
  },
})