<script setup lang='ts'>
import { ref, watch, onMounted } from 'vue';
import { useStore} from './../stores/index';
const store = useStore();

const selectedLanguage = ref(store.currentLanguage);
const availableLanguage = ref();
const openChangeLanguage = ref(false);

onMounted(() => {
    determineChangeableLanguage();
});

const changeLanguage = () => {
    selectedLanguage.value = availableLanguage.value;
    openChangeLanguage.value = false;
}

const determineChangeableLanguage = () => {
    return selectedLanguage.value === 'en' ? availableLanguage.value = 'fr' : availableLanguage.value = 'en'
}
watch(selectedLanguage, () => {
    determineChangeableLanguage();
});
</script>

<template>
  <div>
    <div
      class="uppercase flex gap-0 items-center min-w-[50px] justify-center"
      @click="openChangeLanguage = !openChangeLanguage"
    >
      {{ selectedLanguage }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-down"
      ><path d="m6 9 6 6 6-6" /></svg>
    </div>
    <div
      class="absolute top-8 z-50 w-[80px] flex items-center justify-center overflow-hidden h-[0px] left-[-20px] text-center py-0 uppercase rounded-lg  bg-ed-yellow transition-all duration-300"
      :class="{'h-[44.5px]' : openChangeLanguage}"
      @click="changeLanguage"
    >
      <span>{{ availableLanguage }}</span>
    </div>
  </div>
</template>
