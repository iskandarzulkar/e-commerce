const express = require("express");
const router = express.Router();

const CategoryProductController = require('../../controller/category-product');

const authMiddleware = require("../../middleware/authMiddleware");

router.get('/', authMiddleware, CategoryProductController.getAll);
router.get('/:id_category', authMiddleware, CategoryProductController.read);
router.post('/', authMiddleware, CategoryProductController.create);
router.put('/:id_category', authMiddleware, CategoryProductController.update);
router.delete('/:id_category', authMiddleware, CategoryProductController.delete);

module.exports = router;