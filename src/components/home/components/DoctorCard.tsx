import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DoctorCardProps {
  name?: string;
  specialty?: string;
  image?: string;
  cardHeading?: string;
  cardDesc?: string;
  side?: "left" | "right";
  cardSubHeading?: string;
}

export function DoctorCard({
  name,
  specialty,
  image,
  cardHeading,
  cardDesc,
  side,
  cardSubHeading,
}: DoctorCardProps) {
  if (name && image && specialty) {
    return (
      <Card className="w-[300px] h-[220px] rounded-2xl shadow-lg p-6 relative overflow-hidden gap-1">
        <Badge className="bg-orange-500 text-white">New</Badge>
        <div className="absolute -right-4 top-20">
          <Image
            src={"/doctor_images/Doctor_card_bg_vector.svg"}
            alt={"vector_img"}
            width={220}
            height={220}
            // className="rounded-md"
          />
        </div>
        <CardContent className="z-10 px-0">
          <div className="flex gap-0">
            <div className="flex flex-col items-start w-2/3">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-sm text-gray-500 font-medium">{specialty}</p>
            </div>
            <div className="mt-1 flex justify-end w-1/3">
              <div className="w-[210px] h-[210px] absolute right-0">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="absolute left-4 bottom-4 ml-auto bg-black rounded-full p-2">
            <ArrowUpRight className="text-white" size={20} />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!name && !specialty && image && cardHeading && cardDesc && !side) {
    return (
      <div className=" flex flex-col items-center justify-center">
        <Card className="w-full max-w-sm aspect-[16/10] rounded-3xl shadow-lg p-1 relative overflow-hidden">
          <CardContent className="z-10 p-0 h-full w-full relative">
            <div className="absolute inset-0">
              <Image
                src={image}
                alt="Doctor image"
                fill
                className="object-cover rounded-3xl"
              />
            </div>

            <div className="absolute right-4 top-4 bg-black rounded-full p-2 z-20">
              <ArrowUpRight className="text-white" size={20} />
            </div>
          </CardContent>
        </Card>
        <div className="py-3 px-3 md:px-16">
          <h3 className="font-semibold text-2xl mt-2">{cardHeading}</h3>
          <p className="text-gray-500 mt-2">{cardDesc}</p>
        </div>
      </div>
    );
  }

  if (
    !name &&
    !specialty &&
    image &&
    cardHeading &&
    cardDesc &&
    side &&
    cardSubHeading
  ) {
    return (
      <div className="md:flex md:justify-center md:items-end">
        {side === "left" && (
          <div className="py-3 px-3 md:text-right">
            <h3 className="font-semibold text-2xl mt-2">{cardHeading}</h3>
            <h4 className="font-medium text-lg text-gray-600">
              {cardSubHeading}
            </h4>
            <p className="text-gray-500 mt-2">{cardDesc}</p>
          </div>
        )}
        <Card className="w-full max-w-sm aspect-[16/10] rounded-3xl shadow-lg p-1 relative overflow-hidden">
          <CardContent className="z-10 p-0 h-full w-full relative">
            <div className="absolute inset-0">
              <Image
                src={image}
                alt="Doctor image"
                fill
                className="object-cover rounded-3xl"
              />
            </div>

            <div className="absolute bottom-4 left-4 bg-black rounded-full p-2 z-20">
              <ArrowUpRight className="text-white" size={20} />
            </div>
          </CardContent>
        </Card>
        {side === "right" && (
          <div className="py-3 px-3">
            <h3 className="font-semibold text-2xl mt-2">{cardHeading}</h3>
            <h4 className="font-medium text-lg text-gray-600">
              {cardSubHeading}
            </h4>
            <p className="text-gray-500 mt-2">{cardDesc}</p>
          </div>
        )}
      </div>
    );
  }
}
