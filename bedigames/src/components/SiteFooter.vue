<script setup>
import { ref } from 'vue'

const year = new Date().getFullYear()
const sent = ref(false)
const form = ref({ name: '', email: '', note: '' })

function onSubmit(event) {
  event.preventDefault()
  sent.value = true
}
</script>

<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <p class="footer-brand">Bedigames</p>
        <p class="footer-tag">Slot experiences, redefined.</p>
      </div>

      <nav class="footer-nav" aria-label="Legal">
        <RouterLink class="footer-link" to="/terms">Terms</RouterLink>
        <RouterLink class="footer-link" to="/privacy">Privacy</RouterLink>
        <a class="footer-link" href="mailto:hello@bedigames.com">Email</a>
      </nav>

      <form class="footer-form" @submit="onSubmit">
        <p class="footer-form-title">Stay in touch</p>
        <p v-if="sent" class="footer-success" role="status">Received — thank you.</p>
        <template v-else>
          <input v-model="form.name" type="text" name="name" placeholder="Name" required />
          <input v-model="form.email" type="email" name="email" placeholder="Email" required />
          <textarea v-model="form.note" name="note" rows="3" placeholder="Short note" required />
          <button class="cta-ghost" type="submit">Send</button>
        </template>
      </form>
    </div>
    <div class="container footer-base">
      <p>© {{ year }} Bedigames. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 3.5rem 0 2rem;
  background: var(--bg);
  border-top: 1px solid var(--line);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.8fr 1.2fr;
  gap: 2rem;
  align-items: start;
  padding-bottom: 2.5rem;
}

.footer-brand {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.footer-tag {
  color: var(--muted);
}

.footer-nav {
  display: grid;
  gap: 0.75rem;
}

.footer-link {
  color: var(--muted);
  font-weight: 500;
  width: fit-content;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--gold);
}

.footer-form {
  display: grid;
  gap: 0.65rem;
}

.footer-form-title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.footer-form input,
.footer-form textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg-elevated);
  color: var(--cream);
  padding: 0.75rem 0.9rem;
}

.footer-form input:focus,
.footer-form textarea:focus {
  outline: 2px solid var(--gold-muted);
  outline-offset: 1px;
  border-color: transparent;
}

.footer-form .cta-ghost {
  justify-self: start;
  min-height: 2.6rem;
  padding-inline: 1.2rem;
}

.footer-success {
  color: var(--gold);
  font-size: 0.95rem;
}

.footer-base {
  padding-top: 1.25rem;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.88rem;
}

@media (max-width: 800px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
}
</style>
