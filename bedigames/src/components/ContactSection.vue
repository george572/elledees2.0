<script setup>
import { ref } from 'vue'

const sent = ref(false)
const form = ref({
  name: '',
  email: '',
  message: '',
})

function onSubmit(event) {
  event.preventDefault()
  sent.value = true
}
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container contact-grid">
      <div class="reveal">
        <p class="section-label">Contact us</p>
        <h2 class="section-title">Let’s build the next engagement.</h2>
        <p class="section-copy">
          Studios, operators, and partners — reach out for demos, integrations,
          or a conversation about what Bedigames can craft next.
        </p>
        <div class="direct">
          <a class="direct-link" href="mailto:hello@bedigames.com">hello@bedigames.com</a>
        </div>
      </div>

      <form class="reveal contact-form" @submit="onSubmit">
        <p v-if="sent" class="form-success" role="status">
          Thanks — we’ll be in touch shortly.
        </p>
        <template v-else>
          <label>
            <span>Name</span>
            <input v-model="form.name" type="text" name="name" autocomplete="name" required />
          </label>
          <label>
            <span>Email</span>
            <input v-model="form.email" type="email" name="email" autocomplete="email" required />
          </label>
          <label>
            <span>Message</span>
            <textarea
              v-model="form.message"
              name="message"
              rows="5"
              required
              placeholder="Tell us what you’re looking for"
            />
          </label>
          <button class="cta" type="submit">Send message</button>
        </template>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--velvet);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
}

.direct {
  margin-top: 1.75rem;
}

.direct-link {
  color: var(--gold);
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 600;
  cursor: pointer;
}

.direct-link:hover {
  color: var(--cream);
}

.contact-form {
  display: grid;
  gap: 1rem;
  padding: 1.4rem;
  border-radius: var(--radius);
  background: var(--bg);
  box-shadow: var(--shadow-soft);
}

.contact-form label {
  display: grid;
  gap: 0.45rem;
  cursor: pointer;
}

.contact-form span {
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg-elevated);
  color: var(--cream);
  padding: 0.85rem 0.95rem;
  box-shadow: inset 0 1px 0 rgba(243, 235, 227, 0.03);
  resize: vertical;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: 2px solid var(--gold-muted);
  outline-offset: 1px;
  border-color: transparent;
}

.contact-form .cta {
  justify-self: start;
  margin-top: 0.35rem;
}

.form-success {
  color: var(--cream);
  font-family: var(--font-display);
  font-size: 1.5rem;
  padding: 1rem 0.25rem;
}

@media (max-width: 800px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
}
</style>
