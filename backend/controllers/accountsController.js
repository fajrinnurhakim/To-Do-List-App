const AccountService = require("../services/accountServices");

class AccountController {
    static findAll = async (req, res, next) => {
        try {
            const accounts = await AccountService.findAll(req.query, next);
            res.status(200).json(accounts);
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (req, res, next) => {
        try {
            const account = await AccountService.findOne(req.params, next);
            res.status(200).json(account);
        } catch (err) {
            next(err);
        }
    };

    static create = async (req, res, next) => {
        try {
            console.log(req.body, "cek");
            const account = await AccountService.create(req.body);

            res.status(201).json({ message: "Account created successfully" });
        } catch (err) {
            next(err);
        }
    };

    static update = async (req, res, next) => {
        try {
            const account = await AccountService.update(req.params, req.body);
            res.status(200).json({ message: "Account updated successfully" });
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (req, res, next) => {
        try {
            const accountId = req.params.id;
            const deletedAccount = await AccountService.destroy(
                accountId,
                next
            );

            if (!deletedAccount) {
                res.status(404).json({ message: "Account not found" });
                return;
            }

            res.status(204).json();
        } catch (err) {
            next(err);
        }
    };
}

module.exports = AccountController;
