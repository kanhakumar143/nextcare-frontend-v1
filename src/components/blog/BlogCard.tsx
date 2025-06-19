import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface BlogCardProps{
    category: string;
    date: string;
    blogHeading: string;
    blogDesc: string;
    image: string;
}

export function BlogCard({category, date, blogHeading, blogDesc, image} : BlogCardProps) {

    return (
      <Card className="border-1 shadow-none">
        <CardContent>
        <div>
            <Image
                src={image}
                alt="CT Scan"
                width={650}
                height={390}
                className="rounded-2xl object-cover w-full h-auto"
            />
        </div>
        <div className="flex flex-col mt-1 md:p-2 p-1">
            <div className="flex gap-2 items-center">
                <Badge className="bg-amber-700">{category}</Badge>
                <p className="md:text-sm text-xs text-gray-600"> {date}</p>
            </div>
            <div className="mt-3">
                <p className="md:text-xl text-lg font-semibold">{blogHeading}</p>
            </div>
            <div>
                <p className="text-gray-500 md:text-md text-sm">{blogDesc}</p>
            </div>
        </div>
        </CardContent>
        <CardFooter>
            <Button className="ml-2 text-black">
                Read more
            </Button>
        </CardFooter>
      </Card>
    );
}
