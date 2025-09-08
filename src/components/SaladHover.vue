<script setup lang='ts'>
defineProps({
    data: {
      type: Object,
      required: true
    },
})

import { inject } from "vue";
import { useStore } from "../stores";
import { storeToRefs } from 'pinia';

const translations = inject('translations');
const store = useStore();
const { currentLanguage } = storeToRefs(store);
</script>

<template>
  <div
    class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-0 px-2 transition-all duration-200 md:px-20 sm:gap-5 bg-opacity-80"
    :class="data.customClass"
  >
    <h1 class="font-[Cardinal] text-[18px] sm:text-[60px] leading-[20px] sm:leading-[50px] lg:text-[140px] text-center lg:leading-[120px]">
      <span class="absolute top-3 sm:top-0 text-[12px] sm:text-[30px] right-2 sm:right-10 uppercase">
        {{ data.season ? data.season : "" }}
      </span>
      {{ data.name }}
    </h1>
    <p class="font-[Geomanist-Bold] text-[14px] sm:text-[25px] lg:text-[35px] text-center max-w-[457px]">
      {{ data.sauceName }}
    </p>
    <p class="font-[Geomanist-Bold] text-[12px] leading-[12px] sm:leading-[20px] sm:text-[16px] lg:text-[18px] text-center max-w-[320px]">
      {{ 
        translations[currentLanguage].salads[data.translationName].ingredients
      }}
    </p>
    <!-- <div class="w-full font-[Geomanist-Bold] flex gap-2 sm:gap-10 justify-center mt-3 text-[12px] sm:text-[16px]">
      <div class="text-center">
        <p>{{ translations[currentLanguage].salads.calories }}</p>
        {{ data.nutritionData.calories }}
      </div>
      <div class="text-center">
        <p>{{ translations[currentLanguage].salads.proteines }}</p>
        {{ data.nutritionData.proteines }}
      </div>
      <div class="text-center">
        <p>{{ translations[currentLanguage].salads.fats }}</p>
        {{ data.nutritionData.glucides }}
      </div>
      <div class="text-center">
        <p>{{ translations[currentLanguage].salads.Carbohydrates }}</p>
        {{ data.nutritionData.lipides }}
      </div>
    </div> -->
  </div>
</template>
