import router from '../router'
import axios from './axios'
const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'api/auth/login/'
const REGISTER_URL = API_URL + 'api/auth/register/'
const USER_URL = API_URL + 'api/user/'

export default {
  login (credentials, redirect) {
    axios.post(LOGIN_URL, credentials)
      .then(
        response => {
          if (response.data.success) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('username', credentials.username)
            if (redirect) {
              router.push(redirect)
            }
          }
        }
      )
      .catch(
        err => {
          console.log(err)
        })
  },

  signup (credentials, redirect) {
    axios.post(REGISTER_URL, credentials, (data) => {
      localStorage.setItem('token', data.token)
      if (redirect) {
        router.push(redirect)
      }
    })
  },

  logout (redirect) {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    if (redirect) {
      router.push(redirect)
    }
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
  },

  getUsers () {
    let users = [[]]
    axios.get(USER_URL).then(response => {
      users = response.data
    })
      .catch(err => {
        console.log(err)
      })
    return users
  },

  getName () {
    return localStorage.getItem('username')
  }
}
