"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const { data, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="flex justify-between items-center px-6 py-4 md:px-12">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => router.push("/")}>
          TAROTO
        </h1>
        <div className="hidden md:flex gap-6 items-center">
          <Link href={"/"} className="hover:text-yellow-400 transition">Home</Link>
          <Link href={"#about"} className="hover:text-yellow-400 transition">About Us</Link>
          <Link href={"#menu"} className="hover:text-yellow-400 transition">Menu</Link>
          <Link href={"#teams"} className="hover:text-yellow-400 transition">Teams</Link>
          <Link href={"#blog"} className="hover:text-yellow-400 transition">Article</Link>

          <Link
            href={data?.user?.email ? "/dashboard" : "/login"}
            className="hover:text-yellow-400 transition"
          >
            Dashboard
          </Link>

          {data?.user?.email ? (
            <div className="flex gap-3 items-center">
              <p className="text-sm">{data.user.email}</p>
              <button
                className="px-3 py-1 rounded-md bg-yellow-400 hover:bg-yellow-300 text-black"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3 items-center">
              <button
                className="px-3 py-1 rounded-md bg-yellow-400 hover:bg-yellow-300 text-black"
                onClick={() => router.push("/login")}
              >
                Login
              </button>
              <button
                className="px-3 py-1 rounded-md bg-yellow-400 hover:bg-yellow-300 text-black"
                onClick={() => router.push("/register")}
              >
                Register
              </button>
            </div>
          )}
        </div>

        {/* hp */}
        <button
          onClick={handleToggle}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-lg border-t border-gray-200 px-6 py-4 space-y-3 animate-slide-down">
          <Link href="/" onClick={handleClose} className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="#about" onClick={handleClose} className="hover:text-yellow-400 transition">
            About Us
          </Link>
          <Link href="#menu" onClick={handleClose} className="hover:text-yellow-400 transition">
            Menu
          </Link>
          <Link href="#teams" onClick={handleClose} className="hover:text-yellow-400 transition">
            Teams
          </Link>
          <Link href="#blog" onClick={handleClose} className="hover:text-yellow-400 transition">
            Article
          </Link>
          <Link
            href={data?.user?.email ? "/dashboard" : "/login"}
            onClick={handleClose}
            className="hover:text-yellow-400 transition"
          >
            Dashboard
          </Link>

          {data?.user?.email ? (
            <>
              <p className="text-sm">{data.user.email}</p>
              <button
                className="px-3 py-2 w-full rounded-md bg-yellow-400 hover:bg-yellow-300 text-black"
                onClick={() => {
                  handleClose();
                  signOut();
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-3">
              <button
                className="px-3 py-2 w-full rounded-md bg-yellow-400 hover:bg-yellow-300 text-black"
                onClick={() => {
                  handleClose();
                  router.push("/login");
                }}
              >
                Login
              </button>
              <button
                className="px-3 py-2 w-full rounded-md bg-yellow-400 hover:bg-yellow-300 text-black"
                onClick={() => {
                  handleClose();
                  router.push("/register");
                }}
              >
                Register
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}