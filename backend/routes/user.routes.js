const router = require('express').Router()
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')

router.post('/signup', authController.signUp)
router.post('/signin', authController.signIn)
router.post('/auth', authController.auth)

router.get('/', userController.getAllUsers)
router.put('/:id', userController.updateUserInfo)

router.delete('/delete/:id', userController.deleteUser)

module.exports = router