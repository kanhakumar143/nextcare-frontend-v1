import { DoctorCard } from '.';
import { StatsCard } from './StatsCard';

export default function Services() {
  return (
    <div className="bg-slate-100 flex flex-col gap-10 p-6 sm:p-8 md:p-10 mt-20 rounded-2xl">
      <div className="w-full flex justify-center items-center mt-6 text-center">
        <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-snug">
          <span className="bg-primary pl-4 pr-2 py-2">Expert Care,</span> Anytime You Need
        </h3>
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-2 mt-6 px-2 md:px-10">
        <DoctorCard
          image="/doctor_images/Services_image_1.svg"
          cardHeading="24/7 Emergency Care"
          cardDesc="Round-the-clock care when you need it most, ensuring rapid response and expert treatment for urgent medical situations."
        />
        <DoctorCard
          image="/doctor_images/Services_image_2.svg"
          cardHeading="Specialist Consultations"
          cardDesc="Access top-rated specialists across various fields, providing personalized diagnosis and treatment tailored to your needs."
        />
        <DoctorCard
          image="/doctor_images/Services_image_3.svg"
          cardHeading="Diagnostics and Lab Tests"
          cardDesc="Comprehensive testing and accurate results with state-of-the-art diagnostic technology to support your health journey."
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid md:grid-cols-3 flex-wrap justify-center items-center gap-6 mt-8 px-2 md:px-30">
        <StatsCard reading="Satisfied Patients World-wide" value="50k" />
        <StatsCard reading="Advanced Diagnostics Performed" value="300" />
        <StatsCard reading="Certified Specialists." value="100" />
      </div>
    </div>
  );
}
