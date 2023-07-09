import CountSection from '../components/countSection';
import FaqSection from '../components/faqSection';
import FeaturesSection from '../components/featuresSection';
import HeroSection from '../components/heroSection';
import PricingSection from '../components/pricingSection';
import RevolutionSection from '../components/revolutionSection';
import UrlSection from '../components/urlSection';

function Home() {
  return (
    <>
      <div className="bg-hero-grad">
        <HeroSection />
      </div>
      <CountSection />
      <FeaturesSection />
      <PricingSection />
      <UrlSection />
      <FaqSection />
      <RevolutionSection />
    </>
  );
}

export default Home;
