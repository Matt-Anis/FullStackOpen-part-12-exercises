const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const visitorsMiddleware = require("./middleware/visitors");

const indexRouter = require("./routes/index");
const todosRouter = require("./routes/todos");
const stats = require("./routes/statistics");

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(visitorsMiddleware);

app.use("/", indexRouter);
app.use("/todos", todosRouter);
app.use("/statistics", stats);

module.exports = app;
