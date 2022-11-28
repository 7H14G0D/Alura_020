// # Tipo de dado #
// booleanos

//----------------------------------------------------------------------

//    CONVERSÃO IMPLÍCITA -
//permite que a gente converta um tipo de dado em outro
//numero em string, string em numero, entre outras possibilidades
const numero = 456;
const numeroString = "456";

//console.log(numero === numeroString)//false
//console.log(numero == numeroString)//true


//----------------------------------------------------------------------

//    CONVERSÃO EXPLÍCITA -
//Number() - Usamos quando queremos transformar uma string em um número
//String() - Usamos quando queremos transformar um número e uma string

console.log(numero + Number(numeroString))

//----------------------------------------------------------------------

// diferença de comparação com === ou ==
// onde === compara com um texto e == compara com um numero

// EXPLICAÇÃO: 
// [=]atribui valor 
// [==]compara valor 
// [===]compara valor e o tipo