import compression from "compression";
import cors from "cors";
import { Express, json, text } from "express";
import log from "../helpers/log";
import router from "../router";

export default (api: Express) => {
	api.use(compression());
	api.use(cors());
	api.use(json());
	api.use(router());

	log("API", "Config is loaded");
};
