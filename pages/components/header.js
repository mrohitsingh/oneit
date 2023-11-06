import React from "react";
import {
  BsFillTelephoneFill,
  BsLinkedin,
  BsTwitter,
  BsFacebook,
  BsFillCaretDownFill,
  BsSearch,
  BsCartFill,
} from "react-icons/bs";
import { IoMdMail, IoLogoGoogleplus } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { BiSolidUserCircle } from "react-icons/bi";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      {/* Top Header Start */}
      <div className=" bg-[#F1BC00] lg:py-4 md:py-3 py-2 lg:px-6 md:px-4 px-2">
        <div className="container flex row justify-between items-center mx-auto">
          {/* Contact */}
          <div className="flex row lg:gap-x-6 md:gap-x-4 gap-x-2">
            <a
              href="#"
              className="text-gray-700 hover:opacity-75 transition duration-300 ease-in-out flex
            justify-center items-center rounded-full cursor-pointer lg:gap-x-4 md:gap-x-2 gap-x-1"
            >
              <IoMdMail className="lg:text-lg md:text-base text-sm" />
              <p className="lg:text-lg md:text-base text-sm">info@oneit.com</p>
            </a>
            <a
              href="#"
              className="text-gray-700 hover:opacity-75 transition duration-300 ease-in-out flex
            justify-center items-center rounded-full cursor-pointer lg:gap-x-4 md:gap-x-2 gap-x-1"
            >
              <BsFillTelephoneFill className="lg:text-lg md:text-base text-sm" />
              <p className="lg:text-lg md:text-base text-sm">+911232123453</p>
            </a>
          </div>
          {/* Social */}
          <div className="flex row lg:gap-x-4 md:gap-x-4 gap-x-1">
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              title="OneIT on Facebook"
              className="text-gray-700 hover:opacity-75 transition duration-300 ease-in-out flex
            justify-center items-center rounded-full cursor-pointer"
            >
              <BsFacebook className="lg:text-lg md:text-base text-sm" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="twitter"
              title="OneIT on Twitter"
              className="text-gray-700 hover:opacity-75 transition duration-300 ease-in-out flex
                justify-center items-center rounded-full cursor-pointer"
            >
              <BsTwitter className="lg:text-lg md:text-base text-sm" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GooglePlus"
              title="OneIT on GooglePlus"
              className="text-gray-700 hover:opacity-75 transition duration-300 ease-in-out flex
            justify-center items-center rounded-full cursor-pointer"
            >
              <IoLogoGoogleplus className="lg:text-lg md:text-base text-sm" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="linkedIn"
              title="OneIT on LinkedIn"
              className="text-gray-700 hover:opacity-75 transition duration-300 ease-in-out flex
            justify-center items-center rounded-full cursor-pointer"
            >
              <BsLinkedin className="lg:text-lg md:text-base text-sm" />
            </a>
          </div>
        </div>
      </div>
      {/* Top Header End */}
      {/* Main Header Start */}
      <header class="w-full text-gray-100 bg-transparent border-gray-100 body-font absolute z-[100]">
        <div class="container flex flex-col items-center justify-between p-6 mx-auto md:flex-row">
          <div className="flex row justify-center items-center">
            <span className="text-lg lg:text-2lg bg-[#005796] p-2">
              <MdCategory className=" text-white" />
            </span>
            <p className="ml-4 tracking-widest uppercase text-xs">
              Shop By <br />
              <span className="font-bold tracking-widest uppercase text-xs">
                Category
              </span>
            </p>
            <BsFillCaretDownFill className="pl-2 text-lg lg:text-2lg" />
          </div>
          <nav class="flex flex-wrap items-center justify-center md:text-base text-[13px] md:ml-auto md:mr-auto">
            <a href="#_" class="lg:mr-5 mr-3 font-medium hover:text-gray-900">
              Home
            </a>
            <a href="#_" class="lg:mr-5 mr-3 font-medium hover:text-gray-900">
              About
            </a>
            <a
              href="#_"
              class="flex items-center mx:sm:order-first sm:order-none lg:w-1/5 md:w-1/5 w-1/5 lg:items-center lg:justify-center md:mb-0 lg:mr-5 mr-3 font-medium hover:text-gray-900 "
            >
              <Image
                src="assets/oneit-black-1.svg"
                className=""
                priority
                width={200}
                height={200}
              />
            </a>
            <a
              href="#_"
              class="lg:mr-5 mr-3 font-medium hover:text-gray-900 font-medium hover:text-gray-900"
            >
              Blog
            </a>
            <a href="#_" class="font-medium hover:text-gray-900">
              Contact
            </a>
          </nav>
          <div class="flex justify-center items-center h-full">
            <a class="mr-5 font-medium hover:text-gray-900">
              <BsSearch />
            </a>
            <a class="mr-5 font-medium hover:text-gray-900">
              <BsCartFill />
            </a>
            <a class="mr-5 font-medium hover:text-gray-900">
              <BiSolidUserCircle />
            </a>
          </div>
        </div>
      </header>
      {/* Main Header End */}
    </div>
  );
};

export default Header;
