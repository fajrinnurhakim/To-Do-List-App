const AuthService = require("../services/authServices");
const upload = require("../middlewares/multer");
const cloudinary = require("../utils/cloudinary");

class AuthController {
    static async register(req, res, next) {
        try {
            const { name, email, password } = req.body;
            const image = req.file.path;
            const result = await cloudinary.uploader.upload(image);
            const imageUrl = result.secure_url;
            const user = await AuthService.register({
                name,
                email,
                password,
                image: imageUrl,
            });
            res.status(201).json({
                message: "User registered successfully",
                user,
            });
        } catch (err) {
            next(err);
        }
    }

    static async login(req, res, next) {
        try {
            const { token, user } = await AuthService.login(req.body);
            const filteredUser = {
                id: user.id,
                name: user.name,
                image: user.image,
            };
            res.status(200).json({
                message: "Login successful",
                token,
                user: filteredUser,
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = AuthController;
