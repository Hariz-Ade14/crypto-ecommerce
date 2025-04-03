import React from 'react'
import { CiSearch } from 'react-icons/ci'

type searchProps = {
     style?: string;
     onClick?: (value: string) => void;
     searchQuery?: string;
     searchValue: string;
     setSearchValue: (e: string) => void;
}
const Search = ({style,onClick,searchValue,setSearchValue}: searchProps) => {
  return (
    <div className={` ${style} flex items-center gap-5 justify-between bg-[#D9D9D9]`}>
      <input value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}} type="search" placeholder="Search" className="border-none w-[90%] outline-none" />
      <CiSearch onClick={() => onClick && onClick(searchValue)} size={24} />
    </div>
  )
}

export default Search