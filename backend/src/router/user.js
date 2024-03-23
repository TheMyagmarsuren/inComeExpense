import { Router } from "express";
import { getAllUsers, createUser } from "../controller/user.js";
const user = Router();

user.route("/").get(getAllUsers).post(createUser);

export { user };
