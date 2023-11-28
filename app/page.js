"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [form, setForm] = useState({ email: "", password: "" });

  // const router = useRouter();
  const changeForm = (event) => {
    setForm((data) => {
      return {
        ...data,
        [event.target.name]: event.target.value,
      };
    });
  };

  const login = async () => {
    // await router.push("/login");
  };

  return (
    <main className="max-w-xl min-h-screen mx-auto flex justify-center items-center">
      <form className="flex flex-col" onSubmit={login}>
        <label className="top-10 absolute ">Halaman Login</label>
        <label className="">Email</label>
        <input
          name="email"
          type="email"
          autoComplete="email"
          onChange={changeForm}
          className="border-2"
          required
        />
        <label className="">Password</label>
        <input
          name="password"
          type="password"
          autoComplete="password"
          onChange={changeForm}
          className="border-2 gap-3"
          required
        />
        <button className="bg-indigo-500 my-2">
          <Link href={"/login"} className="">
            Login
          </Link>
        </button>
      </form>
    </main>
  );
}
