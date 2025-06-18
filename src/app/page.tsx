import { HeroSection, DoctorDescription } from "@/components/home";
import Services from "@/components/services/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DoctorDescription />
      <Services />
    </div>
  );
}
