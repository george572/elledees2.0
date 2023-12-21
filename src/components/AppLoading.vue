<script setup lang="ts">
import   { onMounted, ref } from 'vue';

defineProps({
  loadingProgress: {
    type: Number,
    required: true
  }
});

onMounted(() => {
  const images = ['strawberry', 'brocolli', 'pinkBrocolli', 'bulgar', 'grape'];
  let count = 0;
  setInterval(() => {
    if (count < images.length) {
      currentImage.value = images[count];
      count++;
    } else {
      count = 0;
    }
  }, 100);
});

const currentImage = ref();


</script>

<template>
  <div class="absolute top-0 left-0 flex w-full h-[101vh] text-4xl bg-ed-pink flex-col justify-between py-[134px] items-center">
    <h2 class="font-[Cardinal] text-[300px] uppercase tracking-tight text-ed-red">
      Elle&Dee's
    </h2>
    <div class="w-[300px] h-[300px] relative mt-20">
      <TransitionGroup mode="out-in">
        <img
          v-if="currentImage === 'strawberry'"
          src="../assets/images/strawberry.png"
          class="absolute top-0 left-0 object-contain w-full h-full"
        >
        <img
          v-if="currentImage === 'brocolli'"
          src="../assets/images/brocolli.png"
          class="absolute top-0 left-0 object-contain w-full h-full"
        >
        <img
          v-if="currentImage === 'pinkbrocolli'"
          src="../assets/images/pinkbrocolli.png"
          class="absolute top-0 left-0 object-contain w-full h-full"
        >
        <img
          v-if="currentImage === 'bulgar'"
          src="../assets/images/bulgar.png"
          class="absolute top-0 left-0 object-contain w-full h-full"
        >
        <img
          v-if="currentImage === 'grape'"
          src="../assets/images/grape.png"
          class="absolute top-0 left-0 object-contain w-full h-full"
        >
      </TransitionGroup>
    </div>
    <span class="font-[Cardinal] text-[65px] uppercase tracking-tight text-ed-red">{{ Math.floor(loadingProgress) }}%</span>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 100ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>