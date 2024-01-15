console.log("Informe o nome do herói: ")
const heroi = "Batman "
console.log("Informe a quantidade de XP que o herói possui: ")
const xp = 10000
let nivel

if (xp < 1000) {
    nivel = "ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "imortal";
} else if (xp >= 10001) {
    nivel = "radiante";
}

console.log("O herói " + heroi + " está no nível " + nivel)
