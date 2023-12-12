require("express-async-error");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRouter = require("./routers/userRouter");
const error = require("./middlewares/error");
const categoryRouter = require("./routers/categoryRouter");
const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use(error);

module.exports = app;
