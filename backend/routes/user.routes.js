const router = require('express').Router()
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')

router.post('/register',authController.signUp)

router.get('/', userController.getAllUsers)
router.put('/:id', userController.updateUserInfo)

module.exports = router