const { log, sleep } = require('../utils');
const { getFruit } = require('./getFruit');

const makeSmoothie = async () => {
	const kiwi = getFruit('kiwi');
	const banana = getFruit('banana');

	const smoothie = await Promise.all([kiwi, banana]);

	return smoothie;
};

log('🍙 Traitement synchrone 1');
makeSmoothie().then(smoothie => log(smoothie));
log('🥔 Traitement synchrone 2');