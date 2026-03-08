import Session from "../models/Session.js";

const createSession = async (req, res) => {
  try {

    if (req.user.role !== "mentor") {
      return res.status(403).json({
        message: "Only mentors can create sessions"
      });
    }

    const { lessonId, date, topic, summary } = req.body;

    const session = await Session.create({
      lessonId,
      date,
      topic,
      summary
    });

    res.json(session);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const getLessonSessions = async (req, res) => {

  const { id } = req.params;

  const sessions = await Session.find({
    lessonId: id
  });

  res.json(sessions);
};

export { createSession, getLessonSessions };