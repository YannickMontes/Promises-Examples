const tick = Date.now();

const log = (toLog) => console.log(`${toLog} \n Elapsed Time: ${Date.now() - tick}ms`);

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
	log,
	sleep
}