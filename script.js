const button = document.querySelector('button')
const hero = document.querySelector('.hero') 
let hasJoined = false

button.addEventListener('click', function() {
    if (udahjoin) return
    alert('You have joined the journey!')

  udahjoin = true
  button.textContent = 'Joined!'
  button.style.backgroundColor = '#00c896'

  const message = document.createElement('p')
  button.textContent = 'Journey Connected, Welcome To My Kisah'
  message.style.color = '#00c896'
  message.style.marginTop = '16px'

  hero.appendChild(message)
})