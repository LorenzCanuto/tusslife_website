<template>
  <div class="login">
    <div class="main">
      <div class="login-form">
        <h3>Log In</h3>
        <input
          type="text"
          placeholder="Email"
          id="email"
          v-model="email"
          @keyup.enter="login"
        /><br />
        <input
          type="password"
          placeholder="Password"
          id="password"
          v-model="password"
          @keyup.enter="login"
        /><br />
        <button @click="login">login</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { fb } from "../../firebase";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    login() {
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user.user.email.toString)
          this.$router.replace('overview')
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          console.log(errorCode+errorMessage);
        });
    },
  },
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

//
.login-form {
  width: 340px;
  margin: 50px auto;
}
.login-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.login-form h2 {
  margin: 0 0 15px;
}
.form-control,
.btn {
  min-height: 38px;
  border-radius: 2px;
}
.btn {
  font-size: 15px;
  font-weight: bold;
}
</style>
