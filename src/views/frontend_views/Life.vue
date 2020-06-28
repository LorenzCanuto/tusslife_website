<template>
  <div class="life">
    <div class="main">
      <h1>This is a life page</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Life",
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
