<template>
  <span v-if="icon" v-html="icon" class="inline-block" />
</template>

<script setup lang="ts">
const props = defineProps<{
  type: string
}>();

const images = Object.fromEntries(
    Object.entries(import.meta.glob('~/assets/images/*.svg', { as: 'raw' })).map(
        ([key, value]) => {
          const filename = key.split('/').pop()!.split('.').shift()
          return [filename, value]
        },
    ),
)

const icon = props.type && (await images?.[props.type]?.());
</script>

<style scoped>
span:deep(svg) {
  @apply min-h-[1rem] min-w-[1rem];
}
</style>
