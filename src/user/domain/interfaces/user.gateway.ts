import { User } from "../dtos/user.dto";

export interface IUserGateway {
  signUp(user: User): Promise<User>;
  logIn(email: string, password: string): Promise<User>;
  listAll(): Promise<User[]>;
}
