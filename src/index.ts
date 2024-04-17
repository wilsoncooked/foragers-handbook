import http from "http";
import express from "express";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import * as dotenv from "dotenv";
import { port } from "./config";
import userController from "./controllers/users";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Controllers (route handlers)
app.use("/user", userController);

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello World",
  });
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`API started at http://localhost:${port}`);
});
