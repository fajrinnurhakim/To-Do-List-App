const { User } = require("../models");

class UserRepository {
    static findAll = async (params, next) => {
        try {
            const users = await User.findAll();

            return users;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (id, next) => {
        try {
            const user = await User.findOne({
                where: {
                    id,
                },
            });

            if (!user) {
                throw { name: "ErrorNotFound" };
            }

            return user;
        } catch (err) {
            next(err);
        }
    };

    static create = async (payload) => {
        try {
            const user = await User.create(payload);

            return user;
        } catch (err) {
            next(err);
        }
    };

    static update = async (id, payload) => {
        try {
            const user = await User.update(payload, {
                where: {
                    id,
                },
            });

            return user;
        } catch (err) {
            console.log(err);
        }
    };

    static destroy = async (id) => {
        try {
            const user = await User.destroy({
                where: {
                    id,
                },
            });

            return user;
        } catch (err) {
            console.log(err);
        }
    };
}

module.exports = UserRepository;
