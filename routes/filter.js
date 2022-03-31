const express = require('express');
const filterTodo = require("../controller/filter");
const router = express.Router();

router.get("/filterAll", filterTodo.filter);
module.exports = router;