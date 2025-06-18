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
    <nav className=" py-4 flex items-center justify-between pt-8 px-50">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/NavbarLogo.svg"
          alt="Logo"
          width={132}
          height={132}
          priority
        />
      </Link>

      {/* <Button variant="outline">Login</Button> */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <Menu className="w-18 h-18" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[90vw] max-w-md">
          <SheetHeader>
            <SheetTitle className="text-lg ml-4">Menu</SheetTitle>
          </SheetHeader>
          <NavigationMenu className="items-start">
            <NavigationMenuList className="flex flex-col space-y-4 items-start px-4 ml-8">
              <NavigationMenuItem>
                <Link href="/" className="text-lg font-light hover:underline">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/about"
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
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
