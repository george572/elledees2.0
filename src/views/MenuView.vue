<script setup lang="ts">
import { inject, watch, ref, onMounted } from "vue";
import { useStore } from "../stores";
import { storeToRefs } from "pinia";
import AppButton from "../components/AppButton.vue";

const translations = inject("translations");
const store = useStore();
const { currentLanguage } = storeToRefs(store);
const pdfSrc = ref<null | string>(null);

onMounted(() => {});
watch(currentLanguage, () => {
  currentLanguage.value === "fr"
    ? (pdfSrc.value =
        "https://drive.google.com/file/d/1cwfneQJ9TZV_6sT0t6z05liyxcz8jZwi/preview")
    : (pdfSrc.value =
        "https://drive.google.com/file/d/1ZKD13gBo6EEYBte10w8bajQkh9t2tyu0/preview");
});

const showMenu = (rest) => {
  if (rest === "1") {
    currentLanguage.value === "fr"
      ? (pdfSrc.value =
          "https://drive.google.com/file/d/1cwfneQJ9TZV_6sT0t6z05liyxcz8jZwi/preview")
      : (pdfSrc.value =
          "https://drive.google.com/file/d/1ZKD13gBo6EEYBte10w8bajQkh9t2tyu0/preview");
  } else {
    currentLanguage.value === "fr"
      ? (pdfSrc.value =
          "https://drive.google.com/file/d/1rB5IOAqooItvU-Dgbpo6CcCw_68CGg9Z/preview")
      : (pdfSrc.value =
          "https://drive.google.com/file/d/1MbPqhhp_qQOLfOibo4vKSDmbmsi7KDj7/preview");
  }
};
</script>

<template>
  <div
    v-if="pdfSrc === null"
    class="p-4 flex flex-col gap-6 items-center w-[50%] mx-auto mt-40"
  >
    <div
      class="w-full text-center cursor-pointer border bg-ed-yellow text-ed-red p-4 uppercase rounded-[54px] hover:bg-ed-pink hover:text-ed-red font-[Geomanist-Bold] md:text-[18px] transition-all duration-175"
      @click="showMenu('1')"
    >
      Menu for Elle&Dee’s - Notre-dame-de-Lorette
    </div>
    <div
      class="w-full text-center cursor-pointer border bg-ed-yellow text-ed-red p-4 uppercase rounded-[54px] hover:bg-ed-pink hover:text-ed-red font-[Geomanist-Bold] md:text-[18px] transition-all duration-175"
      @click="showMenu('2')"
    >
      Menu for Elle&Dee’s - Champs-Élysées
    </div>
  </div>
  <iframe
    v-else
    id="menu"
    :src="pdfSrc"
    frameborder="0"
    class="w-full h-screen"
  />
</template>
