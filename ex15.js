/*
Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.

*/

let seg = 10;

while (seg >= 0) {
    if (seg === 0) {
        console.log("BUM")
    } else {
        console.log(`${seg} segundos(s) restante(s)...`)
    }
    seg--;
}