<script setup>
</script>

<template>
  <section class="hero" aria-label="Bedigames introduction">
    <div class="hero-atmosphere" aria-hidden="true">
      <div class="velvet-panel left" />
      <div class="velvet-panel right" />
      <div class="gold-rule" />
    </div>

    <div class="container hero-content">
      <p class="brand-mark">Bedigames</p>
      <h1 class="headline">We redefine how slots are engaged with.</h1>
      <p class="support">
        A provider studio crafting immersive, deliberate slot experiences —
        where atmosphere, rhythm, and reward feel intentional.
      </p>
      <div class="cta-group">
        <a class="cta" href="#game">Explore our game</a>
        <a class="cta-ghost" href="#contact">Talk with us</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: min(100vh, 920px);
  display: grid;
  align-items: center;
  overflow: hidden;
  padding: 5rem 0 4.5rem;
  background: var(--bg);
}

.hero-atmosphere {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.velvet-panel {
  position: absolute;
  background: var(--velvet);
  box-shadow: var(--shadow-soft);
  border-radius: 28px;
}

.velvet-panel.left {
  width: min(42vw, 520px);
  height: min(70vh, 640px);
  left: -8%;
  top: 12%;
  opacity: 0.55;
  animation: settle-left 1.1s ease both;
}

.velvet-panel.right {
  width: min(36vw, 420px);
  height: min(48vh, 460px);
  right: -6%;
  bottom: 8%;
  background: var(--velvet-mid);
  opacity: 0.42;
  animation: settle-right 1.25s ease 0.08s both;
}

.gold-rule {
  position: absolute;
  left: 8%;
  right: 8%;
  bottom: 14%;
  height: 1px;
  background: var(--gold-muted);
  opacity: 0.28;
  transform-origin: left center;
  animation: draw-rule 1.2s ease 0.35s both;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 44rem;
  animation: rise 0.9s ease both;
}

.brand-mark {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 9vw, 5.4rem);
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: 0.01em;
  color: var(--cream);
  margin-bottom: 1.35rem;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
}

.headline {
  font-family: var(--font-display);
  font-size: clamp(1.7rem, 4.6vw, 2.55rem);
  font-weight: 500;
  font-style: italic;
  line-height: 1.2;
  color: var(--gold);
  margin-bottom: 1.1rem;
  max-width: 18ch;
}

.support {
  max-width: 34rem;
  color: var(--muted);
  font-size: clamp(1rem, 2.4vw, 1.12rem);
  margin-bottom: 2rem;
}

.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes settle-left {
  from {
    opacity: 0;
    transform: translate(-24px, 18px);
  }
  to {
    opacity: 0.55;
    transform: none;
  }
}

@keyframes settle-right {
  from {
    opacity: 0;
    transform: translate(24px, 18px);
  }
  to {
    opacity: 0.42;
    transform: none;
  }
}

@keyframes draw-rule {
  from {
    opacity: 0;
    transform: scaleX(0.2);
  }
  to {
    opacity: 0.28;
    transform: scaleX(1);
  }
}

@media (max-width: 720px) {
  .hero {
    min-height: 100svh;
    padding: 4.5rem 0 3.5rem;
    align-items: end;
  }

  .velvet-panel.left {
    width: 70vw;
    height: 48vh;
    top: 8%;
    left: -18%;
  }

  .velvet-panel.right {
    width: 55vw;
    height: 30vh;
    right: -20%;
    bottom: 18%;
  }

  .gold-rule {
    bottom: 10%;
  }

  .brand-mark {
    margin-bottom: 1rem;
  }

  .headline {
    max-width: none;
  }

  .cta-group {
    width: 100%;
  }

  .cta,
  .cta-ghost {
    flex: 1 1 auto;
  }
}
</style>
