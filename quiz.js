  
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Complete this line of the Sorting Hat\'s song from Harry Potter and the Philosopher\'s Stone: "I\'ll eat myself if you can BiquadFilterNode...\"',
    answers: [
      { text: 'A wiser hat than me', correct: false },
      { text: 'A shrewder hat than me', correct: false },
      { text: 'A better hat than me', correct: false },
      { text: 'A smarter hat than me', correct: true }
    ]
  },
  {
    question: 'Complete this line of the Hogwarts school song: ‘Our heads could do with filling…’',
    answers: [
      { text: 'With some wizard-worthy stuff', correct: false },
      { text: 'With some captivating stuff', correct: false },
      { text: 'With some fascinating stuff', correct: false },
      { text: 'With some intresting stuff', correct: true }
    ]
  },
  {
    question: 'Which of the following did Harry NOT eat at his first ever start of term feast?',
    answers: [
      { text: 'Mint humbugs', correct: true },
      { text: 'Roast beef', correct: false },
      { text: 'Roast chicken', correct: false },
      { text: 'Treacle tart', correct: false }
    ]
  },
  {
    question: 'In Philosopher’s Stone, which corridor did Dumbledore announce was out of bounds at the start of term feast?',
    answers: [
        { text: 'Seventh-floor corridor on the left-hand side', correct: false },
        { text: 'Third-floor corridor on the right-hand side', correct: true },
        { text: 'Third-floor corridor on the left-hand side', correct: false },
        { text: 'Seventh-floor corridor on the right-hand side', correct: false }
    ]
  },
  {
    question: 'When Harry and Ron miss the start of term in Chambers of Secrets, what type of food does Professor McGonagall conjure up for them?',
    answers: [
        { text: 'Sandwiches', correct: true },
        { text: 'Roast potatoes', correct: false },
        { text: 'Roasted chicken legs', correct: false },
        { text: 'Pumpkin pasties', correct: false }
    ]
  },
  {
    question: 'What exactly is stamped across Professor Lupin’s suitcase in Prisoner of Azkaban, that allows Hermione to identify him?',
    answers: [
        { text: 'Remus Lupin', correct: false },
        { text: 'Professor R.M. Lupin', correct: false },
        { text: 'Professor R.T. Lupin', correct: false },
        { text: 'Professor R.J. Lupin', correct: true }
    ]
  },
  {
    question: 'At the iron gates of Hogwarts, there are stone columns. What is on top of them?',
    answers: [
        { text: 'Galloping Thestrals', correct: false },
        { text: 'Rearing Hippogriffs', correct: false },
        { text: 'Winged boars', correct: true },
        { text: 'A pair of sleeping dragons', correct: false }
    ]
  },
  {
    question: 'At the start of term in Prisoner of Azkaban, Dumbledore announces the appointments of two new teachers. Professor Lupin is one, who is the other?',
    answers: [
        { text: 'Professor Grubbly-Plank', correct: false },
        { text: 'Professor Hagrid', correct: true },
        { text: 'Professor Sinistra', correct: false },
        { text: 'Professor Trelawney', correct: false }
    ]
  },
  {
    question: 'According to Dumbledore at the start of term feast in Goblet of Fire, when was the Triwizard Tournament first established?',
    answers: [
        { text: 'Nine hundred years ago', correct: false },
        { text: 'Seven hundred years ago', correct: true },
        { text: 'Five hundred years ago', correct: false },
        { text: 'One hundred and fifty years ago', correct: false }
    ]
  },
  {
    question: 'What is the usual colour of plates and goblets at the start of term feast?',
    answers: [
        { text: 'Gold', correct: true },
        { text: 'Pewter', correct: false },
        { text: 'Silver', correct: false },
        { text: 'Emerald', correct: false }
    ]
  },
  {
    question: 'Complete this line of the Sorting Hat’s song in Order of the Phoenix: ‘Though condemned I am to split you…’',
    answers: [
        { text: 'Still I worry at my role', correct: false },
        { text: 'Still I fear the task at hand', correct: false },
        { text: 'Still I worry for this school', correct: false },
        { text: 'Still I worry that it\'s wrong', correct: true }
    ]
  },
  {
    question: 'Which of these subjects would you NOT find on Hermione’s timetable in Half-Blood Prince?',
    answers: [
        { text: 'Ancient Runes', correct: false },
        { text: 'Muggle Studies', correct: true },
        { text: 'Potions', correct: false },
        { text: 'Charms', correct: false }
    ]
  },
]
