import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import style from './assets/sass/style.scss'
import {register} from './utils/icons'
Vue.use(register)


Vue.config.productionTip = false

new Vue({
   el: '#app', router,
   template: '<App/>',
   components: {App}})
