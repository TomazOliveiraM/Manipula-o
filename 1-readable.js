const fs = require('fs');

function readFileWithStream(path) {
  const readStream = fs.createReadStream(path, { encoding: 'utf-8' });

  readStream.on('data', chunk => {
    console.log(`Chunk de ${path}:`, chunk);
  });

  readStream.on('end', () => {
    console.log(`Leitura de ${path} concluída.\n`);
  });

  readStream.on('error', err => {
    console.error(`Erro ao ler ${path}:`, err.message);
  });
}

readFileWithStream('input1.txt');
readFileWithStream('input2.txt');

