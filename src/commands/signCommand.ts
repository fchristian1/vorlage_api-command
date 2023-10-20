import { getOneByEmail, getOneBySessionToken, getOneBySessionTokenUserId, insertOne } from "../db";
import { CommandModel } from "../models/commandModel";
import { createPasswordHash, createSalt, createSessionToken } from "../auth/authHelpers";
import { COLLECTION_SESSIONTOKEN, COLLECTION_USERS, DB_AUTH_NAME } from "../helpers/env";
import { responseCommand } from "./helper";

const dbAuth = DB_AUTH_NAME;
const collectionUsers = COLLECTION_USERS;
const collectionSessionToken = COLLECTION_SESSIONTOKEN;
export const signInCommand = async (command: CommandModel): Promise<CommandModel> => {
	const userDB = await getOneByEmail(dbAuth, collectionUsers, command.data.user.email);

	if (userDB) {
		if (userDB.email != command.data.user.email) return responseCommand(command, false);
		if (userDB.password !== createPasswordHash(userDB.salt, command.data.user.password))
			return responseCommand(command, false);
		const sessionTokenDB = await getOneBySessionTokenUserId(dbAuth, collectionSessionToken, userDB._id.toString());

		if (sessionTokenDB) return responseCommand(command, { sessionToken: sessionTokenDB.sessionToken });
		const sessionToken = createSessionToken(userDB._id.toString());
		insertOne(dbAuth, collectionSessionToken, { userId: userDB._id, sessionToken: sessionToken });

		return responseCommand(command, { sessionToken });
	}
	return responseCommand(command, false);
};
export const signUpCommand = async (command: CommandModel) => {};
export const signOutCommand = async (command: CommandModel) => {};
