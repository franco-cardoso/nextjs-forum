import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { title, content, forum } = req.body;
        const userId: string = req.headers["x-userid"] as string;

        const { rows } = await db.sql`SELECT Username FROM Users WHERE UserID = ${userId}`;
        
        return db.sql`INSERT INTO Threads (Title, Content, Forum, Author,AuthorID) VALUES (${title}, ${content}, ${forum}, ${rows[0].username},${userId})`
            .then((result) => res.status(200).json(result))
            .catch((err) => res.status(500).json(err));
    } catch (err) {
        return res.status(500).json(err);
    }
}
