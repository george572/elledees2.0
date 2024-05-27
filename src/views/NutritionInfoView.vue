<script setup lang='ts'>
import { ref, onMounted } from 'vue';
const pdfSrc = ref("");

onMounted(() => {
    pdfSrc.value = '../assets/nutrition-info.pdf';
});
</script>

<template>
  <iframe
    :src="'https://drive.google.com/file/d/1W7CDEXXUlOQJs6GV6qUzMf96edeCUsou/preview'"
    frameborder="0"
    class="w-full h-screen"
  />
</template>