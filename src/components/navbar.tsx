"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  const { data, status } = useSession();
  console.log("from next-auth session", data);

  return (
    <div className="flex justify-between px-12 py-3 items-center shadow-2xl">
      <h1 className="text-2xl font-bold">
        TAROTO
      </h1>
      <div className="flex gap-5">
        <Link href={"/"} className="hover:text-yellow-400">
          Home
        </Link>
        <Link href={"#abot"} className="hover:text-yellow-400">
          About Us
        </Link>
        <Link href={"#menu"} className="hover:text-yellow-400">
          Menu
        </Link>
        <Link href={"#teams"} className="hover:text-yellow-400">
          Teams
        </Link>
        <Link href={"#blog"} className="hover:text-yellow-400">
          Article
        </Link>

        <Link
          href={data?.user?.email ? "/dashboard" : "/login"}
          className="hover:text-yellow-400"
        >
          Dashboard
        </Link>
      </div>
      {data?.user?.email ? (
        <div className="flex gap-3 items-center">
          <p>{data.user.email}</p>
          <button
            className="border-none  md:h-[35px] md:w-[80px] rounded-md bg-yellow-400 hover:bg-yellow-300 hover:cursor-pointer text-black"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          <button
            className="border-none md:h-[35px] md:w-[80px] rounded-md bg-yellow-400 hover:bg-yellow-300 hover:cursor-pointer text-black"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
          <button
            className="border-none  md:h-[35px] md:w-[80px] rounded-md bg-yellow-400 hover:bg-yellow-300 hover:cursor-pointer text-black"
            onClick={() => router.push("/register")}
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
}