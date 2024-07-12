import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        return db.sql`SELECT * FROM Threads WHERE Id = ${req.query.thread as string}`
            .then((result) => {
                fetch(`${process.env.NEXT_PUBLIC_URL}/api/add-view?t=${req.query.thread as string}`)
                res.status(200).json(result.rows);
            })
            .catch((err) => res.status(500).json(err));
    } catch (err) {
        return res.status(500).json(err);
    }
}
