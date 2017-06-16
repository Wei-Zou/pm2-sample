'use strict';

const fs = require('fs');

const argv = require('yargs')
  .usage('Usage: $0 [-o <Output file>]\n')
  .options({
    o: {
      describe: 'output file',
      demandOption: true
    }
  })
  .help('h')
  .argv;

fs.writeFile(argv.o, 'Hello World!', (err) => {
  if (err) {
    console.log(err);
    throw err;
  }

  console.log('The file has been saved!');
  process.send && process.send('ready');
});
