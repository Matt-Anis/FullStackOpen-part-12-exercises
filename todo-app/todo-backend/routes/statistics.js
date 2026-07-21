const express = require("express");
const router = express.Router();
const redis = require("../redis");

router.get("/", async (_, res) => {
  const added_todos = Number((await redis.get("todos_count")) || 0);
  const visits = Number((await redis.get("visits")) || 0);

  res.json({ added_todos, visits });
});

module.exports = router;
