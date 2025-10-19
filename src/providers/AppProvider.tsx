"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import NotistackProvider from "./notistackProvider";
import Navbar from "@/components/navbar";
import { Session } from "next-auth";

interface AppProviderProps {
  children: React.ReactNode;
  session?: Session | null;
}
export default function AppProvider({ children, session }: AppProviderProps) {
  return (
    <SessionProvider session={session}>
      <NotistackProvider>
        <Navbar />
        {children}
      </NotistackProvider>
    </SessionProvider>
  );
}