import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";
import { getAllUsers, getUserProfile, updateUser } from "./users.controller.js";

const router = Router();

router.get("/", auth, isSuperAdmin, getAllUsers);
router.get("/profile", auth, getUserProfile);
router.put("/profile", auth, updateUser);

export { router };
