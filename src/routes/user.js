const express = require('express');
const router = express.Router();

const userController = require('../Controllers/UserController')

router.get('/detail/:id', userController.detailPage)
router.get('/create', userController.createPage)
router.get('/edit/:id', userController.editPage)
router.put('/:id', userController.update)
router.delete('/:id', userController.destroy)
router.post('/store', userController.storeUsers)

module.exports = router;