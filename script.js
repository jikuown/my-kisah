const button = document.querySelector('button')
const hero = document.querySelector('.hero') 
let hasJoined = false


button.addEventListener('click', function() {
  if (hasJoined) return
  
  hasJoined = true
  button.textContent = 'Journey Connected, Welcome To My Kisah' 
  button.style.backgroundColor = '#00c896'

  const message = document.createElement('p')
  message.textContent = 'You have joined the journey!'
  message.style.color = '#00c896'
  message.style.marginTop = '16px'

  hero.appendChild(message)
})
