import "dotenv/config";
import express from "express";
import cors from "express";
import dbConfig from "./user/infrastructure/db/config";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

dbConfig().then();
app.listen(port, () => console.log(`App listen on port ${port}`));
