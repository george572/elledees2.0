<script setup lang="ts">
import   { onMounted } from 'vue';

defineProps({
  loadingProgress: {
    type: Number,
    required: true
  }
})

</script>

<template>
  <div class="absolute top-0 left-0 flex items-center justify-center w-full h-[101vh] text-4xl bg-pink-400">
    Loading
    
    {{ Math.floor(loadingProgress) }}%
  </div>
</template>