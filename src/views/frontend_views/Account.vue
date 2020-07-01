<template>
  <div class="account">
    <Navbar></Navbar>
    <div class="main">
      <h1>This is an account page</h1>
      <button @click="logout">logout</button>
      <input v-model="user"/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import { fb } from "../../firebase";
var user_email
if(fb.auth().currentUser!=null) {
  user_email = '!null'
}
else {
  user_email = '~null'
}

export default {
  name: "Account",
  data() {
    return {
      user: user_email,
    }
  },
  methods: {
    logout() {
      fb
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('login')
        })
        .catch(function(error) {
          alert(error.message);
          console.log(error);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.main {
  margin-top: 90px;
  min-height: 90vh;
}
@media (min-width: 800px) {
  .main {
    margin-top: 90px;
    min-height: 74vh;
  }
}
</style>
