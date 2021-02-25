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

var quiz = [{
        question: 'Inside which HTML element do we put the JavaScript?',
        choices: ['js', 'script', 'javascript', 'scripting'],
        answer: 1,
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        choices: ['script name="xxx.js"', 'script href="xxx.js"', 'script src="xxx.js"', 'script value="xxx.js"'],
        answer: 2,
    },
    {
        question: 'When was Javascript created?',
        choices: ['1995', '2000', '1999', '1990'],
        answer: 0,
    },
    {
        question: 'How do you declare a variable?',
        choices: ['const', 'var', 'i', 'let'],
        answer: 3,
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: ['head', 'body', 'footer', 'div'],
        answer: 0,
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

var finalScore = 0;

startButton.addEventListener('click', startGame);

function getQuestion() {
    if (currentQuestion >= quiz.length) {
        function endGame(){
            
        };        
    } else {
        let q = quiz[currentQuestion];

        questionElement.textContent = q.question;

        optionA.innerHTML = '<button>' + q.choices[0] + '</button>';

        optionB.innerHTML = '<button>' + q.choices[1] + '</button>';

        optionC.innerHTML = '<button>' + q.choices[2] + '</button>';

        optionD.innerHTML = '<button>' + q.choices[3] + '</button>';
    }

};

function checkAnswer(answer) {
    let q = quiz[currentQuestion].answer;
    let a = answer;
    if (q === a) {
        currentQuestion++;
        finalScore += 15;
        getQuestion();
    } else {
        currentQuestion++;
        secondsLeft -= 5;
        finalScore -= 10;
        getQuestion();
    };

};



function timer() {
    var timerInt = setInterval(function () {
        secondsLeft--;
        countdownClock.textContent = 'Time left: ' + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInt);
            countdownClock.textContent = 'Time is up!';
        }

    }, 1000);
};

function startGame() {
    if (startButton.style.display === "none") {
        startButton.style.display = "block";
    } else {
        startButton.style.display = "none"
    };

    getQuestion();
    timer();
};