const { sleep } = require('../utils');

const getFruit = async (name) => {
	const fruits = {
		tomato: '🍅',
		banana: '🍌',
		kiwi: '🥝',
		strawberry: '🍓' 
	}

	await sleep(1000);

	return fruits[name];
}

module.exports =
{
	getFruit
}