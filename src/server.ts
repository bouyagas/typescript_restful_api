import express, { Request, Response, Application } from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import { ConnectMongoDB } from "./utils/db";
import { TodoRoutes } from "./resources/todos/todos.route";

class Server {
  public server: Application = express();
  public todoRoute: TodoRoutes = new TodoRoutes();
  public connectMongoDB: ConnectMongoDB = new ConnectMongoDB();

  constructor() {
    this.config();
    this.connectDB();
    this.todoRoute.routes(this.server);
  }

  private config(): void {
    this.server.disable("x-powered-by");
    this.server.use(cors());
    this.server.use(json());
    this.server.use(urlencoded({ extended: true }));
    this.server.use(morgan("combined"));
    this.server.route("/").get((req: Request, res: Response) => {
      res.status(200).send("<h1>Typescript App</h1>");
    });
  }

  public connectDB(): void {
    this.connectMongoDB.mongodbInstance();
  }
}

const newInstanceServer = (): Server => {
  return new Server();
};

export const start = newInstanceServer();
