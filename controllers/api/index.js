const router = require("express").Router();
const userRoutes = require("./userRoutes");
const commentRoute = require("./commentRoute");

router.use("/users", userRoutes);
router.use("/comments", commentRoute);

module.exports = router;
