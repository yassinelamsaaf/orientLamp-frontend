const FAQSection = () => {
  return (
    <section className="faq" id="faq">
      <div className="section-header">
        <div className="section-subtitle">FAQ</div>
        <h2 className="section-title">
          Vous Avez des <span>Questions</span> ?
        </h2>
      </div>
      <div className="faq-container">
        <div className="faq-item">
          <div className="faq-question">
            <span>OrientLamp est-il gratuit ?</span>
            <span className="faq-icon">+</span>
          </div>
          <div className="faq-answer">
            <p>
              Oui ! L'inscription et l'accès sont 100% gratuits avec services
              premium optionnels.
            </p>
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
  );
};

export default FAQSection;
