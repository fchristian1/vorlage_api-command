import https, { Server } from "https";
import { Express } from "express";
import fs from "fs";

const serverOptions: https.ServerOptions = { key: "", cert: "" };

export default (api: Express): Server => {
  const server = https.createServer(serverOptions, api);

  return server;
};
