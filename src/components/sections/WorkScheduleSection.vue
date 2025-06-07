<script setup>
import { inject } from "vue";
import { useStore } from "../../stores";
import { storeToRefs } from "pinia";

const translations = inject("translations");
const store = useStore();
const { currentLanguage } = storeToRefs(store);

import AppButton from "../AppButton.vue";

const images = inject("images");

const redirectToMap = () => {
  window.open("https://maps.app.goo.gl/1Prz4EZULEiNHcvJA?g_st=ic ", "_blank");
};
</script>

<template>
  <div class="leading-11">
    <img :src="images.kitchenImg.image" class="w-full h-[605px] object-cover" />
    <div id="schedule" />
    <div class="px-5 py-10 grid-bg md:py-40">
      <div
        class="max-w-[300px] md:max-w-[640px] mx-auto flex flex-col items-start gap-5 relative"
      >
        <img
          src="../../assets/images/pinkbrocolli.png"
          class="hidden lg:block absolute top-[-250px] left-[-300px] w-[300px]"
          alt=""
        />
        <img
          src="../../assets/images/strawberry.png"
          class="hidden lg:block absolute bottom-[-250px] right-[-170px] z-50 w-[250px]"
          alt=""
        />
        <h2
          class="font-[Geomanist-Bold] text-[20px] md:text-[45px] text-ed-red uppercase"
        >
          Notre-Dame-de-Lorette <br />
          1 rue Bourdaloue 75009
        </h2>
        <div
          class="flex items-center font-[Geomanist-Bold] text-[20px] md:text-[45px] text-ed-red uppercase justify-between w-full"
        >
          <div>
            <h2>{{ translations[currentLanguage].schedule.fromMonday }}</h2>
            <h2>{{ translations[currentLanguage].schedule.friday }}</h2>
          </div>
          <div>
            <h2>11:30 - 15:00</h2>
            <h2>18:30 - 22:15</h2>
          </div>
        </div>
        <div
          class="flex items-center font-[Geomanist-Bold] text-[20px] md:text-[45px] text-ed-red uppercase justify-between w-full"
        >
          <div>
            <h2>
              {{ translations[currentLanguage].schedule.saturday }} &
              {{ translations[currentLanguage].schedule.sunday }}
            </h2>
          </div>
          <div>
            <h2 class="whitespace-nowrap">11:30-16:30</h2>
            <h2 class="whitespace-nowrap">17:30 - 22:00</h2>
          </div>
        </div>
        <h2
          class="font-[Geomanist-Bold] mt-4 text-[20px] md:text-[45px] text-ed-red uppercase"
        >
          Washington <br />
          30 rue washington 75008
        </h2>
        <div
          class="flex items-center font-[Geomanist-Bold] text-[20px] md:text-[45px] text-ed-red uppercase justify-between w-full"
        >
          <div>
            <h2>{{ translations[currentLanguage].schedule.fromMonday }}</h2>
            <h2>{{ translations[currentLanguage].schedule.friday }}</h2>
          </div>
          <div>
            <h2 class="whitespace-nowrap">11:30 - 15:00</h2>
            <h2 class="whitespace-nowrap">18:30 - 22:15</h2>
          </div>
        </div>

        <h2
          class="font-[Geomanist-Bold] mt-4 text-[20px] md:text-[45px] text-ed-red uppercase"
        >
          NEUILLY <br />
          151 avenue Charles de Gaulle 92200
        </h2>
        <div
          class="flex items-center font-[Geomanist-Bold] text-[20px] md:text-[45px] text-ed-red uppercase justify-between w-full"
        >
          <div>
            <h2>{{ translations[currentLanguage].schedule.fromMonday }}</h2>
            <h2>{{ translations[currentLanguage].schedule.friday }}</h2>

          </div>
          <div>
            <h2 class="whitespace-nowrap">11:30 - 15:00</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-bg {
  background-image: url("../../assets/images/grid.png");
  background-size: contain;
}
</style>
