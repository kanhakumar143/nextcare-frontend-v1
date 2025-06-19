"use client";

import { useState } from "react";
import TestimonialCard from "./components/TestimonialCard";

const testimonials = [
  {
    name: "Danial Golman",
    image: "/avatars/danial.png",
    text: "This platform transformed how we manage SEO campaigns—saving us time and boosting our results effortlessly! The open marketplace and smart management tools are game-changers for our agency’s SEO strategy.",
    date: "Sep 05, 2024",
    rating: 5,
  },
  {
    name: "Cameron Williamson",
    image: "/avatars/cameron.png",
    text: "This platform transformed how we manage SEO campaigns—saving us time and boosting our results effortlessly! The open marketplace and smart management tools are game-changers for our agency’s SEO strategy.",
    date: "Sep 05, 2024",
    rating: 5,
  },
  {
    name: "Darrell Steward",
    image: "/avatars/darrell.png",
    text: "This platform transformed how we manage SEO campaigns—saving us time and boosting our results effortlessly! The open marketplace and smart management tools are game-changers for our agency’s SEO strategy.",
    date: "Sep 05, 2024",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 bg-white py-10 md:relative">
        <div className="h-[370px] w-[700px] rounded-4xl bg-primary opacity-20 mt-25 md:flex hidden"/>
      <div className="flex flex-col items-center gap-4 py-10 md:absolute">
        <div className="flex justify-center items-center mb-10 px-5">
          <h3 className="font-bold text-3xl md:text-4xl">
            What our clients talk about us
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl w-full justify-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              isActive={index === active}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-lime-600" : "w-2 bg-muted-foreground"
              }`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
