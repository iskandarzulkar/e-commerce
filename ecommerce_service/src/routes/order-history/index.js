const express = require("express");
const router = express.Router();

const OrderHistoryController = require('../../controller/order-history');

const authMiddleware = require("../../middleware/authMiddleware");

router.get('/', authMiddleware, OrderHistoryController.getAll);
router.get('/user/:id_user', authMiddleware, OrderHistoryController.getByIdUser);
router.get('/:id_order', authMiddleware, OrderHistoryController.read);
router.post('/', authMiddleware, OrderHistoryController.create);
router.put('/:id_order', authMiddleware, OrderHistoryController.update);
router.delete('/:id_order', authMiddleware, OrderHistoryController.delete);

module.exports = router;