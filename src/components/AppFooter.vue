<script setup lang='ts'>
import { inject } from 'vue';
import { useStore } from '../stores';
import { storeToRefs } from 'pinia';

const translations = inject('translations');
const store = useStore();
const { currentLanguage } = storeToRefs(store);
</script>

<template>
  <div class="w-full bg-ed-yellow">
    <div class="pb-10 min-h-[200px] sm:min-h-[376px] flex items-center pt-10 md:pt-0 flex-col md:flex-row lg:items-end max-w-[1500px] gap-20 md:gap-0 justify-between mx-auto px-5">
      <div class="font-[Geomanist-Bold] text-[#60BE7E] text-[15px] flex flex-col md:flex-row gap-10">
        <div class="flex flex-col gap-1">
          <span>1 RUE BOURDALOUE 75009 PARIS</span>
          <span>30 RUE WASHINGTON 75008 PARIS</span>
          <span>151 avenue Charles de Gaulle 92200 Neuilly-Sur-Seine</span>
          <a href="mailto:HELLO@ELLEDEES.COM">HELLO@ELLEDEES.COM</a>
          <a href="tel:+33987373123">+33987373123</a>
          <router-link
            to="/terms"
            class="mt-0 md:mt-[51px]"
          >
            Terms & Conditions
          </router-link>
        </div>
      </div>
      <img
        src="./../assets/images/logo.svg"
        alt=""
        class="w-[300px] md:w-[200px]"
      >
    </div>
  </div>
</template>