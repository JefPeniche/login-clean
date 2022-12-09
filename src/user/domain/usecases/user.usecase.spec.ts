import { userGatewayMock } from "../../../../test/user/mocks/user.gateway";
import { userMock } from "../../../../test/user/mocks/user.mock";
import { UserUseCase } from './user.usecase'
import { User } from '../dtos/user.dto'

describe('Testing user usecases', () => {
  const userUseCase = new UserUseCase(userGatewayMock)
  let userTest: User
  beforeEach(() => {
    userTest = userMock;
  });

  it("should register an user", async () => {
    const user = await userUseCase.makeSignUp(userMock)
    expect(user).not.toBeUndefined()
    expect(user).toEqual(userTest)
  })
  
  it("should login with credentials", async () => {
    const email = 'johnDoe@test.com'
    const password = 'password'
    const user = await userUseCase.logIn(email, password)
    expect(user).not.toBeUndefined()
    expect(user).toEqual(userTest)
    expect(user?.email).toEqual(email)
  })
  
  it('should retrieve a list with user', async () => {
    const users = await userUseCase.makeListAll()
    expect(users).toBeInstanceOf(Array)
    expect(users.length).toEqual(1)
  });
   
})