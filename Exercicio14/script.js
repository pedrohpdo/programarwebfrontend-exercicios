function insert(param){
    var actual = document.getElementById("result").innerHTML;

    document.getElementById("result").innerHTML = actual  + param;
}

function clean() {
    document.getElementById("result").innerHTML = "";
}

function erase() {
    let actual = document.getElementById("result").innerHTML;

    document.getElementById("result").innerHTML = actual.substring(0, actual.length -1);
}

function calculate() {
    let actual = document.getElementById("result").innerHTML;

    if(actual) {
        document.getElementById("result").innerHTML = eval(actual);
    }
    
}
