const express = require("express");
const router = express.Router();
const newsController = require("../app/Newscontrollers/controllers");
// newsController.index;
router.use("/:slug", newsController.show);
router.use("/", newsController.index);

module.exports = router;
