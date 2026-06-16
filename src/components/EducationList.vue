<template>
  <div class="education-list">
    <div v-for="edu in education" :key="edu.degree" class="edu-card">
      <div class="edu-degree">{{ edu.degree }}</div>
      <div class="edu-school">{{ edu.school }}</div>
      <div class="edu-period">{{ edu.period }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  education: { type: Array, required: true },
})
</script>
