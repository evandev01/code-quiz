var questions = [
    {
      question: "Commonly used data types in Javascript DO NOT include _______.",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      question:
        "The condition in an if/else statement is enclosed within _______.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "curly brackets",
    },
    {
      question: "Arrays in Javascript can be used to store _______.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above",
      ],
      answer: "all of the above",
    },
    {
      question:
        "String values must be enclosed within _______ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes",
    },
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["Javascript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log",
    },
  ];
  //main element (home page)
  var mainDiv = $("#main");
  var questionDiv = $(".question");
  var answerDiv = $(".answer-div");
  var startBtnEl = $(".start-btn");
  var homePageEl = $(".home");
  //option element
  var answerResDiv = $(".answerResult");
  var endAlertDiv = $(".alert");
  var initialDiv = $("#initial-div");
  var intialSubmit = $("#submit-btn");
  //timer
  var timerDisplay = $(".timer");
  var timeRemaining = 120;
  var intervalId;
  //question element
  var questionCount = 0;
  var scoreCount = 0;
  var qNumber = -1;
  questionDiv.hide();
  answerDiv.hide();
  answerResDiv.hide();
  console.log(questions.length);
  
  $(startBtnEl).on("click", function startGame() {
    qNumber++;
    questionCount++;
    $(".home").empty();
    setQuestion();
    renderOptions();
    startCountdown();
  });
  function startCountdown() {
      timerDisplay.text(timeRemaining);
    intervalId = setInterval(function () {
      timeRemaining--;
      timerDisplay.text(timeRemaining);
      if (timeRemaining <= 0) {
        endGame();
      }
    }, 1000);
  }
  function setQuestion() {
    questionDiv.show();
    var currentQuestion = questions[qNumber].question;
    var questionEl = $("<h1>");
    var answerBtnEl = $("<button>");
    questionEl.append(currentQuestion);
    questionDiv.append(questionEl);
    // console.log(scoreCount);
  }
  function renderOptions() {
    for (i = 0; i < questions[qNumber].choices.length; i++) {
      answerDiv.show();
      var optionList = questions[qNumber].choices[i];
      var answerEl = $("<li>");
      var answerBtnEl = $("<button>");
      answerBtnEl.append(optionList);
      answerEl.append(answerBtnEl);
      answerDiv.append(answerEl);
      $(answerBtnEl).on("click", function () {
        answerResDiv.show();
        var userAnswer = event.target;
        var corAnswer = questions[qNumber].answer;
        var corResult = "Correct!";
        var incResult = "Incorrect";
        var resMsg = $("<h3>");
        if (questionCount + 1 === questions.length + 1) {
          if (corAnswer === userAnswer.innerHTML) {
            scoreCount++;
          }
          endGame();
          console.log(scoreCount);
        } else if (corAnswer === userAnswer.innerHTML) {
          scoreCount++;
          questionCount++;
          resMsg.append(corResult);
          answerResDiv.append(resMsg);
          console.log("true");
          removeQuestion();
          setNextQuestion();
          console.log(scoreCount);
        } else {
          timeRemaining = timeRemaining - 30;
          questionCount++;
          resMsg.append(incResult);
          answerResDiv.append(resMsg);
          console.log("false");
          removeQuestion();
          setNextQuestion();
          console.log(scoreCount);
        }
      });
    }
  }
  function removeQuestion() {
    questionDiv.empty();
    answerDiv.empty();
    answerResDiv.empty();
  }
  function setNextQuestion() {
    qNumber++;
    setQuestion();
    renderOptions();
  }
  function endGame() {
    clearInterval(intervalId);
    removeQuestion();
    initialDiv.removeClass("hide");
    endAlert = $("<h3>");
    var endAlertMsg = "You scored " + (scoreCount / 5) * 100 + "%" + "!";
    endAlert.append(endAlertMsg);
    endAlertDiv.append(endAlert);
    // setScore();
    // saveUser();
    // console.log(scoreCount);
  }
  // saveUser
  $(intialSubmit).on("click", function (event) {
    event.preventDefault();
    var initials = $("#initials").val().trim();
    var finalScore = (scoreCount / 5) * 100 + "%";
    var user = {
      initials: initials,
      score: finalScore,
    };
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
  });