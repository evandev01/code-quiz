var timerEl = document.querySelector("#timer");
var containerEl = document.querySelector("#quiz-container")
var titleEl = document.querySelector("#title");
var welcomeParaEl = document.querySelector("#welcome-para");
var startBtnEl = document.querySelector("#start-btn");
var questionsEl = document.querySelector("#questions");
var choicesBtnEl = document.querySelector("#choices-btn");
var answerResultEl = document.querySelector("#answer-result");
var userScoreEl = document.querySelector("#user-score");
var highScoreEl = document.querySelector("#high-score");

var questions = [
    {
        question: "Commonly used data types in Javascript DO NOT include _______.",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within _______.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "curly brackets"
    },
    {
        question: "Arrays in Javascript can be used to store _______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }]

function setTimer(i){
    index = [0]   
}



function addTitle(){
    event.preventDefault();
    titleEl.remove("hide");
    titleEl.textContent.add("Javascript Code Quiz!");
    console.log("Wow it actually freaking worked!");
}


startBtnEl.addEventListener("click", startGame)

function startGame(){
    startBtnEl.preventDefault();
    startBtnEl.classList.remove("hide");
    setQuestion();
    console.log("start");
}



function setQuestion(){
    for (i=0; i<questionsEl.length; i++){
        optionBtnEl.classList.remove("hide");

            
            console.log(questions.length);
        }
    }


function answerResult(){

}

function tallyScore(){


}








    // var li = document.createElement("li");
    // li.textContent = choicesBtn;
    // choicesBtn.appendChild(li);

    // console.log(choices)
    // console.log(choicesBtn)
    // console.log(li)























// function choicesBtn.addEventListener("click", (event)){
//     if ()
// }



