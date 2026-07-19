const express = require("express");
const router = express.Router();
const redis = require("../redis");

router.get("/", async (_, res) => {
  const todoCount = (await redis.get("todos_count")) || 0;

  res.json({ todoCount });
});

module.exports = router;
