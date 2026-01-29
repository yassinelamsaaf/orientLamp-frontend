const PartnersSection = () => {
  return (
    <section className="partners">
      <div className="section-header">
        <div className="section-subtitle">Nos Partenaires</div>
        <h2 className="section-title">
          Ils Nous Font <span>Confiance</span>
        </h2>
      </div>
      <div className="partners-carousel-wrapper">
        <div className="partners-carousel">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4].map(
            (num, idx) => (
              <div key={idx} className="partner-logo">
                <img src={`/Partenaires/${num}.png`} alt={`Partner ${num}`} />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
