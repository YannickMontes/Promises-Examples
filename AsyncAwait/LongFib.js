const { doFib } = require("./Fibonnaci");

async function waitFib()
{
	let fib1 = doFib(40, 1);
	let fib2 = doFib(40, 2);
	let fib3 = doFib(40, 3);
	let fib4 = doFib(40, 4);
	let fib5 = doFib(40, 5);
	let fib6 = doFib(40, 6);
	let fib7 = doFib(40, 7);
	let fib8 = doFib(40, 8);
	let fib9 = doFib(40, 9);
	let fib10 = doFib(40, 10);

	const values = await Promise.all([
		fib1,
		fib2,
		fib3,
		fib4,
		fib5,
		fib6,
		fib7,
		fib8,
		fib9,
		fib10,
	]);

	console.log(values);
}

waitFib();