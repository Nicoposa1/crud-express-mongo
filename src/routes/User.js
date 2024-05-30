const express = require("express");
const userController = require("../controllers/User");
const router = express.Router();


router.get("/", userController.findAll);
router.get("/:userId", userController.findOne);
router.post("/", userController.create);
router.patch("/:userId", userController.update);
router.delete("/:userId", userController.delete);

module.exports = router;

