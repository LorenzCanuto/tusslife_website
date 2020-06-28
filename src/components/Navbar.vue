<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <span id="brand">
        <router-link to="/home" class="navbar-brand"><img src="../../public/img/tuss.png" width=auto height=60px class="d-inline-block align-top" alt="Tuss"></router-link>
        
      </span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">home.</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/store" class="nav-link">store.</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              content.
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/content/culture" class="nav-link">culture.</router-link>
              <router-link to="/content/art" class="nav-link">art.</router-link>
              <router-link to="/content/life" class="nav-link">life.</router-link>
              <div class="dropdown-divider"></div>
              <router-link to="/content/all" class="nav-link">all content.</router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">contact us.</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link">about.</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link"><i class="fa fa-user-o"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link"><i class="fa fa-shopping-bag"></i></router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
