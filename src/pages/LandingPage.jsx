import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Check, Clock, Users, TrendingUp, Database, Award } from 'lucide-react';
import NavBar from '../components/NavBar';
import '../styles/Landing.css';

const LandingPage = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Scroll progress bar
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      const gradientBar = document.querySelector('.gradient-bar');
      if (nav && gradientBar) {
        const navHeight = nav.offsetHeight;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        gradientBar.style.width = scrolled + '%';
        gradientBar.style.top = navHeight + 'px';
      }
    };

    // FAQ Accordion
    const handleFaqClick = (e) => {
      const question = e.target.closest('.faq-question');
      if (question) {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) faqItem.classList.add('active');
      }
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleFaqClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleFaqClick);
    };
  }, []);

  const handleChatbotClick = () => {
    alert('💬 Assistant OrientLamp\n\nBonjour ! Comment puis-je vous aider ?');
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className="hero" id="accueil">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">Plateforme N°1 d'orientation au Maroc</div>
          <h1 className="hero-title">
            Découvrez-vous et<br />
            Trouvez <span className="highlight">Votre<br />Carrière Idéale</span>
          </h1>
          <p className="hero-description">
            Bénéficiez de conseils d'experts en orientation, de counseling professionnel 
            et de mentorat pour découvrir le parcours académique dans lequel vous excellerez 
            et vous épanouirez.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn-primary">Commencer Maintenant</Link>
            <a href="#services" className="btn-secondary">En Savoir Plus</a>
          </div>
        </div>
      </section>

      {/* Why OrientLamp Section */}
      <section className="why-orientlamp">
        <div className="why-container">
          <div className="why-header">
            <div className="section-subtitle">Pourquoi OrientLamp ?</div>
            <h2 className="section-title">Ce Qui Nous Rend <span>Uniques</span></h2>
            <p className="section-description">Une approche complète et scientifique pour votre réussite académique.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <Check size={48} />
              </div>
              <h3>Méthodologie Scientifique</h3>
              <p>Tests psychométriques validés internationalement (RIASEC, Big Five) pour une évaluation précise de votre profil.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <Users size={48} />
              </div>
              <h3>Conseillers Certifiés</h3>
              <p>Une équipe de psychologues et experts en orientation avec plus de 10 ans d'expérience dans l'éducation marocaine.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <Clock size={48} />
              </div>
              <h3>Accompagnement Continu</h3>
              <p>Suivi personnalisé de votre parcours, de la découverte de votre profil jusqu'à votre intégration dans l'école idéale.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <TrendingUp size={48} />
              </div>
              <h3>Algorithme IA Avancé</h3>
              <p>Technologie de matching intelligent qui analyse 50+ critères pour vous proposer les formations les plus adaptées.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <Database size={48} />
              </div>
              <h3>Base de Données Exclusive</h3>
              <p>Informations complètes et à jour sur 180+ établissements : programmes, débouchés, frais de scolarité et bourses.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <Award size={48} />
              </div>
              <h3>100% Marocain</h3>
              <p>Expertise locale approfondie du système éducatif marocain, des écoles publiques aux établissements privés.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Features/Services Section */}
      <section className="features" id="services">
        <div className="section-header">
          <div className="section-subtitle">Nos Services</div>
          <h2 className="section-title">Tout Ce Dont Vous Avez <span>Besoin</span></h2>
          <p className="section-description">Une plateforme complète pour votre orientation.</p>
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

      {/* How It Works Section */}
      <section className="how-it-works" id="comment-ca-marche">
        <div className="section-header">
          <div className="section-subtitle">Processus</div>
          <h2 className="section-title">Comment <span>Ça Marche</span> ?</h2>
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

      {/* Target Audience Section */}
      <section className="target-audience">
        <div className="section-header">
          <div className="section-subtitle">Pour Qui ?</div>
          <h2 className="section-title">Qui Peut <span>Bénéficier</span> ?</h2>
        </div>
        <div className="audience-grid">
          <div className="audience-card">
            <div className="audience-icon-box">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
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
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h3>Étudiants Prépas</h3>
            <p>Intégrez la meilleure école d'ingénieurs.</p>
          </div>
          <div className="audience-card">
            <div className="audience-icon-box">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h3>Réorientation</h3>
            <p>Changez de voie avec les bonnes passerelles.</p>
          </div>
          <div className="audience-card">
            <div className="audience-icon-box">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
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
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
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
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
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

      {/* Testimonials Section */}
      <section className="testimonials" id="temoignages">
        <div className="section-header">
          <div className="section-subtitle">Témoignages</div>
          <h2 className="section-title" id="tm">Ce Que Disent Nos <span>Étudiants</span></h2>
        </div>
        <div className="testimonials-slider">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="author-avatar">YB</div>
              <div className="author-info">
                <h4>Yassir Benjelloun</h4>
                <p>Étudiant ENSIAS - Promo 2023</p>
              </div>
            </div>
            <div className="testimonial-text">"OrientLamp m'a vraiment aidé à y voir clair. Aujourd'hui je suis en 3ème année à l'ENSIAS !"</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="author-avatar">SE</div>
              <div className="author-info">
                <h4>Sarah El Amrani</h4>
                <p>Étudiante ISCAE - Promo 2024</p>
              </div>
            </div>
            <div className="testimonial-text">"Les conseillers m'ont aidée à construire un plan précis. Je suis en École de Commerce et j'adore !"</div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <div className="section-header">
          <div className="section-subtitle">Nos Partenaires</div>
          <h2 className="section-title">Ils Nous Font <span>Confiance</span></h2>
        </div>
        <div className="partners-carousel-wrapper">
          <div className="partners-carousel">
            {[1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4].map((num, idx) => (
              <div key={idx} className="partner-logo">
                <img src={`/Partenaires/${num}.png`} alt={`Partner ${num}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq" id="faq">
        <div className="section-header">
          <div className="section-subtitle">FAQ</div>
          <h2 className="section-title">Vous Avez des <span>Questions</span> ?</h2>
        </div>
        <div className="faq-container">
          <div className="faq-item">
            <div className="faq-question">
              <span>OrientLamp est-il gratuit ?</span>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Oui ! L'inscription et l'accès sont 100% gratuits avec services premium optionnels.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <span>Combien de temps durent les tests ?</span>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>45-60 minutes. Vous pouvez les faire à votre rythme.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <span>Les tests sont-ils validés ?</span>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Absolument ! Développés avec des psychologues experts.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <span>Comment se déroule le counseling ?</span>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>60 minutes en visio avec un conseiller certifié.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Prêt à Découvrir Votre Voie ?</h2>
          <p>Rejoignez 12 500+ étudiants orientés avec OrientLamp !</p>
          <div className="cta-buttons-center">
            <Link to="/login" className="btn-white">Commencer Gratuitement</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-about">
            <h3>OrientLamp</h3>
            <p>La plateforme leader d'orientation au Maroc.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <svg width="20" height="20" fill="currentColor">
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.99 20 10c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="20" height="20" fill="currentColor">
                  <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm5 12.5c0 1.381-1.119 2.5-2.5 2.5h-5C6.119 15 5 13.881 5 12.5v-5C5 6.119 6.119 5 7.5 5h5C13.881 5 15 6.119 15 7.5v5zM10 7a3 3 0 100 6 3 3 0 000-6zm0 5a2 2 0 110-4 2 2 0 010 4zm3.5-5.5a.5.5 0 11-1 0 .5.5 0 011 0z"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="20" height="20" fill="currentColor">
                  <path d="M19 0H1C.4 0 0 .4 0 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-4.4c0-1.1 0-2.5-1.5-2.5s-1.7 1.2-1.7 2.4V17H8V8h2.8v1.2h.1c.4-.8 1.4-1.5 2.8-1.5 3 0 3.6 2 3.6 4.6V17z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#">Tests</a></li>
              <li><a href="#">Counseling</a></li>
              <li><a href="#">Base de Données</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Ressources</h4>
            <ul className="footer-links">
              <li><a href="#">Guide</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>À Propos</h4>
            <ul className="footer-links">
              <li><a href="#">Mission</a></li>
              <li><a href="#">Équipe</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 OrientLamp. Tous droits réservés.</p>
          <div className="footer-bottom-links">
            <a href="#">CGU</a>
            <a href="#">Confidentialité</a>
            <a href="#">Mentions Légales</a>
          </div>
        </div>
      </footer>

      {/* Chatbot Button */}
      <div className="chatbot">
        <button className="chatbot-button" onClick={handleChatbotClick} aria-label="Ouvrir le chat">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
