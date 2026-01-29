import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import NavBar from "../../components/NavBar";
import HeroSection from "./sections/HeroSection";
import WhySection from "./sections/WhySection";
import StatsSection from "./sections/StatsSection";
import ServicesSection from "./sections/ServicesSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import TargetAudienceSection from "./sections/TargetAudienceSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import PartnersSection from "./sections/PartnersSection";
import FAQSection from "./sections/FAQSection";
import CTASection from "./sections/CTASection";
import Footer from "./sections/Footer";
import "../../styles/Landing.css";

const HomePage = () => {
  useEffect(() => {
    // Scroll progress bar
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.querySelector(".gradient-bar");
      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute("href").substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // FAQ accordion
    const handleFaqClick = (e) => {
      const faqItem = e.target.closest(".faq-item");
      if (faqItem) {
        const question = faqItem.querySelector(".faq-question");
        if (
          question &&
          (e.target === question || question.contains(e.target))
        ) {
          faqItem.classList.toggle("active");
        }
      }
    };

    document.addEventListener("click", handleFaqClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleAnchorClick);
      document.removeEventListener("click", handleFaqClick);
    };
  }, []);

  const handleChatbotClick = () => {
    // Navigate to ChatAI page or open chat modal
    console.log("Chatbot clicked");
  };

  return (
    <div className="landing-page">
      <NavBar />
      <HeroSection />
      <WhySection />
      <StatsSection />
      <ServicesSection />
      <HowItWorksSection />
      <TargetAudienceSection />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <CTASection />
      <Footer />

      {/* Chatbot button */}
      {/* <button className="chatbot-button" onClick={handleChatbotClick}>
        <MessageCircle size={24} />
      </button> */}
    </div>
  );
};

export default HomePage;
