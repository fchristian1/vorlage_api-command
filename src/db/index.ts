import { MongoClient, ObjectId } from "mongodb";
import { DB_URL } from "../helpers/env";
import log from "../helpers/log";

const client = new MongoClient(DB_URL, {
	connectTimeoutMS: 3000,
	socketTimeoutMS: 3000,
	serverSelectionTimeoutMS: 3000,
});
let connection: MongoClient;
export default async () => {
	try {
		connection = await client.connect();
		await connection.db("admin").command({ ping: 1 });
		log("DB", "App is connected successfully to DB");
	} catch (err) {
		log("DB", err);
		process.exit();
	}
};
export const insertOne = async (db: string, collection: string, newData: any) => {
	const collDB = connection.db(db).collection(collection);
	await collDB.insertOne(newData);
};
export const updateOne = async (db: string, collection: string, updateData: any) => {
	const collDB = connection.db(db).collection(collection);
	await collDB.updateOne({ _id: updateData._id }, updateData);
};
export const deleteOne = async (db: string, collection: string, deleteData: any) => {
	const collDB = connection.db(db).collection(collection);
	await collDB.deleteOne({ _id: deleteData._id });
};
export const getOneById = async (db: string, collection: string, id: string) => {
	const collDB = connection.db(db).collection(collection);
	return await collDB.findOne({ _id: new ObjectId(id) });
};
export const getOneByEmail = async (db: string, collection: string, email: string) => {
	const collDB = connection.db(db).collection(collection);
	const returnElement = await collDB.findOne({ email });

	return returnElement;
};
export const getOneByUsername = async (db: string, collection: string, username: string) => {
	const collDB = connection.db(db).collection(collection);
	return await collDB.findOne({ username });
};
export const getOneBySessionToken = async (db: string, collection: string, sessionToken: string) => {
	const collDB = connection.db(db).collection(collection);
	return await collDB.findOne({ sessionToken: sessionToken });
};
export const getOneBySessionTokenUserId = async (db: string, collection: string, id: string) => {
	const collDB = connection.db(db).collection(collection);
	const returnDB = await collDB.findOne({ userId: new ObjectId(id) });
	return returnDB;
};
