import Vue from 'vue'
import Router from 'vue-router'
import lockScreen from './modules/LockScreen/routes'
import User from './modules/User/routes'

Vue.use(Router)


const routes = [].concat(lockScreen, User)
const router = new Router({
    mode: 'history',
    routes
})

export default router
