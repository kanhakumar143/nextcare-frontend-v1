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
                className="rounded-r-3xl object-cover w-full h-auto"
            />
        </div>
        <div className="flex flex-col mt-1 p-2">
            <div className="flex gap-2">
                <Badge className="bg-amber-700">{category}</Badge>
                <p className="text-sm text-gray-600"> {date}</p>
            </div>
            <div className="mt-3">
                <p className="text-xl font-semibold">{blogHeading}</p>
            </div>
            <div>
                <p className="text-gray-500">{blogDesc}</p>
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
