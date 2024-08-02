import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const database = new Sequelize(process.env.DATABASE, {logging: false});
export default database;
