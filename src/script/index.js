let result = document.querySelector('.result').textContent;
function insert(num){   
    let number = document.querySelector('.result').innerHTML;
    document.querySelector('.result').innerHTML = number + num;
}

function clean(){

document.querySelector('.result').innerHTML = "";

}
