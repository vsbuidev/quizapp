const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result");
const scoreContainer = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "In which year did World War II end?",
    options: ["1943", "1945", "1950", "1939"],
    correctAnswer: "1945",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  // {
  //   question: "What is the currency of Japan?",
  //   options: ["Won", "Yen", "Dollar", "Euro"],
  //   correctAnswer: "Yen",
  // },
  // {
  //   question: "Which element has the chemical symbol 'O'?",
  //   options: ["Oxygen", "Gold", "Carbon", "Iron"],
  //   correctAnswer: "Oxygen",
  // },
  // {
  //   question: "What is the tallest mountain in the world?",
  //   options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
  //   correctAnswer: "Mount Everest",
  // },
  // {
  //   question: "Who painted the Mona Lisa?",
  //   options: [
  //     "Vincent van Gogh",
  //     "Pablo Picasso",
  //     "Leonardo da Vinci",
  //     "Claude Monet",
  //   ],
  //   correctAnswer: "Leonardo da Vinci",
  // },
  // {
  //   question: "Which country is known as the Land of the Rising Sun?",
  //   options: ["China", "Japan", "South Korea", "Vietnam"],
  //   correctAnswer: "Japan",
  // },
];

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];

  quizContainer.classList.remove("fade-exit", "scale-exit");
  quizContainer.classList.add("fade-enter", "scale-enter");

  setTimeout(() => {
    quizContainer.classList.remove("fade-enter", "scale-enter");
  }, 500);

  questionContainer.textContent = currentQuizData.question;

  optionsContainer.innerHTML = "";
  currentQuizData.options.forEach((option, index) => {
    const button = document.createElement("div");
    button.classList.add("option");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });

  resultContainer.textContent = "";
  scoreContainer.textContent = `Score: ${score} / ${quizData.length}`;
}

function checkAnswer(answer) {
  quizContainer.classList.remove("fade-enter", "scale-enter");
  quizContainer.classList.add("fade-exit", "scale-exit");

  setTimeout(() => {
    quizContainer.classList.remove("fade-exit", "scale-exit");
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showFinalResult();
    }
  }, 500);

  const currentQuizData = quizData[currentQuestion];
  if (answer === currentQuizData.correctAnswer) {
    score++;
    resultContainer.textContent = "Correct!";
  } else {
    resultContainer.textContent = "Incorrect!";
  }
}

function showFinalResult() {
  quizContainer.classList.remove("fade-enter", "scale-enter");
  quizContainer.classList.add("fade-exit", "scale-exit");

  setTimeout(() => {
    questionContainer.textContent = "Quiz Completed!";
    optionsContainer.innerHTML = "";
    scoreContainer.innerHTML = "";
    resultContainer.textContent = `Your Score: ${score} out of ${quizData.length}`;
  }, 500);
}

loadQuestion();
