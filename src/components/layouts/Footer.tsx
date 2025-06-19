import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Left section */}
        <div className="col-span-1 lg:col-span-1 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur. Eget morbi aliquet tristique et accumsan.
          </p>
          <p>
            <strong>Made with</strong> <span className="text-red-500">❤️</span> <strong>in India</strong>
          </p>
          <div className="flex gap-4 mt-4">
            <Facebook className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
            <Linkedin className="w-5 h-5" />
          </div>
          <p className="text-primary">Powered by Nextcare</p>
        </div>

        {/* About Health */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold mb-2">About Health</h4>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Press & Media</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Advertise with Us</a>
          <a href="#">Contact Us</a>
        </div>

        {/* For Patients / Practices */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">For Patients</h4>
            <a href="#">Sign up</a>
            <a href="#">Log in</a>
            <a href="#">Subscribe to our blog</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mt-4 mb-2">For Practices</h4>
            <a href="#">List Your Practice</a>
            <a href="#">Practice Portal</a>
            <a href="#">Practice Pricing</a>
          </div>
        </div>

        {/* Specialties */}
        <div className="w-full max-w-2xl">
            <h4 className="font-semibold mb-2">Specialties</h4>
            <div className="grid grid-cols-1 gap-2">
                <a href="#">Walk-In Medical Clinic</a>
                <a href="#">Naturopath</a>
                <a href="#">Mental Health Practitioner</a>
                <a href="#">Physiotherapist</a>
                <a href="#">Optometrist</a>
                <a href="#">Dietitian</a>
                <a href="#">Chiropractor</a>
            </div>
        </div>

        <div className="flex flex-col gap-2 mt-7">
            <a href="#">Audiologist</a>
            <a href="#">Massage Therapist</a>
            <a href="#">Osteopath</a>
            <a href="#">Pharmacy</a>
            <a href="#">Dentist</a>
            <a href="#">Acupuncturist</a>
            <a href="#">Occupational Therapist</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-700 py-4 px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
        <p>© Copyright 2023 Health care</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#">Terms of Service</a>
          <span>•</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
