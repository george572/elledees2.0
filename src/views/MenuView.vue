<script setup lang="ts">
import { inject, watch, ref, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "../stores";
import { storeToRefs } from "pinia";

const translations = inject("translations");
const store = useStore();
const { currentLanguage } = storeToRefs(store);
const pdfSrc = ref<null | string>(null);
const hideButtons = ref(false);
import { useRoute } from "vue-router";

const showPdf = ref(true);
const route = useRoute();

onMounted(() => {
  showMenu(route.params.restaurantId);
});

watch(currentLanguage, () => {
  let currentMenu = pdfSrc.value?.includes("washington")
    ? "washington"
    : "bourdaloue";
  if (pdfSrc.value) {
    if (currentLanguage.value === "fr") {
      pdfSrc.value = currentMenu + "-fr";
    }
    if (currentLanguage.value === "en") {
      pdfSrc.value = currentMenu + "-en";
    }
  }
});

const showMenu = (restaurant) => {
  if (restaurant === "1") {
    if (currentLanguage.value == "fr") {
      pdfSrc.value = "bourdaloue-fr";
      showPdf.value.false;
      setTimeout(() => {
        showPdf.value = true;
      }, 10);
    } else {
      pdfSrc.value = "bourdaloue-en";
      showPdf.value.false;
      setTimeout(() => {
        showPdf.value = true;
      }, 10);
    }
  } else if (restaurant === "2") {
    if (currentLanguage.value == "fr") {
      pdfSrc.value = "washington-fr";
      showPdf.value.false;
      setTimeout(() => {
        showPdf.value = true;
      }, 10);
    } else {
      pdfSrc.value = "washington-en";
      showPdf.value.false;
      setTimeout(() => {
        showPdf.value = true;
      }, 10);
    }
  } else {
    if (currentLanguage.value == "fr") {
      pdfSrc.value = "neuilly-fr";
      showPdf.value.false;
      setTimeout(() => {
        showPdf.value = true;
      }, 10);
    } else {
      pdfSrc.value = "neuilly-en";
      showPdf.value.false;
      setTimeout(() => {
        showPdf.value = true;
      }, 10);
    }
  }
};
</script>

<template>
  <div class="w-full flex items-center justify-center bg">
    <img
      class="w-full object-contain"
      src="../assets/images/menus/bourdaloue-en.png"
      v-if="pdfSrc === 'bourdaloue-en'"
    />
    <img
      class="w-full object-contain"
      src="../assets/images/menus/bourdaloue-fr.png"
      v-if="pdfSrc === 'bourdaloue-fr'"
    />
    <img
      class="w-full object-contain"
      src="../assets/images/menus/washington-en.png"
      v-if="pdfSrc === 'washington-en'"
    />
    <img
      class="w-full object-contain"
      src="../assets/images/menus/washington-fr.png"
      v-if="pdfSrc === 'washington-fr'"
    />
    <img
      class="w-full object-contain"
      src="../assets/images/menus/neuilly-en.png"
      v-if="pdfSrc === 'neuilly-en'"
    />
    <img
      class="w-full object-contain"
      src="../assets/images/menus/neuilly-fr.png"
      v-if="pdfSrc === 'neuilly-fr'"
    />

    <!-- <iframe id="menu" :src="pdfSrc" frameborder="0" class="w-full h-screen" /> -->
  </div>
</template>

<style scoped>
.bg {
  background-image: url("../assets/images/1-min.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  @media only screen and (max-width: 500px) {
    background-size: cover;
    background-position: center;
  }
}
</style>
