import Booking from "../models/Booking.js";
import Student from "../models/Student.js";

const createBooking = async (req, res) => {
  try {

    if (req.user.role !== "parent") {
      return res.status(403).json({
        message: "Only parents can book lessons"
      });
    }

    const { studentId, lessonId } = req.body;

    // check student belongs to parent
    const student = await Student.findOne({
      _id: studentId,
      parentId: req.user.id
    });

    if (!student) {
      return res.status(404).json({
        message: "Student not found for this parent"
      });
    }

    const booking = await Booking.create({
      studentId,
      lessonId
    });

    res.json(booking);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createBooking };