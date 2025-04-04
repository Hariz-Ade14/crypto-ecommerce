"use client";
import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { Input } from "@/components/ui/input";
import { Button } from "@/app/Components/ui/button";
import ProtectedRoute from "@/app/Components/protectedRoutes";
import { WalletOptions } from "@/app/Components/walletConnect";
const Checkout = () => {
  const { cartTotal } = useCart();
  const [activeTab, setActiveTab] = useState("Pay with Fiat");

  const handleActiveTab = (item: string) => {
    setActiveTab(item);
  };

  const tabs = [
    { label: "Pay with Fiat", value: "fiat" },
    { label: "Pay with Crypto", value: "crypto" },
  ];

  return (
    <div className="my-20 md:w-[60%] w-[90%] flex flex-col gap-10 mx-auto">
      <h1 className="font-bold text-[30px]">Total Amount = ${cartTotal}</h1>

      <div className="flex flex-col  gap-5 rounded-[10px]">
        <div className="flex rounded-[10px] border border-solid border-gray-700 items-center gap-10">
          <div className="bg-white flex items-center w-full gap-3 p-1">
            {tabs.map(({ label, value }) => {
              return (
                <div
                  key={value}
                  onClick={() => handleActiveTab(label)}
                  className={`cursor-pointer ${
                    activeTab === label
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } rounded-[6px] font-semibold text-[15px] md:text-[20px] px-3 py-1 w-1/2 text-center`}
                >
                  {label}
                </div>
              );
            })}
          </div>
        </div>
        <div className="border border-solid border-gray-200 p-5 rounded-[10px]">
          {activeTab === "Pay with Fiat" && (
            <div className="flex gap-3 flex-col w-[100%] my-10">
              <Input type="text" placeholder="Enter Card Number" />
              <Input type="text" placeholder="Enter CVV" />
              <Input type="text" placeholder="Enter Expiration Date" />
              <Button>Make Payment</Button>
            </div>
          )}
          {activeTab === "Pay with Crypto" && (
            <WalletOptions/>
          )}
        </div>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <ProtectedRoute>
      <Checkout />
     </ProtectedRoute>
  );
};

export default page;
