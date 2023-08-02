import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import { createToken } from "./scripts";
import { compare } from "bcryptjs";
import { NextResponse } from "next/server";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { username, password } = req.body;
        let user;

        if (username.includes("@")) {
            const data = await db.sql`SELECT * FROM Users WHERE Email = ${username}`;
            user = data.rows[0];
        } else {
            const data = await db.sql`SELECT * FROM Users WHERE Username = ${username}`;
            user = data.rows[0];
        }
        if (!user) return res.status(400).json("Username or password incorrect");

        return compare(password, user.password)
            .then((result) => {

                if (result) {
                    res.setHeader("set-cookie", `token=${createToken(user.userid)}; path=/; samesite=lax; httponly;`)
                        .status(200)
                        .json("Successfully logged in");

                } else res.status(400).json("Username or password incorrect");
            })
            .catch((err) => res.status(400).json(err));
    } catch (err) {
        return res.status(500).json(err);
    }
}
