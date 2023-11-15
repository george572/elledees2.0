<script setup>
import AppButton from '../AppButton.vue';
import { useStore } from '../../stores';
import { inject, ref } from 'vue';

const translations = inject('translations');
const store = useStore();
const currentLanguage = ref(store.currentLanguage);

</script>

<template>
  <div
    v-if="currentLanguage"
    class="flex flex-col items-center justify-center pt-40 pb-28 gap-20"
  >
    <h1 class="font-[Geomanist-Bold] text-[45px] text-ed-green text-center max-w-[1000px] mx-auto px-5">
      {{ translations[currentLanguage].about.text }}
    </h1>
    <div class="flex flex-col md:flex-row justify-center items-center gap-5">
      <AppButton
        :additional-styles="'text-ed-pink border border-ed-pink'"
        :outline="true"
      >
        {{ translations[currentLanguage].about.buttons.order }}
      </AppButton>
      <AppButton
        :additional-styles="'text-ed-pink border border-ed-pink'"
        :outline="true"
      >
        {{ translations[currentLanguage].about.buttons.menu }}
      </AppButton>
    </div>
  </div>
</template>