<template>
  <div id="app" class="flex-col font-sans">
    <header
      class="flex flex-col sm:flex-row justify-between items-center px-8 py-2 border-b-2 border-black border-solid"
    >
      <span class="text-3xl font-bold">Joself</span>
      <nav>
        <router-link to="/" class="font-bold text-xl px-2 py-4 hover:underline">About</router-link>
        <router-link to="/contact" class="text-xl font-bold px-2 py-4 hover:underline">Contact</router-link>
        <router-link to="/if" class="text-xl font-bold px-2 py-4 hover:underline">If</router-link>
        <router-link to="/posts" class="text-xl font-bold px-2 py-4 hover:underline">Posts</router-link>
      </nav>
    </header>
    <main class="max-w-3xl mx-auto py-8 px-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
html {
  height: 100%;
}
body,
#app {
  min-height: 100vh;
}
.router-link-exact-active {
  text-decoration: underline;
}
</style>
