function reajust() {
    let salario = document.getElementById('salario').value;
    let reajuste = document.getElementById('reajuste').value;


    if (salario === "" || reajuste === "") {
        document.getElementById('result').innerHTML = "Digite alguma coisa";
    
    } else {
        salario = parseFloat(salario);
        reajuste=parseFloat(reajuste);

        let salarioReajustado = salario * (1 + reajuste / 100)
        let result = "R$ " + salarioReajustado.toFixed(2);
        alert(result)
    }
}