import { sql } from "../../config/database.js";
import { v4 as uuidv4, v4 } from "uuid";
export const getAllUsers = async (req, res) => {
  try {
    const usersData = await sql`SELECT * FROM users`;
    res.send(usersData);
    console.log(usersData);
  } catch (err) {
    console.log(err);
  }
};
export const createUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    await sql`INSERT INTO users(email, name, password) VALUES(${email}, ${name}, ${password})`;
    res.status(201).send("success: true");
    console.log("irsen");
  } catch (error) {
    console.log(error);
    console.log("aldaa");
  }
};
