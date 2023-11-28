"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  var time = new Date();
  let hours = time.getHours();
  const router = useRouter();

  const item = JSON.parse(sessionStorage.getItem("data"));
  const name = item.email.split("@");

  const handleLogout = () => {
    sessionStorage.removeItem("data");
    router.push("/");
  };

  return (
    <div className="">
      <div className="bg-indigo-600 flex flex-row mx-auto justify-between">
        <h2>{item.email.toLocaleUpperCase()}</h2>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1>Halo, {name[0]}</h1>
        <h1>{hours <= 18 ? "Selamat Siang" : "Selamat Malam"}</h1>
        <h1>
          {time.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </h1>
      </div>
    </div>
  );
};

export default page;
