const {Router}= require('express');
const userRouter = require('./user/userRouter');
const router = Router();
router.use('/',userRouter)
module.exports = router;