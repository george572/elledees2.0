<script setup lang='ts'>
defineProps({
    data: {
        type: Object,
        required: true
    },
})
</script>

<template>
  <div
    class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-0 px-2 transition-all duration-200 md:px-20 sm:gap-5 bg-opacity-80"
    :class="data.customClass"
  >
    <h1 class="font-[Cardinal] text-[18px] sm:text-[60px] leading-[20px] sm:leading-[50px] lg:text-[140px] text-center lg:leading-[120px]">
      {{ data.name }}
    </h1>
    <p class="font-[Geomanist-Bold] text-[14px] sm:text-[25px] lg:text-[35px] text-center max-w-[457px]">
      {{ data.sauceName }}
    </p>
    <p class="font-[Geomanist-Bold] text-[12px] leading-[12px] sm:leading-[20px] sm:text-[16px] lg:text-[18px] text-center max-w-[320px]">
      {{ data.ingredients }}
    </p>
  </div>
</template>
