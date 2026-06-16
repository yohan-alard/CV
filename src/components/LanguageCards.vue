<template>
  <div class="languages-grid">
    <div v-for="lang in languages" :key="lang.name" class="lang-card">
      <span class="lang-flag">{{ lang.flag }}</span>
      <div>
        <div class="lang-name">{{ lang.name }}</div>
        <div class="lang-level">{{ lang.level }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  languages: { type: Array, required: true },
})
</script>
