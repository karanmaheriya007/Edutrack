const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true, // Removes spaces before & after
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: [/.+\@.+\..+/, "Please enter a valid email address"], // Email validation
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // Adds createdAt & updatedAt automatically
);

const User = mongoose.model("User", userSchema);

module.exports = User;
