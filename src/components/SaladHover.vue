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
    class="absolute top-0 left-0 w-full h-full bg-opacity-80 flex items-center justify-center gap-5 flex-col px-20 transition-all duration-200"
    :class="data.customClass"
  >
    <h1 class="font-[Cardinal] text-[60px] leading-[50px] lg:text-[140px] text-center lg:leading-[120px]">
      {{ data.name }}
    </h1>
    <p class="font-[Geomanist-Bold] text-[25px] lg:text-[35px] text-center max-w-[457px]">
      {{ data.sauceName }}
    </p>
    <p class="font-[Geomanist-Bold] text-[16px] lg:text-[18px] text-center max-w-[320px]">
      {{ data.ingredients }}
    </p>
  </div>
</template>
