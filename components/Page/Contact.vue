<template>
  <transition>
    <div v-if="open"
         class="fixed w-screen h-screen top-0 left-0 flex items-center justify-center p-4"
    >
      <button class="absolute bg-gray-900/90 w-full h-full" @click="open = false"></button>
      <div class="relative bg-white rounded-xl min-w-9/12 px-4 lg:px-32">
        <button @click="open = false"
                title="Fermer"
                class="absolute top-0 right-0 lg:-mt-6 lg:-mr-6 bg-white rounded-full h-12 w-12 p-3 lg:shadow-lg"
        >
          <image-svg type="x" class="h-full w-full" />
        </button>

        <form @submit.prevent="open = false">
          <div class="flex flex-col lg:grid lg:grid-cols-2 gap-2 mx-auto my-10">
            <h2 class="text-3xl col-span-full lg:mb-10">
              Nous contacter
            </h2>

            <label>
              Votre nom
              <input type="text" required/>
            </label>
            <label>
              Votre email
              <input type="email" required/>
            </label>
            <label class="col-span-2">
              Votre message
              <textarea required rows="8" class="resize-none" />
            </label>

            <button type="submit"
                    class="justify-self-start flex items-center justify-center gap-2 bg-sky-900 rounded text-white py-3 px-4">
              Envoyer
              <image-svg type="send"/>
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {watch} from "#imports";

const open = ref(false);

watch(open, (value) => {
  document.body.style.overflowY = value ? 'hidden' : 'auto';
});

defineExpose({open});
</script>

<style scoped>
input,
textarea {
  @apply block border border-neutral-800 py-3 px-4 w-full mt-2;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
