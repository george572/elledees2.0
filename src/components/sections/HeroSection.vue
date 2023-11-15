<script setup lang='ts'>
import AppButton from '../AppButton.vue';
</script>

<template>
  <div class="hero-section-wrapper w-full h-screen relative">
    <div class="absolute top-0 left-0 bg-black w-full h-full opacity-20" />
    <div class="relative z-10 flex flex-col items-center justify-center gap-5 h-full px-5">
      <h1 class="text-[60px] text-center xl:text-left md:text-[130px] xl:text-[130px] mx-auto font-[Cardinal] text-white leading-[50px] md:leading-[110px] xl:leading-[110px] uppercase max-w-[980px] mb-[80px]">
        Massively Healthy & incredibly fresh
      </h1>
      <AppButton :additional-styles="'text-ed-green'">
        Click & Collect
      </AppButton>
    </div>
  </div>
</template>

<style scoped>

.hero-section-wrapper {
    background-image: url("../../assets/images/hero-img.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>