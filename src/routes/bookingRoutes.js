import express from "express";
const router = express.Router();

import { createBooking } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";   

router.post("/", authMiddleware, createBooking);

export default router;