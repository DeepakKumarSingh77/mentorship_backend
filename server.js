import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/db/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import studentRoutes from "./src/routes/studentRoutes.js";
import lessonRoutes from "./src/routes/lessonRoutes.js";
import bookingRoutes from "./src/routes/bookingRoutes.js";
import sessionRoutes from "./src/routes/sessionRoutes.js";
import llmRoutes from "./src/routes/llmRoutes.js";


dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.use("/auth", authRoutes);
app.use("/students", studentRoutes);
app.use("/lessons", lessonRoutes);
app.use("/bookings", bookingRoutes);
app.use("/sessions", sessionRoutes);
app.use("/llm", llmRoutes);

app.get("/", (req, res) => {
  res.send("Mentorship backend running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});