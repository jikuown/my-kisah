const button = document.querySelector('button')
const hero = document.querySelector('.hero')
const message = hero.querySelector('.join-message')

let isAnimating = false

const colors = ['#ff4e50', '#f9d423', '#00c896', '#00b4d8', '#a855f7', '#ff6b6b', '#ff9f1c', '#2ec4b6', '#e71d36', '#ffffff']
const chars = 'アイウエオカキクケコABCDEFGHIJKLMNOP0123456789@#$%&'

function matrixReveal(element, finalText) {
  let iteration = 0
  const interval = setInterval(function() {
    element.textContent = finalText
      .split('')
      .map(function(letter, index) {
        if (letter === ' ') return ' '
        if (index < iteration) return finalText[index]
        return chars[Math.floor(Math.random() * chars.length)]
      })
      .join('')
    if (iteration >= finalText.length) clearInterval(interval)
    iteration += 0.3
  }, 50)
}

button.addEventListener('click', function() {
  if (isAnimating) return

  isAnimating = true
  button.textContent = 'Journey Connected, Welcome To My Kisah'
  message.style.color = '#ffffff'

  matrixReveal(message, 'You have joined the journey!')

  let i = 0
  const interval = setInterval(function() {
    const color = colors[i % colors.length]
    button.style.backgroundColor = color
    button.style.color = '#ffffff'
    i++
  }, 150)

  setTimeout(function() {
    clearInterval(interval)
    button.style.backgroundColor = '#00c896'
    button.style.color = '#181212'
    button.textContent = 'Journey Connected, Welcome To My Kisah'
    isAnimating = false
  }, 3500)
})