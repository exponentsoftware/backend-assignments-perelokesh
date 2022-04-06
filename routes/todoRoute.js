const express = require('express');
const router = express.Router();

const {
    addTodo,
    getOneTodo,
    getAllTodo,
    updateTodo,
    deleteTodo
    
} = require('../controller/todoController');

// to add a Todo
router.post("/todo/add",addTodo);
1
// to get all the tasks
router.get("/getall",getAllTodo);

//get by id
router.get("/:id",getOneTodo);

// to update the todo
router.put("/:id/update", updateTodo);

// to delete the todo
router.delete("/:id/delete", deleteTodo);

module.exports = router;
