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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { CheckCircle } from "lucide-react";

export default function ConsultationForm() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [agree, setAgree] = useState(false);

  // form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [doctor, setDoctor] = useState("Dr. David Janis");
  const [type, setType] = useState("General");
  const [description, setDescription] = useState("");

  const [openDialog, setOpenDialog] = useState(false);

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
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              className="bg-white rounded-sm border-0 shadow-none"
            />
          </div>
          <div>
            <p className="ml-1 text-gray-500 text-sm mb-2">Email Address</p>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="bg-white rounded-sm border-0 shadow-none"
            />
          </div>
          <div>
            <p className="ml-1 text-gray-500 text-sm mb-2">Age</p>
            <Input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className="bg-white rounded-sm border-0 shadow-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="ml-1 text-gray-500 text-sm mb-2">Phone Number</p>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              <PopoverTrigger asChild>
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
              Preferred Doctor (Optional)
            </p>
            <Select onValueChange={(val) => setDoctor(val)} defaultValue="Dr. David Janis">
              <SelectTrigger className="bg-white rounded-sm border-0 shadow-none w-full">
                <SelectValue placeholder="Dr. David Janis"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Dr. David Janis">Dr. David Janis</SelectItem>
                <SelectItem value="Dr. Smith">Dr. Smith</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p className="ml-1 text-gray-500 text-sm mb-2">Consultation Type</p>
            <Select onValueChange={(val) => setType(val)}>
              <SelectTrigger className="bg-white rounded-sm border-0 shadow-none w-full">
                <SelectValue placeholder="General"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General">General</SelectItem>
                <SelectItem value="Specialist">Specialist</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Additional Information</h3>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your problem..."
          className="min-h-[100px] bg-white rounded-sm border-0 shadow-none"
        />
      </div>

      {/* Button & Terms */}
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

        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button
              onClick={() => setOpenDialog(true)}
              className="bg-primary text-black hover:bg-lime-500 w-full sm:w-auto py-5"
              disabled={!agree}
            >
              Book my Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-2xl p-6 sm:p-8 bg-white shadow-xl border border-gray-200">
            <div className="flex justify-center mb-4">
              <CheckCircle className="text-green-600 w-14 h-14" />
            </div>
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                Appointment Confirmed
              </DialogTitle>
              <DialogDescription className="text-gray-600 mt-1">
                Here are your appointment details. Please keep this for your
                reference.
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <p>
                <strong>Name:</strong> {name}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Age:</strong> {age}
              </p>
              <p>
                <strong>Phone:</strong> {phone}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {date ? format(date, "PPP") : "Not selected"}
              </p>
              <p>
                <strong>Doctor:</strong> {doctor || "Not selected"}
              </p>
              <p>
                <strong>Type:</strong> {type}
              </p>
              <p className="sm:col-span-2">
                <strong>Problem:</strong> {description}
              </p>
            </div>

            <div className="mt-6 text-center">
              <Button
                variant="outline"
                className="rounded-full px-6 py-2 text-sm"
                onClick={() => setOpenDialog(false)}
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
