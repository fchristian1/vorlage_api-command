import { createPasswordHash, createSalt } from "../auth/authHelpers";
import { insertOne, deleteOne, updateOne, getOneByEmail, getOneByUsername } from "../db";
import { COLLECTION_USERS, DB_AUTH_NAME } from "../helpers/env";
import { CommandModel } from "../models/commandModel";
import { responseCommand } from "./helper";

const db = DB_AUTH_NAME;
const collection = COLLECTION_USERS;

export const userCreateCommand = async (command: CommandModel): Promise<CommandModel> => {
	if (!command.data.user) return responseCommand(command, false);
	if (!command.data.user.email) return responseCommand(command, false);

	const checkUserInDbEmail = await getOneByEmail(db, collection, command.data.user.email);
	const checkUserInDbUsername = await getOneByUsername(db, collection, command.data.user.username);
	if (checkUserInDbEmail || checkUserInDbUsername) return responseCommand(command, false);
	let user = command.data.user;
	user.salt = createSalt();
	user.password = createPasswordHash(user.salt, user.password);
	await insertOne(db, collection, command.data.user);
	delete user.password;
	delete user.salt;
	return responseCommand(command, true);
};

export const userUpdateCommand = async (command: CommandModel) => {
	await updateOne(db, collection, command.data.user);
};

export const userDeleteCommand = async (command: CommandModel) => {
	await deleteOne(db, collection, command.data.user);
};
