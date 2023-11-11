export interface QuestionType {
	content: string,
	choices: {id: number, value: string}[],
	multiChoices: boolean,
};
