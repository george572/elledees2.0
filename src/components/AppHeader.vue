<script setup>
import { inject, ref, watch, computed } from 'vue';
import { useStore } from '@/stores/index'
import AppLanguageSwitcher from './AppLanguageSwitcher.vue'
import BurgerMenuIcon from './BurgerMenuIcon.vue'
import { useRouter, useRoute } from 'vue-router';


const store = useStore();
const router = useRouter();
const currentRoute = useRoute();
const translations = inject('translations');
const currentLanguage = ref(store.currentLanguage);
const openNav = ref(false);

const navigationLinks = [
  {
    title: translations[currentLanguage.value].header.navigation.clickCollect,
    to : "/click-and-collect",
  },
  {
    title: translations[currentLanguage.value].header.navigation.menu,
    href : "#salads-list",
    to: "/"
  },
  {
    title: 'logo',
    to: "/",
    href: "#header"
  },
  {
    title: translations[currentLanguage.value].header.navigation.hours,
    href : "#schedule",
    to: "/"
  },
  {
    title: translations[currentLanguage.value].header.navigation.contact,
    href : "#contact",
    to: "/"
  },
]

const computedNavLinks = computed(() => {
  return navigationLinks.filter((navLink) => navLink.title !== 'logo');
})

const navigateTo = (route) => {
  openNav.value = false
  if (!route) return;
  router.push(route);
}

watch(openNav, () => {
  if (openNav.value) {
    return document.body.style.overflow = 'hidden';
  } 
  document.body.style.overflow = 'visible';
})
</script>

<template>
  <!-- Desktop Nav -->
  <div
    class="hidden md:flex gap-8 items-center justify-center py-6 mx-auto sticky top-0 z-40 bg-white h-[84px]"
  >
    <a
      v-for="navLink in navigationLinks"
      :key="navLink.title"
      :href="navLink.href"
      class="cursor-pointer font-[Geomanist-Bold] uppercase text-ed-green align-middle text-[14px] lg:text-[19px] transition-all duration-50 active:text-ed-yellow"
      @click="navigateTo(navLink.to)"
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
    <AppLanguageSwitcher class="absolute right-[45px] z-50 cursor-pointer lg:top-[30px] md:top-[32px] font-[Geomanist-Bold] text-ed-green  text-[14px] lg:text-[19px]" />
  </div>

  <!-- Mobile Nav -->
  <div class="sticky top-0 z-50 flex items-center justify-between px-2 py-4 bg-white md:hidden">
    <a
      href="#header" 
      @click="navigateTo('/')"
    >
      <img
        src="./../assets/images/logo.svg"
        alt=""
        class="w-[150px] sm:w-[200px] lg:w-full cursor-pointer"
      >
    </a>
    <div class="flex items-center gap-1">
      <AppLanguageSwitcher class="cursor-pointer lg:top-[31px] relative md:top-[27.1px] font-[Geomanist-Bold] text-ed-green text-[14px] lg:text-[19px]" />
      <BurgerMenuIcon
        :open-nav="openNav"
        @click="openNav = !openNav"
      />
    </div>
    <div
      class="w-[0px] overflow-hidden h-[calc(100vh-50px)] bg-ed-green flex flex-col justify-center items-center gap-8 transition-all duration-300 absolute left-0 top-[56px] z-30" 
      :class="{'w-[100%]' : openNav}"
    >
      <a
        v-for="navLink in computedNavLinks"
        :key="navLink.title"
        :href="navLink.href"
        class="font-[Geomanist-Bold] uppercase font-bol text-ed-yellow align-middle text-[30px] whitespace-nowrap active:text-white"
        @click="navigateTo(navLink.to)"
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

<style>
</style>