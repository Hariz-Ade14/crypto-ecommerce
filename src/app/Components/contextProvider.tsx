'use client'

import React, { useState,createContext} from "react";
export type valueProps = {
     name: string;
     price: number | null;
     image: string | null,
     // cartItems: Array<string>
}
type ContextProps = {
     details: valueProps | null;
     setDetails: React.Dispatch<React.SetStateAction<valueProps | null>>;
}
export const ProfileContext = createContext<ContextProps | undefined>(undefined);

const UserContextProvider = ({children}: {children: React.ReactNode}) => {
     const [details, setDetails] = useState<valueProps | null>({
           name: "",
           price: null,
           image: null,
          //  cartItems: [],
     });
      return(
        <ProfileContext value={{details, setDetails}}>
          {children}
        </ProfileContext>
      )
}
export default UserContextProvider

