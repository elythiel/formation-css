<template>
  <div class="bg-sky-900">
    <div v-for="talk in talks"
         class=""
    >
      <h3 class="">
        {{ talk.title }}
      </h3>
      <p class="">
        {{ talk.description }}
      </p>

      <div class="">
        <a v-for="speaker in talk.speakers.slice(0, 5)"
           :href="`#speaker-${speaker.id}`"
           :title="speaker.name"
           class=""
        >
          <img :src="`https://i.pravatar.cc/150?img=${speaker.id}`"
               :alt="`Speaker ${speaker.id}'s Avatar`"
               class=""
          />
        </a>

        <span class="">
        {{ talk.date.toLocaleString() }}
      </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Speaker, Talk} from "~/types";
import {faker} from "@faker-js/faker";

const props = defineProps<{
  day: string
}>();

const talks: Talk[] = [];

const from = new Date(`${props.day}T09:00:00.000Z`);
const to = new Date(`${props.day}T18:00:00.000Z`);

for (let i = 0; i < 10; i++) {
  const skip = rand(1, 6);
  talks.push({
    title: faker.lorem.words(rand(2, 5)),
    description: faker.lorem.text(),
    date: new Date(faker.date.between(from, to)),
    speakers: await queryContent<Speaker>('/speakers').skip(skip).limit(rand(skip, 8)).find()
  });
}
talks.sort((a: any, b: any) => a.date - b.date)

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

</script>
