<script setup lang='ts'>
import { ref, onMounted } from 'vue';
const pdfSrc = ref("");

onMounted(() => {
    pdfSrc.value = '../assets/nutrition-info.pdf';
});
</script>

<template>
  <iframe
    :src="'https://drive.google.com/file/d/1bH3QPG-UpGQhlA76zpqtcVVBZrkjOOHo/preview'"
    frameborder="0"
    class="w-full h-screen"
  />
</template>