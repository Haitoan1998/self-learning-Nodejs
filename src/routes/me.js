const express = require("express");
const router = express.Router();
const MeController = require("../app/Newscontrollers/Mecontrollers");
// newsController.index;
router.get("/create/mycourses", MeController.me);
router.get("/bin/mycourses", MeController.bin);
// router.get("/create/mycourses", MeController.store);

module.exports = router;
