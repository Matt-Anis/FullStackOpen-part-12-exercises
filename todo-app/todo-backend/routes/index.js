const express = require("express");
const router = express.Router();

const configs = require("../util/config");
const redis = require("../redis");

(async () => {
  await redis.set("visits", 1);
})();

/* GET index data. */
router.get("/", async (req, res) => {
  const visits = await redis.get("visits");
  await redis.set("visits", Number(visits) + 1);

  res.send({
    ...configs,
    visits,
  });
});

module.exports = router;
