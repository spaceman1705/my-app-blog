import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth";

export const nextAuthConfig = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;
        try {
          const user = await login({
            email: credentials.email,
            password: credentials.password,
          });

          if (user) {
            return {
              id: user[0].objectId,
              email: user[0].email,
              role: user[0].role ?? "user",
            };
          }
          return null;
        } catch (error) {
          console.log("Next-auth autorize error:", error);
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as any;
        session.user.role = token.role;
      }
      return session;
    },
  },
});