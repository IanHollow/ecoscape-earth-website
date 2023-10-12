import "./globals.css";
import type { Metadata } from "next";

// Components
import Navbar from "@/components/Navbar";

// This sets the head of the HTML document
export const metadata: Metadata = {
  title: "EcoScape",
  description:
    "The EcoScape project aims at modeling animal (and perhaps, in the future, plant) habitats, study their connectivity, and more.",
};

// Main layout used for all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
