function insert(param){
    var actual = document.getElementById("result").innerHTML;

    document.getElementById("result").innerHTML = actual  + param;
}

function clean() {
    document.getElementById("result").innerHTML = "";
}