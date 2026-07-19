const express = require("express");
const router = express.Router();
const redis = require("../redis");

router.get("/", async (_, res) => {
  const added_todos = (await redis.get("todos_count")) || 0;

  res.json({ added_todos });
});

module.exports = router;
