<script setup>
import { inject, ref } from 'vue';
import { useStore } from '@/stores/index'
import AppLanguageSwitcher from './AppLanguageSwitcher.vue'
import BurgerMenuIcon from './BurgerMenuIcon.vue'


const store = useStore();
const translations = inject('translations');
const currentLanguage = ref(store.currentLanguage);
const openNav = ref(false);

const navigationLinks = [
  {
    title: translations[currentLanguage.value].header.navigation.clickCollect,
    href : "#!"
  },
  {
    title: translations[currentLanguage.value].header.navigation.menu,
    href : "#!"
  },
  {
    title: 'logo',
    href : "#!"
  },
  {
    title: translations[currentLanguage.value].header.navigation.hours,
    href : "#!"
  },
  {
    title: translations[currentLanguage.value].header.navigation.contact,
    href : "#!"
  },
]
</script>

<template>
  <!-- Desktop Nav -->
  <div class="hidden md:flex gap-5 items-center justify-center py-6 max-w-[1920px] mx-auto relative">
    <a
      v-for="navLink in navigationLinks"
      :key="navLink.title"
      href="#!"
      class="font-[Geomanist-Bold] uppercase text-ed-green align-middle text-[14px] lg:text-[19px]"
    >
      <img
        v-if="navLink.title === 'logo'"
        src="./../assets/images/logo.svg"
        alt=""
        class="w-[200px] lg:w-full"
      >
      <p
        v-else
        class="transform translate-y-0.5"
      >
        {{ navLink.title }}
      </p>
    </a>
    <AppLanguageSwitcher class="absolute right-[45px] z-50 cursor-pointer lg:top-[30px] md:top-[27.5px] font-[Geomanist-Bold] text-ed-green  text-[14px] lg:text-[19px]" />
  </div>

  <!-- Mobile Nav -->
  <div class="py-4 px-2 flex md:hidden justify-between items-center relative">
    <img
      src="./../assets/images/logo.svg"
      alt=""
      class="w-[150px] sm:w-[200px] lg:w-full"
    >
    <div class="flex gap-1 items-center">
      <AppLanguageSwitcher class="cursor-pointer lg:top-[31px] relative md:top-[29.5px] font-[Geomanist-Bold] text-ed-green  text-[14px] lg:text-[19px]" />
      <BurgerMenuIcon @open-nav="(data) => openNav = data" />
    </div>
    <div
      class="w-[0px] overflow-hidden h-[calc(100vh-60px)] bg-ed-green flex flex-col justify-center items-center gap-8 transition-all duration-300 absolute left-0 top-[60px] z-30" 
      :class="{'w-[100%]' : openNav}"
    >
      <a
        v-for="navLink in navigationLinks"
        :key="navLink.title"
        href="#!"
        class="font-[Geomanist-Bold] uppercase font-bol text-ed-yellow align-middle text-[30px] whitespace-nowrap active:text-white"
      >
        <p
          class="transform translate-y-0.5"
        >
          {{ navLink.title }}
        </p>
      </a>
    </div>
  </div>
</template>

<style scoped>
</style>