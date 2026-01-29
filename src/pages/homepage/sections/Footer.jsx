const Footer = () => {
  return (
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
  );
};

export default Footer;
