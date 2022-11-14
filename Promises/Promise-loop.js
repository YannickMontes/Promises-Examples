const { log } = require('../utils');

const loop = () =>
{
	for(let i=0; i<1000000000; i++){}
	return '👻 Loop done';
};

log('🍙 Traitement synchrone 1');

log(loop());

log('🥔 Traitement synchrone 3');