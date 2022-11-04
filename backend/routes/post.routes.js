const router = require('express').Router()
const postController = require('../controllers/post.controller')
const likeController = require('../controllers/like.controller')
const multer = require('../config/multer-config');
const auth = require("../middleware/auth");

router.get('/', postController.getPost)

router.post('/', auth, multer, postController.addPost)

router.put('/:id', auth, multer, postController.modifyPost)

router.delete('/:id', postController.deletePost)

router.post("/:id/like", likeController.likePost)
module.exports = router;