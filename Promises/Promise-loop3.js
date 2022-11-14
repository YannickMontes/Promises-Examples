const { log } = require('../utils');

const loop = () =>
{
	return Promise.resolve().then( () =>{
		for(let i=0; i<1000000000; i++){ }
		return '👻 Loop done';
	});

};

log('🍙 Traitement synchrone 1');

loop().then(result => log(result));

log('🥔 Traitement synchrone 3');