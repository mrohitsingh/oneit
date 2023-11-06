import { BiChevronRight } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { IoMdMail, IoLogoGoogleplus } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import {
  BiLogoLinkedin,
  BiLogoFacebook,
  BiMap,
  BiSolidRightArrow,
} from "react-icons/bi";
import {
  BsFillTelephoneFill,
  BsLinkedin,
  BsFacebook,
  BsFillCaretDownFill,
  BsSearch,
  BsCartFill,
} from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="relative bg-[url('../public/assets/banner.png')] bg-cover bg-center bg-no-repeat">
        <div className="container">
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r z-0 top-[100px]"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <p className="text-2xl font-bold text-gray-100 sm:text-3xl text-left">
                Wide Range of Enterprise Networking & Hardware Products
              </p>

              <p className="mt-4 max-w-lg text-base text-gray-100 text-left">
                Wi-Fi & Wired Routers SMB & Enterprise, Switches, Data Security,
                Wireless Products, VOIP & More
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="#"
                  className="flex justify-center items-center w-full rounded bg-[#1E7FC6] px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring sm:w-auto"
                >
                  Shop Now <BiChevronRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-[#e0f2ff] w-full my-6 mx-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 justify-center items-center py-8">
            <div className="flex flex-row justify-center items-center gap-x-3">
              <TbTruckDelivery className="md:text-[40px] text-[30px]" />
              <div className="flex flex-col">
                <h2 className="font-semibold text-black md:text-2xl text-base">
                  Free Delivery
                </h2>
                <span className="ml-2 text-xs text-primary">
                  Free Shipping on all order
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-3">
              <MdOutlineSupportAgent className="md:text-[40px] text-[30px]" />
              <div className="flex flex-col">
                <h2 className="font-semibold text-black md:text-2xl text-base">
                  Online Support 24/7
                </h2>
                <span className="ml-2 text-xs text-primary">
                  Support online 24 hours a day
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-3">
              <img
                src="assets/cashflow-1.svg"
                className="md:w-[40px] w-[30px] md:h-[40px] h-[30px]"
                alt="cash flow"
              />
              <div className="flex flex-col">
                <h2 className="font-semibold text-black md:text-2xl text-base">
                  Money Return
                </h2>
                <span className="ml-2 text-xs text-primary">
                  Back guarantee under 7 days
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-3">
              <CiDiscount1 className="md:text-[40px] text-[30px]" />
              <div className="flex flex-col">
                <h2 className="font-semibold text-black md:text-2xl text-base">
                  Member Discount
                </h2>
                <span className="ml-2 text-xs text-primary">
                  On every order over $120.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('../public/assets/about-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto">
          <div className="max-w-screen-xl px-4 py-32 sm:px-6 lg:h-screen lg:inline lg:items-center lg:px-8">
            <div className="flex flex-row justify-between items-center">
              <div className="max-w-xl text-center pl-6 py-6">
                <div className="flex flex-col items-start pb-8">
                  <h1 className="text-9xl font-bold text-white">20+ </h1>
                  <span className="text-xl font-bold text-white">
                    YEAR’S OF PROFESSIONAL EXPERIENCE
                  </span>
                </div>
                <div className="py-8">
                  <blockquote className="border-l-8 border-[#F1BC00] text-start text-white indent-6 -ml-4 ">
                    <p className="text-white font-bold text-lg py-4">
                      Hardware and Networking Company
                    </p>
                    <p className="text-white font-bold text-lg py-4">
                      WHAT WE PROVIDE
                    </p>
                    <p className="text-white font-bold text-lg pt-4">
                      JUST PLAN YOUR EXECUTION.
                    </p>
                    <p className="text-white font-bold text-lg pt-2 pb-4">
                      WE EXECUTE YOUR PLAN
                    </p>
                  </blockquote>

                  <p className="text-lg text-white text-justify py-6">
                    Networkise is a great platform offering solutions to
                    critical IT Hardware and Networking, telecom requirements at
                    quick time deliveries and cost-effective solutions. We are
                    best chosen for maintaining technical reliability and
                    performance of your Data Center and Network Architecture for
                    a seamless data communication.
                  </p>
                  <p className="text-lg text-white text-justify">
                    We handle sales enquiries worldwide and deliver products
                    with best associated logistics partners. We have our
                    presence and warehousing options available in various
                    countries.
                  </p>
                </div>
              </div>
              <div className="max-w-xl h-4/5">
                <Image
                  src="/assets/group-31@2x.png"
                  priority
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full my-10">
        <div className="container  mx-auto">
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r z-0 top-[100px]"></div>

          <div className="flex flex-row gap-x-4 items-center justify-around xl:mx-auto">
            <div className="relative bg-[url('../public/assets/banner.png')] bg-cover bg-center bg-no-repeat p-6">
              <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <p className="text-2xl font-bold text-gray-100 sm:text-3xl text-left">
                  Wide Range of Enterprise Networking & Hardware Products
                </p>

                <p className="mt-4 max-w-lg text-base text-gray-100 text-left">
                  Wi-Fi & Wired Routers SMB & Enterprise, Switches, Data
                  Security, Wireless Products, VOIP & More
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <a
                    href="#"
                    className="flex justify-center items-center w-full rounded bg-[#1E7FC6] px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring sm:w-auto"
                  >
                    Shop Now <BiChevronRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative bg-[url('../public/assets/banner.png')] bg-cover bg-center bg-no-repeat p-6">
              <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <p className="text-2xl font-bold text-gray-100 sm:text-3xl text-left">
                  Wide Range of Enterprise Networking & Hardware Products
                </p>

                <p className="mt-4 max-w-lg text-base text-gray-100 text-left">
                  Wi-Fi & Wired Routers SMB & Enterprise, Switches, Data
                  Security, Wireless Products, VOIP & More
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <a
                    href="#"
                    className="flex justify-center items-center w-full rounded bg-[#1E7FC6] px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring sm:w-auto"
                  >
                    Shop Now <BiChevronRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative bg-[url('../public/assets/banner.png')] bg-cover bg-center bg-no-repeat p-6">
              <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <p className="text-2xl font-bold text-gray-100 sm:text-3xl text-left">
                  Wide Range of Enterprise Networking & Hardware Products
                </p>

                <p className="mt-4 max-w-lg text-base text-gray-100 text-left">
                  Wi-Fi & Wired Routers SMB & Enterprise, Switches, Data
                  Security, Wireless Products, VOIP & More
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <a
                    href="#"
                    className="flex justify-center items-center w-full rounded bg-[#1E7FC6] px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring sm:w-auto"
                  >
                    Shop Now <BiChevronRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full my-10">
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-4 xl:mx-auto">
            <div className="flex flex-row justify-between gap-x-4">
              <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Our Top Selling Products
              </p>
              <div className="flex flex-wrap gap-4 text-center">
                <a
                  href="#"
                  className="flex justify-center items-center w-full rounded bg-[#1E7FC6] px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring sm:w-auto"
                >
                  See More <BiChevronRight />
                </a>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col flex-wrap items-center justify-between">
              <div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-900 bg-white shadow-md">
                <a
                  class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <img
                    class="peer absolute top-0 right-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b"
                    alt="product image"
                  />
                </a>
                <div class="flex flex-col items-center justify-center mt-4 px-5 pb-5">
                  <a
                    href="#"
                    class="bg-[#1E7FC6] px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-[#1E7FC6]"
                  >
                    Add to cart
                  </a>
                  <div class="mt-2 mb-5 flex items-center gap-x-4 justify-between">
                    <p>
                      <span class="text-10xl text-[#D20000] line-through">
                        $699
                      </span>
                      <span class="text-10xl font-bold text-slate-900">
                        $449
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-900 bg-white shadow-md">
                <a
                  class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <img
                    class="peer absolute top-0 right-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b"
                    alt="product image"
                  />
                </a>
                <div class="flex flex-col items-center justify-center mt-4 px-5 pb-5">
                  <a
                    href="#"
                    class="bg-[#1E7FC6] px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-[#1E7FC6]"
                  >
                    Add to cart
                  </a>
                  <div class="mt-2 mb-5 flex items-center gap-x-4 justify-between">
                    <p>
                      <span class="text-10xl text-[#D20000] line-through">
                        $699
                      </span>
                      <span class="text-10xl font-bold text-slate-900">
                        $449
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-900 bg-white shadow-md">
                <a
                  class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <img
                    class="peer absolute top-0 right-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b"
                    alt="product image"
                  />
                </a>
                <div class="flex flex-col items-center justify-center mt-4 px-5 pb-5">
                  <a
                    href="#"
                    class="bg-[#1E7FC6] px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-[#1E7FC6]"
                  >
                    Add to cart
                  </a>
                  <div class="mt-2 mb-5 flex items-center gap-x-4 justify-between">
                    <p>
                      <span class="text-10xl text-[#D20000] line-through">
                        $699
                      </span>
                      <span class="text-10xl font-bold text-slate-900">
                        $449
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded border border-gray-900 bg-white shadow-md">
                <a
                  class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <img
                    class="peer absolute top-0 right-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b"
                    alt="product image"
                  />
                </a>
                <div class="flex flex-col items-center justify-center mt-4 px-5 pb-5">
                  <a
                    href="#"
                    class="bg-[#1E7FC6] px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-[#1E7FC6]"
                  >
                    Add to cart
                  </a>
                  <div class="mt-2 mb-5 flex items-center gap-x-4 justify-between">
                    <p>
                      <span class="text-10xl text-[#D20000] line-through">
                        $699
                      </span>
                      <span class="text-10xl font-bold text-slate-900">
                        $449
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[url('../public/assets/footer.png')] bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto">
          {/* <!--Footer Section--> */}
          <div className="flex flex-row flex-wrap items-start justify-between py-8">
            <h3 className="mb-2 text-white text-xl font-bold tracking-wide uppercase">
              Join Our Newsletter Now!
            </h3>
            <form action="" method="post">
              <div className="flex flex-row">
                <div className="flex flex-row items-center gap-x-2 px-4 py-2 bg-white text-gray-400">
                  <IoMdMail />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    className=""
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 shadow-md border border-transparent 
                hover:shadow-lg transition duration-75 ease-linear focus:outline-none focus:ring-2 focus:ring-offset
                hover:shadow-lg transition duration-75 ease-out focus:ring-2 focus:ring-offset-2 focus:ring-
                offset-blue-500 focus:ring-opacity-50 bg-[#1E7FC6] text-white font-medium"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex flex-row items-center lg:gap-x-4 md:gap-x-4 gap-x-1">
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                title="OneIT on Facebook"
                className="bg-[#1877F2] text-white p-3 hover:opacity-75 flex justify-center items-center rounded-full cursor-pointer"
              >
                <BiLogoFacebook className="lg:text-xl md:text-lg text-md" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="twitter"
                title="OneIT on Twitter"
                className="text-black bg-white p-3 hover:opacity-75 flex justify-center items-center rounded-full cursor-pointer"
              >
                <FaXTwitter className="lg:text-xl md:text-lg text-md" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GooglePlus"
                title="OneIT on GooglePlus"
                className="text-white bg-[#DD4B39] p-3 hover:opacity-75 flex justify-center items-center rounded-full cursor-pointer"
              >
                <IoLogoGoogleplus className="lg:text-xl md:text-lg text-md" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="linkedIn"
                title="OneIT on LinkedIn"
                className="bg-[#0B69C7] hover:opacity-75 flex justify-center items-center rounded-full cursor-pointer p-3"
              >
                <BiLogoLinkedin className="lg:text-xl md:text-lg text-[#ffffff] text-md" />
              </a>
            </div>
          </div>
          <hr />
          <div className="flex flex-row justify-between items-start text-white py-6">
            <div className="flex flex-col items-start justify-start gap-y-3">
              <Image
                src="assets/oneit-black-1.svg"
                className=""
                priority
                width={200}
                height={200}
              />
              <p className="text-justify text-white text-lg">
                We work closely with a hand-picked, world-class portfolio <br />{" "}
                of global and local, established and emerging vendors.
              </p>
              <a
                href="#"
                className="text-gray-100 text-lg font-semibold hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center rounded-full cursor-pointer lg:gap-x-4 md:gap-x-2 gap-x-1"
              >
                <IoMdMail className="lg:text-lg md:text-base text-sm" />
                <p className="lg:text-lg md:text-base text-sm">
                  info@oneit.com
                </p>
              </a>
              <a
                href="#"
                className="text-gray-100 text-lg font-semibold hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center rounded-full cursor-pointer lg:gap-x-4 md:gap-x-2 gap-x-1"
              >
                <BsFillTelephoneFill className="lg:text-lg md:text-base text-sm" />
                <p className="lg:text-lg md:text-base text-sm">+911232123453</p>
              </a>
              <a
                href="#"
                className="text-gray-100 text-lg font-semibold hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center rounded-full cursor-pointer lg:gap-x-4 md:gap-x-2 gap-x-1"
              >
                <BiMap className="lg:text-lg md:text-base text-sm" />
                <p className="lg:text-lg md:text-base text-sm">
                  Our Main Branch, Dubai,UAE
                </p>
              </a>
            </div>
            <div className="flex flex-col gap-y-3">
              <h1>Our Company</h1>
              <ul className="flex flex-col gap-y-3">
                <li className="flex flex-row gap-x-3 items-center">
                  <BiSolidRightArrow />
                  <Link href="/aboutus">Who We Are</Link>
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <BiSolidRightArrow />
                  <Link href="/aboutus">Blog</Link>
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <BiSolidRightArrow />
                  <Link href="/aboutus">Careers</Link>
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <BiSolidRightArrow />
                  <Link href="/aboutus">Brands</Link>
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <BiSolidRightArrow />
                  <Link href="/aboutus">Industries</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-3">
              <h1>Products</h1>
              <ul className="flex flex-col gap-y-3">
                <li className="flex flex-row gap-x-3 items-center">
                  <BiSolidRightArrow />
                  <Link href="/aboutus">Routers & Accessories</Link>
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <BiSolidRightArrow />
                  <Link href="/aboutus">Network Switches</Link>
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <BiSolidRightArrow />
                  <Link href="/aboutus">Wireless Products</Link>
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <BiSolidRightArrow />
                  <Link href="/aboutus">Data Security</Link>
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <BiSolidRightArrow />
                  <Link href="/aboutus">Server Appliance</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-3">
              <h1>Our Stores</h1>
              <Image
                src="assets/frame.svg"
                alt="map"
                priority
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
