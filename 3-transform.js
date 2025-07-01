const fs = require('fs');
const { Transform } = require('stream');

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const upperChunk = chunk.toString().toUpperCase();
    this.push(upperChunk);
    callback();
  }
});

function transformFile(inputPath, outputPath) {
  const reader = fs.createReadStream(inputPath, 'utf-8');
  const writer = fs.createWriteStream(outputPath);

  reader.pipe(upperCaseTransform).pipe(writer);

  writer.on('finish', () => {
    console.log(`Transformação e gravação de ${outputPath} concluída.`);
  });

  reader.on('error', err => console.error(`Erro na leitura: ${err.message}`));
  writer.on('error', err => console.error(`Erro na escrita: ${err.message}`));
}

transformFile('input1.txt', 'output1.txt');
transformFile('input2.txt', 'output2.txt');
