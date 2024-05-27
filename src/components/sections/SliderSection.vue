<script setup>
import { onMounted } from 'vue';
import Glide from '@glidejs/glide';

onMounted(() => {
  new Glide('.glide', {
      gap: 0,
      type: 'carousel',
      animationDuration: 1400,
      perView: 1,
      autoplay: 4000,
    }).mount({});
});
</script>

<template>
  <div class="relative max-w-full pb-20 glide">
    <div
      class="glide__track"
      data-glide-el="track"
    >
      <ul class="glide__slides">
        <li class="glide__slide w-full sm:min-w-[500px] lg:min-w-[600px]">
          <img
            src="../../assets/images/non.jpg"
            alt=""
            class="h-[327px] md:h-[600px] object-cover sm:min-w-[759px] w-full"
          >
        </li>
        <li class="glide__slide w-full sm:min-w-[500px] lg:min-w-[600px]">
          <img
            src="../../assets/images/non3.jpg"
            alt=""
            class="h-[327px] md:h-[600px] object-cover w-full sm:min-w-[759px]"
          >
        </li>
        <li class="glide__slide w-full sm:min-w-[500px] lg:min-w-[600px]">
          <img
            src="../../assets/images/non4.jpg"
            alt=""
            class="h-[327px] md:h-[600px] object-cover w-full sm:min-w-[759px]"
          >
        </li>
        <li class="glide__slide w-full sm:min-w-[500px] lg:min-w-[600px]">
          <img
            src="../../assets/images/non6.jpg"
            alt=""
            class="h-[327px] md:h-[600px] object-cover w-full sm:min-w-[759px]"
          >
        </li>
        <li class="glide__slide w-full sm:min-w-[500px] lg:min-w-[600px]">
          <img
            src="../../assets/images/non7.jpg"
            alt=""
            class="h-[327px] md:h-[600px] object-cover w-full sm:min-w-[759px]"
          >
        </li>
        <li class="glide__slide w-full sm:min-w-[500px] lg:min-w-[600px]">
          <img
            src="../../assets/images/non9.jpg"
            alt=""
            class="h-[327px] md:h-[600px] object-cover w-full sm:min-w-[759px]"
          >
        </li>
        <li class="glide__slide w-full sm:min-w-[500px] lg:min-w-[600px]">
          <img
            src="../../assets/images/non10.jpg"
            alt=""
            class="h-[327px] md:h-[600px] object-cover w-full sm:min-w-[759px]"
          >
        </li>
      </ul>
    </div>
    <div
      class="glide__arrows absolute bottom-[-45px] z-30 flex h-[169px] w-full items-center justify-between px-3"
      data-glide-el="controls"
    >
      <button
        class="glide__arrow glide__arrow--left"
        data-glide-dir="<"
      >
        <div class="flex items-center justify-center rounded-full">
          <img
            src="../../assets/images/arrow.svg"
            alt=""
          >
        </div>
      </button>
      <button
        class="glide__arrow glide__arrow--right"
        data-glide-dir=">"
      >
        <div class="flex items-center justify-center rounded-full">
          <img
            src="../../assets/images/arrow.svg"
            alt=""
            class="transform rotate-180"
          >
        </div>
      </button>
    </div>
  </div>
</template>

<style>
@import "@glidejs/glide/src/assets/sass/glide.core.scss";
</style>