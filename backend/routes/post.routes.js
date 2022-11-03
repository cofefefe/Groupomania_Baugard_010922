const router = require('express').Router()
const postController = require('../controllers/post.controller')
const likeController = require('../controllers/like.controller')
const multer = require('../config/multer-config');

router.get('/', postController.getPost)

router.post('/', multer, postController.addPost)

router.put('/:id', postController.modifyPost)

router.delete('/:id', postController.deleteArticle)

router.post("/:id/like", likeController.likePost)
module.exports = router;