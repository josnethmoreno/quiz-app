import './style.css'

import { questions } from '/data/question.js';
import { Quiz } from '/models/Quiz.js';
import { UI } from '/models/UI.js';


const renderPage = (ui, quiz) => {

  if (quiz.isEnded()) {
    ui.showScore(quiz.getQuestionsLength(), quiz.score);
    ui.updateProgress(quiz.questionIndex, quiz.getQuestionsLength());
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choice, (button) => {
      quiz.guess(button.target.innerText);
      renderPage(ui, quiz);
    });
    ui.updateProgress(quiz.questionIndex, quiz.getQuestionsLength());
  }

}


function main(){
  const ui = new UI;
  const quiz = new Quiz(questions);

  renderPage(ui, quiz)
}

main()


const getChoicesHeight = () => {
  const choices = document.getElementById('choices');
  const choicesStyle = window.getComputedStyle(choices);
  const choicesHeight = choicesStyle.getPropertyValue('height');
  return choicesHeight;
}

document.getElementById('choices').style.height = `${getChoicesHeight()}`;