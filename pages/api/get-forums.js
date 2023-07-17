import { db } from "@vercel/postgres";

export default async function handler(request, response) {
  try {
    console.log()
    const data = await db.sql`SELECT * FROM Forums WHERE Category = ${request.query.category}`;
    return response.status(200).json({ data });
  } catch (err) {
    return response.status(500).json({ err });
  }
}
