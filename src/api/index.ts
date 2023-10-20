import express, { Express } from "express";
import apiConfig from "./apiConfig";
import httpsServer from "./httpsServer";
import { PORT } from "../helpers/env";
import log from "../helpers/log";

const api: Express = express();

export default () => {
  apiConfig(api);
  httpsServer(api)
    .listen(PORT)
    .on("listening", () => {
      log("API", "Server is listening on https://localhost:" + PORT);
    });
};
