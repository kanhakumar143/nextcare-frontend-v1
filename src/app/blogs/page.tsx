import HealthBlog from "@/components/blog/HealthBlog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Med",
  description: "@Med app blogs",
};

export default function Blogs() {
  return (
    <div>
      <HealthBlog />
    </div>
  );
}
