"use client";
import React, { useContext } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProfileContext } from "./contextProvider";
import Link from "next/link";
import { Button } from "./ui/button";
import Search from "./search";
import Image from "next/image";
import arrow from "../../../public/assets/arrowright.svg";
import img1 from "../../../public/assets/Rectangle 12.svg";
import img2 from "../../../public/assets/Rectangle 13.svg";
import img3 from "../../../public/assets/Rectangle 18.svg";
import img4 from "../../../public/assets/Rectangle 19.svg";
import img5 from "../../../public/assets/Rectangle 17.svg";
import img6 from "../../../public/assets/Rectangle 16.svg";
import img7 from "../../../public/assets/Rectangle 14.svg";
export type itemProps = {
  id: string;
  src: string;
  name: string;
  price: number;
  desc: string;
};
const Home = () => {
  const images: itemProps[] = [
    {
      id: "1",
      src: img5,
      name: "V-Neck T-shirt",
      desc: "Embroided Seersucker T-shirt",
      price: 20,
    },
    {
      id: "2",
      src: img4,
      name: "Round-Neck T-shirt",
      desc: "Embroided Seersucker T-shirt",
      price: 20,
    },
    {
      id: "3",
      src: img3,
      name: "Cotton T-shirt",
      desc: "Embroided Seersucker T-shirt",
      price: 20,
    },
    {
      id: "4",
      src: img4,
      name: "Henley T-shirt",
      desc: "Embroided Seersucker T-shirt",
      price: 20,
    },
    {
      id: "5",
      src: img4,
      name: "V-Neck T-shirt",
      desc: "Embroided Seersucker T-shirt",
      price: 20,
    },
    {
      id: "6",
      src: img4,
      name: "V-Neck T-shirt",
      desc: "Embroided Seersucker T-shirt",
      price: 20,
    },
  ];

  return (
    <div className="my-20 px-6 md:px-20 flex flex-col gap-20">
      <div className="flex md:w-[50%] w-[100%] flex-col gap-3 items-start">
        <p className="md:w-[20px] text-[25px]">MEN WOMEN KIDS</p>
        <Search style="md:w-[80%] w-full p-2"/>
      </div>

      <div className="flex md:flex-row flex-col items-stretch gap-4 justify-between">
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex flex-col">
            <h1 className="text-[30px] font-[900]">
              NEW <br /> COLLECTION
            </h1>
            <p>SUMMER 2024</p>
          </div>
          <Link href="/products">
            <Button className="bg-[#D9D9D9] flex w-[100%] items-center rounded-none hover:bg-[#D9D9D9] justify-between text-black ">
              Go to Shop
              <Image src={arrow} alt="arrow" width={20} height={20} />
            </Button>
          </Link>
        </div>
        <Image
          src={img1}
          alt="new collection"
          className=""
          width={400}
          height={400}
        />
        <Image
          src={img2}
          alt="new collection"
          className=""
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <h1 className="text-[30px] font-[900]">
          NEW <br /> THIS WEEK
        </h1>

        <div className="mt-[0rem] w-[100%] flex md:space-x-4 md:my-4 md:w-[100%]">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            // navigation
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="w-full h-[380px] flex justify-evenly"
          >
            {images.map(({ src, price, id, name, desc }) => (
              <SwiperSlide key={id} className="">
                <div className="flex flex-col md:gap-1 bg-red w-full md:w-[300px] items-start h-[100%]">
                  <Image
                    src={src}
                    alt={`Slide ${id + 1}`}
                    // layout="fill"
                    objectFit="cover"
                    quality={100}
                    unoptimized={true}
                    className="rounded-[10px] w-[100%] md:w-[90%] h-[80%]"
                  />
                  <div className="flex items-start w-[100%] md:w-[90%] justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-500">{name}</p>
                      <p className="font-semibold text-[13px] md:text-[16px]">{desc}</p>
                    </div>
                    <p className="">${price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex flex-col md:h-[600px] h-full gap-5 md:gap-7">
        <div className="flex flex-col w-full items-center justify-center">
          <h1 className="font-bold text-center md:text-left text-[20px] md:text-[30px] uppercase">
            Our approach To Fashion Design
          </h1>
          <p className="text-gray-400 w-full md:w-[50%] text-center text-[15px]">
            at elegant vogue , we blend creativity with craftsmanship to create
            fashion that transcends trends and stands the test of time each
            design is meticulously crafted, ensuring the highest quelity
            exqulsite finish
          </p>
        </div>{" "}
        <div className="flex items-stretch  md:h-[400px] md:flex-row flex-col md:justify-between">
          <Image
            src={img1}
            alt="new collection"
            width={300}
            className="h-[300px] self-start"
          />
          <Image
            src={img7}
            alt="new collection"
            className="h-[300px] self-end"
            width={300}
          />
          <Image
            src={img6}
            alt="new collection"
            className="h-[300px] self-start"
            width={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
