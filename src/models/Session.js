import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({

  lessonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  topic: {
    type: String,
    required: true
  },

  summary: {
    type: String
  }

}, { timestamps: true });

const Session = mongoose.model("Session", sessionSchema);

export default Session;