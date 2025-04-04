"use client";

import type { Metadata } from "next";
import { Josefin_Slab, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar";
import UserContextProvider from "./Components/contextProvider";
import Footer from "./Components/footer";
import { CartProvider } from "react-use-cart";
import { AuthProvider } from "./Components/authContextProvider";
import { usePathname } from "next/navigation";
import { WagmiProvider } from "wagmi";
import { config } from "../../wagmi.config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const josefinSlab = Josefin_Slab({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const metadata: Metadata = {
//   title: "Crypto",
//   description: "Pertfolio page",
//   icons: {
//     icon: [
//       {
//         rel: "icon",
//         url: "/images/portfolio-pic.jpg",
//       },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const path = usePathname();
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body
        className={`${josefinSlab.className} ${geistMono.variable} antialiased`}
      >
        <UserContextProvider>
          <AuthProvider>
            <CartProvider>
              <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                  <Navbar />
                  {children}
                  {path !== "/products" && <Footer />}
                </QueryClientProvider>
              </WagmiProvider>
            </CartProvider>
          </AuthProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
