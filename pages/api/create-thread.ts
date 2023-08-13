import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log(req.body)
        const { title, content, forum } = req.body;
        return db.sql`INSERT INTO Threads (Title, Content, Forum, Author) VALUES (${title}, ${content}, ${forum}, ${
            req.headers["x-userid"] as string
        })`
            .then((result) => res.status(200).json(result))
            .catch((err) => res.status(500).json(err));
    } catch (err) {
        return res.status(500).json(err);
    }
}
