<script setup lang='ts'>
import { inject } from "vue";
import { useStore } from "../../stores";
import { storeToRefs } from 'pinia';

const translations = inject('translations');
const store = useStore();
const { currentLanguage } = storeToRefs(store);
</script>

<template>
  <div
    id="aboutus"
    class="py-20 px-5 flex flex-col bg-ed-green text-ed-yellow"
  >
    <div class="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
      <div class="w-full flex flex-col items-center">
        <div class="text-center text-lg font-[Cardinal]">
          <p class="pt-3 text-5xl text-center uppercase">
            {{ translations[currentLanguage].mission.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>