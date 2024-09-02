const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth-route");
const userRoutes = require("./routes/user-route");
const cateroryRoutes = require("./routes/category-route");
const recordRoutes = require("./routes/record-route");
const { logger } = require("./middlewares/logger");
dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/categories", cateroryRoutes);
app.use("/records", recordRoutes);
app.listen(PORT, () => {
  console.log(`server is running at ~localhost:${PORT}`);
});
