"use client";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye, IoMdEyeOff } from "react-icons/io";

export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handlePassShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const handleConfirmPassShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowConfirmPass(!showConfirmPass);
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 sm:px-6 py-10">
      <form className="flex flex-col gap-5 mt-6">
        {/* First name & Last name */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <label
              htmlFor="firstName"
              className="absolute -top-2 left-3 bg-white px-1 text-[#919EAB] text-sm sm:text-base rounded-md"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              suppressHydrationWarning
              className="w-full h-12 sm:h-14 rounded-lg pl-3 sm:pl-4 border border-[#919EAB]/32 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 text-sm sm:text-base"
            />
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              suppressHydrationWarning
              className="w-full h-12 sm:h-14 rounded-lg pl-3 sm:pl-4 border border-[#919EAB]/32 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            suppressHydrationWarning
            className="w-full h-12 sm:h-14 rounded-lg pl-3 sm:pl-4 border border-[#919EAB]/32 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 text-sm sm:text-base"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            suppressHydrationWarning
            className="w-full h-12 sm:h-14 rounded-lg pl-3 sm:pl-4 border border-[#919EAB]/32 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 text-sm sm:text-base"
          />
          <button
            onClick={handlePassShow}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[#637381] hover:text-[#49AE44] transition-colors duration-200"
          >
            {showPass ? <IoIosEye size={20} sm={24} /> : <IoMdEyeOff size={20} sm={24} />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <input
            type={showConfirmPass ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            suppressHydrationWarning
            className="w-full h-12 sm:h-14 rounded-lg pl-3 sm:pl-4 border border-[#919EAB]/32 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 text-sm sm:text-base"
          />
          <button
            onClick={handleConfirmPassShow}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[#637381] hover:text-[#49AE44] transition-colors duration-200"
          >
            {showConfirmPass ? <IoIosEye size={20} sm={24} /> : <IoMdEyeOff size={20} sm={24} />}
          </button>
        </div>

        {/* Terms & Checkbox */}
        <div className="flex sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <label className="flex items-center gap-2 cursor-pointer select-none text-sm sm:text-base">
            <input
              type="checkbox"
              name="agreeTerms"
              defaultChecked
              className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#49AE44] rounded-md checked:bg-[#49AE44] checked:border-[#49AE44] transition-colors cursor-pointer hover:border-[#49AE44]/80 hover:checked:bg-[#49AE44]/90"
            />
            I agree to Tech Takes Terms of Service and Privacy Policy.
          </label>
        </div>

        {/* Submit */}
        <input
          type="submit"
          value="Register"
          className="w-full py-3 sm:py-3.5 bg-[#49AE44] rounded-lg text-white font-bold cursor-pointer hover:bg-[#3e8e3a] transition-colors duration-200 text-sm sm:text-base"
        />
      </form>

      {/* Divider */}
      <div className="flex items-center mt-8 mb-5">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm sm:text-base">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Google Register */}
      <button className="w-full border border-[#919EAB]/32 py-3 sm:py-3.5 text-[#637381] flex justify-center items-center gap-3 rounded-lg cursor-pointer hover:border-[#49AE44]/50 hover:text-[#49AE44] transition-all duration-200 text-sm sm:text-base">
        <FcGoogle size={22} sm={24} />
        Register with Google
      </button>

      {/* Login Link */}
      <p className="mt-6 text-sm sm:text-base text-center text-[#212B36]">
        Already have an account?{" "}
        <Link
          href="/Login"
          className="text-[#49AE44] font-semibold hover:text-[#3e8e3a] transition-colors duration-200"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
