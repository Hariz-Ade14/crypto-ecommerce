"use client";
import React, { FormEvent, useState } from "react";
import { Button } from "@/app/Components/ui/button";
import Link from "next/link";
import googlelogo from "../../../../../public/assets/googlelogo.png";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/Components/authContextProvider";

type userDetailsProps = {
  name: string;
  email: string;
  password: string;
};

const Signup = () => {
  const [userDetails, setuserDetails] = useState<userDetailsProps>({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const { signup,loading,googleSignIn } = useAuth()
  const SignUp = async () => {
    if (!userDetails.name || !userDetails.email || !userDetails.password) {
      setError("Please fill all fields");
      toast.error("Please fill all fields");
      return;
    }

    try {
      setError("")
      setLoader(!loading)
      await signup(email, password,name);
      toast.success("Account created successfully");
      router.push("/login");
    } catch (err: any) {
      setError(err.message || "Failed to create an account")
    } finally {
      setLoader(!loading)
    }
    
   
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SignUp();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuserDetails({ ...userDetails, [e.target.name]: e.target.value });
    setError(null);
  };

  const { name, email, password } = userDetails;
  return (
    <div className="flex flex-col my-20 w-[80%] mx-auto gap-3">
      <h1 className="font-bold text-[30px] text-center">Sign Up</h1>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
        className="flex flex-col gap-4 w-[50%] mx-auto"
      >
        <input
          className="border rounded-[5px] border-solid p-2"
          name="name"
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
        />
        <input
          className="border rounded-[5px] border-solid p-2"
          name="email"
          value={email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
        <input
          className="border rounded-[5px] border-solid p-2"
          name="password"
          value={password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        {error && <p className="text-red-500">{error}</p>}

        <Button
          className="flex gap-3 justify-center border hover:bg-white items-center text-black bg-white"
          type="submit"
        >
          <Image
            className="w-6 h-6 rounded-[50%]"
            src={googlelogo}
            alt="googlelogo"
          />
          Continue with google
        </Button>
        <Button type="submit">
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Sign up"
          )}
        </Button>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link className="font-semibold" href="/login">
            Login
          </Link>
        </p>
      </form>
      <ToastContainer/>
    </div>
  );
};
const page = () => {
  return <Signup />;
};

export default page;
