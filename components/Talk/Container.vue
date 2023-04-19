<template>
  <section class="">

    <div class="text-sky-400">
      <image-svg type="calendar"/>
      <div class=""></div>
    </div>

    <div class="grow">
      <label class="bg-gray-900 text-white">
        Le programme du

        <select v-model="currentDay" class="">
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
