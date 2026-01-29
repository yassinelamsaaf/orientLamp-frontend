const TestimonialsSection = () => {
  return (
    <section className="testimonials" id="temoignages">
      <div className="section-header">
        <div className="section-subtitle">Témoignages</div>
        <h2 className="section-title" id="tm">
          Ce Que Disent Nos <span>Étudiants</span>
        </h2>
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
          <div className="testimonial-text">
            "OrientLamp m'a vraiment aidé à y voir clair. Aujourd'hui je suis en
            3ème année à l'ENSIAS !"
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-header">
            <div className="author-avatar">SE</div>
            <div className="author-info">
              <h4>Sarah El Amrani</h4>
              <p>Étudiante ISCAE - Promo 2024</p>
            </div>
          </div>
          <div className="testimonial-text">
            "Les conseillers m'ont aidée à construire un plan précis. Je suis en
            École de Commerce et j'adore !"
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
