<script setup>
import AppButton from '../AppButton.vue';
import { useRouter } from 'vue-router';
import { inject, ref } from 'vue';
import { useStore } from '../../stores';
import { storeToRefs } from 'pinia';

const translations = inject('translations');
const store = useStore();
const { currentLanguage } = storeToRefs(store);

const router = useRouter();

const navigateToClickAndCollect = () => {
  window.open("https://elledees.zelty-order.fr/", "_blank");
}
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
        @click="navigateToClickAndCollect"
      >
        {{ translations[currentLanguage].about.buttons.order }} 
      </AppButton>
      <AppButton
        :additional-styles="'text-ed-pink border border-ed-pink'"
        :outline="true"
        @click="router.push('/menu')"
      >
        {{ translations[currentLanguage].about.buttons.menu }} 
      </AppButton>
      <AppButton
        :additional-styles="'text-ed-pink border border-ed-pink'"
        :outline="true"
        @click="router.push('/nutrition-info')"
      >
        {{ translations[currentLanguage].about.buttons.nutritionalInfo }} 
      </AppButton>
    </div>
  </div>
</template>