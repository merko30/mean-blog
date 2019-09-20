require("dotenv").config();
const express = require("express");

const app = express();

const setMiddlewares = require("./config/middlewares");
const runDatabase = require("./config/database");
const routes = require("./routes");
const errorHandler = require("./utils/errorHandler");

setMiddlewares(app);
runDatabase();

app.use("/api", routes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
