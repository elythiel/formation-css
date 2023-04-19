<template>
  <div class="bg-neutral-900 lg:bg-gray-900 text-white">
    <image-svg type="logo" alt="Logo" class="w-32 md:w-64" />

    <button class="block lg:hidden" @click="navOpened = !navOpened">
      <image-svg type="menu" class="h-8 w-8" />
    </button>
    <nav class="">
      <a v-for="link in links"
         :href="`#${link.id}`"
         class=""
         :title="link.text"
         @click="navOpened = false"
      >
        {{ link.text }}
      </a>
      <button class=""
              @click="navOpened = false; $refs.contact.open()"
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
