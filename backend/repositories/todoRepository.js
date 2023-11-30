const { Todo } = require("../models");

class TodoRepository {
    static findAll = async (params, next) => {
        try {
            const todos = await Todo.findAll(params);
            return todos;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (id, next) => {
        try {
            const todo = await Todo.findOne({
                where: {
                    id,
                },
            });
            if (!todo) {
                throw { name: "ErrorNotFound" };
            }
            return todo;
        } catch (err) {
            next(err);
        }
    };

    static create = async (payload) => {
        try {
            const todo = await Todo.create(payload);
            return todo;
        } catch (err) {
            next(err);
        }
    };

    static update = async (id, payload) => {
        try {
            const todo = await Todo.update(payload, {
                where: {
                    id,
                },
            });

            return todo;
        } catch (err) {
            console.log(err);
        }
    };

    static destroy = async (id) => {
        try {
            const todo = await Todo.destroy({
                where: {
                    id,
                },
            });

            return todo;
        } catch (err) {
            console.log(err);
        }
    };
}

module.exports = TodoRepository;
