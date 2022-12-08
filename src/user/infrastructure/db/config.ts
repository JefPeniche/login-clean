import "dotenv/config";
import { Sequelize } from "sequelize";

const dbInit = async () => {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT;
  const name = process.env.DB_NAME;

  const sequelize = new Sequelize(
    `postgres://${user}:${password}@${host}:${port}/${name}`
  );
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  return sequelize;
};

export default dbInit;
