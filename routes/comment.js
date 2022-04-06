const express = require('express');
const router = express.Router();

const { 
    addComment,
    deleteComment,
    updateComment,
    findComment
} = require('../controller/comment');

router.post('/comment/add',addComment);
router.get('/comment/:id', findComment);
router.put('/comment/update/:id',updateComment);
router.delete('/delete/delete/:id',deleteComment);

module.exports = router;