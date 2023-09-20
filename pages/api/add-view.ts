import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        db.sql`UPDATE Threads SET Views = Views + 1 WHERE ID = ${req.query.t as string}`;
        return res.status(200).json("");
    } catch (err) {
        return res.status(500).json({ err });
    }
}
