//Verificando a Idade minima permitida para beber
//com a idade do cliente
const idadeMinima = 18;
const idadeCliente = 16;


/* EXEMPLO 1 */
/* se idadeCliente for maior ou igual a idade minima ele pode beber cerveja */
if(idadeCliente >= idadeMinima) {
    console.log("cerveja")
/* não sendo */
} else {
/* se for menor, ele pode tomar suco  */
    console.log("suco")
} 

/* EXEMPLO 2 TERNÁRIO - O mesmo resuldado em uma unica linha*/
// IMPRIMA           COMPARAÇÃO         ?  true     :  false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")