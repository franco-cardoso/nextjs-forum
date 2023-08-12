import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const data = await db.sql`SELECT * FROM Forums;`;
        let forums = {};
        data.rows.forEach((el) => {
            if (forums[el.category]) {
                forums[el.category] = [...forums[el.category], el];
            } else {
                forums[el.category] = [el];
            }
        });

        return res.status(200).json(forums);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err });
    }
}
