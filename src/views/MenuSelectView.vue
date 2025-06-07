<script setup lang="ts">
import { inject, watch, ref, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "../stores";
import { storeToRefs } from "pinia";

const translations = inject("translations");
const store = useStore();
const { currentLanguage } = storeToRefs(store);
const pdfSrc = ref<null | string>(null);
const hideButtons = ref(false);
import { useRouter } from "vue-router";

const router = useRouter();

onBeforeUnmount(() => {
  pdfSrc.value = null;
  hideButtons.value = false;
});
watch(currentLanguage, () => {
  if (pdfSrc.value) {
    currentLanguage.value === "fr"
      ? (pdfSrc.value =
          "https://drive.google.com/file/d/1cwfneQJ9TZV_6sT0t6z05liyxcz8jZwi/preview")
      : (pdfSrc.value =
          "https://drive.google.com/file/d/1ZKD13gBo6EEYBte10w8bajQkh9t2tyu0/preview");
  }
});

const goToMenu = (restaurant) => {
  router.push(`/menu/${restaurant}`);
};
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center bg">
    <div class="w-100% p-4 flex flex-col gap-6 items-center md:w-[50%] mx-auto">
      <div
        class="max-w-[380px] w-full text-center cursor-pointer border bg-ed-yellow text-ed-red px-4 py-2 uppercase rounded-[54px] hover:bg-ed-pink hover:text-ed-red font-[Geomanist-Bold] md:text-[18px] transition-all duration-175"
        @click="goToMenu('1')"
      >
        Elle&Dee’s - Notre-Dame-de-Lorette <br />
        1 rue Bourdaloue 75009
      </div>
      <div
        class="max-w-[380px] w-full text-center cursor-pointer border bg-ed-yellow text-ed-red px-4 py-2 uppercase rounded-[54px] hover:bg-ed-pink hover:text-ed-red font-[Geomanist-Bold] md:text-[18px] transition-all duration-175"
        @click="goToMenu('2')"
      >
        Elle&Dee’s - Washington
        <br />
        30 rue Washington 75008
      </div>
      <div
        class="max-w-[380px] w-full text-center cursor-pointer border bg-ed-yellow text-ed-red px-4 py-2 uppercase rounded-[54px] hover:bg-ed-pink hover:text-ed-red font-[Geomanist-Bold] md:text-[18px] transition-all duration-175"
        @click="goToMenu('3')"
      >
        Elle&Dee’s - NEUILLY
        <br />
        151 avenue Charles de Gaulle 92200
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url("../assets/images/aras.webp");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  @media only screen and (max-width: 500px) {
    background-size: cover;
    background-position: center;
  }
}
</style>
