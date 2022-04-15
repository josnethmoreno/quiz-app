export class Question {

	constructor(text, choice, answer){
		this.text = text;
		this.choice = choice;
		this.answer = answer;
	}

	correctAnswer(choice) {
		return choice === this.answer;
	}

}
