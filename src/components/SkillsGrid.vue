<template>
  <div class="skills-grid">
    <div v-for="cat in skills" :key="cat.category" class="skill-card">
      <div class="skill-card-header">
        <span class="skill-icon">{{ cat.icon }}</span>
        {{ cat.category }}
      </div>
      <div class="skill-pills">
        <span v-for="item in cat.items" :key="item" class="skill-pill">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  skills: { type: Array, required: true },
})
</script>
