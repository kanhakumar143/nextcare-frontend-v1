"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { BlogCard } from "./BlogCard";

const BlogData = [
    {
        title:"The Ultimate Guide to a Balanced Diet",
        desc: "Discover how a well-balanced diet can improve your energy, mental clarity, and long-term health.",
        date: "Tuesday, 17 May 2022",
        category: "Nutrition & Diet",
        image: "/blog_images/Blog_temp_img_1.svg"
    },
    {
        title:"Quick 20-Min Workouts",
        desc: "Get fit in no time! These short, effective workouts are perfect for busy schedules, helping you stay active and healthy ...",
        date: "Tuesday, 17 May 2022",
        category: "Fitness",
        image: "/blog_images/Blog_temp_img_2.svg"
    },
    {
        title:"Hormonal Changes in Your 30s",
        desc: "Understanding the hormonal shifts that occur in your 30s can help you stay on top of your health. Learn what to expect and how ...",
        date: "Tuesday, 17 May 2022",
        category: "Women’s Health",
        image: "/blog_images/Blog_temp_img_3.svg"
    },
    {
        title:"Daily Mindfulness Tips",
        desc: "Stay grounded with simple mindfulness practices. Learn how to integrate breathing exercises, meditation, and ...",
        date: "Tuesday, 17 May 2022",
        category: "Mental Health",
        image: "/blog_images/Blog_temp_img_4.svg"
    },
]

const HealthBlog = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="mt-20 relative">
      <div className="flex p-4 relative z-0">
        <div className="bg-green-900 rounded-l-3xl px-15 flex flex-col justify-center p-6">
          <h2 className="text-white font-bold text-5xl">
            Your Guide to Wellbeing.
          </h2>
          <h3 className="text-white font-medium text-lg">
            Discover expert advice, wellness tips, and the latest trends in
            healthcare to guide your journey to better health.
          </h3>
        </div>
        <div>
          <Image
            src="/blog_images/Blog_header_image.svg"
            alt="CT Scan"
            width={650}
            height={390}
            className="rounded-r-3xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Overlay card */}
      <div className="bg-white shadow-2xl rounded-2xl p-10 absolute z-10 left-1/2 -translate-x-1/2 top-160 w-[80%]">
        <h3 className="font-medium text-2xl">
          Find Answers to Your Health Questions
        </h3>
        <div className="flex w-full gap-4 mt-7">
            <div className="grid grid-cols-2 gap-4 w-1/4">
            <div>
                <p className="ml-1 text-gray-500 text-sm mb-2">Category</p>
                <Select>
                <SelectTrigger className="bg-gray-100 rounded-sm border-0 shadow-none w-full">
                    <SelectValue placeholder="Dr. David Janis" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="dr-janis">BMI</SelectItem>
                    <SelectItem value="dr-smith">Good vs Bad</SelectItem>
                </SelectContent>
                </Select>
            </div>

            <div>
                <p className="ml-1 text-gray-500 text-sm mb-2">Date</p>
                <Popover>
                <PopoverTrigger
                    asChild
                    className="bg-gray-100 rounded-sm border-0 shadow-none"
                >
                    <Button variant="outline" className="w-full text-gray-500">
                    {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} />
                </PopoverContent>
                </Popover>
            </div>
            
            </div>
            <div className="w-2/4">
                <p className="ml-1 text-gray-500 text-sm mb-2">Keyword</p>
                <Input
                placeholder="Enter Your Name"
                className="bg-gray-100 rounded-sm border-0 shadow-none"
                />
            </div>
            <div className="w-1/4 flex items-end">
                <Button className="w-full">Search</Button>
            </div>
        </div>
      </div>

      <div className="mt-40">
        <div className="text-center">
            <h2 className="font-bold text-5xl">Health Blog</h2>
            <p className="text-gray-500 font-medium text-lg">Read our latest news.</p>
        </div>
        <div className="grid grid-cols-2 p-10 gap-x-10 gap-y-8">
            {BlogData.map((data, index) => {
                return <BlogCard blogDesc={data.desc} category={data.category} blogHeading={data.title} date={data.date} key={index} image={data.image}/>
            })}
        </div>
      </div>  
    </div>
  );
};

export default HealthBlog;
