import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-3 ">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/pic/logo.png"
          alt="Logo"
          width={147}
          height={60}
          priority
        />
      </div>

      {/* Button */}
      <div>
        <Link
          href={"/userRole"}
          className="bg-[#3BA334] text-white font-semibold py-2.5 px-4 sm:px-6 rounded-lg transition hover:bg-green-700 cursor-pointer"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
