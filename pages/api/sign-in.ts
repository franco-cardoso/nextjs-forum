import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import { createToken } from "./scripts";
import { compare } from "bcryptjs";
import { NextResponse } from "next/server";
import { setCookie } from "cookies-next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { username, password } = req.body;
        let user;

        if (username.includes("@")) {
            const data = await db.query("SELECT * FROM Users WHERE Username = 'test'",[username]);
            user = data.rows[0];
        } else {
            const data = await db.query("SELECT * FROM Users WHERE Email = $1",[username]);
            console.log(data)
            user = data.rows[0];
        }
        return console.log(user)
        if (!user) return res.status(400).json("Username or password incorrect");

        return compare(password, user.password)
            .then(async (result) => {
                if (result) {
                    setCookie("jwt", await createToken(user.userid), { req, res });
                    res.status(200).json("Successfully logged in");
                } else res.status(400).json("Username or password incorrect");
            })
            .catch((err) => res.status(400).json(err));
    } catch (err) {
        return res.status(500).json(err);
    }
}
