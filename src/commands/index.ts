import { Request, Response } from "express";
import { CommandModel } from "../models/commandModel";
import { userCreateCommand, userDeleteCommand, userUpdateCommand } from "./userCommands";
import { signInCommand, signOutCommand, signUpCommand } from "./signCommand";

export default async (req: Request, res: Response) => {
	const command: CommandModel = await req.body;
	if (command === undefined) return res.status(400).send();
	if (command.command == "userCreate") return res.send(await userCreateCommand(command)).end();
	if (command.command == "userUpdate") return res.send(await userUpdateCommand(command)).end();
	if (command.command == "userDelete") return res.send(await userDeleteCommand(command)).end();
	if (command.command == "signin") return res.send(await signInCommand(command)).end();
	if (command.command == "signup") return res.send(await signUpCommand(command)).end();
	if (command.command == "signout") return res.send(await signOutCommand(command)).end();
	res.status(404).send();
};
