import Student from "../models/Student.js"

const createStudent = async (req, res) => {
  try {

    if (req.user.role !== "parent") {
      return res.status(403).json({ message: "Only parents can create students" });
    }

    const { name, age } = req.body;

    const student = await Student.create({
      name,
      age,
      parentId: req.user.id
    });

    res.json(student);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getStudents = async (req, res) => {

  const students = await Student.find({
    parentId: req.user.id
  });

  res.json(students);
};

export { createStudent, getStudents };