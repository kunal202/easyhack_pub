const { Router } = require('express');
const indexRouter = Router();
const { userRouter } = require('./users');

indexRouter.use('/user', userRouter);

module.exports = { indexRouter };
