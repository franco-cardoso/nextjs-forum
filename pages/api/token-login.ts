import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const userId = req.headers["x-userid"];
        db.sql`SELECT Username, Email, UserID FROM Users WHERE UserID = ${userId as string}`
            .then((result) => {
                const data = result.rows[0];
                res.status(200).json(data);
            })
            .catch((err) => res.status(500).json(err));
    } catch (err) {
        return res.status(500).json(err);
    }
}
