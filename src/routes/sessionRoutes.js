import express from "express";
const router = express.Router();

import { createSession, getLessonSessions } from "../controllers/sessionController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/", authMiddleware, createSession);

router.get("/lesson/:id", authMiddleware, getLessonSessions);

export default router;