const ServicesSection = () => {
  return (
    <section className="features" id="services">
      <div className="section-header">
        <div className="section-subtitle">Nos Services</div>
        <h2 className="section-title">
          Tout Ce Dont Vous Avez <span>Besoin</span>
        </h2>
        <p className="section-description">
          Une plateforme complète pour votre orientation.
        </p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon-box">
            <img src="/Services/1.png" alt="Tests Psychométriques" />
          </div>
          <h3>Tests Psychométriques</h3>
          <p>Évaluations scientifiques pour identifier vos aptitudes.</p>
          <ul className="feature-list">
            <li>Test RIASEC de Holland</li>
            <li>Analyse Big Five</li>
            <li>Rapport de 25+ pages</li>
          </ul>
        </div>
        <div className="feature-card">
          <div className="feature-icon-box">
            <img src="/Services/2.png" alt="Counseling" />
          </div>
          <h3>Counseling 1-à-1</h3>
          <p>Sessions personnalisées avec nos experts.</p>
          <ul className="feature-list">
            <li>60 minutes en visio</li>
            <li>Plan d'action concret</li>
            <li>Suivi personnalisé</li>
          </ul>
        </div>
        <div className="feature-card">
          <div className="feature-icon-box">
            <img src="/Services/3.png" alt="Matching Intelligent" />
          </div>
          <h3>Matching Intelligent</h3>
          <p>Algorithme IA pour les meilleures formations.</p>
          <ul className="feature-list">
            <li>500+ formations</li>
            <li>Critères multiples</li>
            <li>Comparaison détaillée</li>
          </ul>
        </div>
        <div className="feature-card">
          <div className="feature-icon-box">
            <img src="/Services/4.png" alt="Base de Données" />
          </div>
          <h3>Base de Données</h3>
          <p>La plus grande base d'orientation au Maroc.</p>
          <ul className="feature-list">
            <li>180+ établissements</li>
            <li>Débouchés détaillés</li>
            <li>Frais et bourses</li>
          </ul>
        </div>
        <div className="feature-card">
          <div className="feature-icon-box">
            <img src="/Services/5.png" alt="Support Continu" />
          </div>
          <h3>Support Continu</h3>
          <p>Accompagnement avec nos experts.</p>
          <ul className="feature-list">
            <li>Chat en direct</li>
            <li>Webinaires gratuits</li>
            <li>Guides téléchargeables</li>
          </ul>
        </div>
        <div className="feature-card">
          <div className="feature-icon-box">
            <img src="/Services/6.png" alt="Rapports" />
          </div>
          <h3>Rapports & Analytics</h3>
          <p>Analyses approfondies de votre profil.</p>
          <ul className="feature-list">
            <li>Rapports complets</li>
            <li>Recommandations IA</li>
            <li>Export PDF</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
