import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const pathname = req.nextUrl.pathname;

  console.log("🧠 Middleware token:", JSON.stringify(token, null, 2));

  if (!token && pathname.startsWith("/dashboard")) {
    console.log("❌ Tidak ada token, redirect ke /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && pathname.startsWith("/dashboard")) {
    const role = token.user?.role || token.role;
    console.log("🎭 Role terbaca:", role);

    if (role !== "admin") {
      console.log("🚫 Bukan admin, redirect ke /");
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
