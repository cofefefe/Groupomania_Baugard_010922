const router = require('express').Router()
const postController = require('../controllers/post.controller')

router.get('/', postController.getPost)

router.post('/', postController.addPost)

router.put('/:id', postController.modifyPost)

router.delete('/:id', postController.deletePost)

module.exports = router;