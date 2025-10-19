import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

// ✅ Extend User bawaan NextAuth
declare module "next-auth" {
  interface User extends DefaultUser {
    role?: string;
  }

  interface Session extends DefaultSession {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
    };
  }
}

// ✅ Extend JWT agar bisa simpan role di token
declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    user?: {
      id?: string;
      name?: string | null;
      email?: string | null;
      role?: string;
    };
  }
}
