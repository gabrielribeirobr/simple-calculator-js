let result = document.querySelector(".result").textContent;

function insert(num) {
  const resultElement = document.querySelector(".result");
  const currentContent = resultElement.innerHTML;

  if (currentContent.length < 15) {
    resultElement.innerHTML = currentContent + num;
  }
}

function clean() {
  document.querySelector(".result").innerHTML = "";
}

function backSpace() {
  const resultElement = document.querySelector(".result");
  const currentContent = resultElement.innerHTML;
  resultElement.innerHTML = currentContent.slice(0, -1);
}

function calculate() {
  const resultElement = document.querySelector(".result");
  const expression = resultElement.innerHTML;

  if (expression) {
    try {
      let calcResult = eval(expression).toString();

      if (calcResult.length > 20) {
        calcResult = calcResult.slice(0, 15);
      }

      resultElement.innerHTML = calcResult;
    } catch (error) {
      resultElement.innerHTML = "erro";
    }
  } else {
    resultElement.innerHTML = "número inválido";
  }
}
