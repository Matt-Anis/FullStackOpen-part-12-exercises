const redis = require("../redis");

(async () => {
  await redis.set("visits", 0);
})();

const middleware = async (req, res, next) => {
  await redis.incr("visits");
  next();
};

module.exports = middleware;
