<template>
  <div class="container">
    <div class="button-container" style="padding:18px">
      <a href="#/detailed" class="back-button" @click.prevent="go('/detailed')">Version détaillée</a>
    </div>

    <div class="header">
      <div style="flex:1">
        <h1>Yohan Alard</h1>
        <div class="subtitle">
          <p>Architecte Solution</p>
          <p>Expert en architecture web, événementielle et transformation numérique</p>
        </div>
        <div class="contact-info">
          <div class="contact-item">📍 5 rue du Pigeonnier, 79270 Vallans</div>
          <div class="contact-item">✉️ yalard@gmail.com</div>
          <div class="contact-item">☎️ 07 69 81 63 82</div>
        </div>
      </div>
      <div class="profile-photo">
        <img src="/beaugosse.jpg" alt="Photo de Yohan Alard" />
      </div>
    </div>

    <div class="content">
      <section class="section">
        <h2 class="section-title">À propos de moi !</h2>
        <p class="about-text">Architecte solution et leader technique fort de plus de 20 ans d’expérience dans la conception et le développement de systèmes complexes.</p>
        <p class="about-text">Je combine une expertise approfondie en architecture web, événementielle, data et sur l’interopérabilité des systèmes. J'ai également une excellente culture devops et agile.</p>
        <p class="about-text">Curieux et passionné, j’accorde autant d’importance aux enjeux humains qu’aux défis techniques, en accompagnant les équipes vers des solutions innovantes, observables et pérennes au service de la transformation numérique.</p>
      </section>

      <!-- experiences (restored from index.orig.html) -->
      <section class="section">
        <h2 class="section-title">Mes Expériences professionnelles</h2>

        <div class="experience-item">
          <div class="experience-header">
            <div class="company-name">Covéa</div>
            <div class="job-title">Architecte Solution</div>
            <div class="period">Septembre 2025 — Aujourd'hui</div>
          </div>
          <div class="experience-description">
            <p>Réalisation de différents dossiers d'architecture (schéma applicatif et technique)</p>
            <p>Etude d'opportunité atour de l'event Driven Architecture</p>
            <p>Participation au programme Néoflux (remplacement genesys) sur les aspects automatisation et observabilité</p>
            <p>Arbre de choix pour l'hébergement de covéa.com </p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <div class="company-name">MAIF</div>
            <div class="job-title">Lead Développeur</div>
            <div class="period">Juillet 2020 — Août 2025</div>
          </div>
          <div class="experience-description">
            <p>Encadrement technique de 5 à 10 développeurs, revue de code, pair programming et animation d'équipe.</p>
            <p>Participation aux recrutements, conférences et définition des architectures logicielles.</p>
            <p>Rénovation complète du puit de données autour de Kafka, Kafka Streams et la suite ELK.</p>
            <p>Conception d'applications réactives (Spring WebFlux, Kafka Reactor, R2JDBC) pour la partie orchestration</p>
            <p>Réalisation de travaux autour du SIG (api de calcul d'itinéraire, score climatique)</p>
            <p>Réalisation de travaux autour SI RH (analytics, dataprep, dataviz, interopérabilité entre les différents progiciels)</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <div class="company-name">C.S.B. — Nouméa</div>
            <div class="job-title">Leader technique / Architecte logiciel</div>
            <div class="period">Septembre 2018 — Mars 2020</div>
          </div>
          <div class="experience-description">
            <p>Pilotage des projets Smails (envoie de sms), Little Sister (observabilité des transactions bancaires) et Tydoc.nc (ged)</p>
            <p>Encadrement et formation des développeurs</p>
            <p>Mise en place d'usines logicielles complètes (GitLab CI, Docker, Sonar, Ansible).</p>
            <p>Acculturation au méthode devops</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <div class="company-name">MAINCARE SOLUTION — Bordeaux</div>
            <div class="job-title">Architecte / Leader technique</div>
            <div class="period">Janvier 2018 — Août 2018</div>
          </div>
          <div class="experience-description">
            <p>Refonte d'une application de gestion de résultats de laboratoire.</p>
            <p>Gestion de projet (composition de l'équipe, backlog, architecte logiciel)</p>
            <p>Mise en place de processus qualité et accompagnement technique des équipes.</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <div class="company-name">ISOCEL (SI Leclerc) via ONEPOINT — Bordeaux</div>
            <div class="job-title">Architecte logiciel</div>
            <div class="period">Mai 2017 — Décembre 2017</div>
          </div>
          <div class="experience-description">
            <p>Support transverse pour 60 développeurs : maintenance du framework interne, expertise front-end et revue de code.</p>
            <p>Responsable de la partie front dans l'équipe architecte.</p>
            <p>Formations et suivi des devs CDS</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <div class="company-name">JOBIJOBA — Pessac</div>
            <div class="job-title">Senior Développeur R&D</div>
            <div class="period">Février 2017 — Mai 2017</div>
          </div>
          <div class="experience-description">
            <p>Optimisation de l'indexation des offres d'emploi dans Elasticsearch</p>
            <p>Travaux sur le CVCatcher (recherche d'offre inversé), vous l'utilisez probablement sur votre site de recrutement.</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <div class="company-name">AGFA HEALTHCARE — Artigues-près-Bordeaux</div>
            <div class="job-title">Architecte logiciel & Lead développeur</div>
            <div class="period">Février 2012 — Février 2017</div>
          </div>
          <div class="experience-description">
            <p>Conception et développement d'Orbis Mobile Edition pour le parcours des médecins et infirmiers.</p>
            <p>Gestion du support technique de niveau 2.</p>
            <p>Scrum master</p>
            <p>Travaux d'architecture pour faire passer l'entreprise en mode mobile/web first</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <div class="company-name">THALES SERVICE — Mérignac</div>
            <div class="job-title">Concepteur / Développeur</div>
            <div class="period">Décembre 2008 — Février 2012</div>
          </div>
          <div class="experience-description">
            Développement d'interfaces d'interopérabilité (projets EDF) et backend pour référentiels comptables.
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <div class="company-name">ATOS ORIGIN — Pessac</div>
            <div class="job-title">Développeur J2EE</div>
            <div class="period">Mars 2004 — Décembre 2008</div>
          </div>
          <div class="experience-description">
            Responsable de lot sur le projet SAFIR (Banque Postale). Conception d'outils de messagerie mobile pour Orange.
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">Compétences techniques</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <div class="skill-category-title">Langages</div>
            <div class="skill-category-content">Java, Python, JavaScript, TypeScript, SQL</div>
          </div>
          <div class="skill-category">
            <div class="skill-category-title">Frameworks</div>
            <div class="skill-category-content">Spring Boot, Angular, React, Vue</div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">Formations</h2>
        <div class="education-item">
          <div class="education-title">Ingénieur, Spécialisation Informatique</div>
          <div class="education-school">Polytech Lille</div>
          <div class="education-period">2001 — 2004</div>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">Langues</h2>
        <div class="languages">
          <div class="language-item"><div class="language-name">Français</div><div class="language-level">Langue maternelle</div></div>
          <div class="language-item"><div class="language-name">Anglais</div><div class="language-level">Courant (technique)</div></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    go(path) { window.location.hash = path }
  }
}
</script>
