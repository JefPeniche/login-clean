import { User } from "../dtos/user.dto";
import { IUserGateway } from "../interfaces/user.gateway";

export class UserUseCase {
  constructor(private readonly userGateway: IUserGateway) {}

  public makeSignUp = async (user: User) => {
    const userCreated = await this.userGateway.signUp(user);
    return userCreated;
  };

  public makeListAll = async () => {
    const users = await this.userGateway.listAll();
    return users;
  };

  public logIn = async (email: string, password: string) => {
    const userFound = await this.userGateway.logIn(email, password);
    return userFound;
  };
}
