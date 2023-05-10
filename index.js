// terminal: npm install chalk@5.0.1 --save-exact

import fs from 'fs';
import chalk from 'chalk';

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
        console.log(chalk.green(texto));
    })
}

pegaArquivo('./arquivos/texto.md');