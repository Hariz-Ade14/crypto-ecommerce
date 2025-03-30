import React from 'react'
import { CiSearch } from 'react-icons/ci'
const Search = ({style}: {style? :string}) => {
  return (
    <div className={` ${style} flex items-center gap-5 justify-between bg-[#D9D9D9]`}>
      <input type="search" placeholder="Search" className="border-none w-[90%] outline-none" />
      <CiSearch size={24} />
    </div>
  )
}

export default Search