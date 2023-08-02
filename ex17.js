function obterNomeCompleto() {
    let nomeCompleto = prompt("Digite seu nome completo: ");
}

function obterAnoNascimento() {
    while (true) {
        let anoNasc = Number(prompt("Digite seu ano de nascimento (1922 a 2021):"));
        if (!isNaN(anoNasc) && ano >= 1922 && ano <= 2021) {
            return anoNasc;
        } else {
            alert("Ano de nascimento inválido. Tente novamente.");
        }
    }
}

function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;
    return idade;
}

function main() {
    const nome = obterNomeCompleto();
    const anoNascimento = obterAnoNascimento();
    const idade = calcularIdade(anoNascimento);
    alert(`Olá, ${nomeCompleto}! Em 2022, você completou ou completará ${idade} anos.`);
}

main();

