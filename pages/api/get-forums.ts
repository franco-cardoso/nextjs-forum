import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const query = await db.sql`SELECT * FROM Forums;`;
        const data = query.rows;
        let forums = {};

        for (const i in data) {
            const el = data[i];

            // query the amount of threads in forum
            const threadQuery = await db.sql`SELECT COUNT(Forum) FROM Threads WHERE Forum = ${el.name}`;
            el.threads = threadQuery.rows[0].count;

            // separate the data by their categories and into @forums
            if (forums[el.category]) {
                forums[el.category] = [...forums[el.category], el];
            } else {
                forums[el.category] = [el];
            }
        }

        return res.status(200).json(forums);
    } catch (err) {
        return res.status(500).json({ err });
    }
}
