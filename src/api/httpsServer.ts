import https, { Server } from "https";
import { Express } from "express";
import fs from "fs";

const key = fs.readFileSync("server.key");
const cert = fs.readFileSync("server.crt");

const serverOptions: https.ServerOptions = { key, cert };

export default (api: Express): Server => {
  const server = https.createServer(serverOptions, api);

  return server;
};
