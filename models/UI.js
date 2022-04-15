export class UI {
	constructor(){}

	showQuestion(text){
		document.getElementById('question').innerText = `${text}`; 
	}

	showChoices(choices, callback){
		const choiceDiv = document.getElementById('choices');
		choiceDiv.innerHTML = '';

		choices.map((choice) => {
			const button = document.createElement('button');
			button.classList.add('btn', 'btn-lg', 'btn-outline-primary')
			button.innerText = `${choice}`;
			button.addEventListener('click', callback);
			choiceDiv.append(button);
		});
	}

	showScore(score){
		const choiceDiv = document.getElementById('choices');
		const question = document.getElementById('question');
		question.innerText = `Tu puntuación ha sido`;
		choiceDiv.innerHTML = `${score}`;
	}
}