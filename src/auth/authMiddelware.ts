import { NextFunction, Request, Response } from "express";
import { checkAuthentication } from "./checkAuthentication";

export const authMiddelware = (req: Request, res: Response, next: NextFunction) => {
  const isAuthenticated = checkAuthentication(req.headers.sessionToken![0] ?? "");
};
