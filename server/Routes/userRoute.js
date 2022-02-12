const userController=require('../Controller/userController');
const authController=require('../Controller/authController');
const express=require('express');
const router=express.Router()
// router.get('/',userController.index)
// router.post('/show',userController.show)
// router.post('/store',userController.store)
// router.post('/update',userController.update)
// router.post('/delete',userController.destroy)
router.post('/login',authController.login)
router.post('/register',authController.register)

module.exports=router;