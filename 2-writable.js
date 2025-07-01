const fs = require('fs');

function writeFileWithStream(path, lines) {
  const writeStream = fs.createWriteStream(path);

  lines.forEach(line => writeStream.write(line + '\n'));

  writeStream.end();

  writeStream.on('finish', () => {
    console.log(`Gravação de ${path} finalizada.`);
  });

  writeStream.on('error', err => {
    console.error(`Erro ao gravar ${path}:`, err.message);
  });
}

writeFileWithStream('saida1.txt', ['Primeira linha do arquivo 1', 'Segunda linha do arquivo 1']);
writeFileWithStream('saida2.txt', ['Primeira linha do arquivo 2', 'Segunda linha do arquivo 2']);
