<template>
  <div class="all-content">
    <div class="main">
      <h1>This is all content page</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "All Content",
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
