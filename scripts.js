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
  {
    question: "What is the currency of Japan?",
    options: ["Won", "Yen", "Dollar", "Euro"],
    correctAnswer: "Yen",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Carbon", "Iron"],
    correctAnswer: "Oxygen",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    correctAnswer: "Mount Everest",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Vietnam"],
    correctAnswer: "Japan",
  },
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("ques-cont");
const optionsContainer = document.getElementById("opt-cont");
const resultContainer = document.getElementById("result");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionContainer.textContent = currentQuizData.question;

  optionsContainer.innerHTML = "";
  currentQuizData.options.forEach((option, index) => {
    const button = document.createElement("div");
    button.classList.add("option");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });

  nextButton.style.display = "none";
  resultContainer.textContent = "";
}

function checkAnswer(answer) {
  const currentQuizData = quizData[currentQuestion];
  if (answer === currentQuizData.correctAnswer) {
    score++;
    resultContainer.textContent = "Correct!";
  } else {
    resultContainer.textContent = "Incorrect!";
  }

  nextButton.style.display = "block";
  optionsContainer.childNodes.forEach((option) =>
    option.removeEventListener("click", checkAnswer)
  );
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showFinalResult();
  }
}

function showFinalResult() {
  questionContainer.textContent = "Quiz Completed!";
  optionsContainer.innerHTML = "";
  resultContainer.textContent = `Your Score: ${score} out of ${quizData.length}`;
  nextButton.style.display = "none";
}

loadQuestion();
nextButton.addEventListener("click", nextQuestion);
