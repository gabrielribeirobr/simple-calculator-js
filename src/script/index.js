let result = document.querySelector(".result").textContent;
function insert(num) {
  let number = document.querySelector(".result").innerHTML;
  document.querySelector(".result").innerHTML = number + num;
}

function clean() {
  document.querySelector(".result").innerHTML = "";
}

function backSpace() {
  let result = document.querySelector(".result").innerHTML;
  document.querySelector(".result").innerHTML = result.substring(0, result.length - 1);
}

function calculate() {
  let result = document.querySelector(".result").innerHTML;

  if (result) {
    document.querySelector(".result").innerHTML = eval(result);
  } else {
    document.querySelector(".result").innerHTML = "número inválido";
  }
}
