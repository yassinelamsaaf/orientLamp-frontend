const StatsSection = () => {
  return (
    <section className="stats">
      <div className="stats-header">
        <h2>Notre Impact en Chiffres</h2>
        <p>Des milliers d'étudiants nous font confiance</p>
      </div>
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon-box">
            <img src="/Chiffres/1.png" alt="Étudiants Orientés" />
          </div>
          <div className="stat-number">12,500+</div>
          <div className="stat-label">Étudiants Orientés</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-box">
            <img src="/Chiffres/2.png" alt="Formations" />
          </div>
          <div className="stat-number">500+</div>
          <div className="stat-label">Formations</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-box">
            <img src="/Chiffres/3.png" alt="Écoles Partenaires" />
          </div>
          <div className="stat-number">180+</div>
          <div className="stat-label">Écoles Partenaires</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-box">
            <img src="/Chiffres/4.png" alt="Satisfaction" />
          </div>
          <div className="stat-number">96%</div>
          <div className="stat-label">Satisfaction</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-box">
            <img src="/Chiffres/5.png" alt="Conseillers" />
          </div>
          <div className="stat-number">45+</div>
          <div className="stat-label">Conseillers</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-box">
            <img src="/Chiffres/6.png" alt="Villes" />
          </div>
          <div className="stat-number">12</div>
          <div className="stat-label">Villes au Maroc</div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
