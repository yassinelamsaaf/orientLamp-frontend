import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Prêt à Découvrir Votre Voie ?</h2>
        <p>Rejoignez 12 500+ étudiants orientés avec OrientLamp !</p>
        <div className="cta-buttons-center">
          <Link to="/login" className="btn-white">Commencer Gratuitement</Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
