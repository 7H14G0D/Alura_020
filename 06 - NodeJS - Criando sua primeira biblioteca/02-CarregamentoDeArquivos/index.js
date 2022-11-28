//importando o fs (não precisa instalar, o [fs] já faz parte do [node])
import fs from 'fs';
//importando o chalk, precisa adicionar ("type": "module") em package.json
import chalk from 'chalk';

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
    console.log(chalk.green(texto))
  } catch (erro) {
    trataErro(erro)
  }
}

//passando o caminho relativo do arquivo a ser mostrado
pegaArquivo('./arquivos/texto.md');
