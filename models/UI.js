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

	showScore(choicesLength, score){
		const choiceDiv = document.getElementById('choices');
		const question = document.getElementById('question');
		let messageScore = '';

		if(score === 0) messageScore = 'Oh no! No has logrado acertar ninguna respuesta!';
		if(score !== 0) messageScore = `Wow! has logrado acertar ${score} respuestas de ${choicesLength} preguntas`;
		if(score === choicesLength) messageScore = 'WTFFF! ¿Eres de la nasa? Acertaste todas las respuesta:O';

		question.innerText = `Tu puntuación ha sido`;
		choiceDiv.innerHTML = `
			<div class="choices-score p-2 d-flex flex-column justify-content-center align-items-center w-75 h-75 mx-auto my-auto rounded bg-primary bg-opacity-10">
        <div class="choice-score-message h5 text-center">
          ${messageScore}
        </div>
        <div class="choice-score-actions mt-5 text-center d-flex flex-column flex-md-row gap-2">
          <button id="btnAcierto" class="btn btn-outline-warning">Ver aciertos!</button>
          <button id="btnReset" class="btn btn-outline-primary">Intentar de nuevo!</button>
          <button id="btnMessage" class="btn btn-danger">Mensaje oculto</button>
        </div>
      </div>
		`;

		const btnAcierto = document.getElementById('btnAcierto');
		btnAcierto.addEventListener('click', () => {
			location.reload();
		})
	}

	updateProgress(questionIndex, questionsLength){
		const progressTotal = questionsLength;
		const progressActual = questionIndex;
		const progressPorcentage = Math.floor(questionIndex * 100 / questionsLength);

		const progressBar = document.getElementById('progressBar');
		progressBar.style.width = `${progressPorcentage}%`;
		progressBar.innerText = `${progressPorcentage}%`;
	}
}