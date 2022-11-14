const { log, sleep } = require('../utils');
const { getFruit } = require('./getFruit');

log('🍙 Traitement synchrone 1');
log(getFruit('kiwi'));
log('🥔 Traitement synchrone 2');