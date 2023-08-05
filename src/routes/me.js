const express = require("express");
const router = express.Router();
const MeController = require("../app/Newscontrollers/Mecontrollers");
// newsController.index;
router.get("/create/mycourses", MeController.me);
// router.get("/create/mycourses", MeController.store);

module.exports = router;
