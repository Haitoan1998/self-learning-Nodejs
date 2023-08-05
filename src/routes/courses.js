const express = require("express");
const router = express.Router();
const courseController = require("../app/Newscontrollers/Coursecontrollers");
// newsController.index;
router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/update/:_id", courseController.update);
router.put("/:_id", courseController.updated);
router.delete("/:_id", courseController.destroy);
router.get("/:slug", courseController.show);

module.exports = router;
