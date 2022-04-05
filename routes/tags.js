const express = require('express');
const router = express.Router();

const {
    addTag,
    deleteTag,
    updateTag
} = require('../controller/tags');

router.post('/tags/add', addTag);
router.put('/tags/update/:id', updateTag);
router.delete('/tags/delete/:id', deleteTag);

module.exports = router;