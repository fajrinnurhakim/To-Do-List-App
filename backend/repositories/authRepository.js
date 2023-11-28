const { User } = require("../models");

class AuthRepository {
    static async findByEmail(email) {
        try {
            const user = await User.findOne({
                where: {
                    email,
                },
            });

            if (!user) {
                throw { name: "UserNotFound" };
            }

            return user;
        } catch (err) {
            throw err;
        }
    }

    static async create(user) {
        try {
            const newUser = await User.create(user);
            return newUser;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = AuthRepository;
