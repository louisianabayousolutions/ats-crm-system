const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const candidateRoutes = require("./routes/candidates");
const jobRoutes = require("./routes/jobs");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "ATS/CRM backend is running" });
});

app.use("/api/candidates", candidateRoutes);
app.use("/api/jobs", jobRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});