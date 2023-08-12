import { NextResponse, NextRequest } from "next/server";
import * as jose from "jose";
import { DateTime } from "luxon";

export async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith("/api/token-login")) {
        try {
            const token = req.cookies.get("jwt")?.value;
            if (!token) return NextResponse.json("No Auth", { status: 401 })
            
            const { payload } = await jose.jwtVerify(token, new TextEncoder().encode(`secret-key-phrase`));

            if (token && DateTime.now().toSeconds() < payload.exp) {
                const res = NextResponse.next();
                res.headers.append("x-userid", payload.userID as string);
                return res;
            }

        } catch (err) {
            return NextResponse.json(err);
        }
    }
}
