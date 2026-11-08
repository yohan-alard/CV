<template>
  <header class="cv-header">
    <div class="header-inner">
      <img :src="identity.photo" :alt="`Photo de ${identity.name}`" class="header-photo" />
      <div class="header-body">
        <h1 class="header-name">{{ identity.name }}</h1>
        <p class="header-title">{{ identity.title }}</p>
        <p class="header-subtitle">{{ identity.subtitle }}</p>
        <div class="header-contacts">
          <a :href="`mailto:${identity.email}`" class="contact-chip">
            <span>✉</span> {{ identity.email }}
          </a>
          <span class="contact-chip">
            <span>☎</span> {{ identity.phone }}
          </span>
          <a :href="`https://${identity.github}`" class="contact-chip">
            <span>⌥</span> {{ identity.github }}
          </a>
          <a :href="`https://www.${identity.linkedin}`" class="contact-chip">
            <span>in</span> {{ identity.linkedin }}
          </a>
          <span class="contact-chip">
            <span>📍</span> {{ identity.address }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  identity: { type: Object, required: true },
})
</script>
