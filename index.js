const quiz = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const timeEl = document.getElementById('time');

let currentQuestionIndex = 0;
let time = 30;
let timerId;

// Define your questions and answers here
var questionsArr = [
    {
      question: 'Where is Brazil?',
      answer: 'South America',
      options: [
        'Africa',
        'South America',
        'Antartica',
        'Europe',
      ]
    },
    {
        question: 'Where is Singapore?',
        answer: 'Asia',
        options: [
          'Africa',
          'Europe',
          'Antartica',
          'Asia',
        ]
    },
    {
        question: 'Where is Austria?',
        answer: 'Europe',
        options: [
          'South America',
          'Asia',
          'Europe',
          'North America',
        ]
    },
    {
        question: 'Where is Greenland?',
        answer: 'Europe',
        options: [
          'Asia',
          'Australia',
          'North Pole',
          'Europe',
        ]
    },
    {
        question: 'Where is Kenya?',
        answer: 'Africa',
        options: [
          'Africa',
          'North America',
          'South America',
          'Europe',
        ]
    },
  ]

// Display the current question and choices
function displayQuestion() {
  const question = questions[currentQuestionIndex];
  questionEl.textContent = question.question;
  choicesEl.innerHTML = '';
  question.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.onclick = () => handleAnswer(index);
    choicesEl.appendChild(document.createElement('li')).appendChild(button);
  });
}

// Start the timer and update the display
function startTimer() {
  timeEl.textContent = time;
  timerId = setInterval(() => {
    time--;
    timeEl.textContent = time;
    if (time === 0) {
      clearInterval(timerId);
      handleAnswer(-1);
    }
  }, 1000);
}

// Handle the user's answer
function handleAnswer(choiceIndex) {
  clearInterval(timerId);
  const question = questions[currentQuestionIndex];
  const isCorrect = choiceIndex === question.answer;
  if (isCorrect) {
    quizContainer.classList.add('correct');
  } else {
    quizContainer.classList.add('incorrect');
  }
  setTimeout(() => {
    quizContainer.classList.remove('correct');
    quizContainer.classList.remove('incorrect');
    currentQuestionIndex++;
    time = 30;
    if (currentQuestionIndex === questions.length) {
      // Display the results
      quizContainer.innerHTML = `<h1>You got ${score}/${questions.length} questions correct!</h1>`;
    } else {
      // Display the next question
      displayQuestion();
      startTimer();
    }
  }, 1000);
}

// Start the quiz
let score = 0;
displayQuestion();
startTimer();