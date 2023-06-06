function informaAntecessor(param) {
    let intValue = parseInt(param.value);
    
    let result = "O Antecessor é " + (intValue - 1);
    document.getElementById("result").innerHTML = result

}