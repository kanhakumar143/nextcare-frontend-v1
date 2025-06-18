// import Image from 'next/image'
// import { Button } from "@/components/ui/button"
// import { Play } from "lucide-react"
// import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { DoctorCard } from '../home/components/DoctorCard';
import { StatsCard } from './components/StatsCard';

export default function Services() {
  return (
    <div className='bg-slate-100 flex flex-col gap-10 p-10 mt-20 rounded-2xl'>
        <div className='w-full flex justify-center items-center mt-10'>
            <h3 className='font-bold text-4xl'>
                <span className='bg-primary pl-8 pr-3 py-3'>Expert Care,</span>
                Anytime You Need
            </h3>
        </div>
        <div className='flex justify-around px-40 mx-0 mt-10 gap-6'>
            <DoctorCard image='/doctor_images/Services_image_1.svg' cardHeading='24/7 Emergency Care' cardDesc='Round-the-clock care when you need it most, ensuring rapid response and expert treatment for urgent medical situations.'/>
            <DoctorCard image='/doctor_images/Services_image_2.svg' cardHeading='Specialist Consultations' cardDesc='Access top-rated specialists across various fields, providing personalized diagnosis and treatment tailored to your needs ss'/>
            <DoctorCard image='/doctor_images/Services_image_3.svg' cardHeading='Diagnostics and Lab Tests' cardDesc='Comprehensive testing and accurate results with state-of-the-art diagnostic technology to support your health journey.'/>
        </div>
        <div className="flex justify-around items-center px-40 mx-10 gap-5">
            <StatsCard reading="Satisfied Patients World-wide" value="50k"/>
            <StatsCard reading="Advanced Diagnostics Performed Daily" value="300"/>
            <StatsCard reading="Certified Specialists." value="100"/>
        </div>
    </div>
  );
}
