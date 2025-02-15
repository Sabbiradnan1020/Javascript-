const question = [
  {
    question: "Which of the following is NOT a programming language?",
    answer: [
      { text: "C++", correct: false },
      { text: "MySQL", correct: true },
      { text: "Python", correct: false },
      { text: "Java", correct: false },
    ],
  },
  {
    question: "What is the extension of a Python file?",

    answer: [
      { text: ".js", correct: false },
      { text: ".cpp", correct: false },
      { text: ".php", correct: false },
      { text: ".py", correct: true },
    ],
  },
  {
    question: "Which of the following is a high-level programming language?",
    answer: [
      { text: "Assembly", correct: false },
      { text: "Java", correct: true },
      { text: "Machine Code", correct: false },
      { text: "Binary", correct: false },
    ],
  },
  {
    question: "Which programming language is mainly used for web development?",
    answer: [
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false },
      { text: "COBOL", correct: false },
      { text: "MySQL", correct: false },
    ],
  },
  {
    question: "Which of the following is a compiled language?",
    answer: [
      { text: "python", correct: false },
      { text: "C++", correct: true },
      { text: "HTML", correct: false },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answer: [
      { text: "Creative Style Sheet", correct: false },
      { text: "Cascading Style Sheet", correct: true },
      { text: "Computer Style System", correct: false },
      { text: "Color System", correct: false },
    ],
  },
  {
    question: "Which is larget animal in the world ?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Elephant", correct: false },
      { text: "Snake", correct: false },
      { text: "Blue whale", correct: true },
    ],
  },
  {
    question: "Which programming language is used for Artificial Intelligence?",
    answer: [
      { text: "C#", correct: false },
      { text: "C++", correct: false },
      { text: "Python", correct: true },
      { text: "Java", correct: false },
    ],
  },
  {
    question: "Which of the following is a database query language ?",
    answer: [
      { text: "Ruby", correct: false },
      { text: "SQL", correct: true },
      { text: "MongoDB", correct: false },
      { text: "Java", correct: false },
    ],
  },
  {
    question: "What is the main function in a C program?",
    answer: [
      { text: "main()", correct: true },
      { text: "start()", correct: false },
      { text: "run()", correct: false },
      { text: "exeacute()", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const iscorrect = selectedBtn.dataset.correct === "true";
  if (iscorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < question.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < question.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
