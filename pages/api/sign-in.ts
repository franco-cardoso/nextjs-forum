import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { username, password } = req.body;
        let user;
        if (username.includes("@")) {
            user = await db.sql`SELECT * FROM Users WHERE Email = ${username}`;
            user = user.rows[0];
        } else {
            user = await db.sql`SELECT * FROM Users WHERE Username = ${username}`;
            user = user.rows[0];
        }
        console.log(user)
        if (!user) res.status(404).json("User not found");

    } catch (err) {}
}
