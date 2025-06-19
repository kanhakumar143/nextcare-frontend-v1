"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-sm bg-white p-6 sm:p-8 rounded-xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">Login</h2>
        <p className="text-sm text-gray-500 mb-6">Please login to continue</p>

        <form className="space-y-4">
          <div>
            <Label htmlFor="email" className="mb-1">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div>
            <Label htmlFor="password" className="mb-1">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>

          <Button className="w-full bg-primary text-black hover:bg-lime-400">
            Login
          </Button>
          <Button
            // onClick={() => signIn("google")}
            variant="outline"
            className="w-full flex items-center justify-center gap-2 mt-0"
            >
            <FcGoogle className="text-lg" />
            Continue with Google
        </Button>
        </form>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Dont have an account?{" "}
          <Link href="/signup" className="text-cyan-600 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
