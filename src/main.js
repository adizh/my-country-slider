import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
Vue.config.productionTip = false
import { BootstrapVue } from 'bootstrap-vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true



import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.use(BootstrapVue)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
