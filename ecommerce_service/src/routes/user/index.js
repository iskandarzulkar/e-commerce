const express = require("express");
const router = express.Router();

const UserController = require('../../controller/user');

const authMiddleware = require("../../middleware/authMiddleware");

router.post('/register', UserController.create);
router.post('/login', UserController.login);


router.get('/', authMiddleware, UserController.getAll);
router.put('/reset-password/:id_user', authMiddleware, UserController.resetPassword);
router.put('/:id_user', authMiddleware, UserController.update);
router.get('/:id_user', authMiddleware, UserController.read);
router.delete('/:id_user', authMiddleware, UserController.delete);


module.exports = router;