<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <ul class="form">
        <li class="form-row">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" v-model="username">
        </li>
        <li class="form-row">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" v-model="password">
        </li>
        <li class="form-row">
          <input type="submit" value="Submit"/>
        </li>
      </ul>
    </form>
    <p><router-link to="/register">Register</router-link></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
      ...mapActions(['login']),
      loginUser() {
        let user = {
          username: this.username,
          password: this.password
        };
        this.login(user)
          .then(res => {
            if (res.data.success) {
              this.$router.push("/profile");
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
};
</script>

<style>
@import '../assets/styles/form.css';
</style>