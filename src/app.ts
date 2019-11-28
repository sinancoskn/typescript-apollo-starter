import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";

import { initDb } from "./config/database";
import { apolloServer } from "./config/graphql";

dotenv.config({ path: ".env" });

//require("./config/passport");

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    apolloServer.applyMiddleware({ app: this.app, path: "/api" });
  }

  private config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    //this.app.get("/", homeController.index);
    //this.app.use("/setup", SetupController);
    this.app.use("/uploads", express.static(path.join(__dirname, "uploads")));
  }

  private async mongoSetup(): Promise<void> {
    await initDb();
  }
}

export default new App().app;