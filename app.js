const express = require("express");
const app = express();
const basicRoutes = require("./routes/basicRoutes");

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parsing incoming form data

app.use("/todo", basicRoutes);

app.get("/", async (request, response) => {
  return response.status(200).json({ message: "Server is Live 🚀" });
});

// Handle 404 Errors
app.use((req, res) => {
  return res
    .status(404)
    .json({ error: "Not Found", message: "Resource was not found" });
});

// Handle other kinds of error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500 - Internal Server Error");
  next();
});

app.listen(3000, () => {
  console.log("Server is live 🚀");
});
