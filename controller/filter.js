const Todo = require("../model/todo");
// GET all todos
module.exports.filter = (req, res) => {
  console.log("Test2");
  const filter = {
    title: req.body.title,
    created_at: req.body.created_at,
    category: req.body.category,
  };

  for (const key in filter) {
    if (filter[key] === undefined) {
      delete filter[key];
    }
  }

  console.log(filter);

  Todo.find(filter)
    .select("tile created_at category")
    .exec()
    .then((Todo) => {
      const response = {
        Todos: Todo.map((Todo) => {
          return {
            username: Todo.username,
            title: Todo.title,
            is_Complete: Todo.is_Complete,
            created_at: Todo.created_at,
            updated_at: Todo.updated_at,
            category: Todo.category,
          };
        }),
      };
      res.status(200).json(Todo);
      console.log(Todo);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    });
};