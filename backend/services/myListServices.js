const mylist = require("../models/mylist");
const MyListRepository = require("../repositories/myListRepository");

class MyListService {
    static findAll = async (params, next) => {
        try {
            const myLists = await MyListRepository.findAll();
            return myLists;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (params, next) => {
        try {
            const { id } = params;
            const myList = await MyListRepository.findOne(id, next);
            return myList;
        } catch (err) {
            next(err);
        }
    };

    static create = async (params) => {
        try {
            const { title, tanggal, start_time, end_time, status, id_account } =
                params;

            const myList = await MyListRepository.create({
                title,
                tanggal,
                start_time,
                end_time,
                status,
                id_account,
            });
            return myList;
        } catch (err) {
            console.log(err);
        }
    };

    static update = async (pathParams, params) => {
        try {
            const { id } = pathParams;

            const { title, tanggal, start_time, end_time, status, id_account } =
                params;
            let payload = {
                title,
                tanggal,
                start_time,
                end_time,
                status,
                id_account,
            };

            const myList = await MyListRepository.update(id, payload);

            return myList;
        } catch (err) {
            console.log(err);
        }
    };

    static destroy = async (id, next) => {
        try {
            const result = await MyListRepository.destroy(id);

            if (result === null) {
                return null; // MyList not found
            }

            return true; // Deletion successful
        } catch (err) {
            next(err);
        }
    };
}

module.exports = MyListService;
