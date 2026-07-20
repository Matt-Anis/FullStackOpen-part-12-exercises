const express = require("express");
const router = express.Router();

const configs = require("../util/config");

const redis = require("../redis");
// this was moved to the middleware visitors to have global effect

// (async () => {
//   await redis.set("visits", 0);
// })();

/* GET index data. */
router.get("/", async (req, res) => {
  const visits = await redis.get("visits");
  res.send({
    ...configs,
    visits,
  });
});

module.exports = router;
