//importando o fs (não precisa instalar, o [fs] já faz parte do [node])
import fs from 'fs';
//importando o chalk, precisa adicionar ("type": "module") em package.json
import chalk from 'chalk';

//Função que trata erro
function trataErro(erro) {
  //lançando o erro de codigo em vermelho para fora da função 
  throw new Error(chalk.red(erro.code,'algo errado não está certo!'));
}

//Promises com then
function pegaArquivo(caminhoDoArquivo){
  const encoding = 'utf-8';
  fs.promises
    //devolve uma promessa
    .readFile(caminhoDoArquivo, encoding)
    //que vai ser resolvida pelo then
    .then((texto) => console.log(chalk.green(texto)))
    //se durante essa promessa tiver algum erro, mostre
    .catch(trataErro)
}

//passando o caminho relativo do arquivo a ser mostrado
pegaArquivo('./arquivos/texto.md');