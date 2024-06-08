const express = require("express");
const router = express.Router();

const ProductController = require('../../controller/product');

const authMiddleware = require("../../middleware/authMiddleware");

router.get('/', authMiddleware, ProductController.getAll);
router.get('/:id_chart', authMiddleware, ProductController.read);
router.post('/', authMiddleware, ProductController.create);
router.put('/:id_chart', authMiddleware, ProductController.update);
router.delete('/:id_chart', authMiddleware, ProductController.delete);

module.exports = router;