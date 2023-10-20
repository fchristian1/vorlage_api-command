import crypto, { Hmac, createHmac } from "crypto";
import { SECRET } from "../helpers/env";
export const createSalt = (): string => {
	const date = Date.now().toString();
	const uuid = crypto.randomUUID();
	const hamc = createHmac("sha256", uuid).update(date);
	return hamc.digest("hex");
};
export const createPasswordHash = (salt: string, password: string): string => {
	const hamc = createHmac("sha256", salt).update(password + SECRET);
	return hamc.digest("hex");
};
export const createSessionToken = (userId: string): string => {
	const date = Date.now().toString();
	const uuid = crypto.randomUUID();
	const hamc = createHmac("sha256", uuid).update(date + uuid + SECRET + userId);
	return hamc.digest("hex");
};
