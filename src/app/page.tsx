import DesignSection from "@/components/organisms/DesignSection";
import FaqSection from "@/components/organisms/FaqSection";
import FooterSection from "@/components/organisms/FooterSection";
import HeroSection from "@/components/organisms/HeroSection";
import PricesSection from "@/components/organisms/PricesSection";
import ValueFeatureSection from "@/components/organisms/ValueFeatureSection";
import ValueSection from "@/components/organisms/ValueSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ValueSection />
      <ValueFeatureSection />
      <DesignSection />
      <PricesSection />
      <FaqSection />
      <FooterSection />
    </>
  );
};

export default Home;
