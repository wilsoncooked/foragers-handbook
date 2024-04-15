import http from "http";
import express from "express";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import { port } from "./config";
import usersRoutes from "./api/routes/users.routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", usersRoutes);

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello World",
  });
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`API started at http://localhost:${port}`);
});
