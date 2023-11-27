"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class MyList extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            MyList.belongsTo(models.User, {
                foreignKey: "id_user",
            });
        }
    }
    MyList.init(
        {
            title: DataTypes.STRING,
            tanggal: DataTypes.DATE,
            start_time: DataTypes.TIME,
            end_time: DataTypes.TIME,
            status: DataTypes.BOOLEAN,
            id_user: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "MyList",
        }
    );
    return MyList;
};
