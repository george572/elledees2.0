<script setup lang='ts'>
import { computed } from 'vue';
import HeroSection from '../components/sections/HeroSection.vue';
import DiscoverSalads from '../components/sections/DiscoverSalads.vue';
import SaladsListSection from '../components/sections/SaladsListSection.vue';
import WorkScheduleSection from '../components/sections/WorkScheduleSection.vue';
import SliderSection from '../components/sections/SliderSection.vue';
import ContactUsSection from '../components/sections/ContactUsSection.vue';
import AboutUsSection from '../components/sections/AboutUsSection.vue';
import AppFooter from '../components/AppFooter.vue';
import OurValuesSection from '../components/sections/OurValuesSection.vue';

const isMobile = computed(() => window.innerWidth < 768);


</script>

<template>
  <div>
    <HeroSection />
    <div
      v-if="!isMobile"
      ref="parallaxImage"
      class="h-[188px] md:h-[288px] parallax bg-ed-pink relative"
    >
      <img
        src="./../assets/images/brocolli.png"
        alt=""
        class="absolute left-0 right-0 mx-auto bottom-[-70px] md:bottom-[-200px] z-40 w-[200px] md:w-[439px]"
      >
    </div>
    <DiscoverSalads />
    <div class="min-h-[288px] parallax bg-ed-pink relative">
      <SaladsListSection />
    </div>
    <AboutUsSection />
    <!-- <OurValuesSection /> -->
    <WorkScheduleSection />
    <SliderSection />
    <div
      v-if="!isMobile"
      class="h-[188px] md:h-[288px] parallax bg-ed-pink relative"
    />
    <ContactUsSection />
    <AppFooter />
  </div>
</template>

<style scoped>
.parallax {
  background-image: url("../assets/images/parallax.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 51%;
  @media only screen and (max-width: 500px) {
    background-image: none;
  }
}
</style>