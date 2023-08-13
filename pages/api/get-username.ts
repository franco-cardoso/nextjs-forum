import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
        return db.sql`SELECT Username FROM Users WHERE UserID = ${req.query.userid as string}`
            .then((result) => res.status(200).json(result?.rows[0]))
            .catch((err) => res.status(500).json(err));
    } catch (err) {
        return res.status(500).json(err);
    }
}
