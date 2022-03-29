// const db = require('../model');
// const Todo =db.todo;
const todo = require("../model/todo");
const Todo = require("../model/todo");

exports.createTodo = async (req, res) => {

    const todo = new Todo({
        username: req.body.username,
        title: req.body.title,
        status: req.body.status,
        category: req.body.category,
    });
    
    try {
        const savedTodo = await todo.save();
        res.status(200).json(savedTodo);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }

};

exports.getTodoById = (req, res, next, todoId) => {
   Todo.findById(req.params.todoId).exec((err, todo) => {
        if (err || !todo) { 
            return res.status(400).json({
                error: "404 todo not found",
            });
        }
        req.todo = todo;
        next();
    });
};

exports.getAllTodos = async (req, res) => {
  // pagination
  const pageOptions = {
    page: parseInt(req.query.page, 10) || 0, 
    limit : parseInt(req.query.limit, 10) || 10,
  };
  try {
    const todos = await Todo.find()
                   .skip(pageOptions.page * pageOptions.limit)
                   .limit(pageOptions.limit)
                   .exec()
                   .then();
                   res.status(200).json(err);

  } catch (err){
    res.status(500).json(err);
  }
}
exports.getTodo = (req, res) =>{
    return res.json(req.todo);
};  

exports.updateTodo = (req, res) => {
    
    const todo = req.todo;
    
    todo.task = req.body.task;
      todo.save((err, t) => {
      if (err || !t) {
        return res.status(400).json({
          error: "something went wrong while updating",
        });
      }
      res.json(t);
    });
  };



  exports.deleteTodo =(req, res)=> {
     Todo.findByIdAndDelete(req.params.id)
     .then(()=> {
       var response = { message : "Todo deleted successfully", 
       status: true};
       return res.json(response);
       // here return is per postman 
     });
  };


 
  
  


