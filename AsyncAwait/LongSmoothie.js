const { log, sleep } = require('../utils');
const { getFruit } = require('./getFruit');

const makeSmoothie = async () => {
	const kiwi = await getFruit('kiwi');
	const banana = await getFruit('banana');

	return [kiwi, banana];
};

log('🍙 Traitement synchrone 1');
makeSmoothie().then(smoothie => log(smoothie));
log('🥔 Traitement synchrone 2');