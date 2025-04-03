"use client";
import React, { JSX, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

export const sizes: string[] = ["XS", "S", "M", "L", "XL", "XXL"];
export const Sizes = () => {
  return (
    <div className="flex flex-row items-center gap-1">
      {sizes.map((size: string) => (
              <div
                className="border border-solid border-gray-400 w-[40px] text-center py-2 text-[10px]"
                key={size}
              >
                {size}
              </div>
            ))}
    </div>
  );
};
export type categoriesProps = {
  title: string;
  content?: JSX.Element;
};
export const categories: categoriesProps[] = [
  {
    title: "Category",
    content: (
      <div className="flex flex-col gap-3">
        <p>T-Shirts</p>
        <p>Shirts</p>
        <p>Jeans</p>
        <p>Shorts</p>
        <p>Watches</p>
        <p>Shoes</p>
      </div>
    ),
  },
  {
    title: "Color",
    content: (
      <div className="flex flex-col gap-3">
        <p>Red</p>
        <p>Blue</p>
        <p>Green</p>
        <p>Lilac</p>
        <p>Burgundy</p>
        <p>Brown</p>
      </div>
    ),
  },
  {
    title: "Price Range",
    content: (
      <div className="flex flex-col gap-3">
        <p>Lowest-Highest</p>
        <p>Highest-Lowest</p>
      </div>
    ),
  },
  {
    title: "Collections",
    content: (
      <div className="flex flex-col gap-3">
        <p>T-Shirts</p>
        <p>Shirts</p>
        <p>Jeans</p>
        <p>Shorts</p>
        <p>Watches</p>
        <p>Shoes</p>
      </div>
    ),
  },
  {
    title: "Tags",
    content: (
      <div className="flex flex-col gap-3">
        <p>T-Shirts</p>
        <p>Shirts</p>
        <p>Jeans</p>
        <p>Shorts</p>
        <p>Watches</p>
        <p>Shoes</p>
      </div>
    ),
  },
  {
    title: "Ratings",
    content: (
      <div className="flex flex-col gap-3">
        <p>1 Star</p>
        <p>2 Star</p>
        <p>3 Star</p>
        <p>4 Star</p>
        <p>5 Star</p>
      </div>
    ),
  },
];
const ProductsLayouts = ({ children }: { children: React.ReactNode }) => {
  const [categoryContent, setContent] = useState<boolean>(false);
  const handleContent = (title: string) => {
    // if(title === "Color" || title === "Category" || title === "Price Range" || title === "Collecion" || title === "Tags" || title === "Ratings"){
    if (
      title === "Color" ||
      title === "Category" ||
      title === "Price Range" ||
      title === "Collecion" ||
      title === "Tags" ||
      title === "Ratings"
    ) {
      setContent(!categoryContent);
    }
    // }
  };

  return (
    <>
      <div className="md:flex items-start gap-3 mt-20">
        <div className="w-[300px] hidden md:fixed top-16 bg-white h-[600px] bottom-0 md:flex flex-col gap-3 px-6 pt-4">
          <p className="font-bold text-[25px]">Filters</p>
          <p className="font-semibold text-[20px]">Sizes</p>
          <div className="flex flex-row gap-3">
            <Sizes />
          </div>
          <div className="flex flex-col gap-3">
            {categories.map(({ title, content }: categoriesProps) => (
              <div key={title}>
                <div
                  className="border-b w-full border-solid flex items-center justify-between border-gray-400 text-left py-2 text-[15px]"
                  onClick={() => handleContent(title)}
                >
                  {title}
                  {title === "Color" ||
                    title === "Category" ||
                    title === "Price Range" ||
                    title === "Collecion" ||
                    title === "Tags" ||
                    title === "Ratings"}
                  {categoryContent ? (
                    <RiArrowDownSLine size={20} />
                  ) : (
                    <RiArrowRightSLine size={20} />
                  )}
                </div>
                {categoryContent && <div>{content}</div>}
              </div>
            ))}
          </div>
        </div>
        {children}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ProductsLayouts;
