const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require("./routes/user.route");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173", // or your frontend domain
    credentials: true
}));
app.use(cookieParser());

app.use("/api/users", userRoutes);

module.exports = app;