import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req:NextApiRequest, res:NextApiResponse) {
    try {
        return db.sql`SELECT * FROM Posts WHERE Thread = ${req.query.thread as string}`
            .then((result) => res.status(200).json(result.rows))
            .catch((err) => res.status(500).json(err));
    } catch (err) {
        return res.status(500).json(err);
    }
}