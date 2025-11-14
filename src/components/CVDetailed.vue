<template>
  <div class="container">
    <div class="button-container" style="padding:18px">
      <a href="#/" class="back-button" @click.prevent="go('/')">Version simplifiée</a>
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
            <p>Arbre de choix pour l'hébergement de covéa.com</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <div class="company-name">MAIF</div>
            <div class="job-title">Lead Développeur</div>
            <div class="period">Juillet 2020 — Août 2025</div>
          </div>
          <div class="experience-description">
            <h4>Tribu Datahèque</h4>
            <p>Refonte complète du mécanisme de synchronisation des bases de données legacy (Oracle) vers Elasticsearch.</p>
            <p>La resynchronisation des données repose sur deux volets :</p>
            <ul>
              <li>Une synchronisation en quasi temps réel (moins de 2 secondes, incluant le refresh interval d’Elasticsearch) s’appuyant sur des événements du SI opérant transitant par Kafka.</li>
              <li>Une resynchronisation complète ou partielle (totale, par identifiant ou par plage temporelle) des index Elasticsearch, via Kafka Connect (extraction), Kafka Streams (dénormalisation) et un client réactif pour l’indexation dans Elasticsearch. Architecture microservices ETL.</li>
            </ul>
            <p>Développement d’un orchestrateur facilitant la gestion multi-environnements, le scaling dynamique et la parallélisation des traitements.</p>
            <p>Mise en place d’outils d’exploitation : dashboard Kibana regroupant l’historique des synchronisations, outils de test de vie et de contrôle d’état.</p>
            <p>Renforcement de l’observabilité avec Prometheus et Grafana : suivi des métriques systèmes (CPU, RAM), des versions applicatives, du temps moyen de traitement, des lags Kafka et alerting.</p>
            <p>Ajout de microservices de contrôle qualité des données (écarts et cohérences entre le SI opérant et Elasticsearch).</p>
            <p>Encadrement d’une équipe de 5 à 6 développeurs, une agiliste et une product owner. Accompagnement dans la priorisation du backlog et la définition des tâches.</p>
            <p>Suivi individuel (1-1), pair/mob programming, coaching, revues de code collectives et animation d’équipe.</p>
            <p>Optimisation des pipelines CI/CD : parallélisation et réduction du temps de build.</p>

            <h4>Tribu RH</h4>
            <p>Accompagnement d’une équipe de 4 développeurs frontend et 6 data analysts.</p>
            <ul>
              <li>Migration des pipelines data vers une approche cloud first (OpenShift) : conteneurisation, orchestration, apification.</li>
              <li>Priorisation du backlog technique et réduction de la dette technique (migration JDK 21, Spring Boot 3, adoption de TypeScript).</li>
              <li>Réorganisation de l’équipe (15 personnes) pour des daily meetings plus courts et efficaces.</li>
            </ul>
            <p>Conception de l’architecture du projet PMS (Projection de Masse Salariale) et intégration d’une fonctionnalité IA (POC) pour remplacer un formulaire complexe.</p>
            <p>Participation à l’appel d’offres Core RH : aide à la sélection de la solution cible et proposition d’une architecture garantissant l’interopérabilité des systèmes RH.</p>

            <h4>Tribu Datafactory</h4>
            <ul>
              <li>Développement d’une API façade calculant la distance entre deux points via Azure Maps Routing, sécurisée par Entra ID.</li>
              <li>Chargement du référentiel Open Data dans la stack Greenplum (Python).</li>
              <li>Mise en place d’une architecture en médaillon distinguant les zones d’ingestion, de transformation et d’exposition des données.</li>
            </ul>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <div class="company-name">C.S.B. — Nouméa</div>
            <div class="job-title">Leader technique / Architecte logiciel</div>
            <div class="period">Septembre 2018 — Mars 2020</div>
          </div>
          <div class="experience-description">
            <h4>Participation à plusieurs projets stratégiques :</h4>
            <ul>
              <li>
                <strong>https://tydoc.nc/</strong> — Solution de Gestion Électronique de Documents (GED).  
                <br>Développement d’une application moderne basée sur <em>Java, Spring, Angular et Cassandra</em>, permettant la gestion, la recherche et la traçabilité des documents au sein des établissements.
              </li>
              <li>
                <strong>Smails</strong> — Plateforme d’envoi de SMS et de mails.  
                <br>Développement d’un service unifié d’envoi de messages s’appuyant sur un opérateur local et un opérateur international, garantissant une haute disponibilité et un routage optimisé.
              </li>
              <li>
                <strong>Little Sister</strong> — Solution de monitoring des transactions bancaires.  
                <br>Collecte et traitement des données issues de Powercard (CDC), ingestion dans Elasticsearch et création d’un tableau de bord de suivi en temps réel des transactions bancaires.
              </li>
            </ul>
            <p>Encadrement et formation des développeurs, mise en place d’usines logicielles complètes (<em>GitLab CI, Docker, SonarQube, Ansible</em>) et accompagnement des équipes dans l’adoption des pratiques DevOps.</p>
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
          <div class="skill-category"><div class="skill-category-title">Langages</div><div class="skill-category-content">Java (8-21), Python, JavaScript, TypeScript, SQL</div></div>
          <div class="skill-category"><div class="skill-category-title">Frameworks</div><div class="skill-category-content">Spring Boot, Hibernate, Angular, React, Vue</div></div>
          <div class="skill-category"><div class="skill-category-title">DevOps</div><div class="skill-category-content">Docker, GitLab CI/CD, Ansible, Jenkins, SonarQube, Openshift</div></div>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">Formations</h2>
        <div class="education-item"><div class="education-title">Ingénieur, Spécialisation Informatique</div><div class="education-school">Polytech Lille</div><div class="education-period">2001 — 2004</div></div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  methods: { go(path) { window.location.hash = path } }
}
</script>
