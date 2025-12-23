const button = document.getElementById('generate');

button.addEventListener('click', function() {
  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);
  const resultElement = document.getElementById('result')
  let animation;

  animation = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if(isNaN(randomNumber)) {
      resultElement.textContent = "Valor Inválido";
    } else {
      resultElement.textContent = randomNumber;
    }
  }, 50)

  setTimeout(() => {
    clearInterval(animation)
  }, 500)
})