function getSalario() {
    var salarioBase = document.getElementById("isalario").value;

    bonus = salarioBase * 1.05;
    imposto = bonus * 0.97;
    
    if (salarioBase==0){
        document.getElementById("result").innerHTML = "Digite um valor!";

    } else {
        const result = "Seu salário: R$" + imposto.toFixed(2);
        document.getElementById("result").innerHTML = result;
    }
}