import { Request, Response } from "express";
import { UserUseCase } from "../../domain/usecases/user.usecase";

export class UserController {
  constructor(private userUseCase: UserUseCase) {}

  public signUp = async (req: Request, res: Response) => {
    try {
      const user = await this.userUseCase.makeSignUp(req.body);
      res.send({ user });
    } catch (err: any) {
      if (err.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({
          success: false,
          message: "El email ya está registrado",
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Error inesperado",
        });
      }
    }
  };

  public listAll = async (req: Request, res: Response) => {
    try {
      const users = await this.userUseCase.makeListAll();
      res.send({ users });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error inesperado",
      });
    }
  };

  public logIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await this.userUseCase.logIn(email, password);
      if (user) {
        res.send({ user });
      } else {
        res.status(404).json({
          success: false,
          message: "Usuario o contraseña incorrectos",
        });
      }
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error inesperado",
      });
    }
  };
}
