<template>
  <div id="app">
    <main>
      <Home />
      <router-view />
    </main>
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style stoped>
</style>
