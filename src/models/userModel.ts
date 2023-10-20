import { ObjectId } from "mongodb";

export type UserModel = {
	_id: ObjectId;
	email: string;
	username: string;
	password: string;
	salt: string;
	createDate: string;
};
