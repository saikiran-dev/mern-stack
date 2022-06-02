require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db");
const { errorHandler } = require("../backend/middleware/errorMiddleware");
const port = process.env.PORT;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`connected the server ${port}`);
});
