function checkdata() {
    var rg = document.getElementById("rg").value;
    var cpf = document.getElementById("cpf").value;

    if(rg === "" && cpf === "") {
        alert("Por favor informe todos os seus dados");
        
    } else if (rg === "") {
        alert("Digite seu RG");

    } else if (cpf === "") {
        alert("Digite seu CPF");
    } else {
        confirm("Sucess");
    }
}

function checkinput(param) {
    if(param.value === "") {
        alert("Campo obrigatório")
    }
}