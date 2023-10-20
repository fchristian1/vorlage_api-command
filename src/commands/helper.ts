import { CommandModel } from "../models/commandModel";

export const responseCommand = (command: CommandModel, responseData: any): CommandModel => {
	delete command.data.user.password;
	delete command.data.user.salt;
	command.response = responseData;
	return command;
};
