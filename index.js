console.log("Informe o nome do herói: ")
const heroi = "Batman "
console.log("Informe a quantidade de XP que o herói possui: ")
const saldoDeRankeadas = 10000
let nivel

if (saldoDeRankeadas < 1000) {
    nivel = "ferro";
} else if (saldoDeRankeadas >= 1001 && saldoDeRankeadas <= 2000) {
    nivel = "bronze";
} else if (saldoDeRankeadas >= 2001 && saldoDeRankeadas <= 5000) {
    nivel = "prata";
} else if (saldoDeRankeadas >= 5001 && saldoDeRankeadas <= 7000) {
    nivel = "ouro";
} else if (saldoDeRankeadas >= 7001 && saldoDeRankeadas <= 8000) {
    nivel = "platina";
} else if (saldoDeRankeadas >= 8001 && saldoDeRankeadas <= 9000) {
    nivel = "ascendente";
} else if (saldoDeRankeadas >= 9001 && saldoDeRankeadas <= 10000) {
    nivel = "imortal";
} else if (saldoDeRankeadas >= 10001) {
    nivel = "radiante";
}

console.log("O herói " + heroi + " está no nível " + nivel)
