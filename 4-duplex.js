const { Duplex } = require('stream');

class EchoDuplex extends Duplex {
  constructor(options) {
    super(options);
    this.storage = [];
  }

  _write(chunk, encoding, callback) {
    const data = chunk.toString();
    console.log('Escrevendo:', data);
    this.storage.push(data);
    callback();
  }

  _read(size) {
    const chunk = this.storage.shift() || null;
    if (chunk) {
      console.log('Lendo de volta:', chunk);
      this.push(chunk);
    } else {
      this.push(null);
    }
  }
}

const duplex = new EchoDuplex();

duplex.write('Olá Duplex!\n');
duplex.write('Outro dado aqui.\n');
duplex.end();

duplex.on('data', chunk => {
  // Apenas para acionar a leitura
});
