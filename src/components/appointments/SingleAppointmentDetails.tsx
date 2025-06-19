"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import clsx from "clsx";

interface SingleAppointmentDetailsprops {
    drName: string;
    drDesignation: string;
    drAddress: string;
    dataAndTime: string;
    paymentStatus: boolean;
}

const SingleAppointmentDetails = ({drName, drDesignation, drAddress, dataAndTime, paymentStatus}: SingleAppointmentDetailsprops) => {

  return (
    <div className="md:flex md:justify-between border-b-2 border-gray-200 my-5 py-3 items-end">
      <div className="flex gap-5">
        <Image
            src="/doctor_images/Doctor_Image_specialists_1.svg"
            alt="Doctor profile picture"
            width={150}
            height={190}
            className="object-cover"
        />
        <div className="flex flex-col justify-between">
            <div>
                <p className="text-gray-600 font-medium">Name: <span className="text-black font-semibold">{drName}</span></p>
                <p className="text-sm text-gray-400 font-light">{drDesignation}</p>
                <p className="text-gray-600 font-medium">Address: <span className="text-black font-semibold">{drAddress}</span></p>
            </div>
            <p className="font-light text-gray-500">Date & Time : {dataAndTime}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-5 md:mt-0">
        <Button className={clsx("bg-white border-primary border-2 text-black rounded-xs", 
            paymentStatus ? "bg-primary" : ""
        )}>
            {paymentStatus ? "Paid" : "Pay Here"}
        </Button>
        <Button className="bg-white border-orange-500 border-2 text-orange-500 rounded-xs hover:bg-orange-500 hover:text-white">
            Cancel Appointment
        </Button>
      </div>
    </div>
  );
};

export default SingleAppointmentDetails;
