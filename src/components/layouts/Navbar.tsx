import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-8 pb-5 px-6 md:px-10 lg:px-50 flex items-center justify-between bg-white">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/NavbarLogo.svg"
          alt="Logo"
          width={110}
          height={110}
          priority
        />
      </Link>
      <div className="flex gap-5">
        <Button className="text-black hover:bg-lime-500 py-5 px-7 font-medium text-md w-full sm:w-auto hidden sm:flex">
          Book an Appointment
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[90vw] max-w-md">
            <SheetHeader>
              <SheetTitle className="text-lg ml-4 mt-2">Menu</SheetTitle>
            </SheetHeader>
            <NavigationMenu className="items-start mt-6">
              <NavigationMenuList className="flex flex-col space-y-4 items-start px-4 ml-4">
                <NavigationMenuItem>
                  <Link href="/" className="text-lg font-light hover:underline">
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/dashboard"
                    className="text-lg font-light hover:underline"
                  >
                    Dashboard
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/about"
                    className="text-lg font-light hover:underline"
                  >
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/contact"
                    className="text-lg font-light hover:underline"
                  >
                    Services
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button className="px-8 py-2 rounded-full text-black">
                    Login
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
