const { log } = require('../utils');

function fibonacci(n)
{
	return n < 1 ? 0
		: n <= 2 ? 1
			: fibonacci(n - 1) + fibonacci(n - 2);
}

async function doFib(iterations, i)
{
	return new Promise((resolve) => {
		const result = fibonacci(iterations);
		log(`Fibonnaci ${i} done.`);
		resolve(result);
	});
}

module.exports =
{
	doFib
}