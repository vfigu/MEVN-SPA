<template>
  <div class="user-list">
    <app-nav></app-nav>
    <div class="row mt-4 ml-4 mr-4" id="users">
      <div v-for="user in users" :key="user._id" class="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
        <a @click="enterChat(user._id)">
          <div class="card mb-4">
            <div class="card-img-wrapper">
              <a><img class="card-img-top" src="../assets/user.png" alt=""></a>
            </div>
            <div class="card-body p-1">
              <h6 class="card-title text-center mb-1">{{user.username}}<i class="fa fa-user"></i>
              </h6>
              <p class="card-text text-muted text-center"></p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from '@/components/Nav'
// import * as io from 'socket.io-client'

export default {
  name: 'Users',
  components: {AppNav},
  data () {
    return {
      users: [[]]
      // socket: io('http://localhost:4000'),
      // username: localStorage.getItem('username')
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    getUsers () {
      let url = 'http://localhost:3000/api/user/'
      this.axios.get(url).then(response => {
        this.users = response.data
      })
        .catch(err => {
          console.log(err)
        })
    },
    enterChat (id) {
      // this.socket.emit('save-message',
      //   {
      //     room: id,
      //     username: this.username,
      //     message: 'Connected',
      //     created_date: new Date()
      //   })
      this.$router.push('/user/' + id)
    }
  }
}
</script>

<style scoped>

</style>
