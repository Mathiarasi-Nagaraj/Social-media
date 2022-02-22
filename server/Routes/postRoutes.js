const express=require('express');
const router=express.Router();
const postController=require('../Controller/postController')
router.put('/:id',postController.update);
router.delete('/:userId',postController.deleteone);
router.get('/:id',postController.get);
router.get('/profile/:username',postController.getuserpost)
router.put('/like/:id',postController.like);
router.post('/',postController.post);
router.get('/timeline/:id',postController.gettimeline)
module.exports=router;