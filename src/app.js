const express = require("express");
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
const userRoutes = require("./routes/User.js");

const app = express();

// Use native promises
mongoose.Promise = global.Promise;

// Connect to the database
mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.error("Could not connect to the database. Exiting now...", err);
    process.exit(1);
  });

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Parse requests of content-type - application/json
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Usar rutas
app.use('/api/users', userRoutes);

// Listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
