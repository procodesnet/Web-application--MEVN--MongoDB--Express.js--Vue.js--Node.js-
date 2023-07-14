<template>
  <div>
      <h2>Profile</h2>
      <form v-if="user">
      <ul class="form">
        <li class="form-row">
          <label for="email">Email: {{ user.email }}</label>
        </li>
        <li class="form-row">
          <label for="username">Username: {{ user.username }}</label>
        </li>
        <li class="form-row">
          <label for="name">Name: {{ user.name }}</label>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: mapGetters(["user"]),
    methods: {
      ...mapActions(["getProfile"])
    },
    created() {
      this.getProfile();
    }
}
</script>

<style>
@import '../assets/styles/form.css';
</style>