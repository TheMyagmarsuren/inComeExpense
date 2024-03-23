import express from "express";
import { sql } from "./config/database.js";
import { user } from "./src/router/user.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;

app.use("/users", user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
