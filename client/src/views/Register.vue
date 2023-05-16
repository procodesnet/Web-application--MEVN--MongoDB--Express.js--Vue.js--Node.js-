<template>
  <div>
      <h2>Register</h2>
      <form>
      <ul class="form">
        <li class="form-row">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" v-model="username">
        </li>
        <li class="form-row">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" v-model="name">
        </li>
        <li class="form-row">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" v-model="email">
        </li>
        <li class="form-row">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" v-model="password">
        </li>
        <li class="form-row">
          <label for="confirm_password">Confirm password</label>
          <input type="password" id="confirm_password" name="confirm_password" v-model="confirm_password">
        </li>
        <li class="form-row">
          <button>Submit</button>
        </li>
      </ul>
      </form>
      <p><router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
export default {
    data() {
      return {
        username: "",
        name: "",
        email: "",
        password: "",
        confirm_password: ""
      };
    }
}
</script>

<style>
@import '../assets/styles/form.css';
</style>