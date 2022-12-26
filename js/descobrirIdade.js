// Descobrir idade

function calcularIdade() {

    var anoNasc = document.getElementById('iano-nasc').value;

    var anoAtual = new Date();

    anoAtual.getFullYear();

    var idade = (anoAtual.getFullYear() - anoNasc)

    res.innerHTML = (`Tem ${idade} anos`);

    if (idade < 18) {
        alert("Você é menor de idade");

    } else {
        alert("Você é maior de Idade");
    }
}

