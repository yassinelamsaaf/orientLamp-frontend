import { Check, Clock, Users, TrendingUp, Database, Award } from "lucide-react";

const WhySection = () => {
  return (
    <section className="why-orientlamp">
      <div className="why-container">
        <div className="why-header">
          <div className="section-subtitle">Pourquoi OrientLamp ?</div>
          <h2 className="section-title">
            Ce Qui Nous Rend <span>Uniques</span>
          </h2>
          <p className="section-description">
            Une approche complète et scientifique pour votre réussite
            académique.
          </p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <Check size={48} />
            </div>
            <h3>Méthodologie Scientifique</h3>
            <p>
              Tests psychométriques validés internationalement (RIASEC, Big
              Five) pour une évaluation précise de votre profil.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <Users size={48} />
            </div>
            <h3>Conseillers Certifiés</h3>
            <p>
              Une équipe de psychologues et experts en orientation avec plus de
              10 ans d'expérience dans l'éducation marocaine.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <Clock size={48} />
            </div>
            <h3>Accompagnement Continu</h3>
            <p>
              Suivi personnalisé de votre parcours, de la découverte de votre
              profil jusqu'à votre intégration dans l'école idéale.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <TrendingUp size={48} />
            </div>
            <h3>Algorithme IA Avancé</h3>
            <p>
              Technologie de matching intelligent qui analyse 50+ critères pour
              vous proposer les formations les plus adaptées.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <Database size={48} />
            </div>
            <h3>Base de Données Exclusive</h3>
            <p>
              Informations complètes et à jour sur 180+ établissements :
              programmes, débouchés, frais de scolarité et bourses.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <Award size={48} />
            </div>
            <h3>100% Marocain</h3>
            <p>
              Expertise locale approfondie du système éducatif marocain, des
              écoles publiques aux établissements privés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
