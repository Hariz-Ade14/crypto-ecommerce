import React from 'react'
import { BsGithub } from 'react-icons/bs'
import Link from 'next/link'
const Header = () => {
  return (
    <div className="flex shadow py-3 md:py-5 top-0 px-10 fixed w-full z-50 bg-white items-center justify-between">
         <h3 className='font-bold text-[20px]'>Hariz Adebayo</h3>
         <Link href='https://www.github.com/Hariz-Ade14'>
             <BsGithub size={30}/>
         </Link>
    </div>
  )
}

export default Header