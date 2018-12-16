<template>
  <div class="user-list">
    <app-nav></app-nav>
    <div class="row">
      <!--<div v-for="user of users" class="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">-->
        <!--<app-member-card [user]="user"></app-member-card>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import AppMemberCard from '@/components/UserCards'
import AppNav from '@/components/Nav'

export default {
  name: 'Users',
  components: {AppNav, AppMemberCard},
  data () {
    return {
      username: 'Users List'
    }
  }
}
</script>

<style scoped>

</style>
