<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main class="legal">
    <div class="container">
      <p class="section-label">Legal</p>
      <h1 class="section-title">Terms of use</h1>
      <div class="legal-body">
        <p>
          By accessing Bedigames.com you agree to use the site for lawful,
          informational, and demo purposes only. Game demos are provided for
          evaluation and entertainment; they do not constitute an offer of
          real-money gambling unless explicitly stated by a licensed operator.
        </p>
        <p>
          All branding, artwork, mechanics descriptions, and software previews
          on this site remain the property of Bedigames or its licensors. You
          may not copy, redistribute, or reverse-engineer our materials without
          prior written consent.
        </p>
        <p>
          We may update these terms as the studio and product suite evolve.
          Continued use of the site after changes constitutes acceptance of the
          revised terms.
        </p>
        <p>
          For questions, contact
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
