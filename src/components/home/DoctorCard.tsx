import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface DoctorCardProps {
  name?: string;
  specialty?: string;
  image?: string;
  cardHeading?: string;
  cardDesc?: string;
  side?: "left" | "right";
  cardSubHeading?: string;
}

export default function DoctorCard({
  name,
  specialty,
  image,
  cardHeading,
  cardDesc,
  side,
  cardSubHeading,
}: DoctorCardProps) {
  const hasDoctorInfo = name && image && specialty;
  const isCenterCard =
    !name && !specialty && image && cardHeading && cardDesc && !side;
  const isSideCard =
    !name &&
    !specialty &&
    image &&
    cardHeading &&
    cardDesc &&
    side &&
    cardSubHeading;

  if (hasDoctorInfo) {
    return (
      <Card
        className={cn(
          "w-[300px] h-[220px] relative overflow-hidden rounded-2xl p-6 border border-white/20 backdrop-blur-lg bg-white/20 shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.015] hover:-translate-y-1 hover:shadow-2xl group"
        )}
      >
        <Badge className="bg-orange-500 text-white">New</Badge>
        <div className="absolute -right-4 top-20">
          <Image
            src={"/doctor_images/Doctor_card_bg_vector.svg"}
            alt={"vector_img"}
            width={220}
            height={220}
          />
        </div>

        <CardContent className="z-10 px-0">
          <div className="flex gap-0">
            <div className="flex flex-col items-start w-2/3">
              <h3 className="text-xl font-bold text-black drop-shadow-sm">
                {name}
              </h3>
              <p className="text-sm text-gray-700 font-medium">{specialty}</p>
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

          <div className="absolute left-4 bottom-4 bg-black bg-opacity-80 rounded-full p-2 group-hover:scale-110 transition">
            <ArrowUpRight className="text-white" size={20} />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isCenterCard) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Card
          className="w-full max-w-sm aspect-[16/10] rounded-3xl shadow-lg p-1 relative overflow-hidden
          border border-white/20 backdrop-blur-lg bg-white/20
          transition duration-300 ease-in-out hover:scale-[1.015] hover:-translate-y-1 hover:shadow-xl group"
        >
          <CardContent className="z-10 p-0 h-full w-full relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={image!}
                alt="Doctor image"
                fill
                className="object-cover rounded-3xl"
              />
            </div>

            {/* Floating Icon */}
            <div className="absolute right-4 top-4 bg-black bg-opacity-80 rounded-full p-2 z-20 group-hover:scale-110 transition-transform">
              <ArrowUpRight className="text-white" size={20} />
            </div>
          </CardContent>
        </Card>

        {/* Heading + Description */}
        <div className="py-3 px-3 md:px-16 text-center">
          <h3 className="font-semibold text-2xl mt-2 text-black drop-shadow-sm">
            {cardHeading}
          </h3>
          <p className="text-gray-600 mt-2">{cardDesc}</p>
        </div>
      </div>
    );
  }

  if (isSideCard) {
    const isLeft = side === "left";

    const descriptionBlock = (
      <div className={`py-3 px-3 ${isLeft ? "md:text-right" : ""}`}>
        <h3 className="font-semibold text-2xl mt-2 text-black drop-shadow-sm">
          {cardHeading}
        </h3>
        <h4 className="font-medium text-lg text-gray-600">{cardSubHeading}</h4>
        <p className="text-gray-500 mt-2">{cardDesc}</p>
      </div>
    );

    return (
      <div className="md:flex md:justify-center md:items-end">
        {isLeft ? descriptionBlock : null}

        <Card
          className="w-full max-w-sm aspect-[16/10] rounded-3xl shadow-lg p-1 relative overflow-hidden
          border border-white/20 backdrop-blur-lg bg-white/20
          transition duration-300 ease-in-out hover:scale-[1.015] hover:-translate-y-1 hover:shadow-xl group"
        >
          <CardContent className="z-10 p-0 h-full w-full relative">
            <div className="absolute inset-0">
              <Image
                src={image!}
                alt="Doctor image"
                fill
                className="object-cover rounded-3xl"
              />
            </div>

            <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 rounded-full p-2 z-20 group-hover:scale-110 transition-transform">
              <ArrowUpRight className="text-white" size={20} />
            </div>
          </CardContent>
        </Card>

        {!isLeft && descriptionBlock}
      </div>
    );
  }
}
