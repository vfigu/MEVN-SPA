<template>
  <div class="sign-up">
    <form>
      <h2 class="text-center text-primary">Sign Up</h2>
      <hr>
      <!--/////////////////////////////////////////////////////////////////////////////////-->
      <!--//////////////////////////////// Username ///////////////////////////////////////-->
      <!--/////////////////////////////////////////////////////////////////////////////////-->
      <div class="form-group">
        <input type="text" class="form-control"
               placeholder="Username" v-model="username" required>
      </div>

      <!--/////////////////////////////////////////////////////////////////////////////////-->
      <!--//////////////////////////////// Password ///////////////////////////////////////-->
      <!--/////////////////////////////////////////////////////////////////////////////////-->
      <div class="form-group">
        <input type="password" class="form-control"
               placeholder="Password" v-model="password" required>
      </div>

      <div class="form-group">
        <input type="password" class="form-control"
               placeholder="Confirm Password" v-model="confirm_password" required>
      </div>
      <div v-if="mismatch()" class="alert alert-warning disabled">
        Passwords do not match
      </div>

      <div class="form-group text-center">
        <button class="btn btn-success" type="button" @click="register()">Register</button>
        <router-link to="/home"><button class="btn btn-default" type="button">Cancel</button></router-link>

      </div>
    </form>
  </div>

</template>

<script>
import axios from '../services/axios'
import credentials from '../models/credentials'

export default {
  data () {
    return {
      username: '',
      password: '',
      confirm_password: '',
      password_mismatch: false
    }
  },
  methods: {
    mismatch () {
      if (this.confirm_password === '') {
        return false
      }
      return !(this.password === this.confirm_password)
    },
    register () {
      if (this.password === this.confirm_password) {
        let url = 'http://localhost:3000/api/auth/register'
        credentials.username = this.username
        credentials.password = this.password
        axios.post(url, credentials)
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
      }
    }
  }
}
</script>

<style scoped>

</style>
