import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SiteLayout from "@/components/layouts/SiteLayout";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Include needed weights
  variable: "--font-poppins", // Optional CSS variable
  display: "swap",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Med",
  description: "@Med app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
