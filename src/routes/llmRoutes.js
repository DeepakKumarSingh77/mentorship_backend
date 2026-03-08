import express from "express";
const router = express.Router();

import { summarizeText } from "../controllers/llmController.js";

router.post("/summarize", summarizeText);

export default router;