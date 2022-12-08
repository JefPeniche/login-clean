import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "express";
import { userRoute } from "./user/infrastructure/route/user.route";

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  next();
});
app.use(userRoute);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App listen on port ${port}`));
