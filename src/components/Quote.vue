<template>
  <div class="p-4 border-l-2 border-yellow-600 bg-yellow-200 rounded">
    <div class="text-left italic">
        <span class="text-xl">“</span><slot name="quote">A beatiful quote</slot> <span class="text-xl">”</span>
    </div>
    <div class="text-right font-bold">
        <slot name="autor">Me.</slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>