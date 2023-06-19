//3.1
const questionObj1 = [
  {
    category: "Food & Drink",
    id: "qa-1",
    correctAnswer: "Three ",
    answers: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    category: "Arts & Literature",
    id: "qa-2",
    correctAnswer: "L. Frank Baum",
    answers: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    category: "Sport & Leisure",
    id: "qa-3",
    correctAnswer: "Atlanta United",
    answers: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    category: "Science",
    id: "qa-4",
    correctAnswer: "A Nanny",
    answers: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    category: "Arts & Literature",
    id: "qa-5",
    correctAnswer: "P. L. Travers",
    answers: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three ",
  answers: ["Two", "Three ", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

//3.2
let currentQuestion = 0;
let score = 0;
const totalScore = questionObj1.length;

const quesEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextEL = document.getElementById("next");
//const submitEl = document.getElementById("submit");
//scoreEl.innerHTML = "";

showQuestion();

nextEL.addEventListener("click", () => {
  scoreEl.textContent = `Score: ${score} / ${totalScore}`;
  nextQuestion();
});

function showQuestion() {
  const { question, answers, correctAnswer } = questionObj1[currentQuestion];
  quesEl.textContent = `Question ${currentQuestion + 1} of ${
    questionObj1.length
  }: ${question}`;
  optionEl.innerHTML = "";
  //2.2 Shuffle Options
  const shuffledAns = shuffledOptions(answers);
  //2.2
  shuffledAns.forEach((ans) => {
    const opButton = document.createElement("button");
    opButton.textContent = ans;

    opButton.addEventListener("click", () => {
      console.log("option selected");
      if (ans === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      scoreEl.textContent = `Score: ${score}  / ${totalScore}`;
      nextQuestion();
    });
    optionEl.appendChild(opButton);
  });
}

function nextQuestion() {
  currentQuestion++;
  console.log(currentQuestion);
  if (currentQuestion >= questionObj1.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function endQuiz() {
  quesEl.textContent = "Quiz complete!";
  optionEl.innerHTML = "";
  nextEL.remove();
  const restart = document.createElement("button");
  const btnwrap = document.getElementById("btn");
  btnwrap.appendChild(restart);
}

// 2.1
function shuffledOptions(options) {
  console.log(options);
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}
