'use client'

// import { StatsCard } from "../services/components/StatsCard";
import { DoctorCard } from "./components/DoctorCard";

export default function DoctorDescription() {
  return (
    <section className="px-35 mt-10 flex gap-16">
        <div className="flex gap-6">
            <DoctorCard name="Dr. Olivia Hartman" specialty="Cardiologist" key={1} image={"/doctor_images/Doctor_card_image_1.svg"}/>
            <DoctorCard name="Dr. Olivia Hartman" specialty="Cardiologist" key={2} image={"/doctor_images/Doctor_card_image_2.svg"}/>
        </div>
        <div className="flex justify-center items-center">
            <p className="text-gray-500 font-medium">
                Experience world-class care tailored to your needs, anytime and anywhere. With trusted specialists and advanced solutions, we bring healthcare closer to you—ensuring convenience and excellence at every step.
            </p>
        </div>
        
    </section>
  );
}
