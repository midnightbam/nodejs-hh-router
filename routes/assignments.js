// routes/assignments.js
import express from "express";
import { assignments as assignmentsFromFile } from "../data/assignments.js";

let assignments = [...assignmentsFromFile];
const router = express.Router();

// GET all
router.get("/", (req, res) => {
  return res.json({ data: assignments });
});

// GET by ID
router.get("/:id", (req, res) => {
  const assignmentId = +req.params.id;
  const hasFound = assignments.find((a) => a.id === assignmentId);

  if (!hasFound) {
    return res.status(404).json({
      message: `Assignment ${assignmentId} not found`,
    });
  }

  return res.json({ data: hasFound });
});

// POST create
router.post("/", (req, res) => {
  const newAssignment = { id: assignments.length + 1, ...req.body };
  assignments.push(newAssignment);
  return res.status(201).json({ data: newAssignment });
});

export default router;
