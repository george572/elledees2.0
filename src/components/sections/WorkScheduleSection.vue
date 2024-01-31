<script setup>
import { inject} from 'vue';

import AppButton from '../AppButton.vue';

const images = inject('images');
</script>

<template>
  <div>
    <img
      :src="images.kitchenImg.image"
      class="w-full"
    >
    <div class="px-5 py-10 grid-bg md:py-40">
      <div class="max-w-[300px] md:max-w-[640px] mx-auto flex flex-col items-start gap-10 relative">
        <img
          id="workScheduleSection"
          src="../../assets/images/pinkbrocolli.png"
          class="hidden lg:block absolute top-[-250px] left-[-300px] w-[300px]"
          alt=""
        >
        <img
          src="../../assets/images/strawberry.png"
          class="hidden lg:block absolute bottom-[-250px] right-[-170px] z-50 w-[250px]"
          alt=""
        >
        <div class="flex items-center font-[Geomanist-Bold] text-[20px] md:text-[45px] text-ed-red uppercase justify-between w-full">
          <div>
            <h2>du lundi</h2>
            <h2>au vendredi</h2>
          </div>
          <div>
            <h2>12:00 - 15:00</h2>  
            <h2>18:45 - 22:15</h2>
          </div>
        </div>
        <div class="flex items-center font-[Geomanist-Bold] text-[20px] md:text-[45px] text-ed-red uppercase justify-between w-full">
          <div>
            <h2>samedi</h2>
          </div>
          <div>
            <h2>11:30 - 16:00</h2>
          </div>
        </div>
        <div class="flex items-center font-[Geomanist-Bold] text-[20px] md:text-[45px] text-ed-red uppercase justify-between w-full">
          <div>
            <h2>dimanche</h2>
          </div>
          <div>
            <h2>11:30 - 15:30</h2>
          </div>
        </div>
        <AppButton :additional-styles="'max-w-[445px] text-[12px] md:text-[18px] w-full border border-ed-green text-ed-green mt-5 mx-auto'">
          1 RUE BOURDALOUE 75009 PARIS
        </AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped>

.grid-bg {
    background-image: url("../../assets/images/grid.png");
    background-size: 100%;
    background-repeat: none;
}
</style>