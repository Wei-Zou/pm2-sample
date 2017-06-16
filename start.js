'use strict';

const _ = require('lodash');
const argv = require('yargs').argv;

const args = [
  '-c',
  argv.c
];

_.forEach(['p', 'r'], (opt) => {
  if (argv[opt]) {
    args.push(`-${opt}`);
    args.push(argv[opt]);
  }
});

require('rejoice').start({ args });
