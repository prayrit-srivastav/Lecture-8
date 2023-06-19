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

const { question, answers, correctAnswer } = questionObj;
let score = 0;

const quesElement = document.getElementById("question");
quesElement.textContent = question;

const optionEl = document.getElementById("options");
optionEl.innerHTML = "";

const scoreEl = document.getElementById("score");
//scoreEl.innerHTML = "";
//2.2
const shuffledAns = shuffledOptions(answers);
//2.2
shuffledAns.forEach((ans) => {
  const opButton = document.createElement("button");
  opButton.textContent = ans;

  optionEl.appendChild(opButton);

  opButton.addEventListener("click", () => {
    console.log("option selected");
    if (ans === correctAnswer) {
      score++;
    } else {
      score = score - 0.25;
    }
    scoreEl.textContent = `Score: ${score}`;
    quesElement.textContent = "Quiz complete!";
    optionEl.innerHTML = "";
  });
});

// 2.1
function shuffledOptions(options) {
  console.log(options);
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}
// shuffledOptions([1, 2, 3, 4, 5]);
