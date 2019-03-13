import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './router'
import store from './store/index'


Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
});



import Vuetify from 'vuetify'
Vue.use(Vuetify)


import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

Vue.config.productionTip = false

//import 'animate.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import 'vuetify/dist/vuetify.min.css'
//import 'vuesax/dist/vuesax.css'
import './assets/css/mbs.css';
import './assets/css/custom.css';
import './assets/css/position.css';
import './assets/css/size.css';
import './assets/css/color.css';
import './assets/css/bootstrap.min.css';
//import 'material-icons/iconfont/material-icons.css';
//import "@mdi/font/css/materialdesignicons.min.css"
//import 'vue-multiselect/dist/vue-multiselect.min.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
