<script setup>
import AppButton from '../AppButton.vue';
import { useStore } from '../../stores';
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const translations = inject('translations');
const store = useStore();
const currentLanguage = ref(store.currentLanguage);

</script>

<template>
  <div
    v-if="currentLanguage"
    class="flex flex-col items-center justify-center gap-10 pb-10 pt-14 md:pt-40 md:pb-28 md:gap-20"
  >
    <h1 class="font-[Geomanist-Bold] text-[20px] md:text-[45px] text-ed-green text-center max-w-[1000px] mx-auto px-5">
      {{ translations[currentLanguage].about.text }}
    </h1>
    <div class="flex flex-col items-center justify-center gap-5 md:flex-row">
      <AppButton
        :additional-styles="'text-ed-pink border border-ed-pink'"
        :outline="true"
        @click="router.push('/click-and-collect')"
      >
        {{ translations[currentLanguage].about.buttons.order }}
      </AppButton>
      <a href="#salads-list">
        <AppButton
          :additional-styles="'text-ed-pink border border-ed-pink'"
          :outline="true"
        >
          {{ translations[currentLanguage].about.buttons.menu }}
        </AppButton>
      </a>
    </div>
  </div>
</template>