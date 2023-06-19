import DATA from "./quizData.json" assert { type: "json" };
//Fetch questions from server
// async function fetchQuestions() {
//   const response = await fetch("./quizData.json");
//   const data = await response.json();
//   return data;
// }

const questions = DATA;
console.log(questions);

// Shuffle options
function shuffleOptions(options) {
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

// Initialize quiz
function initQuiz() {
  // const questions = await fetchQuestions();
  let score = 0;
  let currentQuestion = 0;
  const questionElem = document.getElementById("question");
  const optionsElem = document.getElementById("options");
  const scoreElem = document.getElementById("score");
  const nextBtn = document.getElementById("next");

  // Skip the question without marks deduction
  nextBtn.addEventListener("click", () => {
    // currentQuestion = currentQuestion + 1;
    scoreElem.textContent = `Score: ${score}`;
    incQuestion();
  });

  // Show question and options
  function showQuestion() {
    const ques = questions[currentQuestion];
    const { question, answers, correctAnswer } = ques;

    questionElem.textContent = question;
    const shuffledOptions = shuffleOptions(answers);
    optionsElem.innerHTML = "";
    shuffledOptions.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => {
        if (option === correctAnswer) {
          score++;
        } else {
          score = score - 0.25;
        }
        scoreElem.textContent = `Score: ${score}`;
        // currentQuestion++;
        // if (currentQuestion === questions.length) {
        //   endQuiz();
        // } else {
        //   showQuestion();
        // }
        //currentQuestion = currentQuestion + 1;
        incQuestion();
      });
      optionsElem.appendChild(button);
    });
  }

  function incQuestion() {
    currentQuestion++;
    if (currentQuestion === questions.length) {
      endQuiz();
    } else {
      showQuestion();
    }
  }

  // End quiz
  function endQuiz() {
    questionElem.textContent = "Quiz complete!";
    optionsElem.innerHTML = "";
    nextBtn.style.display = "none";
  }
  showQuestion();
}
initQuiz();
