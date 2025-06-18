'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around px-20 py-12 gap-8 bg-white">
      <div className="max-w-xl">
        <h1 className="text-8xl font-light text-black">
          Your Health,
          <br />
          <span className="font-bold text-gray-900">Simplified.</span>
        </h1>

        <div className="mt-8 flex items-center gap-6 flex-wrap">
          <Button className=" text-black hover:bg-lime-500 py-7 px-6 font-medium text-md">
            Book an Appointment
          </Button>

          <div className="flex items-center gap-4">
            <a href="#" className="font-normal underline text-lg text-gray-900">
              Find a Specialist
            </a>
            <div className="flex -space-x-2">
              <Avatar className="w-12 h-12 border-2 border-white">
                <AvatarImage src="/doctor_images/Ellipse_1.svg" alt="Doctor 1" />
              </Avatar>
              <Avatar className="w-12 h-12 border-2 border-white">
                <AvatarImage src="/doctor_images/Ellipse_2.svg" alt="Doctor 2" />
              </Avatar>
              <Avatar className="w-12 h-12 border-2 border-white">
                <AvatarImage src="/doctor_images/Ellipse_3.svg" alt="Doctor 3" />
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/Herosection_Image.svg"
            alt="CT Scan"
            width={550}
            height={370}
            className="rounded-3xl object-cover"
          />
        </div>
        <Button className="absolute bottom-2 right-0 text-black hover:bg-lime-400 rounded-full px-8 py-4 text-xl font-bold h-13 w-45">
          Watch <Play className="ml-2 w-10 h-10 text-black font-bold" size={20}/>
        </Button>
      </div>
    </section>
  );
}
