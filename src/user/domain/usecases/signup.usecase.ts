import { User } from "../dtos/user.dto";
import { IUserGateway } from "../interfaces/user.gateway";

const makeSignUp =
  (userGateway: IUserGateway) =>
  async (user: User): Promise<User> => {
    const userCreated = await userGateway.signUp(user);
    return userCreated;
  };

export default makeSignUp;
