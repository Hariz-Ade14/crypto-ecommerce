"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { BiMenuAltRight } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdClose } from "react-icons/io";
import { CiShoppingCart,CiUser } from "react-icons/ci";
import XIV from "../../../public/assets/XIV.svg";
import Image from "next/image";
import { Button } from "./ui/button";
const Navbar = () => {
  const { totalUniqueItems } = useCart();
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
  };

  const menuRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenu(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease",
      anchorPlacement: "top-bottom",
    });

    window.addEventListener("resize", () => {
      AOS.refresh();
    });

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center shadow justify-between fixed w-full top-0 bg-white z-20 p-5 md:px-4 md:py-3">
        {/* <h1 className="text-[#1D1F2C] text-[15px] md:text-[24px] font-lato font-[600]">
          Crypto-Ecommerce App
        </h1> */}
        <Link href="/">
            <Image src={XIV} alt='logo' className="h-[20px]"/>
        </Link>
        <ul className="hidden md:flex gap-8">
          <Link href="/home">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/new">New</Link>
        </ul>
        <div className="hidden md:flex items-center gap-4">
          {/* <CiSearch size={24} /> */}
          <div className="relative h-[40px]">
            <Link href="/cart">
              <CiShoppingCart className="mt-2" size={24} />
            </Link>
            <div className="absolute top-1 right-0 left-3 flex items-center justify-center font-bold bg-red-500 w-[20px] text-white p-0 h-[20px] rounded-[50%]">
              {totalUniqueItems}
            </div>
          </div>

          <Link className="cursor-pointer" href="/signup">
            <Button>Sign In</Button>
          </Link>
          <Link href="/profile">
             <CiUser size={20}/>
          </Link>
          {/* <CiTrash onClick={emptyCart} size={20} /> */}

        </div>

        {/* Mobile Menu */}

        <div className="flex gap-5 md:hidden">
          {/* <CiSearch size={20} /> */}
          <BiMenuAltRight size={20} onClick={showMenu} />
        </div>
      </div>
      {menu && (
        <div
          data-aos={"slide-down"}
          className="flex flex-col items-center justify-evenly z-50 gap-5 md:hidden bg-white text-black h-full py-10 px-5 w-[100%] fixed top-0"
        >
          {/* <div className="flex  justify-evenly items-center"> */}
            <IoMdClose
              size={50}
              className="cursor-pointer text-rignt w-full font-bold "
              onClick={showMenu}
            />
            {/* <p>js</p> */}
          {/* </div> */}
          <div
            className="flex flex-col font-semibold gap-5"
            ref={menuRef}
          >
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/contact">Contact</Link>
            <div className="flex items-center h-fit justify-center w-full gap-4">
              <div className="relative h-[40px]">
                <Link href="/cart">
                  <CiShoppingCart className="mt-2" size={24} />
                </Link>
                <div className="absolute top-1 right-0 left-3 flex items-center justify-center font-bold bg-red-500 w-[20px] text-white p-0 h-[20px] rounded-[50%]">
                  {totalUniqueItems}
                </div>
              </div>

              <Link href="/profile">
                <CiUser size={24} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
