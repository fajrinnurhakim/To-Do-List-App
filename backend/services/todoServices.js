const TodoRepository = require("../repositories/todoRepository");

class TodoService {
    static findAll = async (params, next) => {
        try {
            const todos = await TodoRepository.findAll(params);
            return todos;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (params, next) => {
        try {
            const { id } = params;
            const todo = await TodoRepository.findOne(id, next);
            return todo;
        } catch (err) {
            next(err);
        }
    };

    static create = async (params) => {
        try {
            const { title, tanggal, start_time, end_time, status, id_user } =
                params;

            const todo = await TodoRepository.create({
                title,
                tanggal,
                start_time,
                end_time,
                status,
                id_user,
            });
            return todo;
        } catch (err) {
            console.log(err);
        }
    };

    static update = async (pathParams, params) => {
        try {
            const { id } = pathParams;

            const { title, tanggal, start_time, end_time, status, id_user } =
                params;
            let payload = {
                title,
                tanggal,
                start_time,
                end_time,
                status,
                id_user,
            };

            const todo = await TodoRepository.update(id, payload);

            return todo;
        } catch (err) {
            console.log(err);
        }
    };

    static destroy = async (params) => {
        try {
            const { id } = params;
            const todo = await TodoRepository.destroy(id);

            return todo;
        } catch (err) {
            console.log(err);
        }
    };
}

module.exports = TodoService;
