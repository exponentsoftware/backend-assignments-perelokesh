const express = require('express');
const router = express.Router();

const {
    createTodo,
    getTodoById,
    getTodo,
    getAllTodos,
    updateTodo,
    deleteTodo,
    filter,
} = require('../controller/todoController');

// to create a Todo
router.post("/todo/create",createTodo);
 
// params
// it will fetch the value from the url 
router.get("/:id", getTodoById);

// to get all the tasks
router.get("/todos",getAllTodos);

// to get a single todo 
// router.get("/:id", getTodo);


// to update the todo
router.put("/:id/update", updateTodo);

// to delete the todo
router.delete("/:id/delete", deleteTodo);

// //filterPath
// router.get("/filter", filter);

module.exports = router;

