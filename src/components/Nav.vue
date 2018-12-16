<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <div class="col">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li v-if="loggedIn()" class="nav-item">
            <router-link to="/users" class="nav-link">Users</router-link>
          </li>
          <li v-if="!loggedIn()" class="nav-item">
            <router-link to="/signup" class="nav-link">Sign Up</router-link>
          </li>
        </ul>
      </div>

      <ul class="navbar-nav mr-auto">
        <li v-if="loggedIn()" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href=""
             id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Welcome User</a>
          <div class="text-center dropdown-menu btn btn-danger fa fa-sign-out" @click="logout()">Log out</div>
        </li>
      </ul>

      <form v-if="!loggedIn()" class="form-inline my-2 my-lg-0 col-lg-6 col-md-10 ">
        <input class="form-control mr-sm-2 col-md-5 col-sm-5" type="text" required
               placeholder="Username" name="Username" v-model="username">
        <input class="form-control mr-sm-2 col-md-4 col-sm-4" type="password" required
               placeholder="Password" name="Password" v-model="password">
        <button class="btn btn-success my-2 my-sm-0 col-md-2 col-sm-2 fa fa-sign-in" @click="login()">Login</button>

      </form>
    </div>
  </nav>
</template>

<script>
import auth from '../services/auth'
import credentials from '../models/credentials'

export default {
  name: 'app-nav',
  log: false,
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      credentials.username = this.username
      credentials.password = this.password

      auth.login(credentials)
      this.$forceUpdate()
    },
    loggedIn () {
      return auth.loggedIn()
    },
    logout () {
      auth.logout()
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>

</style>
