import Vue from 'vue'
import VueAxios from 'vue-axios'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignUp from '@/components/SignUp'
import Users from '@/components/Users'
import Chat from '@/components/Chat'
import axios from '../services/axios'
import auth from '../services/auth'

Vue.use(Router)
Vue.use(VueAxios, axios)

const ifNotAuthenticated = (to, from, next) => {
  if (!auth.loggedIn()) {
    next()
    return
  }
  next('/home')
}

const ifAuthenticated = (to, from, next) => {
  if (auth.loggedIn()) {
    next()
    return
  }
  next('/signup')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: '/',
      component: Home
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/users/:id',
      name: 'Chat',
      component: Chat
    },
    {
      path: '*',
      name: '/',
      component: Home
    }
  ]
})
