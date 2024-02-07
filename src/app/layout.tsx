import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/navbar";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreshSlice Mobile App Redesign",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          open_sans.className,
          "relative flex min-h-dvh flex-col bg-lime-950 antialiased",
        )}
      >
        {children}
        <NavBar />
      </body>
    </html>
  );
}
