import { Response, Router } from "express";
import commmandCall from "./commmandCall";

const router = Router();

export default (): Router => {
  commmandCall(router);
  return router;
};
