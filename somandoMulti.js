/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let number1 = prompt('Digite o numero 1')
let number2 = prompt('Digite o numero 2')

number1 = Number(number1)
number2 = Number(number2)

const soma = number1 + number2
const subtracao = number1 - number2
const multi = number1 * number2
const divisao = number1 / number2
const restDivisao = number1 % number2

alert('A soma dos 2 numeros são: ' + soma)
alert('A subtração dos 2 numeros são: ' + subtracao)
alert('A Multiplicação dos 2 numeros são: ' + multi)
alert('A divisão dos 2 numeros são: ' + divisao)
alert('O Resto da divisão 2 numeros são: ' + restDivisao)