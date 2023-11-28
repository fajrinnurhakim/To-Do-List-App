const UserRepository = require("../repositories/userRepository");

class UserService {
    static findAll = async (params, next) => {
        try {
            const users = await UserRepository.findAll();
            return users;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (params, next) => {
        try {
            const { id } = params;
            const user = await UserRepository.findOne(id, next);
            return user;
        } catch (err) {
            next(err);
        }
    };

    static create = async (params) => {
        try {
            const { name, email, password } = params;

            const user = await UserRepository.create({
                name,
                email,
                password,
            });
            return user;
        } catch (err) {
            console.log(err);
        }
    };

    static update = async (pathParams, params) => {
        try {
            const { id } = pathParams;

            const { name, email, password } = params;
            let payload = {
                name,
                email,
                password,
            };

            const user = await UserRepository.update(id, payload);

            return user;
        } catch (err) {
            console.log(err);
        }
    };

    static destroy = async (params) => {
        try {
            const { id } = params;
            const user = await UserRepository.destroy(id);

            return user;
        } catch (err) {
            console.log(err);
        }
    };
}

module.exports = UserService;
