const account = require("../models/account");
const AccountRepository = require("../repositories/accountsRepository");

class AccountService {
    static findAll = async (params, next) => {
        try {
            const accounts = await AccountRepository.findAll();
            return accounts;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (params, next) => {
        try {
            const { id } = params;
            const account = await AccountRepository.findOne(id, next);
            return account;
        } catch (err) {
            next(err);
        }
    };

    static create = async (params) => {
        try {
            const { name, email, password } = params;

            const account = await AccountRepository.create({
                name,
                email,
                password,
            });
            return account;
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

            const account = await AccountRepository.update(id, payload);

            return account;
        } catch (err) {
            console.log(err);
        }
    };

    static destroy = async (id, next) => {
        try {
            const result = await AccountRepository.destroy(id);

            if (result === null) {
                return null; // Account not found
            }

            return true; // Deletion successful
        } catch (err) {
            next(err);
        }
    };
}

module.exports = AccountService;
