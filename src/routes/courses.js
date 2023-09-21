const express = require("express");
const router = express.Router();
const courseController = require("../app/Newscontrollers/Coursecontrollers");

// newsController.index;
router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/update/:_id", courseController.update);
router.delete(
  "/handle-form-action-hard-deleteOrRestore",
  courseController.handleFormActionDeleteHard
);
router.patch(
  "/handle-form-action-hard-deleteOrRestore",
  courseController.handleFormActionRestore
);
router.put("/:_id", courseController.updated);

router.delete("/:_id", courseController.destroy);
router.delete("/:_id/hard", courseController.harddestroy);
router.post("/handle-form-action", courseController.handleFormAction);

router.patch("/:_id/restore", courseController.restore);
router.get("/:slug", courseController.show);

module.exports = router;
