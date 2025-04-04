"use client";
import React, { useState } from "react";
import { Button } from "@/app/Components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/Components/authContextProvider";
import { ToastContainer, toast } from "react-toastify";

type userDetailsProps = {
  email: string;
  password: string;
};
const Login = () => {
  const [userDetails, setuserDetails] = useState<userDetailsProps>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      toast.success("Login successful")
      router.push("/products");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to create an account");
      }
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const { email, password } = userDetails;
  return (
    <div className="flex flex-col my-20 w-full md:w-[80%] mx-auto gap-3">
      <h1 className="font-bold text-[30px] text-center">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[80%] md:w-[50%] mx-auto"
      >
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


        <Button type="submit">
          {loading ? (
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600 mb-4"></div>
            </div>
          ) : (
            "Login"
          )}
        </Button>
        <p className="text-center mt-3">
          Don&apos;t have an account?{" "}
          <Link className="font-semibold" href="/signup">
            Signup
          </Link>
        </p>
      </form>
      <ToastContainer/>
    </div>
  );
};
const page = () => {
  return <Login />;
};

export default page;
