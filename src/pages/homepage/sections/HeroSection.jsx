import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const HeroSection = () => {
  const { user } = useAuth();

  return (
    <section className="hero" id="accueil">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Découvrez-vous et
          <br />
          Trouvez{" "}
          <span className="highlight">
            Votre
            <br />
            Carrière Idéale
          </span>
        </h1>
        <p className="hero-description">
          Bénéficiez de conseils d'experts en orientation, de counseling
          professionnel et de mentorat pour découvrir le parcours académique
          dans lequel vous excellerez et vous épanouirez.
        </p>
        <div className="hero-buttons">
          <Link to={user ? "/search" : "/signup"} className="btn-primary">
            Commencer Maintenant
          </Link>
          <a href="#services" className="btn-secondary">
            En Savoir Plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
