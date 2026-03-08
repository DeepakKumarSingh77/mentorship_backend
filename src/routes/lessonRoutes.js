import express from "express";
const router = express.Router();

import { createLesson } from "../controllers/lessonController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/", authMiddleware, createLesson);

export default router;