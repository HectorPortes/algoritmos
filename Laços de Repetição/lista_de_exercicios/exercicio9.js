// Exercício 9: 25 Múltiplos de 3 e 5 > 5000
// (Complexidade: Média-Alta) - Escreva um algoritmo para imprimir os 25 primeiros números inteiros maiores que 5000 que sejam múltiplos de 3 e 5 ao mesmo tempo.
// Exemplo de Saída no Console (parcial):
// 5010
// 5025
// 5040
// ...
const prompt = require('prompt-sync')()

contador = 0
for(let i = 0; contador < 25; i++){
    if(i > 5000 && i % 3 == 0 && i % 5 == 0){
        console.log(i)
        contador++
    }
}