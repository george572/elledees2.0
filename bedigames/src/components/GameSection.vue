<template>
  <section id="game" class="section game">
    <div class="container">
      <div class="reveal game-intro">
        <p class="section-label">Our exclusive game</p>
        <h2 class="section-title">Lucky Spin</h2>
        <p class="section-copy">
          A focused three-reel experience with cascading near-miss tension,
          hold-&amp;-respin moments, and a clean payout rhythm designed for
          mobile play.
        </p>
        <a class="cta play-link" href="/game/index.html" target="_blank" rel="noopener">
          Play Lucky Spin
        </a>
      </div>

      <div class="reveal machine" aria-hidden="true">
        <div class="machine-frame">
          <div class="reel" v-for="(col, i) in reels" :key="i">
            <span v-for="(sym, j) in col" :key="j" class="symbol">{{ sym }}</span>
          </div>
        </div>
        <p class="machine-caption">Preview — open the game to spin</p>
      </div>

      <div class="reveal mechanics">
        <h3 class="mechanics-title">Mechanics</h3>
        <ul class="mechanics-list">
          <li v-for="item in mechanics" :key="item.title">
            <strong>{{ item.title }}</strong>
            <span>{{ item.copy }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const reels = [
  ['7', '◆', '★'],
  ['★', '7', '◆'],
  ['◆', '★', '7'],
]

const mechanics = [
  {
    title: 'Three classic reels',
    copy: 'A tight symbol set keeps every spin readable and decisive on a phone screen.',
  },
  {
    title: 'Near-miss tension',
    copy: 'Stops are paced so almost-wins linger just long enough to pull the next spin.',
  },
  {
    title: 'Hold & respin',
    copy: 'Lock promising reels and chase the line — a deliberate second chance, not noise.',
  },
  {
    title: 'Clear payout rhythm',
    copy: 'Wins land with soft emphasis and a straightforward paytable — no cluttered overlays.',
  },
]
</script>

<style scoped>
.game-intro {
  max-width: 36rem;
  margin-bottom: 2.5rem;
}

.play-link {
  margin-top: 1.5rem;
}

.machine {
  margin-bottom: 3rem;
}

.machine-frame {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  max-width: 420px;
  padding: 1.15rem;
  border-radius: 24px;
  background: var(--velvet);
  box-shadow: var(--shadow-soft);
}

.reel {
  display: grid;
  gap: 0.55rem;
  padding: 0.75rem 0.5rem;
  border-radius: 16px;
  background: var(--bg);
  box-shadow: inset 0 1px 0 rgba(243, 235, 227, 0.04), 0 8px 20px rgba(0, 0, 0, 0.25);
}

.symbol {
  display: grid;
  place-items: center;
  min-height: 3.2rem;
  border-radius: 12px;
  background: var(--bg-elevated);
  color: var(--gold);
  font-family: var(--font-display);
  font-size: 1.55rem;
  font-weight: 600;
}

.machine-caption {
  margin-top: 0.85rem;
  color: var(--muted);
  font-size: 0.88rem;
}

.mechanics-title {
  font-family: var(--font-display);
  font-size: clamp(1.7rem, 4vw, 2.2rem);
  font-weight: 600;
  margin-bottom: 1.25rem;
}

.mechanics-list {
  list-style: none;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.mechanics-list li {
  padding: 1.25rem 1.3rem;
  border-radius: var(--radius);
  background: var(--bg-elevated);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);
  display: grid;
  gap: 0.45rem;
}

.mechanics-list strong {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--cream);
}

.mechanics-list span {
  color: var(--muted);
  font-size: 0.98rem;
}

@media (max-width: 720px) {
  .mechanics-list {
    grid-template-columns: 1fr;
  }

  .machine-frame {
    max-width: none;
  }
}
</style>
