const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// ------------------------------------------------------
// CREATE — POST /tasks
// ------------------------------------------------------
router.post("/", async (req, res) => {
  try {
    const { title, description, dueDate, priority, category } = req.body;

    const task = new Task({
      title,
      description,
      dueDate,
      priority,
      category,
    });

    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ------------------------------------------------------
// READ ALL — GET /tasks
// Supports optional filtering: /tasks?status=pending&category=work&priority=high
// ------------------------------------------------------
router.get("/", async (req, res) => {
  try {
    const { status, category, priority } = req.query;
    const filter = {};

    if (status) filter.status = status;
    if (category) filter.category = category;
    if (priority) filter.priority = priority;

    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ------------------------------------------------------
// READ ONE — GET /tasks/:id
// ------------------------------------------------------
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ------------------------------------------------------
// UPDATE — PUT /tasks/:id
// ------------------------------------------------------
router.put("/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedTask) return res.status(404).json({ error: "Task not found" });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ------------------------------------------------------
// MARK COMPLETE — PATCH /tasks/:id/complete
// (a dedicated shortcut route — nice for a demo/LinkedIn post)
// ------------------------------------------------------
router.patch("/:id/complete", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status: "done" },
      { new: true }
    );
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ------------------------------------------------------
// DELETE — DELETE /tasks/:id
// ------------------------------------------------------
router.delete("/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ error: "Task not found" });
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;