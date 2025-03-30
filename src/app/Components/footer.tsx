import React from "react";
import VR from "../../../public/assets/VR.svg";
import QR from "../../../public/assets/QR.svg";
import XIV from "../../../public/assets/XIV.svg";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="mt-40 mb-20">
      <hr className="w-full h-.5 bg-gray-600" />
      <div className="text-[#3F4654] flex-1 px-0 mt-10 md:space-x-0 md:flex text-[15px]">
        <div className="flex w-full flex-wrap flex-col md:flex-row md:items-start items-center justify-center md:flex md:justify-evenly gap-[2rem]">
          <div className="flex flex-col">
            <Image src={VR} alt="VR" width={100} height={100} />
            <Image src={QR} alt="QR" width={100} height={100} />
            <Image src={XIV} alt="XIV" width={100} height={100} />
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h5 className="space-y-2 text-[#3F4654] text-center md:text-left text-[12px] md:space-y-3">
              QUICK LINKS
            </h5>
            <ul className="flex flex-col text-center md:text-left gap-1 text-[13px] md:gap-2 md:text-[12px] whitespace-nowrap md:space-y-2 ">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/">
                <li>About Us</li>
              </Link>
              <Link href="/">
                <li>Blog</li>
              </Link>
            </ul>
          </div>

          <div className="flex flex-col gap-2 text-[#3F4654] md:gap-4">
            <h5 className="space-y-2 text-[#3F4654] text-[12px] text-center md:text-left md:space-y-3">
              SOLUTIONS
            </h5>
            <ul className="flex flex-col text-center md:text-left gap-1 text-[12.5px] md:gap-2 md:text-[12px] whitespace-nowrap md:space-y-2 ">
              <Link href="/">
                <li>Other Products </li>
              </Link>
              <Link href="/">
                <li>Accessories </li>
              </Link>
              <Link href="/">
                <li>Store</li>
              </Link>
              <Link href="/">
                <li>Shop</li>
              </Link>
            </ul>
          </div>
          <div className="flex  flex-col gap-2 text-[#3F4654] md:gap-4">
            <h5 className="space-y-2 text-[#3F4654] text-[12px] text-center md:text-left md:space-y-3">
              LEGAL
            </h5>
            <ul className="flex flex-col text-center md:text-left gap-1 text-[12.5px] md:gap-2 md:text-[12px] whitespace-nowrap md:space-y-2 ">
              <Link href="/">
                <li>Privacy Policy</li>
              </Link>
              <Link href="/">
                <li>Terms & Condition </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
