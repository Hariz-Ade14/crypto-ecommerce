import type { Metadata } from "next";
import { Josefin_Slab,Geist_Mono } from "next/font/google";
import "../globals.css";
// import Navbar from "../Components/navbar";
// import UserContextProvider from "../Components/contextProvider";
// import Footer from "../Components/footer";
const josefinSlab = Josefin_Slab({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
  
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Pertfolio page",
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/images/portfolio-pic.jpg'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSlab.className} ${geistMono.variable} antialiased`}
      > 
     
          {children}
    
      </body>
    </html>
  );
}
