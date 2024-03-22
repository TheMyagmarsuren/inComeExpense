import { sql } from "../../config/database.js";
import { v4 as uuidv4, v4 } from "uuid";
export const getAllUsers = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM users`;
    console.log(data);
    res.send(`id = ${uuidv4()}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
