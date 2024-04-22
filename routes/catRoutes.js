const express = require('express')
const router = express.Router()
const catController = require('../controllers/controller')

router.get('/cats', catController.getAllCats)
router.post('/cats', catController.saveCat)
router.delete('/cats', catController.deleteCat)

module.exports = router