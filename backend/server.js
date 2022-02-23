// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

// CONFIGURATION
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 8080;
const app = express();

// VIEW ENGINE

// MIDDELWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// ROUTES - LANDING PAGE
app.use("/api/goals", require("./routes/goalRoutes"));

// WILDCARD ROUTES
app.use(errorHandler);

// DATABASE CONNECTIONS
// mongoose;
// connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log("DB Connected"))
//   .catch((err) => console.error(err));

// LISTEN
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
