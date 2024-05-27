<script setup lang="ts">
import ContactFormInput from './ContactFormInput.vue';
import AppButton from '../AppButton.vue';
import { inject } from 'vue';
import { useStore } from '../../stores';
import { storeToRefs } from 'pinia';

const translations = inject('translations');
const store = useStore();
const { currentLanguage } = storeToRefs(store);
</script>

<template>
  <div class="flex flex-col gap-5 max-w-[832px] w-full mx-auto mt-8 justify-center relative">
    <div class="flex gap-5 flex-col lg:flex-row items-center">
      <ContactFormInput :place-holder="translations[currentLanguage].contact.firstName" />
      <ContactFormInput :place-holder="translations[currentLanguage].contact.lastName" />
    </div>
    <div class="flex gap-5 flex-col lg:flex-row items-center">
      <ContactFormInput :place-holder="'email'" />
      <ContactFormInput :place-holder="'tel'" />
    </div>
    <div class="w-full flex justify-center max-w-[406px] lg:max-w-[832px] mx-auto">
      <ContactFormInput
        :place-holder="translations[currentLanguage].contact.message"
        :is-text-area="true"
      />
    </div>
    <div class="w-full flex justify-center">
      <AppButton
        :additional-styles="'text-ed-red bg-white mx-auto mt-4'"
        @click="sendEmail"
      >
        {{ translations[currentLanguage].contact.submit }}
      </AppButton>
    </div>
    <img
      src="../../assets/images/bulgar.png"
      class="hidden xl:block absolute right-[-200px] top-[-280px] w-[200px]"
    >
    <img
      src="../../assets/images/grape.png"
      class="hidden xl:block absolute left-[-200px] bottom-[-230px] w-[300px]"
    >
  </div>
</template>