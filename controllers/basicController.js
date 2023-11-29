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
  console.log(request.body)
  db.push(todo);
  return response.status(201).json({
    message: "Todo Successfully created",
  });
}

module.exports = {
  getTodo,
  createTodo,
};
