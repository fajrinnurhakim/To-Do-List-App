const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token, "cek");

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Missing token" });
    }

    jwt.verify(token, "secret-key", (err, users) => {
        if (err) {
            return res
                .status(403)
                .json({ message: "Forbidden: Invalid token" });
        }

        req.Users = users;
        next();
    });
};

module.exports = authenticateToken;
