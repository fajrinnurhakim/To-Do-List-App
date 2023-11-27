const { MyList } = require("../models");

class MyListRepository {
    static findAll = async (params, next) => {
        try {
            const myLists = await MyList.findAll();
            return myLists;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (id, next) => {
        try {
            const myList = await MyList.findOne({
                where: {
                    id,
                },
            });
            if (!myList) {
                throw { name: "ErrorNotFound" };
            }
            return myList;
        } catch (err) {
            next(err);
        }
    };

    static create = async (payload) => {
        try {
            const myList = await MyList.create(payload);
            return myList;
        } catch (err) {
            next(err);
        }
    };

    static update = async (id, payload) => {
        try {
            const myList = await MyList.update(payload, {
                where: {
                    id,
                },
            });

            return myList;
        } catch (err) {
            console.log(err);
        }
    };

    static destroy = async (id) => {
        try {
            const myList = await MyList.destroy({
                where: {
                    id,
                },
            });

            return myList;
        } catch (err) {
            console.log(err);
        }
    };
}

module.exports = MyListRepository;
