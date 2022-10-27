import mongoose from "mongoose";
import config from "../configs";
import logger from "../utils/logger";

let database;

const connect = async () => {
  const MONGODB_URL = config.DB_CONNECTION_STRING;

  if (database) return;

  mongoose
    .connect("mongodb+srv://janindu01:jani1234@library-database-cluste.kixqdpa.mongodb.net/library-db?retryWrites=true&w=majority")
    .then((connection) => {
      database = connection;
      logger.info("Database Synced");
    })
    .catch((err) => {
      logger.error(err.message);
    });
};

export { connect };
