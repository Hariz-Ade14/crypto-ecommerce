import React from 'react'
import { FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
         <div className="flex gap-8 items-center justify-center my-20">
        <a href="https://www.linkedin.com/in/hariz-adebayo-2b20b6228/">
          <FaLinkedin size={25} />
        </a>
        <a href="https://x.com/Web3_Hov">
          <FaTwitter size={25} />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=9076518947&text&type=phone_number&app_absent=0">
          <FaWhatsapp size={25} />
        </a>
      </div>

      <p className="text-center font-semibold">sannihariz14@gmail.com</p>
    </div>
  )
}

export default Footer