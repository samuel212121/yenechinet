import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import HowItWorksPreview from "@/components/HowItWorksPreview";
import WhoWeServe from "@/components/WhoWeServe";
import AppPromo from "@/components/AppPromo"; 
import TruckPromo from "@/components/TruckPromo";  
import VehicleCategories from "@/components/VehicleCategories";
import AppDownload from "@/components/AppDownload";
import WhyChinet from "@/components/WhyChinet";
import Testimonials from "@/components/Testimonials";
import PartnersCTA from "@/components/PartnersCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <HowItWorksPreview />
      <WhoWeServe />
      <VehicleCategories />
      <AppDownload />
      <WhyChinet />
      <AppPromo />
      <TruckPromo />
      <Testimonials />
      <PartnersCTA />
    </main>
  );
}
