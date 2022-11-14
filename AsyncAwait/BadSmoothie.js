const { log, sleep } = require('../utils');
const { getFruit } = require('./getFruit');

const makeSmoothie = async () => {
	try
	{
		const kiwi = getFruit('kiwi');
		const banana = getFruit('banana');

		const smoothie = await Promise.all([kiwi, banana]);

		throw '💩 Error';
  
		return smoothie;
	}
	catch(error)
	{
		console.log(error);
		return '😐 MakeSmoothie error'; 
	}
  };

log('🍙 Traitement synchrone 1');
makeSmoothie()
	.then(smoothie => log(smoothie))
	.catch(error => log(error));
log('🥔 Traitement synchrone 2');