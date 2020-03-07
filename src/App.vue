<template>
  <div id="app" class="flex-col">
    <header
      class="flex flex-col sm:flex-row justify-between items-center px-8 py-2 border-b-2 border-yellow-600 border-solid"
    >
      <h1 class="m-0">
        <a href="/" class="text-yellow-600 text-3xl font-bold">Joself</a>
      </h1>

      <nav>
        <a
          href="https://calebporzio.com/projects"
          class="text-yellow-600 font-bold text-md"
        >About Me</a>&nbsp;&nbsp;•&nbsp;&nbsp;
        <a
          href="https://calebporzio.com"
          class="text-yellow-600 text-md font-bold"
        >Thougts</a>
      </nav>
    </header>
    <main class="max-w-3xl mx-auto py-8">
      <p>I Like PHP So What</p>
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
</style>
