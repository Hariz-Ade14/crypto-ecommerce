"use client";
import React, { useContext } from "react";
import { ProfileContext } from "@/app/Components/contextProvider";
import { Button } from "@/app/Components/ui/button";
import { useCart } from "react-use-cart";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/Components/authContextProvider";
const Page = () => {
  const {
    isEmpty,
    totalUniqueItems,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  const profileContext = useContext(ProfileContext);
  const details = profileContext?.details;
  const setDetails = profileContext?.setDetails;

  const handleProfilePreviewClick = (
    name: string,
    price: number,
    image: string
  ) => {
    setDetails?.({
      ...details,
      name: name,
      price: price,
      image: image,
    });
  };

  const { currentUser } = useAuth();
  console.log(currentUser);

  const router = useRouter();

  const checkOut = () => {
    if (currentUser == null) {
      router.push("/login");
    } else {
      router.push("/checkout");
    }
  };

  return (
    <div>
      <div className="w-[90%] md:w-[80%] flex md:flex-row flex-col m-auto items-start my-20 justify-between gap-10">
        <div className="flex flex-col w-[40%] gap-3">
          <div className="flex flex-col gap-10">
            {items?.map((item) => {
              console.log(item.src.src);
              return (
                <div>
                  <div key={item?.id} className="flex gap-2 items-center">
                    <img src={item?.src.src} className="w-[200px] h-[200px]" />
                    <div className="flex flex-col font-semibold gap-4">
                      <Link href="/details">
                        <p
                          onClick={() =>
                            handleProfilePreviewClick(
                              item.name,
                              item.price,
                              item?.image.src
                            )
                          }
                          key={item.id}
                          className="hover:underline cursor-pointer"
                        >
                          {item.name}
                        </p>
                      </Link>
                      <p key={item.id}>Price: ${item.price}</p>
                      <div className="flex gap-4 h-[30px] items-center">
                        <button
                          onClick={() =>
                            updateItemQuantity(
                              item.id,
                              (item.quantity ?? 0) - 1
                            )
                          }
                          className="text-[30px] bg-black h-full text-white py-0 px-2"
                        >
                          <FaMinus size={10} />
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          onClick={() =>
                            updateItemQuantity(
                              item.id,
                              (item.quantity ?? 0) + 1
                            )
                          }
                          className="text-[30px] bg-black h-full text-white px-2 py-0"
                        >
                          <FaPlus size={10} />
                        </button>
                        <button onClick={() => removeItem(item.id)}>
                          <FaTrash size={20} />
                        </button>
                      </div>
                      <p>Total = ${item.itemTotal}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {!isEmpty && (
          <div className="checkout w-full md:w-[500px] p-5 flex flex-col gap-4 bg-white shadow rounded-[10px]">
            <p className="text-[30px] font-bold">Cart Summary</p>
            <p className="font-bold text-[20px]">Subtotal = ${cartTotal} </p>
            <Link href="/checkout" className="w-full cursor-pointer">
              <Button 
              // onClick={checkOut}
               className="w-full">
                Checkout
              </Button>
            </Link>
          </div>
        )}
      </div>
      {isEmpty && (
        <div className="flex items-center justify-center w-full flex-col gap-10">
          <h1 className="font-bold text-[30px]">Cart is Empty</h1>
          <Link href="/" className="cursor-pointer">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Page;
