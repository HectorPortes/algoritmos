// Exercício 1: Soma dos Primeiros Inteiros
// (Complexidade: Baixa) - Dado um inteiro positivo n, calcule a soma dos n primeiros inteiros positivos.
// Exemplo de Interação:
// Digite o valor de n: 10
// Saída no Console:
// A soma dos 10 primeiros inteiros positivos é 55.
const prompt = require('prompt-sync')()

let n = Number(prompt('Digite um número: '))
let soma = 0
let aux1 = 0
let aux2 = aux1
for(let i = 0; i < n; i++){
    aux2++
    soma = soma + (aux1 + aux2) 
}
console.log("A soma dos ", n, "primeiros inteiros positivos é ", soma)