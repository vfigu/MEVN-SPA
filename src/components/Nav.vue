<template>
  <div class="pos-f-t">
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <h5 class="text-white h4">Collapsed content</h5>
        <span class="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
      <div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Username"
                 name="Username" required>
          <input class="form-control mr-sm-2" type="password" placeholder="Password"
                 name="Password" required>
          <button class="btn btn-success my-2 my-sm-0" type="submit">Login</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app-nav'
}
</script>

<style scoped>

</style>
