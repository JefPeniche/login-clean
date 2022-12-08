import { User } from "../../domain/dtos/user.dto";
import { IUserGateway } from "../../domain/interfaces/user.gateway";
import { User as UserSchema } from "../db/models/user.schema";
import * as bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const SALT = 10;

type SignUpProps = {
  name: string;
  email: string;
  password: string;
};

export class DatabaseGateway implements IUserGateway {
  async signUp({ name, email, password }: SignUpProps): Promise<User> {
    const passwordHashed = await bcrypt.hash(password, SALT);
    const userToCreate: User = {
      name,
      email,
      password: passwordHashed,
      id: uuid(),
    };

    const userCreated = await UserSchema.create(userToCreate);
    return userCreated;
  }

  async logIn(email: string, password: string): Promise<User | null> {
    const userFound = await UserSchema.findOne({
      where: { email },
    });

    if (userFound) {
      const result = await bcrypt.compare(password, userFound.password);
      if (result) return userFound;
    }

    return null;
  }
  async listAll(): Promise<User[]> {
    return await UserSchema.findAll();
  }
}
