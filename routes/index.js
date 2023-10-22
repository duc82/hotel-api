const { Router } = require("express");

const router = Router();

router.use("/api/user", require("./user"));
// router.use("/api/rooms", roomRoute);

module.exports = router;
