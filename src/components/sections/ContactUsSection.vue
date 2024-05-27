<script setup lang='ts'>
import ContactForm from '../contact-form/ContactForm.vue';
import { inject } from 'vue';
import { useStore } from '../../stores';
import { storeToRefs } from 'pinia';

const translations = inject('translations');
const store = useStore();
const { currentLanguage } = storeToRefs(store);

import AppButton from '../AppButton.vue';
</script>

<template>
  <div
    id="contact"
    class="flex flex-col items-center justify-center px-5 py-24 bg-ed-beige"
  >
    <h2 class="text-ed-green font-[Geomanist-Bold] text-[35px] md:text-[65px] uppercase text-center">
      {{ translations[currentLanguage].contact.title }}
    </h2>
    <ContactForm />
  </div>
</template>