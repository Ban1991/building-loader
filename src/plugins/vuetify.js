import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import { mdiAccount } from '@mdi/js'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify)
// console.log(mdiAccount);

export default new Vuetify({
    icons: {
      iconfont: 'mdi',
    },
  })