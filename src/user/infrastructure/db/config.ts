import "dotenv/config";
import { Sequelize } from "sequelize";

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const name = process.env.DB_NAME;

export const sequelize = new Sequelize(
  `postgres://${user}:${password}@${host}:${port}/${name}`
);

sequelize.authenticate();
