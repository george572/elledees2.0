<script setup lang='ts'>
import HeroSection from '../components/sections/HeroSection.vue';
import DiscoverSalads from '../components/sections/DiscoverSalads.vue';
import GallerySection from '../components/sections/GallerySection.vue';
</script>

<template>
  <div class="h-[6000px]">
    <HeroSection />
    <div class="h-[288px] parallax bg-ed-pink relative">
      <img
        src="./../assets/images/brocolli.png"
        alt=""
        class="absolute left-0 right-0 mx-auto bottom-[-70px] md:bottom-[-200px] z-40 w-[200px] md:w-[439px]"
      >
    </div>
    <DiscoverSalads />
    <div class="min-h-[288px] parallax bg-ed-pink relative">
      <GallerySection />
    </div>
  </div>
</template>

<style scoped>
.parallax {
  background-image: url("../assets/images/parallax.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 51%;
}
</style>