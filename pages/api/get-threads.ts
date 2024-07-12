import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // return db.sql`SELECT Title, Author, Date, Id, Views FROM Threads WHERE Forum = ${req.query.forum as string}`
        //     .then((result) => {
        //         let data = result.rows;
        //         data.forEach(async (el, i) => {
        //             const replies = await db.sql`SELECT COUNT(Author) FROM Posts WHERE Thread = ${el.id}`;
        //             // console.log(data[i])
        //             data[i] = { ...data[i], count: replies.rows[0].count };
        //         });
        //         console.log(data);
        //         res.status(200).json(result.rows);
        //     })
        //     .catch((err) => res.status(500).json(err));

        const threadsReq = await db.sql`SELECT Title, Author, Date, Id, Views FROM Threads WHERE Forum = ${
            req.query.forum as string
        }`;

        let threads = [];
        for (const el of threadsReq.rows) {
            const replies = await db.sql`SELECT COUNT(Author) FROM Posts WHERE Thread = ${el.id}`;
            console.log(replies.rows[0].count)
            // console.log(el)
            threads.push({ ...el, replies: replies.rows[0].count });
        }
        return res.status(200).json(threads)
    } catch (err) {
        return res.status(500).json(err);
    }
}
