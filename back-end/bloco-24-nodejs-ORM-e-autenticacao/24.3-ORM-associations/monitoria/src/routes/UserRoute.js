const { Router } = require('express');
const userController = require('../controllers/UserController')

const userRouter = Router();

userRouter.get('/', userController.findAll);

userRouter.get('/:id', userController.findById);

userRouter.post('/', userController.create);

userRouter.put('/:id', userController.update);

userRouter.delete('/:id', userController.delete);


module.exports = userRouter;