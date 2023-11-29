const express = require("express");
const router = express.Router();
const { getTodo, createTodo } = require("../controllers/basicController");

router.get("/", getTodo);

router.post('/', createTodo)

module.exports = router;