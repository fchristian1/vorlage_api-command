import { Request, Response } from "express";
import commands from "../commands";

export const commandController = (req: Request, res: Response) => {
  if (req.method === "GET") res.send("Use method POST to send a command!");
  if (req.method === "POST") {
    commands(req, res);
  }
};
