import { MONGODB_URI } from "../utils/secrets";
import mongoose from "mongoose";
import chalk from "chalk";
import { Db } from "mongodb";
mongoose.set("useCreateIndex", true);

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

let _db: Db;

export async function initDb(): Promise<void> {
  mongoose.Promise = global.Promise;
  await mongoose.connect(
    "mongodb+srv://test:216121%23Melis@cluster0-k6qyr.mongodb.net/surucu?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
  _db = mongoose.connection.db;
  mongoose.set("useCreateIndex", true);

  mongoose.connection.on("connected", () => {
    console.log(connected("Mongoose default connection is open to ", MONGODB_URI));
  });

  mongoose.connection.on("error", err => {
    console.log(error("Mongoose default connection has occured " + err + " error"));
  });

  mongoose.connection.on("disconnected", () => {
    console.log(disconnected("Mongoose default connection is disconnected"));
  });

  process.on("SIGINT", () => {
    closeDb();
  });
}

export function getDb(): Db {
  return _db;
}

export async function closeDb(): Promise<void> {
  mongoose.connection.close(() => {
    console.log(termination("Mongoose default connection is disconnected due to application termination"));
    process.exit(0);
  });
}