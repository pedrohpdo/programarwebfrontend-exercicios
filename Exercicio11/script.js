function validateAge() {
    let age = Number(document.getElementById("age").value);
    let actualAge = Number(document.getElementById("ageActual").value);

    let idade = actualAge - age;

    if (idade < 16) {
        alert("Não rolou, mestre");
    } else {
        alert("Vamooo");
    }
}