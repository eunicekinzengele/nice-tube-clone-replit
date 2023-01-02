const express = require ('express');
const router = express.Router();
const commentController = require('../controllers/CommentController')


router.post("/", commentController.createAComment);
router.get("/", commentController.findAComment);
