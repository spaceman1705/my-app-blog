"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import NotistackProvider from "./notistackProvider";
import Navbar from "@/components/navbar";
import { Session } from "next-auth";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider session={Session}>
      <NotistackProvider>
        <Navbar />
        {children}
      </NotistackProvider>
    </SessionProvider>
  );
}