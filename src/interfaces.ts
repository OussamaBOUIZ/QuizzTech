export interface QuestionType {
	questionId: number,
	content: string,
	rightIds: number[],
	choices: {id: number, value: string, status: string}[],
	multiChoices: boolean,
};

export interface Choice 
  {id: number, value: string, status: string}
