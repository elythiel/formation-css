<template>
  <div class="fixed lg:sticky top-0 lg:-mt-16 bg-neutral-900 lg:bg-gray-900 text-white flex flex-wrap lg:flex-nowrap items-center justify-between py-2 px-4 md:py-4 md:px-8 w-full">
    <image-svg type="logo" alt="Logo" class="w-32 md:w-64" />

    <button class="block lg:hidden" @click="navOpened = !navOpened">
      <image-svg type="menu" class="h-8 w-8" />
    </button>
    <nav class="text-2xl flex flex-col lg:!block" v-show="navOpened">
      <a v-for="link in links"
         :href="`#${link.id}`"
         class="inline-block p-4"
         :title="link.text"
         @click="navOpened = false"
      >
        {{ link.text }}
      </a>
      <button class="inline-block p-4"
              @click="navOpened = false; $refs.contact.open = true"
      >
        Nous contacter
      </button>
    </nav>
  </div>

  <teleport to="body">
    <page-contact ref="contact" />
  </teleport>
</template>

<script setup lang="ts">
const links = [
  {id: 'header', 'text': 'Accueil'},
  {id: 'talks', 'text': 'Programmation'},
  {id: 'speakers', 'text': 'Nos speakers'},
];

const navOpened = ref(false);
</script>
