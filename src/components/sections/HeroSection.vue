<script setup>
import AppButton from '../AppButton.vue';
import { useStore } from '../../stores';
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const translations = inject('translations');
const store = useStore();
const currentLanguage = ref(store.currentLanguage);

const images = inject('images');

const navigateToClickAdCollect = () => {
  window.open("https://elledees.zelty-order.fr/", "_blank");
}
</script>

<template>
  <div
    id="header"
    class="relative w-full h-auto py-20 md:h-screen"
  >
    <img
      :src="images.heroImg.image"
      class="absolute top-0 object-cover w-full h-full"
      alt=""
    >
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-20" />
    <div class="relative z-10 flex flex-col items-center justify-center h-full gap-5 px-5">
      <h1 class="text-[60px] text-center xl:text-left md:text-[130px] xl:text-[130px] mx-auto font-[Cardinal] text-white leading-[50px] md:leading-[110px] xl:leading-[110px] uppercase max-w-[980px] mb-[80px]">
        {{ translations[currentLanguage].hero.title }}
      </h1>
      <AppButton
        :additional-styles="'text-ed-green bg-white'"
        @click="navigateToClickAdCollect"
      >
        {{ translations[currentLanguage].hero.button }}
      </AppButton>
    </div>
  </div>
</template>
