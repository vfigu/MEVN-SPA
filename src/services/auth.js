import router from '../router'
import axios from './axios'
const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'api/auth/login'
const REGISTER_URL = API_URL + 'register/'

export default {

  login (credentials, success, fail) {
    axios.post(LOGIN_URL, credentials)
      .then(
        response => {
          if (response.data.success) {
            localStorage.setItem('token', response.data.token)
          }
        }
      )
      .catch(
        err => {
          console.log(err)
        })
  },

  signup (context, credentials, redirect) {
    context.$http.post(REGISTER_URL, credentials, (data) => {
      localStorage.setItem('token', data.token)

      if (redirect) {
        router.push(redirect)
      }
    })
  },

  logout () {
    localStorage.removeItem('token')
    console.log(localStorage.getItem('token'))
  },

  loggedIn () {
    let jwt = localStorage.getItem('token')
    if (jwt) {
      return true
    }
    return false
  },

  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }
}
