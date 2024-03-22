import express from "express";
import { sql } from "./config/database.js";
import { user } from "./src/router/user.js";
import { v4 as uuidv4 } from "uuid";
const app = express();
const port = 3001;

app.use("/users", user);

app.post("/users/createTable,", async (req, res) => {
  const data =
    await sql`CREATE TABLE people (id Serial PRIMARY KEY, name Text NOT NULL,email TEXT NOT NULL )`;
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
