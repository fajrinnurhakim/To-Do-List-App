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
            const { title, tanggal, start_time, end_time, status, id_user } =
                params;

            const myList = await MyListRepository.create({
                title,
                tanggal,
                start_time,
                end_time,
                status,
                id_user,
            });
            return myList;
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

            const myList = await MyListRepository.update(id, payload);

            return myList;
        } catch (err) {
            console.log(err);
        }
    };

    static destroy = async (params) => {
        try {
            const { id } = params;
            const myList = await MyListRepository.destroy(id);

            return myList;
        } catch (err) {
            console.log(err);
        }
    };
}

module.exports = MyListService;
