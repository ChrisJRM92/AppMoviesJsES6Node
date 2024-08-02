import { DataTypes } from "sequelize";
import database from "../../config/database.js";

const Movies = database.define('movies',{
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  releaseYear: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
})

export default Movies;