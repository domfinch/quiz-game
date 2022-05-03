// global variables
var timerEl = document.querySelector('#timer');
var startcontainer = document.querySelector('#start')
var startbutton = document.querySelector('#start-quiz')
var questions = document.querySelector('#questions')
var question = document.querySelector('#question')
var questionbutton = document.querySelector('#question-button')
var done = document.querySelector('#done')
var score = document.querySelector('#score')
var initials = document.querySelector('#initials')
var submit = document.querySelector('#submit')
var timerId;

var questionArr = [
    {
        question: "what is 2 + 2?",
        answers: ["1","2","3","4"],
        correctanswer: "4"
    },
    {
        question: "what is 1 + 2?",
        answers: ["1","2","3","4"],
        correctanswer: "3"
    },
    {
        question: "what is 2 + 2?",
        answers: ["1","2","3","4"],
        correctanswer: "4"
    },
    {
        question: "what is 1 + 1?",
        answers: ["1","2","3","4"],
        correctanswer: "2"
    },
    {
        question: "what is 3 + 1?",
        answers: ["1","2","3","4"],
        correctanswer: "4"
    },
]

var index = 0
var time = 60;


//functions

function start(){
//start button clicked, start the timer, hide the start container, display the question container (remove the class hide), display the first question
timerEl.textContent = time;

timerId = setInterval(function(){
time--;

timerEl.textContent = time;

}, 1000);

// look into setAttribute and removeAttribute to add and remove the hide class
questions.removeAttribute("class")
startcontainer.setAttribute("class", "hide")
showQuestions()
}

function showQuestions(){
    var currentQuestion = questionArr[index]
    question.textContent = currentQuestion.question
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        var btn = document.createElement("button")
        btn.textContent = currentQuestion.answers[i]
        questionbutton.append(btn)
    }
}
//on click instead of event listener
//event listeners
startbutton.addEventListener('click', start)