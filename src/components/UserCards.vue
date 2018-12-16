<template>
  <div class="card mb-4">
    <div class="card-img-wrapper">
      <a><img class="card-img-top" src="" alt=""></a>
      <ul class="list-inline member-icons animate text-center">
        <li class="list-inline-item"><button class="btn btn-primary"><i class="fa fa-user"></i> </button> </li>
        <li class="list-inline-item"><button class="btn btn-primary"><i class="fa fa-envelope"></i> </button> </li>
        <li class="list-inline-item"><button class="btn btn-primary"><i class="fa fa-connectdevelop"></i> </button> </li>
      </ul>
    </div>
    <div class="card-body p-1">
      <h6 class="card-title text-center mb-1">{{username}}<i class="fa fa-user"></i>
      </h6>
      <p class="card-text text-muted text-center"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-member-card',
  data () {
    return {
      username: 'User'
    }
  }
}
</script>

<style scoped>

</style>
