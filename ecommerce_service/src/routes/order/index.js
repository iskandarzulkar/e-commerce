const express = require("express");
const router = express.Router();

const OrderController = require('../../controller/order');

const authMiddleware = require("../../middleware/authMiddleware");

router.get('/', authMiddleware, OrderController.getAll);
router.get('/:id_order', authMiddleware, OrderController.read);
router.post('/', authMiddleware, OrderController.create);
router.put('/:id_order', authMiddleware, OrderController.update);
router.delete('/:id_order', authMiddleware, OrderController.delete);

module.exports = router;