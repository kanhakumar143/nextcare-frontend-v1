import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Med",
  description: "@Profile ",
};

export default function Blogs() {
  return (
    <div className="mt-20">
      <div>
        <div className="w-fit p-10 bg-[#EFEBFF] flex items-center justify-center rounded-md shadow-md">
          <CircleUser className="h-18 w-18" />
        </div>
      </div>
      <div className="mt-6">
        <p>Kanha Kumar</p>
        <div className="border-1 border-gray-100 w-1/2"></div>
        <p className="border-b-1 border-gray-100 w-fit mt-4">
          CONTACT INFORMATION
        </p>
        <div className="w-1/2">
          <p className="flex justify-between ">
            Email id: <span className="text-blue-400">ramnepal@gmail.com</span>
          </p>
          <p className="flex justify-between ">
            Phone : <span className="text-blue-400">+9779812314253</span>
          </p>
          <p className="flex justify-between ">
            Address : <span className="text-blue-400">Odisha</span>
          </p>
        </div>
        <p className="border-b-1 border-gray-100 w-fit mt-6">
          BASIC INFORMATION
        </p>
        <div className="w-1/2">
          <p className="flex justify-between ">
            Gender: <span className="text-blue-400">Male</span>
          </p>
          <p className="flex justify-between ">
            Birthday : <span className="text-blue-400">20 July, 2000</span>
          </p>
        </div>

        <div className="w-1/4 flex justify-between mt-7">
          <Button
            variant={"outline"}
            className="rounded-full px-10 py-5 border border-primary cursor-pointer"
          >
            Edit
          </Button>
          <Button
            variant={"outline"}
            className="rounded-full px-10 py-5 border-primary cursor-pointer"
          >
            Save information
          </Button>
        </div>
      </div>
    </div>
  );
}
