"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";

const navList = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Appointments", href: "/appointments" },
  { name: "Blog", href: "/blog" },
];

const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <AlignRight className="w-6 h-6 text-black md:hidden" />
        </SheetTrigger>
        <SheetContent className="bg-white/20 backdrop-blur-md border border-white/20 shadow-xl">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex flex-col px-4 pb-4 space-y-2 text-sm font-medium text-black">
            {navList.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-black hover:bg-primary/70 transition"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/book"
              className="mt-3 px-4 py-2 text-center rounded-md bg-primary text-black hover:bg-primary/70 transition"
            >
              Book Appointment
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
