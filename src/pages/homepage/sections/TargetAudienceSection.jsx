const TargetAudienceSection = () => {
  return (
    <section className="target-audience">
      <div className="section-header">
        <div className="section-subtitle">Pour Qui ?</div>
        <h2 className="section-title">
          Qui Peut <span>Bénéficier</span> ?
        </h2>
      </div>
      <div className="audience-grid">
        <div className="audience-card">
          <div className="audience-icon-box">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M4 9h16M4 15h16"></path>
            </svg>
          </div>
          <h3>Lycéens Post-Bac</h3>
          <p>Trouvez la meilleure filière selon votre profil.</p>
        </div>
        <div className="audience-card">
          <div className="audience-icon-box">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <h3>Étudiants Prépas</h3>
          <p>Intégrez la meilleure école d'ingénieurs.</p>
        </div>
        <div className="audience-card">
          <div className="audience-icon-box">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <h3>Réorientation</h3>
          <p>Changez de voie avec les bonnes passerelles.</p>
        </div>
        <div className="audience-card">
          <div className="audience-icon-box">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h3>Internationaux</h3>
          <p>Étudiez au Maroc ou à l'étranger.</p>
        </div>
        <div className="audience-card">
          <div className="audience-icon-box">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <polyline points="17 11 19 13 23 9"></polyline>
            </svg>
          </div>
          <h3>Reconversion</h3>
          <p>Reprenez des études pour évoluer.</p>
        </div>
        <div className="audience-card">
          <div className="audience-icon-box">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
              <path d="M12 2v5"></path>
            </svg>
          </div>
          <h3>Parents</h3>
          <p>Accompagnez votre enfant avec des outils pro.</p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
