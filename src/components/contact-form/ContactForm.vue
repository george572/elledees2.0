<script setup lang="ts">
import ContactFormInput from './ContactFormInput.vue';
import AppButton from '../AppButton.vue';
import { inject, ref } from 'vue';
import { useStore } from '../../stores';
import { storeToRefs } from 'pinia';

const translations = inject('translations');
const store = useStore();
const { currentLanguage } = storeToRefs(store);

const isSubmitting = ref(false);
const submitMessage = ref('');

const sendEmail = async () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  isSubmitting.value = true;
  submitMessage.value = '';

  try {
    const formData = new FormData(form);
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      submitMessage.value = 'Message sent successfully!';
      form.reset();
    } else {
      submitMessage.value = 'Failed to send message. Please try again.';
    }
  } catch (error) {
    submitMessage.value = 'An error occurred. Please try again.';
    console.error('Form submission error:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <form id="contact-form" class="flex flex-col gap-5 max-w-[832px] w-full mx-auto mt-8 justify-center relative">
    <input type="hidden" name="access_key" value="8d455dcd-027b-4578-9304-eed2e270a74c">

    <div class="flex gap-5 flex-col lg:flex-row items-center">
      <ContactFormInput name="first_name" :place-holder="translations[currentLanguage].contact.firstName" />
      <ContactFormInput name="last_name" :place-holder="translations[currentLanguage].contact.lastName" />
    </div>
    <div class="flex gap-5 flex-col lg:flex-row items-center">
      <ContactFormInput name="email" :place-holder="'email'" />
      <ContactFormInput name="tel" :place-holder="'tel'" />
    </div>
    <div class="w-full flex justify-center max-w-[406px] lg:max-w-[832px] mx-auto">
      <ContactFormInput
        :place-holder="translations[currentLanguage].contact.message"
        :is-text-area="true"
        name="message"
      />
    </div>
    
    <!-- Submit message display -->
    <div v-if="submitMessage" class="text-center">
      <p :class="submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'">
        {{ submitMessage }}
      </p>
    </div>
    
    <div class="w-full flex justify-center">
      <AppButton
        :additional-styles="'text-ed-red bg-white mx-auto mt-4'"
        @click="sendEmail"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Sending...' : translations[currentLanguage].contact.submit }}
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
  </form>
</template>