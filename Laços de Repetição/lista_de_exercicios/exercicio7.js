// Exercício 7: Análise de Números até Zero
// (Complexidade: Média) - Faça um algoritmo que leia uma quantidade não determinada de números positivos. O número que encerrará a leitura será zero. Ao final, calcule e mostre: a quantidade de números pares e ímpares, a média de valores pares e a média geral dos números lidos (sem incluir o zero).
// Exemplo de Interação:
// Digite um número (ou 0 para sair): 10
// Digite um número (ou 0 para sair): 7
// Digite um número (ou 0 para sair): 2
// Digite um número (ou 0 para sair): 5
// Digite um número (ou 0 para sair): 0
// ---
// Saída no Console:
// Total de números pares: 2
// Total de números ímpares: 2
// Média dos valores pares: 6.0
// Média geral: 6.0
const prompt = require('prompt-sync')()

let pares = 0
let impares = 0
let soma_pares = 0
let soma_impares = 0
for(let i = 1; i > 0 ; i++){
    let n = Number(prompt('Digite um número (ou 0 para sair): '))
    if(n > 0){
        if(n % 2 == 0){
            pares++
            soma_pares = soma_pares + n
        } else {
            impares++
            soma_impares = soma_impares + n
        }
    } else {
        i = 0 // aqui você coloca i = 0 porém em seguida o for adiciona + 1 no valor de i tornando o loop infinito novamente
        i-- // por isso você diminui - 1, então i volta a 0 novamente e para o loop
    }
}
let media_pares = soma_pares / pares
let media_geral = (soma_pares + soma_impares) / (pares + impares)
console.log("Total de números pares: ", pares)
console.log("Total de números ímpares: ", impares)
console.log("Média dos valores pares: ", media_pares)
console.log("Média geral: ", media_geral)