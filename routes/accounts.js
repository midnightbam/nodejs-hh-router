// routes/accounts.js
import express from "express";

let accounts = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

const router = express.Router();

// GET all accounts
router.get("/", (req, res) => {
  return res.json({ data: accounts });
});

// GET account by id
router.get("/:id", (req, res) => {
  const accountId = +req.params.id;
  const account = accounts.find((a) => a.id === accountId);

  if (!account) {
    return res.status(404).json({ message: `Account ${accountId} not found` });
  }

  return res.json({ data: account });
});

// POST create account
router.post("/", (req, res) => {
  const newAccount = { id: accounts.length + 1, ...req.body };
  accounts.push(newAccount);
  return res.status(201).json({ data: newAccount });
});

// PUT update account
router.put("/:id", (req, res) => {
  const accountId = +req.params.id;
  const index = accounts.findIndex((a) => a.id === accountId);

  if (index === -1) {
    return res.status(404).json({ message: `Account ${accountId} not found` });
  }

  accounts[index] = { ...accounts[index], ...req.body };
  return res.json({ data: accounts[index] });
});

// DELETE account
router.delete("/:id", (req, res) => {
  const accountId = +req.params.id;
  const index = accounts.findIndex((a) => a.id === accountId);

  if (index === -1) {
    return res.status(404).json({ message: `Account ${accountId} not found` });
  }

  const deleted = accounts.splice(index, 1);
  return res.json({ data: deleted[0] });
});

export default router;
