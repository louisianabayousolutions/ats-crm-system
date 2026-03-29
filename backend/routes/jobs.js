const express = require("express");
const router = express.Router();

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    status: "Open"
  },
  {
    id: 2,
    title: "Recruiter",
    department: "Talent Acquisition",
    location: "Baton Rouge, LA",
    status: "Open"
  }
];

router.get("/", (req, res) => {
  res.json(jobs);
});

module.exports = router;