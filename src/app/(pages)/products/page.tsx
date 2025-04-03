"use client";
import React, { useState, useContext, useRef, useEffect } from "react";
import ProductsLayouts from "../../Components/layouts";
import { usePathname } from "next/navigation";
import Search from "@/app/Components/search";
import { categoriesProps } from "../../Components/layouts";
import img3 from "../../../../public/assets/Rectangle 3.svg";
import img4 from "../../../../public/assets/Rectangle 4.svg";
import img5 from "../../../../public/assets/Rectangle 5.svg";
import img6 from "../../../../public/assets/Rectangle 6.svg";
import img7 from "../../../../public/assets/Rectangle 7.svg";
import { itemProps } from "@/app/Components/home";
import { CiShoppingCart } from "react-icons/ci";
import Image from "next/image";
import { Button } from "@/app/Components/ui/button";
import {
  RiArrowRightSLine,
  RiArrowDownSLine,
  RiCloseFill,
} from "react-icons/ri";
import { categories, sizes } from "../../Components/layouts";
import { ProfileContext } from "@/app/Components/contextProvider";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from "@/app/Components/authContextProvider";

const Products = () => {
  const path = usePathname();

  const tabs: categoriesProps[] = [
    {
      title: "All",
      content: <p>All</p>,
    },
    {
      title: "T-Shirts",
      content: <p>T-Shirts</p>,
    },
    {
      title: "Shirts",
      content: <p>Shirts</p>,
    },
    {
      title: "Jeans",
      content: <p>Jeans</p>,
    },
    {
      title: "Shorts",
      content: <p>Shorts</p>,
    },
    {
      title: "Watches",
      content: <p>Watches</p>,
    },
    {
      title: "Shoes",
      content: <p>Shoes</p>,
    },
    {
      title: "Accesories",
      content: <p>Shoes</p>,
    },
    {
      title: "Bags",
      content: <p>Shoes</p>,
    },
  ];

  const [activeTab, setActiveTab] = useState("All");
  const handleActiveTab = (title: string) => {
    setActiveTab(title);
  };

  const Items: itemProps[] = [
    {
      id: "1",
      src: img3,
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
      src: img5,
      name: "Cotton T-shirt",
      desc: "Embroided Seersucker T-shirt",
      price: 20,
    },
    {
      id: "4",
      src: img6,
      name: "Henley T-shirt",
      desc: "Embroided Seersucker T-shirt",
      price: 20,
    },
    {
      id: "5",
      src: img7,
      name: "V-Neck T-shirt",
      desc: "Embroided Seersucker T-shirt",
      price: 20,
    },
    {
      id: "6",
      src: img3,
      name: "V-Neck T-shirt",
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
      src: img6,
      name: "V-Neck T-shirt",
      desc: "Embroided Seersucker T-shirt",
      price: 20,
    },
    {
      id: "5",
      src: img7,
      name: "V-Neck T-shirt",
      desc: "Embroided Seersucker T-shirt",
      price: 20,
    },
    {
      id: "6",
      src: img5,
      name: "V-Neck T-shirt",
      desc: "Embroided Seersucker T-shirt",
      price: 20,
    },
  ];

  const [filter, setFilters] = useState<boolean>(false);
  const handleFilter = () => {
    setFilters(!filter);
  };

  const [categoryContent, setContent] = useState<boolean>(false);
  const handleContent = () => {
    setContent(!categoryContent);
  };

  const itemDetails = useContext(ProfileContext);
  const details = itemDetails?.details;
  const setDetails = itemDetails?.setDetails;

  const handleProfilePreviewClick = (
    name: string,
    price: number,
    image: string
  ) => {
    setDetails?.({
      ...details,
      name,
      price,
      image,
    });
  };

  const { addItem, items } = useCart();
  const {currentUser} = useAuth();

  console.log(items);
  const addItemToCart = async (item: itemProps) => {
    const isItemInCart: boolean = items.some((product) => product.id === item.id);
     if(!currentUser){
      toast.error("Please login to add items to cart");
      return;
    }
    
    if (isItemInCart) {
      toast.error(`${item.name} is already in your cart!`);
      return;
    }

    addItem(item);
  };

  const menuRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setFilters(false);
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

  const [products, setProducts] = useState(Items);
  const [searchValue, setSearchValue] = useState<string>("");
  const [notFound, setNotFound] = useState(false);
  const searchFilter = ({ searchQuery }: { searchQuery: string }) => {
    const searchResult = Items.filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    if (searchResult.length > 0) {
      setProducts(searchResult);
      setNotFound(false);
    } else {
      setProducts([]);
      setNotFound(true);
    }
  };
  return (
    <>
      <ProductsLayouts>
        <div className="flex flex-col gap-2 h-full md:p-0 px-5 md:fixed bgred-600 md:left-[300px] w-full">
          <div className="flex flex-col bgyellow-400 gap-0 md:h[140px] md:px-0 md:left-[300px] w-full  right-0">
            <h1 className="font-semibold">Home{path}</h1>
            <h1 className="font-bold tet-[20px] md:text-[30px]">PRODUCTS</h1>
            <div className="flex md:flex-row flex-col gap-5 items-start">
              <Search
                onClick={() => searchFilter({ searchQuery: searchValue })}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                style="w-[100%] md:w-[50%] py-4 px-2"
              />
              <div className="flex flex-col gap-1 w-[100%]  md:w-[100%]">
                <p
                  className="md:hidden flex items-center cursor-pointer gap-3 font-bold text-2xl"
                  onClick={handleFilter}
                >
                  Filters
                  <RiArrowRightSLine size={16} />
                </p>
                <div
                  data-aos=""
                  className="flex gap-2 md:gap-2 flex-row flex-nowrap md:flex-wrap w-full md:overflow-auto overflow-scroll md:w-[55%]"
                >
                  {tabs.map(({ title, content }) => {
                    return (
                      <div
                        onClick={() => handleActiveTab(title)}
                        className={`${
                          activeTab === title
                            ? "bg-[#D9D9D9] text-black"
                            : "bg-transparent text-black"
                        } border border-solid border-gray-400 w-[200px] whitespace-nowrap md:w-[80px] font-semibold text-center md:py-0.5 px-6 py-1 text-black md:px-0 text-[12px]`}
                      >
                        {title}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex md:flex-row flex-col flex-wrap md:flex-wrap overflow-y-scroll md:h-[1000px] md:mt[150px] gap-x-1.5 gap-y-2 md:gap-5 w-full md:w-[80%] ${
              notFound && "items-center justify-center"
            }`}
          >
            {products.map((item) => {
              return (
                <div>
                  <div
                    key={item.id}
                    className="flex flex-col gap-1 w-[49%] cursor-pointer sm:w-[49%] border border-solid px-1 pb-1 md:h-[300px] md:flex-col md:w-[160px] md:gap-1"
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      className="md:w-full w-full h-[200px] md:h-[200px]"
                    />
                    <div className="flex flex-col gap-1">
                      <Link href="/details">
                        <p
                          onClick={() =>
                            handleProfilePreviewClick(
                              item.name,
                              item.price,
                              item.src
                            )
                          }
                          key={item.id}
                          className="hover:underline font-semibold cursor-pointer"
                        >
                          {item.name}
                        </p>
                      </Link>
                      <p className="text-[13px] md:whitespace-wrap">
                        {item.desc}
                      </p>
                      <div className="flex md:w-full items-start justify-between">
                        <p className="font-bold text-[16px]">${item.price}</p>
                        <Button onClick={() => addItemToCart(item)}>
                          <CiShoppingCart size={25} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {notFound && (
              <p className="font-semibold text-[30px] text-red-600">
                Item Not Found
              </p>
            )}
          </div>
        </div>
      </ProductsLayouts>
      {filter && (
        <div
          data-aos="fade-right"
          className="flex flex-col gap-3 md:hidden fixed top-0 bottom-0 full z-50 p-10 bg-white w-full left-0 right-[40px]"
        >
          <div className="flex flex-row items-center justify-between">
            {sizes.map((size: string) => (
              <div
                className="border border-solid border-gray-400 w-[40px] text-center py-2 text-[10px]"
                key={size}
              >
                {size}
              </div>
            ))}
            <RiCloseFill
              className="cursor-pointer"
              onClick={() => setFilters(!filter)}
              size={30}
            />
          </div>{" "}
          <div className="flex flex-col gap-3">
            {categories.map(({ title, content }: categoriesProps) => (
              <div key={title}>
                <div
                  className="border-b w-full max-h-[300px] border-solid flex items-center justify-between border-gray-400 text-left py-2 text-[15px]"
                  onClick={handleContent}
                >
                  {title}
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
      )}
      <ToastContainer />
    </>
  );
};

const page = () => {
  return <Products/>
}
export default page;