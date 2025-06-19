'use client'

import  DoctorCard from "./DoctorCard";

export default function DoctorDescription() {
  return (
    <section className="px-4 md:px-10 lg:px-27 mt-10 flex flex-col lg:flex-row gap-10 lg:gap-16">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 justify-center">
        <DoctorCard
          name="Dr. Olivia Hartman"
          specialty="Cardiologist"
          key={1}
          image="/doctor_images/Doctor_card_image_1.svg"
        />
        <DoctorCard
          name="Dr. Olivia Hartman"
          specialty="Cardiologist"
          key={2}
          image="/doctor_images/Doctor_card_image_2.svg"
        />
      </div>

      <div className="flex justify-center items-center text-center lg:text-left">
        <p className="text-gray-500 font-medium max-w-xl">
          Experience world-class care tailored to your needs, anytime and anywhere. With trusted specialists and advanced solutions, we bring healthcare closer to you—ensuring convenience and excellence at every step.
        </p>
      </div>
    </section>
  );
}
