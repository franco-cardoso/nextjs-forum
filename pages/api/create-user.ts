import { db } from "@vercel/postgres";
import { genSalt, hash } from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";

async function isTaken(field, content) {
  switch (field) {
    case 'Email': return await db.sql`SELECT * FROM Users WHERE Email = ${content}`;
    case 'Username': return await db.sql`SELECT * FROM Users WHERE Username = ${content}`;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { username, email, password } = req.body;

    if (await isTaken("Email", email)) return res.status(400).json("Email is in use.");
    if (await isTaken("Username", username)) return res.status(400).json("Username is taken.");

    genSalt(10, (err, salt) => {
      if (err) throw new Error(err);
      hash(password, salt, (err, hash) => {
        if (err) throw new Error(err);
        db.sql`INSERT INTO Users (Username, Email, Password) VALUES (${username},${email},${hash})`
          .then(() => res.status(200).json("User Created"))
          .catch((err) => {
            throw new Error(err);
          });
      });
    });
  } catch (err) {
    return res.status(500).json(err);
  }
}
