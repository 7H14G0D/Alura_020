//importando o fs (não precisa instalar, o [fs] já faz parte do [node])
import fs from 'fs';
//importando o chalk, precisa adicionar ("type": "module") em package.json
import chalk from 'chalk';

//Função que trata erro
function trataErro(erro) {
  //lançando o erro de codigo em vermelho para fora da função 
  throw new Error(chalk.red(erro.code,'algo errado não está certo!'));
}

//Função que chama o arquivo: (texto.md)
function pegaArquivo(caminhoDoArquivo) {
  //definindo encoding
  const encoding = 'utf-8';
  //fs            caminho       encoding    callback
  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
    // se der erro, chame a função [erro]
    if (erro){
      //chama a função [trataErro] passando o parâmentro [erro]
      trataErro(erro);
    }
    //se tudo ocorrer bem, imprima em verde o [texto] do [arquivo]
    console.log(chalk.green(texto));
  })
}

//passando o caminho relativo do arquivo a ser mostrado
pegaArquivo('./arquivos/texto.md');