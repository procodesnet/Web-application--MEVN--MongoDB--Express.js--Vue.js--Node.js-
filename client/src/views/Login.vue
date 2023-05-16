<template>
  <div>
    <h2>Login</h2>
    <form>
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
          <button>Submit</button>
        </li>
      </ul>
    </form>
    <p><router-link to="/register">Register</router-link></p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: ""
        };
    }
}
</script>

<style>
@import '../assets/styles/form.css';
</style>