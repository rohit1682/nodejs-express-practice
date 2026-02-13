const express = require('express');
const itemController = require('../controllers/itemController');
const validateItem = require('../middleware/validateItem');

const router = express.Router();

router.get('/', itemController.getItems);
router.get('/:id', itemController.getItem);
router.post('/', validateItem, itemController.createItem);
router.put('/:id', validateItem, itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;

