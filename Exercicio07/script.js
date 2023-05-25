function ageValidate() {
    var age = document.getElementById('idade').value;

    if (age >= 18) {
        confirm("De maior");
    } else {
        alert("De menor")
    }
}