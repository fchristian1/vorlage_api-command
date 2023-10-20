import dotnet from "dotenv";

dotnet.config({ path: "./env" });

export const PORT = Number(process.env.PORT);
export const DB_URL = String(process.env.DB_URL);
export const SECRET = String(process.env.SECRET);
export const DB_AUTH_NAME = String(process.env.DB_AUTH_NAME);
export const COLLECTION_SESSIONTOKEN = String(process.env.COLLECTION_SESSIONTOKEN);
export const COLLECTION_USERS = String(process.env.COLLECTION_USERS);
