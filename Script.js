// Quiz Challenge//

let questionIndex = 0;

var questions = [
  {
    question: "What does HTML stand for?",
    possibles: ["<A> Hyper Text Media Learning>", "<B> Hyper Text Markup Language", "<C> Hyper Test Multiple Language", "<D> Hyper Tools Multy Language"],
    answer: "<B> Hyper Text Markup Language",
  },
  {
    question: "What does CSS stand for?",
    possibles: ["<A> Common Style Sheet", "<B> Colorful Style Sheet", "<C> Cascading Style Sheet", "<D> Computer Skill System"],
    answer: "<C> Cascading Style Sheet",
  },
  {
    question: "What does SQL stand for?",
    possibles: ["<A> Structured Query Language", "<B> Stylish Question Learning", "<C> Statement Quiz Language", "<D> Stylesheet Query Language"],
    answer: "<A> Structured Query Language",
  },
  {
    question: "What does JAVA mean in programming?",
    possibles: ["<A> Justify Position Vertical Answer", "<B> Computer Programming Verification System", "<C> Apple Cascading Programming Stylesheet", "<D> Programming Language and Computing Platform"],
    answer: "<D> Programming Language and Computing Platform",
  },
];
var startBtn = document.querySelector(".startbtn");
var timer = document.querySelector(".timer");
var questionsContainer = document.querySelector(".questioncontainer");
var question = document.querySelector(".question");
var answerList = document.querySelector(".answerlist");
var nextButton = document.querySelector(".nextbtn");

// var endBtn = document.querySelector(".endbtn");
var score=0
function displayQuestion(Q) {
  answerList.textContent = "";
  for (var i = 0; i < questions.length; i++) {
    var questionText = questions[Q].question;
    var answers = questions[Q].possibles;
    // console.log(questionText);
    // console.log(answers);
    question.textContent = questionText;
  }
  answers.forEach(function (ans) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = ans;
    answerList.appendChild(answerBtn);
    answerBtn.addEventListener("click", function () {
      answerCheck(answerBtn.textContent);
    });
  });
}
var checker = document.createElement("h1")
function answerCheck(ans) {
  
  if (ans === questions[questionIndex].answer) {
    console.log("correct");
    checker.textContent = "correct"
    score=score+5

    console.log(score)
  } else {
    console.log("wrong");
    checker.textContent = "wrong"
  }
  questionContainer.appendChild(checker)
  questionIndex++;
  nextQ(questionIndex);
  
}
function nextQ(Q) {
  nextButton.addEventListener("click", function () {
    checker.textContent = ""
    if (Q >= questions.length) {
      console.log("done");
      end()
    } else {
      displayQuestion(Q);
    }
  });
}
// questionContainer.appendChild(checker)
// questionIndex++;
// nextQ(questionIndex);

var timeLeft = 20;
var time;
function setTime() {
  time = setInterval(function () {
    timeLeft--;
    timer.textContent = "Timeleft: "+ timeLeft;
    if (timeLeft === 0) {
      clearInterval(time);
      questionContainer.style.display="none"
    }
  }, 1000);
}

// endBtn.addEventListener("click", function () {
//   setTime();
//   displayQuestion(questionIndex);
// });

var startScore = 0;
var score;
function setScore() {
  score = setInterval(function () {
    scoreLeft--;
    score.textContent = startScore;
    if (theUserAnswerCorrect === 1) {
    }
    clearInterval(end);
  });
}
var starContainer = document.querySelector(".start-container")
var questionContainer = document.querySelector(".questionContainer")
questionContainer.style.display ="none"
var showResult = document.querySelector(".showresults")
showResult.style.display = ("none")
var result = document.querySelector(".result")

function end(){
  questionContainer.style.display ="none"
  showResult.style.display ="block"
  result.textContent = score

}
startBtn.addEventListener("click", function () {
  setTime();
  starContainer.style.display ="none"
  questionContainer.style.display ="block"
  displayQuestion(questionIndex);
});