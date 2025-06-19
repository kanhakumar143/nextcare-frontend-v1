import { DoctorCard } from "../home/components/DoctorCard";
import { Button } from "../ui/button";

export default function DoctorsAndSpecialists() {
  return (
    <div className="mt-40 px-5 md:px-25 border-b-2 pb-10">
      <div className="flex md:flex-row flex-col gap-3 md:justify-between">
        <h3 className="font-bold text-3xl md:text-4xl"><span className="md:border-b-3">Doctors </span> & Specialists</h3>
        <a href="#" className="font-normal underline text-md md:text-lg text-gray-900 hidden md:flex">
          See all specialists
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-18 gap-y-10">
        <DoctorCard side="right" cardSubHeading="Cardiologist" cardHeading="Dr. Sophia Bennett" cardDesc="(MD – Doctor of Medicine, FACC – Fellow of the American College of Cardiology)" image="/doctor_images/Doctor_Image_specialists_1.svg"/>
        <DoctorCard side="right" cardSubHeading="Cardiologist" cardHeading="Dr. Sophia Bennett" cardDesc="(MD – Doctor of Medicine, FACC – Fellow of the American College of Cardiology)" image="/doctor_images/Doctor_Image_specialists_2.svg"/>
        <DoctorCard side="left" cardSubHeading="Cardiologist" cardHeading="Dr. Sophia Bennett" cardDesc="(MD – Doctor of Medicine, FACC – Fellow of the American College of Cardiology)" image="/doctor_images/Doctor_Image_specialists_3.svg"/>
        <DoctorCard side="left" cardSubHeading="Cardiologist" cardHeading="Dr. Sophia Bennett" cardDesc="(MD – Doctor of Medicine, FACC – Fellow of the American College of Cardiology)" image="/doctor_images/Doctor_Image_specialists_4.svg"/>
      </div>
      <div className="flex justify-center py-5 mt-6">
        <Button className="md:hidden py-6 rounded-full text-black">
          See all specialists
        </Button>
      </div>
    </div>
  );
}
