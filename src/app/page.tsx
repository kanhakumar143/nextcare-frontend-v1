import ConsultationForm from "@/components/bookConsultation/page";
import ClientReviews from "@/components/clientReviews/page";
import DoctorsAndSpecialists from "@/components/doctorsAndSpecialists/page";
import { HeroSection, DoctorDescription } from "@/components/home";
import Services from "@/components/services/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DoctorDescription />
      <Services />
      <DoctorsAndSpecialists />
      <ClientReviews />
      <ConsultationForm />
    </div>
  );
}
