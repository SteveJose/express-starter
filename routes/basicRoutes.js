const express = require("express");
const router = express.Router();
const {
  getTodo,
  createTodo,
  getById,
  replaceTodo,
  editTodo
} = require("../controllers/basicController");

router.get("/", getTodo);

router.get("/:id", getById);

router.post('/', createTodo);

router.put('/:id', replaceTodo);

router.patch('/:id', editTodo);

module.exports = router;