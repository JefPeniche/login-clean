import { Router } from "express";
import { UserUseCase } from "../../domain/usecases/user.usecase";
import { UserController } from "../controller/user.controller";
import { DatabaseGateway } from "../gateway/database.gateway";

const userRoute = Router();

const dbGateway = new DatabaseGateway();
const userUseCase = new UserUseCase(dbGateway);
const controller = new UserController(userUseCase);

userRoute.post("/sign-up", controller.signUp);
userRoute.get("/users", controller.listAll);
userRoute.post("/login", controller.logIn);

export { userRoute };
