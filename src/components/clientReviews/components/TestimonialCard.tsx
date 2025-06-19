import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
  image: string;
  text: string;
  date: string;
  rating: number;
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive?: boolean;
}

export default function TestimonialCard({ testimonial, isActive }: TestimonialCardProps) {
  const { name, image, text, date, rating } = testimonial;

  return (
    <Card
      className={cn(
        "rounded-2xl shadow-lg p-6 w-full sm:w-[350px] transition-all duration-300",
        isActive ? "bg-white" : "bg-muted"
      )}
    >
      <CardContent className="flex flex-col gap-4 p-0">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{text}</p>
        <div className="flex justify-between items-center pt-2">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  "text-green-600",
                  i < rating ? "opacity-100" : "opacity-30"
                )}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
      </CardContent>
    </Card>
  );
}
