import {
  HeroSection,
  DoctorDescription,
  Services,
  DoctorsAndSpecialists,
  TestimonialCarousel,
  ConsultationForm,
} from "@/components/home";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DoctorDescription />
      <Services />
      <DoctorsAndSpecialists />
      <TestimonialCarousel />
      <ConsultationForm />
    </div>
  );
}
