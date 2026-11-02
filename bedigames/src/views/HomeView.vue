<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import StorySection from '../components/StorySection.vue'
import GameSection from '../components/GameSection.vue'
import ContactSection from '../components/ContactSection.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { useReveal } from '../composables/useReveal'

useReveal()
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <StorySection />
    <GameSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
