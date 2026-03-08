import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }

}, { timestamps: true });

const Lesson = mongoose.model("Lesson", lessonSchema);

export default Lesson;