import "dotenv/config";
import express from "express";
import cors from "cors";
import { userRoute } from "./user/infrastructure/route/user.route";

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRoute);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App listen on port ${port}`));
