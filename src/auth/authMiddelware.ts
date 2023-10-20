import { NextFunction, Request, Response } from "express";
import { IsAuthenticated, checkAuthentication } from "./checkAuthentication";
export const authMiddelware = async (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.sessionToken) return res.status(403).send().end();
  const isAuthenticated: IsAuthenticated = checkAuthentication(req.headers.sessionToken ?? "");
  if (isAuthenticated) {
    return next();
  }
  return res.status(403).send("Not auhtenticated").end();
};
