const { log, sleep } = require('../utils');
const { getFruit } = require('./getFruit');

log('🍙 Traitement synchrone 1');
getFruit('kiwi').then(fruit => log(fruit));
log('🥔 Traitement synchrone 2');