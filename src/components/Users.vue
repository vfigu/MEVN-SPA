<template>
  <div class="user-list">
    <app-nav></app-nav>
    <div class="row mt-4" id="users">
      <div v-for="user in users" :key="user._id" class="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
        <a :href="'/users/'+user.username">
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

export default {
  name: 'Users',
  components: {AppNav},
  data () {
    return {
      users: [[]]
    }
  },
  created () {
    let url = 'http://localhost:3000/api/user/'
    this.axios.get(url).then(response => {
      this.users = response.data
      console.log(this.users)
    })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
