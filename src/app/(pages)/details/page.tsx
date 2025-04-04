"use client";

import React, { useContext, useState } from "react";
import { ProfileContext } from "@/app/Components/contextProvider";
import { FaStar } from "react-icons/fa";
import { Button } from "@/app/Components/ui/button";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import { valueProps } from "@/app/Components/contextProvider";
import { Sizes } from "@/app/Components/layouts";


const Page = () => {
  const profileContext = useContext(ProfileContext);
  const details = profileContext?.details;
  // const setDetails = profileContext?.setDetails;

  const Item = {
    image: details?.image,
    name: details?.name,
    price: details?.price,
    id: Math.random().toString(36).substr(2, 9),
  };
  const { addItem, items } = useCart();
  const addItemToCart = (item: valueProps) => {
    const isItemInCart = items.some((product) => product.name === item.name);
    if (isItemInCart) {
      toast.error(`${item.name} is already in your cart!`);
      return;
    }

    addItem(item);
    toast.success(`${item.name} added to cart`);
  };

  const [initialImage, setInitialImage] = useState(details?.image);
  console.log(initialImage);

  const images = [
    { src: initialImage?.src },
    { src: "/details1.svg" },
    { src: "/details2.svg" },
    { src: "/details3.svg" },
    { src: "/details4.svg" },
  ];


  return (
    <div className="mt-32 flex flex-col gap-3 w-[80%] mx-auto items-center justify-center">
      <div className="flex md:flex-row flex-col items-center gap-10 w-full">
        <img
          className="w-[600px] h-[500px]"
          src={initialImage?.src || initialImage}
          alt=""
        />
        <div className="flex md:flex-col gap-4">
          {images.map(({ src }, index) => {
            return (
              <img
                key={index}
                className={`w-[150px] h-[50px] cursor-pointer ${
                  initialImage === src
                    ? "outline-2 outline-solid p-1 outline-black"
                    : "outline-none"
                }`}
                src={src}
                alt=""
                onClick={() => {
                  // setDetails?.({
                  //   ...details,
                  //   image: src
                  // });
                  setInitialImage(src);
                }}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-bold text-[30px]">
            <p>{details?.name}</p>
            <p>${details?.price}</p>
          </div>
          <div className="flex gap-1">
            <FaStar size={15} color="gold" />
            <FaStar size={15} color="gold" />
            <FaStar size={15} color="gold" />
            <FaStar size={15} color="gold" />
            <FaStar size={15} color="gold" />
          </div>
          <p className="font-semibold text-[20px] w-[100%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos
            id sed obcaecati! Numquam, nemo porro quos itaque excepturi eos
            minima assumenda reprehenderit nisi, repudiandae ipsam voluptatum
            nobis deleniti pariatur!
          </p>
          <Sizes />
          <div className="flex items-center gap-1">

           <div className={`border-none bg-gray-300 w-[40px] text-center py-4 text-[10px]`}></div>
           <div className={`border-none bg-gray-600 w-[40px] text-center py-4 text-[10px]`}></div>
           <div className={`border-none bg-black w-[40px] text-center py-4 text-[10px]`}></div>
           <div className={`border-none bg-yellow-500 w-[40px] text-center py-4 text-[10px]`}></div>
           <div className={`border-none bg-green-300 w-[40px] text-center py-4 text-[10px]`}></div>
           <div className={`border-none bg-purple-300 w-[40px] text-center py-4 text-[10px]`}></div>
           
          </div>
          <Button onClick={() => details && addItemToCart(Item)} className="">
            Add to Cart
          </Button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Page;
