<template>
  <div class="chat-box">
    <app-nav></app-nav>
  </div>
</template>

<script>
import AppNav from '@/components/Nav'

export default {
  name: 'Chat',
  components: {AppNav},
  data () {
    return {
      username: 'Chat with User'
    }
  }
}
</script>

<style scoped>

</style>
