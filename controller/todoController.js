// const db = require('../model');
// const Todo =db.todo;
const Todo = require("../model/todo");

exports.createTodo = async (req, res) => {
    console.log("TEst");

    const todo = new Todo({
        username: req.body.username,
        title: req.body.title,
        status: req.body.status,
        category: req.body.category,
    });
    // todo.save((err,data) => {
    //     // if (err || !data){
    //     //     return res.status(400).json({
    //     //         error: "Something went wrong",
    //     //     });
    //     // }
    //     if (err) {
    //         res.status(200).send({message:"error found", error: error});

    //     }
    //     else{
    //         res.status(200).send({message:"TODO created."});

    //     }
    //     // todo is create
    //     // send the created todo as json response
    //     res.json({ data});
    // });
    try {
        const savedTodo = await todo.save();
        res.status(200).json(savedTodo);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }

};

exports.getTodoById = (req, res, next, todoId) => {
    TODO.findById(req.params.todoId).exec((err, todo) => {
        if (err || !todo) { 
            return res.status(400).json({
                error: "404 todo not found",
            });
        }
        req.todo = todo;
        next();
    });
};
exports.getAllTodos = (req, res) => {
    // simply use .find() method and it will return all the todos
    Todo.find()
      .sort("-createdAt")
      .exec((err, todos) => {
        // error checking
        if (err || !todos) {
          return res.status(400).json({
            error: "Something went wrong in finding all todos",
          });
        }
        // return all the todos in json format
        res.json(todos);
      });
  };
  
exports.getTodo = (req, res) =>{
    return res.json(req.todo);
};  

exports.updateTodo = (req, res) => {
    // take req.todo from getTodoById() middleware and
    // fetch the todo that user wants to update
    const todo = req.todo;
    // simply change the task of the todo that user want to update by
    // the task that user has sent in req.body.task
    todo.task = req.body.task;
  
    // simply save that updated todo
    todo.save((err, t) => {
      if (err || !t) {
        return res.status(400).json({
          error: "something went wrong while updating",
        });
      }
      // send the updated todo as a json response
      res.json(t);
    });
  };
  exports.deleteTodo = (req, res) => {
    // take req.todo from getTodoById() middleware and
    // fetch the todo that user wants to delete
    const todo = req.todo;
    // call .remove() method to delete it
    todo.remove((err, task) => {
      if (err || !task) {
        return res.status(400).json({
          error: "something went wrong while deleting the todo",
        });
      }
      // send deleted todo and success message as a json response
      res.json({
        task_deleted: task,
        message: "Todo deleted successfully!",
      });
    });
  };
  


