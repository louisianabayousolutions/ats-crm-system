const express = require("express");
const router = express.Router();

const candidates = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "555-123-4567",
    status: "Applied"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "555-987-6543",
    status: "Interviewing"
  }
];

router.get("/", (req, res) => {
  res.json(candidates);
});

module.exports = router;