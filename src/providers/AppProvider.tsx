"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import NotistackProvider from "./notistackProvider";
import Navbar from "@/components/navbar";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <NotistackProvider>
        <Navbar />
        {children}
      </NotistackProvider>
    </SessionProvider>
  );
}