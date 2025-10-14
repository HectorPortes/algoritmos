// Exercício 2: Primeiros Números Ímpares
// (Complexidade: Baixa) - Dado um número n > 0, imprima os n primeiros números naturais ímpares.
// Exemplo de Interação:
// Quantos números ímpares você quer exibir? 4
// Saída no Console:
// 1
// 3
// 5
// 7
const prompt = require('prompt-sync')()

let n = Number(prompt('Digite um número: '))
if(n > 0){
    for(let i = 0; i <= n; i++){
        if(i % 2 == 1){
            console.log("Número impar: ", i)
        }
    }
} else {
    console.log("Número digitado é menor ou igual a 0. Por favor digite um número maior que 0.")
}