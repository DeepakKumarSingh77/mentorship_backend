import Lesson from "../models/Lesson.js";


const createLesson = async (req, res) => {
  try {

    if (req.user.role !== "mentor") {
      return res.status(403).json({
        message: "Only mentors can create lessons"
      });
    }

    const { title, description } = req.body;

    const lesson = await Lesson.create({
      title,
      description,
      mentorId: req.user.id
    });

    res.json(lesson);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createLesson };