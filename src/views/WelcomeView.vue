<script setup lang='ts'>
import AppButton from '../components/AppButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (route) => {
  router.push(route);
}
</script>

<template>
  <div class="min-h-screen w-full flex justify-center lg:justify-start flex-col items-center bg-ed-beige">
    <h2 class="font-[Cardinal] text-[50px] sm:text-[100px] lg:text-[200px] xl:text-[300px] uppercase tracking-tight text-ed-green">
      Elle&Dee's
    </h2>
    <div class="flex flex-col gap-3">
      <a
        href="https://www.google.com/maps/place/Elle+%26+Dee's/@48.8761903,2.3358873,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66f437815387d:0x228e8b50784d8044!8m2!3d48.8761868!4d2.3384622!16s%2Fg%2F11rkpdwk3g?entry=ttu"
        target="_blank"
      >
        <AppButton :additional-styles="'text-white hover:bg-transparent hover:border hover:border-ed-green hover:text-ed-green bg-ed-green'">
          Google
        </AppButton>
      </a>
      <a
        href="https://www.instagram.com/elle.and.dees/"
        target="_blank"
      >

        <AppButton :additional-styles="'text-white hover:bg-transparent hover:border hover:border-ed-green hover:text-ed-green bg-ed-green'">
          Instagram
        </AppButton>
      </a>
      <a
        href="https://open.spotify.com/user/qqd1fq3r9g8d9e1vu6o0fbcsl?si=W3maLkOaTlS_XEbXE9bTkw"
        target="_blank"
      >

        <AppButton :additional-styles="'text-white hover:bg-transparent hover:border hover:border-ed-green hover:text-ed-green bg-ed-green'">
          Spotify
        </AppButton>
      </a>
      <a
        href="https://deliveroo.fr/menu/paris/9eme-opera/vedji?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share"
        target="_blank"
      >
        <AppButton :additional-styles="'text-white hover:bg-transparent hover:border hover:border-ed-green hover:text-ed-green bg-ed-green'">
          Deliveroo
        </AppButton>
      </a>
      <AppButton
        :additional-styles="'text-white hover:bg-transparent hover:border hover:border-ed-green hover:text-ed-green bg-ed-green'"
        @click="navigateTo('/#salads-list')"
      >
        Catering 
      </AppButton>
      <AppButton
        :additional-styles="'text-white hover:bg-transparent hover:border hover:border-ed-green hover:text-ed-green bg-ed-green'"
        @click="navigateTo('/click-and-collect')"
      >
        Menu & More
      </AppButton>
    </div>
  </div>
</template>