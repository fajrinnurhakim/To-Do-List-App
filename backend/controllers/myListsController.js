const MyListService = require("../services/myListServices");

class MyListController {
    static findAll = async (req, res, next) => {
        try {
            const myLists = await MyListService.findAll(req.query, next);
            res.status(200).json(myLists);
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (req, res, next) => {
        try {
            const myList = await MyListService.findOne(req.params, next);
            if (!myList) {
                throw { name: "ErrorNotFound" };
            }
            res.status(200).json(myList);
        } catch (err) {
            next(err);
        }
    };

    static create = async (req, res, next) => {
        try {
            console.log(req.body, "cek");
            const myList = await MyListService.create(req.body);

            res.status(201).json({ message: "MyList created successfully" });
        } catch (err) {
            next(err);
        }
    };

    static update = async (req, res, next) => {
        try {
            const mylist = await MyListService.update(req.params, req.body);
            res.status(200).json({ message: "MyList updated successfully" });
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (req, res, next) => {
        try {
            const myList = await MyListService.destroy(req.params);

            if (!myList) {
                throw { name: "ErrorNotFound" };
            }

            res.status(200).json({ message: "MyList deleted successfully" });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = MyListController;
