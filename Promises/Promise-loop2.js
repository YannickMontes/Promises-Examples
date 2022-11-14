const { log } = require('../utils');

const loop = () =>
{
	return new Promise((resolve, reject) =>{
		for(let i=0; i<1000000000; i++){ }
		resolve('👻 Loop done');
	});

};

log('🍙 Traitement synchrone 1');

loop().then(result => log(result));

log('🥔 Traitement synchrone 3');