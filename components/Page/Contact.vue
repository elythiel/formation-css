<template>
  <transition>
    <div v-if="active"
         class=""
    >
      <button class="bg-gray-900/90"
              @click="active = false"
      >
          <!-- Zone de fermeture "autour" de la modale -->
      </button>
      <div class="">
        <button @click="active = false"
                title="Fermer"
                class=""
        >
          <image-svg type="x" class="" />
        </button>

        <form @submit.prevent="active = false">
          <div class="">
            <h2 class="">
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
            <label class="">
              Votre message
              <textarea required rows="8" class="resize-none" />
            </label>

            <button type="submit"
                    class="bg-sky-900 text-white">
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

const active = ref(false);

// watch(active, (value) => {
//   document.body.style.overflowY = value ? 'hidden' : 'auto';
// });

defineExpose({open});

function open() {
    active.value = true;
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
