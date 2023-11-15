<script setup lang='ts'>
defineProps({
    additionalStyles : {
        type: String,
        required: true
    },
})
</script>

<template>
  <button
    class="w-[275px] h-[57px] uppercase rounded-[54px] bg-white hover:bg-ed-pink hover:text-ed-red font-[Geomanist-Bold] text-[18px] transition-all duration-175"
    :class="additionalStyles"
  >
    <slot>Text</slot>
  </button>
</template>