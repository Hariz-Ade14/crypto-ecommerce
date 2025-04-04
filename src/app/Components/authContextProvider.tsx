"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import {
  type User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth"
import {auth} from "../../../firebase.config"

type AuthContextType = {
  currentUser: User | null
  signup: (email: string, password: string, username: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  googleSignIn: () => Promise<void>
  loading: boolean
}

export const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  // const [loading, setLoading] = useState(false)

  async function signup(email: string, password: string,username: string) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    try {
       await updateProfile(userCredential.user, {
        displayName: username
      });
    } catch (error) {
        throw error;
    }
    setCurrentUser(userCredential.user)
  }

  async function login(email: string, password: string) {
    const SignIn = await signInWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch((error) => {
        throw error
      });
      setCurrentUser(auth.currentUser);
      return SignIn;
  }

  async function logout() {
    return signOut(auth)
      .then(() => {})
      .catch((error) => {
        throw error
      })
  }

  async function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email)
      .then(() => {})
      .catch((error) => {
        throw error
      })
  }

  async function googleSignIn() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
      .then(() => {})
      .catch((error) => {
        throw error
      })
  }

  // useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   setCurrentUser(user)
    //   setLoading(false)
    // })

    // return unsubscribe
  // }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    googleSignIn,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

