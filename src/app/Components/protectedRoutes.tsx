"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "./authContextProvider"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { currentUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) {
      router.push("/login")
    }
  }, [currentUser, router])


  return currentUser ? <>{children}</> : null
}

