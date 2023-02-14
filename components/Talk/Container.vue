<template>
  <section class="container mx-auto flex gap-4">

    <div class="hidden lg:flex flex-col items-center text-sky-400">
      <image-svg type="calendar"/>
      <div class="bg-current grow w-px my-4"></div>
    </div>

    <div class="grow">
      <label class="sticky md:static top-0 bg-gray-900 py-4 md:py-0 px-4 block mb-4 text-2xl text-white">
        Le programme du

        <select v-model="currentDay" class="bg-transparent">
          <option v-for="(date, key) in days" :value="date">
            {{ key }}
          </option>
        </select>
      </label>

        <talk-cards v-for="date in days"
                    v-show="date === currentDay"
                    :day="date"
        />
    </div>
  </section>
</template>

<script lang="ts" setup>
const days = {
  vendredi: '2023-06-23',
  samedi: '2023-06-24',
  dimanche: '2023-06-25'
};

const currentDay = ref<string>('2023-06-23');
</script>
