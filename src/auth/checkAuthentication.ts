import { getOneBySessionToken } from "../db";

export type IsAuthenticated = boolean;
const dbAuth = "auth";
const colllectionSessioonToken = "sessionTokens";
export const checkAuthentication = async (sessionToken: string): Promise<boolean> => {
	const sessionTokenDB = await getOneBySessionToken(dbAuth, colllectionSessioonToken, sessionToken);
	if (!sessionTokenDB) return false;
	if (sessionTokenDB.sessionToken != sessionToken) return false;
	return true;
};
