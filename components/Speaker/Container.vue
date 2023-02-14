<template>
  <section class="bg-white w-full">
    <div class="container mx-auto px-4 py-10">
      <h2 class="text-3xl mb-10">
        Nos speakers
      </h2>
      <div class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-32 text-center">
        <div v-for="speaker in speakers"
             :id="`speaker-${speaker.id}`"
             class="flex flex-col items-center gap-2"
        >
          <img :src="`https://i.pravatar.cc/600?img=${speaker.id}`"
               :alt="`Speaker ${speaker.id}'s Avatar`"
               class="rounded-full w-9/12 lg:w-full"
          />
          <h3 class="text-xl font-semibold">
            {{ speaker.name }}
          </h3>
          <p class="font-light">
            {{ speaker.job }}
          </p>
          <a v-if="speaker.url"
             href="#"
             :title="`Accéder à ${speaker.url}`"
             class="block truncate text-sm"
          >
            <image-svg type="external-link" class="align-sub h-4 w-4" />
            {{ speaker.url }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {Speaker} from "~/types";

const speakers = await queryContent<Speaker>('/speakers').find();
</script>
