<script setup lang='ts'>
import { inject, watch, ref, onMounted } from 'vue';
import { useStore } from '../stores';
import { storeToRefs } from 'pinia';

const translations = inject('translations');
const store = useStore();
const { currentLanguage } = storeToRefs(store);
const pdfSrc = ref("")

onMounted(() => {
    currentLanguage.value === 'fr' ? pdfSrc.value = 'https://drive.google.com/file/d/1cwfneQJ9TZV_6sT0t6z05liyxcz8jZwi/preview':
    pdfSrc.value = 'https://drive.google.com/file/d/1ZKD13gBo6EEYBte10w8bajQkh9t2tyu0/preview' 
})
watch(currentLanguage, () => {
    currentLanguage.value === 'fr' ? pdfSrc.value = 'https://drive.google.com/file/d/1cwfneQJ9TZV_6sT0t6z05liyxcz8jZwi/preview':
    pdfSrc.value = 'https://drive.google.com/file/d/1ZKD13gBo6EEYBte10w8bajQkh9t2tyu0/preview'
})
</script>

<template>
  <iframe
    id="menu"
    :src="pdfSrc"
    frameborder="0"
    class="w-full h-screen"
  />
</template>