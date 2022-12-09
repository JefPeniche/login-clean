import { IUserGateway } from '../../../src/user/domain/interfaces/user.gateway'
import { userMock } from "./user.mock";

export const userGatewayMock: IUserGateway = {
  signUp: jest.fn(() => Promise.resolve(userMock)),
  logIn: jest.fn(() => Promise.resolve(userMock)),
  listAll: jest.fn(() => Promise.resolve([userMock]))
}