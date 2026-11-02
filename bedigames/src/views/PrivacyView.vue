<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main class="legal">
    <div class="container">
      <p class="section-label">Legal</p>
      <h1 class="section-title">Privacy</h1>
      <div class="legal-body">
        <p>
          Bedigames collects only the information you choose to share through
          contact forms or direct email — typically your name, email address,
          and message content — so we can respond to inquiries.
        </p>
        <p>
          We do not sell personal data. Form submissions are used solely for
          studio communication and partnership follow-up. Analytics, if enabled
          later, will be configured with privacy in mind and disclosed here.
        </p>
        <p>
          Demo games run in your browser. Any local storage they use is for
          gameplay state on your device and is not transmitted to Bedigames
          unless a future online feature says otherwise.
        </p>
        <p>
          To request deletion of correspondence we hold, email
          <a class="legal-link" href="mailto:hello@bedigames.com">hello@bedigames.com</a>.
        </p>
      </div>
      <RouterLink class="cta-ghost back" to="/">Back to home</RouterLink>
    </div>
  </main>
  <SiteFooter />
</template>

<style scoped>
.legal {
  padding: 4.5rem 0 3rem;
  min-height: 60vh;
}

.legal-body {
  display: grid;
  gap: 1rem;
  max-width: 40rem;
  color: var(--muted);
  margin: 1.5rem 0 2rem;
}

.legal-link {
  color: var(--gold);
}

.back {
  display: inline-flex;
}
</style>
