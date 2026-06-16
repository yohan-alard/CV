<template>
  <div class="cv-layout">
    <div class="cv-card">
      <AppHeader :identity="cv.identity" />
      <AppNav />
      <main class="cv-content">
        <section class="cv-section fade-up fade-up-1">
          <h2 class="section-heading"><span class="section-accent"></span>À propos</h2>
          <div class="about-paragraphs">
            <p v-for="(para, i) in cv.about" :key="i">{{ para }}</p>
          </div>
        </section>

        <section class="cv-section fade-up fade-up-2">
          <h2 class="section-heading"><span class="section-accent"></span>Expériences détaillées</h2>
          <ExperienceTimeline :experiences="cv.experiences" :detailed="true" />
        </section>

        <section class="cv-section fade-up fade-up-3">
          <h2 class="section-heading"><span class="section-accent"></span>Compétences</h2>
          <SkillsGrid :skills="cv.skills" />
        </section>

        <section class="cv-section fade-up fade-up-4">
          <h2 class="section-heading"><span class="section-accent"></span>Formation</h2>
          <EducationList :education="cv.education" />
        </section>

        <section class="cv-section fade-up fade-up-5">
          <h2 class="section-heading"><span class="section-accent"></span>Langues</h2>
          <LanguageCards :languages="cv.languages" />
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import cv from '../data/cv.json'
import AppHeader from '../components/AppHeader.vue'
import AppNav from '../components/AppNav.vue'
import ExperienceTimeline from '../components/ExperienceTimeline.vue'
import SkillsGrid from '../components/SkillsGrid.vue'
import EducationList from '../components/EducationList.vue'
import LanguageCards from '../components/LanguageCards.vue'
</script>
