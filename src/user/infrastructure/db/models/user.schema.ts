import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config";

const UserSchema = async () => {
  return await (
    await sequelize()
  ).define("users", {
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });
};

export default UserSchema;
