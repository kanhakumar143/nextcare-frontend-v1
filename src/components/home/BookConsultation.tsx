"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar"; // or use date picker lib
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { format } from "date-fns";

export default function ConsultationForm() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [agree, setAgree] = useState(false);

  return (
    <div className="bg-gray-100 rounded-3xl p-10 space-y-8 mx-0 md:mx-20 mt-20">
      <h2 className="md:text-4xl text-3xl font-bold text-center">
        Book Your Consultation
      </h2>

      {/* Personal Info */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="ml-1 text-gray-500 text-sm mb-2">Full Name</p>
            <Input
              placeholder="Enter Your Name"
              className="bg-white rounded-sm border-0 shadow-none"
            />
          </div>

          <div>
            <p className="ml-1 text-gray-500 text-sm mb-2">Email Address</p>
            <Input
              placeholder="Enter your email address"
              className="bg-white rounded-sm border-0 shadow-none"
            />
          </div>
          <div>
            <p className="ml-1 text-gray-500 text-sm mb-2">Age</p>
            <Input
              placeholder="Enter your age"
              className="bg-white rounded-sm border-0 shadow-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="ml-1 text-gray-500 text-sm mb-2">Phone Number</p>
            <Input
              placeholder="Enter your number"
              className="bg-white rounded-sm border-0 shadow-none"
            />
          </div>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Appointment Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="ml-1 text-gray-500 text-sm mb-2">Date</p>
            <Popover>
              <PopoverTrigger
                asChild
                className="bg-white rounded-sm border-0 shadow-none"
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
          <div>
            <p className="ml-1 text-gray-500 text-sm mb-2">
              Preferred Doctor(Optional)
            </p>
            <Select>
              <SelectTrigger className="bg-white rounded-sm border-0 shadow-none w-full">
                <SelectValue placeholder="Dr. David Janis" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dr-janis">Dr. David Janis</SelectItem>
                <SelectItem value="dr-smith">Dr. Smith</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p className="ml-1 text-gray-500 text-sm mb-2">Consultation Type</p>

            <Select>
              <SelectTrigger className="bg-white rounded-sm border-0 shadow-none w-full">
                <SelectValue placeholder="General" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="specialist">Specialist</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Additional Information</h3>
        <Textarea
          placeholder="Describe your problem..."
          className="min-h-[100px] bg-white rounded-sm border-0 shadow-none"
        />
      </div>

      {/* Button and Terms */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={agree}
            onCheckedChange={(val) => setAgree(!!val)}
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the terms and conditions and privacy policy
          </label>
        </div>
        <Button
          className="bg-primary text-black hover:bg-lime-500 w-full sm:w-auto py-5"
          disabled={!agree}
        >
          Book my Appointment
        </Button>
      </div>
    </div>
  );
}
