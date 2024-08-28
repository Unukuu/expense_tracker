const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { logger } = require("./middlewares/logger");
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());

app.get("/user", (req, res) => {
  console.log("get ");
  res.json({ message: "success" });
});
app.post("/user", (req, res) => {
  console.log("post");
});
app.put("/user", (req, res) => {
  console.log("changed users");
});
app.delete("/user", (req, res) => {
  console.log("deleted");
});

app.get("/category", (req, res) => {
  console.log("get ");
});
app.post("/category", (req, res) => {
  console.log("post");
});
app.put("/category", (req, res) => {
  console.log("changed category");
});
app.delete("/category", (req, res) => {
  console.log("deleted");
});

app.listen(PORT, () => {
  console.log(`server is running at ~localhost:${PORT}`);
});
