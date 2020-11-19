import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import router from './router/index'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el: '#app',
  router
})
