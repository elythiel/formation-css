<template>
  <footer class="text-center py-10">
    <p class="text-gray-500">
      {{ faker.lorem.sentence(15) }}
    </p>
    <a href="#" class="text-white font-semibold">
      https://example.com
    </a>
  </footer>
</template>

<script setup lang="ts">
import {faker} from "@faker-js/faker";
</script>
