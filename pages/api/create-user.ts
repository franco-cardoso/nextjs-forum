import { db } from "@vercel/postgres";
import { genSalt, hash } from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next";
import createToken from "./scripts";

async function isTaken(field, content) {
    switch (field) {
        case "Email": {
            const data = await db.sql`SELECT * FROM Users WHERE Email = ${content}`;
            return data.rows[0];
        }
        case "Username": {
            const data = await db.sql`SELECT * FROM Users WHERE Username = ${content}`;
            return data.rows[0];
        }
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { username, email, password } = req.body;

        if (await isTaken("Email", email)) return res.status(400).json("Email is in use.");
        if (await isTaken("Username", username)) return res.status(400).json("Username is taken.");

        genSalt(10, (err, salt) => {
            if (err) throw err;
            hash(password, salt, (err, hash) => {
                if (err) throw err;
                db.sql`INSERT INTO Users (Username, Email, Password) VALUES (${username},${email},${hash});`
                    .then(async () => {
                        const sqlQuery = await db.sql`SELECT UserID from Users WHERE Email = ${email};`;
                        const userId = sqlQuery.rows[0].userid;

                        setCookie("jwt", await createToken(userId), { req, res });
                        res.status(200).json("User Created");
                    })
                    .catch((err) => {
                        throw new Error(err);
                    });
            });
        });
    } catch (err) {
        return res.status(500).json(err);
    }
}
