const router = require('express').Router()
const postController = require('../controllers/post.controller')
const likeController = require('../controllers/like.controller')

router.get('/', postController.getPost)

router.post('/', postController.addPost)

router.put('/:id', postController.modifyPost)

router.delete('/:id', postController.deletePost)

router.post("/:id/like", likeController.likePost)
module.exports = router;