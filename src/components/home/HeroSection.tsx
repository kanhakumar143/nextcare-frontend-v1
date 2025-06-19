'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around px-6 mt-20 md:px-0 py-10 gap-10 bg-white">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-light text-black leading-tight">
          Your Health,
          <br />
          <span className="font-bold text-gray-900">Simplified.</span>
        </h1>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-4 justify-center md:justify-start">
          <Button className="text-black hover:bg-lime-500 py-7 px-7 font-medium text-md w-full sm:w-auto md:hidden flex">
            Book an Appointment
          </Button>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#" className="font-normal underline text-lg text-gray-900">
              Find a Specialist
            </a>
            <div className="flex -space-x-2">
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src="/doctor_images/Ellipse_1.svg" alt="Doctor 1" />
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src="/doctor_images/Ellipse_2.svg" alt="Doctor 2" />
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src="/doctor_images/Ellipse_3.svg" alt="Doctor 3" />
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-lg">
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/Herosection_Image.svg"
            alt="CT Scan"
            width={650}
            height={400}
            className="rounded-3xl object-cover w-full h-auto"
          />
        </div>
        <Button className="absolute bottom-0.5 md:bottom-2 right-0 md:right-2 text-black hover:bg-lime-400 rounded-full px-2 py-4 md:py-6 w-[108px] md:w-[158px] text-md sm:text-xl font-semibold">
          Watch <Play className="ml-2 w-6 h-6 sm:w-8 sm:h-8 text-black" />
        </Button>
      </div>
    </section>
  );
}
