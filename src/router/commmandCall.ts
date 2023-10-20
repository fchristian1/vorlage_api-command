import { Router } from "express";
import { commandController } from "../controller/commandController";
import { authMiddelware } from "../auth/authMiddelware";

export default (router: Router) => {
  router.post("/command", authMiddelware, commandController);
};
