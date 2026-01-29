const HowItWorksSection = () => {
  return (
    <section className="how-it-works" id="comment-ca-marche">
      <div className="section-header">
        <div className="section-subtitle">Processus</div>
        <h2 className="section-title">
          Comment <span>Ça Marche</span> ?
        </h2>
        <p className="section-description">4 étapes pour trouver votre voie.</p>
      </div>
      <div className="steps-container">
        <div className="step">
          <div className="step-content">
            <div className="step-number">1</div>
            <h3>Créez Votre Compte</h3>
            <p>Inscription gratuite en 2 minutes.</p>
          </div>
          <div className="step-image">
            <img src="/Processus/1.png" alt="Créez votre compte" />
          </div>
        </div>
        <div className="step">
          <div className="step-content">
            <div className="step-number">2</div>
            <h3>Passez les Tests</h3>
            <p>45-60 minutes de tests scientifiques.</p>
          </div>
          <div className="step-image">
            <img src="/Processus/2.png" alt="Passez les tests" />
          </div>
        </div>
        <div className="step">
          <div className="step-content">
            <div className="step-number">3</div>
            <h3>Recevez Votre Profil</h3>
            <p>Rapport complet de 25+ pages.</p>
          </div>
          <div className="step-image">
            <img src="/Processus/3.png" alt="Recevez votre profil" />
          </div>
        </div>
        <div className="step">
          <div className="step-content">
            <div className="step-number">4</div>
            <h3>Counseling & Action</h3>
            <p>Session avec un expert.</p>
          </div>
          <div className="step-image">
            <img src="/Processus/4.png" alt="Counseling et action" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
