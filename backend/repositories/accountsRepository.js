const { Account } = require("../models");

class AccountRepository {
    static findAll = async (params, next) => {
        try {
            const accounts = await Account.findAll();
            return accounts;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (id, next) => {
        try {
            const account = await Account.findOne({
                where: {
                    id,
                },
            });
            if (!account) {
                throw { name: "ErrorNotFound" };
            }
            return account;
        } catch (err) {
            next(err);
        }
    };

    static create = async (payload) => {
        try {
            const account = await Account.create(payload);
            return account;
        } catch (err) {
            next(err);
        }
    };

    static update = async (id, payload) => {
        try {
            const account = await Account.update(payload, {
                where: {
                    id,
                },
            });

            return account;
        } catch (err) {
            console.log(err);
        }
    };

    static destroy = async (id) => {
        try {
            const deletedRowCount = await Account.destroy({
                where: { id },
            });

            if (deletedRowCount === 0) {
                return null; // Account not found
            }

            return true; // Deletion successful
        } catch (err) {
            throw err;
        }
    };
}

module.exports = AccountRepository;
