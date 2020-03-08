<template>
  <div
    class="px-4 flex flex-col border shadow-lg border-solid border-yellow-600 text-gray-800 rounded-lg"
  >
    <div class="pt-2 text-2xl font-bold">
      <slot name="title">Un titulo por defecto</slot>
    </div>
    <div class>
      <slot name="description" class>...</slot>
    </div>
    <p class="text-xs text-right pb-2 font-bold">
      <slot name="date"></slot>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>