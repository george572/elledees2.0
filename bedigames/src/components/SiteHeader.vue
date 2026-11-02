<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const open = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 12
}

function close() {
  open.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="header" :class="{ scrolled, open }">
    <div class="container header-inner">
      <RouterLink class="brand" to="/" @click="close">Bedigames</RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="site-nav"
        aria-label="Toggle navigation"
        @click="open = !open"
      >
        <span />
        <span />
      </button>

      <nav id="site-nav" class="nav" :class="{ open }">
        <a class="nav-link" href="#story" @click="close">About</a>
        <a class="nav-link" href="#game" @click="close">Game</a>
        <a class="nav-link" href="#contact" @click="close">Contact</a>
        <a class="nav-link nav-cta" href="#contact" @click="close">Get in touch</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(10, 7, 8, 0.72);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.header.scrolled {
  border-bottom-color: var(--line);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4.25rem;
  gap: 1rem;
}

.brand {
  font-family: var(--font-display);
  font-size: 1.7rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--cream);
  cursor: pointer;
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--muted);
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--cream);
}

.nav-cta {
  color: var(--cream);
  background: var(--velvet);
  padding: 0.55rem 1rem;
  border-radius: var(--radius-sm);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
}

.nav-cta:hover {
  color: var(--cream);
  background: var(--velvet-mid);
}

.menu-toggle {
  display: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-sm);
  background: var(--bg-elevated);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  place-items: center;
  gap: 5px;
  flex-direction: column;
}

.menu-toggle span {
  display: block;
  width: 1rem;
  height: 1.5px;
  background: var(--cream);
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.header.open .menu-toggle span:first-child {
  transform: translateY(3.25px) rotate(45deg);
}

.header.open .menu-toggle span:last-child {
  transform: translateY(-3.25px) rotate(-45deg);
}

@media (max-width: 720px) {
  .menu-toggle {
    display: flex;
  }

  .nav {
    position: absolute;
    inset: 100% 0 auto;
    display: grid;
    gap: 0.25rem;
    padding: 0.75rem 1rem 1.1rem;
    background: var(--bg-elevated);
    border-bottom: 1px solid var(--line);
    box-shadow: var(--shadow-soft);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-6px);
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .nav.open {
    opacity: 1;
    pointer-events: auto;
    transform: none;
  }

  .nav-link {
    padding: 0.85rem 0.4rem;
  }

  .nav-cta {
    justify-self: start;
    margin-top: 0.35rem;
  }
}
</style>
