<template>
  <section class="">
    <div class="">
      <h2 class="">
        Nos speakers
      </h2>
      <div class="">
        <div v-for="speaker in speakers"
             :id="`speaker-${speaker.id}`"
             class=""
        >
          <img :src="`https://i.pravatar.cc/600?img=${speaker.id + 1}`"
               :alt="`Speaker ${speaker.id}'s Avatar`"
               class=""
          />
          <h3 class="">
            {{ speaker.name }}
          </h3>
          <p class="">
            {{ speaker.job }}
          </p>
          <a v-if="speaker.url"
             href="#"
             :title="`Accéder à ${speaker.url}`"
             class=""
          >
            <image-svg type="external-link" class="" />
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
