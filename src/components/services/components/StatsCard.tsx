import { Card, CardContent } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";

interface DoctorCardProps {
  value?: string;
  reading?: string;
}

export function StatsCard({ value, reading }: DoctorCardProps) {

    return (
      <Card className="bg-primary flex-1">
        <CardContent className="flex flex-col justify-center items-center">
        <div>
            <h3 className="font-black text-neutral-600 text-8xl flex opacity-30">
                {value} <PlusIcon className="h-24 w-24 "/>
            </h3>
            <p className="font-bold text-md text-center text-gray-500 opacity-80">
                {reading}
            </p>
        </div>
        </CardContent>
      </Card>
    );
}
