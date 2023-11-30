const db = [
  {
    id: 1,
    title: "Todo 1",
    description: "Wash the Dishes",
  },
];

async function getTodo(request, response) {
  return response.json(db);
}

async function createTodo(request, response) {
  const todo = request.body;
  const { title, description } = todo;

  if (!title || !description) {
    return response.status(409).json({
      error: "Validation Error",
      message: "Invalid Input",
    });
  }

  db.push(todo);
  return response.status(201).json({
    message: "Todo Successfully created",
  });
}

async function getById(request, response) {
  const { id } = request.params;
  const todo = db.find((db) => db.id === parseInt(id));

  if (!todo) {
    return response.status(404).json({
      error: "Resource Not Found",
      message: "Could not find that Todo",
    });
  }

  return response.json(todo);
}

async function replaceTodo(request, response) {
  const { id } = request.params;
  const newTodo = request.body;
  const { title, description } = newTodo;

  if (!title || !description) {
    return response.status(409).json({
      error: "Validation Error",
      message: "Invalid Input",
    });
  }

  const todo = db.find((db) => db.id === parseInt(id));

  if (!todo) {
    return response.status(404).json({
      error: "Resource Not Found",
      message: "Could not find that Todo",
    });
  }

  todo.title = newTodo.title;
  todo.description = newTodo.description;

  return response.status(200).json({ message: "Successfully replaced todo" });
}

async function editTodo(request, response) {
  const { id } = request.params;
  const newTodo = request.body;
  const { title, description } = newTodo;

  const todo = db.find((db) => db.id === parseInt(id));

  if (!todo) {
    return response.status(404).json({
      error: "Resource Not Found",
      message: "Could not find that Todo",
    });
  }

  todo.title = title ? title : todo.title;
  todo.description = description ? description : todo.description;

  return response.status(200).json({
    message: "Successfully edited todo",
  });
}

module.exports = {
  getTodo,
  getById,
  createTodo,
  replaceTodo,
  editTodo,
};
