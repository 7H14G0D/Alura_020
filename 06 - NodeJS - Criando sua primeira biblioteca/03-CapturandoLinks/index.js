//importando o fs (não precisa instalar, o [fs] já faz parte do [node])
import fs from 'fs';
//importando o chalk, precisa adicionar ("type": "module") em package.json
import chalk from 'chalk';


function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
  return resultados;
}

//Função que trata erro
function trataErro(erro) {
  //lançando o erro de codigo em vermelho para fora da função 
  throw new Error(chalk.red(erro.code,'algo que deveria ser correto, agora deu merda'));
}

// async/await
async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(extraiLinks(texto));
  } catch (erro) {
    trataErro(erro)
  }
}

//passando o caminho relativo do arquivo a ser mostrado
pegaArquivo('./arquivos/texto.md');





//Utilizando o regex para capturar expressões
//https://regex101.com/
//Foi utilizado o texto.md

//1.1 - capturando itens com colchetes
//  \[[^[\]]*?\]
//1.2 - capturando itens dentro dos colchetes
//  \[([^[\]]*?)\]

//2.1 - capturando links com parenteses         
//  \(https?:\/\/[^\s?#.].[^\s]*\)
//2.2 - capturando links dentro dos parentes         
//  \((https?:\/\/[^\s?#.].[^\s]*)\)

//3.0 - capturando os itens dentro dos parenteses e colchetes 
//  \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)

//  gm= global, multi-linha