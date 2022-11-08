const express = require('express');
const router = express.Router();

const apiController = require('../Controllers/APIController')

router.get('/users', apiController.getAllUsers)
router.post('/create-user', apiController.createUser)
router.put('/update-user', apiController.updateUser)
router.delete('/delete-user/:id', apiController.destroyUser)

module.exports = router;