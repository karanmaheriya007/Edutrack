const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/user.controller');
const protectRoutes = require('../middlewares/auth.middleware');
const userModel = require('../models/user.model');

const router = express.Router();

router.get('/home', protectRoutes, async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id).select('fullname');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.send(`Welcome to the Home Page, ${user.fullname}!`);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
// router.post('/refresh-token', refreshAccessToken);

module.exports = router;