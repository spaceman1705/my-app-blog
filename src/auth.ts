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
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token.user = user;
      return token;
    },
    session: async ({ session, token }) => {
      if (token.user) session.user = token.user as any;
      return session;
    },
  },
});