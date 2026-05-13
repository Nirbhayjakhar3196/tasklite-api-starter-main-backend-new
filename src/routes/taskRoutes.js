const express = require("express");
const router = express.Router();

const { getTasks, createTask } = require("../utils/fakeDB");

// TODO 1: Convert this route to async/await with try/catch
router.get("/", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// TODO 2: Implement POST /api/tasks
// - Accept { title }
// - If title missing → return 400
// - Else create task and return it
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const newTask = await createTask(title);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
