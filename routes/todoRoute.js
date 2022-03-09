const express = require('express');
const router = express.Router();

const {
    createTodo,
    getTodoById,
    getTodo,
    deleteTodo,
    getAllTodos,
    updateTodo,
} = require('../controller/todoController');
// params
// it will fetch the value from the url 
router.param("todoId", getTodoById);

// to get all the tasks
router.get("todos/",getAllTodos);

// to get a single todo 
router.get("/todo/:todoId/", getTodo);

// to create a Todo
router.post("todo/create",createTodo);
 
// to update the todo
router.put("todo/:todoId/update", updateTodo);

// to delete the todo
router.delete("todo/:todoId/delete", deleteTodo);

module.exports = router;

