<template>
  <div class="py-8 px-4">
    <h1 class="text-center text-yellow-600 text-3xl font-bold pb-8">Please have a seat</h1>
    <post-item>
      <template v-slot:title>
        <router-link to="/posts/shoshin" class="underline">Shoshin ⇦</router-link>
      </template>
      <template v-slot:description>La mentalidad del principiante. 🔰</template>
      <template v-slot:date>Marzo 2020</template>
    </post-item>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {
    "post-item": PostItem
  }
};
</script>

<style>
</style>