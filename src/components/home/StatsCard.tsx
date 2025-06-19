import { Card, CardContent } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";

interface DoctorCardProps {
  value?: string;
  reading?: string;
}

export function StatsCard({ value, reading }: DoctorCardProps) {

    return (
      <Card className="bg-primary h-[100px] sm:h-auto rounded-4xl">
        <CardContent className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
            <h3 className="font-black  text-neutral-600 text-5xl md:text-8xl flex opacity-30">
                {value} <PlusIcon className="h-12 w-12 md:h-24 md:w-24" strokeWidth={3} strokeLinecap="square"/>
            </h3>
            <p className="font-semibold text-xs md:text-lg text-center text-gray-500 opacity-80">
                {reading}
            </p>
        </div>
        </CardContent>
      </Card>
    );
}
