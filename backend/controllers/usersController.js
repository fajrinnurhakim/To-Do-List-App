const UserService = require("../services/userServices");

class UserController {
    static findAll = async (req, res, next) => {
        try {
            const users = await UserService.findAll(req.query, next);

            res.status(200).json(users);
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (req, res, next) => {
        try {
            const user = await UserService.findOne(req.params, next);

            if (!user) {
                throw { name: "ErrorNotFound" };
            }

            res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    };

    static create = async (req, res, next) => {
        try {
            const user = await UserService.create(req.body);

            res.status(201).json({ message: "User created successfully" });
        } catch (err) {
            next(err);
        }
    };

    static update = async (req, res, next) => {
        try {
            const user = await UserService.update(req.params, req.body);

            res.status(200).json({ message: "User updated successfully" });
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (req, res, next) => {
        try {
            const user = await UserService.destroy(req.params);

            if (!user) {
                throw { name: "ErrorNotFound" };
            }

            res.status(200).json({ message: "User deleted successfully" });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = UserController;
