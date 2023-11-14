export interface QuestionType {
	content: string,
	choices: {id: number, value: string, status: string}[],
	multiChoices: boolean,
};

export interface Choice 
  {id: number, value: string, status: string}
