"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function HeroSection() {
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-around px-6 mt-20 md:px-0 py-10 gap-10 bg-white">
      <div
        className={`max-w-xl text-center md:text-left transition-all duration-700 ease-out ${
          animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-light text-black leading-tight">
          Your Health,
          <br />
          <span className="font-bold text-gray-900">Simplified.</span>
        </h1>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-4 justify-center md:justify-start">
          <Button className="text-black hover:bg-lime-500 py-7 px-7 font-medium text-md w-full sm:w-auto md:hidden flex transition hover:scale-[1.02]">
            Book an Appointment
          </Button>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#" className="font-normal underline text-lg text-gray-900">
              Find a Specialist 
            </a>
            <div className="flex -space-x-2">
              {["1", "2", "3"].map((id) => (
                <Avatar key={id} className="w-10 h-10 border-2 border-white">
                  <AvatarImage
                    src={`/doctor_images/Ellipse_${id}.svg`}
                    alt={`Doctor ${id}`}
                  />
                </Avatar>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`relative w-full max-w-lg transition-all duration-700 ease-out delay-100 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="overflow-hidden rounded-3xl ">
          <Image
            src="/Herosection_Image.svg"
            alt="CT Scan"
            width={650}
            height={400}
            className="rounded-3xl object-cover w-full h-auto"
          />
        </div>

        {/* Glassy “Watch” Button */}
        <Button
          className="absolute bottom-2 right-2 rounded-full px-4 py-3 md:px-6 md:py-5 w-[110px] md:w-[158px] text-md sm:text-xl font-semibold
          backdrop-blur-lg border border-primary/30 text-black hover:bg-primary/80
          transition-all duration-300 hover:scale-[1.03] shadow-md bg-primary cursor-pointer"
        >
          Watch <Play className="ml-2 w-6 h-6 sm:w-8 sm:h-8 text-black" />
        </Button>
      </div>
    </section>
  );
}
