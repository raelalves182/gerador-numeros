const button = document.getElementById('generate');

button.addEventListener('click', function() {
  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);
  const result = document.getElementById('result')
  let animation;

  animation = setInterval(() => {
    result.innerHTML = Math.floor(Math.random() * (max - min) + min);
  }, 50)

  setTimeout(() => {
    clearInterval(animation)
  }, 500)

  if(isNaN(result)) {
    result = 'Valor inválido';
  }

  document.querySelector('#result > span').textContent = result;
})