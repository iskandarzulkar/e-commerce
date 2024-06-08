const express = require("express");
const router = express.Router();

const ProductController = require('../../controller/product');

const authMiddleware = require("../../middleware/authMiddleware");

router.get('/', authMiddleware, ProductController.getAll);
router.get('/:id_product', authMiddleware, ProductController.read);
router.post('/', authMiddleware, ProductController.create);
router.put('/:id_product', authMiddleware, ProductController.update);
router.delete('/:id_product', authMiddleware, ProductController.delete);

module.exports = router;