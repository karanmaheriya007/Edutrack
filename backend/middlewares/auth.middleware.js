const jwt = require("jsonwebtoken");

const protectRoutes = async (req, res, next) => {
    try {
        // Get access token from Authorization header
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ error: "Access Denied: No Access Token Provided" });
        }

        // Verify the access token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded user info to req
        next();
    } catch (error) {
        return res.status(403).json({ error: "Invalid or Expired Access Token" });
    }
};

module.exports = protectRoutes;
