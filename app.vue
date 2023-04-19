<template>
  <page-nav />

  <page-header id="header" class="scroll-mt-0" />


  <talk-container id="talks" class="my-20" />
  <speaker-container id="speakers" />
  <page-footer id="footer" />
</template>

<script setup>
useHead({
  htmlAttrs: {
    class: 'scroll-smooth'
  },
  bodyAttrs: {
    class: 'bg-gray-900'
  }
});
</script>

<style>
[id] {
  @apply scroll-mt-20;
}
</style>
