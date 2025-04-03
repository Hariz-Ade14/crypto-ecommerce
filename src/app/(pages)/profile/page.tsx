'use client'

import React, { useContext } from 'react'
import { CiLogout } from 'react-icons/ci'
import { Button } from '@/app/Components/ui/button'
import { AuthContext } from '@/app/Components/authContextProvider'
import { useAuth } from '@/app/Components/authContextProvider'
import { useCart } from 'react-use-cart'
const Profile = () => {
    const { currentUser, logout } = useAuth()
    const cart = useCart();

    const Logout = () => {
      logout()
      cart.emptyCart;
    }
    return (
      <div className='flex flex-col items-center justify-center gap-5 h-full mt-30'>
          <h1>Welcome,{currentUser?.displayName}</h1>
          <Button onClick={Logout}><CiLogout size={20} /> Logout</Button>
      </div>
    )
}
const page = () => {
  return (
    <Profile/>
  )
}

export default page