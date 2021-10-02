<template>
  <div id="app">
    <main>
      <TopBar />
      <router-view />
    </main>
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue";

export default {
  name: "App",
  components: {
    TopBar,
  },
};
</script>

<style stoped>
</style>
