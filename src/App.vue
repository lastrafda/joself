<template>
  <div id="app" class="flex-col">
    <header
      class="flex flex-col sm:flex-row justify-between items-center px-8 py-2 border-b-2 border-gray-900 border-solid"
    >
      <span class="text-yellow-600 text-3xl font-bold">Joself</span>
      <nav>
        <router-link
          to="/"
          class="text-yellow-600 font-bold text-md px-2 py-4 hover:underline"
        >About Me</router-link>
        <router-link
          to="/contact"
          class="text-yellow-600 text-md font-bold px-2 py-4 hover:underline"
        >Contact</router-link>
        <router-link to="/if" class="text-yellow-600 text-md font-bold px-2 py-4 hover:underline">If</router-link>
        <router-link
          to="/publications"
          class="text-yellow-600 text-md font-bold px-2 py-4 hover:underline"
        >Publications</router-link>
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
