require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

// TODO 1: Import taskRoutes
// TODO 2: Use routes → /api/tasks
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);
const errorHandler = require("./middleware/errorHandler");

app.get("/", (req, res) => {
  res.send("API Running");
});

// TODO 3: Add error handler (LAST)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
