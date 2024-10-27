<script setup>
import { inject, ref, watch, computed } from "vue";
import { useStore } from "@/stores/index";
import AppLanguageSwitcher from "./AppLanguageSwitcher.vue";
import BurgerMenuIcon from "./BurgerMenuIcon.vue";
import { useRouter, useRoute } from "vue-router";

const store = useStore();
const router = useRouter();
const currentRoute = useRoute();
const translations = inject("translations");
const currentLanguage = ref(store.currentLanguage);
const openNav = ref(false);

const navigationLinks = [
  {
    title: translations[currentLanguage.value].header.navigation.clickCollect,
    href: "https://elledees.zelty-order.fr/",
    to: "/",
    newTab: true,
  },
  {
    title: translations[currentLanguage.value].header.navigation.menu,
    to: "/menu-select",
  },
  {
    title: "logo",
    href: "#header",
    to: "/",
  },
  {
    title: translations[currentLanguage.value].header.navigation.about,
    href: "#aboutus",
    to: "/",
  },
  {
    title: translations[currentLanguage.value].header.navigation.contact,
    href: "#contact",
    to: "/",
  },
];

const computedNavLinks = computed(() => {
  return navigationLinks.filter((navLink) => navLink.title !== "logo");
});

const navigateTo = (routeEl) => {
  if (routeEl.newTab) {
    window.open(routeEl.href, '_blank');
  }
  if (routeEl.href) {
    router.push("/" + routeEl.href);
  } else {
    router.push(routeEl.to);
  }
  openNav.value = false;
};

watch(openNav, () => {
  if (openNav.value) {
    return (document.body.style.overflow = "hidden");
  }
  document.body.style.overflow = "visible";
});
</script>

<template>
  <!-- Desktop Nav -->
  <div
    class="hidden md:flex gap-8 items-center justify-center py-6 mx-auto sticky top-0 z-40 bg-white h-[84px]"
  >
    <span
      v-for="navLink in navigationLinks"
      :key="navLink.title"
      class="cursor-pointer font-[Geomanist-Bold] uppercase text-ed-green align-middle text-[14px] lg:text-[19px] transition-all duration-50 active:text-ed-yellow"
      @click="navigateTo(navLink)"
    >
      <img
        v-if="navLink.title === 'logo'"
        src="./../assets/images/logo.svg"
        alt=""
        class="w-[200px] lg:w-full"
      />
      <p v-else class="transform translate-y-0.5">
        {{ navLink.title }}
      </p>
    </span>
    <AppLanguageSwitcher
      class="absolute right-[45px] z-50 cursor-pointer lg:top-[30px] md:top-[32px] font-[Geomanist-Bold] text-ed-green text-[14px] lg:text-[19px]"
    />
  </div>

  <!-- Mobile Nav -->
  <div
    class="sticky top-0 z-50 flex items-center justify-between px-2 py-4 bg-white md:hidden"
  >
    <span @click="router.push('/')">
      <img
        src="./../assets/images/logo.svg"
        alt=""
        class="w-[150px] sm:w-[200px] lg:w-full cursor-pointer"
      />
    </span>
    <div class="flex items-center gap-1">
      <AppLanguageSwitcher
        class="cursor-pointer lg:top-[31px] relative md:top-[27.1px] font-[Geomanist-Bold] text-ed-green text-[14px] lg:text-[19px]"
      />
      <BurgerMenuIcon :open-nav="openNav" @click="openNav = !openNav" />
    </div>
    <div
      class="w-[0px] overflow-hidden h-[calc(100vh-50px)] bg-ed-green flex flex-col justify-center items-center gap-8 transition-all duration-300 absolute left-0 top-[56px] z-30"
      :class="{ 'w-[100%]': openNav }"
    >
      <span
        v-for="navLink in computedNavLinks"
        :key="navLink.title"
        class="font-[Geomanist-Bold] uppercase font-bol text-ed-yellow align-middle text-[30px] whitespace-nowrap active:text-white"
        @click="navigateTo(navLink)"
      >
        <p class="transform translate-y-0.5">
          {{ navLink.title }}
        </p>
      </span>
    </div>
  </div>
</template>

<style></style>
