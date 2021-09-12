const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['C', 'C', 'D', 'A']

// pontuação
let score = 0

// calcula a pontuação do usuário
const calculateUserAnswers = () => correctAnswers.map((_, index) => {
  const eachUserAnswer = form[`inputQuestion${index + 1}`].value
  const eachCorrectAnswer = correctAnswers[index]
  
  eachUserAnswer === eachCorrectAnswer ? score += 25 : score
})

// renderiza a pontuação na tela
const renderScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
  
  finalScoreContainer.classList.remove('d-none')
} 

// anima a pontuação na tela
const animateScore = () => {
  let counter = 0
  
  const animate = setInterval(() => {
    if(counter === score) {
      clearInterval(animate)
    }
  
    return finalScoreContainer.querySelector('span').textContent = `${counter++}%`
  }, 15)
}

// reseta a pontuação anterior
const resetUserScore = () => score = 0

form.addEventListener('submit', event => {
  event.preventDefault()
  
  resetUserScore()
  calculateUserAnswers()
  renderScore()
  animateScore()
})