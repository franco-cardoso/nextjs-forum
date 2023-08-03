import { NextResponse, NextRequest } from "next/server";
import * as jose from "jose";
import { DateTime } from "luxon";

export async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith("/api/token-login")) {
        try {
            const token = req.cookies.get("jwt").value;
            const { payload } = await jose.jwtVerify(token, new TextEncoder().encode(`secret-key-phrase`));

            console.log(payload)

            if (DateTime.now().toSeconds() < payload.exp) {
                const res = NextResponse.next();
                res.headers.append("x-userid", payload.userID as string);
                return res;
            }
            return NextResponse.json("Invalid token");
        } catch (err) {
            return NextResponse.json(err);
        }
    }
}
