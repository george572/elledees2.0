<template>
  <section id="story" class="section story">
    <div class="container story-grid">
      <div class="reveal">
        <p class="section-label">About us</p>
        <h2 class="section-title">A studio built for the feel of the spin.</h2>
      </div>
      <div class="reveal story-body">
        <p>
          Bedigames is a slot game provider studio focused on how players
          actually engage — the pause before a reel stops, the tension of a near
          miss, the quiet satisfaction of a well-timed win.
        </p>
        <p>
          We design with restraint: deep atmospheres, clear mechanics, and
          moments that reward attention. Less noise. More presence. Games that
          feel considered from the first spin to the last.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story {
  background: var(--bg-elevated);
  border-block: 1px solid var(--line);
}

.story-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1.1fr 1fr;
  align-items: end;
}

.story-body {
  display: grid;
  gap: 1.1rem;
  color: var(--muted);
  font-size: 1.05rem;
}

.story-body p:first-child {
  color: var(--cream);
}

@media (max-width: 800px) {
  .story-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}
</style>
