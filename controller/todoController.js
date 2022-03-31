
const Todo = require("../model/todo");

exports.addTodo = async (req, res) => {
    console.log('Test');
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
exports.getAllTodo = async (req, res) => {
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
                   res.status(200).json(todos);

  } catch (err){
    res.status(500).json(err);
  }
}

//UPDATE todo

module.exports.updateTodo = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await Todo.updateOne(
    { _id: id },
    {
      $set: req.body,
    }
  )
    .exec()
    .then((result) => {
      res.status(200).json({
        message: `Updated todo details successfully `,
        result,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    });
};

//GET one TODO
module.exports.getOneTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json(err);
  }
};


//DELETE todo
module.exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    try {
      await todo.delete();
      res.status(200).json("todo has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};


 
  
  


