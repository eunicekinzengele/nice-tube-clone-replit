const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

router.post("/", userController.createAUser);
router.get("/", userController.getAllUsers);
router.put("/:id", userController.updateOneUser);
router.get("/:id", userController.getOneUser);

module.exports = router;