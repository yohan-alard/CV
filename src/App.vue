<template>
  <div>
    <nav style="padding:18px; display:flex; gap:12px; align-items:center; justify-content:center;">
      <a href="#/" @click.prevent="go('/')" style="text-decoration:none; color:#fff; background:#667eea;padding:8px 12px;border-radius:6px;">Version simplifiée</a>
      <a href="#/detailed" @click.prevent="go('/detailed')" style="text-decoration:none; color:#fff; background:#764ba2;padding:8px 12px;border-radius:6px;">Version détaillée</a>
    </nav>
    <main>
      <CVSimple v-if="route === '/'" />
      <CVDetailed v-else />
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import CVSimple from './components/CVSimple.vue'
import CVDetailed from './components/CVDetailed.vue'

export default {
  components: { CVSimple, CVDetailed },
  setup() {
    const route = ref(window.location.hash.replace('#', '') || '/')
    const onHash = () => { route.value = window.location.hash.replace('#', '') || '/' }
    onMounted(() => window.addEventListener('hashchange', onHash))
    const go = (path) => { window.location.hash = path }
    return { route, go }
  }
}
</script>

<style>
/* Reused global styles from original site (kept mostly intact) */
* { margin:0; padding:0; box-sizing:border-box }
body, #app { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #887eea 0%, #FF4ba2 100%); padding:20px; color:#2d3748; }
.container { max-width:900px; margin: 20px auto; background:white; box-shadow: 0 20px 60px rgba(0,0,0,0.18); border-radius:8px; overflow:hidden }
.header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color:white; padding:50px 60px; position:relative; display:flex; align-items:center; gap:40px }
.profile-photo img { width:150px; height:150px; border-radius:50%; object-fit:cover; border:5px solid white; box-shadow:0 10px 30px rgba(0,0,0,0.3) }
.header::after { content:''; position:absolute; bottom:0; left:0; right:0; height:4px; background: linear-gradient(90deg, #ffd89b 0%, #19547b 100%)}
.header h1 { font-size:42px; font-weight:700; margin-bottom:10px }
.subtitle { font-size:18px; opacity:0.95; margin-bottom:30px; line-height:1.6 }
.contact-info { display:flex; flex-wrap:wrap; gap:25px; font-size:14px }
.content { padding:50px 60px }
.section { margin-bottom:45px }
.section-title { font-size:24px; color:#667eea; margin-bottom:25px; padding-bottom:12px; border-bottom:3px solid #667eea; font-weight:600 }
.about-text { line-height:1.8; color:#4a5568; font-size:15px }
.experience-item { margin-bottom:35px; padding-left:25px; border-left:3px solid #e2e8f0; position:relative }
.experience-item::before { content:''; position:absolute; left:-7px; top:5px; width:11px; height:11px; background:#667eea; border-radius:50%; border:3px solid white; box-shadow:0 0 0 2px #667eea }
.skills-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(250px,1fr)); gap:20px }
.skill-category { background:#f7fafc; padding:20px; border-radius:8px; border-left:4px solid #667eea }
.education-item { margin-bottom:20px; padding:20px; background:#f7fafc; border-radius:8px; border-left:4px solid #764ba2 }
.languages { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:20px }
.language-item { padding:20px; background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%); border-radius:8px; text-align:center }

@media (max-width:768px) {
  .header, .content { padding:30px }
  .header h1 { font-size:32px }
  .contact-info { flex-direction:column; gap:15px }
}
</style>
