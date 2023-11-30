const TodoService = require("../services/todoServices");

class TodoController {
    static findAll = async (req, res, next) => {
        try {
            const todos = await TodoService.findAll({
                where: {
                    id_user: req.user.id_user,
                },
            });
            res.status(200).json(todos);
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (req, res, next) => {
        try {
            const todo = await TodoService.findOne(req.params, next);
            if (!todo) {
                throw { name: "ErrorNotFound" };
            }
            res.status(200).json(todo);
        } catch (err) {
            next(err);
        }
    };

    static create = async (req, res, next) => {
        try {
            const todo = await TodoService.create({
                ...req.body,
                id_user: req.user.id_user,
            });

            res.status(201).json({ message: "Todo created successfully" });
        } catch (err) {
            next(err);
        }
    };

    static update = async (req, res, next) => {
        try {
            const mylist = await TodoService.update(req.params, req.body);
            res.status(200).json({ message: "Todo updated successfully" });
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (req, res, next) => {
        try {
            const todo = await TodoService.destroy(req.params);

            if (!todo) {
                throw { name: "ErrorNotFound" };
            }

            res.status(200).json({ message: "Todo deleted successfully" });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = TodoController;
