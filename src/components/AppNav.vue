<template>
  <nav class="cv-nav">
    <RouterLink to="/" class="nav-link" :class="{ active: route.path === '/' }">
      <span>📄</span> Résumé
    </RouterLink>
    <RouterLink to="/detail" class="nav-link" :class="{ active: route.path === '/detail' }">
      <span>🔍</span> Version détaillée
    </RouterLink>
  <a href="cv-yohan-alard.pdf" download class="nav-link nav-download">
      <span>⬇</span> Télécharger le PDF
    </a>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
