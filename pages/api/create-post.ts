import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { post, date, user, threadId } = req.body;

        return db.sql`INSERT INTO Posts (Author, Content, Date, Thread) VALUES (${user}, ${post}, ${date}, ${threadId})`
            .then((result) => res.status(200).json(result))
            .catch((err) => res.status(500).json(err));
    } catch (err) {
        return res.status(500).send(err);
    }
}
