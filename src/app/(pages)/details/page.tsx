"use client";

import React, { useContext, useState } from "react";
import { ProfileContext } from "@/app/Components/contextProvider";
import { FaStar } from "react-icons/fa";
import { Button } from "@/app/Components/ui/button";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import { valueProps } from "@/app/Components/contextProvider";
const Page = () => {
  const profileContext = useContext(ProfileContext);
  const details = profileContext?.details;

  const Item = {
        image: details?.image,
        name: details?.name,
        price: details?.price,
        id: Math.random().toString(36).substr(2, 9),
  };
  const {addItem} = useCart();
  const addItemToCart = (item: valueProps) => {
      addItem(item);
      toast(`${item.name} added to cart`);
  };
  

  const [initialImage, setInitialImage] = useState(details?.image);
  console.log(initialImage?.src);

  const images = [ 
    { src: "/pexels-atccommphoto-306763.jpg"},
    { src: "/pexels-designecologist-1779487.jpg"},
    { src: "/pexels-pixabay-267391.jpg"},
  ];
  return (
    <div className="mt-32 flex flex-col gap-3 w-[80%] mx-auto items-center justify-center">
      <div className="flex items-center gap-10 w-full">
        <img
          className="w-[600px] h-[500px]"
          src={initialImage?.src || ""}
          alt=""
        />
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
          <Button onClick={() => details && addItemToCart(Item)} className="">Add to Cart</Button>
        </div>
      </div>
      <div className="flex gap-4 w-full py-10">
           {images.map(({src},index) => {
               return (
                  <img
                    key={index}
                    className={`w-[150px] h-[150px] cursor-pointer ${initialImage === src ? "outline-2 outline-solid p-1 outline-black" : "outline-none"}`}
                    src={src}
                    alt=""
                    onClick={() => {
                      setInitialImage(src);
                    }}
                  />
                );
  
           })}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Page;
