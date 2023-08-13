import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        return db.sql`SELECT Title, Author, Date, Id FROM Threads WHERE Forum = ${req.query.forum as string}`
            .then((result) => res.status(200).json(result.rows))
            .catch((err) => res.status(500).json(err));
    } catch (err) {
        return res.status(500).json(err);
    }
}
