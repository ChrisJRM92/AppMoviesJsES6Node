import { DataTypes } from "sequelize";
import database from "../../config/database.js";

const Genre = database.define('genders',{
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

export default Genre;
