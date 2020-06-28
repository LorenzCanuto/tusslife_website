<template>
  <div class="login">
    <Navbar></Navbar>
    <div class="main">
      <h1>This is a login page</h1>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",
};
</script>

<style scoped lang="scss">
  .main{
    margin-top: 90px;
    min-height: 90vh;
  }
  @media(min-width: 800px) {
    .main{
      margin-top: 90px;
      min-height: 74vh;
    }
  }

</style>
