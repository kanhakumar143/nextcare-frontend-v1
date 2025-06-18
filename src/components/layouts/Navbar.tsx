import React from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="border-gray-200 py-4 flex items-center justify-between mt-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/NavbarLogo.svg"
          alt="Logo"
          width={92}
          height={92}
          priority
        />
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuItem>
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" className="text-sm font-medium hover:underline">
              About
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button variant="outline">Login</Button>
    </nav>
  );
};

export default Navbar;
