"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuthStore from "@/stores/authStore";

export default function AdminGuardProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { onLogin, onLogout } = useAuthStore();

  useEffect(() => {
    // session aktif, simpan ke store
    if (status === "authenticated" && session?.user) {
      const email = session.user.email ?? "";
      const role = session.user.role ?? "";
      onLogin(email, role);
    } else if (status === "unauthenticated") {
      onLogout();
      router.replace("/login");
    }
  }, [status, session, onLogin, onLogout, router]);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.role !== "admin") {
      router.replace("/");
    }
  }, [status, session, router]);

  if (status === "loading") {
    return <p className="p-4">Checking access...</p>;
  }

  return <>{children}</>;
}
