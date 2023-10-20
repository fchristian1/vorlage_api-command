export type CommandModel = {
	response?: any;
	id: string;
	command: string;
	params: Record<string, any>[];
	data: any;
};
