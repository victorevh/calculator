
function insert(number){
    var numero = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = numero + number
}

function clean(){
    document.getElementById('input').innerHTML  = "";
}

function backspace(){
    var result = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = result.substring(0, result.length -1)
}

function calculate(){
    var result = document.getElementById('input').innerHTML
    if(result){
        document.getElementById('input').innerHTML = eval(result)
    }
    else{
        document.getElementById('input').innerHTML = "Insira um Valor"
    }
}