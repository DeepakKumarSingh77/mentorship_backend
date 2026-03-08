import express from "express";
const router = express.Router();

import { createStudent, getStudents } from "../controllers/studentController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/", authMiddleware, createStudent);
router.get("/", authMiddleware, getStudents);

export default router;