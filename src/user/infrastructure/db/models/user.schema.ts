import * as Sequelize from "sequelize";
import { sequelize } from "../config";
export interface UserAddModel {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface UserModel extends Sequelize.Model<UserModel, UserAddModel> {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface UserViewModel {
  id: string;
  name: string;
  email: string;
}

export const User = sequelize.define<UserModel, UserAddModel>("user", {
  id: {
    primaryKey: true,
    type: Sequelize.STRING,
  },
  name: Sequelize.STRING,
  email: {
    unique: true,
    type: Sequelize.STRING,
  },
  password: Sequelize.STRING,
});

(async () => {
  await User.sync();
})();
