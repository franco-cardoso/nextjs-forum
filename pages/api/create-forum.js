import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    const {forumName, forumDesc, forumCateg} = request.query;
    if (!forumName || !forumDesc) throw new Error('Forum name and description required');
    await sql`INSERT INTO Forums (Name, Description, Category) VALUES (${forumName}, ${forumDesc}, ${forumCateg});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const forums = await sql`SELECT * FROM Forums;`;
  return response.status(200).json({ forums });
}