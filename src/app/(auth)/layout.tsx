// src/app/(auth)/layout.tsx
import { Public_Sans } from "next/font/google";
import "../globals.css";
import NavLogo from "@/Components/authentication/NavLogo";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Authentication | ScapeSync",
  description: "Login and register to access ScapeSync",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${publicSans.variable}`}>
      <NavLogo />
      {/* Auth Card */}
      <div className="min-h-[calc(100vh-80px)] mx-auto max-w-11/12 py-10 lg:py-0 lg:max-w-7xl flex justify-center items-center">
        {/* Auth Card Content */}
        {children}
      </div>
    </div>
  );
}
