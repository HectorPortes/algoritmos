// Exercício 12: Número de Armstrong
// (Complexidade: Alta) - Escreva um programa que, dado um número fornecido pelo usuário, verifica se ele é um número de Armstrong. Um número de Armstrong é um número inteiro positivo em que a soma das potências de seus dígitos (elevados ao número de dígitos) é igual ao próprio número. Ex: 153 = 1³ + 5³ + 3³.
// Exemplo de Interação:
// Digite um número: 153
// ---
// Saída no Console:
// 153 é um número de Armstrong.
const prompt = require('prompt-sync')()

let n = prompt("Digite um número: ")
let n_copia = Number(n)
let n1 = n.split('')
let n_digitos = n.length
let soma = 0
for(let i = 0; i < n.length; i++){
    soma = soma + (Number(n1[i]) ** n_digitos)
    if(i === (n_digitos - 1)){
        if(soma === n_copia){
            console.log(n_copia, ' é um número de Armstrong.')
        } else {
            console.log(n_copia, ' não é um número de Armstrong.')
        }
    }
}

// Só sei resolver assim desculpe. Sem usar indice e split eu não faço a menor ideia