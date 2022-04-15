import './style.css'

import { questions } from '/data/question.js';
import { Quiz } from '/models/Quiz.js';
import { UI } from '/models/UI.js';

const renderPage = (ui, quiz) => {

  if (quiz.isEnded()) {
    ui.showScore(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choice, (button) => {
      quiz.guess(button.target.innerText);
      console.log('Hola');
      renderPage(ui, quiz);
    });
  }

}

function main(){
  const ui = new UI;
  const quiz = new Quiz(questions);

  renderPage(ui, quiz)
}

main()

