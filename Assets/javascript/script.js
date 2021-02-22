// a button to start the the game
// hide the button

// a timer 
// event listener on button
// questions appear on screen
// multiple choices 
// validate user input
// if correct add to score
// show next question
// variable to track current question index
// if incorrect deduct time 
// show next question
// game ends when time runs  out or all questions answered 
// save the score with user initials 
// local storage
// store as array of objects
// [{initials: "", score: "",}]
// reset Page to start a new game

var quiz = [
    {
        question: 'How do you Javascript?',
        choices: ['You do', 'It does it on its own', 'What is Javascript', 'You are already doing it' ],  
        answer: '4',
    },
    {
        question: 'Where do you come from?',
        choices: ['Here', 'From a different galaxy', 'Far far away', 'Mexico'],  
        answer: '2',
    },
    {
        question: 'When was Javascript created?',
        choices: ['1964', '2003', '2008', '2012'], 
        answer: '0',
    },
    {
        question: 'How do you declare a variable?',
        choices: ['const', 'var', 'wrong', 'True'],  
        correct: '3',
    },
    {
        question: "How old are you?",
        choices: ['15', '18', '24', '30'],  
        correct: '0',
    },
];



var lastQuestion = quiz.length - 1;

var currentQuestion = 0;

var startButton = document.getElementById('start-game');
var questionElement = document.getElementById('question');
var optionA = document.getElementById('optionA');
var choiceB = document.getElementById('optionB');
var choiceC = document.getElementById('optionC');
var choiceD = document.getElementById('optionD');
var countdownClock = document.getElementById('countdown');
var secondsLeft = 75;

startButton.addEventListener('click', startGame);

function getQuestion(){
    let q = quiz[currentQuestion];

    questionElement.textContent = q.question;
    
    optionA.innerHTML ='<button>' + q.choiceA + '</button>';

    optionB.innerHTML ='<button>' + q.choiceB + '</button>';

    optionC.innerHTML ='<button>' + q.choiceC + '</button>';

    optionD.innerHTML ='<button>' + q.choiceD + '</button>';

    currentQuestion ++;

}

function checkAnswer(answer){
    let q = quiz[currentQuestion].correct;
    if (q = answer){
        nextQuestion();
    } else {
        secondsLeft - 5;
        nextQuestion();
    };
    
};

// function nextQuestion(){
//     for( i= 0; i < lastQuestion; i++){
//         currentQuestion ++;
//         getQuestion();
//     }
// }


function timer() {
    var timerInt = setInterval(function() {
      secondsLeft--;
      countdownClock.textContent = 'Time left: ' + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInt);
        countdownClock.textContent = 'Time is up!';    
      }
  
    }, 1000);
  }

  function startGame() {
    if (startButton.style.display === "none") {
        startButton.style.display = "block";
    } else {
        startButton.style.display = "none"};
    
    getQuestion();
    timer();
}
