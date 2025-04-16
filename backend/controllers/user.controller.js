const userModel = require('../models/user.model');
const { generateToken } = require('../utils/generateToken');
const hashPassword = require('../utils/hashPassword');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Create new user
        const newUser = new userModel({
            fullname,
            email,
            password: hashedPassword
        });

        await newUser.save();

        const token = generateToken(newUser._id);

        res.cookie('token', token, {
            httpOnly: true,  // Cookie cannot be read via `document.cookie` in the browser.
            secure: process.env.NODE_ENV === "production", // Cookie is sent only if the URL starts with `https://` in production.
            sameSite: "strict", // Blocks the cookie from being sent with cross-site requests (CSRF protection).
            maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie will expire after 30 days (30 days * 24 hours * 60 mins * 60 secs * 1000 ms).
        });

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
            },
            token: token
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = generateToken(user._id);

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            message: "User logged in successfully",
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
            token: token
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const logoutUser = async (req, res) => {
    try {
        // Clear the cookie
        res.clearCookie("token");

        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// const refreshAccessToken = (req, res) => {
//     const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken;

//     // Check if refresh token exists
//     if (!refreshToken) {
//         return res.status(401).json({ message: 'Refresh Token is required' });
//     }

//     try {
//         // Verify the refresh token
//         const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);

//         // Generate a new access token using the user's id (from the decoded refresh token)
//         const newAccessToken = generateAccessToken(decoded.id);

//         // Send the new access token to the client
//         res.status(200).json({
//             message: 'New access token generated successfully',
//             accessToken: newAccessToken,
//         });

//     } catch (error) {
//         // Handle errors (e.g., invalid or expired refresh token)
//         return res.status(403).json({ message: 'Invalid or expired refresh token' });
//     }
// };

module.exports = { registerUser, loginUser, logoutUser };