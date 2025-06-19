import Image from "next/image";
import Link from "next/link";
import { Bell, UserCircle2 } from "lucide-react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const navList = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Appointments",
      href: "/appointments",
    },
    {
      name: "Doctors",
      href: "/doctors",
    },
    {
      name: "Departments",
      href: "/departments",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between backdrop-blur-md bg-white/60 border-b border-white/30 shadow-md text-black">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/NavbarLogo.svg"
          alt="Logo"
          width={100}
          height={100}
          priority
        />
      </Link>

      <div className="hidden md:flex items-center space-x-6 font-medium">
        {navList.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="hover:text-primary/60 transition-all duration-150 ease-in-out"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center space-x-6  font-medium">
        <Link
          href="/services"
          className="hover:text-primary/60 transition-all duration-150 ease-in-out"
        >
          Services
        </Link>
        <Link
          href="/help"
          className="hover:text-primary/60 transition-all duration-150 ease-in-out"
        >
          Help
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        {/* Notification */}
        <button className="text-black hover:text-primary-200 transition">
          <Bell size={22} />
        </button>

        {/* Profile */}
        <button className="text-black hover:text-primary-200 transition">
          <UserCircle2 size={26} />
        </button>

        {/* CTA Button */}
        <Link
          href="/book"
          className="px-4 py-2 rounded-xl bg-primary text-black font-medium hover:bg-primary/70 transition"
        >
          Book Appointment
        </Link>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
