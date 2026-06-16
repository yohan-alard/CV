<template>
  <div class="company-logo" :style="{ width: size + 'px', height: size + 'px' }">
    <img
      v-if="logo && !imgError"
      :src="logo"
      :alt="company"
      class="logo-img"
      @error="imgError = true"
    />
    <div v-else class="logo-fallback" :style="fallbackStyle">
      {{ initials }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  company: { type: String, required: true },
  logo: { type: String, default: null },
  size: { type: Number, default: 44 },
})

const imgError = ref(false)

const initials = computed(() => {
  return props.company
    .replace(/[^a-zA-ZÀ-ÿ0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('')
})

const PALETTE = [
  ['#dbeafe', '#1d4ed8'],
  ['#ede9fe', '#6d28d9'],
  ['#fce7f3', '#be185d'],
  ['#d1fae5', '#065f46'],
  ['#fef3c7', '#92400e'],
  ['#fee2e2', '#991b1b'],
  ['#e0f2fe', '#0369a1'],
  ['#f3e8ff', '#7e22ce'],
]

const fallbackStyle = computed(() => {
  let hash = 0
  for (const c of props.company) hash = (hash * 31 + c.charCodeAt(0)) & 0xffff
  const [bg, color] = PALETTE[hash % PALETTE.length]
  const fontSize = Math.round(props.size * 0.35) + 'px'
  return { background: bg, color, fontSize }
})
</script>

<style scoped>
.company-logo {
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--surface);
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
}

.logo-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  letter-spacing: -0.02em;
  border-radius: 10px;
}
</style>
