<template>
  <Navbar/>
  <div class="wrapper auto-grid">
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
}
</script>

<style>
body {
  box-sizing: border-box;
  font-family: Verdana;
  margin: 0;
  padding: 0;
}

.wrapper {
  max-width: 65rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
}

.auto-grid {
  --auto-grid-min-size: 16rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 1rem;
}
</style>
