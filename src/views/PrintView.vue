<template>
  <div class="pcv">
    <aside class="pcv-side">
      <div class="pcv-side-page pcv-side-1">
        <img :src="cv.identity.photo" :alt="cv.identity.name" class="pcv-photo" />
        <section>
          <h3>Contact</h3>
          <ul class="pcv-contact">
            <li>✉ {{ cv.identity.email }}</li>
            <li>☎ {{ cv.identity.phone }}</li>
            <li>⌖ {{ cv.identity.address }}</li>
          </ul>
        </section>
        <section class="pcv-grow">
          <h3>Compétences</h3>
          <div class="pcv-skills">
            <div v-for="cat in cv.skills" :key="cat.category" class="pcv-skill">
              <div class="pcv-skill-cat">{{ cat.icon }} {{ cat.category }}</div>
              <div class="pcv-skill-items">{{ cat.items.join(' · ') }}</div>
            </div>
          </div>
        </section>
      </div>
      <div class="pcv-side-page pcv-side-2">
        <section>
          <h3>Formation</h3>
          <div v-for="edu in cv.education" :key="edu.degree" class="pcv-edu">
            <div class="pcv-edu-degree">{{ edu.degree }}</div>
            <div>{{ edu.school }}</div>
            <div class="pcv-edu-period">{{ edu.period }}</div>
          </div>
        </section>
        <section>
          <h3>Langues</h3>
          <div v-for="l in cv.languages" :key="l.name" class="pcv-lang">
            <span class="pcv-flag">{{ l.flag }}</span>
            <div><strong>{{ l.name }}</strong><br />{{ l.level }}</div>
          </div>
        </section>
        <section>
          <h3>Passions</h3>
          <div v-for="p in cv.passions" :key="p.name" class="pcv-passion">
            <span class="pcv-flag">{{ p.icon }}</span> {{ p.name }}
          </div>
        </section>
      </div>
    </aside>

    <main class="pcv-main">
      <header class="pcv-head">
        <h1>{{ cv.identity.name }}</h1>
        <div class="pcv-title">{{ cv.identity.title }}</div>
        <div class="pcv-subtitle">{{ cv.identity.subtitle }}</div>
      </header>

      <section>
        <h2>À propos</h2>
        <p v-for="(p, i) in cv.about" :key="i" class="pcv-about">{{ p }}</p>
      </section>

      <section>
        <h2>Expériences</h2>
        <article v-for="exp in cv.experiences" :key="exp.company + exp.period" class="pcv-exp">
          <CompanyLogo :company="exp.company" :logo="exp.logo" :size="30" />
          <div class="pcv-exp-body">
            <div class="pcv-exp-top">
              <span class="pcv-exp-company">{{ exp.company }}<template v-if="exp.context"> — {{ exp.context }}</template></span>
              <span class="pcv-exp-period">{{ exp.period }}</span>
            </div>
            <div class="pcv-exp-title">{{ exp.title }}</div>
            <ul class="pcv-exp-details">
              <li v-for="(d, i) in exp.details" :key="i">{{ d }}</li>
            </ul>
            <div class="pcv-tags">
              <span v-for="t in exp.tags" :key="t">{{ t }}</span>
            </div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup>
import cv from '../data/cv.json'
import CompanyLogo from '../components/CompanyLogo.vue'
</script>

<style>
@page { size: A4; margin: 0; }

.pcv {
  --c: #4f46e5;
  display: grid;
  grid-template-columns: 70mm 1fr;
  width: 210mm;
  min-height: 592mm;
  margin: 0 auto;
  background: linear-gradient(to right, #1e1b4b 70mm, #fff 70mm);
  font-size: 9pt;
  line-height: 1.4;
  color: #1e293b;
}
.pcv h1, .pcv h2, .pcv h3 { margin: 0; }
.pcv-side {
  background: #1e1b4b;
  color: #e0e7ff;
  font-size: 8.5pt;
}
.pcv-side-page {
  height: 296mm;
  padding: 10mm 6mm;
  display: flex;
  flex-direction: column;
  gap: 6mm;
  break-inside: avoid;
}
.pcv-side-2 { padding-top: 12mm; gap: 14mm; }
.pcv-side-2 .pcv-edu, .pcv-side-2 .pcv-lang, .pcv-side-2 .pcv-passion { margin-bottom: 5mm; }
.pcv-grow { flex: 1; display: flex; flex-direction: column; }
.pcv-skills { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
.pcv-flag { font-size: 13pt; margin-right: 2mm; }
.pcv-lang, .pcv-passion { display: flex; align-items: center; margin-bottom: 3mm; }
.pcv-edu-period { color: #a5b4fc; font-size: 8pt; }
.pcv-photo { width: 34mm; height: 34mm; border-radius: 50%; object-fit: cover; align-self: center; border: 1mm solid rgba(255,255,255,.25); }
.pcv-side h3 { font-size: 8.5pt; text-transform: uppercase; letter-spacing: .12em; color: #fff; border-bottom: .3mm solid #818cf8; padding-bottom: 1mm; margin-bottom: 2mm; }
.pcv-contact { list-style: none; padding: 0; margin: 0; display: grid; gap: 1.2mm; word-break: break-word; }
.pcv-skill { }
.pcv-skill-cat { font-weight: 600; color: #fff; }
.pcv-skill-items { color: #c7d2fe; }
.pcv-edu { margin-bottom: 4mm; }
.pcv-edu-degree { font-weight: 600; color: #fff; }

.pcv-main { padding: 9mm 9mm 0 8mm; }
.pcv-head { border-bottom: .6mm solid var(--c); padding-bottom: 3mm; margin-bottom: 4mm; }
.pcv-head h1 { font-size: 24pt; line-height: 1.1; letter-spacing: -.01em; }
.pcv-title { color: var(--c); font-weight: 600; font-size: 11pt; margin-top: 1mm; }
.pcv-subtitle { color: #64748b; font-size: 9pt; }
.pcv-main h2 { font-size: 10.5pt; text-transform: uppercase; letter-spacing: .1em; color: var(--c); margin: 4mm 0 2mm; }
.pcv-about { margin: 0 0 1.5mm; text-align: justify; }
.pcv-exp { display: flex; gap: 3mm; padding: 1.8mm 0; border-bottom: .2mm solid #e2e8f0; break-inside: avoid; }
.pcv-exp:last-child { border-bottom: 0; }
.pcv-exp-body { flex: 1; min-width: 0; }
.pcv-exp-top { display: flex; justify-content: space-between; gap: 3mm; align-items: baseline; }
.pcv-exp-company { font-weight: 700; }
.pcv-exp-period { color: #64748b; font-size: 8pt; white-space: nowrap; }
.pcv-exp-title { color: var(--c); font-weight: 500; }
.pcv-exp-details { margin: 1mm 0 1.2mm; padding-left: 4mm; font-size: 8.3pt; line-height: 1.35; }
.pcv-exp-details li { margin-bottom: .4mm; }
.pcv-tags { display: flex; flex-wrap: wrap; gap: 1mm; }
.pcv-tags span { background: #eef2ff; color: #3730a3; border-radius: 1mm; padding: .2mm 1.6mm; font-size: 7.2pt; }

body:has(.pcv) { background: #fff; }
@media screen { body:has(.pcv) { background: #e2e8f0; } .pcv { box-shadow: 0 4px 24px rgba(0,0,0,.15); } }
* { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
</style>
