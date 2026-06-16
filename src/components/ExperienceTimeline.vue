<template>
  <div class="timeline">
    <div
      v-for="exp in experiences"
      :key="exp.company + exp.period"
      class="timeline-item"
    >
      <div>
        <div class="exp-company">
          {{ exp.company }}
          <span v-if="exp.context" class="exp-context"> — {{ exp.context }}</span>
        </div>
        <div class="exp-title">{{ exp.title }}</div>
        <div class="exp-period">{{ exp.period }}</div>

        <p v-if="!detailed" class="exp-text">{{ exp.summary }}</p>

        <ul v-else class="exp-details">
          <li v-for="(detail, i) in exp.details" :key="i">{{ detail }}</li>
        </ul>

        <div class="exp-tags">
          <span v-for="tag in exp.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  experiences: { type: Array, required: true },
  detailed: { type: Boolean, default: false },
})
</script>
